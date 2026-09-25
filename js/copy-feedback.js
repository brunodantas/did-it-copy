// The proposed copy feedback: a flash for a confirmation, a shake for a failure signal.

const FLASH_MS = 200;
const shakeTimers = new WeakMap();

// A page can force either motion version through data-motion on the root, as the Demo's toggle does.
const reducedMotion = () => {
  const forced = document.documentElement.dataset.motion;
  return forced ? forced === "reduce" : matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// A held key repeats the copy many times a second, and WCAG 2.3.1 allows at most three flashes.
let keyRepeating = false;
addEventListener("keydown", (event) => { keyRepeating = event.repeat; }, { capture: true });
addEventListener("keyup", () => { keyRepeating = false; }, { capture: true });

// Mac copies with Cmd+C only and other systems with Ctrl+C only, so the other modifier is not a copy.
const isMac = /mac|iphone|ipad/i.test(navigator.userAgentData?.platform ?? navigator.platform);

export const copyKeyLabel = isMac ? "⌘" : "Ctrl";

export function isCopyShortcut(event) {
  const modifier = isMac ? event.metaKey && !event.ctrlKey : event.ctrlKey && !event.metaKey;
  return modifier && !event.altKey && !event.shiftKey && !event.repeat && event.key.toLowerCase() === "c";
}

export function selectionIsEmpty() {
  return String(getSelection() ?? "") === "";
}

export function flashCopiedRegion() {
  const selection = getSelection();
  const rects = [];
  for (let i = 0; i < selection.rangeCount; i++) rects.push(...textRects(selection.getRangeAt(i)));
  flashRects(rects);
}

// A copy with no copied region flashes its trigger instead, in the trigger's own shape.
export function flashTrigger(element) {
  flashRects([element.getBoundingClientRect()], getComputedStyle(element).borderRadius);
}

export function shake(element) {
  element.classList.remove("copy-shake");
  void element.offsetWidth; // restarts the animation when a second failed copy lands mid-shake
  element.classList.add("copy-shake");
  // A timer rather than animationend, because the reduced-motion outline has no animation to end.
  const shakeMs = parseFloat(getComputedStyle(element).getPropertyValue("--copy-shake-ms"));
  clearTimeout(shakeTimers.get(element));
  shakeTimers.set(element, setTimeout(() => element.classList.remove("copy-shake"), shakeMs));
}

// A range's own rects include the boxes of wholly selected elements, which would stack the flash over their text.
function textRects(range) {
  const root = range.commonAncestorContainer;
  if (root.nodeType === Node.TEXT_NODE) return [...range.getClientRects()];
  const rects = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!range.intersectsNode(node)) continue;
    const part = document.createRange();
    part.selectNodeContents(node);
    if (node === range.startContainer) part.setStart(node, range.startOffset);
    if (node === range.endContainer) part.setEnd(node, range.endOffset);
    rects.push(...part.getClientRects());
  }
  return rects;
}

function flashRects(rects, borderRadius) {
  if (keyRepeating) return;
  for (const rect of rects) {
    if (!rect.width || !rect.height) continue;
    const overlay = document.createElement("div");
    overlay.className = "copy-flash";
    overlay.setAttribute("aria-hidden", "true");
    Object.assign(overlay.style, {
      left: `${rect.left + scrollX}px`,
      top: `${rect.top + scrollY}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      borderRadius,
    });
    document.body.append(overlay);
    if (reducedMotion()) {
      setTimeout(() => overlay.remove(), FLASH_MS);
    } else {
      overlay
        .animate([{ opacity: 1 }, { opacity: 0 }], { duration: FLASH_MS, easing: "ease-out" })
        .finished.then(() => overlay.remove());
    }
  }
}

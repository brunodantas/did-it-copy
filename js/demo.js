import { copyKeyLabel, flashCopiedRegion, flashTrigger, isCopyShortcut, selectionIsEmpty, shake } from "./copy-feedback.js";

// The Demo answers every copy with the proposed feedback, except in the panel marked data-silent, which behaves like every desktop today.

const silentPanel = document.querySelector(".panel[data-silent]");
const feedbackPanel = document.querySelector(".panel:not([data-silent])");
const motionToggle = document.getElementById("motion-toggle");

for (const label of document.querySelectorAll("[data-copy-key]")) label.textContent = copyKeyLabel;

function inSilentPanel(node) {
  const element = node?.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  return Boolean(element?.closest("[data-silent]"));
}

function setReducedMotion(on) {
  document.documentElement.dataset.motion = on ? "reduce" : "full";
  motionToggle.checked = on;
}

setReducedMotion(matchMedia("(prefers-reduced-motion: reduce)").matches);
motionToggle.addEventListener("change", () => setReducedMotion(motionToggle.checked));

// A selection that touches the silent panel, a select-all included, stays silent, so that panel never changes on screen.
document.addEventListener("copy", () => {
  const selection = getSelection();
  if (selectionIsEmpty()) return;
  for (let i = 0; i < selection.rangeCount; i++) if (selection.getRangeAt(i).intersectsNode(silentPanel)) return;
  flashCopiedRegion();
});

// A failed copy fires no copy event in some browsers, so the key press is the only way to catch it.
document.addEventListener("keydown", (event) => {
  if (!isCopyShortcut(event) || !selectionIsEmpty()) return;
  const focused = document.activeElement;
  const target = focused && focused !== document.body ? focused : feedbackPanel;
  if (!inSilentPanel(target)) shake(target);
});

// A copy button has no copied region, so the button itself flashes, and a refused clipboard write shakes it.
for (const button of document.querySelectorAll("[data-copy-button]")) {
  const content = button.closest(".panel-link").querySelector("code").textContent;
  button.addEventListener("click", async () => {
    const silent = inSilentPanel(button);
    try {
      await navigator.clipboard.writeText(content);
      if (!silent) flashTrigger(button);
    } catch {
      if (!silent) shake(button);
    }
  });
}

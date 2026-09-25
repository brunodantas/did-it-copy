import { copyKeyLabel, flashCopiedRegion, isCopyShortcut, selectionIsEmpty, shake } from "./copy-feedback.js";

// Home shows the same sentence twice in time: first silent like every desktop today, then with the proposed copy feedback.

const FIRST_VERDICT = "Nothing on screen changed. The only way to know is to paste it somewhere.";
const RECOPY_VERDICT = "Nothing on screen changed, so you pressed it again. Most people do.";

const sentence = document.getElementById("sentence");
const answer = document.getElementById("answer");
const heading = document.getElementById("answer-heading");
const verdict = document.getElementById("verdict");
const toggle = document.getElementById("feedback-toggle");
const skip = document.getElementById("skip");

let copiesWithoutFeedback = 0;
let feedbackOn = false;

for (const label of document.querySelectorAll("[data-copy-key]")) label.textContent = copyKeyLabel;
verdict.textContent = FIRST_VERDICT;

function reveal() {
  answer.hidden = false;
  skip.hidden = true;
}

function setCopyFeedback(on) {
  feedbackOn = on;
  toggle.setAttribute("aria-pressed", String(on));
  toggle.textContent = on ? "Turn the flash off" : "Turn on the flash, then copy again";
  heading.textContent = on ? "Now it answers." : "Did it work?";
  verdict.textContent = on
    ? `Copy the sentence again. Press ${copyKeyLabel} C with nothing selected, and what has focus shakes.`
    : FIRST_VERDICT;
}

// The copy event covers every successful copy, including a phone's long-press menu.
document.addEventListener("copy", () => {
  if (selectionIsEmpty()) return;
  if (feedbackOn) return flashCopiedRegion();
  copiesWithoutFeedback += 1;
  verdict.textContent = copiesWithoutFeedback > 1 ? RECOPY_VERDICT : FIRST_VERDICT;
  reveal();
});

// A failed copy fires no copy event in some browsers, so the key press is the only way to catch it.
document.addEventListener("keydown", (event) => {
  if (!isCopyShortcut(event) || !selectionIsEmpty()) return;
  if (!feedbackOn) return reveal();
  const focused = document.activeElement;
  shake(focused && focused !== document.body ? focused : sentence);
});

toggle.addEventListener("click", () => setCopyFeedback(!feedbackOn));

skip.addEventListener("click", () => {
  reveal();
  toggle.focus();
});

# did-it-copy

A research site and proposal arguing that operating systems should give visible feedback when a user copies.

## Language

### The act

**Copy**:
A user command that puts content on the clipboard without changing what is on screen. This covers keyboard shortcuts, menu items such as "Copy link", and copy buttons in pages or apps.
_Avoid_: Yank, clip, grab

**Copied content**:
The content a copy put on the clipboard.
_Avoid_: Selection (the selection is only one way to name copied content), clipboard contents

**Copied region**:
The on-screen area that shows the copied content, such as highlighted text or a selected file icon. Some copies have none.
_Avoid_: Selection, highlight

**Trigger**:
The control or menu item that issued a copy, such as a copy button or a "Copy link" item.
_Avoid_: Source, origin

**Failed copy**:
A copy command that put nothing new on the clipboard, for example because nothing was selected, the app blocked it, or the wrong window had focus.
_Avoid_: Empty copy, no-op

**Re-copy**:
A second copy of the same content shortly after the first, made because the user could not tell whether the first one worked.
_Avoid_: Double copy, repeat press

### The response

**Copy feedback**:
Any signal the system gives in response to a copy command. It is either a confirmation or a failure signal.
_Avoid_: Copy notification, toast

**Confirmation**:
Copy feedback saying the copy succeeded.
_Avoid_: Success feedback, "Copied!"

**Flash**:
A brief highlight drawn over the copied region, or over the trigger when there is no copied region. It is the proposed form of confirmation.
_Avoid_: Pulse, blink, highlight-on-yank

**Shake**:
A brief side-to-side movement of the focused element. It is the proposed form of the failure signal.
_Avoid_: Wiggle, bounce

**Failure signal**:
Copy feedback saying the copy put nothing on the clipboard.
_Avoid_: Error, alert

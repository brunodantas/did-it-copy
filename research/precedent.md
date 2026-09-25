**Verdict: no system in this check confirms an ordinary copy.** iOS, iPadOS, macOS 26, Windows 10 and 11, ChromeOS, iTerm2 and Kitty all put a selection on the clipboard and show nothing. Confirmations do ship, but only for special copies, and most of those have no copied region on screen: a screenshot, a link, an image, a block of terminal output copied from a button. Windows' Snipping Tool, ChromeOS, Chrome and iTerm2's secondary copy buttons confirm those, and macOS plays its shutter sound for a screenshot sent to the clipboard. The ticket takes the iOS three-finger pinch as the known case, and no Apple doc describes what it shows. WCAG 4.1.3 Status Messages is the right criterion for a "Copied" message, and WCAG2ICT applies it to operating systems as written.

Primary means the vendor's own documentation, its source code, or a W3C document. A maintainer's reply in the project's own tracker counts as primary for that project's intent. CONFIRMED, REFUTED and UNCONFIRMED refer to what those sources say. No doc describing a feature is not proof the feature is absent, so an absence stays UNCONFIRMED unless the source code shows it. Quotes are checked against the raw page text, with curly quotes made straight. Pages were read on 2026-09-25.

## Summary

- iOS and iPadOS document the three-finger pinch as a way to copy, and say nothing about what appears afterwards. The banner is UNCONFIRMED. [1] [2] [4] [5]
- No Apple doc describes a confirmation for Copy from the edit menu, Command-C or the share sheet on iOS or iPadOS. UNCONFIRMED. [1] [3] [9] [10]
- No Apple doc describes a confirmation for a copy in macOS 26. The Mac guide mentions only that Copy is dimmed when it cannot run. UNCONFIRMED. [12]
- macOS 26 added Clipboard history to Spotlight, which lets a user check a copy after the fact. It shows nothing at the moment of copy. [12] [13] [14]
- A screenshot sent to the clipboard plays the shutter sound and shows no thumbnail, by direct observation on macOS 27.0. No Apple doc describes the sound. [15] [56]
- Apple's HIG says to confirm only significant tasks, because people "only need to know when it doesn't" succeed. [7]
- No Microsoft doc describes a confirmation for Ctrl+C or Edit > Copy on Windows 10 or 11. UNCONFIRMED. [19]
- Windows confirms one kind of copy by default. The Snipping Tool shows a notification after a screenshot goes to the clipboard. [24]
- Windows 11's Suggested actions popped up after a user copied a phone number or date. It offered actions, not a confirmation, and Microsoft deprecated it in December 2024. [20] [21] [22] [23]
- Windows Terminal writes to the clipboard and shows nothing. REFUTED as a source of copy feedback, from the source code. [25] [26]
- iTerm2 copies silently on Cmd-C, on selection and in Copy Mode. A "Copied" toast appears only on secondary copy buttons. [32] [34]
- iTerm2 has had an open request since 2020 to flash on copy on selection. The maintainer asked what kind of indicator. [36]
- Kitty copies silently. Its maintainer questioned the need for copy feedback in May 2026: "A copy never fails unless there is nothing selected". [37] [38] [39]
- ChromeOS confirms a screenshot copy, a sharesheet Copy and a Capture mode text copy, each time. Plain Ctrl+C gets no per-copy confirmation. [40] [43] [44] [45]
- The ChromeOS clipboard history nudges fire on a copy but are capped at three, a day apart. They teach the shortcut and do not confirm each copy. [42] [43]
- Chrome on desktop shows "Link copied" and "Image copied" toasts from the page context menu, on by default since Chrome 132. Copying text shows no toast. [47] [48] [49] [52]
- WCAG 4.1.3 is the relevant criterion. Its definition of a status message covers "the success or results of an action". [50] [51]
- WCAG2ICT says 4.1.3 "applies directly as written" to non-web software, through the platform's accessibility services. [54]

## Findings

### iOS and iPadOS

The pinch is documented as a gesture and nothing more. The iPhone and iPad guides both list "Copy: Pinch closed with three fingers" [1] [2]. Apple introduced the gestures at WWDC 2019: "Pinching three fingers in will copy, and then pinching them out will paste" [4]. The HIG's gesture table says "Copy selected text (pinch in); paste copied text (pinch out)" [5]. None of the four describes the banner that appears at the top of the screen after a pinch. The same iPhone guide does document undo's on-screen control, "Swipe left with three fingers, then tap ... or Undo at the top of the screen" [1]. So Apple documents the undo control and not the copy banner. The banner is UNCONFIRMED from Apple's docs.

Menu, keyboard and share sheet copies have no documented result. The guides say to tap Copy and stop there [1] [2]. The share sheet's Copy action is "A type of activity that posts the provided content to the pasteboard" [9]. UIPasteboard's overview describes a system notice only for reading: "Starting in iOS 14, the system notifies the user when an app gets general pasteboard content" [10]. The iOS 16 paste prompt is also about reading. Programmatic pasting "raises a user alert that prompts the user for approval" [11]. Both are clipboard feedback for paste, not copy. Apple describes Universal Clipboard with "Universal Clipboard isn't a feature that you see" [3].

The HIG gives a reason for the silence. Its Feedback page says "When it makes sense, confirm that a significant action or task has completed", with Apple Pay as the example [7]. It goes on: "It's generally best to reserve this type of confirmation for activities that are sufficiently important — because people typically expect their action or task to succeed, they only need to know when it doesn't" [7]. The same page says "Show people when a command can't be carried out and help them understand why" [7]. A copy that did nothing is exactly that case, and it gets no signal. The Undo and redo page asks apps to show what an undo did, since "it's crucial to highlight the result of each undo and redo" [8]. Nothing in the HIG asks the same of copy. The Edit menus page says an edit menu "doesn't require confirmation before performing its actions" [6]. That sentence is about asking before an action, not reporting after it, so it says nothing either way about copy feedback.

**Answer.** UNCONFIRMED for every copy path, the pinch included. No Apple doc describes a confirmation. Whether the pinch banner also appears for edit-menu Copy or Command-C can only be settled on a device.

### macOS 26 Tahoe

The Mac guide gives Copy no result. "How to copy and paste on Mac" covers the menu, the shortcut and the context menu. Its only feedback is for failure: "When cut, copy, or paste isn't possible, its menu item is dimmed so that you can't choose it" [12]. The HIG's menu bar page defines Copy as "Duplicates the selected data and stores it on the Clipboard" [18]. The menu title highlight when a shortcut fires is out of scope here and is covered in `menu-title-lead.md`. No Apple doc for macOS 26 or 27 describes it.

Clipboard history is a check, not a confirmation. Apple's page says to use "Clipboard history in macOS Tahoe or later to browse through text, images, links, and files you recently copied" [12]. The user opens it from Spotlight with a button "or Press Command-4" [13]. The first search may ask the user to "click Enable in Spotlight" [13]. The release notes list it as a way to "view your clipboard history" [14]. Nothing in these pages appears when the user copies.

Other copy paths are documented without feedback. A screenshot goes to the clipboard if you "press and hold the Control key while you press the other keys" [15]. The page describes the thumbnail that "floats in the bottom-right corner of the screen for a few seconds" for saved captures only [15]. On macOS 27.0, build 26A428, a Control screenshot plays the shutter sound and shows no thumbnail, by direct observation [56]. The sound is the only signal this copy gets. No Apple doc mentions it. The Mac guide repeats that "Universal Clipboard isn't a feature that you see" [16]. VoiceOver's Announcements settings list no option for copy or the clipboard [17].

Apple's guide has a macOS 27 edition, and this check covers macOS 26 as the ticket asks. The copy and paste article is written for "macOS Tahoe or later" [12].

**Answer.** UNCONFIRMED. No Apple doc describes a confirmation for any copy in macOS 26. Clipboard history is the only documented way to check one. A screenshot sent to the clipboard plays the shutter sound, observed on macOS 27.0 rather than 26.

### Windows 10 and 11

The clipboard help describes the copy and nothing after it. "When you copy content on your PC, it's automatically copied to your clipboard for you to paste" [19]. Clipboard history, Win+V, is a list the user opens. No Microsoft doc describes a signal at copy time. The Narrator guide documents copying Narrator's own speech, and not an announcement for a user's copy [27].

The Snipping Tool confirms. "The screenshot is automatically copied to your clipboard. A notification also appears once you're finished taking a screenshot" [24]. The source is a Microsoft Office support page, and it names no Windows version.

Suggested actions reacted to a copy and then went away. Build 25115 of May 2022 introduced it: after copying a phone number, "Windows will pop up an inline light dismissible UI that suggests ways to call the phone number" [20]. The support page says "suggested actions appear when you copy a phone number or future date" [21]. The popup proved the copy happened, but its job was to offer an action. Microsoft announced the deprecation in December 2024 [23]. Beta build 22635.4660 wrote "With this build, we're beginning to disable the feature" [22].

Windows Terminal shows nothing. Its docs say to "Use the `copyOnSelect` global setting to automatically copy newly selected text to your clipboard" [25]. In the source, `TerminalPage::_copyToClipboard` opens the clipboard and writes to it, with no toast and no UI Automation announcement [26].

One newer copy button is undocumented. Build 23403 added "a copy button for quickly copying two-factor authentication (2FA) codes in notification toasts" [28]. The post does not say what follows the click. UNCONFIRMED.

Microsoft's design guidance does not ask apps to confirm. The WinUI copy and paste article covers the API only and notes "Many of the default XAML controls you can use to create apps already support clipboard operations" [30]. The visual feedback guidance, which is about touch and input, says "Don't display feedback unless it is absolutely necessary" [31].

PowerToys, which Microsoft ships apart from Windows, does confirm. Its Color Picker shows "Copied to clipboard", a "Message that appears when a user clicked a button that copies the value" [29].

**Answer.** UNCONFIRMED for an ordinary copy. CONFIRMED for a Snipping Tool screenshot, which shows a notification. The spec's survey line that Windows confirms nothing by default needs this exception.

### iTerm2 and Kitty

iTerm2's main copy path is silent. The docs say that with the setting on, "text is copied to the clipboard immediately upon selection" [32], and the default is on [34, `sources/iTermPreferences.m` L484]. `copyString:` writes the pasteboard and the paste history and returns [34, `sources/PTYTextView.m` L3345 to 3359]. Copy on selection, Cmd-C and Copy Mode all end there. Copy Mode copies and then exits with `self.enabled = NO;` [34, `sources/iTermCopyModeHandler.m` L418] [33].

iTerm2 confirms some secondary copies. The "Copy Command" menu item shows `showToastWithMessage:@"Command Copied"` [34, `sources/PTYTextView.m` L5699]. The hover button that copies a block of output shows `showToastWithMessage:@"Copied"` [34, `sources/PTYTextView.m` L5794]. Neither is on the default copy path.

iTerm2 signals one failure. When a program writes to the clipboard with OSC 52 and access is off, which is the default [34, `sources/iTermPreferences.m` L486], it says "The terminal attempted to access the clipboard but it was denied." [34, `sources/PTYSession.m` L16622]. An allowed write is silent.

iTerm2 users have asked for copy feedback. Issue 7511, "Show notification when the selected text has been automatically copied to the pasteboard", was closed in 2019 once the maintainer found the reporter was pasting before the copy ran [35]. Issue 8966, "Flash visual indicator on "copy on selection"", has been open since June 2020 on the "Future Release" milestone. George Nachman replied "What kind of indicator did you have in mind?" and the next reply asked for something like the "Flash Visual Bell" indicator [36].

Kitty is silent on every path. `copy_on_select` defaults to `'no'` [38, `kitty/options/definition.py` L992 to 994]. The `copy_to_clipboard` action runs `if text: set_clipboard_string(text)` [38, `kitty/window.py` L2601 to 2602], so a copy with nothing selected does nothing and shows nothing. OSC 52 writes are allowed by default: "The default is to allow writing to the clipboard and primary selection and to ask for permission when a program tries to read from the clipboard" [37]. A refused legacy OSC 52 write is dropped without a message [38, `kitty/clipboard.py` L621].

Kitty's maintainer questioned the need. In Discussion 10050, "Visual Feedback on Successful Copy", Kovid Goyal answered on 21 May 2026: "Not sure why you want this? A copy never fails unless there is nothing selected, which is visually obvious anyway." [39]. That is the argument the proposal has to answer.

**Answer.** iTerm2 has no feedback for an ordinary copy, CONFIRMED from the source. Its toasts cover secondary buttons only. Kitty has no copy feedback, CONFIRMED from the source and the maintainer.

### ChromeOS

A plain copy gets nothing. The shortcuts page lists "Ctrl + c" with the tip "You can select up to 5 items to copy to your clipboard" [41]. When a copy lands in clipboard history, the code shows one of two nudges and nothing else [42].

The nudges are capped. The duplicate nudge "Shows when a user copies data that is already in the clipboard history" [42, `clipboard_nudge_constants.h` L26]. It reads "Copied item already in clipboard. Use $1 + V to view." [43, `IDS_ASH_MULTIPASTE_DUPLICATE_COPY_NUDGE`]. The cap is `kCappedNudgeShownLimit = 3` with `kCappedNudgeMinInterval = base::Days(1)` [42, L60 and L61]. So a user sees it three times at most, a day apart. It teaches the shortcut and does not confirm each copy.

Three copies are confirmed every time.

- A screenshot. `CopyImageToClipboard(image);` is followed by `ShowPreviewNotification(` [44, L2355 and L2356], whose banner is "Copied to clipboard" [43, `IDS_ASH_SCREEN_CAPTURE_SCREENSHOT_COPIED_TO_CLIPBOARD`]. The help page says "Screenshots and recordings are automatically copied to your clipboard" [40]. The code path I read confirms images only.
- Capture mode's Copy text button calls `ShowTextCopiedToast();` [44, L2225], which reads "Text copied to Clipboard" [43, `IDS_ASH_SCREEN_CAPTURE_TEXT_COPIED_TOAST`].
- The sharesheet Copy action shows a "system toast at the bottom of the screen that notifies the user that their selected data has been copied to the clipboard", reading "Copied" [45, `IDS_SHARESHEET_COPY_TO_CLIPBOARD_SUCCESS_TOAST_LABEL`].

ChromeVox has a spoken string "copy $1.", described as "Spoken when the browser's copy command is invoked" [46, `IDS_CHROMEVOX_COPY`]. Whether it fires for a Ctrl+C in another app is UNCONFIRMED.

Chrome confirms two copies on every desktop platform, ChromeOS included. After Copy link address in the page context menu, Chrome shows `ToastId::kLinkCopied` [47, L1204 to 1211], reading "Link copied" [48, `IDS_LINK_COPIED_TOAST_BODY`]. After Copy image it shows "Image copied" [47, L5236 to 5239] [48, `IDS_IMAGE_COPIED_TOAST_BODY`]. Both are skipped only on Android, `#if !BUILDFLAG(IS_ANDROID)`, and both flags are `FEATURE_ENABLED_BY_DEFAULT` [49, L14 and L17]. The commit that turned the toasts on, "Enable the toast framework and the mvp toasts by default", first shipped in Chrome 132 [52]. A copied link or image has no copied region, and Chrome confirms those. Copying selected text, which has one, gets no toast.

**Answer.** CONFIRMED for screenshots, the sharesheet and Capture mode text, from the source. UNCONFIRMED for an ordinary Ctrl+C, where the only signal is a capped nudge.

### WCAG 4.1.3 Status Messages

4.1.3 fits a "Copied" message. The criterion, Level AA, reads "In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus" [50]. A status message is a change that "provides information to the user on the success or results of an action" [50, definition of status messages]. A copy confirmation is that. A dialog that takes focus is not: "Since the dialog takes focus, it is defined as a change of context and does not meet the definition of a status message" [51].

The Understanding document has no copy example. Its nearest is a popup "Saved in 'Wedding' album" [51]. It also says 4.1.3 does not ask for new messages: "The purpose of this success criterion is not to force authors to generate new status messages" [51]. So 4.1.3 says how a confirmation must reach a screen reader, not that one must exist.

The sufficient techniques split the two signals. A confirmation uses ARIA22, where "The aria live region role of status has an implicit aria-live value of polite" [53]. A failure signal falls under Situation B, "If a status message conveys a suggestion, or a warning on the existence of an error", which lists ARIA19 [51]. WAI-ARIA says an element with role status should not "receive focus as a result of change in status" [55].

WCAG2ICT carries 4.1.3 to operating systems. The markup clause would seem to exclude native UI, but the W3C note says 4.1.3 "applies directly as written, and as described in Intent from Understanding Success Criterion 4.1.3" [54]. Its Note 1 adds "This is typically enabled through the use of accessibility services of the user agent or other platform software" [54]. Platform software includes "desktop operating systems" [54]. The Understanding document already allows this route, "including direct access to accessibility APIs" [51].

Other criteria that touch the flash and the shake:

- 2.3.1 Three Flashes, Level A, fails content that "flashes more than three times in any one second period" [50]. One flash per copy passes.
- 2.3.3 Animation from Interactions, Level AAA, requires that "Motion animation triggered by interaction can be disabled" [50]. That covers the shake. WCAG2ICT "does not provide guidance on applying AAA success criteria to non-web ICT" [54].
- 1.4.1 Use of Color applies if the flash and the shake differ only by colour. They differ by motion, so it is met.
- 2.2.2 Pause, Stop, Hide applies only to motion that starts on its own and lasts more than five seconds. The flash does neither.

**Answer.** CONFIRMED. 4.1.3 is the relevant criterion for a "Copied" status message, and it reaches OS UI through WCAG2ICT. Whether a flash with no text counts as a status message is my reading. The Understanding document covers icons and sounds, not flashes.

## Open items

- Does iOS show the "Copy" banner after a three-finger pinch, and also after edit-menu Copy or Command-C on an iPad keyboard? UNCONFIRMED. No Apple doc describes it, so it needs a device.
- Does macOS 26 also play the shutter sound, with no thumbnail, for a screenshot sent to the clipboard? UNCONFIRMED. The observation is from macOS 27.0.
- Does anything follow a click on Windows 11's 2FA copy button or Click to Do's Copy? UNCONFIRMED, needs a device.
- Which Windows version added the Snipping Tool notification? UNCONFIRMED.
- When did ChromeOS turn the clipboard history refresh on by default? The duplicate nudge landed behind a flag in Chrome 116. UNCONFIRMED.
- The spec's survey says macOS, Windows, GNOME and KDE confirm nothing by default. Windows needs the Snipping Tool exception. GNOME and KDE are not checked here.

## Sources

1. Select, edit, and move text on iPhone. Apple Support, iPhone User Guide. https://support.apple.com/guide/iphone/select-and-edit-text-iph1a9cae52c/ios
2. Select, edit, and move text on iPad. Apple Support, iPad User Guide. https://support.apple.com/guide/ipad/select-edit-and-move-text-ipadac2fea3c/ipados
3. Copy and paste between your iPhone and other Apple devices. Apple Support, iPhone User Guide. https://support.apple.com/guide/iphone/iph220ea8dca/ios
4. Modernizing Your UI for iOS 13. WWDC 2019, session 224, transcript. https://developer.apple.com/videos/play/wwdc2019/224/
5. Gestures. Apple Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/gestures
6. Edit menus. Apple Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/edit-menus
7. Feedback. Apple Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/feedback
8. Undo and redo. Apple Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/undo-and-redo
9. UIActivity.ActivityType copyToPasteboard. Apple Developer Documentation. https://developer.apple.com/documentation/uikit/uiactivity/activitytype-swift.struct/copytopasteboard
10. UIPasteboard. Apple Developer Documentation. https://developer.apple.com/documentation/uikit/uipasteboard
11. UIPasteControl. Apple Developer Documentation. https://developer.apple.com/documentation/uikit/uipastecontrol
12. How to copy and paste on Mac. Apple Support, article 102553. https://support.apple.com/en-us/102553
13. Search your Clipboard history in Spotlight on Mac. Apple Support, Mac User Guide for macOS 26. https://support.apple.com/guide/mac-help/search-your-clipboard-history-mchl40d5b86b/26/mac/26
14. What's new in the updates for macOS Tahoe 26. Apple Support, article 122868. https://support.apple.com/en-us/122868
15. Take screenshots or screen recordings on Mac. Apple Support, Mac User Guide for macOS 26. https://support.apple.com/guide/mac-help/take-screenshots-or-screen-recordings-mh26782/26/mac/26
16. Copy and paste between devices. Apple Support, Mac User Guide for macOS 26. https://support.apple.com/guide/mac-help/copy-and-paste-between-devices-mchl70368996/26/mac/26
17. Announcements tab. Apple Support, VoiceOver Utility User Guide. https://support.apple.com/guide/voiceover/announcements-tab-cpvouverbann/mac
18. The menu bar. Apple Human Interface Guidelines, Edit menu. https://developer.apple.com/design/human-interface-guidelines/the-menu-bar
19. Using the clipboard. Microsoft Support. https://support.microsoft.com/en-us/windows/apps/using-the-clipboard
20. Announcing Windows 11 Insider Preview Build 25115. Windows Insider Blog, 11 May 2022. https://blogs.windows.com/windows-insider/2022/05/11/announcing-windows-11-insider-preview-build-25115/
21. Use suggested actions on your PC. Microsoft Support. https://support.microsoft.com/en-us/windows/apps/use-suggested-actions-on-your-pc
22. Announcing Windows 11 Insider Preview Build 22635.4660 (Beta Channel). Windows Insider Blog, 3 January 2025. https://blogs.windows.com/windows-insider/2025/01/03/announcing-windows-11-insider-preview-build-22635-4660-beta-channel/
23. Deprecated features in the Windows client. Microsoft Learn. Suggested actions row, announced December 2024. https://learn.microsoft.com/en-us/windows/whats-new/deprecated-features
24. Copy the window or screen contents. Microsoft Support, Office. https://support.microsoft.com/en-us/office/copy-the-window-or-screen-contents
25. Selection. Microsoft Learn, Windows Terminal. https://learn.microsoft.com/en-us/windows/terminal/selection
26. microsoft/terminal, `src/cascadia/TerminalApp/TerminalPage.cpp`, `_copyToClipboard` from L3627, commit 0b94a7e. https://github.com/microsoft/terminal/blob/0b94a7ea041a0b67f13ac281a645a82e077e4578/src/cascadia/TerminalApp/TerminalPage.cpp#L3627
27. Complete guide to Narrator. Microsoft Support, What's new, November 2024 entry. https://support.microsoft.com/en-us/accessibility/windows/narrator/complete-guide-to-narrator
28. Announcing Windows 11 Insider Preview Build 23403. Windows Insider Blog, 8 March 2023. https://blogs.windows.com/windows-insider/2023/03/08/announcing-windows-11-insider-preview-build-23403/
29. microsoft/PowerToys, Color Picker `Resources.resw`, L69 to 71, commit c512e06. https://github.com/microsoft/PowerToys/blob/c512e0632d537fe5a6e7f3400139e17cb5772327/src/modules/colorPicker/ColorPickerUI/Strings/en-us/Resources.resw#L69-L71
30. Copy and Paste in WinUI and UWP Apps. Microsoft Learn. https://learn.microsoft.com/en-us/windows/apps/develop/communication/copy-and-paste
31. Visual feedback. Microsoft Learn, Windows apps. https://learn.microsoft.com/en-us/windows/apps/develop/input/guidelines-for-visualfeedback
32. General settings. iTerm2 documentation. https://iterm2.com/documentation-preferences-general.html
33. Copy Mode. iTerm2 documentation. https://iterm2.com/documentation-copymode.html
34. gnachman/iTerm2 at tag v3.6.11, commit a7438fd. Cited by file and line. https://github.com/gnachman/iTerm2/tree/a7438fdf49b06dcb7476497c51f45a63a14b8ad2
35. iTerm2 issue 7511, "Feature - Show notification when the selected text has been automatically copied to the pasteboard". GitLab, opened 31 January 2019, closed. https://gitlab.com/gnachman/iterm2/-/issues/7511
36. iTerm2 issue 8966, "Feature Request: Flash visual indicator on "copy on selection"". GitLab, opened 23 June 2020, open. Maintainer reply 26 June 2020. https://gitlab.com/gnachman/iterm2/-/issues/8966
37. kitty.conf, `clipboard_control`. kitty documentation. https://sw.kovidgoyal.net/kitty/conf/#opt-kitty.clipboard_control
38. kovidgoyal/kitty at tag v0.49.1, commit c9896e8. Cited by file and line. https://github.com/kovidgoyal/kitty/tree/c9896e8c002b32591a232dc5996def2493132aaf
39. kitty Discussion 10050, "Visual Feedback on Successful Copy". GitHub, Kovid Goyal's reply of 21 May 2026. https://github.com/kovidgoyal/kitty/discussions/10050#discussioncomment-16999610
40. Take a screenshot or record your screen. Chromebook Help, answer 10474268. https://support.google.com/chromebook/answer/10474268?hl=en
41. Chromebook keyboard shortcuts. Chromebook Help, answer 183101. https://support.google.com/chromebook/answer/183101?hl=en
42. Chromium, `ash/clipboard/clipboard_nudge_constants.h`, main, read 2026-09-25. https://chromium.googlesource.com/chromium/src/+/refs/heads/main/ash/clipboard/clipboard_nudge_constants.h
43. Chromium, `ash/ash_strings.grd`, main, read 2026-09-25. Cited by message name. https://chromium.googlesource.com/chromium/src/+/refs/heads/main/ash/ash_strings.grd
44. Chromium, `ash/capture_mode/capture_mode_controller.cc`, main, read 2026-09-25. https://chromium.googlesource.com/chromium/src/+/refs/heads/main/ash/capture_mode/capture_mode_controller.cc
45. Chromium, `chrome/app/sharesheet_strings.grdp`, main, read 2026-09-25. https://chromium.googlesource.com/chromium/src/+/refs/heads/main/chrome/app/sharesheet_strings.grdp
46. Chromium, `chrome/browser/resources/chromeos/accessibility/strings/chromevox_strings.grdp`, main, read 2026-09-25. https://chromium.googlesource.com/chromium/src/+/refs/heads/main/chrome/browser/resources/chromeos/accessibility/strings/chromevox_strings.grdp
47. Chromium, `chrome/browser/renderer_context_menu/render_view_context_menu.cc`, main, read 2026-09-25. https://chromium.googlesource.com/chromium/src/+/refs/heads/main/chrome/browser/renderer_context_menu/render_view_context_menu.cc
48. Chromium, `chrome/app/generated_resources.grd`, main, read 2026-09-25. Cited by message name. https://chromium.googlesource.com/chromium/src/+/refs/heads/main/chrome/app/generated_resources.grd
49. Chromium, `chrome/browser/ui/toasts/toast_features.cc`, main, read 2026-09-25. https://chromium.googlesource.com/chromium/src/+/refs/heads/main/chrome/browser/ui/toasts/toast_features.cc
50. Web Content Accessibility Guidelines (WCAG) 2.2. W3C Recommendation. Success criteria 1.4.1, 2.2.2, 2.3.1, 2.3.3 and 4.1.3, and the definition of status messages. https://www.w3.org/TR/WCAG22/#status-messages
51. Understanding Success Criterion 4.1.3: Status Messages. W3C WAI, WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html
52. Chromium commit 6f629f3, "Enable the toast framework and the mvp toasts by default", 1 November 2024. First in Chrome 132.0.6813.0, per Chromium Dash. https://chromium.googlesource.com/chromium/src/+/6f629f3fc569ab553702d3cd6fa72e71e6a42e38
53. ARIA22: Using role=status to present status messages. W3C WAI, WCAG 2.2 Techniques. https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22
54. Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies (WCAG2ICT). W3C Group Note, 11 December 2025. Section on 4.1.3, Note 1; the definition of platform software; the notes on closed functionality and AAA criteria. https://www.w3.org/TR/wcag2ict-22/
55. Accessible Rich Internet Applications (WAI-ARIA) 1.2, role status. W3C Recommendation. https://www.w3.org/TR/wai-aria-1.2/#status
56. Direct observation of Control-Shift-Command-4 on macOS 27.0, build 26A428, by the site's author, 2026-09-25. The shutter sound played and no thumbnail appeared. Not a published source.

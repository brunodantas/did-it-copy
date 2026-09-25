**Verdict: Android is the only system checked that documents a confirmation for an ordinary copy.** Android 13 and later show an overlay with a preview after every clipboard write, and Google tells apps to drop their own toast. No doc or source shows iOS, iPadOS, macOS 26, Windows 10 and 11, ChromeOS, GNOME, KDE Plasma, iTerm2 or Kitty confirming one, and the source code confirms the silence for GNOME, KDE Plasma, iTerm2 and Kitty. ChromeOS shows only a nudge, three times at most. Confirmations do ship elsewhere, but only for special copies, and most of those have no copied region on screen: a screenshot, a link, an image, a block of terminal output copied from a button. Windows' Snipping Tool, ChromeOS, GNOME Shell, Chrome and iTerm2's secondary copy buttons confirm those, and macOS plays its shutter sound for a screenshot sent to the clipboard. Editors flash the copied region only when the user turns it on, and web copy buttons confirm only their own copies. Orca speaks after any Ctrl+C that changes the clipboard, and NVDA only after copies it makes itself. The desktop has proposals now: KDE confirmed "Show OSD after copy" in August 2026, and GNOME's design team opened a clipboard feedback issue in June 2026. The ticket takes the iOS three-finger pinch as the known case, and no Apple doc describes what it shows. WCAG 4.1.3 Status Messages is the right criterion for a "Copied" message, and WCAG2ICT applies it to operating systems as written.

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
- Android 13 and later show a system overlay with a preview for every clipboard write, and post "Text copied" to a polite live region. It closes after 6 seconds. CONFIRMED. Whether TalkBack reads the live region is UNCONFIRMED. [57] [58] [62] [63]
- Google "strongly recommend[s]" that apps drop their own copy toast on Android 13 and later, to avoid duplicate messages. [57]
- `EXTRA_IS_SENSITIVE` swaps the preview for "••••••" or "Tap to view", and the overlay still shows. That the overlay leaks copied text during screen sharing is UNCONFIRMED. [57] [60] [61] [62]
- No user setting or public app API turns the Android overlay off in AOSP, and it gives no signal for a failed copy. [62] [63] [64]
- KDE Klipper, GNOME Shell and GTK show nothing on an ordinary copy, CONFIRMED from the source. GNOME notifies only after its own screenshots. [104] [106] [107]
- In the 2024 KDE thread, Nate Graham called standard notifications for copy "really annoying" and suggested a tray-icon shake. "Too intrusive" was another poster's phrase. [100]
- Nate closed the 2024 bug WONTFIX in January 2026, citing the HIG. In August 2026 he confirmed a new request, now titled "Show OSD after copy". [101] [102] [103]
- GNOME's design tracker has had an open proposal since June 2026, whose first goal is "Show visible feedback when copying". [105]
- Every editor flash on copy is opt-in. Neovim's `vim.hl.on_yank` (150 ms, `IncSearch`) needs a user autocmd, and Vim's `hlyank` (300 ms) needs `packadd`. [67] [68] [70] [71]
- Emacs's pulsar pulses the region after `kill-ring-save` once `pulsar-global-mode` is on, by default since 1.3.0. Core Emacs blinks the cursor to the mark or prints "Copied text from", and does neither when the region is highlighted. [72] [73] [74] [75]
- VS Code's copy path shows nothing. VSCodeVim (off by default, 200 ms) and Highlight on Copy (28,959 installs, 200 ms) add a flash. [76] [77] [79] [80]
- JetBrains IDEs add no highlight when copying a selection. IdeaVim's `highlightedyank` (300 ms) and a small third-party plugin add one. Zed flashes for 200 ms in its opt-in vim mode, and Helix prints a status line on every yank. [81] [82] [83] [85] [86]
- NVDA says "Copied to clipboard" only for copies it makes itself, browse-mode Ctrl+C among them. A Ctrl+C the app handles is silent, CONFIRMED from the source. [87] [89]
- Orca speaks "Copied selection to clipboard." for any Ctrl+C that changes the clipboard, from the source. JAWS documents "copied selection to clipboard." Narrator and VoiceOver are UNCONFIRMED. [90] [91] [92] [27]
- TalkBack speaks "copied" and the text for its own copy action. [93]
- Carbon, MDN and GOV.UK switch the button to "Copied!", "Copied" or "Code copied" for 1 to 5 seconds after the write, and Primer swaps its icon for a check. Primer and GOV.UK use `aria-live`, and only MDN signals failure. [94] [96] [97] [98]
- The W3C Clipboard API asks for no feedback on write. [99]

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

### Android

Every copy since Android 13 gets a system confirmation with a preview. The Copy and paste guide says "Android shows a default UI to users when copying in Android 13 (API level 33) and higher" [57]. The confirmation "Confirms the content was successfully copied" and "Provides a preview of the copied content" [57]. The Android 13 features page introduced it as "Clipboard preview" [58]. The source matches the docs. `ClipboardListener` "brings up a clipboard overlay when something is copied to the clipboard" [62, `ClipboardListener.java` L54]. It listens for `onPrimaryClipChanged` and hands every new clip to the overlay [62, `ClipboardListener.java` L127 to 172]. Text shows as a preview of up to 500 characters [62, `ClipboardOverlayView.java` L305 to 308]. An image shows as a thumbnail, and links and other clip types show the word "Copied" [62, `ClipboardOverlayController.java` L258 to 298; `strings.xml` L3830]. The overlay closes after 6 seconds [62, `ClipboardOverlayController.java` L86]. It posts "Text copied", "Image copied" or "Content copied" to a polite live region once the entrance animation ends [62, `ClipboardOverlayController.java` L330 to 338 and L387 to 396; `clipboard_overlay.xml` L28 to 31; `strings.xml` L3844 to 3848].

Google tells apps to drop their own confirmation. The guide says "To avoid duplicate displays of information, we strongly recommend removing toasts or snackbars shown after an in-app copy for Android 13 and higher" [57]. Its figure caption says "If you show a copy confirmation toast in Android 13, the user sees duplicate messages" [57]. The sample code gates the toast with the comment "// Only show a toast for Android 12 and lower." [57]. For Android 12L and lower, the guide still recommends a toast or snackbar [57].

The sensitive flag masks the preview and leaves the overlay. Adding `EXTRA_IS_SENSITIVE` "prevents sensitive content from appearing in the visual confirmation of copied content in Android 13 and higher", and "All apps must do this, regardless of the targeted API level" [57]. The Android 13 behavior page says "should", not "must" [59]. The API doc calls the flag "a rendering hint from the source application" that "does not change clipboard behavior or add additional security" [62, `ClipDescription.java` L156 and L157]. Flagged text shows as six dots, "••••••", and a flagged image shows "Tap to view" [62, `ClipboardOverlayController.java` L269 to 281; `strings.xml` L3840 and L3842]. The overlay still appears and still announces. Tapping the masked text opens the editor, which shows the real text [62, `EditTextActivity.java` L100].

No primary source says the overlay leaks copied text during screen sharing. An unflagged copy puts up to 500 characters on screen for 6 seconds, and the overlay window does not set `FLAG_SECURE` [62, `FloatingWindowUtil.java` L47 to 59]. That fits the claim, but it is an inference, because the code does not show what a screen capture records. Android 15's screen share protection hides "Notification content", and "Sensitive content like password input is hidden from remote viewers" [61]. That page does not mention the clipboard overlay. With single-app sharing, from Android 14 QPR2, "the status bar, navigation bar, notifications, and other system UI elements are excluded from the shared display" [60]. The overlay is a SystemUI window, so it is probably excluded in that mode. The leak is UNCONFIRMED, and too broad as written: a flagged copy shows dots, and single-app sharing probably hides the overlay.

Neither the user nor an ordinary app can turn it off. At android-16.0.0_r4, `ClipboardListener` reads no user setting that switches the overlay off. The only setting it reads is whether device setup is complete [62, `ClipboardListener.java` L200 to 203]. Its one suppression path needs the clip to come from the emulator or `com.android.shell` and to carry `com.android.systemui.SUPPRESS_CLIPBOARD_OVERLAY` [62, `ClipboardListener.java` L174 to 187]. That path is for clipboard sync with an emulator or a mirrored device. Android 13 also had a server-side switch, `CLIPBOARD_OVERLAY_ENABLED`, which defaulted to true [63, `ClipboardListener.java` L71 to 72]. It is gone by Android 14 [64]. The clipboard toggle in Settings, `CLIPBOARD_SHOW_ACCESS_NOTIFICATIONS`, controls the toast shown when an app reads the clipboard, not the copy overlay [62, `ClipboardService.java` L1487 and L1503]. OEM builds that replace SystemUI were not checked.

Android 13 introduced it, and 14 to 16 changed only edge cases. The `clipboardoverlay` directory does not exist at android-12.1.0_r1 [66] and is present at android-13.0.0_r1 [63]. Android 14 shows a plain "Copied" toast in place of the overlay before device setup is complete [64, `ClipboardListener.java` L95 to 101]. Android 15 extended the toast to a locked device behind a flag [65, `ClipboardListener.java` L101 to 107], and at android-16.0.0_r4 the locked-device toast has no flag [62, `ClipboardListener.java` L149 to 159].

It never signals a failed copy. The overlay's only trigger is a change to the clipboard [62, `ClipboardListener.java` L127 to 172], so a copy that did not reach the clipboard shows nothing. The listener fires for every clipboard write, so an app writing to the clipboard on its own gets the same overlay. The same data copied again while the overlay is up does not animate or announce again. It only resets the timeout [62, `ClipboardOverlayController.java` L225 and L231 to 255].

**Answer.** CONFIRMED. Android 13 and later show a system overlay with a preview for every clipboard write, and Google tells apps to remove their own toast. The sensitive flag masks the preview, and nothing lets a user or app turn the overlay off. The screen-sharing leak is UNCONFIRMED. Failures get no signal.

### KDE and GNOME

The 2024 KDE thread asked for a small notification, and Nate Graham steered it to an animation. On 24 March 2024 Yannik asked, "Just displaying a tiny notification that says "Copied 1 file"?" [100, post 1]. Nate Graham replied the same day: "It's feasible, but we would need to be careful to make it clear that this is a platform feature so that apps don't then implement their own notification" [100, post 3]. He objected to standard notifications because "it would get really annoying to see big chunky system notifications appearing and covering up content in your windows all the time in response to a very common action" [100, post 3]. His alternative was "Maybe the Clipboard icon in the system tray could do a little shake or other animation or something." [100, post 3]. The word "intrusive" comes from another poster, Luis Bocanegra: "I also agree an OSD/Notification may be too intrusive when you do many copy operations" [100, post 5].

Nate closed the bug that came out of the thread, citing the HIG. Yannik filed bug 484390 the same day, describing GNOME's Pano extension, where "it can show a notification which simply says "Copied 1 file" or "Cut 1 file"" [101, description]. On 6 January 2026 Nate set it to RESOLVED WONTFIX with "Our HIG generally advises against this kind of thing." [101, comment 2]. He added "I could see us changing the widget to visually indicate success by wiggling the icon, or doing some other kind of animation", "but a "[thing] was copied" message isn't recommended, so I don't think we'll do that." [101, comment 2]. The HIG line reads "Indicate success by visually changing something on the screen related to the task that succeeded, not by sending a message saying "Task completed."" [103]. The same page allows an OSD "When an action that is quick but not instant has completed." [103, On-screen displays].

In August 2026 Nate confirmed a request for an OSD after copy. Bug 524218 asks "It would be useful if there was an option to show a notification whenever something gets copied with the content that was copied, as feedback that copying was successful." [102, description]. Its case is a slow image copy, where Ctrl+V pastes the old contents. Nate replied on 13 August 2026: "We were actually discussing this in the plasma dev chat a few days ago. I have similar use cases and would also appreciate it." and "It would probably be implemented as an OSD rather than a notification, though." [102, comment 1]. He marked it CONFIRMED and renamed it "Show OSD after copy" [102, history]. It is still open.

Klipper shows nothing on copy today. Its only notification comes from cycling history with the next and previous shortcuts [104, `klipper/klipper.cpp` L139 to 147, L403 to 418]. The actions popup, "Show the popup menu of applicable actions as soon as a selection is made.", defaults to false [104, `klipper/klipper.kcfg` L46 to 49]. The tray applet's QML has no animation [104, `applets/clipboard/qml/main.qml`].

GNOME Shell and GTK stay silent on an ordinary copy. The Shell shows a "Screenshot Captured" notification, "You can paste the image from the clipboard", only after its own screenshots [106, `js/ui/screenshot.js` L2630 to 2633, L2749 to 2751]. Its own text fields copy with no feedback [106, `js/ui/shellEntry.js` L86 to 88]. GTK's `gtk_text_copy_clipboard` writes silently on success and does nothing with an empty selection. It rings the error bell only for a hidden password field [107, `gtk/gtktext.c` L4354, L4360, L4369].

GNOME's design tracker has an open proposal. Tobias Bernard opened os-mockups issue 285, "Clipboard feedback & history", on 20 June 2026 [105]. Its first goal is "Show visible feedback when copying", and another is "Can be on by default without creating problems" [105]. It notes "We currently have toasts in some GTK apps, but it's manual and per-view. Would be nice to have something that works globally, for all apps" [105]. It judges "The shake animation in Copyous seems too subtle" [105], and lists Android 13's overlay as prior art. A Discourse search found no other proposal, which does not prove there is none.

**Answer.** CONFIRMED from the source that Klipper, GNOME Shell and GTK show nothing on an ordinary copy, apart from GNOME's screenshot notification. The spec's line that nobody has formally proposed a desktop copy confirmation is REFUTED three times: KDE bug 484390 (2024, WONTFIX), KDE bug 524218 (2026, CONFIRMED as "Show OSD after copy") and GNOME design issue 285 (2026, open).

### Editors

Neovim's yank flash is built in, and the user has to turn it on. Its :help describes `vim.hl.on_yank()` as "Highlight the yanked text during a |TextYankPost| event" and says "Add the following to your `init.vim`:" before an autocmd line [67, L2897 to 2901]. The defaults are "highlight group for yanked region (default "IncSearch")" and "time in ms before highlight is cleared (default 150)" [67, L2907 to 2914]. The source matches, `local higroup = opts.higroup or 'IncSearch'` and `timeout = opts.timeout or 150,` [68, `runtime/lua/vim/hl.lua` L185, L201]. It fires only for the yank operator, `if event.operator ~= 'y' or event.regtype == '' then` [68, `hl.lua` L178]. Nvim sets up no TextYankPost autocmd of its own. The 0.12 template `runtime/example_init.lua` adds one, "-- Highlight when yanking (copying) text." [68, L62], but only for users who copy it into their config. The function shipped as `vim.highlight.on_yank` in 0.5.0, already with `local timeout = opts.timeout or 150` [69, L74]. Neovim 0.11 renamed the module: "*vim.highlight* Renamed to |vim.hl|." [68, `runtime/doc/deprecated.txt` L117].

Vim ships an optional package, also opt-in, with a 300 ms default. The docs say to add `packadd! hlyank` to the vimrc [70, `runtime/doc/usr_05.txt` L491], and "This package briefly highlights the affected region of the last |yank| command." [70, L493 to 494]. The default is `:let g:hlyank_duration = 300`, and "The unit is milliseconds, and the upper limit is 3000 ms." [70, L504 to 505]. The plugin flashes only when `if v:event.operator ==? 'y'` [70, `runtime/pack/dist/opt/hlyank/plugin/hlyank.vim` L12]. It came in the runtime commit "runtime(hlyank): add the hlyank package" on 19 March 2025 [71], so 9.1.1228 is the first tag that has it. version9.txt lists it among "The new optional packages |package-comment|, |package-nohlsearch|, |package-hlyank|" for Vim 9.2 [70, `runtime/doc/version9.txt` L41639 to 41640].

Emacs's pulsar package pulses the region after a copy, once the user turns on its mode. `kill-ring-save` is in the default list of `pulsar-pulse-region-functions`, "Functions that highlight the affected region after invocation." [72, `pulsar.el` L158 to 187]. The docstring adds "This only takes effect when `pulsar-mode' (buffer-local) or `pulsar-global-mode' is enabled." [72, `pulsar.el` L182 to 187]. The global mode starts off [72, `pulsar.el` L644], and the manual's sample config turns it on with `(pulsar-global-mode 1)` [72, `README.org` L132]. Region pulsing arrived in 1.2.0, when "The default value of ~pulsar-pulse-region-functions~ is nil, meaning that no region pulsing is in effect" [72, `CHANGELOG.org` L216 to 225] [73]. In 1.3.0, on 2025-11-30, "the list of functions it defined is now the default for `pulsar-pulse-region-functions'" [72, `pulsar.el` L153 to 156] [73].

Emacs itself gives copy feedback by default, and never pulses. `kill-ring-save` "gives visual feedback indicating the extent of the region being copied" [74, `lisp/simple.el` L6018 to 6019], through `(if (called-interactively-p 'interactive) (indicate-copied-region)))` [74, L6026 to 6027]. "If the mark is visible in the selected window, blink the cursor between point and mark if there is currently no active region highlighting." Otherwise, "If the mark lies outside the selected window, display an informative message containing a sample of the copied text." [74, L6059 to 6065]. The message reads `"Copied text until \"%s\""` or `"Copied text from \"%s\""` [74, L6093, L6097]. The blink lasts `(defcustom copy-region-blink-delay 1` second [74, L6029]. It runs only when the region is "not denoted visually" [74, L6038 to 6051], and Transient Mark mode "is a minor mode that is enabled by default in interactive sessions" [75, `doc/emacs/mark.texi` L466 to 467]. So a highlighted region, the usual case, gets no blink.

VS Code's own copy path shows nothing, and extensions add a flash. The copy command ends in `clipboardService.writeText(dataToCopy.text);` [76, `src/vs/editor/contrib/clipboard/browser/clipboard.ts` L207, L275]. The one editor contribution that listens for copies, `copyPasteController.ts`, adds no decoration or message [76, L129, L169 to 230]. VSCodeVim offers `"description": "Enable highlighting when yanking.",` with `"default": false` and a 200 ms duration [77, `package.json` L508 to 526]. Its Marketplace page shows "9,084,730 installs" [78]. The standalone extension Highlight on Copy will "Briefly flash and highlight the selected text that has been copied" [79, `README.md` L2]. It binds `"key": "ctrl+c"` [79, `package.json` L75], runs the normal copy, and decorates the selection for 200 ms [79, `src/extension.ts` L11, L26 to 37]. Once installed it is on: "The extension works out of the box when triggering your default copy to clipboard shortcut (`Ctrl + C`, `Cmd + C`)." [79, `README.md` L18]. Its Marketplace page shows "28,959 installs" [80].

JetBrains IDEs flash only in an edge case, and plugins add the rest. With text selected, `CopyAction` sets the clipboard and adds nothing [81, `CopyAction.java` L120 to 134]. With no selection it runs `EditorActionUtil.selectEntireLines(caret);` [81, L95], so the copied line stays selected. With the advanced setting "Don't select the copied line after invoking the Copy action with no selection" turned on, it adds a highlight that clears with `HIDE_BY_ESCAPE | HIDE_BY_ANY_KEY` [81, `ApplicationBundle.properties` L876; `PlatformExtensions.xml` L1764; `CopyAction.java` L136 to 156]. That setting defaults to false. IdeaVim ports vim-highlightedyank, "Make the yanked region apparent!", and the user must "Add the following command to `~/.ideavimrc`: `Plug 'machakann/vim-highlightedyank'`" [82, `doc/IdeaVim Plugins.md` L400 to 403]. Its default is `internal const val DEFAULT_HIGHLIGHT_DURATION: Int = 300` [82, `VimHighlightedYank.kt` L43]. A third-party plugin, Highlight on Copy, "Highlights the text that was just copied to the clipboard with customizable colors and blinking effects." [83, `README.md` L9]. It "Works with ANY copy action - Ctrl+C, Edit menu, right-click copy, etc." [83, `plugin.xml` L18], with `var blinkCount: Int = 1` and `var blinkInterval: Int = 150` [83, `HighlightOnCopySettings.kt` L19 to 20]. The Marketplace API reports 1,220 downloads [84].

Zed flashes on yank in vim mode, and Helix prints a status line. Zed's defaults set `"vim_mode": false,` and `"highlight_on_yank_duration": 200,` [85, `assets/settings/default.json` L116, L2454]. So the flash is on inside vim mode, and vim mode is opt-in. The code skips visual mode [85, `crates/vim/src/normal/yank.rs` L224]. Helix does not flash. Every yank sets `"yanked {selections} selection{} to register {register}",` or `"yanked primary selection to register {register}"` [86, `helix-term/src/commands.rs` L4545, L4607]. Sublime Text was not checked.

**Answer.** CONFIRMED from the source: every flash on copy is opt-in. Neovim ships `vim.hl.on_yank` (150 ms) behind a user autocmd, and Vim ships `hlyank` (300 ms) behind `packadd`. Emacs gets it from pulsar, VS Code and JetBrains from extensions, and Zed inside vim mode. The default copy paths are quieter. Emacs blinks the cursor or prints a message, Helix prints a status line, JetBrains leaves the copied line selected, and VS Code shows nothing.

### Screen readers

NVDA only speaks for copies it makes itself. `reportTextCopiedToClipboard` says "Copied to clipboard: {text}", shows "Copied: {text}" in braille, and says "Unable to copy" on failure [87, `source/ui.py` L300 to 315]. It runs from `copyToClip` when `notify` is set, and that function reads the clipboard back to check the write [87, `source/api.py` L398 to 422]. The one user Ctrl+C that reaches it is in browse mode. `cursorManager.py` binds `"kb:control+c"` to a script that says "No selection" when nothing is selected, and otherwise copies with `notify=True` [87, L534 to 543, L580]. In Native Selection mode it passes the key to the app. What's New for 2024.1 says so: "Note however that as Firefox is handling the actual copy, NVDA will not report a "copy to clipboard" message in this mode." [89, L1433]. Word and Outlook browse mode lost the message too, "as the application is now handling the copy, not NVDA." [89, L1435]. Outside browse mode NVDA binds no Ctrl+C script that copies [87, `source/NVDAObjects/behaviors.py` L599; `source/NVDAObjects/window/winConsole.py` L102], so a Ctrl+C in an ordinary edit field passes through with no message. Speak command keys, "When enabled, NVDA will announce all non-character keys you type on the keyboard." [88, L3124], would read the keystroke itself, and it is off by default [87, `source/config/configSpec.py` L203].

JAWS documents a spoken copy message. The Script Manual says "when you press CTRL+C JAWS speaks "copied selection to clipboard."" and "These messages let you know the expected action has taken place." [90]. It does not say whether JAWS checks that anything was copied. The live page is behind a bot check, so the quote comes from a February 2022 Wayback snapshot.

Narrator documents copying only its own speech. The November 2024 entry says "you can copy the last phrase that Narrator spoke" with Narrator key+Ctrl+X [27]. The guide lists no announcement for a user's Ctrl+C.

VoiceOver has no documented copy announcement. The iPhone guide's copy step ends at the gesture: "Set the rotor to Edit, select the text, swipe up or down to choose Cut, Copy, or Paste, then double-tap." [91]. On the Mac, the Announcements tab lists no copy option [17].

Orca announces every Ctrl+C that changes the clipboard, in any app. Its strings are "Copied selection to clipboard." and a brief "copied" [92, `src/orca/messages.py` L352 and L356]. It watches the clipboard through Klipper, GPaste or `Gtk.Clipboard`'s `owner-change` signal [92, `src/orca/clipboard.py` L120, L404 to 433]. When the contents change and the last key was Ctrl+C, it speaks [92, L556 to 560]. In terminals the key is Ctrl+Shift+C [92, `src/orca/input_event_manager.py` L836 to 837]. The path has no role check, so it is not limited to edit fields [92, `clipboard.py` L528 to 571], and it is on at startup [92, `src/orca/orca.py` L238]. A copy that changes nothing fires no signal, so it says nothing.

TalkBack speaks for its own copy action. `TextEditActor.copy` speaks the template `copied, <xliff:g id="text">%1$s</xliff:g>` [93, `TextEditActor.java` L419 to 425; `utils/src/main/res/values/strings.xml` L32]. With nothing to copy it says "No text to copy, select some text first." [93, `talkback/src/main/res/values/strings.xml` L900]. With no selection it copies the whole node's text and returns before speaking [93, L414 to 416]. Android's own overlay announces every copy through a live region, as the Android section shows. Whether TalkBack reads it is UNCONFIRMED. ChromeVox's "copy $1." is in the ChromeOS section [46].

**Answer.** CONFIRMED for Orca from the source: it speaks on any Ctrl+C that changes the clipboard. CONFIRMED for JAWS from its docs. CONFIRMED for NVDA only in browse mode and for its own copy commands. TalkBack speaks only for its own copy action. UNCONFIRMED for Narrator and VoiceOver.

### Web copy buttons

The base element leaves feedback to the page. GitHub's `<clipboard-copy>` copies, then dispatches an event [95, `src/clipboard-copy-element.ts` L8 and L15 to 17]. Its README says "After copying to the clipboard, a `clipboard-copy` event is dispatched from the `<clipboard-copy>` element" [95, L67 to 68]. Its demo page adds an `aria-live="polite"` region and a hidden "Copied!" span [95, `examples/index.html` L50 to 55].

Primer swaps the icon and announces through a live region. Primer ViewComponents' ClipboardCopy swaps its copy icon for a check for 2000 ms [94, `clipboard_copy.ts` L3, L47, L62 to 67]. It sets `const copiedAnnouncement = 'Copied!'` [94, L41] and writes it into `<div aria-live="polite" aria-atomic="true" class="sr-only" data-clipboard-copy-feedback></div>` [94, `clipboard_copy.html.erb` L10]. On a repeat copy it adds a non-breaking space, because "A screen reader will not read a live region again if the text is the same." [94, L50 to 55].

Carbon changes the tooltip and the label. Copy defaults to `feedback = 'Copied!',` and `feedbackTimeout = 2000,` [96, `Copy/Copy.tsx` L84 to 85]. During the animation the tooltip and `aria-label` both become the feedback text [96, L130, L138 to 139]. Copy.tsx declares no live region.

MDN is the only one that signals failure. The button text becomes `copy-button-copied = Copied` for 1 second. On an error or empty source text it shows `copy-button-copy-failed = Copy failed!` for 3 seconds [97, `components/copy-button/element.js` L43 to 53; `l10n/template.ftl` L194 to 195]. The element has no live region.

GOV.UK announces assertively. The Design System website's code-example button runs `this.$status.setAttribute('aria-live', 'assertive')` [98, `src/javascripts/components/copy.mjs` L39]. On success it runs `this.$button.textContent = this.$status.textContent = 'Code copied'` and resets after 5 seconds [98, L58 to 60]. This is the website, not the govuk-frontend package.

All four confirm only after the write succeeds, for 1 to 5 seconds. Material and Polaris were not checked.

The W3C Clipboard API says nothing about feedback after a write. The 24 June 2026 Working Draft has UI rules only for reading: "the permission prompt must include the hostname of the document associated with the script thread" [99].

**Answer.** CONFIRMED from the source that "Copied!" or "Copied" is the common label in Primer, Carbon and MDN, with "Code copied" on GOV.UK. Primer and GOV.UK announce through `aria-live`, Carbon changes the `aria-label`, and MDN changes the visible text only. The Clipboard API asks user agents for no feedback on write.

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
- The spec's survey needs four changes. Windows needs the Snipping Tool exception. The KDE and GNOME proposals REFUTE "nobody has formally proposed". NVDA announces only its own copies. The KDE "intrusive" objection is Luis Bocanegra's phrase, and Nate Graham's was "really annoying".
- The spec says Android's overlay leaks copied text during screen sharing. UNCONFIRMED. Whether full-screen `MediaProjection` capture records the overlay window needs a device or a WindowManager source read.
- OEM builds that replace Android's SystemUI, such as Samsung One UI, were not checked.
- Does TalkBack read Android's copy overlay? UNCONFIRMED.
- Does current JAWS still speak "copied selection to clipboard.", and does it speak when nothing was copied? UNCONFIRMED. The quote is from a 2022 snapshot.
- Does Orca's `owner-change` path fire for other apps' copies under GNOME Wayland without GPaste? UNCONFIRMED, needs a device.
- GNOME issue 285 has one comment, and the GitLab API needs a login to read it. Unread.
- Sublime Text, Material and Polaris were not checked. Zed outside vim mode is UNCONFIRMED.

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
57. Copy and paste. Android Developers, Views guide. Last updated 2026-09-22. https://developer.android.com/develop/ui/views/touch-and-input/copy-paste
58. Features and APIs Overview, Android 13, "Clipboard preview". Android Developers. https://developer.android.com/about/versions/13/features
59. Behavior changes: all apps, Android 13, "Hide sensitive content from clipboard". Android Developers. https://developer.android.com/about/versions/13/behavior-changes-all
60. Features and APIs Overview, Android 14, "App screen sharing". Android Developers. https://developer.android.com/about/versions/14/features
61. Behavior changes: all apps, Android 15, "Screenshare Protection". Android Developers. https://developer.android.com/about/versions/15/behavior-changes-all
62. AOSP `platform/frameworks/base` at tag android-16.0.0_r4, commit 45034f0. Cited by file and line, in `packages/SystemUI/src/com/android/systemui/clipboardoverlay/`, `packages/SystemUI/res/`, `packages/SystemUI/src/com/android/systemui/screenshot/FloatingWindowUtil.java`, `core/java/android/content/ClipDescription.java` and `services/core/java/com/android/server/clipboard/ClipboardService.java`. https://android.googlesource.com/platform/frameworks/base/+/45034f0663f960d9ee5fb0a101a4732b71f6e2f4/packages/SystemUI/src/com/android/systemui/clipboardoverlay/
63. AOSP `platform/frameworks/base` at tag android-13.0.0_r1, commit 0d3ff31. Cited by file and line. https://android.googlesource.com/platform/frameworks/base/+/0d3ff311e6e80dee7fe88a2a2cfa272ce231c3c6/packages/SystemUI/src/com/android/systemui/clipboardoverlay/
64. AOSP `platform/frameworks/base` at tag android-14.0.0_r1, commit 299fe6f, `ClipboardListener.java`. https://android.googlesource.com/platform/frameworks/base/+/299fe6f5d6fc6f1af7c3411dcf4e5efdf7217368/packages/SystemUI/src/com/android/systemui/clipboardoverlay/ClipboardListener.java
65. AOSP `platform/frameworks/base` at tag android-15.0.0_r1, commit 4e43ad1, `ClipboardListener.java`. https://android.googlesource.com/platform/frameworks/base/+/4e43ad12e1b211f15152e9c5b16b0fe88e6b93f3/packages/SystemUI/src/com/android/systemui/clipboardoverlay/ClipboardListener.java
66. AOSP `platform/frameworks/base` at tag android-12.1.0_r1, commit cf4b547. `packages/SystemUI/src/com/android/systemui/` has no `clipboardoverlay` directory. https://android.googlesource.com/platform/frameworks/base/+/cf4b54771d1781281377ef64bb6f609842f376ba/packages/SystemUI/src/com/android/systemui/
67. Neovim `:help lua.txt`, `vim.hl.on_yank()`, at tag v0.12.5, commit 5885a30. https://raw.githubusercontent.com/neovim/neovim/v0.12.5/runtime/doc/lua.txt
68. neovim/neovim at tag v0.12.5, commit 5885a30. Cited by file and line. https://github.com/neovim/neovim/tree/5885a30e1e1225349079e7a1c4a3848aa8e43e42
69. neovim/neovim, `runtime/lua/vim/highlight.lua` at tag v0.5.0, commit a5ac2f4. https://github.com/neovim/neovim/blob/a5ac2f45ff84a688a09479f357a9909d5b914294/runtime/lua/vim/highlight.lua
70. vim/vim at tag v9.2.1129, commit 7854b1d. Cited by file and line. https://github.com/vim/vim/tree/7854b1dbdb50b6264cb8b54cdd90e042d19f93b4
71. vim/vim commit 83d7440, "runtime(hlyank): add the hlyank package", 19 March 2025. https://github.com/vim/vim/commit/83d74404bb355956e9ce23fa62dd5bf1f2549c05
72. protesilaos/pulsar at tag 1.4.0, commit 76dc758. `pulsar.el`, `README.org` (the manual) and `CHANGELOG.org`, cited by file and line. https://github.com/protesilaos/pulsar/tree/76dc758361378e1c863151cb7febceb4d5218f6f
73. protesilaos/pulsar, `pulsar.el` at tag 1.2.0, commit 2b9c973, and at tag 1.3.0, commit 4c4853d. https://github.com/protesilaos/pulsar/blob/2b9c9736b6ff3559acf2a65e3a29574dc7787523/pulsar.el and https://github.com/protesilaos/pulsar/blob/4c4853dace0638356c5b66048aee3d3dcd2c0ee2/pulsar.el
74. GNU Emacs at tag emacs-31.1, commit a360712 (GitHub mirror). `lisp/simple.el` and `lisp/pulse.el`, cited by file and line. https://github.com/emacs-mirror/emacs/tree/a360712c9d272d950d8d8255ef74570f7e90b7d9
75. GNU Emacs Manual, Transient Mark mode, `doc/emacs/mark.texi` at tag emacs-31.1, commit a360712. https://github.com/emacs-mirror/emacs/blob/a360712c9d272d950d8d8255ef74570f7e90b7d9/doc/emacs/mark.texi
76. microsoft/vscode at tag 1.139.1, commit 04c0d99. Cited by file and line. https://github.com/microsoft/vscode/tree/04c0d99f4fb0d8afe6ce4f0c58e31e183ac3e4b1
77. VSCodeVim/Vim at tag v1.32.4, commit ee59bae, `package.json`. https://github.com/VSCodeVim/Vim/blob/ee59baec19a071384128b34c5de87cd24b11d36b/package.json
78. Vim (vscodevim.vim). Visual Studio Marketplace. https://marketplace.visualstudio.com/items?itemName=vscodevim.vim
79. mguellsegarra/highlight-on-copy at tag v1.1.6, commit 9a015bb. Cited by file and line. https://github.com/mguellsegarra/highlight-on-copy/tree/9a015bb07ac84c9c93bb7edba05ff7eb50356510
80. Highlight on Copy (mguellsegarra.highlight-on-copy). Visual Studio Marketplace. https://marketplace.visualstudio.com/items?itemName=mguellsegarra.highlight-on-copy
81. JetBrains/intellij-community at tag idea/2026.2.3, commit 8062c06. Cited by file and line. https://github.com/JetBrains/intellij-community/tree/8062c061ff33e22041d9f1844db5b8b8a6b5e4d7
82. JetBrains/ideavim at tag 2.47.1, commit c1ae565. `doc/IdeaVim Plugins.md` and `VimHighlightedYank.kt`. https://github.com/JetBrains/ideavim/tree/c1ae565cfb98be30ea75e4b351e823846c69c3c8
83. Hazzajenko/Jetbrains-Highlight-on-Copy at tag v1.0.5, commit 6a57c64. Cited by file and line. https://github.com/Hazzajenko/Jetbrains-Highlight-on-Copy/tree/6a57c641476fc741ad160440429b374b8d9b6f51
84. Highlight on Copy, plugin 27575. JetBrains Marketplace, page and public API record. https://plugins.jetbrains.com/plugin/27575-highlight-on-copy and https://plugins.jetbrains.com/api/plugins/27575
85. zed-industries/zed at tag v0.233.10, commit 350f338. Cited by file and line. https://github.com/zed-industries/zed/tree/350f33871e84d5ed83a403523e9490b9bf014a94
86. helix-editor/helix at tag 25.07.1, commit a05c151, `helix-term/src/commands.rs`. https://github.com/helix-editor/helix/blob/a05c151bb6e8e9c65ec390b0ae2afe7a5efd619b/helix-term/src/commands.rs
87. nvaccess/nvda at tag release-2026.2, commit f62c980. Cited by file and line. https://github.com/nvaccess/nvda/tree/f62c980589d1ac30babf68ad48177e9ad29a2e84
88. NVDA User Guide, `user_docs/en/userGuide.md` at release-2026.2, Speak Command Keys. https://github.com/nvaccess/nvda/blob/f62c980589d1ac30babf68ad48177e9ad29a2e84/user_docs/en/userGuide.md
89. NVDA What's New, `user_docs/en/changes.md` at release-2026.2, 2024.1 New Features. https://github.com/nvaccess/nvda/blob/f62c980589d1ac30babf68ad48177e9ad29a2e84/user_docs/en/changes.md
90. 10.0 Passing Keystrokes and Typing Text with Scripts. Freedom Scientific, JAWS Script Manual. Read from the Wayback snapshot of 19 February 2022, because the live page is behind a bot check. https://web.archive.org/web/20220219230755/https://support.freedomscientific.com/Content/Documents/Other/ScriptManual/10-0_PassingKeystrokesAndTypingTextWithScripts.htm
91. Use the onscreen keyboard with VoiceOver on iPhone. Apple Support, iPhone User Guide. https://support.apple.com/guide/iphone/use-the-onscreen-keyboard-iph3e2e3d1d/ios
92. GNOME/orca at tag 51.0, commit 856433b. Cited by file and line. https://gitlab.gnome.org/GNOME/orca/-/tree/856433b61385ba77a2960f281275419a0731b385
93. google/talkback, master at commit 229212f, 23 March 2026. Cited by file and line. https://github.com/google/talkback/tree/229212fdf5842191d0a93fc95d9ca1423b346866
94. primer/view_components at tag v0.53.5, commit f617990, `app/components/primer/beta/clipboard_copy.ts` and `clipboard_copy.html.erb`. https://github.com/primer/view_components/tree/f6179900575f776a5d43db722a4dddef2d129551/app/components/primer/beta
95. github/clipboard-copy-element at tag v1.3.2, commit 1df8d64. `src/clipboard-copy-element.ts`, `README.md`, `examples/index.html`. https://github.com/github/clipboard-copy-element/tree/1df8d64c4859e82dd12b6805e45be99672574037
96. carbon-design-system/carbon at tag v11.117.0, commit 7e1d5e5. `packages/react/src/components/Copy/Copy.tsx` and `CopyButton/CopyButton.tsx`. https://github.com/carbon-design-system/carbon/tree/7e1d5e5492fd70ab8ec901114898c12a374cea98/packages/react/src/components
97. mdn/fred at tag v2.9.2, commit 504a1e3. `components/copy-button/element.js` and `l10n/template.ftl`. https://github.com/mdn/fred/tree/504a1e37bc05053724d487bc2a8be5c37a18f94e
98. alphagov/govuk-design-system, main at commit 52b7062, 25 September 2026, `src/javascripts/components/copy.mjs`. https://github.com/alphagov/govuk-design-system/blob/52b7062e1cf8171ba7d658de3e0607e767b6d45f/src/javascripts/components/copy.mjs
99. Clipboard API and events. W3C Working Draft, 24 June 2026. https://www.w3.org/TR/clipboard-apis/
100. "Copy and Cut OSD Notification". KDE Discuss, Help, topic 12935, 24 March 2024. Post 1 by Yannik, post 3 by Nate Graham, post 5 by Luis Bocanegra. https://discuss.kde.org/t/copy-and-cut-osd-notification/12935/3
101. KDE bug 484390, "OSD Notification for File Operations". Opened 24 March 2024; RESOLVED WONTFIX by Nate Graham, 6 January 2026. https://bugs.kde.org/show_bug.cgi?id=484390#c2
102. KDE bug 524218, "Show OSD after copy". Opened 13 August 2026; CONFIRMED and retitled by Nate Graham the same day. https://bugs.kde.org/show_bug.cgi?id=524218#c1
103. Communicating status changes. KDE Human Interface Guidelines. https://develop.kde.org/hig/status_changes/
104. plasma/plasma-workspace at tag v6.7.5, commit cc1ab79. `klipper/` and `applets/clipboard/`. https://invent.kde.org/plasma/plasma-workspace/-/tree/cc1ab7963f94a9b76836412855caed6b94066188
105. GNOME Design, os-mockups issue 285, "Clipboard feedback & history". Opened by Tobias Bernard, 20 June 2026, open. https://gitlab.gnome.org/Teams/Design/os-mockups/-/work_items/285
106. GNOME/gnome-shell at tag 51.0, commit 2177bdf. `js/ui/screenshot.js`, `js/ui/shellEntry.js`. https://gitlab.gnome.org/GNOME/gnome-shell/-/tree/2177bdf9624b2d285de7c1d34274073d3769d6b8
107. GNOME/gtk at tag 4.24.0, commit 1f47f36, `gtk/gtktext.c`, `gtk_text_copy_clipboard`. https://gitlab.gnome.org/GNOME/gtk/-/blob/1f47f368b17701e693918fcd078436b39d4354d1/gtk/gtktext.c#L4350

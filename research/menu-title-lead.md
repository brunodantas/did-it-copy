**Verdict: PARTLY TRUE.** The menu title highlight is CONFIRMED. From the first Macintosh on, the Toolbox routine MenuKey highlighted the menu title whenever a Command-key equivalent chose an enabled item, Copy included. The beep on a disabled command is REFUTED as system behaviour, because MenuKey returned 0 for a disabled item and did nothing else. Whether any app beeped on a disabled Command key is UNCONFIRMED. The guidelines only suggested apps beep for "Cut when there's no text selection".

The Toolbox is the classic Mac OS system code apps called, and Inside Macintosh documents it. HIG means an edition of Apple's Human Interface Guidelines. CONFIRMED, REFUTED and UNCONFIRMED refer to what the primary sources say.

## Summary

- MenuKey highlighted the menu title by itself. The app then called `HiliteMenu(0)` to remove the highlight once the command finished. [1, p. I-356] [5, p. 3-117]
- The highlight lasted as long as the command took to run, so it marked completion as well as choice. [1, p. I-18] [4, p. 57]
- The Toolbox highlighted only for enabled items. For a disabled item, MenuKey returned 0 and drew nothing. [1, p. I-358] [5, p. 3-117]
- Apple told apps to disable Copy when nothing was selected. [5, p. 3-8] [1, p. I-358]
- So in an app that followed the rules, Command-C with nothing selected gave no highlight and no sound. No Toolbox or HIG source I found tells apps to beep on a disabled Command-key equivalent.
- The 1985 and 1987 guidelines did offer a beep for one case, as the first stage of an alert when the user "chooses Cut when there's no text selection". That was an app choice, and it assumes Cut was left enabled. [1, p. I-69] [3, p. 62]
- The Lisa's 1980 standards beeped when an Apple-key combination had no command assigned at all. That is a different case from a disabled command. [6, p. 13]
- Apple documents the title highlight for System 1 in 1985, System 7 in 1992, and Carbon in 2004, which ran on Mac OS 8.1 or later and Mac OS X 10.0 or later. [1] [5] [7]
- For Cocoa and current macOS, I found no Apple doc saying a key equivalent highlights the menu title. UNCONFIRMED.
- Since Mac OS X 10.5, Cocoa passes a key equivalent for a disabled menu item on to the app, and an unhandled key-down beeps. No doc says what this does for Command-C with nothing selected. UNCONFIRMED. [8] [10] [11]

## Findings

### Menu title highlight

The Toolbox did this, not the app. The published Inside Macintosh Volume I says MenuKey "highlights the appropriate menu title" and that afterwards the app "should call HiliteMenu(0) to remove the highlighting from the menu title" [1, p. I-356]. The draft dated 11/1/83 already has the same wording [2, Menu Manager Routines, p. 21].

The app decided how long the highlight lasted. Apple's sample program calls `HiliteMenu(0)` at the end of its command routine, commented "to indicate completion of command" [1, p. I-18]. The same routine handles both mouse and keyboard choices, since the key-down branch calls `DoCommand(MenuKey(theChar))` [1, p. I-20]. The guidelines describe the mouse case in the same terms. The menu title "remains highlighted until the command has completed execution" [1, p. I-51], or "until the operation is completed" in the 1987 edition [3, p. 66]. The 1992 guidelines make it an instruction: "You must continue to highlight the menu title until the operation is complete" [4, p. 57].

Macintosh Toolbox Essentials (1992) keeps the behaviour and states the enabled-only condition: "If the given character maps to an enabled menu item in the current menu list, MenuKey highlights the menu title" [5, p. 3-117]. Its sample `DoMenuCommand` ends with `HiliteMenu(0); {unhighlight what MenuSelect or MenuKey hilited}` [5, p. 3-80].

None of the HIG editions I searched describes the title highlight as feedback for keyboard equivalents. The HIG keyboard-equivalent sections only list reserved keys [3, pp. 72-73] [4, pp. 128-129]. The highlight for Command keys is written down only in the Toolbox reference. The guidelines say "the command blinks briefly" only for mouse choices [1, p. I-51] [3, p. 66]. No source says MenuKey blinks the item.

A related precedent, for context. When a keyboard key activated a dialog button, the Dialog Manager "inverts the button for eight ticks, which is long enough for the user to see that the keyboard event has taken effect" [4, p. 205]. The 1992 checklist asks for this too [4, p. 357]. So Apple did give a timed visible response to a button chosen from the keyboard.

### Beep on a disabled command

MenuKey did not beep. For a disabled item it returned 0: "MenuSelect and MenuKey return 0 in the high-order word of their result if the user attempts to invoke a disabled item" [1, p. I-358]. The reference entry repeats that a character not tied to "any enabled menu item" gets 0 [1, p. I-357]. Toolbox Essentials says the same [5, pp. 3-79, 3-117]. Neither the Menu Manager chapter of Volume I nor that of Toolbox Essentials mentions SysBeep or a beep for this case. Apple's sample programs do nothing when the result is 0 [1, p. I-20] [5, p. 3-80].

A later routine, MenuChoice, let an app find out which disabled item the user tried to choose. Toolbox Essentials ties it to the mouse and the MenuDisable global, which the menu definition updates as the cursor moves over items [5, pp. 3-118, 3-119]. Nothing links it to MenuKey. Whether any app used it to beep on a Command key is UNCONFIRMED.

The beep that did exist was a guideline for apps. Volume I defines beeps for "errors that are both minor and immediately obvious" [1, p. I-68]. It then gives a staged alert, with a beep for the first two tries and an alert box after that, as fitting "when the user chooses Cut when there's no text selection" [1, p. I-69]. The 1987 HIG repeats this word for word [3, p. 62]. It adds that "all beeps should be accompanied by a flash (rapid inverting) of the menu bar" [3, p. 60]. The Dialog Manager did that part itself when the speaker volume was 0, since "the menu bar will blink in place of each beep" [1, p. I-409]. The 1992 guidelines describe flashing the menu bar instead of a sound for people with a hearing disability [4, p. 26].

This advice conflicts with the Menu Manager's, which says to disable Cut "when there's no text selection" [1, p. I-358]. A disabled Cut never reaches the app, so it cannot beep. Both pieces of advice sit in the same 1985 book. I did not find the staged-alert Cut example in the 1992 HIG. That search ran on OCR text only, so the omission is UNCONFIRMED.

Lisa. The 1980 Lisa User Interface Standards say that if no command in the menu bar goes with the key, "a beep is sounded" [6, section 28, p. 10], and that the Apple key "beeps if no command is associated with that key" [6, section 35, p. 13]. That covers an unassigned key, not a disabled item. The same document let apps dim items "that do nothing", yet "Such an item can be invoked anyway" [6, section 26, p. 10]. It says nothing about highlighting the menu title for keyboard choices.

### Which versions

| System | Title highlight on Command key | Source |
|---|---|---|
| Lisa, 1980 standards | Not stated. Beep for an unassigned key. | [6] |
| Macintosh pre-release draft, 11/1/83 | Yes, MenuKey does it | [2] |
| Original Macintosh, Inside Macintosh I, 1985 | Yes, MenuKey does it | [1] |
| System 7, Toolbox Essentials, 1992 | Yes, enabled items only | [5] |
| Carbon on Mac OS 8.1 or later and Mac OS X 10.0 or later, 2004 | Yes: MenuKey, MenuEvent and IsMenuKeyEvent | [7] |
| Cocoa, Mac OS X to current macOS | UNCONFIRMED, no doc found | [9] [12] |

For the Carbon row, the 2004 reference says MenuEvent highlights "the menu title of the chosen menu" when the key maps to an enabled item [7, function group 14]. IsMenuKeyEvent "highlights the menu title of the menu containing the selected item" by default [7, function group 12]. HiliteMenu lists MenuKey, MenuEvent and IsMenuKeyEvent as the functions that highlight [7, function group 6].

For Mac OS 8 and 9 without CarbonLib, I found no manual written for those versions that restates MenuKey. The Carbon reference covers CarbonLib running on Mac OS 8.1 or later, so the behaviour was there at least for Carbon apps. Whether the classic, non-Carbon MenuKey still highlighted on Mac OS 8 and 9 is UNCONFIRMED.

### Current macOS

The title highlight is UNCONFIRMED. The NSMenu `performKeyEquivalent(with:)` reference only says it returns true when the menu handles the event [12]. The closest statement is on `performActionForItem(at:)`. "In OS X v10.6 `performActionForItemAtIndex:`, when called, now triggers highlighting in the menu bar" [9]. The Snow Leopard release notes say the same [8]. That covers an app calling the method from code. It does not say that key equivalents highlight.

The beep has a documented path. The AppKit release notes for Leopard, 10.5, say: "Prior to Leopard, key equivalents corresponding to disabled menu items would be ignored. In Leopard, your application now has a chance to handle these" [8]. The Cocoa event guide says that from 10.5, an unrecognised key equivalent goes to the first responder as a key-down event [11, Handling Key Events]. NSResponder's `noResponder(for:)` "beeps if eventSelector is keyDown(with:)" [10]. The event guide also says the last responder "for a key-down event simply beeps" [11, Event Architecture]. These three docs imply that since 10.5, Command-C on a disabled Copy beeps unless something in the responder chain handles the event. That is an inference, not a documented behaviour. No Apple doc states it for Copy, so whether current macOS beeps in TextEdit with nothing selected is UNCONFIRMED.

Current HIG. The menu bar page says the system makes "the Edit > Copy menu item available" when people select text in a standard text field [13, The menu bar]. That implies Copy is unavailable with no selection. The Menus page says an unavailable item "often appears dimmed and doesn't respond to interactions" [13, Menus]. Neither page mentions a highlight or a sound for key equivalents.

### Copy specifically

- Copy got the title highlight like any other enabled command. Command-C was a normal MenuKey equivalent in the Edit menu, reserved from the start [1, p. I-53] [3, p. 72] [4, p. 128]. Toolbox Essentials uses Copy as its own MenuKey example, "such as the Copy command, by pressing the Command key and 'c' or 'C'" [5, p. 3-117]. Nothing in the sources treats Copy differently.
- So a successful Command-C highlighted the Edit title. No source gives a minimum duration for the MenuKey highlight, unlike the eight ticks for dialog buttons. How visible it was is UNCONFIRMED.
- Apple told apps to disable Copy when nothing was selected. "You should disable the Copy command in the Edit menu if the user has not selected anything to copy" [5, p. 3-8]. The sample `MyAdjustMenus` disables Cut and Copy when nothing is selected [5, pp. 3-58, 3-76, 3-77]. The key-down sample calls it before MenuKey [5, p. 3-78]. Volume I says Apple's own simple sample breaks this rule, listing as unsupported that editing commands "aren't dimmed when they don't apply (for example Cut or Copy when there's no text selection)" [1, p. I-15].
- Therefore Command-C with nothing selected, in an app that followed the rules, gave no highlight and no beep. No source gives the staged-alert beep example for Copy, only for Cut [1, p. I-69] [3, p. 62].
- The HIG Copy sections say only what Copy does and which key it uses [3, p. 83] [4, p. 115].

In short, a successful Command-C highlighted the Edit title in classic Mac OS. The Menu Manager drew that highlight for every Command-key equivalent, so it did not signal a copy in particular. A failed copy with nothing selected got no failure signal from the Toolbox.

## Open questions

- Does current macOS, in Cocoa apps, highlight the menu title when a key equivalent fires? UNCONFIRMED. An AppKit doc or release note that says so would settle it. A screen recording of Command-C in TextEdit would show the behaviour but would still not count as a doc.
- Does current macOS beep on Command-C with nothing selected? UNCONFIRMED. The doc chain in [8], [10] and [11] predicts yes, but a text view could handle the key-down itself. A doc on NSTextView's handling of unmatched Command keys would settle it.
- Did the non-Carbon MenuKey on Mac OS 8 and 9 still highlight? UNCONFIRMED. The Mac OS 8 Toolbox reference or the Appearance Manager docs would settle it.
- Did the Cut example for staged alerts leave the guidelines by 1992? UNCONFIRMED; my check ran on OCR text. A page check of the 1992 HIG alert chapter, around pp. 195-205, would settle it.
- How long did the MenuKey highlight last for a fast command like Copy? No source gives a floor. A Toolbox ROM listing or a Technical Note on MenuKey timing would settle it.
- Did the Lisa Office System highlight the menu title on an Apple-key command? UNCONFIRMED. The 1980 standards are silent. The 1983 Lisa User Interface Guidelines scan I opened is only the introduction and its OCR is poor. The full 1983 guidelines or the Lisa Toolkit Menu Manager docs would settle it.
- Did Windows 1.0 or IBM CUA 1987 give feedback for accelerators? UNCONFIRMED, since I did not check any primaries. The Windows 1.0 SDK docs or the CUA Advanced Interface Design Guide (SC26-4582) would settle it.

## Sources

1. Inside Macintosh, Volume I. Apple Computer, Addison-Wesley, 1985. Pages I-15 and I-18 to I-20 (A Road Map, sample program), I-51 and I-53 (User Interface Guidelines, Commands), I-68 and I-69 (Dialogs and Alerts), I-356 to I-358 (Menu Manager Routines: MenuKey, HiliteMenu, DisableItem), I-409 (Dialog Manager, Alerts). https://vintageapple.org/inside_o/pdf/Inside_Macintosh_Volume_I_1985.pdf
2. Inside Macintosh pre-release binder, Menu Manager Programmer's Guide draft dated 11/1/83 (Espinosa, Rose). Apple Computer, 1983 to 1984. Menu Manager Routines, pp. 21 and 22. Scan titled "Inside Macintosh Vol 1 1984". https://archive.org/details/bitsavers_applemacIn84_27699101
3. Human Interface Guidelines: The Apple Desktop Interface. Apple Computer, Addison-Wesley, 1987. Chapter 3, pp. 60 and 62 (Beeps, Alert boxes), 66 (Choosing a menu item), 72 and 73 (Keyboard equivalents for menu items), 83 (Copy). https://archive.org/download/apple-hig/Apple_Human_Interface_Guidelines_1987.pdf
4. Macintosh Human Interface Guidelines. Apple Computer, Addison-Wesley, 1992. Pages 26 (People With a Hearing Disability), 57 (Menu Behavior), 60 (Menu Elements), 115 (Copy), 128 and 129 (Keyboard Equivalents), 205 (Standard Toolbox Controls), 357 (Appendix C checklist). https://archive.org/download/apple-hig/Macintosh_HIG_1992.pdf
5. Inside Macintosh: Macintosh Toolbox Essentials. Apple Computer, Addison-Wesley, 1992. Chapter 3, Menu Manager, pp. 3-8, 3-58, 3-71, 3-77 to 3-80, 3-117 to 3-119 (MenuKey, MenuChoice, HiliteMenu). https://vintageapple.org/inside_r/pdf/Macintosh_TB_Essentials_1992.pdf
6. Lisa User Interface Standards, Lisa Document #420, 20 September 1980. Apple Computer, from the David T. Craig archive. Sections 25 and 26 (pp. 9 and 10), 28 (p. 10), 35 (p. 13). https://archive.org/download/apple-hig/1980_Lisa_UI_Standards.pdf
7. Carbon Menu Manager Reference. Apple Computer, developer.apple.com, archived 2004. Function group 12, IsMenuKeyEvent: https://web.archive.org/web/20040629224434/http://developer.apple.com/documentation/Carbon/Reference/Menu_Manager/menu_mgr_ref/function_group_12.html . Function group 14, MenuEvent: https://web.archive.org/web/20040903215520/http://developer.apple.com/documentation/Carbon/Reference/Menu_Manager/menu_mgr_ref/function_group_14.html . Function group 6, HiliteMenu: https://web.archive.org/web/20040911052046/http://developer.apple.com/documentation/Carbon/Reference/Menu_Manager/menu_mgr_ref/function_group_6.html
8. AppKit Release Notes, older releases. Apple, developer.apple.com archive. Leopard section, "Disabled key equivalents passed through". https://developer.apple.com/library/archive/releasenotes/AppKit/RN-AppKitOlderNotes/index.html
9. NSMenu, `performActionForItem(at:)`, Discussion. Apple Developer Documentation, AppKit, current. https://developer.apple.com/documentation/appkit/nsmenu/performactionforitem(at:)
10. NSResponder, `noResponder(for:)`. Apple Developer Documentation, AppKit, current. https://developer.apple.com/documentation/appkit/nsresponder/noresponder(for:)
11. Cocoa Event Handling Guide. Apple, developer.apple.com archive. Chapters "Event Architecture" (The Responder Chain) and "Handling Key Events" (Handling Key Equivalents). https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/EventOverview/EventArchitecture/EventArchitecture.html and https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/EventOverview/HandlingKeyEvents/HandlingKeyEvents.html
12. NSMenu, `performKeyEquivalent(with:)`. Apple Developer Documentation, AppKit, current. https://developer.apple.com/documentation/appkit/nsmenu/performkeyequivalent(with:)
13. Human Interface Guidelines, pages "The menu bar" and "Menus". Apple, developer.apple.com, current as of 2026-09-24. https://developer.apple.com/design/human-interface-guidelines/the-menu-bar and https://developer.apple.com/design/human-interface-guidelines/menus

**Verdict: no guideline ever specified a confirmation for copy.** The Lisa, the Macintosh, IBM CUA and early Windows all define Copy as putting the selection on the clipboard and leaving the screen as it was. None of them says why. Gypsy had no Copy command at all. What the early systems did instead was keep the copied content in view. Gypsy showed its last cut in a "waste basket" window, and the Lisa manuals told users to leave the Clipboard window open. The Macintosh and Windows moved that view behind a command, Show Clipboard and the Clipboard viewer. The Macintosh guidelines, CUA and the 1992 Windows guide each state a general feedback rule that their own Copy entry does not follow. A failed copy got more attention than a successful one. Most guidelines say to dim Copy when nothing is selected.

Primary means a document from the system's own maker, from the time. Tesler's 2012 memoir is primary for what he did, but it is a retrospective, and I flag it where it disagrees with the 1975 memo. CONFIRMED, REFUTED and UNCONFIRMED refer to what the primary sources say. A clipboard is the store a copy writes to. Gypsy called it the waste basket, the Lisa standards the scrap folder, and Inside Macintosh the scrap.

## Summary

- Gypsy had no Copy key. The user marked a source, which showed a dotted underline, and pressed PASTE to copy it to the target. [1, pp. 4, 5, 9]
- Gypsy kept the last cut on screen in the waste basket "so that the operator can see what has been cut". [1, p. 2]
- A Gypsy CUT with nothing selected did nothing and showed nothing. [1, p. 8]
- Tesler's memoir says Gypsy had "dedicated keys for cut, copy, paste, and undo". Both Gypsy manuals list only CUT and PASTE. UNCONFIRMED. [3] [1, p. 5] [2, p. 10]
- The 1980 Lisa standards define Copy as Cut, "except that the selection is not changed or deleted". [4, p. 16]
- The Lisa kept the Clipboard as a standing desktop object, and the Owner's Guide says many people leave its window open while they work. [5, pp. B13, B17]
- LisaWrite's tutorial is the only manual found that has the user watch a copy arrive on the Clipboard. [6, p. B15]
- On the Macintosh the Clipboard window was optional. An app "can show" it, and the user opens it with Show Clipboard. [9, p. I-58]
- The Macintosh and MacWrite tutorials demonstrate Show Clipboard after a Cut, not after a Copy. [10, pp. 33, 34] [11, p. 33]
- In TextEdit, a copy with nothing selected empties the scrap with no message. [9, p. I-386]
- The 1987 HIG says "Keep the user informed. Provide immediate feedback" and says nothing about feedback in its Copy section. [12, pp. 7, 83]
- The 1987 CUA spec, SC26-4351, is not online. Its content is UNCONFIRMED. The 1989 guide that replaced it defines Copy with no visible result, and tells apps to show a message when an action has "no other visible indication". [14, FRONT_1.4, 2.5.4.1.2, 3.11.5]
- The 1987 Windows style guide says to disable Copy when nothing is selected, and reserves beeps and message boxes for errors. It specifies nothing for a successful copy. [17, pp. 23, 31, 75, 76]
- The Windows user's guides point users to the Clipboard viewer to see what they copied. [15, p. 93] [25, p. 61]
- Xerox Star, 1981, is the counterexample. Its designers wrote "You never invoke a command or push a key and have nothing visible happen". [21, p. 262]

## Findings

### Gypsy at Xerox PARC, 1975

Gypsy had two selections. The target was a caret or a blacked-out passage. The source was the second selection, and "The source is marked by a dotted underline" [1, p. 4]. A copy took two steps, choosing a source and then pasting: "Once a source exists, it can be pasted or copied to the target by pressing either a PASTE key on the keyset or SHIFT-CUT on the keyboard" [1, p. 5]. The command summary puts it in one line: "To copy text: Select a source and a caret target in either order, press PASTE" [1, p. 9]. The keyset had PASTE and CUT and no Copy key [1, p. 5]. The 1978 Operator's Handbook describes the same model [2, pp. 10, 11, 19, 20].

The buffer was always on screen. Gypsy's display had three windows, and "Whenever material is cut (deleted) it is put in the waste basket so that the operator can see what has been cut" [1, p. 2]. After any CUT or PASTE, the waste basket showed the last passage, selected as the new source [1, p. 6]. Gypsy had no separate step that copied to a hidden buffer, so there was nothing left to confirm.

The failure case was silent. "if CUT is struck and the target is a caret, nothing happens" [1, p. 8]. The memo keeps a top-line message for operations that are dangerous or meaningless, to explain "why nothing was done" [1, p. 8]. It does not list an empty cut among them.

Modelessness was the design rule. "There are no 'modes' in Gypsy, so any key may be pressed at any time, and it always has the same meaning" [1, p. 8]. The memo credits Tesler, Mott and Dan Swinehart with the command language [1, p. 8].

**What Tesler's memoir adds.** Tesler says he and Mott "had used dedicated keys for cut, copy, paste, and undo" [3, Influences]. The 1975 memo and the 1978 handbook both contradict this, so the four-key claim is UNCONFIRMED. He also writes that Gypsy let users "copy text in two steps called copy and paste" [3, Gypsy], though the memo's copy is a source selection and PASTE. And "The term copy and paste appears to have originated in Gypsy" [3, Today], a claim he hedges himself. He names the risk of a hidden clipboard: a user "could lose it by cutting or copying something else without an intervening paste or undo" [3, sidebar Objections]. His answer was undo and versioning, not a visible buffer.

**Feedback verdict.** Copying was visible, through the source underline and the waste basket. Nothing confirmed or refused a copy, and an empty CUT did nothing.

### Lisa, 1980 to 1983

The 1980 standards defined Copy by Cut. Copy "places a copy of the selection in the scrap folder just as with CUT: in fact everything is the same except that the selection is not changed or deleted" [4, section 46, p. 16]. The scrap folder was a desk object, created as a closed folder on the first Cut and read-only after that [4, section 44, p. 15]. The Apple-key shortcuts differed from the later Mac: Apple-Z for Cut, Apple-X for Paste, Apple-C for Copy [4, p. 12].

For an empty selection, "An attempt to Cut when the selection contains no characters makes no change to the document or to the scrap folder", and the menu item was dimmed at those times [4, section 44, p. 15]. The text says nothing about Copy here. Because Copy is "everything the same" as Cut, the rule likely covered it, but that is my reading. A Paste that did not fit got a sound: "a warning sounds, and the Paste is not made" [4, section 45, p. 15].

The shipped Lisa made the Clipboard permanent. The 1983 Owner's Guide lists it among the desktop objects [5, p. B13]. It says "You can open the Clipboard to see its contents, but you cannot edit it", and "Many people leave the Clipboard window open at the bottom of the screen while working on documents" [5, p. B17]. The Figure 4 caption says that with it open, you can always see what Paste will insert [5, p. B17].

LisaWrite taught copying by watching. The tutorial step reads "Choose Copy from the Edit menu. ',Supervisor' appears on the Clipboard, replacing the previous contents" [6, p. B15]. Its reference adds that the Clipboard stores the copy "whether or not its window is open" [6, p. C34].

**Feedback verdict.** No transient signal for Copy. The Clipboard window was the check, and Apple's own manuals suggested keeping it open.

### Early Macintosh, 1983 to 1987

The Clipboard went from a default window to an optional one. The Scrap Manager draft of 10/21/83 says an app with these commands "will usually also have a special window for displaying the current Clipboard contents" [7, Scrap Manager, About the Scrap Manager]. The 1985 Promotional Edition still calls the Clipboard "a special kind of window with a well-defined function" [8, p. 42]. The published Volume I says "An application can show the contents of the Clipboard in a window, and can choose whether to have the Clipboard window open or closed" [9, p. I-58]. The Scrap Manager chapter says an app "may also provide a Clipboard window", shown "only when requested" [9, p. I-453]. Apple states no reason for the change. The reading that the window became optional is mine, from the wording.

The published rules give Copy no visible result. "Copy puts a copy of the selection in the Clipboard, but the selection also remains in the document" [9, p. I-59]. "The user can see the Clipboard window by choosing Show Clipboard from the Edit menu" [9, p. I-58]. Apple's own sample program leaves out a Show Clipboard command "for displaying cut or copied text" [9, p. I-15].

In TextEdit, a failed copy destroyed the clipboard. The TECopy entry says "If the selection range is an insertion point, the scrap is emptied" [9, p. I-386], and TECut says the same [9, p. I-385]. A Copy with nothing selected wiped the previous clipboard with no message. The Menu Manager's advice to disable Copy with no selection, in `menu-title-lead.md`, would have kept users away from this path. Whether real apps passed the empty TextEdit scrap on to the desk scrap is UNCONFIRMED.

The manuals taught Show Clipboard as the check, after a Cut. The 1984 owner's manual has the user cut a word and paste it, then "Choose Show Clipboard from the Edit menu. The Clipboard window appears, with the word 'great' in it" [10, pp. 33, 34]. Copy appears only in the reference section [10, p. 61]. MacWrite's tutorial follows the same order, checking the Clipboard after a Cut and describing Copy in prose only [11, p. 33]. MacWrite does show a box when memory runs out during a Cut or Copy [11, p. 129].

The general principles cover copy, but the Copy entry ignores them. Volume I says "there should always be some sort of feedback, so that the user knows that the click had an effect", in the context of clicking on objects [9, p. I-31]. The 1987 HIG goes further: "Keep the user informed. Provide immediate feedback" [12, p. 7], and "There should be no secrets from the user, no abstract commands that only promise future results" [12, p. 6]. Its Copy section says only that "Copy puts a duplicate of the selection in the Clipboard" [12, p. 83]. The HIG offers a sound "when the user tries to paste when there's nothing in the Clipboard" [12, p. 36], a failed Paste, and nothing for Copy.

**Feedback verdict.** Silent for Copy. The check was Show Clipboard, optional and taught after a Cut. `menu-title-lead.md` covers the menu-title highlight on Command-C, which marked any Command-key equivalent, not copy in particular.

### IBM CUA, 1987 and 1989

The 1987 spec could not be read. "Systems Application Architecture: Common User Access Panel Design and User Interaction", SC26-4351, is not on bitsavers or archive.org, and nothing else found has a copy. Everything below is from IBM documents that describe or replace it. What SC26-4351 said about copy is UNCONFIRMED.

Berry's 1988 article, by IBM, states the feedback rule. "Feedback is provided for almost every user interaction", and "Audio beeps are used when users' action requests do not cause normally expected results" [13, p. 286]. It treats copying blocks of text as the application's own business, outside CUA's defined components [13, p. 297]. Its Figure 2 shows a terminal panel whose File pull-down holds Copy, Move and Delete [13, p. 282]. It never mentions a clipboard, Cut or Paste.

The 1989 Basic Interface Design Guide replaced the 1987 spec. "This Basic Guide and the Advanced Guide replace the Systems Application Architecture, Common User Access: Panel Design and User Interaction, SC26-4351" [14, FRONT_1.4]. Its Edit pull-down lists Undo, Mark, Cut, Copy, Paste and Unmark [14, 2.5.4.1.2]. The guide walks through what the user sees for Cut, "The selected paragraph disappears from its location in the document", and for Paste. For Copy it gives only the definition: "Copy produces a duplicate of the selected portion of an object on the clipboard without removing the selected portion from the object that is being edited" [14, 2.5.4.1.2].

Its own rules call for more. "Users should never perform an action without receiving visual feedback, audible feedback, or both" [14, 1.2.4.3]. "Issue an information message to tell users that an action has been completed if there is no other visible indication" [14, 3.11.5]. By that rule a copy needed a message, since nothing on screen changes. The Edit pull-down section never applies it. That conclusion is mine, not IBM's.

A failed copy did get a message. If an action needs a selection and there is none, "present a message that tells users to select an object" [14, 3.5.7.4].

**Feedback verdict.** Silent on a successful copy, against the guide's own feedback rules. A copy with nothing selected gets a message.

### Early Windows, 1985 to 1987

Windows 1.0 defined Copy the same way. "The Copy command makes a copy of the selected information and places it on the Clipboard, leaving the selected information in its original location" [15, p. 92]. The user's guide shows how to see a copy: a figure pairs Notepad with the Clipboard window, captioned "This text was copied." and "The text appears in the Clipboard", and the text says "Run CLIPBRD.EXE from the MS-DOS Executive Window." [15, p. 93]. The system told Clipboard viewer programs about each change through WM_DRAWCLIPBOARD [16, p. 382], but nothing told the user.

The 1987 style guide handles only the failure case. "If no current selection exists, the Cut, Copy, and Clear commands should be disabled" [17, section 2.8, p. 23]. The keys were Shift+Delete for Cut, Control+Insert for Copy and Shift+Insert for Paste [17, section 3.5, p. 30], and they "should not invoke their respective commands if there is no selection" [17, section 3.5, p. 31]. It reserves message boxes for "only when an error occurs or when the application must supply information that the user needs" [17, section 9.1, p. 75], and the beep for "a minor and obvious error" [17, section 9.3, p. 76]. The word "feedback" does not appear.

Microsoft's sample code fails a copy without a word. In the 2.0 Programmer's Learning Guide, the Copy handler just stops if memory runs out or `OpenClipboard` fails, and the user is told nothing [18, pp. 230, 231].

**Feedback verdict.** Silent for Copy. The only copy signal is a dimmed menu item when nothing is selected. The check was the Clipboard viewer.

## Later and adjacent systems

These fall outside the ticket's four sources, but they show that feedback for copy was possible and was left out.

**Bravo, the Alto editor Gypsy grew from.** Bravo marked a copy selection with a dotted underline and showed the last deletion and the last insertion in its system window [19, pp. 36, 56]. That is the 1979 manual. The 1976 edition was not found.

**Xerox Star, 1981.** Star had a Copy key and no clipboard. The user selected an object, pressed COPY, and pointed at a destination. The spec says Copy "proceeds exactly as with Move, except that a slightly different cursor shape is used", and the new copy ends up selected [20, section 5, pp. 30, 31]. Move and Copy show a prompt in the Message Area [20, p. 30]. The designers stated the rule outright: "You never invoke a command or push a key and have nothing visible happen" [21, p. 262], and "Each generic command has a key devoted to it on the keyboard" [21, p. 268].

**CUA, 1992.** The later IBM guidelines turn the silence into a rule. "When a user copies an object to the clipboard, do not change the state of the source object" [22, 2.2.19]. Copy shows unavailable when nothing is selected [22, 2.2.19], and choosing an unavailable item beeps [22, 2.2.6]. This is the nearest thing to a stated reason for leaving the screen unchanged, and it gives no reason of its own.

**Windows 3.x, 1989 to 1992.** The user's guides still send users to the viewer: "Make sure the information you want to paste is on the Clipboard" [23, p. 59] [25, p. 61]. The Windows 3.0 SDK had no Microsoft style guide and told developers to follow IBM's CUA Advanced Interface Design Guide [24, p. xxi]. The 1992 design guide says "The user should receive immediate and tangible feedback for actions within an application" [26, section 1.1.6, p. 4], and that feedback can "acknowledge a command" [26, section 3.6, p. 37]. It dims Copy with no selection [26, p. 94] and gives no acknowledgement for Copy from the menu or the keys. It does give one for the pen Copy gesture: "Feedback: copy pointer flashes." [26, Table 10.2, p. 197]. Dragging with the mouse could also change the pointer to show Copy [26, section 3.6.1.1.2, p. 40]. The same guide calls the beep unreliable, because it leaves no trace and users can turn it off [26, section 3.6.2, p. 42].

## Why copy ended up silent

No source gives a reason. What follows is my reading of the sources, not a claim any of them makes.

- Copy changes no data, so it never triggered the rules written for changes. Cut and Paste move text on screen. Copy does not, and the guidelines describe only what the command does.
- The early answer was a visible clipboard, not a signal. Gypsy, Bravo and the Lisa kept the clipboard's contents on screen [1, p. 2] [19, p. 56] [5, p. B17]. When the Mac and Windows made that window optional, nothing replaced it [9, p. I-58] [15, p. 93].
- Feedback channels were reserved for errors. Beeps and message boxes were for minor errors in the Mac and Windows guidelines [17, pp. 75, 76] [26, p. 42]. A successful copy had no channel left.
- The guidelines put their effort into the failure case. They dim the command or show a message when nothing is selected [4, p. 15] [14, 3.5.7.4] [17, p. 23]. `menu-title-lead.md` has Apple's version of this rule.
- The Macintosh, CUA and 1992 Windows guidelines each have a general feedback rule that should have covered copy [9, p. I-31] [12, p. 7] [13, p. 286] [14, 1.2.4.3] [26, p. 4]. None of them notices that Copy breaks it.
- Star shows the other path was open. It gave copy a cursor, a prompt and a new selection [20] [21].

## Open questions

- What did SC26-4351, the 1987 CUA spec, say about copy, the clipboard and copy keys? UNCONFIRMED. A copy of SC26-4351 would settle it. The Computer History Museum holds a paper copy of the 1989 Advanced Guide, SC26-4582, which would be the next best source.
- Did Gypsy have Copy and Undo keys, as Tesler recalls? UNCONFIRMED. Both manuals say no. The Gypsy source in the Computer History Museum's Alto file archive would settle it.
- Did "copy and paste" as a phrase start with Gypsy? UNCONFIRMED. Tesler hedges it himself. An earlier dated use of the paired phrase would refute it.
- Did the shipped Lisa dim Copy when nothing was selected? UNCONFIRMED. The 1980 rule is stated for Cut. The full 1983 Lisa User Interface Guidelines would settle it. Only a 24-page excerpt is online: https://archive.org/download/apple-hig/1983_Lisa_UI_Guidelines.pdf
- Did Command-C with nothing selected wipe the Clipboard in real Mac apps? UNCONFIRMED. TECopy empties the TextEdit scrap [9, p. I-386]. MacWrite 1.0 behaviour or a Technical Note on TEToScrap would settle it.
- Why did Inside Macintosh move from "will usually" have a Clipboard window to "can show" one? UNCONFIRMED. Apple design memos, or the 1986 HIG beta draft in the archive.org `apple-hig` item, might say.
- Did the 1986 Windows Application Style Guide match the 1987 one? UNCONFIRMED. os2museum lists it as unavailable.

## Sources

1. Tesler, Larry, and Timothy Mott. Gypsy: The Ginn Typescript System. Xerox PARC, 20 April 1975, filed on the Alto as GYPSY.EARS with a cover note dated 4 August 1975. Page numbers printed at the foot of each page. Pages 2 (screen layout, waste basket), 4 to 6 (selections, CUT and PASTE), 8 (messages, modes, credits), 9 (command summary). https://www.bitsavers.org/pdf/xerox/alto/memos_1975/Gypsy_The_Ginn_Typescript_System_Apr75.pdf and https://archive.org/details/bitsavers_xeroxaltomnTypescriptSystemApr75_537724
2. Gypsy Operator's Handbook. Xerox PARC and XEOS, 11 May 1978. Pages 7, 10, 11, 19 and 20. https://archive.org/details/bitsavers_xeroxaltogandbookMay1978_991002
3. Tesler, Larry. "A Personal History of Modeless Text Editing and Cut/Copy-Paste." ACM Interactions 19(4), July and August 2012, pp. 70 to 75. DOI 10.1145/2212877.2212896. A retrospective. Cited by section heading. https://interactions.acm.org/archive/view/july-august-2012/a-personal-history-of-modeless-text-editing-and-cut-copy-paste
4. Lisa User Interface Standards, Lisa Document #420, 20 September 1980. Apple Computer, from the David T. Craig archive. Sections 44 to 46 (pp. 15 and 16), p. 12 (Apple-key shortcuts). https://archive.org/download/apple-hig/1980_Lisa_UI_Standards.pdf
5. Lisa Owner's Guide. Apple Computer, 1983. Pages B13 (Table 1, desktop objects), B17 (the Clipboard). https://archive.org/details/bitsavers_applelisaorsGuide1983_10448859
6. LisaWrite, A6L0144. Apple Computer, 1983. Pages B9, B10, B15, B16 (tutorial), C33, C34 (reference). https://archive.org/details/bitsavers_applelisaoisaWrite1983_9642237
7. Inside Macintosh pre-release binder. Apple Computer, 1983 to 1984. Scrap Manager Programmer's Guide draft dated 10/21/83 (Rose), About the Scrap Manager. Scan titled "Inside Macintosh Vol 1 1984". https://archive.org/details/bitsavers_applemacIn84_27699101
8. Inside Macintosh, Promotional Edition. Apple Computer, 1985, chapters dated 11/30/84. User Interface Guidelines, p. 42. https://archive.org/details/bitsavers_applemacInionalEdition1985_53888388
9. Inside Macintosh, Volume I. Apple Computer, Addison-Wesley, 1985. Pages I-15 (sample program), I-31 (feedback), I-58 and I-59 (the Clipboard, Copy), I-381, I-385 and I-386 (TextEdit TECut and TECopy), I-453 (Scrap Manager). https://vintageapple.org/inside_o/pdf/Inside_Macintosh_Volume_I_1985.pdf
10. Macintosh, owner's manual, part 030-0687. Apple Computer, 1983, shipped with the Macintosh 128K in 1984. Pages 33 and 34 (tutorial), 61 (To Copy Text). https://archive.org/details/macintosh-manual-1984-030-0687
11. MacWrite, manual, reorder M1502. Apple Computer, 1983. Pages 33 (tutorial), 129 (memory messages). https://archive.org/details/macwrite
12. Human Interface Guidelines: The Apple Desktop Interface. Apple Computer, Addison-Wesley, 1987. Pages 6 and 7 (principles), 36 (sounds), 83 (Copy). https://archive.org/download/apple-hig/Apple_Human_Interface_Guidelines_1987.pdf
13. Berry, R. E. "Common User Access: A consistent and usable human-computer interface for the SAA environments." IBM Systems Journal 27(3), 1988, pp. 281 to 300. Pages 282 (Figure 2), 286 (feedback), 297 (application tasks). https://archive.org/details/ibmsj2703E
14. Systems Application Architecture, Common User Access: Basic Interface Design Guide, SC26-4583-00. IBM, December 1989. A printout of the online book, cited by topic number: FRONT_1.4, 1.2.4.3, 2.5.4.1.2, 3.5.7.4, 3.11.5. https://archive.org/details/ibm-saa-cua-basic-interface-design-guide
15. Microsoft Windows User's Guide. Microsoft, 1985, for Windows 1.0. Chapter 6, Using the Clipboard, pp. 91 to 93. https://archive.org/details/microsoft-windows-1.0-users-guide
16. Microsoft Windows Software Development Kit: Programmer's Reference, version 1.03, document 050051053-103-I01-1086. Microsoft, 1986. Page 382 (WM_DRAWCLIPBOARD). https://archive.org/details/windows-1.03-sdk-prgref-1986
17. Microsoft Windows Software Development Kit: Application Style Guide, version 2.0, document 050051016-200-I01-1087. Microsoft, 1987. Sections 2.8 (p. 23), 3.5 (pp. 30 and 31), 9.1 (p. 75), 9.3 (p. 76). https://www.os2museum.com/files/docs/win20sdk/windows-2.0-sdk-styleguide-1987.pdf
18. Microsoft Windows 2.0 SDK: Programmer's Learning Guide, document 050051052-200-I02-1087. Microsoft, 1987. Section 13.2.1, pp. 230 and 231. https://archive.org/details/part-no-00477-document-no-050051052-200-102-1087-microsoft-windows-2.0-sdk-progr
19. Lampson, Butler, and Charles Simonyi. "Bravo Manual." In Alto User's Handbook, Xerox PARC, September 1979, pp. 31 to 62. Pages 36 and 56. https://archive.org/details/bitsavers_xeroxaltoA79_13724537
20. STAR Release 1 Product Software Functional Specification, version 5.3, 596P81779. Xerox Office Products Division, 15 April 1981. Section 5, pp. 20, 21, 30 and 31. https://archive.org/details/bitsavers_xeroxstarSoftwareFunctionalSpecificationVer5.31981_32605652
21. Smith, David Canfield, Charles Irby, Ralph Kimball, Bill Verplank, and Eric Harslem. "Designing the Star User Interface." BYTE 7(4), April 1982, pp. 242 to 282. Pages 262 and 268. https://archive.org/details/byte-magazine-1982-04-rescan
22. Object-Oriented Interface Design: IBM Common User Access Guidelines, SC34-4399-00. IBM, December 1992. Replaces SC34-4289 and SC34-4290 of 1991. Topics 2.2.6 and 2.2.19. https://archive.org/details/sc34-4399-00
23. Microsoft Windows User's Guide. Microsoft, September 1989, for Windows 3.0. Page 59. https://archive.org/details/bitsavers_microsoftwUsersGuide198909_23166485
24. Microsoft Windows Guide to Programming. Microsoft, 1990, Windows 3.0 SDK. Introduction, p. xxi. https://archive.org/details/bitsavers_microsoftwindowsGuidetoProgramming1990_22430376
25. Microsoft Windows User's Guide, PC21669-0492. Microsoft, April 1992, for Windows 3.1. Page 61. https://archive.org/details/bitsavers_microsoftwindows3.1PC216690492Windows3.1UsersGuide_27129713
26. The Windows Interface: An Application Design Guide, PC28921-0692. Microsoft, June 1992, Windows 3.1 SDK. Sections 1.1.6 (p. 4), 3.6 (p. 37), 3.6.1.1.2 (p. 40), 3.6.2 (p. 42), Table 5.5 (p. 94), Table 10.2 (p. 197). https://archive.org/details/bitsavers_microsoftwindows3.1SDK1992PC289210692WindowsInterf_13508361

About FlashCard Quiz Demo

This FlashCard Quiz Demo is a lightweight, single-file web application (HTML/CSS/JavaScript) designed for interactive learning using digital flashcards.

Purpose

Practice recall and reinforce memory by answering short question/answer flashcards. The app encourages active retrieval with a short timed window for each question.
Features

Add, edit, and delete flashcards directly in the interface.
Local persistence: all cards are stored in your browser's localStorage under the key flashcards_v1 (data stays on your device).
Timed challenge: each question gives you a limited time to type an answer (default 15 seconds).
Progress bar and countdown display under the question.
Answer input field: type your answer and press Submit Answer to check.
On correct answers you see a celebratory message and the answer is revealed; on incorrect answers you see a retry prompt and can try again.
Navigation (Previous / Next) is disabled until the current card has been revealed or correctly answered to ensure focused practice.
Card flipping: click the card or use the "Show Answer" button to reveal the answer manually.
Theme toggle: switch to a warm “amber” theme; preference is saved to localStorage.
Accessible modal dialogs and controls with keyboard support: Escape closes modals.
How it works

When you load a card the timer starts automatically. Type your best answer in the input field and press Submit Answer. If your typed answer (case-insensitive) matches the stored answer exactly, the app displays “You got it 🎉”, flips the card, and enables navigation. If it doesn't match, the app displays “Wrong Answer, play again.” and restarts a short timer so you can try again.
Data & Privacy

All data (flashcards and theme preference) is stored locally in your browser's storage. The app does not send or sync data to any server. Clearing your browser data will remove saved flashcards.
Limitations

No cloud sync or export/import by default (you can view localStorage in the browser devtools to copy the JSON manually).
Answer checking is a simple exact (trimmed, case-insensitive) match. It does not use fuzzy matching or natural-language similarity.
There is no user authentication — intended as a local demo only.
Technical Details

Single-file app: all styles and scripts are embedded in App.html.
Vanilla JavaScript without external libraries for maximum portability.
Responsive layout supports mobile and desktop screens.
Accessibility

Uses semantic HTML where possible, focusable controls, and keyboard shortcuts for convenience. Modal dialogs include role="dialog" and aria-modal="true". (Please report any accessibility gaps.)
Keyboard Shortcuts

Escape: Close open modal dialogs.
Navigation: Use the Previous/Next buttons (mouse or touch).
Extending the App

You can extend this demo by adding import/export (JSON), fuzzy answer matching, spaced-repetition scheduling, or syncing to a remote backend. The code is intentionally compact and commented to make these changes straightforward.
Credits & License

Created as a demo. Feel free to reuse and modify the code for personal or instructional use. No external dependencies included.
GPT-5 mini • 1x

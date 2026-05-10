# Implement Floating Action Note for Clone Tab

This update will implement a modern Floating Action Button (FAB) in the bottom-right corner of the Clone tab. Clicking this button will reveal a sleek, glassmorphic popover containing the "Important Notes." This ensures the notes are always accessible without cluttering the main timeline view, even when scrolling through long sections.

## User Review Required

> [!NOTE]
> The notes will be hidden by default and accessible via a floating "i" icon in the bottom-right corner of the screen.

## Proposed Changes

### `vibe-code` (UX Modernization)

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Update `renderClone(day)` to manage a floating action button (FAB) and a popover.
- Ensure any previous notes box is removed from the DOM.
- Implement toggle logic for the FAB to show/hide the popover.
- Add an event listener to close the popover when clicking outside or on a close button.

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Remove the previous `.clone-notes-box` styles.
- Style the `.clone-notes-fab`: fixed position, circular, high-contrast, with a subtle pulse or hover animation.
- Style the `.clone-notes-popover`: glassmorphic effect (`backdrop-filter: blur`), fixed position near the FAB, elegant typography, and a "slide-in" animation.
- Ensure the popover is responsive and stays within viewport bounds on smaller screens.

## Checklist

- [x] Modify `script.js` to dynamically create and manage the FAB and popover lifecycle in `renderClone`.
- [x] Add floating button and popover styles to `style.css` (including glassmorphism).
- [x] Implement toggle and close interactions in `script.js`.
- [x] Clean up unused CSS from previous iterations.
- [x] Verify the floating behavior and popover appearance across different scroll positions.

## Verification Plan

### Manual Verification
1.  Open the application in the browser and navigate to the **Clone** tab.
2.  Verify the FAB appears in the bottom-right corner.
3.  Scroll down the page and confirm the FAB remains fixed in place.
4.  Click the FAB to open the popover and verify the glassmorphic styling and notes content.
5.  Test closing the popover via the close button and by clicking away.
6.  Switch to another tab (e.g., Intro) and verify the FAB is removed or hidden.

# Implement Bento Sidebar for Clone Notes

This plan outlines the steps to reorganize the "Clone" tab header into a two-column Bento-style grid. This will place the page focus/description on the left and the "Important Notes" section in a compact card on the right, saving vertical space and improving layout consistency.

## User Review Required

> [!IMPORTANT]
> The layout will shift from a centered header to a split-column grid on desktop, reverting to a stacked layout on mobile.

## Proposed Changes

### `vibe-code` (UI Layout Refactoring)

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Update `renderClone(day)` to wrap the title/description and the notes section in a new container (`clone-header-grid`).
- Remove inline centering styles from the header div to allow the grid to control alignment.

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Define `.clone-header-grid` with `display: grid`.
- Adjust `.clone-notes-box` to fit better as a sidebar element (removing wide margins and centering).
- Add responsive overrides to stack the columns on mobile viewports.
- Ensure `.section-description` alignment is corrected when inside the grid.

## Checklist

- [ ] Modify `script.js` to implement the new grid HTML structure in `renderClone`.
- [ ] Add grid and alignment styles to `style.css`.
- [ ] Add mobile responsiveness for the new header grid.
- [ ] Verify that the "Snippets" and "Intro" tabs are unaffected by these changes.
- [ ] Manually verify the Clone tab layout in the browser.

## Verification Plan

### Manual Verification
1.  Open the local development site.
2.  Navigate to the **Clone** tab.
3.  Confirm the Header and Notes are side-by-side on desktop.
4.  Resize the browser to mobile width and confirm they stack vertically.
5.  Check the **Intro** and **Snippets** tabs to ensure no regression in their centered layouts.

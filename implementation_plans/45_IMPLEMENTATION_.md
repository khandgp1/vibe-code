# Implement Collapsible Accordion for Clone Notes

This update will implement a minimalist, collapsible accordion for the "Important Notes" section in the Clone tab. This keeps the initial view clean and focused on the timeline while providing easy access to technical constraints and workflow tips when needed.

## User Review Required

> [!NOTE]
> The notes will be collapsed by default under a "View Workflow Constraints" toggle.

## Proposed Changes

### `vibe-code` (UI Refinement)

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Update `renderClone(day)` to wrap the notes in a `<details>` and `<summary>` structure.
- Label the summary toggle as "[i] View Workflow Constraints".
- Position the accordion between the header and the timeline.

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Remove/Refactor the previous `.clone-notes-box` styles.
- Add styles for `.clone-notes-accordion` to ensure it matches the app's matte aesthetic (subtle borders, clean typography).
- Style the `<summary>` to look like a clean, clickable button with a hover state.
- Ensure the expanded content has appropriate padding and list styling.

## Checklist

- [ ] Modify `script.js` to use a `<details>`/`<summary>` structure for the notes.
- [ ] Add accordion styling to `style.css`.
- [ ] Implement smooth transition effects for the accordion expansion (if possible with CSS).
- [ ] Clean up unused CSS from previous iterations.
- [ ] Verify the toggle functionality and visual consistency in the browser.

## Verification Plan

### Manual Verification
1.  Open the application in the browser.
2.  Navigate to the **Clone** tab.
3.  Confirm that the notes are hidden by default and only the toggle is visible.
4.  Click the toggle and verify that the notes expand correctly.
5.  Check that the styling (colors, borders, spacing) feels integrated with the rest of the page.

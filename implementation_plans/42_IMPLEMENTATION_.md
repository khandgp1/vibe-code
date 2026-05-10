# Add Notes Section to Clone Tab

This update will add a designated "Notes" section to the "Clone" tab, highlighting key constraints and workflow tips for the cloning process (e.g., Bolt.new limits, initial production scope, and the transition to AntiGravity + Claude). We will use a design pattern that fits the existing UI, potentially a visually distinct "Pro Tip" or alert box.

## User Review Required

- Please review the proposed text and design approach to ensure it aligns with your vision.

## Open Questions

- Should the notes be placed at the top of the Clone tab (before the timeline steps) or at the bottom? The plan assumes the top for better visibility.

## Proposed Changes

### `vibe-code` (UI and Data Updates)

#### [MODIFY] [program.json](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/program.json)
- Add a new `notes` array to the "Clone" day data structure to store the content of the notes.
- Reworded notes:
  - "Bolt.new usage is limited; you can create approximately 4 clones before hitting limits."
  - "Use Bolt strictly to build the initial production version containing ONLY the navigation and hero sections."
  - "Transition to AntiGravity + Claude to interactively generate all remaining sections."

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Update the `renderClone(day)` function to check for the presence of notes in the data.
- Inject a styled notes container (e.g., leveraging the existing `pro-tip` CSS pattern or creating a new cohesive one) into the generated HTML for the Clone tab, positioned prominently before the timeline.

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css) (if necessary)
- Add any required CSS classes for the new notes section if the existing classes (like `pro-tip`) need tweaking for this specific context.

## Checklist

- [x] Update `program.json` with the reworded notes for the Clone tab.
- [x] Modify `script.js` to render the notes section in the `renderClone` function.
- [x] Add or update CSS in `style.css` to ensure the notes look visually distinct and consistent with the app's design language.
- [x] Verify the notes render correctly on the Clone tab without breaking the timeline layout.

## Verification Plan

### Manual Verification
- Open the application locally in the browser.
- Navigate to the "Clone" tab.
- Verify that the notes section is displayed with the correct text and styling.
- Verify that the rest of the Clone tab's timeline layout remains intact.

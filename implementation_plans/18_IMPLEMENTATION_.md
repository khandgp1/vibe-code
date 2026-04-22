# Implementation Plan - Instructional Spacing Equalization

This plan outlines the final refinement of the vertical spacing for workflow markers in the Kickstart drawer. The goal is to achieve mathematically equal spacing above and below the transitional instructional text to ensure a balanced, symmetric layout.

## Proposed Changes

### [Symmetric Spacing Refinement]

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Update the `.workflow-marker` class to use symmetric margins.
- **`.workflow-marker` Styling**:
  - Update `margin` to `35px 0;` (or a standardized value that accounts for margin-collapsing with `.prompt-box`).
  - Since `.prompt-box` has a `margin-top: 15px;`, a marker margin of `margin: 30px 0;` would result in a `30px` gap above (marker's top margin) and a `30px` gap below (the larger of marker's `30px` bottom margin and box's `15px` top margin).
  - I will use `margin: 30px 0;` to provide a generous, equalized breathing room.

---

## Progress Checklist

- [x] Create implementation plan `18_IMPLEMENTATION_.md`
- [x] Analyze margin-collapsing logic between `.workflow-marker` and `.prompt-box`
- [x] Implement symmetric `30px` vertical margins for `.workflow-marker` in `style.css`
- [x] Verify equal spacing for the middle instruction (between cards)
- [x] Verify equal spacing for the bottom instruction (Evaluate, Iterate, Complete)
- [x] Ensure the top instructional text still feels correctly placed relative to its header (since it doesn't use the workflow-marker class)

## Verification Plan

### Manual Verification
- Open the "THE KICKSTART: AI BLUEPRINTING" drawer.
- Use a visual guide (or browser inspector) to confirm the distance from the bottom of the first prompt box to the middle instruction is identical to the distance from that instruction to the top of the second prompt box.
- Confirm the bottom-most instruction has consistent padding/margin relative to the element above it and the base of the drawer.

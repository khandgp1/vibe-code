# Implementation Plan - Layout Cleanup & Spacing Refinement

This plan outlines the removal of the "Execution Strategy" section from the Kickstart drawer and the refinement of spacing for the boilerplate prompt instructions to match the established design pattern of the framework subtitle.

## Proposed Changes

### [Layout Cleanup]

#### [DELETE] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- Remove the entire `<section class="execution-strategy">` block (Lines 88–110). This declutters the drawer and focuses the user on the prompt engineering workflow.

### [Spacing Refinement]

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Update the `.minor-instruction` class to mirror the spacing of `.framework-subtitle`:
  - Add `margin-top: -10px;` to tighten the gap between the "Master Blueprint" header and the instruction text.
  - Standardize the `margin-bottom` to match if necessary.

---

## Progress Checklist

- [x] Create implementation plan `15_IMPLEMENTATION_.md`
- [x] Analyze current CSS spacing of `.framework-subtitle`
- [x] Remove `EXECUTION STRATEGY` section from `index.html`
- [x] Implement `margin-top: -10px` for `.minor-instruction` in `style.css`
- [ ] Verify vertical rhythm and spacing consistency in the drawer
- [ ] Verify the removal of the strategy section doesn't break the drawer layout

## Verification Plan

### Manual Verification
- Open the drawer.
- Confirm the `EXECUTION STRATEGY` section is no longer visible.
- Verify the gap between `THE "MASTER BLUEPRINT" PROMPT` and `Copy and paste...` is identical to the gap between `THE T.C.R.E.I. FRAMEWORK` and `Tiny Crabs Ride Enormous Iguanas`.
- Ensure the drawer content ends smoothly after the personalized prompt card.

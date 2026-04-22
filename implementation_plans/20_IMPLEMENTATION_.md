# Implementation Plan - Final Instruction Spacing Refinement (Phase 2)

This plan outlines the further reduction of vertical spacing for the bottom-most workflow instruction ("Evaluate, Iterate, Complete"). Following the previous reduction to 15px, this update will cut the spacing in half again to approximately 8px, creating a very tight, integrated anchor at the base of the drawer.

## Proposed Changes

### [Ultra-Tight Spacing Adjustment]

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Update the `.final-instruction` class.
- **`.final-instruction` Styling**:
  - Reduce `margin` from 15px to **8px 0**.
  - This ensures the final workflow step sits directly below the prompt cards with minimal separation.

---

## Progress Checklist

- [x] Create implementation plan `20_IMPLEMENTATION_.md`
- [x] Update `.final-instruction` margin to 8px in `style.css`
- [ ] Verify the visual connection between the last prompt box and the final instruction
- [ ] Ensure the drawer logic and overall vertical flow remain professional

## Verification Plan

### Manual Verification
- Open the "THE KICKSTART: AI BLUEPRINTING" drawer.
- Confirm the spacing around "Evaluate, Iterate, Complete" is now significantly tighter (8px).
- Verify the transition feels like a direct footnote to the prompt engineering section.

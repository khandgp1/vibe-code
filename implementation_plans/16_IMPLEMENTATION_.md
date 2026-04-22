# Implementation Plan - Prompt Refinement & Final Layout Adjustments

This plan outlines text refinements to existing prompt components and the addition of two transitional instructions to better guide the user through the blueprinting workflow.

## Proposed Changes

### [Kickstart Drawer: Text & Layout Adjustments]

#### [MODIFY] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- **Boilerplate Persona Update**:
  - Update `a Senior Software Architect` to `an Expert Software Architect` (Line 64).
- **Requirement Optimization**:
  - Update `Suggest best practices and a modern tech stack.` to `Suggest best practices and a tech stack.` (Line 71).
- **Middle Instruction [NEW]**:
  - Insert `<p class="minor-instruction">Copy and paste this to complete the initial prompt</p>` between the Boilerplate Prompt and Personalized Prompt boxes (around Line 74).
- **Tech Stack Placeholder**:
  - Update `I want to use the R language exclusively.` to `[e.g., I want to use the R language exclusively.]` (Line 83).
- **Final Instruction [NEW]**:
  - Insert `<p class="minor-instruction">Evaluate, Iterate, Complete</p>` at the bottom of the `blueprint-layout` section, after the last prompt box (around Line 86).

---

## Progress Checklist

- [x] Create/Update implementation plan `16_IMPLEMENTATION_.md`
- [x] Implement Boilerplate Persona text change
- [x] Implement Architecture Requirements simplification
- [x] Add transitional instruction between prompt blocks
- [x] Add brackets to Tech Stack example in Personalized Prompt
- [x] Add final "Evaluate, Iterate, Complete" instruction at the bottom
- [x] Verify vertical spacing and visual flow of all components

## Verification Plan

### Manual Verification
- Open the "THE KICKSTART: AI BLUEPRINTING" drawer.
- Verify the persona reads "Expert Software Architect."
- Verify the first instruction reads "Copy and paste this to complete the initial prompt" between the cards.
- Verify the second instruction reads "Evaluate, Iterate, Complete" at the bottom of the drawer.
- Confirm the `[e.g., ...]` brackets are present in the personalized card.
- Ensure the `minor-instruction` class correctly applies consistent styling to both new elements.

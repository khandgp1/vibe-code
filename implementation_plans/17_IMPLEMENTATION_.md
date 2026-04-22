# Implementation Plan - Instructional Spacing Refinement

This plan outlines the refinement of vertical spacing for transitional instructions within the Kickstart drawer. The goal is to provide better visual separation between the prompt components and ensure the workflow markers are properly balanced.

## Proposed Changes

### [Spacing & Typography Refinement]

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Introduce a new specific class `.workflow-marker` to handle instructions that appear between components or at the end of sections.
- **`.workflow-marker` Styling**:
  - Inherit the typography from `.minor-instruction` (font-size: 0.8rem, color: #888).
  - **Remove the negative margin-top** (which was pulling text into overlapping components).
  - Set `margin: 25px 0 15px 0;` to create a clear, intentional gap between the prompt blocks.
  - Set `text-align: center;` to distinguish these as transitional "workflow" steps rather than sub-labels for headers.

#### [MODIFY] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- Update the middle instruction and the bottom instruction to use the new `.workflow-marker` class.
  - **Change**: `<p class="minor-instruction">Copy and paste this to complete the initial prompt</p>` 
  - **To**: `<p class="workflow-marker">Copy and paste this to complete the initial prompt</p>`
  - **Change**: `<p class="minor-instruction">Evaluate, Iterate, Complete</p>`
  - **To**: `<p class="workflow-marker">Evaluate, Iterate, Complete</p>`

---

## Progress Checklist

- [x] Create implementation plan `17_IMPLEMENTATION_.md`
- [x] Analyze current CSS collision issues (negative margin on transitional text)
- [x] Implement `.workflow-marker` class in `style.css`
- [x] Update `index.html` with the new classes for middle/bottom instructions
- [ ] Verify vertical rhythm and balance between the two prompt boxes
- [ ] Ensure the top instructional text (under the first header) remains tightly coupled to its heading

## Verification Plan

### Manual Verification
- Open the "THE KICKSTART: AI BLUEPRINTING" drawer.
- Verify that the first instruction (START your prompt) remains close to the header.
- Verify that the second instruction (complete the initial prompt) is centered and has clear, even spacing between the two sandstone prompt boxes.
- Verify that the bottom instruction (Evaluate, Iterate, Complete) is centered and positioned cleanly at the base of the drawer.

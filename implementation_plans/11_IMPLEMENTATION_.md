# Implementation Plan - Boilerplate Prompt Content Update

This plan outlines the update of the content inside the "Master Blueprint" prompt box. The goal is to replace the old R-centric multi-step prompt with a more general, professional software architecture roadmap prompt, formatted for maximum aesthetic clarity.

## Proposed Changes

### [Prompt Content Refined]

#### [MODIFY] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- Replace the content within `<pre><code>` (lines 64-79) with the following professionally formatted text:
  ```text
  Act as a Senior Software Architect. Your task is to create a detailed, step-by-step roadmap for a new project. This roadmap must outline features, file structures, and logic—without writing the actual implementation code yet.

  Architecture Requirements:
  * Modular component structure with separate files for each major section.
  * Keep individual files short (approx. 600 lines max) to simplify future refactoring.
  * Prioritize robust, reusable code blocks for future scalability.
  * Use placeholders for complex state management; focus on logic flow.
  * Suggest best practices and a modern tech stack.
  * Format the entire output in Markdown for easy copying.
  ```

- **Formatting Enhancements**:
  - Add a blank line between the persona definition and the requirements header.
  - Standardize bullet points for clean scanning.
  - Ensure no redundant "Step 1/2" headers remain, simplifying the user interface.

---

## Progress Checklist

- [x] Create implementation plan `11_IMPLEMENTATION_.md`
- [x] Define refined prompt text & professional formatting
- [x] Update `index.html` with new prompt content
- [ ] Verify text alignment and legibility in the current Sandstone box
- [ ] Verify the "Copy" button still captures the new content correctly

## Verification Plan

### Manual Verification
- Open "THE KICKSTART: AI BLUEPRINTING" drawer.
- Verify the new prompt text is visible and correctly formatted.
- Test the "Copy" button to ensure the entire new prompt is copied to the clipboard.
- Confirm the text looks "premium" and well-spaced within the sandstone component.

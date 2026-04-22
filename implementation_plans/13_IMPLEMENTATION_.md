# Implementation Plan - Personalized Prompt Component

This plan outlines the addition of a second prompt component titled "Personalized Prompt" to the Kickstart drawer. This component will mirror the "Sandstone" aesthetic of the Boilerplate Prompt and will be placed directly below it.

## Proposed Changes

### [New Prompt Component]

#### [MODIFY] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- Add a new `.prompt-box` div immediately after the existing one.
- Header Title: `Personalized Prompt`.
- Content inside `<pre><code>`:
  ```text
  The Project Specifics:
  Now, apply the requirements above to the following project:
  * Goal: [e.g., ETL + Data Cleaning + Basic Data Analysis for a CDC Project focused on Census Demographics]
  * Tech Stack: I want to use the R language exclusively.
  * Sample Data: [Paste your sample data or schema here]
  ```

### [Multi-Prompt Copy Support]

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Update the "Setup Copy Button" logic to use `document.querySelectorAll('.copy-btn')`.
- Iterate through all copy buttons found to ensure both the Boilerplate and Personalized prompts are functional.

---

## Progress Checklist

- [x] Create implementation plan `13_IMPLEMENTATION_.md`
- [x] Define "Personalized Prompt" content and layout
- [x] Add the new `.prompt-box` to `index.html`
- [x] Refactor `script.js` to support multiple copy buttons
- [ ] Verify both "Copy" buttons work independently
- [ ] Verify visual consistency between the two prompt components

## Verification Plan

### Manual Verification
- Open "THE KICKSTART: AI BLUEPRINTING" drawer.
- Confirm both "Boilerplate Prompt" and "Personalized Prompt" are visible.
- Click the "Copy" button for the Boilerplate prompt; verify it copies the correct text.
- Click the "Copy" button for the Personalized prompt; verify it copies the correct text.
- Ensure both buttons show the "Copied!" feedback independently.

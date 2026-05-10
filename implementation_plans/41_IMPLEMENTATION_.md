# Update Bolt Clone Prompt Formatting

The user wants to update the formatting of the "Bolt Clone Prompt" in the "Clone" tab of the application. The goal is to make it more readable by adding bullet points, proper spacing, and updating the placeholder URL.

## User Review Required

> [!IMPORTANT]
> The implementation updates the prompt content in `program.json`. This content is rendered within a `<pre><code>` block in `script.js`, so the formatting (newlines, indentation) will be preserved as defined in the JSON.

## Proposed Changes

### Configuration Data

#### [MODIFY] [program.json](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/program.json)
- Update the `content` field for the "The Bolt Clone Prompt" exercise (index 2 in the "Clone" section).
- The new content will include bulleted lists for "Technology Stack Requirements", "Visual Accuracy Requirements", "Technical Constraints", and "Code Quality Standards".
- The placeholder `URL: https://expertsremodel.com` will be updated to `URL: []`.

## Verification Plan

### Automated Tests
- None applicable for this content update.

### Manual Verification
1. Open the application in the browser.
2. Click on the "CLONE" tab.
3. Verify that the "Bolt Clone Prompt" section displays the updated formatting with bullet points and correct spacing.
4. Click the "Copy" button and verify that the copied text matches the new formatted prompt.

## Checklist
- [x] Update `program.json` with the new prompt formatting
- [x] Verify changes in the UI

# Implementation Plan - Update Clone Tab (Bolt Guide)

Update the "Clone" tab to provide a comprehensive guide on cloning websites using **Bolt.new**, an AI-powered full-stack development platform.

## User Review Required

> [!NOTE]
> The content will transition from a generic "git clone" guide to a modern "AI-driven cloning" workflow using Bolt.new. This includes visual prompting, screenshot analysis, and browser extensions.

## Proposed Changes

### Data & Content

#### [MODIFY] [program.json](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/program.json)
- Replace existing "Clone" exercises with Bolt-specific steps:
    1. **Visual Prompting**: Describing layout and structure.
    2. **Screenshot Analysis**: Using tools like CopyCoder or native screenshot uploads.
    3. **Iterative Refinement**: Refining the AI output to match the source site.
- Update `focus` and `description` to reflect the Bolt workflow.

### Application Logic

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Enhance `renderClone` to support potentially more complex content if needed.
- Update the prompt headers in `renderClone` to be more relevant (e.g., "Bolt Prompt" instead of "Command Snippet").

### Styling

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Add subtle styling tweaks to the `snippet-item` for the Clone tab to give it a more "tech-forward" aesthetic (e.g., subtle glow or distinct border color).

## Verification Plan

### Automated Tests
- None.

### Manual Verification
- Navigate to the **CLONE** tab in the browser.
- Verify that the new content related to Bolt.new is visible.
- Verify that the design feels consistent with the rest of the app but distinct enough to represent "cloning".
- Ensure "Copy" buttons still work for the new prompts.

## Checklist
- [ ] Update `program.json` with Bolt cloning content
- [ ] Refine `renderClone` in `script.js` for better prompt labeling
- [ ] (Optional) Add styling enhancements to `style.css`
- [ ] Verify functionality and design in the browser

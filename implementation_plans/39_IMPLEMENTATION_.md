# Implementation Plan - Clone Tab Website Guide

This plan outlines the steps to transform the **Clone** tab into a step-by-step guide for cloning websites using a modern AI-driven workflow (Bolt.new and AntiGravity).

## Proposed Changes

### Content Updates

#### [MODIFY] [program.json](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/program.json)
- Update the "Clone" section (index 2 in `days` array) to reflect the new 5-step guide.
- **Focus**: Website Cloning Guide
- **Description**: Follow these steps to clone any website using AI with pixel-perfect accuracy.
- **Exercises**:
    1. **Step 1: Capture the Vision**
        - **Content**: "On the Webpage, save it as a png file"
        - **Note**: Use a full-page screenshot tool to capture the entire layout.
    2. **Step 2: Optimize Assets**
        - **Content**: "Use squoosh.app to reduce the file size by converting it to a WebP file"
        - **Note**: This helps stay within AI token limits while maintaining visual quality.
    3. **Step 3: The Bolt Clone Prompt**
        - **Content**: [The provided expert UI/UX prompt]
        - **Note**: Copy and paste this into Bolt.new with your image to start the build.
    4. **Step 4: Persistence**
        - **Content**: "Export to GitHub"
        - **Note**: Connect your Bolt project to GitHub for version control and deployment.
    5. **Step 5: Refine on AntiGravity**
        - **Content**: "Adjust on AntiGravity"
        - **Note**: Open the repository in AntiGravity to make surgical adjustments and final polishes.

### Logic & UI Refinement

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Update `renderClone` to provide more relevant labels in the prompt box (e.g., "Step Action" or "Prompt Snippet" instead of "Command Snippet").

## Verification Plan

### Manual Verification
- Navigate to the **CLONE** tab in the application.
- Verify all 5 steps are displayed correctly.
- Ensure the **Bolt Clone Prompt** is fully visible and the copy button works.
- Check that the layout is responsive and aesthetic.

## Checklist
- [x] Update `program.json` with the new 5-step cloning guide
- [x] Refine labels in `script.js` for the Clone tab
- [x] Verify the copy functionality for the long Bolt prompt
- [x] Final UI review for "WOW" factor

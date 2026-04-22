# 07_IMPLEMENTATION_ - Refine Drawer Content & Pro Tip

This plan outlines the final text refinements for "The Kickstart" side-drawer, ensuring the content is concise, accurate to the model interface, and goal-oriented.

## User Review Required

> [!IMPORTANT]
> The following text updates will be applied to the drawer content in `index.html`:
> 1. **Intro Text**: `Goal: Architect before you build. Generate a detailed No-Code Implementation Plan.`
> 2. **Framework Section**: 
>    - Remove the introductory T.C.R.E.I. sentence.
>    - **Task**: Remove persona examples.
>    - **Reference**: `Provide examples if possible to ground the prompts.`
>    - **Evaluate**: `Assess implementation plan.`
> 3. **Pro Tip**: Update to mention "Deep Thinking" is a model setting and use "Gemini" generically.

## Proposed Changes

### [HTML] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html) [MODIFY]

- **Intro Section**:
  - Replace current paragraph with: `<p><strong>Goal:</strong> Architect before you build. Generate a detailed No-Code Implementation Plan.</p>`
- **Framework Section**:
  - Remove paragraph: `<p class="framework-desc">To get a high-quality blueprint, follow the Tiny Crabs Ride Enormous Iguanas framework for your prompts:</p>`
  - **Task**: Change to `<li><strong>Task:</strong> Define a specific expert persona tailored to your niche.</li>`
  - **Reference**: Change to `<li><strong>Reference:</strong> Provide examples if possible to ground the prompts.</li>`
  - **Evaluate**: Change to `<li><strong>Evaluate:</strong> Assess implementation plan.</li>`
- **Pro Tip Section**:
  - Replace content with: `<strong>Pro Tip:</strong> Use the "Deep Thinking" model setting (available in Gemini) to generate the plan. If you hit rate limits, switch to the highest performance-tier model available. Enable any "Enhanced Prompt" features if your LLM offers them.`

## Progress Checklist

- [x] Update `.blueprint-intro` text in `index.html`
- [x] Remove `.framework-desc` paragraph
- [x] Refine Framework list items (Task, Reference, Evaluate)
- [x] Update Pro Tip text (Model setting & generic Gemini)
- [x] Verify content flow and spacing in the drawer
- [x] Perform final visual audit of the drawer content

## Verification Plan

### Manual Verification
1. Open "THE KICKSTART" drawer.
2. Confirm the Intro, Framework items, and Pro Tip are all updated to the new simplified text.
3. Verify that "Deep Thinking" is described as a model setting (correcting the spelling error).
4. Verify that "Gemini" is used without version specifications.
5. Ensure the layout remains clean and readable.

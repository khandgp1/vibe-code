# 06_IMPLEMENTATION_ - The Kickstart: AI Blueprinting Update

This plan outlines the overhaul of "The Kickstart" side-drawer to move from a placeholder "vibe" to a detailed implementation blueprint. The update includes a modern design layout, the T.C.R.E.I. framework, and the Master Blueprint prompt.

## User Review Required

> [!IMPORTANT]
> The drawer title will be updated to `THE KICKSTART: AI BLUEPRINTING`.
> The design will shift from a simple input field to a structured guide with copyable prompt blocks and framework steps.

## Proposed Changes

### [HTML] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html) [MODIFY]
- Update the header title in `#side-drawer`.
- Replace `.placeholder-content` with a new `.blueprint-layout` structure.
- Add structured sections for:
    - **Goal Description**: Introductory text.
    - **The T.C.R.E.I. Framework**: A list of steps (Task, Context, Reference, Evaluate, Iterate).
    - **The "Master Blueprint" Prompt**: A stylized code block containing the boilerplate prompt.
    - **Pro Tip**: A highlighted callout for the LLM recommendation.
    - **Execution Strategy**: A numbered process (Generate, Verify, Refine).

### [CSS] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css) [MODIFY]
- Add styles for `.blueprint-layout`:
    - **Typography**: Clear hierarchy for section headers.
    - **Framework Items**: Styled list or cards for T.C.R.E.I.
    - **Prompt Box**: A distinct, dark code-block style container with a "Copy" button aesthetic (visual only for now).
    - **Pro Tip Callout**: A subtle border/background (e.g., using `--accent` with low opacity) to draw attention.
    - **Strategy Steps**: Custom markers for the 1-2-3 execution strategy.

## Progress Checklist

- [x] Update Drawer Title to `THE KICKSTART: AI BLUEPRINTING` in `index.html`
- [x] Implement T.C.R.E.I. Framework section with modern list styling
- [x] Create "Master Blueprint" Prompt UI container (code-block style)
- [x] Style "Pro Tip" and "Execution Strategy" sections for visual readability
- [x] Finalize responsive layout for the drawer content
- [x] Verify content accuracy against the provided user text

## Verification Plan

### Automated Tests
- N/A (Visual/Content Update)

### Manual Verification
1. Open the drawer by clicking "The Kickstart" card.
2. Verify the title is `THE KICKSTART: AI BLUEPRINTING`.
3. Check that the Framework steps (Task, Context, etc.) are clearly legible.
4. Verify the Prompt text is formatted for easy reading/copying.
5. Ensure the "Execution Strategy" steps are visually distinct.
6. Test on narrow/wide screens to ensure the drawer content remains readable.

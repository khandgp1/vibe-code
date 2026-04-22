# Implementation Plan - Kickstart Drawer Refinement

This plan outlines the refinement of "THE KICKSTART: AI BLUEPRINTING" drawer, including adding a framework subtitle, updating the instruction text, and re-designing the Boilerplate Prompt component for a softer, more premium aesthetic.

## Proposed Changes

### [Kickstart Drawer Refinement]

#### [MODIFY] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- Add a subtitle `<p class="framework-subtitle">Tiny Crabs Ride Enormous Iguanas</p>` immediately under `<h4>The T.C.R.E.I. Framework</h4>`.
- Update line 52:
  ```html
  <p class="minor-instruction">Copy and paste this boilerplate to START your prompt.</p>
  ```

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- **Framework & Instruction Refinements**:
  - Add styling for `.framework-subtitle`:
    ```css
    .framework-subtitle {
        font-size: 0.8rem;
        color: var(--text-muted);
        margin-top: -10px;
        margin-bottom: 20px;
        font-style: italic;
        letter-spacing: 0.5px;
    }
    ```
  - Add styling for `.minor-instruction`:
    ```css
    .minor-instruction {
        font-size: 0.8rem;
        color: #888;
        margin-bottom: 15px;
    }
    ```

- **Boilerplate Prompt Re-design**:
  - Update `.prompt-box` to move away from the "terminal black" look to a softer, "Frosted" aesthetic:
    ```css
    .prompt-box {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(138, 154, 91, 0.15); /* Soft Sage border */
        border-radius: 12px;
        overflow: hidden;
        margin-top: 15px;
        backdrop-filter: blur(4px);
    }
    ```
  - Refine `.prompt-header`:
    ```css
    .prompt-header {
        background: rgba(255, 255, 255, 0.05);
        padding: 12px 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        color: #AAA; /* Softer text */
        border-bottom: 1px solid rgba(138, 154, 91, 0.1);
    }
    ```
  - Refine `.prompt-box pre`:
    ```css
    .prompt-box pre {
        padding: 20px 24px;
        margin: 0;
        font-family: 'Segoe UI', system-ui, sans-serif; /* Use UI font instead of mono */
        font-size: 0.85rem;
        color: #CCC;
        white-space: pre-wrap;
        line-height: 1.6;
    }
    ```
  - Refine `.copy-btn`:
    ```css
    .copy-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #AAA;
        padding: 5px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.7rem;
        transition: all 0.2s ease;
    }
    .copy-btn:hover {
        background: var(--accent);
        color: #FFF;
        border-color: var(--accent);
    }
    ```

---

## Progress Checklist

- [x] Create implementation plan `08_IMPLEMENTATION_.md`
- [x] Define design for Framework Subtitle
- [x] Define design for Minor Instruction text
- [x] Re-design Boilerplate Prompt component (Lighter/Softer)
- [x] Add subtitle under "The T.C.R.E.I. Framework" in `index.html`
- [x] Update boilerplate instruction text and add class in `index.html`
- [x] Implement new styles in `style.css`
  - [x] `.framework-subtitle`
  - [x] `.minor-instruction`
  - [x] Optimized `.prompt-box` & children
- [ ] Verify changes in the browser

## Verification Plan

### Manual Verification
- Open "THE KICKSTART: AI BLUEPRINTING" drawer.
- Confirm "Tiny Crabs Ride Enormous Iguanas" appears under the T.C.R.E.I. framework title.
- Confirm the prompt instruction text is updated and smaller.
- Evaluate the `Boilerplate Prompt` box:
  - Is the background softer (not pure black)?
  - Does the sage-tinted border look premium?
  - Is the text inside the box legible and refined (using UI font)?
  - Does the copy button have a smooth hover effect?

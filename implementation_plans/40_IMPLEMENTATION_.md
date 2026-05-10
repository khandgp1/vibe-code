# Implementation Plan 40 — Clone Tab Redesign

A **complete visual redesign** of the Clone tab. The current design dumps every step into copy/paste code blocks, which is inappropriate for simple instructions. This redesign uses a purposeful, step-by-step timeline/workflow layout — only the Bolt Clone Prompt gets a copyable code block.

---

## Design Direction

### Layout: Vertical Timeline / Numbered Steps
- Each step is a **distinct card** in a vertical timeline flow.
- A numbered step indicator (styled circle) anchors each card on the left.
- A subtle vertical connector line runs between steps to reinforce the sequence.

### Content Differentiation
- **Steps 1, 2, 4, 5** (simple action steps): Display as a visual card with an icon, title, description, and an optional external link. NO code block.
- **Step 3** (Bolt Clone Prompt): This is the ONLY step with a copy/paste prompt box.

### Visual Aesthetic
- Match the existing app palette (sage accent `#8A9A5B`, off-white `#F5F5F3`, charcoal text).
- Step number circles use the accent color.
- Cards use a subtle hover lift (already established in other tabs).
- The timeline connector is a dashed vertical line in a muted tone.
- The overall feel should be **clean, editorial, guide-like** — like a modern tutorial page.

---

## Files to Change

### 1. [program.json](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/program.json)
- Add a new `"type"` field to each exercise to indicate how it should be rendered:
  - `"type": "action"` → renders as a descriptive card (no code block)
  - `"type": "prompt"` → renders with a copy/paste code block
- Optionally add a `"link"` field for external URLs (e.g., squoosh.app).
- Update step names/descriptions to be more natural prose rather than CLI-style text.

Example schema change:
```json
{
  "name": "Step 2: Optimize Assets",
  "type": "action",
  "link": "https://squoosh.app",
  "linkLabel": "Open Squoosh →",
  "note": "Use squoosh.app to convert your PNG to WebP. This ensures the AI gets a compact, high-quality image to analyze."
}
```

### 2. [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- **Completely rewrite `renderClone(day)`** to produce the new timeline layout.
- Each exercise is iterated over and rendered differently based on `ex.type`:
  - `"action"` → renders a step card with number badge, title, description, and optional link button.
  - `"prompt"` → renders the full copyable prompt box as currently designed.
- A timeline wrapper `<div class="clone-timeline">` contains all steps.

### 3. [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Add new CSS classes for the Clone tab layout:
  - `.clone-timeline` — vertical flex container with relative positioning for the connector line.
  - `.clone-step` — individual step wrapper.
  - `.clone-step-badge` — numbered circle indicator using accent color.
  - `.clone-step-connector` — the dashed vertical line between steps.
  - `.clone-step-card` — the content card with hover lift.
  - `.clone-step-link` — styled external link button for action steps.
  - `.clone-step-prompt` — wrapper for the prompt-type step (extends existing `.prompt-box` styles).

---

## Detailed Component Breakdown

```
[Clone Tab]
  ├── Header (focus + description) — centered, same as other tabs
  └── .clone-timeline
        ├── .clone-step (Step 1 - action)
        │     ├── .clone-step-badge ("01")
        │     ├── .clone-step-connector (dashed line)
        │     └── .clone-step-card
        │           ├── h3 (step name)
        │           └── p (description)
        ├── .clone-step (Step 2 - action, with link)
        │     ├── .clone-step-badge ("02")
        │     ├── .clone-step-connector
        │     └── .clone-step-card
        │           ├── h3
        │           ├── p
        │           └── .clone-step-link ("Open Squoosh →")
        ├── .clone-step (Step 3 - prompt)
        │     ├── .clone-step-badge ("03")
        │     ├── .clone-step-connector
        │     └── .clone-step-card (contains full .prompt-box)
        ├── .clone-step (Step 4 - action, with link)
        │     └── ...
        └── .clone-step (Step 5 - action)
              └── ... (no connector on last step)
```

---

## Verification Plan
- Navigate to the **CLONE** tab in the browser.
- Confirm steps 1, 2, 4, 5 are clean cards — no code block.
- Confirm step 3 has the full Bolt prompt with a working Copy button.
- Confirm external links (Squoosh, Bolt.new) open correctly.
- Confirm the timeline connector line is visible between steps.
- Confirm the layout is responsive on mobile.

---

## Checklist
- [x] Update `program.json` — add `type` and `link` fields to each Clone exercise
- [x] Rewrite `renderClone()` in `script.js` for the new timeline layout
- [x] Add `.clone-*` CSS classes to `style.css`
- [x] Verify action steps render without code blocks
- [x] Verify Bolt prompt step renders with copyable block
- [x] Verify external links work (Squoosh, GitHub, Bolt.new)
- [x] Verify responsive layout on mobile viewport
- [x] Final visual review

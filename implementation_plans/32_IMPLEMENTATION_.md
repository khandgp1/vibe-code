# 32 — Snippets Tab: Trim & Replace Snippets

## Goal

Streamline the Snippets tab down to 3 focused, workflow-aligned snippets:

1. **Keep** — `Request an Implementation Plan`
2. **Keep** — `Update an Implementation Plan`
3. **Replace** `The Strategic Refinement` with a new "Execute the Plan" snippet containing the provided copy/paste block
4. **Remove** `The Architect Kickstart`
5. **Remove** `The Implementation Logic`

The result is a lean, 3-snippet tab: two planning snippets (left/right) and one execution snippet (full-width, via the existing odd-item grid rule).

---

## Current Snippets (program.json, index order)

| Index | Name | Action |
|---|---|---|
| 0 | Request an Implementation Plan | ✅ Keep |
| 1 | Update an Implementation Plan | ✅ Keep |
| 2 | The Architect Kickstart | ❌ Remove |
| 3 | The Implementation Logic | ❌ Remove |
| 4 | The Strategic Refinement | 🔄 Replace |

---

## Replacement Snippet Content

**Proposed name:** `Execute the Plan`
**Proposed note:** `Append this to a plan reference to kick off implementation. Replace @ with the plan file reference.`

**Content (exact, verbatim):**
```
Great. Let's implement that, update the checklist as you go. @
```

> **Open question:** The `@` at the end is a placeholder (e.g. for `@[implementation_plans/30_IMPLEMENTATION_.md]`). The note should make clear that users replace `@` with the specific plan file reference.

---

## Affected Files

| File | Change Type | Description |
|---|---|---|
| `program.json` | MODIFY | Remove indices 2 and 3, replace index 4 with the new snippet |

No changes to `style.css`, `script.js`, or any layout/visual styles.

---

## Layout After Change

With 3 snippets and the existing `1fr 1fr` grid + odd-item full-span rule:

```
┌──────────────────────────┬──────────────────────────┐
│ Request an Impl. Plan    │ Update an Impl. Plan      │
└──────────────────────────┴──────────────────────────┘
┌────────────────────────────────────────────────────── ┐
│ Execute the Plan (spans full width)                   │
└───────────────────────────────────────────────────────┘
```

---

## Proposed Change to program.json

```json
{
  "title": "Snippets",
  "focus": "Ready-to-Use Prompt Boilerplates",
  "description": "Copy and paste these templates to accelerate your Vibe Coding workflow.",
  "exercises": [
    {
      "name": "Request an Implementation Plan",
      "content": "Create an implementation plan for this update, called '##_IMPLEMENTATION_.md'\n- Add this file to the implementation_plans folder, create one if needed\n\nDon't change any code yet, only create that file, also include a checklist so we can track our progress as we go, on this or other chats with AI dev agents.",
      "note": "Append this to the end of any new request. Replace ## with the next number in the sequence."
    },
    {
      "name": "Update an Implementation Plan",
      "content": "Update the implementation plan for this update, called '##_IMPLEMENTATION_.md'\n\nDon't change any code yet, only create that file, also include a checklist so we can track our progress as we go, on this or other chats with AI dev agents.",
      "note": "Append this when revisiting an existing plan. Replace ## with the plan number to update."
    },
    {
      "name": "Execute the Plan",
      "content": "Great. Let's implement that, update the checklist as you go. @",
      "note": "Append this to a plan reference to kick off implementation. Replace @ with the plan file reference."
    }
  ]
}
```

---

## Progress Checklist

### Planning
- [x] Review current `program.json` exercises array (5 snippets)
- [x] Identify which snippets to keep, remove, and replace
- [x] Confirm new snippet name (`Execute the Plan`) and note text
- [x] Confirm new snippet content (verbatim from user)
- [x] Confirm layout result: 3 snippets → 2-col row + 1 full-width row (existing CSS handles this)

### Implementation
- [x] **`program.json`** — Remove `The Architect Kickstart` (index 2)
- [x] **`program.json`** — Remove `The Implementation Logic` (index 3)
- [x] **`program.json`** — Replace `The Strategic Refinement` (index 4) with `Execute the Plan` and new content/note

### Verification
- [ ] Open Snippets tab — confirm only 3 snippets are visible
- [ ] Confirm `Request an Implementation Plan` is left column, `Update an Implementation Plan` is right column
- [ ] Confirm `Execute the Plan` spans the full bottom row
- [ ] Confirm copy button copies the correct content for all 3 snippets
- [ ] Confirm the `@` symbol appears correctly at the end of the Execute snippet content

---

## Notes

- All changes are data-only (`program.json`). No CSS or JS modifications needed.
- The existing `odd-item` CSS rule (`.snippet-item:last-child:nth-child(odd) { grid-column: 1 / -1; }`) already handles the 3rd item spanning full width — no layout changes required.
- The `@` in the Execute snippet content is intentional — it acts as a visual placeholder the user replaces with the actual plan file reference (e.g. `@[implementation_plans/32_IMPLEMENTATION_.md]`).

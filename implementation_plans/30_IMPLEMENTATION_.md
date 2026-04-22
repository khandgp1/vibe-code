# 30 — Snippets Tab: Two-Column Layout

## Goal

Redesign the Snippets tab from a single-column stacked list into a **two-column grid layout**, pairing related snippets side-by-side. The first pair will be:

- **Left column:** `Request an Implementation Plan`
- **Right column:** `Update an Implementation Plan`

The remaining three snippets (`The Architect Kickstart`, `The Implementation Logic`, `The Strategic Refinement`) can follow the same two-column pattern — either paired or the last one spanning full width if the count is odd.

No other functional changes are required. The copy-to-clipboard behavior, `program.json` data, and overall visual aesthetic remain unchanged.

---

## Affected Files

| File | Change Type | Description |
|---|---|---|
| `style.css` | MODIFY | Add two-column grid layout rules to `.snippets-container` and adjust `.snippet-item` spacing for the grid context |
| `script.js` | MODIFY | Optionally group snippets into column pairs in the `renderSnippets()` HTML template, or rely purely on CSS grid auto-placement |

---

## Proposed Approach

### Option A — CSS-Only (Preferred)
Apply `display: grid; grid-template-columns: 1fr 1fr;` directly to `.snippets-container`. CSS grid auto-placement will naturally flow the first item into column 1 and the second into column 2. If there is an odd item at the end, a `grid-column: 1 / -1` rule on the last child (or `.snippet-item:last-child:nth-child(odd)`) can make it span full width.

**Pros:** No JS changes needed, data-driven, works automatically for any number of snippets.
**Cons:** Less control over specific pairing labels or visual separators between pairs.

### Option B — JS-Grouped Rows
In `renderSnippets()`, wrap each pair of exercises in a `<div class="snippet-row">` and apply `display: flex; gap: ...` to the row.

**Pros:** Allows per-row headings or visual separators.
**Cons:** Requires JS template changes alongside CSS.

> **Recommendation:** Use **Option A** (CSS-only grid). It's the least invasive change and respects the existing data-driven architecture.

---

## Responsive Behavior

- At viewport widths **≤ 700px**, collapse back to a **single column** via a media query so mobile remains readable.
- The existing `#workout-content` max-width (`600px`) will need to be **widened** (e.g. `max-width: 900px` or `max-width: 1100px`) specifically when the Snippets tab is active, so the two columns have room to breathe. This can be done by:
  - Adding a `.snippets-active` class to `#workout-content` in `renderSnippets()` and removing it otherwise, or
  - Overriding `max-width` directly on `.snippets-container` with `max-width: unset` and controlling width from its parent.

---

## Progress Checklist

### Planning
- [x] Review current `renderSnippets()` logic in `script.js`
- [x] Review current `.snippets-container` and `.snippet-item` CSS in `style.css`
- [x] Review `program.json` snippet data (5 snippets total)
- [x] Decide on approach (CSS-only grid — Option A)

### Implementation
- [x] **`style.css`** — Update `.snippets-container` to `display: grid; grid-template-columns: 1fr 1fr; gap: 40px 30px;`
- [x] **`style.css`** — Add `@media (max-width: 700px)` rule to collapse to single column
- [x] **`style.css`** — Add `.snippet-item:last-child:nth-child(odd) { grid-column: 1 / -1; }` to handle odd count gracefully
- [x] **`style.css`** — Added `#workout-content.snippets-wide { max-width: 960px; }` scoped to Snippets tab only
- [x] **`style.css`** — Adjusted `.snippet-item` bottom margin to `0` (grid gap handles spacing)
- [x] **`script.js`** — In `renderContent()`, adds `.snippets-wide` to `#workout-content` before `renderSnippets()` and removes it for all other tabs

### Verification
- [ ] Open the Snippets tab and confirm `Request an Implementation Plan` is on the left, `Update an Implementation Plan` on the right
- [ ] Confirm the remaining snippets lay out correctly (3rd left, 4th right, 5th spans full width)
- [ ] Resize browser to ≤ 700px and confirm single-column fallback
- [ ] Switch between Intro and Snippets tabs and confirm max-width is correctly scoped (Intro stays narrow, Snippets is wider)
- [ ] Test copy buttons still function correctly in both columns
- [ ] Verify in Safari (cross-browser check)

---

## Notes

- The current `#workout-content` `max-width: 600px` is intentionally narrow for the Intro tab. Widening it globally would break the Intro layout — scope the wider width to the Snippets tab only.
- No changes to `program.json` or snippet content are needed for this layout update.
- This plan references the existing pattern from the Intro tab's bento grid (`.layout-bento .grid-wrapper { display: grid; grid-template-columns: 1fr 1fr; }`) — the Snippets grid can follow the same approach.

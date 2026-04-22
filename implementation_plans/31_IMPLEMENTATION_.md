# 31 — Snippets Tab: Better Width Utilization & Uniform Prompt-Box Heights

## Goal

Two focused layout improvements to the Snippets tab, with no visual design changes:

1. **Use more horizontal width** — The container is capped at `960px`, leaving large empty margins on wider screens. Expand to `1280px`.
2. **Uniform prompt-box heights per row** — The two `.prompt-box` blocks in each grid row are different heights because their text content varies. They should be equal height so the row looks balanced. This is achieved by making `.snippet-item` a flex column and letting `.prompt-box` grow to fill the remaining height — CSS grid already stretches both cells to the same row height, so flexbox inside each cell completes the alignment.

No new cards, labels, colors, or JS changes.

---

## Current State

| Property | Current Value |
|---|---|
| Container max-width | `960px` (set via `#workout-content.snippets-wide`) |
| Grid layout | `grid-template-columns: 1fr 1fr` |
| Column gap | `30px` |
| 5th item (odd) | `grid-column: 1 / -1; max-width: calc(50% - 15px)` — awkward hack |
| `.snippet-item` display | Default block — prompt boxes do not stretch to row height |
| `.prompt-box` height | Sized by content — mismatched between columns |

---

## Affected Files

| File | Change Type | Description |
|---|---|---|
| `style.css` | MODIFY | Increase `max-width`, clean up odd-item hack, update breakpoint, add flex layout to `.snippet-item` and `.prompt-box` for uniform height |

No changes to `script.js`, `program.json`, or any visual styles.

---

## Proposed Changes

### `style.css`

#### 1. Expand the snippets content area
```css
/* Before */
#workout-content.snippets-wide {
    max-width: 960px;
}

/* After */
#workout-content.snippets-wide {
    max-width: 1280px;
}
```

#### 2. Clean up the odd-item hack
Remove the fragile `max-width: calc(50% - 15px)` — let the 5th item span both columns cleanly.

```css
/* Before */
.snippet-item:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    max-width: calc(50% - 15px);
}

/* After */
.snippet-item:last-child:nth-child(odd) {
    grid-column: 1 / -1;
}
```

#### 3. Make `.snippet-item` a flex column so the prompt-box can grow
CSS grid already stretches every cell in a row to the same height (`align-items: stretch` is the default). Adding `display: flex; flex-direction: column` inside each cell lets `.prompt-box` fill the remaining vertical space via `flex: 1`.

```css
/* Before */
.snippet-item {
    margin-bottom: 0;
    padding: 0;
}

/* After */
.snippet-item {
    margin-bottom: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}
```

#### 4. Make `.prompt-box` fill the remaining flex space
```css
/* Add to existing .prompt-box rule */
.snippet-item .prompt-box {
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* Make the pre fill the box */
.snippet-item .prompt-box pre {
    flex: 1;
}
```

> **How this works end-to-end:**
> - The grid row stretches both `.snippet-item` cells to the same height.
> - `flex-direction: column` on `.snippet-item` lets its children stack vertically.
> - `flex: 1` on `.prompt-box` pushes it to fill all remaining height after the `h3` and `.snippet-note`.
> - `flex: 1` on `pre` inside the box makes the text area fill the box.
> - Result: both prompt boxes in the same row are identical in height regardless of content length.

#### 5. Adjust responsive breakpoint
Bump the collapse breakpoint from `700px` to `768px` to match standard tablet width.

```css
@media (max-width: 768px) {   /* was 700px */
    .snippets-container {
        grid-template-columns: 1fr;
    }
    .snippet-item:last-child:nth-child(odd) {
        grid-column: unset;
    }
}
```

---

## Progress Checklist

### Planning
- [x] Review current `.snippets-wide` max-width value (`960px`)
- [x] Review current `.snippets-container` grid and gap
- [x] Review the odd-item `max-width` hack
- [x] Confirm scope: width expansion + uniform prompt-box heights, no visual changes
- [x] Confirm approach: CSS grid stretch + flex column inside each cell

### Implementation
- [x] **`style.css`** — Increase `#workout-content.snippets-wide` from `960px` to `1280px`
- [x] **`style.css`** — Remove `max-width: calc(50% - 15px)` from `.snippet-item:last-child:nth-child(odd)`
- [x] **`style.css`** — Add `display: flex; flex-direction: column` to `.snippet-item`
- [x] **`style.css`** — Add `flex: 1; display: flex; flex-direction: column` to `.snippet-item .prompt-box`
- [x] **`style.css`** — Add `flex: 1` to `.snippet-item .prompt-box pre`
- [x] **`style.css`** — Update responsive breakpoint from `700px` to `768px`

### Verification
- [ ] Open Snippets tab on a wide screen — confirm columns use more horizontal space
- [ ] Confirm the two prompt boxes in row 1 (`Request` / `Update`) are the same height
- [ ] Confirm the 5th snippet (`The Strategic Refinement`) spans cleanly without the width cap
- [ ] Switch to Intro tab — confirm layout is unchanged
- [ ] Resize to ~750px — confirm single-column collapse works correctly
- [ ] Test copy buttons still function in both columns

---

## Notes

- `max-width: 1280px` is a common "wide but not edge-to-edge" breakpoint. On 1440px+ monitors, the existing `padding: 0 20px` on `#workout-content` keeps it from touching the viewport edge.
- The flex approach only equalizes heights within the same grid row — pairs in the same row will match each other, but rows do not need to match across rows (content is independent).
- No changes to JS, `program.json`, colors, or typography.

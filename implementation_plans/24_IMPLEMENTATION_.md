# Implementation Plan: Top Banner & Tab Visibility Refinement

This plan outlines the addition of a global notification banner and the simplification of the navigation by hiding the "Day 2" and "Day 3" tab selectors.

## User Review Required

> [!NOTE]
> The "Day 2" and "Day 3" tabs will be hidden from the UI to focus the interface entirely on the "Intro" workflow. The data remains in `program.json` but will not be accessible via the tab bar.

## Proposed Changes

### Banner Structure [index.html]

#### [MODIFY] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- Insert a `<div id="top-banner">` element immediately after the opening `<body>` tag.
- Text: "Hans & Parag, please let me know when you're ready for me to continue working on this information page."

---

### Tab Visibility [script.js]

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Update the `init()` function to filter the `appData.days` array or add a conditional check.
- Only the "Intro" tab should have a button generated in the `#tab-container`.

---

### Banner Styling [style.css]

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Implement `#top-banner` styles:
    - **Background**: Soft sage highlight (using a semi-transparent version of `--accent`).
    - **Text**: Dark Charcoal (#2D2D2D) for high legibility.
    - **Typography**: Small, uppercase, letter-spaced font.
    - **Padding**: Balanced vertical padding.

## Progress Checklist

- [x] Add banner HTML to `index.html`
- [x] Implement `#top-banner` CSS in `style.css`
- [x] Modify `init()` in `script.js` to hide Day 2 and Day 3 tab buttons
- [ ] Verify banner message matches the requested copy
- [ ] Verify only the "Intro" tab is visible in the navigation bar
- [ ] Final manual check of layout and responsive spacing

## Verification Plan

### Manual Verification
- Load the application in a browser.
- Confirm the banner appears at the very top.
- Confirm the navigation bar **only** contains the "Intro" button.
- Ensure clicking the "Intro" button still functions correctly and no console errors occur from missing tab elements.

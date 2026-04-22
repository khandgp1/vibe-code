# Select Bento Design and Remove Options Selector

This plan outlines the steps to simplify the "Intro" section by enforcing the "Bento box" design and removing the other two design options ('Clean' and 'Guided') along with the layout selector feature.

## User Review Required

> [!IMPORTANT]
> This change will permanently remove the alternative layout options for the Intro section. The "Bento" layout will be the only one available.

## Proposed Changes

### JavaScript Logic

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Remove the `currentIntroLayout` state variable.
- Remove the `layout-switcher` HTML generation from the `renderIntro` function.
- Simplify the `renderIntro` function to exclusively render the bento-style grid.
- Remove the `switchIntroLayout` function as it will no longer be used.

### CSS Styling

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Remove CSS rules for the layout switcher and buttons (`.layout-switcher`, `.layout-btn`, etc.).
- Remove specific styles for the "Clean" layout (`.layout-clean` rules).
- Remove specific styles for the "Guided Path" layout (`.layout-path` rules).
- Retain and keep the `.layout-bento` styles for the intro grid.

## Progress Checklist

- [x] Remove layout selection logic from `script.js`
- [x] Simplify `renderIntro` function to only use Bento layout
- [x] Remove `switchIntroLayout` function from `script.js`
- [x] Cleanup `style.css` by removing unused layout styles
- [x] Verify that the Intro section loads directly in Bento design without a switcher

## Verification Plan

### Manual Verification
- Open the application and navigate to the "Intro" tab.
- Confirm that the Bento grid is the only layout shown.
- Confirm that the "Clean", "Bento", and "Guided" buttons are gone.
- Ensure the mindset quote and title are still correctly displayed.

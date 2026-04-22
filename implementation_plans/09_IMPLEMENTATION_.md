# Implementation Plan - Kickstart Drawer: High Contrast Prompt Re-design

This plan outlines the re-design of the "Boilerplate Prompt" component in the Kickstart drawer to follow the **"Inverted Slab"** aesthetic. This design uses a high-contrast light-mode style to make the prompt stand out as a primary focal point within the dark drawer.

## Proposed Changes

### [Kickstart Drawer: "Inverted Slab" Prompt]

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- **Overhaul `.prompt-box`**:
  - Background: Pure White (`#FFFFFF`).
  - Text Color: Deep Charcoal (`#2D2D2D`).
  - Border: Subtle gray border with a bold **3px left border** in Sage (`#8A9A5B`).
  - Border Radius: 8px (slightly sharper for a professional card feel).
  - Shadow: Soft, deep shadow to give it elevation against the dark background.
  - Remove `backdrop-filter`.

- **Overhaul `.prompt-header`**:
  - Background: Soft Gray (`#F8F8F6`).
  - Text Color: Muted Gray (`#666666`).
  - Border-bottom: 1px solid `#EDEDE9`.

- **Overhaul `.prompt-box pre`**:
  - Text Color: Deep Charcoal (`#2D2D2D`).
  - Font: High-quality sans-serif (remains 'Segoe UI').
  - Opacity/Weight: Increased for maximum readability.

- **Overhaul `.copy-btn`**:
  - Background: Deep Charcoal (`#2D2D2D`).
  - Text Color: White (`#FFFFFF`).
  *   This creates a secondary point of high contrast within the card.

---

## Progress Checklist

- [x] Create implementation plan `09_IMPLEMENTATION_.md`
- [x] Define "Inverted Slab" design tokens (White bg, Dark text, Sage left border)
- [x] Prepare CSS replacements for `.prompt-box` and its children
- [x] Implement new styles in `style.css`
  - [x] `.prompt-box` (Layout, Background, Shadow)
  - [x] `.prompt-header` (Color scheme shift)
  - [x] `.prompt-box pre` (Text clarity)
  - [x] `.copy-btn` (High-contrast button)
- [ ] Verify changes in the browser (High contrast validation)

## Verification Plan

### Manual Verification
- Open "THE KICKSTART: AI BLUEPRINTING" drawer.
- Confirm the `Boilerplate Prompt` component is now a white "Slab" that pops against the dark drawer.
- Verify the **thick Sage left border** is present.
- Ensure the prompt text is dark, sharp, and easy to read.
- Confirm the "Copy" button is dark with white text, providing a clear call to action.

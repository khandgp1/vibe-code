# Implementation Plan - Kickstart Drawer: Sandstone Aesthetic Re-design

This plan outlines the re-design of the "Boilerplate Prompt" component in the Kickstart drawer to use a **Sandstone** color palette. This move shifts away from the pure white "Inverted Slab" to a warmer, more organic, and earthy aesthetic that still provides high contrast against the dark charcoal drawer.

## Proposed Changes

### [Kickstart Drawer: Sandstone Prompt Card]

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- **Update `.prompt-box`**:
  - Background: Warm Sandstone (`#D4C4A8` or `#E3D1B4`).
  - Text Color: Deep Slate Charcoal (`#2D2D2D`).
  - Border: Maintain the **3px Sage left border** (`#8A9A5B`) as it complements the earthy sandstone tones.
  - Shadow: Soft, warm-tinted shadow for depth.

- **Update `.prompt-header`**:
  - Background: Muted Sandstone (`#C8B89A`).
  - Text Color: Darker Earth Tone (`#5D5446`).
  - Border-bottom: 1px solid rgba(0, 0, 0, 0.05).

- **Update `.prompt-box pre`**:
  - Text Color: Deep Slate Charcoal (`#2D2D2D`).
  - Ensure font remains sharp and legible against the warm background.

- **Update `.copy-btn`**:
  - Background: Deep Earthy Charcoal (`#3D362D`).
  - Text Color: Sandstone Tint (`#E3D1B4`).
  - This maintains the high-contrast interaction point but ties it into the new palette.

---

## Progress Checklist

- [x] Create implementation plan `10_IMPLEMENTATION_.md`
- [x] Define Sandstone design tokens (Earthy Beige bg, Sage accent, Dark text)
- [x] Implement new styles in `style.css`
  - [x] `.prompt-box` (Sandstone Background & Sage Border)
  - [x] `.prompt-header` (Muted Sandstone Header)
  - [x] `.prompt-box pre` (Contrasting Typography)
  - [x] `.copy-btn` (Themed High-Contrast Button)
- [ ] Verify changes in the browser (Aesthetic & Contrast check)

## Verification Plan

### Manual Verification
- Open "THE KICKSTART: AI BLUEPRINTING" drawer.
- Confirm the `Boilerplate Prompt` component is now a warm **Sandstone** color.
- Verify the **Sage left border** still looks premium and complements the new background.
- Ensure the charcoal text remains highly legible against the sandstone.
- Confirm the "Copy" button is updated to the themed earthy-dark style.

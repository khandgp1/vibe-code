# 05_IMPLEMENTATION_ - Safari Compatibility Patch

This plan outlines the fixes for UI inconsistencies in Safari (especially on iOS) to ensure the Command Side-Drawer and animations render correctly across all modern browsers.

## User Review Required

> [!NOTE]
> This patch focuses on standardizing the glassmorphism blur, fixing background scroll-leak on mobile, and stripping default Safari input styling.

## Proposed Changes

### [CSS] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css) [MODIFY]
- **Scroll Lock**: update `body.drawer-open` to handle iOS Safari scroll behavior.
- **Glassmorphism**: Add `transform: translateZ(0)` to `#drawer-overlay` to force GPU rendering and fix "flat" blur layers.
- **Form Normalization**: 
    - Add `-webkit-appearance: none` and `border-radius: 8px` specifically to `.placeholder-input`.
    - Add `-webkit-appearance: none` to `.placeholder-action` and `#close-drawer`.
- **Shimmer Fix**: Add `background-repeat: no-repeat` to `.shimmer-line`.

## Progress Checklist

- [x] Implement enhanced scroll locking for iOS Safari
- [x] Apply GPU-acceleration patches to the Glassmorphism overlay
- [x] Normalize inputs/buttons using `-webkit-appearance`
- [x] Fix shimmer animation for WebKit engines
- [ ] Verify fix on both Chrome and Safari browsers

## Verification Plan

### Manual Verification
1. Open the site in **Safari** (macOS or iOS).
2. Open the Kickstart drawer.
3. Verify the background blur is visible and doesn't flicker.
4. Try to scroll the page while the drawer is open (should be locked).
5. Verify the "Generate Blueprint" button doesn't have an unwanted Safari "bubble" shadow.
6. Compare side-by-side with Chrome to ensure sync.

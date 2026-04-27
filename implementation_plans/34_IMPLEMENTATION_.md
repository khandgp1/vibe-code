# Password Protect Website Visibility

This plan outlines the steps to add a simple password protection gate to the website. The protection will consist of a full-screen overlay that appears immediately upon page load, requiring the user to enter a hardcoded password to access the content.

## User Review Required

> [!WARNING]
> As requested, the password will be hardcoded in the source code (`script.js`). This is not a secure method of protection and can be easily bypassed by anyone inspecting the source code or using browser developer tools.

## Proposed Changes

### [HTML] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)

#### [MODIFY] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- Add a new `div` with id `password-overlay` at the end of the `body` (before the script tag).
- Include an input field for the password and a submit button.

### [CSS] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)

#### [MODIFY] [style.css](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/style.css)
- Add styles for `#password-overlay` to make it cover the entire screen.
- Use `backdrop-filter: blur(20px)` to obscure the content behind the overlay.
- Style the password prompt to look premium and consistent with the existing design (Matte Off-White, Slate Charcoal, Muted Sage accent).

### [JavaScript] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)

#### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Define a constant `SITE_PASSWORD`.
- Create a function `checkPassword()` to validate the user input.
- Update the `init()` function or add a DOMContentLoaded listener to ensure the overlay is shown and handled before the main content is fully interactable.

---

## Progress Checklist

- [x] **Phase 1: Structure & Style**
    - [x] Add `#password-overlay` structure to `index.html`
    - [x] Add CSS rules for the overlay and its components in `style.css`
    - [x] Implement responsive design for the password prompt
- [x] **Phase 2: Logic Implementation**
    - [x] Add `SITE_PASSWORD` and validation logic to `script.js`
    - [x] Ensure the overlay prevents interaction with the rest of the page
    - [x] Add "Enter" key support for the password input
- [ ] **Phase 3: Verification**
    - [ ] Verify that the page is blocked on initial load
    - [ ] Verify that the correct password unlocks the site
    - [ ] Verify that an incorrect password shows an error state

## Verification Plan

### Automated Tests
- No automated tests planned for this simple implementation.

### Manual Verification
- Open the website in a browser.
- Confirm the password overlay is visible and the background is blurred.
- Enter an incorrect password and verify it doesn't unlock.
- Enter the correct password (`bernard`) and verify the overlay disappears and the site becomes functional.

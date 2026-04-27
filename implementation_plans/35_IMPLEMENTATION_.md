# Implementation Plan 35 - Visible Password Text

The goal is to make the password input field display its content as visible text instead of dots (obscured text) to improve user experience or meet specific visibility requirements.

## User Review Required

> [!WARNING]
> Making the password visible as text reduces security by making it readable by anyone looking at the screen. However, this is specifically requested by the user.

## Proposed Changes

### [HTML]

#### [MODIFY] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- Change the `type` attribute of the password input field from `password` to `text`.

## Verification Plan

### Automated Tests
- Use the browser tool to navigate to the page and verify that the input field with ID `site-password-input` has `type="text"`.
- Type a character and verify it is visible as text, not a dot.

### Manual Verification
- Refresh the page and type in the password field to confirm characters are visible.

## Checklist
- [x] Modify `index.html` to change input type to `text`
- [ ] Verify visible text in browser

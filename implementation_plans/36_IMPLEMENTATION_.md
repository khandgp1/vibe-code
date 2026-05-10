# Configurable Password Feature

This update adds a `config.js` file to allow users to easily enable or disable the password protection feature and change the site password without modifying the main application logic.

## Proposed Changes

### [NEW] [config.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/config.js)
- Create a global `CONFIG` object.
- Add `passwordEnabled` boolean.
- Add `sitePassword` string.

### [MODIFY] [index.html](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/index.html)
- Include `config.js` script before `script.js`.

### [MODIFY] [script.js](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/script.js)
- Update to use `CONFIG.sitePassword` instead of the hardcoded `SITE_PASSWORD`.
- Add logic to check `CONFIG.passwordEnabled` and hide the password overlay automatically if disabled.

## Checklist
- [x] Create `config.js` with default settings.
- [x] Reference `config.js` in `index.html`.
- [x] Refactor `script.js` to use configuration values.
- [x] Verify that disabling `passwordEnabled` bypasses the lock screen.
- [x] Verify that enabling `passwordEnabled` correctly requires the password.

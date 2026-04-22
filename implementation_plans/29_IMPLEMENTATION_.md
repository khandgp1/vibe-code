# Implementation Plan 29 - Update Snippet Note & Add "Update an Implementation Plan" Snippet

Two updates to `program.json` in the Snippets tab:
1. Update the `note` field of the "Request an Implementation Plan" snippet to the cleaner Option C phrasing.
2. Add a new second snippet — "Update an Implementation Plan" — with boilerplate for updating an existing plan file.

## Proposed Changes

### Data

#### [MODIFY] [program.json](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/program.json)

**Change 1 — Update note text on existing snippet:**
- Locate the `"Request an Implementation Plan"` snippet (first item).
- Replace its `note` value with:
  > *"Append this to the end of any new request. Replace ## with the next number in the sequence."*

**Change 2 — Insert new snippet at position 2:**
- Insert a new snippet object immediately after the first snippet.
- `name`: `"Update an Implementation Plan"`
- `note`: e.g. *"Append this when revisiting an existing plan. Replace ## with the plan number to update."*
- `content`:
```
Update the implementation plan for this update, called '##_IMPLEMENTATION_.md'

Don't change any code yet, only create that file, also include a checklist so we can track our progress as we go, on this or other chats with AI dev agents.
```

## Progress Checklist

- [x] Update the `note` field for "Request an Implementation Plan" in `program.json`
- [x] Insert the new "Update an Implementation Plan" snippet as the second item in the Snippets array
- [x] Verify both snippets appear in the correct order in the Snippets tab UI
- [x] Confirm the "Copy" button on the new snippet copies the correct content

## Verification Plan

### Manual Verification
- Open the "SNIPPETS" tab in the browser.
- Confirm "Request an Implementation Plan" is first with the updated note text.
- Confirm "Update an Implementation Plan" appears second with its boilerplate content.
- Test the Copy button on the new snippet.

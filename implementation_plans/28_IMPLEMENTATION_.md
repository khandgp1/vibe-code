# Implementation Plan 28 - Add "Request an Implementation Plan" Snippet

Add a new copyable prompt snippet to the Snippets tab as the first entry. The content teaches users how to ask an AI agent to create a numbered implementation plan file, matching the workflow established throughout this project.

## Overview

The new snippet will be inserted as the first exercise in the `Snippets` day of `program.json`. It follows the same data shape (`name`, `content`, `note`) as the existing snippets and will render automatically via the existing `renderSnippets()` function with no JS or CSS changes required.

## Proposed Changes

### Data

#### [MODIFY] [program.json](file:///Users/khandpv1/Desktop/.AntiGrav/vibe-code/program.json)
- Insert a new snippet object as the **first** item in the `exercises` array of the `"Snippets"` day.
- `name`: `"Request an Implementation Plan"`
- `note`: A short description of when to use this prompt.
- `content`: The exact boilerplate text the user provided:

```
Create an implementation plan for this update, called '##_IMPLEMENTATION_.md'
- Add this file to the implementation_plans folder, create one if needed

Don't change any code yet, only create that file, also include a checklist so we can track our progress as we go, on this or other chats with AI dev agents.
```

## Progress Checklist

- [x] Add new snippet object as first item in `program.json` Snippets exercises array
- [x] Verify the snippet appears first in the Snippets tab UI
- [x] Confirm the "Copy" button copies the correct boilerplate text
- [x] Final visual check for consistent spacing and layout

## Verification Plan

### Automated Tests
- Not applicable.

### Manual Verification
- Open the "SNIPPETS" tab in the browser.
- Confirm "Request an Implementation Plan" is the first snippet shown.
- Click the "Copy" button and paste into a text editor to verify the content is correct.
- Confirm existing snippets still appear in the correct order below it.

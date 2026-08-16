# PDI Implementation Guide

## Phase 1 — Create application

In your ServiceNow PDI:

1. Open Studio / Application creation.
2. Create application:
   **Employee Laptop Request Automation**
3. Use a scoped application.
4. Create a module if desired:
   **Laptop Requests**

## Phase 2 — Groups

Create:

### Hardware / EUC

Purpose:

Laptop provisioning and endpoint setup.

### IT Hardware Approvers

Purpose:

Approve high-cost and special laptop requests.

Add test users to each group.

## Phase 3 — Catalog Item

Create:

**Employee Laptop Request**

Category:

**Hardware**

Use the variables in:

`catalog/variables.csv`

Configure:

- Labels
- Variable names
- Types
- Choices
- Mandatory settings
- Help text

## Phase 4 — UI Policies

Create the five UI Policies documented in:

`docs/ui-policies.md`

Test each condition independently.

## Phase 5 — Catalog Client Scripts

Create:

1. Set Manager
2. Validate Needed By
3. Validate Business Justification
4. High-cost warning

Copy scripts from:

`docs/client-scripts.md`

## Phase 6 — Flow Designer

Create:

**Laptop Request - Fulfillment**

Build from:

`flows/laptop-request-flow.md`

Important:

Use Flow Designer for approvals, task creation, notifications, and waiting for fulfillment.

## Phase 7 — Business Rules

Create the server-side rules documented in:

`docs/business-rules.md`

Keep them lightweight.

## Phase 8 — Notifications

Create the notification records in:

`docs/notifications.md`

Use event/record conditions appropriate for your PDI.

## Phase 9 — SLA

Create:

**Laptop Fulfillment SLA**

Apply to:

`sc_task`

Use:

`docs/sla.md`

## Phase 10 — Test

Run every test in:

`docs/testing.md`

Capture screenshots of:

1. Catalog Item
2. Variables
3. UI Policy
4. Client Script
5. Flow Designer
6. Approval record
7. RITM
8. Catalog Task
9. SLA
10. Notification
11. Completed request

Put screenshots in:

`screenshots/`

## Phase 11 — GitHub presentation

Your GitHub README should show:

- Problem
- Solution
- Architecture
- Workflow
- Technologies
- Screenshots
- Test results
- Key ServiceNow configuration
- Future improvements

Do not upload PDI credentials, passwords, API keys, user data, or private instance information.

## Important PDI note

ServiceNow field names, choice values, scoped application behavior, and Flow Designer action labels may differ by release or installed plugins. Verify the exact values in your PDI before using scripts or conditions.

# Flow Designer

## Flow name

**Employee Laptop Request Fulfillment**

## Trigger

**Service Catalog → Requested Item created**

Condition:

```text
Catalog Item = Employee Laptop Request
```

## Flow steps

### Step 1 — Get Catalog Variables

Read:

- Requested For
- Manager
- Request Type
- Laptop Type
- Operating System
- Location
- Needed By
- Urgency
- Business Justification
- Data Sensitivity
- Accessories

### Step 2 — Calculate priority

Decision:

```text
Urgency = Critical → Priority 1
Urgency = High     → Priority 2
Urgency = Normal   → Priority 3
Urgency = Low      → Priority 4
```

Update Requested Item priority.

### Step 3 — Manager approval

Use:

**Ask for Approval**

Approver:

```text
Requested For → Manager
```

### Step 4 — Approval decision

If rejected:

1. Update RITM state to rejected/cancelled according to PDI configuration.
2. Add work note.
3. Send rejection email.
4. End flow.

If approved:

Continue.

### Step 5 — Additional hardware approval

Decision:

```text
Laptop Type = Developer / Engineering
OR
Laptop Type = Executive
OR
Data Sensitivity = Restricted
```

If true:

Ask for approval from:

**IT Hardware Approvers**

If rejected:

- Update request
- Add work note
- Notify employee
- End flow

If approved:

Continue.

### Step 6 — Create fulfillment task

Create:

**Catalog Task (`sc_task`)**

Set:

```text
Request Item = Current RITM
Short Description = Provision laptop for ${Requested For}
Assignment Group = Hardware / End User Computing
Description = Include selected laptop configuration
Due date = Needed By
Priority = RITM priority
```

### Step 7 — Notification

Send:

**Laptop Request Approved**

Recipient:

Requested For

### Step 8 — Wait for task completion

Wait until:

```text
Catalog Task State = Closed Complete
```

### Step 9 — Update RITM

Set the Requested Item to the appropriate completed state.

Add work note:

```text
Laptop provisioning task completed successfully.
```

### Step 10 — Notify employee

Send:

**Laptop Ready / Request Completed**

### Step 11 — End

Flow completes.

## Flow error handling

Add error paths for:

- Missing manager
- Missing assignment group
- Approval timeout
- Task creation failure
- Invalid catalog variables

When an error occurs:

1. Add an error work note.
2. Notify Service Desk.
3. Set request to an exception state where appropriate.
4. Do not silently complete the request.

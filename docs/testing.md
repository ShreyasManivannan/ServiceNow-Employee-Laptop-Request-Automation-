# Test Cases

## TC-01 — Standard laptop happy path

**Input:**

- Request Type = New Laptop
- Laptop Type = Standard Business
- Urgency = Normal

**Expected:**

1. Catalog submission succeeds.
2. Manager approval created.
3. Manager approves.
4. Catalog Task created.
5. Hardware group receives task.
6. SLA starts.
7. Task completed.
8. RITM completed.
9. Employee receives completion notification.

## TC-02 — Manager rejects

Expected:

- Approval = Rejected
- No fulfillment task
- RITM closed/rejected according to design
- Employee receives rejection notification

## TC-03 — Developer laptop

Input:

```text
Laptop Type = Developer / Engineering
```

Expected:

- Manager approval
- Additional IT Hardware approval
- Fulfillment task only after both approvals

## TC-04 — Executive laptop

Expected:

- Additional hardware approval required

## TC-05 — Missing manager

Expected:

- Request does not proceed silently.
- Flow enters error handling.
- Service Desk is notified.

## TC-06 — Past needed-by date

Expected:

- Catalog submission blocked.

## TC-07 — Short justification

Expected:

- Catalog submission blocked.

## TC-08 — Replacement laptop

Expected:

- Existing Asset visible and mandatory.
- Replacement Reason visible and mandatory.

## TC-09 — Restricted data

Expected:

- Security Justification becomes visible and mandatory.
- Additional approval path starts.

## TC-10 — Critical urgency

Expected:

- Business Impact visible and mandatory.
- Priority becomes Critical / P1 according to implementation.

## TC-11 — SLA

Expected:

- SLA attaches to fulfillment task.
- SLA pauses only during configured waiting state.
- SLA completes when task closes.

## TC-12 — Multiple RITMs

Create two laptop requests under the same parent request.

Expected:

- Each RITM has its own approval/fulfillment lifecycle.
- Parent Request should not close until all applicable items are complete.

## TC-13 — Unknown laptop value

Expected:

- Server-side validation prevents invalid workflow progression.

## TC-14 — Notification failure

Expected:

- Request fulfillment is not silently marked complete because an email failed.
- Error is visible in system logs / flow execution details.

## TC-15 — Regression

Verify normal Service Catalog request behavior remains unaffected.

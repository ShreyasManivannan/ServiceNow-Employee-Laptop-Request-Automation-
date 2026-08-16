# Requirements

## Functional requirements

### FR-01 — Catalog request

An employee must be able to request a laptop from the Service Catalog.

### FR-02 — Required information

The request must capture:

- Requested for
- Request type
- Laptop type
- Operating system
- Location
- Needed-by date
- Business justification
- Manager
- Accessories
- Data sensitivity
- Urgency

### FR-03 — Validation

The system must prevent submission when required business information is invalid.

### FR-04 — Manager approval

Every new laptop request requires manager approval.

### FR-05 — Additional approval

High-cost or special-purpose laptop requests require IT Hardware approval after manager approval.

### FR-06 — Fulfillment task

After approval, the system creates a fulfillment task for the Hardware / End User Computing group.

### FR-07 — Priority

Priority is calculated using urgency and business impact.

### FR-08 — SLA

An approved fulfillment task must have a fulfillment SLA.

### FR-09 — Notifications

The employee must receive notifications for:

- Request submitted
- Approval required
- Request approved
- Request rejected
- Fulfillment completed

### FR-10 — Tracking

The employee and IT team must be able to track request and fulfillment task status.

## Non-functional requirements

- Server-side validation must protect against client-side bypass.
- Workflow must be auditable.
- Approval and fulfillment stages must be clearly visible.
- Sensitive information should not be unnecessarily included in emails.
- Scripts should be small and reusable.
- Business rules should not duplicate Flow Designer logic unless there is a clear reason.

## Roles

| Role | Responsibility |
|---|---|
| Employee | Submit and track laptop request |
| Manager | Approve employee request |
| IT Hardware Approver | Approve high-cost/special hardware |
| Hardware Technician | Fulfill laptop request |
| ServiceNow Admin | Configure and maintain solution |

## Assumptions

- Employee records have a manager.
- Hardware fulfillment group exists.
- PDI has Service Catalog and Flow Designer available.
- Standard `sc_request`, `sc_req_item`, and `sc_task` records are available.

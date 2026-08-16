# Email Notifications

## N-01 — Request Submitted

**Name:** Laptop Request Submitted

**Trigger:** RITM created

**To:** Requested For

**Subject:**

```text
Laptop Request ${number} submitted
```

**Body:**

```text
Hello ${requested_for},

Your laptop request ${number} has been submitted successfully.

Laptop type: ${laptop_type}
Needed by: ${needed_by}
Current status: Awaiting approval

You can track the request in the Service Portal.

Thank you,
IT Service Desk
```

## N-02 — Manager Approval Required

**To:** Manager

**Subject:**

```text
Approval required: Laptop Request ${number}
```

## N-03 — Request Approved

**To:** Requested For

**Subject:**

```text
Laptop Request ${number} approved
```

## N-04 — Request Rejected

**To:** Requested For

**Subject:**

```text
Laptop Request ${number} rejected
```

Include rejection reason where available.

## N-05 — Fulfillment Started

**To:** Requested For

**Subject:**

```text
Laptop Request ${number} is being fulfilled
```

## N-06 — Laptop Ready

**To:** Requested For

**Subject:**

```text
Laptop Request ${number} completed
```

Avoid putting sensitive data or unnecessary asset information into email.

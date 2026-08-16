# UI Policies

## UP-01 — Replacement fields

**Condition:**

`Request type is Replacement Laptop`

**Actions:**

- Show Existing Asset
- Make Existing Asset mandatory
- Show Replacement Reason
- Make Replacement Reason mandatory

**Reverse if false:** Yes

## UP-02 — Developer fields

**Condition:**

`Laptop type is Developer / Engineering`

**Actions:**

- Show Development Tools
- Make Development Tools mandatory

## UP-03 — Restricted data

**Condition:**

`Data Sensitivity is Restricted`

**Actions:**

- Show Security Justification
- Make Security Justification mandatory

## UP-04 — Critical urgency

**Condition:**

`Urgency is Critical`

**Actions:**

- Show Business Impact
- Make Business Impact mandatory
- Make Needed By mandatory

## UP-05 — New Laptop

**Condition:**

`Request Type is New Laptop`

Hide:

- Existing Asset
- Replacement Reason

## Implementation note

Use Catalog UI Policies rather than JavaScript for simple show/hide/mandatory behavior.

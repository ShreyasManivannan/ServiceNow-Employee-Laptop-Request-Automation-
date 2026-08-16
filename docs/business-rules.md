# Business Rules

## BR-01 — Validate Laptop Request

**Table:** Requested Item (`sc_req_item`)

**When:** Before Insert

**Condition:** Catalog Item is Employee Laptop Request

**Purpose:** Server-side protection for critical request data.

Example:

```javascript
(function executeRule(current, previous) {

    if (!current.cat_item) {
        gs.addErrorMessage(
            'Laptop request must reference a Catalog Item.'
        );
        current.setAbortAction(true);
        return;
    }

    // Keep server-side validation lightweight.
    // Detailed variable validation can be added here
    // using current.variables.<variable_name>.

})(current, previous);
```

## BR-02 — Calculate Priority

**Table:** Requested Item (`sc_req_item`)

**When:** Before Insert / Before Update

Example:

```javascript
(function executeRule(current, previous) {

    var urgency = String(
        current.variables.urgency || ''
    );

    if (urgency == 'critical') {
        current.priority = 1;
    } else if (urgency == 'high') {
        current.priority = 2;
    } else if (urgency == 'normal') {
        current.priority = 3;
    } else {
        current.priority = 4;
    }

})(current, previous);
```

> Verify the exact priority field/value behavior in your PDI before using this script.

## BR-03 — Close Parent Request

**Table:** Requested Item (`sc_req_item`)

**When:** After Update

Purpose:

When the laptop fulfillment item reaches the completed state, allow the parent request to close when all request items are complete.

Implementation recommendation:

- Prefer Flow Designer for parent lifecycle orchestration.
- Use this Business Rule only if your PDI process requires server-side enforcement.

Example concept:

```javascript
(function executeRule(current, previous) {

    if (current.state != '3') {
        return;
    }

    // Check sibling RITMs.
    // If every RITM is complete/closed,
    // update the parent request.

})(current, previous);
```

Do not copy state numbers blindly between ServiceNow releases. Confirm your PDI state values.

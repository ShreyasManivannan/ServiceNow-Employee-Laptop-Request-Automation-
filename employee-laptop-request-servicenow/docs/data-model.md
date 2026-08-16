# Data Model

## Standard tables

### Request

`sc_request`

Represents the overall employee request.

### Requested Item

`sc_req_item`

Represents the catalog item requested.

Important relationship:

```text
sc_request
    |
    +--- sc_req_item
            |
            +--- sc_task
```

### Catalog Task

`sc_task`

Represents the fulfillment work performed by IT.

### Approval

`sysapproval_approver`

Represents approval records.

## Catalog variables

Request-specific values should primarily live in the Catalog Item variables.

Example:

```text
RITM
 |
 +-- requested_for
 +-- request_type
 +-- laptop_type
 +-- operating_system
 +-- location
 +-- needed_by
 +-- urgency
 +-- business_justification
 +-- data_sensitivity
 +-- accessories
```

## Optional asset integration

After fulfillment, the project can be extended to:

```text
Catalog Task
   |
   v
Create / assign Asset
   |
   v
alm_hardware
   |
   v
Assign to employee
```

For a first PDI version, keep asset integration optional.

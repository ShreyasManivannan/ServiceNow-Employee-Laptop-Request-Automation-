# Flow Designer Build Sheet

## Trigger

```text
Service Catalog
  └── Requested Item Created
        └── Catalog Item = Employee Laptop Request
```

## Actions

```text
1. Get Catalog Variables
2. Update Record: Priority
3. Ask for Approval: Manager
4. If Approval = Rejected
      ├── Update RITM
      ├── Send Email
      └── End
5. If Approval = Approved
      └── Continue
6. If high-cost/special request
      ├── Ask for Approval: IT Hardware
      ├── If rejected → notify + close
      └── If approved → continue
7. Create Record: sc_task
8. Update RITM
9. Send Email: Approved / In Fulfillment
10. Wait for Catalog Task completion
11. Update RITM
12. Send Email: Completed
13. End
```

## Suggested flow variables

| Variable | Type |
|---|---|
| requested_for | Reference: User |
| manager | Reference: User |
| laptop_type | String |
| request_type | String |
| needed_by | Date |
| urgency | String |
| assignment_group | Reference: Group |
| fulfillment_task | Reference: Catalog Task |
| approval_result | Choice |

## Flow naming convention

Use:

`Laptop Request - [Action]`

Examples:

- Laptop Request - Validate
- Laptop Request - Manager Approval
- Laptop Request - Hardware Approval
- Laptop Request - Create Fulfillment Task
- Laptop Request - Complete

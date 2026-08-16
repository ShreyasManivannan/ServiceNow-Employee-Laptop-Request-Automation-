# Portfolio Demo Script

## 1. Introduce the problem

"Employees need laptops, but manual request processing creates approval delays, missing information, and poor fulfillment visibility."

## 2. Show the Catalog Item

Open the Employee Laptop Request catalog item.

Explain:

- Request type
- Laptop type
- Needed-by date
- Urgency
- Business justification
- Accessories

## 3. Show dynamic behavior

Select:

**Replacement Laptop**

Show the replacement fields.

Then select:

**Developer / Engineering**

Show development-specific fields.

## 4. Submit standard request

Use:

```text
Requested For: Test Employee
Request Type: New Laptop
Laptop Type: Standard Business
OS: Windows 11
Urgency: Normal
Needed By: Future date
```

Submit.

## 5. Show approval

Open the approval record.

Approve as manager.

## 6. Show fulfillment task

Return to RITM.

Demonstrate that the flow created the Catalog Task and assigned it to Hardware / EUC.

## 7. Show SLA

Open the task SLA.

Explain target time and remaining time.

## 8. Complete task

Technician closes the task.

Show RITM completion.

## 9. Show notification

Open the employee notification.

## 10. Demonstrate advanced branch

Create a Developer / Engineering laptop request.

Show:

```text
Manager Approval
      ↓
IT Hardware Approval
      ↓
Fulfillment
```

## 11. Explain architecture

Finish by explaining:

- Service Catalog = employee interface
- Client Scripts/UI Policies = UX validation
- Flow Designer = orchestration
- Business Rules = server-side enforcement
- Notifications = communication
- SLA = fulfillment accountability

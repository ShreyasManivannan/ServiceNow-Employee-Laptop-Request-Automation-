# Employee Laptop Request Automation | ServiceNow

A portfolio-ready ServiceNow Service Catalog automation project for employee laptop requests.

> **Important:** This repository is an implementation blueprint for a ServiceNow Personal Developer Instance (PDI). The configuration is intended to be recreated in ServiceNow using the documented tables, Catalog Items, variables, Flow Designer flows, Business Rules, Client Scripts, UI Policies, notifications, approvals, and SLAs. It does not contain a fake/exported update-set XML.

## Project summary

The solution automates the employee laptop request lifecycle:

**Employee → Catalog Item → Validation → Manager Approval → IT Asset Approval → Fulfillment Task → Hardware Provisioning → Employee Notification → Closure**

### Main capabilities

- Employee-facing Laptop Request Catalog Item
- Dynamic catalog variables
- Client-side validation
- UI Policies for conditional fields
- Manager approval
- IT hardware approval for higher-cost devices
- Automatic fulfillment task creation
- Assignment to Hardware / End User Computing group
- Priority calculation
- SLA-based fulfillment tracking
- Email notifications
- Request and task status tracking
- Rejection / cancellation handling
- Audit-friendly activity flow

## Suggested GitHub repository

```text
employee-laptop-request-servicenow/
├── README.md
├── docs/
│   ├── architecture.md
│   ├── requirements.md
│   ├── implementation-guide.md
│   ├── data-model.md
│   ├── flow-designer.md
│   ├── catalog-item.md
│   ├── business-rules.md
│   ├── client-scripts.md
│   ├── ui-policies.md
│   ├── notifications.md
│   ├── sla.md
│   ├── testing.md
│   └── demo-script.md
├── scripts/
│   ├── br_validate_laptop_request.js
│   ├── br_calculate_priority.js
│   ├── br_close_parent_request.js
│   ├── cs_validate_request.js
│   └── cs_set_default_values.js
├── catalog/
│   ├── catalog-item-spec.md
│   └── variables.csv
├── flows/
│   └── laptop-request-flow.md
├── test/
│   └── test-cases.csv
├── screenshots/
│   └── .gitkeep
└── .gitignore
```

## Business problem

Employees need company laptops for onboarding, replacement, role changes, or performance requirements. Manual processing can result in:

- Incomplete request information
- Approval delays
- Incorrect hardware selection
- Manual task creation
- Poor request visibility
- Missed fulfillment deadlines
- Inconsistent communication

This project creates a controlled Service Catalog experience and automates the workflow from request submission through fulfillment.

## End-to-end workflow

```text
Employee
   |
   v
Laptop Request Catalog Item
   |
   v
Validate Request
   |
   +---- Invalid ----> Ask employee to correct request
   |
   v
Determine Priority
   |
   v
Manager Approval
   |
   +---- Rejected ----> Close as Rejected + Notify Employee
   |
   v
Is high-cost / special device?
   |
   +---- Yes ----> IT Hardware Approval
   |
   v
Create Fulfillment Task
   |
   v
Assign Hardware / EUC Group
   |
   v
SLA Starts
   |
   v
Provision Laptop
   |
   v
Task Complete
   |
   v
Request Complete
   |
   v
Notify Employee
```

## Technology

- ServiceNow Service Catalog
- Flow Designer
- Catalog Client Scripts
- Catalog UI Policies
- Business Rules
- Notifications
- Approvals
- SLAs
- ServiceNow tables:
  - `sc_request`
  - `sc_req_item`
  - `sc_task`
  - `sysapproval_approver`
  - `task`
  - optionally `alm_hardware` / CMDB depending on PDI scope

## Portfolio outcome

This project demonstrates:

- ServiceNow ITSM fundamentals
- Service Catalog configuration
- Flow Designer automation
- Approval orchestration
- Client-side validation
- Server-side validation
- Task automation
- SLA configuration
- Notification design
- Request lifecycle management
- Basic ServiceNow scripting
- Enterprise workflow thinking

## PDI implementation

Follow `docs/implementation-guide.md` from top to bottom.

Recommended implementation order:

1. Create groups and users
2. Create the Catalog Item
3. Create variables
4. Configure UI Policies
5. Add Catalog Client Scripts
6. Create Flow Designer flow
7. Add Business Rules
8. Create Notifications
9. Create SLA
10. Test happy path
11. Test rejection path
12. Test high-cost approval path
13. Capture screenshots
14. Add screenshots to `/screenshots`
15. Update this README with your PDI instance screenshots

## Suggested demo

Submit a laptop request as an employee.

Use:

- Request type: New Laptop
- Laptop type: Standard Business
- Operating system: Windows 11
- Urgency: Normal
- Business justification: New employee onboarding

Then demonstrate:

1. Request is created.
2. Manager approval is generated.
3. Approval is approved.
4. Fulfillment task is automatically created.
5. Task is assigned to Hardware / EUC.
6. SLA starts.
7. Fulfillment technician updates the task.
8. Task completes.
9. Parent request is closed.
10. Employee receives notification.

For the high-cost path, select a Developer / Engineering laptop and show the additional IT approval.

## Disclaimer

This repository contains configuration documentation and script examples intended for a ServiceNow PDI/portfolio project. ServiceNow releases and APIs can change, so verify field names, Flow Designer action names, and scoped application behavior in your PDI before deployment.

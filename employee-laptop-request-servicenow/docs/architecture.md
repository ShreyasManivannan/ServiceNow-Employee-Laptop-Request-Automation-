# Solution Architecture

## High-level architecture

```text
+--------------------+
| Employee Portal    |
| Service Catalog    |
+---------+----------+
          |
          v
+--------------------+
| Catalog Item       |
| Laptop Request     |
+---------+----------+
          |
          +----------------------+
          |                      |
          v                      v
+--------------------+   +----------------------+
| Client Validation  |   | UI Policies         |
| Catalog Scripts    |   | Conditional Fields  |
+---------+----------+   +----------------------+
          |
          v
+------------------------------------------------+
| Flow Designer                                   |
|                                                |
| 1. Validate request                            |
| 2. Determine priority                          |
| 3. Manager approval                            |
| 4. High-cost decision                          |
| 5. IT approval                                 |
| 6. Create fulfillment task                     |
| 7. Notify employee                             |
| 8. Wait for task completion                    |
| 9. Close request                               |
+--------------------------+---------------------+
                           |
                           v
                +----------------------+
                | sc_req_item / Task   |
                +----------+-----------+
                           |
                           v
                +----------------------+
                | Hardware / EUC Team  |
                +----------+-----------+
                           |
                           v
                +----------------------+
                | SLA + Notifications  |
                +----------------------+
```

## Design principle

Use Flow Designer as the primary orchestration engine.

Use Client Scripts/UI Policies for user experience.

Use Business Rules for server-side data integrity and lifecycle enforcement.

Do not put the entire workflow into Business Rules.

## Suggested application scope

Create a scoped application:

**Name:** Employee Laptop Request Automation

**Scope:** `x_company_laptop`

For a portfolio PDI, use a personal/company-style namespace available in your instance.

## Suggested custom fields

Avoid unnecessary custom fields on core tables. Prefer Catalog Variables for request-specific data.

If a custom field is required on the Requested Item, suggested names:

- `u_laptop_type`
- `u_operating_system`
- `u_needed_by`
- `u_business_justification`
- `u_urgency`
- `u_data_sensitivity`

Use the catalog variables as the source of truth where possible.

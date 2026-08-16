# SLA Configuration

## SLA

**Name:** Laptop Fulfillment SLA

**Table:** Catalog Task (`sc_task`)

## Start condition

```text
Assignment Group = Hardware / End User Computing
AND
State is not Closed Complete
```

## Stop condition

```text
State = Closed Complete
```

## Suggested targets

| Priority | Target |
|---|---:|
| Critical | 4 hours |
| High | 8 hours |
| Normal | 2 business days |
| Low | 5 business days |

Verify business hours and schedules in the PDI.

## Pause condition

If your process supports waiting for employee information:

```text
State = Awaiting Information
```

Pause the SLA.

## SLA visibility

Demonstrate in the PDI:

- SLA record
- Task SLA related list
- Time remaining
- Breach status
- Completed SLA

# Catalog Item Specification

## Catalog

**Catalog:** Service Catalog

## Category

**Category:** Hardware

## Catalog Item

**Name:** Employee Laptop Request

**Short description:** Request a new, replacement, or upgraded company laptop.

## Variables

| Name | Type | Required | Example |
|---|---|---:|---|
| requested_for | Reference | Yes | Employee |
| request_type | Select Box | Yes | New Laptop |
| laptop_type | Select Box | Yes | Standard Business |
| operating_system | Select Box | Yes | Windows 11 |
| location | Reference / Select | Yes | Chennai |
| needed_by | Date | Yes | 2026-09-01 |
| urgency | Select Box | Yes | Normal |
| business_justification | Multi Line Text | Yes | New employee onboarding |
| data_sensitivity | Select Box | Yes | Internal |
| accessories | Checkboxes | No | Dock, Mouse |
| manager | Reference | Yes | Employee manager |
| special_requirements | Multi Line Text | No | Accessibility requirement |

## Laptop choices

### Standard Business

- 16 GB RAM
- 512 GB SSD
- Business applications
- Normal approval

### Developer / Engineering

- 32 GB RAM
- 1 TB SSD
- Development tools
- Additional IT Hardware approval

### Executive

- Premium business laptop
- Premium support
- Additional IT Hardware approval

### Replacement

- Replacement due to age, damage, or failure
- Existing asset information should be captured

## Request type choices

- New Laptop
- Replacement Laptop
- Upgrade Existing Laptop

## Urgency

- Low
- Normal
- High
- Critical

## Data sensitivity

- Public
- Internal
- Confidential
- Restricted

## UI behavior

If `request_type = Replacement Laptop`:

Show:

- Existing asset
- Replacement reason

If `laptop_type = Developer / Engineering`:

Show:

- Development tools
- Additional justification

If `data_sensitivity = Restricted`:

Show:

- Security justification

If `urgency = Critical`:

Show:

- Business impact
- Needed-by date becomes mandatory

## Catalog item fulfillment

The Catalog Item itself should not directly assign a technician.

The Flow Designer flow should create and assign the fulfillment task after approvals.

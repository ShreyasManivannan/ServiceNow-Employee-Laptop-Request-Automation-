# Catalog Client Scripts

The examples below are intended for a ServiceNow PDI. Update variable names to match your Catalog Item.

## CS-01 — Set manager from Requested For

**Type:** onChange

**Variable:** `requested_for`

```javascript
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || !newValue) {
        return;
    }

    g_form.getReference('requested_for', function(user) {
        if (user && user.manager) {
            g_form.setValue('manager', user.manager);
        }
    });
}
```

## CS-02 — Validate needed-by date

**Type:** onSubmit

```javascript
function onSubmit() {
    var neededBy = g_form.getValue('needed_by');

    if (!neededBy) {
        g_form.addErrorMessage('Please provide a needed-by date.');
        return false;
    }

    var today = new Date();
    var requestedDate = new Date(neededBy);

    today.setHours(0, 0, 0, 0);
    requestedDate.setHours(0, 0, 0, 0);

    if (requestedDate < today) {
        g_form.addErrorMessage(
            'Needed-by date cannot be in the past.'
        );
        return false;
    }

    return true;
}
```

## CS-03 — Business justification length

**Type:** onSubmit

```javascript
function onSubmit() {
    var justification = g_form.getValue(
        'business_justification'
    );

    if (!justification || justification.trim().length < 20) {
        g_form.addErrorMessage(
            'Please provide at least 20 characters explaining the business need.'
        );
        return false;
    }

    return true;
}
```

## CS-04 — High-cost warning

**Type:** onChange

**Variable:** `laptop_type`

```javascript
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) {
        return;
    }

    if (newValue == 'developer_engineering' ||
        newValue == 'executive') {

        g_form.addInfoMessage(
            'This laptop type requires additional IT Hardware approval.'
        );
    }
}
```

## Important

Client Scripts improve user experience but are not security controls. Always validate important business rules server-side.

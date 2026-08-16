// Business Rule: Validate Laptop Request
// Table: sc_req_item
// When: before insert
// Condition: Catalog Item = Employee Laptop Request

(function executeRule(current, previous) {

    if (!current.cat_item) {
        gs.addErrorMessage(
            'Laptop request must have a catalog item.'
        );

        current.setAbortAction(true);
        return;
    }

    // Example server-side variable validation.
    // Replace variable names if your PDI uses different names.

    var justification = String(
        current.variables.business_justification || ''
    );

    if (justification.length < 20) {
        gs.addErrorMessage(
            'Business justification must contain at least 20 characters.'
        );

        current.setAbortAction(true);
        return;
    }

})(current, previous);

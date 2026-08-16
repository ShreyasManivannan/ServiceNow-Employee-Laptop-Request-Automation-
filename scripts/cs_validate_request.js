// Catalog Client Script
// Type: onSubmit

function onSubmit() {

    var neededBy = g_form.getValue(
        'needed_by'
    );

    if (!neededBy) {
        g_form.addErrorMessage(
            'Please provide a needed-by date.'
        );
        return false;
    }

    var justification = g_form.getValue(
        'business_justification'
    );

    if (!justification ||
        justification.trim().length < 20) {

        g_form.addErrorMessage(
            'Please provide at least 20 characters in the business justification.'
        );

        return false;
    }

    return true;
}

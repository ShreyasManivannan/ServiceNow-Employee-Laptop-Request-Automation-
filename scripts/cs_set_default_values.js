// Catalog Client Script
// Type: onChange
// Variable: requested_for

function onChange(
    control,
    oldValue,
    newValue,
    isLoading
) {

    if (isLoading || !newValue) {
        return;
    }

    g_form.getReference(
        'requested_for',
        function(user) {

            if (user && user.manager) {
                g_form.setValue(
                    'manager',
                    user.manager
                );
            }

        }
    );
}

// Business Rule: Calculate Laptop Request Priority
// Table: sc_req_item
// When: before insert / before update

(function executeRule(current, previous) {

    var urgency = String(
        current.variables.urgency || ''
    );

    if (urgency === 'critical') {
        current.priority = 1;
    } else if (urgency === 'high') {
        current.priority = 2;
    } else if (urgency === 'normal') {
        current.priority = 3;
    } else {
        current.priority = 4;
    }

})(current, previous);

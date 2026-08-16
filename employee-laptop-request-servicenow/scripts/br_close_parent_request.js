// Business Rule concept: Close parent request
// Recommended implementation: Flow Designer.
// Use a Business Rule only when server-side enforcement is required.
//
// Table: sc_req_item
// When: after update

(function executeRule(current, previous) {

    // IMPORTANT:
    // Confirm the state values in your PDI before implementing.
    //
    // Example approach:
    //
    // 1. Detect RITM completion.
    // 2. Query sibling RITMs for current.request.
    // 3. If every applicable RITM is complete,
    //    update the parent request.
    //
    // Keeping this logic in Flow Designer is preferred
    // for this portfolio project.

})(current, previous);

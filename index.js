let employee = {
    name: "john",
    streetAddress: "something",
}


function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
let deleteFromEmployeeByKey = {...employee}

delete deleteFromEmployeeByKey[key];

return deleteFromEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
delete employee[key];
return employee;
}
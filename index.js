

const employee = {
        name: " ",
        streetAddress: " ",
    }

function updateEmployeeWithKeyAndValue(employee, key, value) {
        const employee2 = {...employee};
        employee2[key] = value;
        return employee2;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const employee3 = {...employee};
    employee3[key] = value;
    return employee3;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
}

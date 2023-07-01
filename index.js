// Write your solution in this file!

const employee = {
    name: 'Nour',
    streetAddress: 'wxyz 34'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const emp = {...employee};
    emp[key] = value;

    return emp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const emp = {...employee};
    delete emp[key];

    return emp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}
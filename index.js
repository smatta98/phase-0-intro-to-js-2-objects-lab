let employee = { 
    name : 'Zara',
    streetAddress: '703 Wildwood Lane'
};

function updateEmployeeWithKeyAndValue(object,key,value){
    let employeeTwo = {...employee}
    employeeTwo[key] = value
    return employeeTwo
}

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key]
return employee
}

// ask Rahul about object methods//
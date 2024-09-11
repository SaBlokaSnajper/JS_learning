const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    specialization: "JavaScript",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HR",
    salary: 35000,
    specialization: "Python",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    specialization: "Java",
  },
];

function totalEmployees() {
  const employeeDetailsHTML = employees
    .map(
      (employee) =>
        `<p>${employee.id}: ${employee.name} ${employee.age} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");

  document.getElementById("employeesDetails").innerHTML = employeeDetailsHTML;
}

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );
  const hrEmployeesDisplay = hrEmployees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId
  );
  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "no employee found with this ID";
  }
}

function displayJavaScript() {
  const jsEmployees = employees.filter(
    (employee) => employee.specialization === "JavaScript"
  );
  const jsEmployeesDisplay = jsEmployees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = jsEmployeesDisplay;
}

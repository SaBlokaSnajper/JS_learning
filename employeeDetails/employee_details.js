const employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
  { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 35000 },
  { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 },
];

function totalEmployees() {
  const employeeListDiv = document.getElementById("employeesDetails");
  employeeListDiv.innerHTML = ""; // Clear any previous content

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.innerHTML = `
        <p><strong>ID:</strong> ${employee.id}</p>
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Age:</strong> ${employee.age}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Salary:</strong> $${employee.salary}</p>
        <hr>
      `;
    employeeListDiv.appendChild(employeeDiv);
  });
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
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
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
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - ${foundEmployee.salary}: </p>`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "no employee found with this ID";
  }
}

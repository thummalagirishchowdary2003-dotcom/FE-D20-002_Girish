import React, { useState } from "react";
import "./App.css";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 101,
      name: "Swetha",
      department: "HR",
      position: "Manager",
    },
    {
      id: 102,
      name: "Vinay",
      department: "IT",
      position: "Developer",
    },
    {
      id: 103,
      name: "Praveen",
      department: "Finance",
      position: "Accountant",
    },
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="container">
      <h1>Employee Management</h1>

      <EmployeeForm addEmployee={addEmployee} />

      <EmployeeTable
        employees={employees}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;
import React, { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
    position: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      employee.id &&
      employee.name &&
      employee.department &&
      employee.position
    ) {
      addEmployee(employee);

      setEmployee({
        id: "",
        name: "",
        department: "",
        position: "",
      });
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="id"
        placeholder="Employee ID"
        value={employee.id}
        onChange={handleChange}
      />

      <input
        name="name"
        placeholder="Employee Name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />

      <input
        name="position"
        placeholder="Position"
        value={employee.position}
        onChange={handleChange}
      />

      <button>Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
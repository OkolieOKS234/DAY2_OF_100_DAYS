//  FIRST I LEARNT ABOUT SPREAD OPERATOR AND REST OPERATOR

// Using Objects and arrays to understand the concept of Spread and rest

const employees = ["Simon", "Peter", "Titus", "Forbes", "Genesis"];

const addNewEmployee = () => {
  // create a new employee in the list of arrays
  let name = "David";
  const newEmployee = [...employees, name, "John", "Daniel"];

  console.log(
    ` These are the list of the employees you can now Add or delete:
     ${newEmployee}`
  );
};

addNewEmployee();

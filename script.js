//your JS code here. If required.
function printFunctionName() {
  // Get the name of the function dynamically using arguments.callee.name
  const functionName = arguments.callee.name;
  
  console.log(`The name of this function is: ${functionName}`);
}

// Calling the function
printFunctionName(); // Output: The name of this function is: printFunctionName

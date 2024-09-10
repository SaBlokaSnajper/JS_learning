let userRole = "employee";
let accessLevel;

if (userRole === "employee") {
  accessLevel = "Full access to Dietary Services.";
} else if (userRole === "Enrolled Member") {
  accessLevel =
    "Access to Dietary Services and one-on-one interaction with a dietician.";
} else if (userRole === "Subscriber") {
  accessLevel = "Partial access to Dietary Services";
} else {
  accessLevel = "Need to be at least a subscriber to avail this facility.";
}
console.log("Access Level:", accessLevel);

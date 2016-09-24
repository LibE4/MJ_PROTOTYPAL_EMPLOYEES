"use strict";
function Employee(firstName, lastName, jobType) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.jobType = jobType;
}

Employee.prototype.setDepartment = function(department) {
	this.department = department;
};

function Clinician(firstName, lastName, jobType, expertise) {
	Employee.call(this, firstName, lastName, jobType);
	this.expertise = expertise;
}
Clinician.prototype = new Employee();

function Operations(firstName, lastName, jobType, responsibility) {
	Employee.call(this, firstName, lastName, jobType);
	this.responsibility = responsibility;
}
Operations.prototype = new Employee("Operations");

function Department(name) {
	this.name = name;
}

function FieldOffice(city) {
	this.city = city;
}
FieldOffice.prototype = new Department("FieldOffice");

function Headquarters() {

}
Headquarters.prototype = new Department("Headquarters");

var ClinicianOne = new Clinician("Aee", "Bee", "Clinician", "physical therapist");
ClinicianOne.setDepartment(new FieldOffice("Nashville"));
console.log(ClinicianOne.firstName, ClinicianOne.lastName, "works as a", ClinicianOne.jobType, ", in the", ClinicianOne.department.city,
  ClinicianOne.department.name, ", and is a", ClinicianOne.expertise);

var ClinicianTwo = new Clinician("Cee", "Dee", "Clinician", "anesthesiologist");
ClinicianTwo.setDepartment(new FieldOffice("Brentwood"));
console.log(ClinicianTwo.firstName, ClinicianTwo.lastName, "works as a", ClinicianTwo.jobType, ", in the", ClinicianTwo.department.city,
  ClinicianTwo.department.name, ", and is a", ClinicianTwo.expertise);

var operationsOne = new Operations("Eee", "Fee", "operations", "revenue");
operationsOne.setDepartment(new FieldOffice("Franklin"));
console.log(operationsOne.firstName, operationsOne.lastName, "works as a", operationsOne.jobType, ", in the", operationsOne.department.city,
  operationsOne.department.name, ", and is responsible for", operationsOne.responsibility);

var operationsTwo = new Operations("Gee", "Hee", "operations", "compliance");
operationsTwo.setDepartment(new Headquarters());
console.log(operationsTwo.firstName, operationsTwo.lastName, "works as a", operationsTwo.jobType, ", in the",
  operationsTwo.department.name, ", and is responsible for", operationsTwo.responsibility);




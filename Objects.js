//JavaScript Objects
var QA_Intern = {firstName:"Neha", lastName:"Awachar", Education:"B.E.", Course:"SDET+"};
console.log(QA_Intern);
console.log(QA_Intern.firstName);

//Object Properties
var QA_Intern = {firstName:"Neha", lastName:"Awachar", Education:"B.E.", Course:"SDET+"};
console.log(QA_Intern);
console.log(QA_Intern.firstName);
console.log(QA_Intern.lastName);
console.log(QA_Intern.Education);
console.log(QA_Intern.Course);

//Object Methods
var QA_Intern = {firstName:"Neha", lastName:"Awachar", Education:"B.E.", Course:"SDET+",
                fullName : function() 
                 {
                     return this.firstName + " " + this.lastName;
                 }
                };
console.log(QA_Intern.fullName());
console.log(QA_Intern.firstName);

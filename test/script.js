import {
  CCTSC,
  ConvertHMS,
  ConvertMS,
  convertToCurrency,
  Ellipsis,
  FuncRunTime,
  RandomRange,
  RDFA,
  RunDelayFunc,
  RunFunc,
  SCTCC,
  Slugify,
  TimeStamp,
  UCFirst,
  Unique,
  ValidateEmail,
} from "smn-utils";
// TimeStamp
console.log("> TimeStamp");
console.log(TimeStamp());
// TimeStamp With prefix
console.log("> TimeStamp with prefix");
console.log(TimeStamp({ prefix: "ABC" }));
// TimeStamp With suffix
console.log("> TimeStamp with suffix");
console.log(TimeStamp({ suffix: "DEF" }));

// Unique Number
console.log("> Unique Number");
console.log(Unique());
// Unique Number With prefix
console.log("> Unique Number with prefix");
console.log(Unique({ prefix: "ABC" }));
// Unique Number With suffix
console.log("> Unique Number with suffix");
console.log(Unique({ suffix: "DEF" }));

// Ellipsis with big string
console.log("> Ellipsis with big string");
console.log(Ellipsis("It is a long established fact that a reader will be distracted.", 12, 2));

// Convert second number to readable hour:minute:second
console.log("> Convert second number to readable hour:minute:second");
console.log(ConvertHMS(3690));
// Convert second number to readable minute:second
console.log("> Convert second number to readable minute:second");
console.log(ConvertMS(90));

// First letter uppercase
console.log("> First letter uppercase");
console.log(UCFirst("hello world"));

// Validate email address
console.log("> Validate email address");
console.log(ValidateEmail("sumonskys@gmail.com"));

// Run function multiple time
const functionName = () => {
  console.log("Run function from RunFunc...");
};

RunFunc(functionName, 3);

// Run function delay
const functionName2 = () => {
  console.log("Run function from RunDelayFunc...");
};

RunDelayFunc(functionName2, 3);

// Function run time
const functionName3 = () => {
  console.log("Run function from FuncRunTime...");
};
console.log("> Function run time");
FuncRunTime(functionName3, "functionName3");

// Random number generate with range
console.log("> Random number generate with range");
console.log(RandomRange(1, 100));

// Remove duplicate from array
console.log("> Remove duplicate from array");
console.log(RDFA(["Tom", "Simon", "Tom", "Sarah"]));

// Slugify
console.log("String to slug");
console.log(Slugify("Hello World"));

// Camel case to snake case
console.log("> Camel case to snake case");
console.log(CCTSC("Hello World"));

// Snake case to camel case
console.log("> Snake case to camel case");
console.log(SCTCC("_hello _world"));

// Convert to currency
console.log("> Convert to currency")
console.log(convertToCurrency(101.5, "USD", "us-US"));

# smn-utils v1.0.2

## Installation

Using npm:

```shell
$ npm i smn-utils --save
```

Using yarn:

```shell
$ yarn add smn-utils
```

Uses:

```js
// Time Stamp
// Exp: 1676689908101
import { TimeStamp } from "smn-utils";
TimeStamp();

// TimeStamp with prefix
// Exp: ABC1676689908101
import { TimeStamp } from "smn-utils";
TimeStamp({ prefix: "ABC" });

// TimeStamp with suffix
// Exp: 1676689908101DEF
import { TimeStamp } from "smn-utils";
TimeStamp({ suffix: "DEF" });

// Unique Number
// Exp: 1676690698596591
import { Unique } from "smn-utils";
Unique();

// Unique Number with prefix
// Exp: ABC1676690698596591
import { Unique } from "smn-utils";
Unique({ prefix: "ABC" });

// Unique Number with suffix
// Exp: 1676690698596591DEF
import { Unique } from "smn-utils";
Unique({ suffix: "DEF" });

// Ellipsis with big string
// Default length value is 30
// Ellipsis count default value 3
// Exp: It is a long...
import { Ellipsis } from "smn-utils";
Ellipsis("It is a long established fact that a reader will be distracted.", 12, 3);

// Convert second number to readable hour:minute:second
// Exp: 01:01:30
import { ConvertHMS } from "smn-utils";
ConvertHMS(3690);

// Convert second number to readable minute:second
// Exp: 01:30
import { ConvertMS } from "smn-utils";
ConvertMS(90);

// Close current window and show blank screen
// It only work on browser
import { WindowClose } from "smn-utils";
WindowClose();
// Close current window and redirect to the page
// It only work on browser
import { WindowClose } from "smn-utils";
WindowClose("https://google.com");

// First letter uppercase
// Exp: Hello world
import { UCFirst } from "smn-utils";
UCFirst("hello world");

// Validate email address
// Exp: true
import { ValidateEmail } from "smn-utils";
ValidateEmail("sumonskys@gmail.com");

// wait specific second in async function
// Wait one second
import { Sleep } from "smn-utils";
await Sleep(1);

// Run function multiple time
// Default run times is 2
import { RunFunc } from "smn-utils";
const functionName = () => {
  console.log("Hello world");
};
RunFunc(functionName, 3);

// Run function after specific second
// Default run times is 2 second
import { RunDelayFunc } from "smn-utils";
const functionName2 = () => {
  console.log("Hello world");
};
RunDelayFunc(functionName2, 3);

// Run function and get the run time
// Exp: functionName: 0.43ms
import { FuncRunTime } from "smn-utils";
const functionName3 = () => {
  console.log("Hello world");
};
FuncRunTime(functionName3, "functionName");

// Random number generate with range
// Default lower value is: 1 and upper value is 100
// Exp: 47
import { RandomRange } from "smn-utils";
RandomRange(1, 100);

// Remove duplicate from array
// Exp: ["Tom", "Simon", "Sarah"]
import { RDFA } from "smn-utils";
RDFA(["Tom", "Simon", "Tom", "Sarah"]);

// String to slug
// Exp: hello-world
import { Slugify } from "smn-utils";
Slugify("Hello World");

// Camel case to snake case
// Exp: _hello _world
import { CCTSC } from "smn-utils";
CCTSC("Hello World");

// Snake case to camel case
// Exp: Hello World
import { SCTCC } from "smn-utils";
SCTCC("_hello _world");

// Convert currency from amount
// Exp: $101.50
import { convertToCurrency } from "smn-utils";
convertToCurrency(101.5, "USD", "us-US");
```

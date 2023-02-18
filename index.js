// Export Current Time Stamp
export const TimeStamp = ({ prefix = "", suffix = "" } = {}) => prefix + new Date().getTime().toString() + suffix;

// Unique number with current timestamp
export const Unique = ({ prefix = "", suffix = "" } = {}) =>
  prefix + (new Date().getTime().toString() + Math.floor(Math.random() * 100) + 1).toString() + suffix;

// Ellipsis for String
export const Ellipsis = (input, length = 10, ellipsisCount = 3) => {
  const text = input.toString();
  if (isNaN(length) || isNaN(ellipsisCount)) {
    console.error("length and ellipsisCount must be valid numbers");
    return;
  }

  if (text.length <= length) {
    return text;
  }
  const ellipsis = Array.from(Array(ellipsisCount))
    .map(() => ".")
    .join("");
  return `${text.substr(0, length)}${ellipsis}`;
};

// Convert Second to Countdown time (Hour: Minute: Second)
export const ConvertHMS = (value) => {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
};

// Convert Second to Countdown time (Minute:Second)
export const ConvertMS = (value) => {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds; // Return is HH : MM : SS
};

// Close Window
export const WindowClose = (redirect = "") => {
  window.open("about:blank", "_self");
  window.close();
  if (redirect) return window.location.replace(redirect);
  return window.location.replace("about:blank");
};

// First Letter Upper Case
export const UCFirst = (string) => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
  return false;
};

// Validate Email
export const ValidateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Sleep
export const Sleep = async (second) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, parseInt(second) * 1000);
  });
};

// Run function multiple time
export const RunFunc = (func, times = 2) => {
  if (isNaN(times)) {
    console.error("times to run must be specified");
    return;
  }
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`);
    return;
  }
  Array.from(Array(times)).forEach(() => {
    func();
  });
};

// Run function after specific time
export const RunDelayFunc = (func, timeout = 2) => {
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`);
    return;
  }
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout * 1000);
  };
};

// Random number generate with range
export const RandomRange = (lower = 0, upper = 100) => {
  if (isNaN(lower) || isNaN(upper)) {
    console.error("lower and upper must be valid numbers");
    return;
  }
  lower = Math.ceil(lower);
  upper = Math.floor(upper);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

// Remove duplicate from array
export const RDFA = (arr) => {
  if (!Array.isArray(arr)) {
    console.error(`array expected, ${typeof arr} provided`);
    return;
  }
  return [...new Set(arr)];
};

// Function runtime
export const FuncRunTime = (func, label = "default") => {
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`);
    return;
  }
  console.time(label);
  func();
  console.timeEnd(label);
};

// Slugify
export const Slugify = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof str} provided`);
    return str;
  }
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

// Camel case to snake case
export const CCTSC = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  return text.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

// Snake case to camel case
export const SCTCC = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  return text.toLowerCase().replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace("-", "").replace("_", ""));
};

// Convert Currency
export const convertToCurrency = (num, currency = "EUR", locale = "nl-NL") => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(num);
};

// Export Current Time Stamp
export const TimeStamp = () => new Date().getTime();

// Unique number with current timestamp
export const Unique = () =>
  new Date().getTime() + Math.floor(Math.random() * 100) + 1;

// Ellipsis for String
export const Ellipsis = (input, size = 30) =>
  input.length > size ? `${input.substring(0, size)}...` : input;

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
export const WindowClose = () => {
  window.open("about:blank", "_self");
  window.close();
  window.location.replace("about:blank");
  return;
};

// Camel Case
export const CamelCase = (string) => {
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
export const sleep = async (milliseconds) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, milliseconds);
  });
};

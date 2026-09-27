const zipPattern = /^d{5}$/;
const isValidZip = zipPattern.test(zipInput.value);
console.log(isValidZip);
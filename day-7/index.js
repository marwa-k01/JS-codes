function checkAge() {
    const birthYear = prompt("Enter your birth year:");
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    let message;
    if (age < 0) {
        message = "Please enter a valid year.";
    } else if (age < 18) {
        message = "You are a minor.";
    } else {
        message = "You are an adult.";
    }

    console.log(`Your age is ${age}. ${message}`);
}

checkAge();
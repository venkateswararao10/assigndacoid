document.addEventListener("DOMContentLoaded", () => {
    const skipLink = document.getElementById("skip-link");
    const screen1Button = document.getElementById("screen-1-button");
    const screen2Button = document.getElementById("screen-2-button");
    const signinLink = document.getElementById("signin-link");
    const signupLink = document.getElementById("signup-link");
    const signinButton = document.getElementById("signin-button");
    const signupButton = document.getElementById("signup-button");
    const termsCheckbox = document.getElementById("terms-checkbox");
    const firstCheckbox = document.getElementById("first-checkbox");
    const secondCheckbox = document.getElementById("second-checkbox");
    const thirdCheckbox = document.getElementById("third-checkbox");
    const fourthCheckbox = document.getElementById("fourth-checkbox");
    const fifthCheckbox = document.getElementById("fifth-checkbox");
    const sixthCheckbox = document.getElementById("sixth-checkbox");
    const goalsConfirmButton = document.getElementById("goals-confirm-button");
    const scheduleLink = document.getElementById("schedule-link");

    if (skipLink) {
        skipLink.addEventListener("click", () => {
            console.log("skip button clicked");

            window.location.href = "signup.html";
        });
    }

    if (screen1Button) {
        screen1Button.addEventListener("click", () => {
            console.log("screen 1 button clicked");

            window.location.href = "index2.html";
        });
    }

    if (screen2Button) {
        screen2Button.addEventListener("click", () => {
            console.log("screen 2 button clicked");
        });
    }

    if (signinLink) {
        signinLink.addEventListener("click", () => {
            console.log("singin link clicked");

            window.location.href = "signin.html";
        });
    }

    if (signupLink) {
        signupLink.addEventListener("click", () => {
            console.log("signup link clicked");

            window.location.href = "signup.html";
        });
    }

    if (signupButton) {
        signupButton.addEventListener("click", (event) => {
            console.log("signup button clicked");

            event.preventDefault();

            if (termsCheckbox.checked) {
                signupButton.classList.add("animate");

                setTimeout(() => {
                    signupButton.classList.remove("animate");
                }, 100);

                window.location.href = "goals.html";
            } else {
                termsCheckbox.classList.add("blink-checkbox");

                setTimeout(() => {
                    termsCheckbox.classList.remove("blink-checkbox");
                }, 600);
            }
        });
    }

    if (signinButton) {
        signinButton.addEventListener("click", (event) => {
            console.log("signin button clicked");

            event.preventDefault();

            signinButton.classList.add("animate");

            setTimeout(() => {
                signinButton.classList.remove("animate");
            }, 100);

            window.location.href = "goals.html";
        });
    }

    if (goalsConfirmButton) {
        goalsConfirmButton.addEventListener("click", (event) => {
            event.preventDefault();

            console.log("goals confirm button clicked");

            if (firstCheckbox.checked
                || secondCheckbox.checked
                || thirdCheckbox.checked
                || fourthCheckbox.checked
                || fifthCheckbox.checked
                || sixthCheckbox.checked) {
                goalsConfirmButton.classList.add("animate");

                setTimeout(() => {
                    goalsConfirmButton.classList.remove("animate");
                }, 100);

                window.location.href = "workouttracker.html";
            } else {
                firstCheckbox.classList.add("blink-checkbox");
                secondCheckbox.classList.add("blink-checkbox");
                thirdCheckbox.classList.add("blink-checkbox");
                fourthCheckbox.classList.add("blink-checkbox");
                fifthCheckbox.classList.add("blink-checkbox");
                sixthCheckbox.classList.add("blink-checkbox");

                setTimeout(() => {
                    firstCheckbox.classList.remove("blink-checkbox");
                    secondCheckbox.classList.remove("blink-checkbox");
                    thirdCheckbox.classList.remove("blink-checkbox");
                    fourthCheckbox.classList.remove("blink-checkbox");
                    fifthCheckbox.classList.remove("blink-checkbox");
                    sixthCheckbox.classList.remove("blink-checkbox");
                }, 600);
            }

        });
    }

    if (scheduleLink) {
        scheduleLink.addEventListener("click", () => {
            console.log("schedule link clicked");

            window.location.href = "workoutschedule.html";
        });
    }
});

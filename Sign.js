const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const usernamePInput = document.getElementById("usernameP");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const usernameP = usernamePInput.value;
    const password = passwordInput.value;

    // TODO: Perform login validation
    // If successful, redirect to dashboard
    // Otherwise, display error message
});


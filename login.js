const loginform = document.querySelector("#registrerForm1");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

loginform.addEventListener("submit", function (event) {
  event.preventDefault();
  const userProfile = {
    email: email.value,
    password: password.value,
  };
  userLogin(userProfile);
});

async function userLogin(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(response);
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.log(error);
  }
}

userLogin("https://api.noroff.dev/api/v1/social/auth/login", userLogin);

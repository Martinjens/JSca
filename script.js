const registrerform = document.querySelector("#registrerForm");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const banner = document.querySelector("#banner");
const avatar = document.querySelector("#avatar");

//End-points:
//Registrer: https://api.noroff.dev/api/v1/social/auth/register
//Login: https://api.noroff.dev/api/v1/social/auth/login

registrerform.addEventListener("submit", function (event) {
  const userProfile = {
    name: username.value,
    email: email.value,
    password: password.value,
    avatar: avatar.value,
    banner: banner.value,
  };
  registrer(userProfile);
});

async function registrer(user) {
  const response = await fetch(
    "https://api.noroff.dev/api/v1/social/auth/register",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    }
  );
  const result = await response.json();
  console.log(result);
}
//registrer();

/*loginform.addEventListener("submit", function (event) {
  event.preventDefault();
  const userProfile = {
    email: email.value,
    password: password.value,
  };
});

async function loginUser(user) {
  const response = await fetch(
    "https://api.noroff.dev/api/v1/social/auth/login",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    }
  );
  const result = await response.json();
  console.log(result);
}

//loginUser();

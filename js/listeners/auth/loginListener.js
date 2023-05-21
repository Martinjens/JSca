import displayMessage from "../../ui/common/displayMessage.js";
import * as auth from "../../api/auth.js";
import * as storage from "../../services/storage.js";

addEventListener("submit", handleLogin);

export function loginListener() {
  const form = document.getElementById("rogers");
  if (form) {
    form.addEventListener("submit", handleLogin);
  }
}
async function handleLogin(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const button = form.querySelector("button");
  button.innerText = "Logging in...";

  const fieldset = form.querySelector("fieldset");
  fieldset.disabled = true;

  try {
    const bodyData = { email: email, password: password };
    const { accessToken } = await auth.login(bodyData);
    storage.save("token", accessToken);

    location.href = "/posts";
  } catch (error) {
    console.error(error);
    displayMessage("danger", error, "#message");
  } finally {
    button.innerText = "Login";
    fieldset.disabled = false;
  }
}
loginListener();

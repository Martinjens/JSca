import displayMessage from "../../ui/common/displayMessage.js";
import * as api from "../../api/auth/index.js";

export function registerListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", handleRegister);
  }
}
async function handleRegister(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  const avatar = data.get("avatar");
  const banner = data.get("banner");

  const fieldset = form.querySelector("#fieldi");
  fieldset.disabled = true;

  try {
    const bodyData = { name: name, email: email, password: password };
    if (avatar.trim().length > 0) {
      bodyData.avatar = avatar;
    }
    if (banner.trim().length > 0) {
      bodyData.banner = banner;
    }
    const response = await api.register(bodyData);
    displayMessage("success", "Account created", "#message");
    form.reset();
    console.log(response);
    location.href = "/index.html";
  } catch (error) {
    console.error(error);
    displayMessage("danger", error, "#message");
  } finally {
    fieldset.disabled = false;
  }
}

registerListener();

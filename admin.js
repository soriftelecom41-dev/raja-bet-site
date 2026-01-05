// ADMIN PASSWORD
const adminPass = "12345";

if (!localStorage.getItem("admin")) {
  const pass = prompt("Enter Admin Password:");
  if (pass !== adminPass) {
    alert("Wrong Password");
    location.href = "index.html";
  } else {
    localStorage.setItem("admin", "true");
  }
}

const usersDiv = document.getElementById("users");

for (let key in localStorage) {
  if (key.startsWith("user_")) {
    const username = key.replace("user_", "");
    const data = JSON.parse(localStorage.getItem(key));

    const div = document.createElement("div");
    div.style.marginBottom = "10px";
    div.innerHTML = `
      <b>${username}</b><br>
      Balance: ${data.balance}<br>
      <button onclick="add('${key}')">+100</button>
      <button onclick="minus('${key}')">-100</button>
      <hr>
    `;
    usersDiv.appendChild(div);
  }
}

function add(key) {
  let d = JSON.parse(localStorage.getItem(key));
  d.balance += 100;
  localStorage.setItem(key, JSON.stringify(d));
  location.reload();
}

function minus(key) {
  let d = JSON.parse(localStorage.getItem(key));
  d.balance -= 100;
  if (d.balance < 0) d.balance = 0;
  localStorage.setItem(key, JSON.stringify(d));
  location.reload();
}l

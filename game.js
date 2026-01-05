/* ===== LOGIN CHECK ===== */
const user = localStorage.getItem("currentUser");
if (!user) {
  location.href = "login.html";
}

/* ===== LOAD USER DATA ===== */
let data = JSON.parse(localStorage.getItem("user_" + user));

if (!data || data.balance === undefined) {
  data = { balance: 500 };
  localStorage.setItem("user_" + user, JSON.stringify(data));
}

/* ===== SHOW BALANCE ===== */
document.getElementById("bal").innerText = data.balance;

/* ===== PLAY GAME ===== */
function play(name) {
  let win = Math.random() > 0.5;
  let amount = win ? 50 : -30;

  data.balance += amount;
  if (data.balance < 0) data.balance = 0;

  save();
  alert(name + (win ? " WIN +50" : " LOSE -30"));
}

/* ===== DEPOSIT ===== */
function deposit() {
  let amt = Number(prompt("Enter deposit amount"));
  if (amt > 0) {
    data.balance += amt;
    save();
    alert("Deposit successful");
  }
}

/* ===== WITHDRAW ===== */
function withdraw() {
  let amt = Number(prompt("Enter withdraw amount"));
  if (amt > 0 && amt <= data.balance) {
    data.balance -= amt;
    save();
    alert("Withdraw successful");
  } else {
    alert("Insufficient balance");
  }
}

/* ===== LOGOUT ===== */
function logout() {
  localStorage.removeItem("currentUser");
  location.href = "login.html";
}

/* ===== SAVE & UPDATE ===== */
function save() {
  localStorage.setItem("user_" + user, JSON.stringify(data));
  document.getElementById("bal").innerText = data.balance;
}

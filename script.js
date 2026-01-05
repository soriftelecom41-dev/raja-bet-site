// ===== User Check =====
const currentUser = localStorage.getItem("currentUser");
if (!currentUser) location.href = "login.html";

// ===== Load User =====
const userText = document.getElementById("user");
const balanceText = document.getElementById("balance");

userText.innerText = currentUser;

let user = JSON.parse(localStorage.getItem("user_" + currentUser));
if (!user) {
  user = { balance: 500 };
}

let balance = user.balance;
balanceText.innerText = balance;

// ===== Save =====
function save() {
  user.balance = balance;
  localStorage.setItem("user_" + currentUser, JSON.stringify(user));
  balanceText.innerText = balance;
}

// ===== Games =====
function diceGame() {
  play(50, 50, "🎲 Dice");
}

function colorGame() {
  play(50, 50, "🔴 Color");
}

function spinGame() {
  play(50, 100, "🎡 Spin");
}

function play(cost, winAmount, name) {
  if (balance < cost) {
    alert("❌ Low balance");
    return;
  }

  if (Math.random() < 0.5) {
    balance += winAmount;
    alert("🎉 " + name + " Win");
  } else {
    balance -= cost;
    alert("😢 " + name + " Lose");
  }
  save();
}

// ===== Deposit / Withdraw (Demo) =====
function deposit() {
  balance += 500;
  alert("💰 Deposit ৳500");
  save();
}

function withdraw() {
  if (balance < 100) {
    alert("❌ Minimum ৳100");
    return;
  }
  balance -= 100;
  alert("💸 Withdraw ৳100");
  save();
}

function logout() {
  localStorage.removeItem("currentUser");
  location.href = "login.html";
}

const currentUser = localStorage.getItem("currentUser");
if (!currentUser) location.href = "login.html";

const userText = document.getElementById("user");
const balanceText = document.getElementById("balance");

userText.innerText = currentUser;

let user = JSON.parse(localStorage.getItem("user_"+currentUser));
let balance = user.balance;
balanceText.innerText = balance;

function save() {
  user.balance = balance;
  localStorage.setItem("user_"+currentUser, JSON.stringify(user));
  balanceText.innerText = balance;
}

function play(cost, winAmount) {
  if (balance < cost) return alert("Low balance");

  if (Math.random() < 0.5) {
    balance += winAmount;
    alert("🎉 You Win");
  } else {
    balance -= cost;
    alert("😢 You Lose");
  }
  save();
}

function dice() { play(100, 200); }
function color() { play(50, 100); }
function spin() { play(200, 400); }

function deposit() {
  balance += 500;
  save();
}

function withdraw() {
  if (balance < 500) return alert("Min withdraw ৳500");
  balance -= 500;
  save();
}

function logout() {
  localStorage.removeItem("currentUser");
  location.href = "login.html";
}

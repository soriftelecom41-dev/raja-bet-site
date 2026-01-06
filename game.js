// ===== LOGIN CHECK =====
let users = JSON.parse(localStorage.getItem("users")) || {};
let currentUser = localStorage.getItem("currentUser");

if (!currentUser || !users[currentUser]) {
  alert("Please login first");
  window.location.href = "login.html";
}

// ===== LOAD BALANCE =====
let balance = users[currentUser].balance || 0;
document.getElementById("bal").innerText = balance;

// ===== UPDATE BALANCE =====
function updateBalance() {
  users[currentUser].balance = balance;
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("bal").innerText = balance;
}

// ===== ROLL DICE GAME =====
function rollDice() {
  let bet = 10;

  if (balance < bet) {
    document.getElementById("result").innerText = "❌ Not enough balance";
    return;
  }

  balance -= bet;

  let dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice").innerText = "🎲 " + dice;

  if (dice >= 4) {
    balance += 20;
    document.getElementById("result").innerText = "✅ You Win! +৳20";
  } else {
    document.getElementById("result").innerText = "❌ You Lose!";
  }

  updateBalance();
}

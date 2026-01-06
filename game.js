// ===== USER CHECK =====
const user = localStorage.getItem("currentUser");
if (!user) location.href = "login.html";

// ===== LOAD DATA =====
let data = JSON.parse(localStorage.getItem("user_" + user)) || { balance: 500 };

// ===== UPDATE BALANCE =====
function updateBalance() {
  document.getElementById("bal").innerText = data.balance;
  localStorage.setItem("user_" + user, JSON.stringify(data));
}
updateBalance();

// ===== POPUP =====
function popup(msg) {
  alert(msg);
}

// ===== RANDOM =====
function chance(percent) {
  return Math.random() * 100 < percent;
}

// ===== PLAY GAME =====
function play(game) {
  let bet = 30;
  if (data.balance < bet) {
    popup("❌ Balance কম!");
    return;
  }

  data.balance -= bet;

  let win = chance(45); // 45% win chance
  let reward = bet * 2;

  if (win) {
    data.balance += reward;
    popup(`🎉 ${game} WIN!\n+৳${reward}`);
  } else {
    popup(`😢 ${game} LOSE!\n-৳${bet}`);
  }

  if (data.balance < 0) data.balance = 0;
  updateBalance();
}

// ===== ACTIONS =====
function deposit() {
  let amt = Number(prompt("Deposit amount:"));
  if (amt > 0) {
    data.balance += amt;
    updateBalance();
    popup("✅ Deposit successful");
  }
}

function withdraw() {
  let amt = Number(prompt("Withdraw amount:"));
  if (amt > 0 && amt <= data.balance) {
    data.balance -= amt;
    updateBalance();
    popup("✅ Withdraw successful");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  location.href = "login.html";
}

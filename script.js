let balance = parseInt(localStorage.getItem("balance")) || 500;
updateBalance();

function updateBalance() {
  document.getElementById("balance").innerText = balance;
  localStorage.setItem("balance", balance);
}

// 🎲 Dice Game
function diceGame() {
  if (balance < 100) return alert("❌ Insufficient balance");
  balance -= 100;
  if (Math.random() > 0.5) {
    balance += 200;
    alert("🎉 Dice Win ৳200");
  } else {
    alert("😢 Dice Lose ৳100");
  }
  updateBalance();
}

// 🔴 Color Game
function colorGame() {
  if (balance < 50) return alert("❌ Insufficient balance");
  balance -= 50;
  if (Math.random() > 0.6) noteWin(100);
  else alert("😢 Color Lose ৳50");
  updateBalance();
}

// 🎡 Spin Game
function spinGame() {
  if (balance < 30) return alert("❌ Insufficient balance");
  balance -= 30;
  let win = [0, 50, 100, 200][Math.floor(Math.random() * 4)];
  if (win > 0) {
    balance += win;
    alert("🎉 Spin Win ৳" + win);
  } else alert("😢 Spin Lose");
  updateBalance();
}

// Wallet
function deposit() {
  balance += 500;
  alert("✅ Deposit ৳500");
  updateBalance();
}

function withdraw() {
  if (balance < 500) return alert("❌ Minimum ৳500");
  balance -= 500;
  alert("✅ Withdraw Requested");
  updateBalance();
}

// Admin
function resetBalance() {
  let pass = document.getElementById("adminPass").value;
  if (pass === "admin123") {
    balance = 500;
    updateBalance();
    alert("🔐 Balance Reset");
  } else alert("❌ Wrong Password");
}

let balance = 0;
let balanceText;

window.onload = () => {
  balanceText = document.getElementById("balance");
  balance = 500; // Welcome bonus
  update();
};

function update() {
  balanceText.innerText = balance;
}

/* ===== Games ===== */

function diceGame() {
  play(50, 100, "Dice");
}

function colorGame() {
  play(50, 100, "Color");
}

function spinGame() {
  play(100, 200, "Spin");
}

function play(cost, win, name) {
  if (balance < cost) {
    alert("❌ Low balance");
    return;
  }

  if (Math.random() < 0.5) {
    balance += win;
    alert("🎉 " + name + " Win");
  } else {
    balance -= cost;
    alert("😢 " + name + " Lose");
  }

  update();
}

/* ===== Wallet ===== */

function deposit() {
  balance += 500;
  alert("💰 Deposit ৳500");
  update();
}

function withdraw() {
  if (balance < 100) {
    alert("❌ Minimum ৳100");
    return;
  }

  balance -= 100;
  alert("💸 Withdraw ৳100");
  update();
}

/* ===== Admin ===== */

function adminReset() {
  const pass = document.getElementById("adminPass").value;

  if (pass === "1234") {
    balance = 500;
    alert("✅ Admin Reset Done");
    document.getElementById("adminPass").value = "";
    update();
  } else {
    alert("❌ Wrong password");
  }
}

/* ===== Lucky 7 ===== */

function lucky7() {
  const cost = 50;

  if (balance < cost) {
    alert("❌ Low balance");
    return;
  }

  const number = Math.floor(Math.random() * 12) + 1;

  if (number === 7) {
    balance += 200;
    alert("🎉 Lucky 7! You Win ৳200");
  } else {
    balance -= cost;
    alert("😢 Number: " + number + " | You Lose");
  }

  update();
}

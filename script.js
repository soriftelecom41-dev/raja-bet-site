let balance = 0;

const balanceText = document.getElementById("balance");

function update() {
  balanceText.innerText = balance;
}

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

function deposit() {
  balance += 500;
  alert("✅ Deposit ৳500");
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

function adminReset() {
  const pass = document.getElementById("adminPass").value;
  if (pass === "1234") {
    balance = 500;
    alert("🔐 Admin Reset Done");
    update();
  } else {
    alert("❌ Wrong password");
  }
}

update();<div class="games">
  <button onclick="diceGame()">🎲 Dice</button>
  <button onclick="colorGame()">🔴 Color</button>
  <button onclick="spinGame()">🎰 Spin</button>
</div>

<br>

<button onclick="deposit()">➕ Deposit</button>
<button onclick="withdraw()">➖ Withdraw</button>

<br><br>

<input type="password" id="adminPass" placeholder="Admin password">
<button onclick="adminReset()">Admin Reset</button>

<script src="script.js"></script>

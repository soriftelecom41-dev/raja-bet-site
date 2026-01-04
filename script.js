let balance = 1000;

function playGame() {
  const win = Math.random() > 0.5;
  const amount = 100;

  if (win) {
    balance += amount;
    alert("🎉 You Win ৳100");
  } else {
    balance -= amount;
    alert("❌ You Lose ৳100");
  }

  document.getElementById("balance").innerText = balance;
}

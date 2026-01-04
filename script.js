// Initial balance
let balance = parseInt(localStorage.getItem("balance")) || 500;

// Show balance
const balanceText = document.getElementById("balance");
balanceText.innerText = "Balance: ৳" + balance;

// Save balance
function saveBalance() {
  localStorage.setItem("balance", balance);
}

// Play game
function playGame() {
  const betAmount = 100;

  if (balance < betAmount) {
    alert("❌ Balance insufficient");
    return;
  }

  const win = Math.random() < 0.5;

  if (win) {
    balance += 200;
    alert("🎉 You Win ৳200");
  } else {
    balance -= betAmount;
    alert("😢 You Lose ৳100");
  }

  balanceText.innerText = "Balance: ৳" + balance;
  saveBalance();
}

// Button click
document
  .getElementById("playBtn")
  .addEventListener("click", playGame);

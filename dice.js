let balance = parseInt(localStorage.getItem("balance")) || 1000;

// show balance
document.getElementById("bal").innerText = balance;

function rollDice() {
  if (balance < 10) {
    alert("Not enough balance");
    return;
  }

  // bet
  balance -= 10;

  // dice roll (1–6)
  let dice = Math.floor(Math.random() * 6) + 1;

  let msg = "🎲 Dice: " + dice + " | ";

  if (dice >= 4) {
    balance += 20;
    msg += "You WIN +20";
  } else {
    msg += "You LOSE -10";
  }

  // save + show
  localStorage.setItem("balance", balance);
  document.getElementById("bal").innerText = balance;
  document.getElementById("result").innerText = msg;
}

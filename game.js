// USER CHECK
const user = localStorage.getItem("currentUser");
if (!user) location.href = "login.html";

// LOAD DATA
let data = JSON.parse(localStorage.getItem("user_" + user)) || { balance: 500 };

// UPDATE BALANCE
function updateBalance() {
  document.getElementById("bal").innerText = data.balance;
  localStorage.setItem("user_" + user, JSON.stringify(data));
}
updateBalance();

// ROLL DICE GAME
function rollDice() {
  let bet = 10;

  if (data.balance < bet) {
    alert("❌ Balance কম!");
    return;
  }

  data.balance -= bet;

  let dice = Math.floor(Math.random() * 6) + 1;
  let win = dice >= 4; // 4,5,6 = win

  if (win) {
    data.balance += 20;
    document.getElementById("result").innerText =
      "🎲 Dice: " + dice + " | ✅ WIN +20";
  } else {
    document.getElementById("result").innerText =
      "🎲 Dice: " + dice + " | ❌ LOSE -10";
  }

  updateBalance();
}

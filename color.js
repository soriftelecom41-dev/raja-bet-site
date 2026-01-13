// USER CHECK
const user = localStorage.getItem("currentUser");
if(!user) location.href="login.html";

// LOAD DATA
let data = JSON.parse(localStorage.getItem("user_"+user));
if(!data) data={balance:500};

document.getElementById("bal").innerText=data.balance;

function save(){
  localStorage.setItem("user_"+user,JSON.stringify(data));
  document.getElementById("bal").innerText=data.balance;
}

// GAME LOGIC
function play(choice){
  let bet = Number(document.getElementById("bet").value);
  if(bet<=0) return alert("Bet দিন");
  if(data.balance < bet) return alert("Balance নাই");

  data.balance -= bet;

  let colors = ["red","green","violet"];
  let result = colors[Math.floor(Math.random()*3)];

  let winAmount = 0;
  if(choice === result){
    if(result==="violet") winAmount = bet * 4;
    else winAmount = bet * 2;
    data.balance += winAmount;
  }

  document.getElementById("result").innerHTML =
    "Result: <b>"+result.toUpperCase()+"</b><br>" +
    (winAmount ? "✅ WIN ৳"+winAmount : "❌ LOSE ৳"+bet);

  save();
}

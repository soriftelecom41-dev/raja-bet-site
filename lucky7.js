// LOGIN CHECK
const user = localStorage.getItem("currentUser");
if(!user) location.href="login.html";

// LOAD USER DATA
let data = JSON.parse(localStorage.getItem("user_"+user));
if(!data) data = {balance:500};

document.getElementById("bal").innerText = data.balance;

function save(){
  localStorage.setItem("user_"+user, JSON.stringify(data));
  document.getElementById("bal").innerText = data.balance;
}

function play(type){
  let bet = Number(document.getElementById("bet").value);
  if(bet<=0) return alert("Bet দিন");
  if(data.balance < bet) return alert("Balance নাই");

  data.balance -= bet;

  let number = Math.floor(Math.random()*10)+1;
  let win = 0;

  if(type==="low" && number>=1 && number<=3) win = bet*2;
  if(type==="high" && number>=8 && number<=10) win = bet*2;
  if(type==="seven" && number===7) win = bet*5;

  if(win>0) data.balance += win;

  document.getElementById("result").innerHTML =
    "Number: <b>"+number+"</b><br>" +
    (win ? "✅ WIN ৳"+win : "❌ LOSE ৳"+bet);

  save();
}

const user = localStorage.getItem("currentUser");
if(!user) location.href="login.html";

let data = JSON.parse(localStorage.getItem("user_"+user)) || {balance:500};
const bal = document.getElementById("bal");
const dice = document.getElementById("dice");
const result = document.getElementById("result");

function update(){
  bal.innerText = data.balance;
  localStorage.setItem("user_"+user, JSON.stringify(data));
}
update();

function roll(){
  if(data.balance < 10){
    alert("❌ Balance কম");
    return;
  }

  data.balance -= 10;
  update();

  dice.className = "dice roll";
  result.innerText = "Rolling...";
  result.className = "";

  setTimeout(()=>{
    dice.className = "dice";
    let num = Math.floor(Math.random()*6)+1;
    dice.innerText = "🎲";

    if(num >= 4){
      data.balance += 20;
      result.innerText = "✅ WIN +৳20 (Dice: "+num+")";
      result.className = "win";
    }else{
      result.innerText = "❌ LOSE -৳10 (Dice: "+num+")";
      result.className = "lose";
    }

    update();
  },1500);
}

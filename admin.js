const depDiv = document.getElementById("deposits");
const withDiv = document.getElementById("withdraws");

let deposits = JSON.parse(localStorage.getItem("deposits")) || [];
let withdraws = JSON.parse(localStorage.getItem("withdraws")) || [];

function load(){
  depDiv.innerHTML="";
  withDiv.innerHTML="";

  deposits.forEach((d,i)=>{
    depDiv.innerHTML+=`
    <div class="card">
      User: ${d.user}<br>
      Amount: ৳${d.amount}
      <br>
      <button class="ok" onclick="approveDeposit(${i})">Approve</button>
      <button class="no" onclick="rejectDeposit(${i})">Reject</button>
    </div>`;
  });

  withdraws.forEach((w,i)=>{
    withDiv.innerHTML+=`
    <div class="card">
      User: ${w.user}<br>
      Amount: ৳${w.amount}
      <br>
      <button class="ok" onclick="approveWithdraw(${i})">Approve</button>
      <button class="no" onclick="rejectWithdraw(${i})">Reject</button>
    </div>`;
  });
}

function approveDeposit(i){
  let d = deposits[i];
  let user = JSON.parse(localStorage.getItem("user_"+d.user));
  user.balance += d.amount;
  localStorage.setItem("user_"+d.user, JSON.stringify(user));
  deposits.splice(i,1);
  localStorage.setItem("deposits",JSON.stringify(deposits));
  load();
}

function rejectDeposit(i){
  deposits.splice(i,1);
  localStorage.setItem("deposits",JSON.stringify(deposits));
  load();
}

function approveWithdraw(i){
  withdraws.splice(i,1);
  localStorage.setItem("withdraws",JSON.stringify(withdraws));
  load();
}

function rejectWithdraw(i){
  withdraws.splice(i,1);
  localStorage.setItem("withdraws",JSON.stringify(withdraws));
  load();
}

load();

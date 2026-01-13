let deposits = JSON.parse(localStorage.getItem("depositRequests")) || [];
let withdraws = JSON.parse(localStorage.getItem("withdrawRequests")) || [];
let users = JSON.parse(localStorage.getItem("users")) || {};

const depDiv = document.getElementById("deposits");
const witDiv = document.getElementById("withdraws");

function render(){
  depDiv.innerHTML = "";
  deposits.forEach((d,i)=>{
    depDiv.innerHTML += `
      <div class="item">
        👤 ${d.user}<br>💰 ৳${d.amount}<br>
        <button class="ok" onclick="approveDeposit(${i})">Approve</button>
        <button class="no" onclick="rejectDeposit(${i})">Reject</button>
      </div>
    `;
  });

  witDiv.innerHTML = "";
  withdraws.forEach((w,i)=>{
    witDiv.innerHTML += `
      <div class="item">
        👤 ${w.user}<br>💸 ৳${w.amount}<br>📱 ${w.number}<br>
        <button class="ok" onclick="approveWithdraw(${i})">Approve</button>
        <button class="no" onclick="rejectWithdraw(${i})">Reject</button>
      </div>
    `;
  });
}

function approveDeposit(i){
  let d = deposits[i];
  users[d.user] = (users[d.user] || 0) + Number(d.amount);
  deposits.splice(i,1);
  save();
}

function rejectDeposit(i){
  deposits.splice(i,1);
  save();
}

function approveWithdraw(i){
  let w = withdraws[i];
  users[w.user] -= Number(w.amount);
  withdraws.splice(i,1);
  save();
}

function rejectWithdraw(i){
  withdraws.splice(i,1);
  save();
}

function save(){
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("depositRequests", JSON.stringify(deposits));
  localStorage.setItem("withdrawRequests", JSON.stringify(withdraws));
  render();
}

render();

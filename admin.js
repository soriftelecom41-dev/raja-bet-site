if(localStorage.getItem("admin")!=="true"){
  location.href="admin-login.html";
}

function add(){
  let b = Number(localStorage.getItem("balance") || 1000);
  let n = Number(document.getElementById("bal").value);
  localStorage.setItem("balance", b + n);
  alert("Balance Updated");
}

function reset(){
  localStorage.setItem("balance",1000);
  alert("Balance Reset");
}

function logout(){
  localStorage.removeItem("admin");
  location.href="index.html";
}

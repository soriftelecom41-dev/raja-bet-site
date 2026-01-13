
// balance init
if (!localStorage.getItem("balance")) {
  localStorage.setItem("balance", 1000); // starting balance
}

// show balance
document.getElementById("balance").innerText =
  localStorage.getItem("balance");

function goGame(page) {
  window.location.href = page;
}

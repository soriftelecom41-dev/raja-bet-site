
function goGame(page) {
  window.location.href = page;
}

// Demo balance (later database হবে)
if (!localStorage.getItem("balance")) {
  localStorage.setItem("balance", 1310);
}
document.getElementById("balance").innerText =
  localStorage.getItem("balance");

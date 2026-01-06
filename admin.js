let users = JSON.parse(localStorage.getItem("users")) || {};
let requests = JSON.parse(localStorage.getItem("requests")) || [];

let box = document.getElementById("requests");

function loadRequests() {
  box.innerHTML = "";

  requests.forEach((r, i) => {
    box.innerHTML += `
      <div style="border:1px solid #ccc; margin:10px; padding:10px">
        <p>User: ${r.user}</p>
        <p>Type: ${r.type}</p>
        <p>Amount: ${r.amount}</p>
        <p>Status: ${r.status}</p>

        ${r.status === "pending" ? `
          <button onclick="approve(${i})">Approve</button>
          <button onclick="reject(${i})">Reject</button>
        ` : ""}
      </div>
    `;
  });
}

loadRequests();

function approve(i) {
  let r = requests[i];

  if (r.type === "deposit") {
    users[r.user].balance += r.amount;
  }

  if (r.type === "withdraw") {
    users[r.user].balance -= r.amount;
  }

  r.status = "approved";

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("requests", JSON.stringify(requests));

  alert("Approved");
  loadRequests();
}

function reject(i) {
  requests[i].status = "rejected";
  localStorage.setItem("requests", JSON.stringify(requests));
  loadRequests();
}

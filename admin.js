// ================== LOAD DATA ==================
let users = JSON.parse(localStorage.getItem("users")) || {};
let requests = JSON.parse(localStorage.getItem("requests")) || [];

let box = document.getElementById("requests");

// ================== LOAD REQUESTS ==================
function loadRequests() {
  box.innerHTML = "";

  if (requests.length === 0) {
    box.innerHTML = "<p>No requests found</p>";
    return;
  }

  requests.forEach((r, i) => {
    box.innerHTML += `
      <div style="border:1px solid #ccc; margin:10px; padding:10px">
        <p><b>User:</b> ${r.user}</p>
        <p><b>Type:</b> ${r.type}</p>
        <p><b>Amount:</b> ${r.amount}</p>
        <p><b>Status:</b> ${r.status}</p>

        ${
          r.status === "pending"
            ? `<button onclick="approve(${i})">Approve</button>
               <button onclick="reject(${i})">Reject</button>`
            : ""
        }
      </div>
    `;
  });
}

// ================== APPROVE ==================
function approve(i) {
  let r = requests[i];

  // create user if not exists
  if (!users[r.user]) {
    users[r.user] = { balance: 0 };
  }

  if (r.type === "deposit") {
    users[r.user].balance += Number(r.amount);
  }

  if (r.type === "withdraw") {
    users[r.user].balance -= Number(r.amount);
  }

  r.status = "approved";

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("requests", JSON.stringify(requests));

  alert("Approved successfully");
  loadRequests();
}

// ================== REJECT ==================
function reject(i) {
  requests[i].status = "rejected";
  localStorage.setItem("requests", JSON.stringify(requests));
  loadRequests();
}

// ================== INIT ==================
loadRequests();

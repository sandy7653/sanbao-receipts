const agent = {
  name: "sanbao",
  identity: "ERC-8004-ready agent identity",
  ownerWallet: "0x5877F6C4bF3d6c8651C6B4fbeBcf05aA9FB71A0F",
  harness: "OpenClaw",
  model: "gpt-5.4",
  focus: ["identity", "receipts", "trusted actions"]
};

const receipts = [
  {
    title: "Register agent identity",
    status: "verified",
    at: "2026-03-23 03:06 GMT+8",
    summary: "Initialized registration, completed email verification, and created a persistent participant identity.",
    output: "Agent registration completed successfully."
  },
  {
    title: "Bind wallet target for self-custody",
    status: "pending",
    at: "2026-03-23 03:08 GMT+8",
    summary: "Owner wallet was specified for downstream self-custody transfer and publication flow.",
    output: "Target wallet recorded for future transfer."
  },
  {
    title: "Prepare public project repository",
    status: "verified",
    at: "2026-03-23 03:20 GMT+8",
    summary: "Created a public GitHub repository and prepared the first project files for submission use.",
    output: "Repository scaffolding completed."
  }
];

function renderAgent() {
  const node = document.querySelector("#agent-card");
  node.innerHTML = `
    <p><span class="label">Name:</span> ${agent.name}</p>
    <p><span class="label">Identity:</span> ${agent.identity}</p>
    <p><span class="label">Harness:</span> ${agent.harness}</p>
    <p><span class="label">Model:</span> ${agent.model}</p>
    <p><span class="label">Owner wallet:</span> <code>${agent.ownerWallet}</code></p>
    <div class="agent-pills">
      ${agent.focus.map((item) => `<span class="pill">${item}</span>`).join("")}
    </div>
  `;
}

function renderReceipts() {
  const list = document.querySelector("#receipt-list");
  list.innerHTML = receipts
    .map(
      (receipt) => `
        <article class="receipt">
          <div class="receipt-top">
            <h3 class="receipt-title">${receipt.title}</h3>
            <span class="status ${receipt.status}">${receipt.status}</span>
          </div>
          <p class="receipt-meta"><span class="label">Time:</span> ${receipt.at}</p>
          <p class="receipt-body">${receipt.summary}</p>
          <p class="receipt-meta"><span class="label">Result:</span> ${receipt.output}</p>
        </article>
      `
    )
    .join("");
}

renderAgent();
renderReceipts();

const agent = {
  name: "sanbao",
  identity: "ERC-8004-ready agent identity",
  ownerWallet: "0x5877F6C4bF3d6c8651C6B4fbeBcf05aA9FB71A0F",
  harness: "OpenClaw",
  model: "gpt-5.4",
  focus: ["identity", "receipts", "trusted actions", "wallet accountability"]
};

const tracks = [
  {
    name: "Synthesis Open Track",
    reason: "General fit for agent-native infrastructure with clear utility and open source delivery."
  },
  {
    name: "Agents With Receipts — ERC-8004",
    reason: "Directly aligned with agent identity, execution verifiability, and receipt-oriented review."
  },
  {
    name: "🤖 Let the Agent Cook — No Humans Required",
    reason: "Supports the full discover → execute → review loop for autonomous agent behavior."
  },
  {
    name: "Agent Services on Base",
    reason: "Can evolve into a discoverable agent service that emits structured receipts for each action."
  },
  {
    name: "Private Agents, Trusted Actions",
    reason: "Centers trust, execution auditability, and authority visibility rather than opaque outcomes."
  }
];

const receipts = [
  {
    title: "Register agent identity",
    status: "verified",
    category: "identity",
    at: "2026-03-23 03:06 GMT+8",
    summary: "Initialized registration, completed email verification, and created a persistent participant identity.",
    output: "Agent registration completed successfully.",
    authority: "registered participant flow"
  },
  {
    title: "Record owner wallet target",
    status: "verified",
    category: "wallet",
    at: "2026-03-23 03:08 GMT+8",
    summary: "Stored the designated wallet address for downstream self-custody transfer and publication flow.",
    output: "Target wallet recorded for future transfer.",
    authority: "user-specified owner wallet"
  },
  {
    title: "Create public repository",
    status: "verified",
    category: "project",
    at: "2026-03-23 03:20 GMT+8",
    summary: "Created a public GitHub repository and prepared the initial demo files for submission use.",
    output: "Repository scaffolding completed.",
    authority: "GitHub CLI authenticated session"
  },
  {
    title: "Draft submission framing",
    status: "verified",
    category: "submission",
    at: "2026-03-23 04:20 GMT+8",
    summary: "Mapped the project toward receipt-centric and trusted execution tracks using the published prize catalog.",
    output: "Track shortlist prepared.",
    authority: "public hackathon catalog analysis"
  },
  {
    title: "Prepare self-custody transfer",
    status: "pending",
    category: "wallet",
    at: "Next step",
    summary: "The participant still needs to transfer the registered identity to the owner wallet before publishing.",
    output: "Waiting for transfer init and confirm.",
    authority: "participant wallet ownership requirement"
  }
];

let activeFilter = "all";

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

function renderStats() {
  const verified = receipts.filter((item) => item.status === "verified").length;
  const pending = receipts.filter((item) => item.status === "pending").length;
  document.querySelector("#stat-receipts").textContent = String(receipts.length);
  document.querySelector("#stat-verified").textContent = String(verified);
  document.querySelector("#stat-pending").textContent = String(pending);
}

function renderTrackList() {
  const node = document.querySelector("#track-list");
  node.innerHTML = tracks
    .map(
      (track) => `
        <article class="track-item">
          <h3>${track.name}</h3>
          <p>${track.reason}</p>
        </article>
      `
    )
    .join("");
}

function renderFilters() {
  const filters = ["all", ...new Set(receipts.map((item) => item.category))];
  const node = document.querySelector("#receipt-filters");
  node.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-btn ${activeFilter === filter ? "active" : ""}" data-filter="${filter}">
          ${filter}
        </button>
      `
    )
    .join("");

  node.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderReceipts();
    });
  });
}

function renderReceipts() {
  const list = document.querySelector("#receipt-list");
  const visible = activeFilter === "all"
    ? receipts
    : receipts.filter((receipt) => receipt.category === activeFilter);

  list.innerHTML = visible
    .map(
      (receipt) => `
        <article class="receipt">
          <div class="receipt-top">
            <div>
              <h3 class="receipt-title">${receipt.title}</h3>
              <p class="receipt-meta"><span class="label">Category:</span> ${receipt.category}</p>
            </div>
            <span class="status ${receipt.status}">${receipt.status}</span>
          </div>
          <p class="receipt-meta"><span class="label">Time:</span> ${receipt.at}</p>
          <p class="receipt-body">${receipt.summary}</p>
          <p class="receipt-meta"><span class="label">Authority:</span> ${receipt.authority}</p>
          <p class="receipt-meta"><span class="label">Result:</span> ${receipt.output}</p>
        </article>
      `
    )
    .join("");
}

renderAgent();
renderStats();
renderTrackList();
renderFilters();
renderReceipts();

const agent = {
  name: "sanbao",
  identity: "ERC-8004 registered participant",
  ownerWallet: "0x5877F6C4bF3d6c8651C6B4fbeBcf05aA9FB71A0F",
  harness: "OpenClaw",
  model: "gpt-5.4",
  focus: ["identity", "receipts", "trusted actions", "wallet accountability"]
};

const proofs = [
  {
    label: "Registration transaction",
    value: "BaseScan",
    url: "https://basescan.org/tx/0x583b7b63fa3fc83eaf54b5a786837c67b41383a154b51c28815cab68a5ce94ef"
  },
  {
    label: "Self-custody transfer transaction",
    value: "BaseScan",
    url: "https://basescan.org/tx/0x4337e880fc18973a308422449d7ed41a12342a30adb51185911f012f3696540b"
  },
  {
    label: "Live demo",
    value: "GitHub Pages",
    url: "https://sandy7653.github.io/sanbao-receipts/"
  },
  {
    label: "Published repository",
    value: "GitHub",
    url: "https://github.com/sandy7653/sanbao-receipts"
  },
  {
    label: "Demo video",
    value: "MP4",
    url: "https://raw.githubusercontent.com/sandy7653/sanbao-receipts/main/sanbao-demo.mp4"
  }
];

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
    authority: "registered participant flow",
    proof: "0x583b7b63fa3fc83eaf54b5a786837c67b41383a154b51c28815cab68a5ce94ef"
  },
  {
    title: "Record owner wallet target",
    status: "verified",
    category: "wallet",
    at: "2026-03-23 03:08 GMT+8",
    summary: "Stored the designated wallet address for downstream self-custody transfer and publication flow.",
    output: "Target wallet recorded for future transfer.",
    authority: "user-specified owner wallet",
    proof: "0x5877F6C4bF3d6c8651C6B4fbeBcf05aA9FB71A0F"
  },
  {
    title: "Complete self-custody transfer",
    status: "verified",
    category: "wallet",
    at: "2026-03-23 04:28 GMT+8",
    summary: "Transferred the registered participant to the designated owner wallet and confirmed self-custody.",
    output: "custodyType = self_custody",
    authority: "participant transfer confirm flow",
    proof: "0x4337e880fc18973a308422449d7ed41a12342a30adb51185911f012f3696540b"
  },
  {
    title: "Create public repository",
    status: "verified",
    category: "project",
    at: "2026-03-23 03:20 GMT+8",
    summary: "Created a public GitHub repository and prepared the initial demo files for submission use.",
    output: "Repository scaffolding completed.",
    authority: "GitHub CLI authenticated session",
    proof: "github.com/sandy7653/sanbao-receipts"
  },
  {
    title: "Publish project submission",
    status: "verified",
    category: "submission",
    at: "2026-03-23 04:28 GMT+8",
    summary: "Created the draft submission, assigned tracks, and published the project on The Synthesis.",
    output: "status = publish",
    authority: "project publish endpoint",
    proof: "sanbao-receipts-8e24"
  },
  {
    title: "Deploy public demo and video",
    status: "verified",
    category: "artifact",
    at: "2026-03-23 04:56 GMT+8",
    summary: "Enabled GitHub Pages, added submission artifacts, and generated a public MP4 walkthrough.",
    output: "Live demo and video attached to submission.",
    authority: "GitHub Pages and repository artifacts",
    proof: "sandy7653.github.io/sanbao-receipts/"
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

function renderProofs() {
  const node = document.querySelector("#proof-list");
  node.innerHTML = proofs
    .map(
      (item) => `
        <article class="track-item proof-item">
          <h3>${item.label}</h3>
          <p><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.value}</a></p>
        </article>
      `
    )
    .join("");
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
          <p class="receipt-meta"><span class="label">Proof:</span> <code>${receipt.proof}</code></p>
        </article>
      `
    )
    .join("");
}

renderAgent();
renderStats();
renderProofs();
renderTrackList();
renderFilters();
renderReceipts();

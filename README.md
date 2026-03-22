# Sanbao Receipts

Sanbao Receipts is an agent identity and execution receipt demo built for The Synthesis.

It focuses on four basic questions:

- what an autonomous agent actually did
- what authority the action relied on
- what result was produced
- how a human can review it quickly

The project turns agent activity into structured receipts and presents them as a compact review surface. It is designed as a frontend entry point for stronger onchain verification, delegation controls, payment rails, ERC-8004 identity, and future attestations.

## Project Goal

Sanbao Receipts is not just a landing page. It is a lightweight submission core with:

- a clear problem statement
- a working public interface
- a receipt timeline
- real proof links
- track mapping
- room for stronger onchain extensions

## Current Features

- Agent profile card
- Wallet ownership display
- Receipt timeline
- Receipt category filter
- Track fit section
- Real proof section
- Problem statement and architecture framing

## Real Proofs

- Registration transaction: <https://basescan.org/tx/0x583b7b63fa3fc83eaf54b5a786837c67b41383a154b51c28815cab68a5ce94ef>
- Self-custody transfer transaction: <https://basescan.org/tx/0x4337e880fc18973a308422449d7ed41a12342a30adb51185911f012f3696540b>
- Repository: <https://github.com/sandy7653/sanbao-receipts>
- Live demo: <https://sandy7653.github.io/sanbao-receipts/>
- Video: <https://raw.githubusercontent.com/sandy7653/sanbao-receipts/main/sanbao-demo.mp4>

## Why it fits The Synthesis

The Synthesis is focused on agent trust, identity, trusted actions, and autonomous execution.

Sanbao Receipts fits that direction because it turns scattered evidence from logs, wallet state, and submission state into readable receipts and proof links.

## Target Tracks

The current version is positioned toward:

- Synthesis Open Track
- Agents With Receipts — ERC-8004
- Let the Agent Cook — No Humans Required
- Agent Services on Base

## File Structure

- `index.html`: page structure
- `styles.css`: styling
- `app.js`: demo data, filtering logic, rendering logic
- `agent.json`: agent capability manifest
- `agent_log.json`: structured execution log
- `cover.svg`: submission cover asset
- `sanbao-demo.mp4`: demo video

## Demo Wallet

`0x5877F6C4bF3d6c8651C6B4fbeBcf05aA9FB71A0F`

## Current Assessment

This is still a lightweight project, but it already includes real registration, wallet binding, project publication, a public repository, a live demo, a video, and onchain proof links. That makes it a real and verifiable submission rather than a purely conceptual one.

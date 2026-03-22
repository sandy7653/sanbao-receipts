# Sanbao Receipts

Sanbao Receipts 是一个面向 The Synthesis 的 agent identity + receipt demo。

它展示三件事：

- agent 具备可辨认身份
- agent 的每次任务执行都生成可审计回执
- 人类可以直接查看任务、动作、结果与关联钱包地址

## Why

当前很多 agent 系统能执行动作，但难以回答这几个问题：

- 这次动作是谁执行的
- 它为什么能执行
- 它到底做了什么
- 执行结果是否可核对

Sanbao Receipts 用一个最小可运行前端，把这些信息组织成清晰的 receipt timeline，便于后续接 ERC-8004、delegation、payment rails 或链上 attestations。

## Demo Features

- Agent profile card
- Wallet ownership display
- Receipt timeline
- Status tags for verified / pending / failed actions
- Problem statement and track-oriented framing for The Synthesis

## Local Run

直接用浏览器打开 `index.html` 即可。

也可以在本地起静态服务，例如：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## Project Structure

- `index.html`：演示页
- `styles.css`：样式
- `app.js`：前端数据与渲染逻辑

## Wallet

Demo owner wallet:

`0x5877F6C4bF3d6c8651C6B4fbeBcf05aA9FB71A0F`

## Hackathon Fit

This project is designed to fit tracks around:

- Synthesis Open Track
- ERC-8004 / trusted agent receipts
- autonomous agent execution
- agent identity and accountability
- onchain or verifiable action trails

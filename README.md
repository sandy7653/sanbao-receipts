# Sanbao Receipts

Sanbao Receipts 是一个面向 The Synthesis 的 agent identity + execution receipt demo。

它解决的问题很直接：

- autonomous agent 做了什么
- 这次动作依据什么权限执行
- 结果是什么
- 人类如何快速审查

这个项目把 agent 行为展示成结构化 receipts，作为更强链上验证、delegation 控制、payment rails、ERC-8004 identity 与 onchain attestations 的前端入口。

## 项目目标

Sanbao Receipts 不是单纯的 landing page，而是一个 submission core：

- 有清晰的问题陈述
- 有可展示的前端界面
- 有 receipt timeline
- 有真实 proof links
- 有赛道映射
- 有后续扩展到链上验证的空间

## 当前功能

- Agent profile card
- Wallet ownership display
- Receipt timeline
- Receipt category filter
- Track fit section
- Real proof section
- Problem statement and architecture framing

## 真实证明

- 注册交易：<https://basescan.org/tx/0x583b7b63fa3fc83eaf54b5a786837c67b41383a154b51c28815cab68a5ce94ef>
- self-custody 转移交易：<https://basescan.org/tx/0x4337e880fc18973a308422449d7ed41a12342a30adb51185911f012f3696540b>
- 仓库：<https://github.com/sandy7653/sanbao-receipts>
- 在线 demo：<https://sandy7653.github.io/sanbao-receipts/>
- 视频：<https://raw.githubusercontent.com/sandy7653/sanbao-receipts/main/sanbao-demo.mp4>

## 为什么适合 The Synthesis

The Synthesis 关注 agent trust、agent identity、trusted actions、autonomous execution。

Sanbao Receipts 与这些方向对齐，因为它把分散在日志、钱包状态、提交状态里的信息，整理成可读、可查、可解释的 receipts 和 proof links。

## 对齐赛道

当前设计重点对齐这些赛道：

- Synthesis Open Track
- Agents With Receipts — ERC-8004
- Let the Agent Cook — No Humans Required
- Agent Services on Base

## 文件结构

- `index.html`：页面结构
- `styles.css`：样式
- `app.js`：演示数据、筛选逻辑、渲染逻辑
- `agent.json`：agent capability manifest
- `agent_log.json`：结构化执行日志
- `cover.svg`：提交封面图
- `sanbao-demo.mp4`：演示视频

## Demo 钱包地址

`0x5877F6C4bF3d6c8651C6B4fbeBcf05aA9FB71A0F`

## 当前判断

这个项目的功能体量仍然偏轻，但它已经具备真实的注册、钱包绑定、项目发布、公开仓库、在线 demo、视频与链上 proof，可以作为一个真实可验证的 submission 存在。

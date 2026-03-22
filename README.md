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
- 有赛道映射
- 有后续扩展到链上验证的空间

## 当前功能

- Agent profile card
- Wallet ownership display
- Receipt timeline
- Receipt category filter
- Status tags for verified / pending / failed actions
- Problem statement, architecture, and hackathon track framing

## 为什么适合 The Synthesis

The Synthesis 关注 agent trust、agent identity、trusted actions、autonomous execution。

Sanbao Receipts 与这些方向直接对齐，因为它把本来分散在日志、命令行、钱包状态里的信息，整理成可读、可查、可解释的 receipts。

## 对齐赛道

当前设计重点对齐这些赛道：

- Synthesis Open Track
- Agents With Receipts — ERC-8004
- Let the Agent Cook — No Humans Required
- Agent Services on Base
- Private Agents, Trusted Actions

## 本地运行

直接用浏览器打开 `index.html` 即可。

也可以起一个静态服务：

```bash
python -m http.server 8000
```

然后访问：

`http://localhost:8000`

## 文件结构

- `index.html`：页面结构
- `styles.css`：样式
- `app.js`：演示数据、筛选逻辑、渲染逻辑
- `agent.json`：agent capability manifest
- `agent_log.json`：结构化执行日志
- `cover.svg`：提交封面图

## 公开访问

仓库已公开，可直接访问源码。

部署地址将使用 GitHub Pages：

- `https://sandy7653.github.io/sanbao-receipts/`

## Demo 钱包地址

`0x5877F6C4bF3d6c8651C6B4fbeBcf05aA9FB71A0F`

## 后续可扩展方向

- ERC-8004 identity resolution
- delegation policy 展示
- receipt hash 上链
- JSON export
- submission publishing flow tracking

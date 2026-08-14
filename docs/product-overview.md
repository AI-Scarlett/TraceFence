# TraceFence Product Overview

TraceFence is a local-first control center for AI coding agents running on a Mac. Its iPhone companion, TraceFence Sentinel, provides a mobile surface for supported approvals, session controls, alerts, and agent status.

## Primary workflow

1. TraceFence discovers supported local agents and negotiates each adapter's capabilities.
2. The user pairs TraceFence Sentinel with the Mac app.
3. The iPhone connects over LAN, Tailscale, VPN, or another user-operated tunnel.
4. Supported requests and session actions can be reviewed from the phone.
5. Audit and TokenScope data remain on the Mac by default.

TraceFence does not operate a cloud relay for agent traffic. The user owns and configures the network path between iPhone and Mac.

## Core capabilities

### Remote approvals

Supported integrations can surface a pending action with its command, working directory, and reason. The user can approve, deny, or provide replacement guidance when the adapter exposes that workflow.

### Session lifecycle control

Depending on the agent adapter, TraceFence Sentinel can launch, relaunch, interrupt, resume, or terminate a session. Read-only integrations remain visible without presenting non-functional controls.

### Multi-agent command center

TraceFence brings session state, local activity, project context, and token usage together across Codex, Claude Code, Cursor Agent, Gemini CLI, Grok CLI, Qwen Code, OpenCode, MiniMax Code, OpenClaw, and additional adapters.

### Local audit and usage analytics

Agent Guard records supported local operations for review, while TokenScope summarizes usage and context information on the Mac.

### Independent Plugin Center

TraceFence acts as the host system and marketplace. Package plugins act as independent apps with their own versions and release cycles. The host provides catalog trust, entitlement checks, package installation, runtime isolation, unified presentation, data directories, updates, rollback, and removal. A plugin can update without requiring a TraceFence update as long as its declared PluginKit ABI and minimum host version remain compatible.

The first catalog contains 45 signed plugins. Packages are distributed from the official TraceFence repository and do not rely on the upstream source repository remaining available. Browse them at [tracefence.com/plugins.html](https://tracefence.com/plugins.html).

## Product principles

1. Keep agent data local by default.
2. Never display a control that the selected adapter cannot execute.
3. Make approvals understandable before a user acts.
4. Let users choose their own remote-access network.
5. Ship direct-download fixes quickly through GitHub Releases.

## Availability

- macOS local build: [GitHub Releases](https://github.com/AI-Scarlett/TraceFence/releases/latest)
- Plugin catalog: [TraceFence Plugin Center](https://tracefence.com/plugins.html)
- iOS companion: [TraceFence Sentinel on TestFlight](https://testflight.apple.com/join/yZTXmaJ8)
- Website: [tracefence.com](https://tracefence.com/)
- Standard: US$9.99 monthly or US$79.99 annually

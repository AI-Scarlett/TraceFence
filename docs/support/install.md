# Installation Guide

## Requirements

- Apple Silicon Mac
- macOS 13 or later
- iPhone for TraceFence Sentinel remote control
- LAN, Tailscale, VPN, or another user-operated tunnel for remote access

## Install the Mac app

### GitHub Releases (recommended)

1. Open the [latest TraceFence release](https://github.com/AI-Scarlett/TraceFence/releases/latest).
2. Download `TraceFence-<version>-arm64.dmg`.
3. Open the DMG and drag `TraceFence.app` to Applications.
4. Launch TraceFence and complete the requested first-run permissions.

The app is signed with a Developer ID and notarized by Apple. A SHA-256 file is published beside the DMG.

## Install and manage plugins

1. Install TraceFence 1.2.1 or later.
2. Open **Settings → Plugin Center**.
3. Use **Discover** to search or filter the signed catalog.
4. Open a plugin to review its version, minimum macOS and TraceFence versions, PluginKit compatibility, permissions, and download size.
5. Purchase or redeem access when required, then choose **Install**.
6. Open installed plugins from **Library**. Available independent updates appear in **Updates**.

Plugins can be enabled, disabled, updated, rolled back to the retained previous version, or uninstalled without changing the TraceFence host version. Uninstalling a plugin preserves its data by default unless the user explicitly removes that data.

### Homebrew

```bash
brew tap AI-Scarlett/tap
# Homebrew 6 and later:
brew trust --cask AI-Scarlett/tap/tracefence
brew install --cask tracefence
```

Homebrew versions before 6 can skip the `brew trust` line.

To update later:

```bash
brew update
brew upgrade --cask tracefence
```

## Install the iPhone companion

1. Join [TraceFence Sentinel on TestFlight](https://testflight.apple.com/join/yZTXmaJ8).
2. Install Sentinel on the iPhone.
3. Enable the local control API in TraceFence on the Mac.
4. Import the pairing information into Sentinel.
5. Connect through LAN, Tailscale, VPN, or your own tunnel.

TraceFence does not provide a hosted relay. Confirm that the iPhone can reach the paired Mac through the network path you selected.

## Troubleshooting

- Confirm that both apps are current.
- Confirm that the agent is installed and runnable on the Mac.
- Check whether TraceFence reports the adapter as controllable or read-only.
- For remote access, verify the Mac address and port from the iPhone network.
- Include the TraceFence version, macOS version, agent name, and connection type in a [support issue](https://github.com/AI-Scarlett/TraceFence/issues).

# Release and Distribution

GitHub Releases is the recommended distribution channel for the TraceFence macOS local build. It receives product updates and bug fixes before the Mac App Store build.

## Public release assets

Each current macOS release should include:

- `TraceFence-<version>-arm64.dmg`
- `TraceFence-<version>-arm64.dmg.sha256`
- `tracefence-update.json`
- release notes describing user-visible changes

The DMG must be Developer ID signed, notarized, and stapled before upload.

## Homebrew tap

The public tap installs the same notarized DMG published on GitHub Releases:

```bash
brew tap AI-Scarlett/tap
brew trust --cask AI-Scarlett/tap/tracefence
brew install --cask tracefence
```

The cask version and SHA-256 must match the current release asset.

## iOS distribution

TraceFence Sentinel is distributed through [TestFlight](https://testflight.apple.com/join/yZTXmaJ8). The iOS app pairs directly with the Mac app and does not use a TraceFence-hosted agent relay.

## Verification checklist

Before publishing a release:

1. Install the DMG on a clean macOS account or test volume.
2. Verify the Developer ID signature, notarization ticket, and Gatekeeper assessment.
3. Verify the published SHA-256 against the local DMG.
4. Confirm the release notes and update manifest identify the same version.
5. Test a Mac-to-iPhone pairing and at least one supported agent action.
6. Update the Homebrew cask after the GitHub asset is available.

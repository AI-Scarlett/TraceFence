# Release and Distribution

TraceFence uses GitHub Releases as the public distribution channel for installers and documentation bundles.

## Branches

- `dev` is the working branch for implementation.
- `main` should reflect the latest verified public release materials.
- release assets should be published only after the package is verified locally.

## Release assets

Publish the following to GitHub Releases when a build is ready:

- macOS `.dmg` or `.zip`
- Windows `.exe` or `.msi`
- release notes
- checksum file if available

## Suggested versioning

- use semantic versioning for public builds
- keep the direct-download line independent from App Store versioning if both exist
- record platform-specific notes when macOS and Windows packaging differ

## Website linking

The public website can point users to:

- this repository for documentation and legal pages
- the Releases tab for installers
- the latest release note for changelog details

## Build verification

Before publishing a release, verify:

1. the installer launches and installs correctly
2. the app name, icon, and bundle identifiers match the TraceFence brand
3. the release notes describe the exact build
4. legal pages are present in the repo and still match the product name

## Direct-download posture

The direct-download build should be treated as a product surface of its own. Its release process should not depend on App Store packaging, App Store metadata, or App Store review timing.


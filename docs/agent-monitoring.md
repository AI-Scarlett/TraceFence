# Agent Monitoring

TraceFence keeps its monitoring model local-first. The aim is to help users understand what AI agents and related local tools are doing without turning the product into a cloud logging service.

## What is monitored

Depending on the enabled features, TraceFence may display:

- process names and identifiers
- command events and approval outcomes
- file activity summaries
- session counts and activity totals
- token, context, and project summaries
- scan timestamps and last-known cache state

## What stays on device

TraceFence is designed so the primary monitoring data stays on the user's machine.

- no analytics SDKs are required for core monitoring
- no background cloud account is needed for the default experience
- no agent data should be uploaded just to render the dashboard

## Storage policy

Monitoring results are stored locally so the UI can open quickly and show previously scanned data without forcing a rescan every time.

## Approval workflow

For direct-download builds, TraceFence can expose command confirmation or process review flows where appropriate. These are intended to make actions visible and auditable, not to hide risky behavior behind a glossy interface.

## Design guidance for monitoring pages

- show the most important totals first
- avoid repeating the same metric in multiple boxes
- keep charts readable at a glance
- use icons consistently across all tabs
- make scanning states obvious with motion or progress cues


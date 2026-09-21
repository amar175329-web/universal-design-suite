# Dependency Report: Universal Design Suite

**Audit Date**: 2026-09-21
**Architecture**: Zero-Runtime-Dependency Design Core + Managed CLI Launchers

## Core Suite Dependencies
The core package (`universal-design-suite`) is architected with **zero external NPM runtime dependencies**. It executes natively on Node.js (>= 18.0.0) and Bun (>= 1.0.0) utilizing built-in ES modules (`node:fs`, `node:path`, `node:child_process`, `node:url`).

## Managed External Toolchains (Installed On-Demand)
The installer (`install.mjs`) manages and verifies the following external toolchains without polluting the local core package:

| Toolchain | Version / Requirement | Managed By | Purpose |
|---|---|---|---|
| `ui-ux-pro-max-cli` | `^1.0.0` | Global Node / npx | Design token and aesthetic generation |
| `impeccable-cli` | `latest` | Global Node / npx | Code and design critiques |
| `skillui` | `latest` | Global Node / npx | UI builder runtime |
| `@playwright/test` | `^1.40.0` | Global Node / npx | Visual regression testing |
| `shadcn` | `latest` | npx runner wrapper | React component scaffolding |
| `@magicui/cli` | `latest` | npx runner wrapper | Motion component installer |
| `create-assistant-ui` | `latest` | npx runner wrapper | AI chat component generation |
| `tailwindcss` | `^3.4.0` / `^4.0.0` | npx runner wrapper | CSS utility generation |

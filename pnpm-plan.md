# pnpm Migration Plan (Option 1)

## Target State

- Canonical toolchain: Node 22 LTS + pnpm (pinned).
- Lockfile policy: `pnpm-lock.yaml` only.
- npm remains documented as emergency/local fallback, but not CI source of truth.
- Astro/Tailwind/TypeScript behavior remains unchanged (tooling migration only).

## Scope

- In scope: scripts, hooks, CI, version pinning, docs, reproducibility/security parity.
- Out of scope: feature code changes, Astro rendering model changes, design/content changes.

## Files Expected to Change

- `package.json`
- `lefthook.yml`
- `.github/workflows/ci.yml`
- `.mise.toml` (or equivalent version pin file)
- `README.md`
- `AGENTS.md`
- Optional cleanup: `bunfig.toml` and Bun lockfile handling policy

## Phase 0: Migration RFC (same day)

- Record decisions:
  - Canonical package manager = pnpm
  - Node baseline = 22 LTS
  - Single lockfile = `pnpm-lock.yaml`
  - npm fallback = docs only
- Define success criteria:
  - Clean install/build/lint/format/check passes locally + CI
  - No Bun commands in active workflow
  - No output regressions in generated site/CSS

## Phase 1: Preflight Audit

- Inventory Bun usage in:
  - scripts in `package.json`
  - hooks in `lefthook.yml`
  - CI in `.github/workflows/ci.yml`
  - docs in `README.md` and `AGENTS.md`
  - tool pinning in `.mise.toml`
- Confirm no Bun runtime API usage in app source (`Bun.*`, `bun:test`, `bun:` imports).
- Confirm lockfile/caching mismatch risks (especially CI keys tied to Bun lock naming).

## Phase 2: Toolchain Cutover

### `package.json`

- Add/update:
  - `engines.node` (Node 22 floor policy)
  - `packageManager` to pinned pnpm version
- Replace Bun-specific commands, especially `update-dependencies`.

### Hooks (`lefthook.yml`)

- Replace `bun run ...` with `pnpm run ...`.

### Version pinning

- Pin Node + pnpm in version manager config.

### Lockfiles

- Generate and commit `pnpm-lock.yaml`.
- Remove Bun lockfile from canonical workflow.
- Do not keep dual lockfiles long-term.

## Phase 3: CI/CD Migration

- Replace Bun setup with Node setup.
- Enable pnpm via Corepack (or pnpm action).
- Install with deterministic mode: `pnpm install --frozen-lockfile`.
- Run repo checks with pnpm scripts:
  - lint check
  - format check
  - Astro check/build
- Update cache to pnpm store (not Bun cache).
- Keep deploy artifact behavior unchanged (`dist/`).

## Phase 4: Docs and Contributor Experience

- Update command examples in:
  - `README.md`
  - `AGENTS.md`
- Add a migration notes section:
  - clean local Bun artifacts
  - install via pnpm
  - npm fallback commands
- Keep command style package-manager neutral where possible (`run` scripts first).

## Phase 5: Validation Matrix

- Clean-room local validation:
  - install from scratch
  - `dev`, `build`, `preview`
  - `lint:check`, `format:check`
  - `astro check`
- Behavior parity checks:
  - generated page output sanity
  - Tailwind CSS output parity on representative routes
  - content collections still validate/build
- CI validation:
  - multiple green runs on PR + main
  - reproducible install/build across reruns

## Phase 6: Rollout and Rollback

### Rollout

- Merge in 1-2 focused PRs (toolchain/CI first, docs second or same PR if small).
- Tag release after first green main pipeline.

### Rollback

- Revert migration PR(s) if a P1 blocking issue appears.
- Timebox triage window before rollback trigger (for example, 4 hours).

## Risk Register and Mitigations

- Dependency resolution differences (pnpm stricter):
  - Mitigation: add missing direct dependencies explicitly.
- CI reproducibility drift:
  - Mitigation: frozen lockfile + pinned tool versions.
- Hook breakage:
  - Mitigation: migrate hooks in same PR as scripts.
- Performance drop from leaving Bun:
  - Mitigation: pnpm store caching + script normalization.
- Security-policy gap from Bun config:
  - Mitigation: add Node-native audit/SCA step in CI.

## What the Project Loses by Leaving Bun

- Potentially faster cold installs/startup.
- `bunx` and single-binary convenience.
- Bun-specific install policy knobs (`bunfig` security options).

## What the Project Gains/Preserves

- Broader ecosystem standardization for contributors and CI.
- Strong dependency correctness with pnpm.
- Same Astro 5 + Vite + Tailwind v4 functionality and output model.

## Deno Positioning

- Not recommended as primary runtime/package manager for this Astro repo.
- Acceptable for isolated utility scripts only.
- Keep main build/test/release path on Node + pnpm to avoid multi-runtime complexity.

## Final Recommendation

- Proceed with Node 22 LTS + pnpm as canonical setup.
- Keep npm fallback documented, but keep `pnpm-lock.yaml` as the single source of dependency truth.

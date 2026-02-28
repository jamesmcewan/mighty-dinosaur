Determine the appropriate semantic version bump based on the commits not yet pushed to GitHub, then run `bun pm version` with the correct option.

## Commits not yet pushed

!`git log origin/main..HEAD --oneline 2>/dev/null || git log --oneline -10`

## Instructions

Review the commits above and apply standard semantic versioning rules:

- **major** — breaking changes, incompatible API or behavior changes
- **minor** — new features, backward-compatible additions
- **patch** — bug fixes, documentation, chores, refactoring, small improvements

State which bump you are applying and briefly explain why, then run exactly one of:

- `bun pm version patch`
- `bun pm version minor`
- `bun pm version major`

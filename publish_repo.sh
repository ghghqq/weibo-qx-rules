#!/bin/zsh
set -euo pipefail

REPO="ghghqq/weibo-qx-rules"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is not installed."
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI is not logged in. Running login..."
  gh auth login --hostname github.com --git-protocol https --web --skip-ssh-key
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Current directory is not a git repository."
  exit 1
fi

if [ -z "$(git status --short)" ]; then
  echo "Working tree is clean."
else
  echo "Working tree has changes. Commit them first if needed."
fi

if gh repo view "$REPO" >/dev/null 2>&1; then
  echo "Repository already exists: $REPO"
  if ! git remote get-url origin >/dev/null 2>&1; then
    git remote add origin "https://github.com/$REPO.git"
  fi
  git push -u origin main
else
  gh repo create "$REPO" --public --source=. --remote=origin --push
fi

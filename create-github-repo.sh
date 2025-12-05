#!/bin/bash

# Script to create GitHub repository and push code
# Usage: ./create-github-repo.sh <repository-name>

REPO_NAME=${1:-"pipeful-ai"}
GITHUB_USER="govproai"

echo "Creating GitHub repository: $REPO_NAME"
echo ""

# Check if GitHub CLI is installed
if command -v gh &> /dev/null; then
    echo "Using GitHub CLI..."
    gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
else
    echo "GitHub CLI not found. Please create the repository manually:"
    echo ""
    echo "1. Go to https://github.com/new"
    echo "2. Repository name: $REPO_NAME"
    echo "3. Set it to Public (or Private)"
    echo "4. DO NOT initialize with README, .gitignore, or license"
    echo "5. Click 'Create repository'"
    echo ""
    echo "Then run these commands:"
    echo "  git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git"
    echo "  git branch -M main"
    echo "  git push -u origin main"
fi


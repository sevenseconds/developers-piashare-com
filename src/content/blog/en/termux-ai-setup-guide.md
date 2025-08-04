---
title: "Complete Guide: Setting up Termux with AI Tools"
subtitle: "Learn how to install Termux from F-Droid and set up Google Gemini CLI and Claude Code for AI development on Android"
date: 2025-08-03
readTime: "12 min read"
tags: ["Termux", "Android", "AI", "CLI", "Setup Guide"]
image: "https://via.placeholder.com/800x400"
description: "Step-by-step guide to install Termux from F-Droid and configure Google Gemini CLI and Claude Code for AI development on Android devices"
lang: "en"
---

# Complete Guide: Setting up Termux with AI Tools

If you're a developer who wants to harness the power of AI tools directly on your Android device, this guide is for you. We'll walk through installing Termux, Google Gemini CLI, and Claude Code - turning your Android phone into a powerful AI development environment.

## Table of Contents

1. [Why Install Termux from F-Droid?](#why-install-termux-from-f-droid)
2. [Step 1: Installing Termux from F-Droid](#step-1-installing-termux-from-f-droid)
   - [Download F-Droid](#download-f-droid)
   - [Install Termux](#install-termux)
3. [Step 2: Setting up Google Gemini CLI](#step-2-setting-up-google-gemini-cli)
   - [Install Node.js and Gemini CLI](#install-nodejs-and-gemini-cli)
   - [Gemini Authentication Process](#gemini-authentication-process)
   - [Complete the Setup](#complete-the-setup)
4. [Step 3: Installing Claude Code](#step-3-installing-claude-code)
   - [Install Claude Code](#install-claude-code)
   - [Authentication Options](#authentication-options)
   - [Getting Started](#getting-started)
   - [Basic Usage](#basic-usage)
5. [Essential Termux Configuration](#essential-termux-configuration)
   - [Storage Setup](#storage-setup)
   - [Shell Environment Setup](#shell-environment-setup)
6. [Usage Tips & Workflows](#usage-tips--workflows)
   - [Quick AI Consultation](#quick-ai-consultation)
   - [Development Workflow](#development-workflow)
7. [Troubleshooting Common Issues](#troubleshooting-common-issues)
   - [Termux Permissions](#termux-permissions)
   - [Gemini Authentication Fails](#gemini-authentication-fails)
   - [Claude Code Connection Issues](#claude-code-connection-issues)
8. [What's Next?](#whats-next)

## Why Install Termux from F-Droid?

> **📋 Important Note: Why F-Droid is Required**
> 
> **The Android Security Evolution Challenge**: Google has progressively tightened security policies since Android 10, which benefits general users but creates significant constraints for developer tools like Termux.
>
> **Play Store Limitations (Android 10+ restrictions):**
> - **Target API requirements** - Apps must target recent Android versions
> - **Scoped storage restrictions** - Limited file system access  
> - **Background execution limits** - Restricted long-running processes
> - **Network security policies** - Stricter HTTPS enforcement
>
> **Critical Issue**: The Termux version on Google Play Store is **permanently outdated** and cannot be updated due to these policy constraints. It's essentially a dead-end version that won't function properly on modern Android devices.
>
> **Why F-Droid is the Solution:**
> - **Independent app store** that doesn't enforce Google's restrictive policies
> - **Broader system access** allowed for developer tools
> - **Up-to-date Termux versions** maintained consistently  
> - **Full feature set** that developers actually need
>
> **Bottom line**: F-Droid is the only viable source for a functional, modern Termux installation on current Android devices.

## Step 1: Installing Termux from F-Droid

### Download F-Droid

1. **Open your browser** and go to [f-droid.org](https://f-droid.org)
2. **Download the F-Droid APK** (around 10MB)
3. **Enable "Install from Unknown Sources"** in your Android settings
4. **Install F-Droid** - your gateway to developer tools

### Install Termux

1. **Open F-Droid** and search for "Termux"
2. **Install the main Termux app** (not the Play Store version!)
3. **Optionally install Termux:API** - this gives you Android integration features
4. **Grant necessary permissions** when prompted

**Pro tip:** The main Termux app is all you need for this setup. Termux:API is optional and provides additional Android integration features if you want them later.

## Step 2: Setting up Google Gemini CLI

Google's Gemini AI is incredibly powerful, but the authentication process on mobile requires a bit of finesse. Here's how to get it working smoothly.

### Install Node.js and Gemini CLI

```bash
# Update packages
pkg update && pkg upgrade

# Install Node.js
pkg install nodejs npm

# Install Google Gemini CLI globally
npm install -g @google/gemini-cli
```

### Gemini Authentication Process

Here's where it gets interesting. **Gemini CLI authentication is actually quite straightforward** once you know the right commands:

#### Simple Authentication Method

```bash
# Start Gemini in debug mode
gemini --debug

# At the input prompt, type:
/auth

# Gemini will show you 3 authentication options:
# 1. Login with Google Account
# 2. Use Gemini API Key  
# 3. Vertex AI
```

**Option 1: Login with Google Account**
- Choose option 1 for Google Account sign-in
- Gemini will display a long authentication URL
- **Copy this URL and open it in your Android browser**
- Complete the OAuth flow and return to the terminal
- Perfect for personal use and getting started quickly

**Option 2: Use Gemini API Key**
- Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Set it as an environment variable:
```bash
export GEMINI_API_KEY=your_key_here
```
- Add it to your `.bashrc` for persistence:
```bash
echo 'export GEMINI_API_KEY=your_key_here' >> ~/.bashrc
```
- Good for automation and scripting

**Option 3: Vertex AI**
- For Google Cloud Platform users with Vertex AI access
- Requires GCP project setup and authentication
- Best for enterprise and production environments

### Complete the Setup

```bash
# After authentication, test your setup
# You can start chatting right away in the same session
# Or exit and start a new session:
gemini

# You should see a chat interface ready to go!
```

## Step 3: Installing Claude Code

Claude Code is refreshingly straightforward compared to Gemini's authentication dance.

### Install Claude Code

```bash
# Install using npm (Node.js 18+ required)
npm install -g @anthropic-ai/claude-code

# Verify installation and check system compatibility
claude doctor
```

### Authentication Options

Claude Code offers **multiple authentication methods**:

1. **Anthropic Console** (Recommended)
   - OAuth connection with active billing account
   - Most seamless for API usage

2. **Claude App Subscription**
   - Use your Claude Pro or Max plan
   - Perfect if you already have a subscription

3. **Enterprise Platforms**
   - Amazon Bedrock or Google Vertex AI
   - For enterprise users

### Getting Started

```bash
# Start Claude Code (will prompt for authentication on first run)
claude

# The tool will guide you through the authentication process
# Credentials are securely stored on your system
```

### Basic Usage

```bash
# Interactive mode
claude

# One-time task
claude "explain this code"

# Continue recent conversation
claude -c

# Git operations
claude commit
```

## Essential Termux Configuration

Now that you have your AI tools ready, let's make your Termux environment more comfortable:

### Storage Setup

```bash
# Allow Termux to access your phone's storage
termux-setup-storage

# This creates ~/storage with links to your Android folders
```

### Shell Environment Setup

```bash
# Install essential development tools
pkg install git vim curl wget openssh
```

## Usage Tips & Workflows

### Quick AI Consultation

```bash
# Quick Gemini question - start interactive session
gemini
# Then type your question in the chat

# Claude Code for development questions
claude "Review this React component for best practices"
```

### Development Workflow

```bash
# Clone a project
git clone https://github.com/yourproject/repo.git
cd repo

# Use Claude Code for code review
claude "review the code in src/ directory"

# Ask Gemini for optimization suggestions
gemini
# Then ask: "How can I improve the performance of this Node.js app?"
```

## Troubleshooting Common Issues

### Termux Permissions
If you're having permission issues:
```bash
# Reset Termux storage permissions
termux-setup-storage
```

### Gemini Authentication Fails
```bash
# Clear cached credentials and try again
rm -rf ~/.config/gemini
gemini --debug
# Then type: /auth
```

### Claude Code Connection Issues
```bash
# Check your internet connection and restart Claude Code
claude
```

## What's Next?

You now have a powerful AI development environment right in your pocket! Here are some ideas to explore:

- **Mobile-first development** - Build and test apps directly on your device
- **AI-assisted coding** - Use Claude Code for code reviews and suggestions  
- **Research and learning** - Leverage Gemini for quick explanations and tutorials
- **Automation scripts** - Create Termux scripts that use AI for data processing

The combination of Termux + AI tools opens up possibilities that desktop setups often can't match - like testing mobile-specific features or developing on-the-go.

**Happy coding!** 🚀
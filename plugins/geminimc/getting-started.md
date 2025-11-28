---
title: Getting Started
description: Installation and setup guide for GeminiMC
---

# Getting Started with GeminiMC

This guide will walk you through installing GeminiMC, obtaining a Google Gemini API key, and using AI-powered features on your Minecraft server.

## Prerequisites

Before installing GeminiMC, ensure you have:

- A Paper, Purpur, or Spigot server running Minecraft 1.20+
- Java 17 or higher installed
- Active internet connection
- Server operator permissions or file access
- Google account (for API key)

## Step 1: Get Google Gemini API Key

### Create API Key

1. **Visit Google AI Studio**
   - Go to [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account

2. **Create New Key**
   - Click "Create API Key"
   - Select "Create API key in new project" (or choose existing project)
   - Wait for key generation

3. **Copy Your Key**
   - Copy the generated API key
   - Store it securely (you'll need it for configuration)
   - **Important:** Never share this key publicly!

**Example API Key Format:**
```
AIzaSyDK7gH3vQAeJuQMjL8N0pQrStUvWxYz123
```

### Understanding API Limits

**Free Tier:**
- 60 requests per minute
- 1,500 requests per day
- No credit card required

**Rate Limits:**
- Sufficient for small to medium servers
- Monitor usage in Google Cloud Console
- Upgrade if needed for large servers

## Step 2: Install GeminiMC

### Download and Install

1. **Download Plugin**
   - Download latest GeminiMC.jar
   - Verify file integrity

2. **Install on Server**
   ```bash
   # Stop server (recommended)
   /stop

   # Place JAR in plugins folder
   cp GeminiMC.jar plugins/

   # Start server
   # Configuration files will be generated
   ```

3. **Verify Installation**
   ```bash
   /plugins
   ```

   GeminiMC should appear in green.

### Generated Files

```
plugins/
├── GeminiMC/
│   ├── config.yml          # Main configuration
│   ├── messages.yml        # Customizable messages
│   ├── commands.yml        # Command whitelist/blacklist
│   ├── tasks/              # Saved tasks
│   └── data/               # Conversation history
```

## Step 3: Configure API Key

### Edit Configuration

1. **Open Config File**
   ```bash
   nano plugins/GeminiMC/config.yml
   ```

2. **Add API Key**
   ```yaml
   # API Settings
   api:
     # Your Google Gemini API key
     key: "YOUR_API_KEY_HERE"

     # API model to use
     model: "gemini-pro"

     # Request timeout (seconds)
     timeout: 30
   ```

3. **Replace Placeholder**
   ```yaml
   api:
     key: "AIzaSyDK7gH3vQAeJuQMjL8N0pQrStUvWxYz123"  # Your actual key
   ```

4. **Save and Reload**
   ```bash
   /gemini reload
   ```

### Verify API Connection

Test the connection:

```bash
/gemini test connection
```

**Success Output:**
```
✓ Successfully connected to Gemini API
✓ Model: gemini-pro
✓ Status: Ready
```

**Failure Output:**
```
✗ Failed to connect to Gemini API
✗ Error: Invalid API key
→ Check your API key in config.yml
```

## Step 4: Basic Configuration

### Recommended Initial Settings

```yaml
# ========================================
# GeminiMC Configuration
# ========================================

# API Settings
api:
  key: "YOUR_API_KEY"
  model: "gemini-pro"
  timeout: 30
  max_retries: 3

# General Settings
general:
  enabled: true
  debug: false
  language: "en_US"

# Conversation Settings
conversation:
  # Enable conversation history
  history_enabled: true

  # Messages to remember per conversation
  history_length: 10

  # Conversation timeout (minutes)
  timeout: 30

  # Maximum response length (characters)
  max_response_length: 500

# Rate Limiting
rate_limit:
  enabled: true
  requests_per_minute: 10  # Per player
  requests_per_hour: 100   # Per player
  cooldown: 3              # Seconds between requests

# Permissions
permissions:
  require_permission: true
  admin_permission: "geminimc.admin"
  use_permission: "geminimc.use"

# Safety
safety:
  # Enable command execution
  allow_commands: true

  # Require confirmation for dangerous commands
  confirm_dangerous: true

  # Log all AI interactions
  log_interactions: true
```

### Apply Settings

```bash
/gemini reload
```

## Step 5: Set Up Permissions

### Basic Permissions

```yaml
# User permissions
geminimc.use              # Basic AI usage
geminimc.chat             # Chat with AI
geminimc.ask              # Ask questions

# Command execution
geminimc.execute          # Allow AI to execute commands
geminimc.execute.safe     # Only safe commands
geminimc.execute.admin    # Admin commands (careful!)

# Task management
geminimc.task.create      # Create tasks
geminimc.task.list        # View tasks
geminimc.task.cancel      # Cancel tasks

# Admin permissions
geminimc.admin            # Full admin access
geminimc.reload           # Reload configuration
geminimc.bypass           # Bypass rate limits
```

### Permission Examples

Using LuckPerms:

```bash
# Give all players basic access
/lp group default permission set geminimc.use true
/lp group default permission set geminimc.chat true

# Give VIP players command execution
/lp group vip permission set geminimc.execute.safe true

# Give admins full access
/lp group admin permission set geminimc.admin true
```

## Step 6: First Commands

### Test Basic Chat

```bash
/gemini Hello!
```

**Expected Response:**
```
[Gemini] Hello! I'm your AI assistant for this Minecraft server.
How can I help you today?
```

### Ask a Question

```bash
/ai What time is it on the server?
```

**Expected Response:**
```
[Gemini] The current server time is 14:30 (Day 5).
It's daytime in the Overworld.
```

### Execute a Command

```bash
/gemini Give me a diamond
```

**Expected Response:**
```
[Gemini] Executing: /give YourName diamond 1
✓ Gave 1 Diamond to YourName
```

## Step 7: Advanced Setup

### Enable Task System

```yaml
tasks:
  enabled: true
  max_concurrent: 5
  max_per_player: 3
  timeout: 3600  # 1 hour
  save_completed: true
```

### Configure Command Filters

Edit `plugins/GeminiMC/commands.yml`:

```yaml
# Command whitelist (if enabled, only these commands allowed)
whitelist:
  enabled: false
  commands:
    - "give"
    - "tp"
    - "time"
    - "weather"

# Command blacklist (these commands never allowed)
blacklist:
  enabled: true
  commands:
    - "stop"
    - "op"
    - "deop"
    - "ban"
    - "pardon"
    - "whitelist"

# Dangerous commands (require confirmation)
dangerous:
  - "clear"
  - "kill"
  - "difficulty"
  - "gamerule"
```

### Customize AI Personality

```yaml
ai:
  # AI personality/behavior
  personality:
    name: "Gemini"
    style: "helpful"  # helpful, professional, casual, creative

  # Response preferences
  responses:
    format: "chat"     # chat, detailed, brief
    include_emoji: false
    be_conversational: true

  # Context awareness
  context:
    remember_player_name: true
    remember_location: true
    remember_previous_commands: true
```

## Testing & Verification

### Complete Test Checklist

1. **API Connection**
   ```bash
   /gemini test connection
   ```
   ✓ Should connect successfully

2. **Basic Chat**
   ```bash
   /gemini Hello, how are you?
   ```
   ✓ Should receive friendly response

3. **Server Information**
   ```bash
   /gemini How many players are online?
   ```
   ✓ Should return accurate count

4. **Safe Command Execution**
   ```bash
   /gemini What time is it? Set it to day.
   ```
   ✓ Should execute `/time set day`

5. **Permission Check**
   ```bash
   # As non-admin player
   /gemini Stop the server
   ```
   ✓ Should deny permission

6. **Rate Limiting**
   ```bash
   # Send 20 rapid requests
   ```
   ✓ Should throttle after limit

7. **Conversation History**
   ```bash
   /gemini My name is Steve
   # Wait 10 seconds
   /gemini What's my name?
   ```
   ✓ Should remember "Steve"

### Monitor Console

Watch for these messages:

**Success:**
```
[GeminiMC] Loaded successfully
[GeminiMC] API connection established
[GeminiMC] Player asked: "Hello"
[GeminiMC] Response sent (142 chars)
```

**Warnings:**
```
[GeminiMC] Rate limit reached for player
[GeminiMC] Dangerous command blocked: /stop
[GeminiMC] API quota warning: 90% used
```

**Errors:**
```
[GeminiMC] API error: Invalid API key
[GeminiMC] Failed to execute command: No permission
[GeminiMC] Task execution failed: Timeout
```

## Common Issues

### API Key Invalid

**Problem:** "Invalid API key" error

**Solutions:**
- Verify key is correct (copy-paste from Google AI Studio)
- Check for extra spaces or quotes in config
- Ensure key hasn't been revoked
- Regenerate key if necessary

### No Response from AI

**Problem:** Commands work but AI doesn't respond

**Solutions:**
- Check internet connection
- Verify API quota hasn't been exceeded
- Check firewall isn't blocking API requests
- Enable debug mode: `debug: true`
- Check console for errors

### Rate Limit Errors

**Problem:** "Too many requests" error

**Solutions:**
- Increase per-player limits in config
- Reduce request frequency
- Check for command loops or automation
- Monitor API usage in Google Cloud Console

### Commands Not Executing

**Problem:** AI responds but commands don't run

**Solutions:**
- Verify `allow_commands: true` in config
- Check player has `geminimc.execute` permission
- Ensure command isn't blacklisted
- Check console for permission errors

### Conversation Not Remembered

**Problem:** AI doesn't remember previous messages

**Solutions:**
- Enable conversation history: `history_enabled: true`
- Increase history length: `history_length: 20`
- Check conversation hasn't timed out
- Verify data folder is writable

## Security Best Practices

### Protect Your API Key

1. **File Permissions**
   ```bash
   chmod 600 plugins/GeminiMC/config.yml
   ```

2. **Never Share**
   - Don't paste config in public Discord/forums
   - Don't commit config to public GitHub
   - Regenerate if accidentally exposed

3. **Monitor Usage**
   - Check Google Cloud Console regularly
   - Set up usage alerts
   - Investigate suspicious spikes

### Command Safety

1. **Use Blacklist**
   ```yaml
   blacklist:
     enabled: true
     commands: ["stop", "op", "deop", "ban", "pardon"]
   ```

2. **Enable Confirmations**
   ```yaml
   safety:
     confirm_dangerous: true
   ```

3. **Restrict Permissions**
   - Only trusted users get `geminimc.execute.admin`
   - Regular players use `geminimc.execute.safe`

## Next Steps

Now that GeminiMC is installed and configured:

- [Explore all available commands](/plugins/geminimc/commands)
- [Learn about the task system](/plugins/geminimc/tasks)
- [Customize advanced configuration](/plugins/geminimc/configuration)
- Join our Discord for support and ideas!

::: tip Start Simple
Begin with basic chat functionality and gradually enable more features as you become comfortable with the plugin!
:::

::: warning Monitor API Usage
Keep an eye on your API quota, especially in the first few days. Adjust rate limits if usage is too high!
:::

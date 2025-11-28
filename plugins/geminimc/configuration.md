---
title: Configuration
description: Complete configuration reference for GeminiMC
---

# Configuration Guide

Complete reference for configuring GeminiMC, including API setup, AI behavior, safety settings, and advanced customization.

## Configuration Files

GeminiMC uses multiple configuration files:

```
plugins/GeminiMC/
├── config.yml          # Main configuration
├── messages.yml        # Customizable messages
├── commands.yml        # Command filters
├── tasks/              # Saved tasks
└── data/               # Conversation data
```

## Main Configuration (config.yml)

### Complete Default Configuration

```yaml
# ========================================
# GeminiMC Configuration
# ========================================

# General Settings
general:
  # Enable the plugin
  enabled: true

  # Plugin prefix for messages
  prefix: "&8[&bGemini&8]&r"

  # Debug mode (verbose logging)
  debug: false

  # Check for updates
  update_checker: true

  # Language file
  language: "en_US"

# ========================================
# Google Gemini API Settings
# ========================================
api:
  # Your Google Gemini API key
  # Get one at: https://makersuite.google.com/app/apikey
  key: "YOUR_API_KEY_HERE"

  # Model to use
  # Options: gemini-pro, gemini-pro-vision
  model: "gemini-pro"

  # API request timeout (seconds)
  timeout: 30

  # Maximum retries on failure
  max_retries: 3

  # Retry delay (seconds)
  retry_delay: 2

  # API endpoint (usually don't change)
  endpoint: "https://generativelanguage.googleapis.com"

  # API version
  version: "v1"

# ========================================
# AI Behavior Settings
# ========================================
ai:
  # AI personality configuration
  personality:
    # AI name (how it refers to itself)
    name: "Gemini"

    # Behavior style
    # Options: helpful, professional, casual, creative, technical
    style: "helpful"

    # Role description (affects responses)
    role: "Minecraft server assistant"

  # Response preferences
  responses:
    # Response format
    # Options: chat, detailed, brief
    format: "chat"

    # Maximum response length (characters)
    max_length: 500

    # Minimum response length (characters)
    min_length: 10

    # Include emoji in responses
    include_emoji: false

    # Be conversational (vs technical)
    conversational: true

    # Explain actions taken
    explain_actions: true

  # Context awareness
  context:
    # Remember player name
    remember_player: true

    # Remember player location
    remember_location: true

    # Remember previous commands
    remember_commands: true

    # Context memory depth
    memory_depth: 10

  # Generation parameters
  generation:
    # Temperature (0.0-1.0, higher = more creative)
    temperature: 0.7

    # Top-k sampling
    top_k: 40

    # Top-p sampling (nucleus sampling)
    top_p: 0.95

    # Max output tokens
    max_tokens: 2048

# ========================================
# Conversation Settings
# ========================================
conversation:
  # Enable conversation history
  history_enabled: true

  # Messages to remember per conversation
  history_length: 10

  # Conversation timeout (minutes)
  # After timeout, conversation is cleared
  timeout: 30

  # Save conversations to disk
  save_history: true

  # History storage duration (hours)
  # -1 = keep forever
  retention: 24

  # Enable conversation context
  use_context: true

  # Context window size
  context_window: 5

  # Clear history on player disconnect
  clear_on_disconnect: false

# ========================================
# Command Execution Settings
# ========================================
commands:
  # Allow AI to execute commands
  allow_execution: true

  # Require explicit execute command
  # If false, AI can execute from normal chat
  require_explicit: false

  # Parse and execute minecraft commands
  parse_commands: true

  # Validate commands before execution
  validate_commands: true

  # Command filters
  filters:
    # Use whitelist (only allow listed commands)
    use_whitelist: false

    # Use blacklist (block listed commands)
    use_blacklist: true

    # Load from commands.yml
    load_from_file: true

  # Command confirmation
  confirmation:
    # Require confirmation for dangerous commands
    enabled: true

    # Confirmation timeout (seconds)
    timeout: 30

    # Commands requiring confirmation
    dangerous_commands:
      - "stop"
      - "restart"
      - "clear"
      - "kill"
      - "ban"
      - "pardon"
      - "op"
      - "deop"
      - "whitelist"

# ========================================
# Task System Settings
# ========================================
tasks:
  # Enable task system
  enabled: true

  # Maximum concurrent tasks
  max_concurrent: 5

  # Maximum tasks per player
  max_per_player: 3

  # Task execution timeout (seconds)
  timeout: 3600  # 1 hour

  # Save completed tasks
  save_completed: true

  # Completed task retention (seconds)
  # -1 = keep forever
  completed_retention: 86400  # 24 hours

  # Task types
  types:
    # Allow immediate tasks
    immediate: true

    # Allow monitoring tasks
    monitoring: true

    # Allow scheduled tasks
    scheduled: true

    # Require permission for advanced types
    require_permission: false

  # Scheduled tasks
  scheduled:
    # Minimum interval (seconds)
    min_interval: 60

    # Maximum interval (seconds)
    max_interval: 86400  # 24 hours

  # Monitoring tasks
  monitoring:
    # Default check interval (seconds)
    default_interval: 60

    # Minimum check interval (seconds)
    min_interval: 10

# ========================================
# Rate Limiting
# ========================================
rate_limit:
  # Enable rate limiting
  enabled: true

  # Per-player limits
  player:
    # Requests per minute
    per_minute: 10

    # Requests per hour
    per_hour: 100

    # Requests per day
    per_day: 500

  # Global server limits
  global:
    # Requests per minute (all players)
    per_minute: 50

    # Requests per hour
    per_hour: 500

  # Cooldown between requests (seconds)
  cooldown: 3

  # Burst allowance (requests that bypass cooldown)
  burst_allowance: 3

  # Custom limits by permission
  # Format: "permission": limit_per_minute
  custom_limits:
    "geminimc.limit.20": 20
    "geminimc.limit.50": 50
    "geminimc.unlimited": -1  # No limit

# ========================================
# Safety & Security
# ========================================
safety:
  # Safety filter level
  # Options: NONE, LOW, MEDIUM, HIGH
  filter_level: "MEDIUM"

  # Block harmful content
  block_harmful: true

  # Block personal information requests
  block_personal_info: true

  # Sanitize user input
  sanitize_input: true

  # Log all AI interactions
  log_interactions: true

  # Log file location
  log_file: "plugins/GeminiMC/logs/interactions.log"

  # Audit trail
  audit:
    enabled: true
    log_commands: true
    log_tasks: true
    log_failures: true

  # Content filtering
  content_filter:
    # Filter offensive language
    filter_offensive: true

    # Filter command injection attempts
    filter_injection: true

    # Maximum input length
    max_input_length: 500

# ========================================
# Permissions System
# ========================================
permissions:
  # Require permission to use plugin
  require_use_permission: true

  # Require permission for command execution
  require_execute_permission: true

  # Require permission for task creation
  require_task_permission: true

  # Admin permission grants all access
  admin_grants_all: true

  # Permission-based features
  features:
    # AI chat
    chat: "geminimc.use"

    # Command execution
    execute: "geminimc.execute"
    execute_safe: "geminimc.execute.safe"
    execute_admin: "geminimc.execute.admin"

    # Tasks
    task_create: "geminimc.task.create"
    task_manage: "geminimc.task.manage"

    # Admin
    admin: "geminimc.admin"
    reload: "geminimc.reload"
    bypass: "geminimc.bypass"

# ========================================
# Notifications & Feedback
# ========================================
notifications:
  # Enable notifications
  enabled: true

  # Notification method
  # Options: CHAT, ACTION_BAR, TITLE, BOSS_BAR
  method: "CHAT"

  # Show typing indicator
  typing_indicator: true

  # Show processing indicator
  processing_indicator: true

  # Notification sounds
  sounds:
    enabled: true
    response: "ENTITY_EXPERIENCE_ORB_PICKUP"
    error: "ENTITY_VILLAGER_NO"
    task_complete: "ENTITY_PLAYER_LEVELUP"
    volume: 0.5

  # Progress updates for tasks
  task_updates:
    enabled: true
    frequency: 10  # seconds
    method: "ACTION_BAR"

# ========================================
# Integration Settings
# ========================================
integration:
  # Discord integration
  discord:
    enabled: false
    webhook_url: ""
    log_interactions: false

  # PlaceholderAPI
  placeholderapi:
    enabled: true

  # WorldGuard
  worldguard:
    enabled: true
    respect_regions: true

  # Economy (Vault)
  economy:
    enabled: false
    cost_per_request: 0.0
    cost_per_task: 0.0

# ========================================
# Performance Settings
# ========================================
performance:
  # Use async operations
  async_requests: true

  # Cache responses
  cache:
    enabled: true
    duration: 300  # seconds
    max_size: 100  # entries

  # Optimization
  optimize:
    # Reduce context on long conversations
    reduce_context: true

    # Limit task execution rate
    limit_task_rate: true

    # Maximum tasks per tick
    max_tasks_per_tick: 3

  # Resource limits
  limits:
    # Maximum conversation memory (MB)
    max_memory: 50

    # Maximum concurrent API requests
    max_concurrent_requests: 5

# ========================================
# Data Storage
# ========================================
storage:
  # Storage type
  # Options: YAML, JSON, SQLITE, MYSQL
  type: "YAML"

  # Auto-save interval (seconds)
  auto_save: 60

  # YAML/JSON settings
  file:
    # Separate files per player
    separate_files: true

    # Compress old data
    compress_old: true

  # Database settings (if using SQLITE/MYSQL)
  database:
    # SQLite file name
    sqlite_file: "geminimc.db"

    # MySQL settings
    mysql:
      host: "localhost"
      port: 3306
      database: "minecraft"
      username: "root"
      password: "password"
      table_prefix: "geminimc_"

  # Backup settings
  backup:
    enabled: true
    interval: 86400  # 24 hours
    keep_backups: 7
    compress: true

# ========================================
# API Cost Management
# ========================================
cost_management:
  # Enable cost tracking
  enabled: true

  # API cost per request (USD)
  # Update based on current Gemini pricing
  cost_per_request: 0.00025

  # Monthly budget (USD)
  # -1 = unlimited
  monthly_budget: -1

  # Warn when reaching budget percentage
  warn_at_percentage: 80

  # Stop at budget limit
  stop_at_limit: false

  # Cost tracking
  tracking:
    enabled: true
    log_file: "plugins/GeminiMC/logs/costs.log"
    report_interval: 86400  # daily

# ========================================
# Advanced Settings
# ========================================
advanced:
  # Custom prompts
  prompts:
    # System prompt prepended to all requests
    system_prompt: |
      You are a helpful Minecraft server assistant.
      You can execute commands, answer questions, and help players.
      Be concise but friendly. Format responses clearly.

    # Command execution prompt
    command_prompt: |
      User wants to execute a Minecraft command.
      Analyze their request and generate the appropriate command.
      Validate the command before suggesting it.

  # Experimental features
  experimental:
    # Use vision model for screenshots
    vision_support: false

    # Multi-turn conversations
    multi_turn: true

    # Function calling
    function_calling: false

  # Developer options
  developer:
    # API request logging
    log_requests: false

    # Response time tracking
    track_timing: true

    # Debug file location
    debug_log: "plugins/GeminiMC/debug.log"
```

## Commands Configuration (commands.yml)

Configure command filtering:

```yaml
# ========================================
# Command Filters
# ========================================

# Whitelist (only these commands allowed)
whitelist:
  enabled: false
  commands:
    - "give"
    - "tp"
    - "teleport"
    - "time"
    - "weather"
    - "gamemode"
    - "difficulty"
    - "effect"
    - "clear"
    - "heal"

# Blacklist (these commands never allowed)
blacklist:
  enabled: true
  commands:
    # Server management
    - "stop"
    - "restart"
    - "reload"

    # Permissions
    - "op"
    - "deop"

    # Bans
    - "ban"
    - "ban-ip"
    - "pardon"
    - "pardon-ip"

    # Whitelist
    - "whitelist"

    # Plugin management
    - "plugins"
    - "pl"

    # Dangerous commands
    - "execute"
    - "function"

# Dangerous commands (require confirmation)
dangerous:
  - "clear"
  - "kill"
  - "difficulty"
  - "gamerule"
  - "setworldspawn"
  - "worldborder"
  - "forceload"

# Command aliases
# Map user-friendly names to actual commands
aliases:
  "heal": "effect give {player} instant_health 1 255"
  "feed": "effect give {player} saturation 1 255"
  "fly": "gamemode creative {player}"
  "day": "time set day"
  "night": "time set night"
  "clear_weather": "weather clear"
```

## Messages Configuration (messages.yml)

Customize all messages:

```yaml
# ========================================
# Messages Configuration
# ========================================

# General messages
general:
  prefix: "&8[&bGemini&8]&r "
  no_permission: "{prefix}&cYou don't have permission!"
  player_only: "{prefix}&cPlayers only!"
  reload_success: "{prefix}&aConfiguration reloaded!"
  api_error: "{prefix}&cAPI error! Check console."

# AI responses
ai:
  thinking: "{prefix}&7Thinking..."
  processing: "{prefix}&7Processing request..."
  executing: "{prefix}&7Executing command..."
  completed: "{prefix}&aCompleted!"
  failed: "{prefix}&cFailed: {reason}"

# Rate limit messages
rate_limit:
  exceeded: "{prefix}&cRate limit exceeded!"
  per_minute: "{prefix}&cToo many requests! Wait {time} seconds."
  per_hour: "{prefix}&cHourly limit reached. Try again later."
  cooldown: "{prefix}&cCooldown: {time} seconds remaining."

# Command messages
commands:
  execution_blocked: "{prefix}&cCommand execution blocked: {command}"
  confirmation_required: "{prefix}&eConfirm command: {command}"
  confirmation_prompt: "{prefix}&7Type &a/confirm &7or wait 30 seconds to cancel"
  confirmed: "{prefix}&aCommand confirmed and executed!"
  canceled: "{prefix}&cCommand canceled."
  invalid: "{prefix}&cInvalid command: {command}"

# Task messages
tasks:
  created: "{prefix}&aTask #{id} created!"
  started: "{prefix}&7Task #{id} started..."
  progress: "{prefix}&7Task #{id}: {progress}%"
  completed: "{prefix}&aTask #{id} completed!"
  failed: "{prefix}&cTask #{id} failed: {reason}"
  canceled: "{prefix}&cTask #{id} canceled."
  paused: "{prefix}&eTask #{id} paused."
  resumed: "{prefix}&aTask #{id} resumed."

# Error messages
errors:
  no_response: "{prefix}&cNo response from AI."
  timeout: "{prefix}&cRequest timed out."
  invalid_key: "{prefix}&cInvalid API key!"
  quota_exceeded: "{prefix}&cAPI quota exceeded!"
  connection_failed: "{prefix}&cConnection failed!"
```

## Permission Nodes Reference

### Basic Permissions

```yaml
geminimc.use              # Basic plugin usage
geminimc.chat             # Chat with AI
geminimc.ask              # Ask questions
geminimc.help             # View help
```

### Command Execution

```yaml
geminimc.execute          # Execute commands via AI
geminimc.execute.safe     # Only safe commands
geminimc.execute.admin    # Admin commands
geminimc.bypass.confirm   # Skip confirmations
```

### Task Permissions

```yaml
geminimc.task.create      # Create tasks
geminimc.task.list        # List tasks
geminimc.task.info        # View task info
geminimc.task.cancel      # Cancel tasks
geminimc.task.pause       # Pause/resume tasks
geminimc.task.manage      # Manage all tasks
```

### Rate Limit Permissions

```yaml
geminimc.bypass           # Bypass rate limits
geminimc.limit.20         # 20 requests per minute
geminimc.limit.50         # 50 requests per minute
geminimc.unlimited        # Unlimited requests
```

### Admin Permissions

```yaml
geminimc.admin            # Full admin access
geminimc.reload           # Reload config
geminimc.test             # Run tests
geminimc.*                # All permissions
```

## Configuration Examples

### Strict Security Server

```yaml
commands:
  allow_execution: true
  require_explicit: true  # Must use /gemini execute

  filters:
    use_whitelist: true   # Only allow specific commands
    use_blacklist: true

safety:
  filter_level: "HIGH"
  block_harmful: true
  log_interactions: true

rate_limit:
  enabled: true
  player:
    per_minute: 5        # Very restrictive
    per_hour: 50
```

### Creative/Testing Server

```yaml
commands:
  allow_execution: true
  require_explicit: false  # Execute from chat

  filters:
    use_whitelist: false
    use_blacklist: false   # Allow all commands

rate_limit:
  enabled: false           # No limits

tasks:
  max_per_player: 10       # Many tasks allowed
```

### Production SMP Server

```yaml
commands:
  allow_execution: true
  require_explicit: false

  filters:
    use_whitelist: false
    use_blacklist: true    # Block dangerous only

  confirmation:
    enabled: true          # Confirm dangerous actions

rate_limit:
  enabled: true
  player:
    per_minute: 10
    per_hour: 100

safety:
  filter_level: "MEDIUM"
  log_interactions: true

cost_management:
  enabled: true
  monthly_budget: 5.00     # $5/month limit
  warn_at_percentage: 80
```

## Best Practices

### API Key Security

1. **Protect config.yml**
   ```bash
   chmod 600 plugins/GeminiMC/config.yml
   ```

2. **Never commit to version control**
   ```
   # .gitignore
   plugins/GeminiMC/config.yml
   ```

3. **Regenerate if exposed**

### Performance Optimization

1. **Enable caching**
   ```yaml
   performance:
     cache:
       enabled: true
       duration: 300
   ```

2. **Limit concurrent requests**
   ```yaml
   performance:
     limits:
       max_concurrent_requests: 5
   ```

3. **Reduce history length**
   ```yaml
   conversation:
     history_length: 5  # Instead of 10
   ```

### Cost Management

1. **Set monthly budget**
   ```yaml
   cost_management:
     monthly_budget: 5.00
     stop_at_limit: true
   ```

2. **Enable rate limiting**
   ```yaml
   rate_limit:
     enabled: true
     player:
       per_day: 200
   ```

3. **Monitor usage regularly**

::: tip Configuration Validation
GeminiMC validates configuration on load. Check console for errors if settings don't work as expected!
:::

::: warning API Costs
Monitor your API usage! Even with a generous free tier, costs can add up with many players. Set budgets and rate limits!
:::

---
title: Commands Reference
description: Complete command reference for GeminiMC
---

# Commands Reference

Complete reference for all GeminiMC commands, including usage, permissions, and examples.

## Command Overview

| Command | Description | Permission |
|---------|-------------|------------|
| `/gemini <message>` | Chat with AI | `geminimc.use` |
| `/ai <message>` | Alias for /gemini | `geminimc.use` |
| `/gemini ask <question>` | Ask a question | `geminimc.ask` |
| `/gemini execute <task>` | Execute command via AI | `geminimc.execute` |
| `/gemini task <action>` | Manage tasks | `geminimc.task` |
| `/gemini history` | View conversation history | `geminimc.history` |
| `/gemini clear` | Clear conversation | `geminimc.clear` |
| `/gemini reload` | Reload configuration | `geminimc.reload` |
| `/gemini test` | Test AI connection | `geminimc.admin` |

## Detailed Command Reference

### Main Command: /gemini

Chat with the AI assistant using natural language.

**Syntax:**
```
/gemini <message>
/ai <message>
```

**Parameters:**
- `<message>` - Your message to the AI (required)

**Permission:** `geminimc.use`

**Examples:**

Basic greeting:
```
/gemini Hello!

Response: Hello! I'm your AI assistant. How can I help you today?
```

Ask for help:
```
/gemini How do I claim land on this server?

Response: To claim land, you'll need to use the claim plugin.
Stand in the area you want to protect and use /claim.
You can check your available claim blocks with /claimblocks.
```

Request information:
```
/gemini Who is online right now?

Response: Currently there are 5 players online:
- Steve (at spawn)
- Alex (mining at -500, 64, 200)
- Notch (in the Nether)
- Herobrine (building at 1000, 70, -800)
- Jeb (exploring)
```

Command execution:
```
/gemini Give me 64 oak logs

Response: Executing: /give YourName oak_log 64
✓ Gave 64 Oak Logs to YourName
```

Multiple commands:
```
/gemini Set the time to day and clear the weather

Response: Executing multiple commands:
1. /time set day ✓
2. /weather clear ✓
Done! It's now daytime with clear weather.
```

---

### Ask Command

Ask specific questions to the AI.

**Syntax:**
```
/gemini ask <question>
/ai ask <question>
```

**Parameters:**
- `<question>` - Your question (required)

**Permission:** `geminimc.ask`

**Examples:**

Server information:
```
/gemini ask What version is the server running?

Response: This server is running Paper 1.20.1 on Java 17.
```

Game mechanics:
```
/gemini ask How do I make a beacon work?

Response: To activate a beacon:
1. Build a pyramid of iron/gold/diamond/emerald blocks
2. Place beacon on top (center of pyramid)
3. Right-click beacon to select effects
4. Feed it iron/gold/diamond/emerald ingots

Pyramid sizes: 1-4 levels (9 to 164 blocks)
```

Player information:
```
/gemini ask When did Notch last log in?

Response: Notch last logged in 2 hours ago.
Last seen at coordinates: 100, 64, -200 (Overworld)
```

---

### Execute Command

Explicitly request command execution.

**Syntax:**
```
/gemini execute <task>
/ai execute <task>
```

**Parameters:**
- `<task>` - Task or command to execute (required)

**Permission:** `geminimc.execute` (safe commands) or `geminimc.execute.admin` (admin commands)

**Examples:**

Simple command:
```
/gemini execute teleport me to spawn

Response: Executing: /spawn
✓ Teleported to spawn
```

Item management:
```
/gemini execute clear my inventory

Response: ⚠ This action will clear your entire inventory.
Type /confirm to proceed or wait 30 seconds to cancel.

# After confirmation
✓ Inventory cleared
```

Player management (admin):
```
/gemini execute give all online players 1 diamond

Response: Executing: /give @a diamond 1
✓ Gave 1 Diamond to 5 players
```

World management (admin):
```
/gemini execute save the world and clear lag

Response: Executing multiple commands:
1. /save-all ✓
2. /lagg clear ✓
World saved and lag cleared successfully.
```

---

### Task Command

Manage autonomous AI tasks.

**Syntax:**
```
/gemini task <action> [parameters]
```

**Actions:**
- `create <description>` - Create new task
- `list` - List your active tasks
- `info <id>` - View task details
- `cancel <id>` - Cancel task
- `pause <id>` - Pause task execution
- `resume <id>` - Resume paused task

**Permission:** `geminimc.task.create`, `geminimc.task.manage`

**Examples:**

Create task:
```
/gemini task create Build a 10x10 stone platform at my location

Response: ✓ Task created: #1
✓ Description: Build a 10x10 stone platform
✓ Estimated steps: 3
✓ Status: Analyzing...

# Task executes automatically
[Task #1] Step 1/3: Getting player location...
[Task #1] Step 2/3: Calculating area...
[Task #1] Step 3/3: Placing blocks...
[Task #1] ✓ Task completed successfully!
```

List tasks:
```
/gemini task list

Response: === Active Tasks ===
#1 - Build stone platform (Completed)
#2 - Monitor server TPS (Running)
#3 - Clear old items (Paused)

Total: 3 tasks (1 running, 1 paused, 1 completed)
```

View task details:
```
/gemini task info 2

Response: === Task #2: Monitor server TPS ===
Status: Running
Created: 5 minutes ago
Progress: Ongoing (monitoring task)
Current step: Checking TPS every 60 seconds

Recent updates:
- 18:30: TPS: 19.8 (Good)
- 18:29: TPS: 19.5 (Good)
- 18:28: TPS: 18.2 (Warning - slight lag)
```

Cancel task:
```
/gemini task cancel 2

Response: ✓ Task #2 canceled
Monitoring task stopped.
```

---

### History Command

View your conversation history with the AI.

**Syntax:**
```
/gemini history [page]
```

**Parameters:**
- `[page]` - Page number (optional, default: 1)

**Permission:** `geminimc.history`

**Examples:**

View recent history:
```
/gemini history

Response: === Conversation History (Page 1/2) ===

[18:25] You: Hello!
[18:25] AI: Hello! How can I help you?

[18:26] You: What time is it?
[18:26] AI: The current server time is 14:30.

[18:27] You: Set it to day
[18:27] AI: ✓ Time set to day

Use /gemini history 2 for more
```

---

### Clear Command

Clear your conversation history.

**Syntax:**
```
/gemini clear
```

**Permission:** `geminimc.clear`

**Examples:**

Clear history:
```
/gemini clear

Response: ✓ Conversation history cleared
Starting fresh conversation!
```

**Use Cases:**
- Start new conversation context
- Reset AI memory
- Clear sensitive information
- Fix conversation stuck in loop

---

### Reload Command

Reload plugin configuration.

**Syntax:**
```
/gemini reload
```

**Permission:** `geminimc.reload` (admin)

**Examples:**

Reload configuration:
```
/gemini reload

Response: ✓ Reloading GeminiMC configuration...
✓ config.yml reloaded
✓ messages.yml reloaded
✓ commands.yml reloaded
✓ AI connection refreshed
GeminiMC ready!
```

---

### Test Command

Test AI connection and functionality.

**Syntax:**
```
/gemini test <test_type>
```

**Test Types:**
- `connection` - Test API connection
- `commands` - Test command execution
- `permissions` - Test permission system
- `rate_limit` - Test rate limiting

**Permission:** `geminimc.admin`

**Examples:**

Test connection:
```
/gemini test connection

Response: Testing Gemini API connection...
✓ API Key: Valid
✓ Model: gemini-pro
✓ Response Time: 234ms
✓ Status: Operational
Connection test passed!
```

Test commands:
```
/gemini test commands

Response: Testing command execution...
✓ Safe commands: Enabled
✓ Admin commands: Restricted
✓ Blacklist: Active (5 commands blocked)
✓ Whitelist: Disabled
✓ Confirmation system: Active
Command system operational!
```

Test permissions:
```
/gemini test permissions

Response: Testing permission system...
✓ geminimc.use: Granted
✓ geminimc.execute: Granted
✓ geminimc.execute.admin: Denied
✓ geminimc.task.create: Granted
✓ geminimc.admin: Denied
Permission system working correctly!
```

---

## Permission Nodes

### User Permissions

```yaml
geminimc.use              # Basic AI chat
geminimc.ask              # Ask questions
geminimc.chat             # Alternative for use
geminimc.history          # View conversation history
geminimc.clear            # Clear own history
```

### Command Execution

```yaml
geminimc.execute          # Execute any allowed command
geminimc.execute.safe     # Only safe commands
geminimc.execute.admin    # Admin commands (dangerous)
geminimc.bypass.confirm   # Skip confirmations
```

### Task Management

```yaml
geminimc.task.create      # Create tasks
geminimc.task.list        # View own tasks
geminimc.task.info        # View task details
geminimc.task.cancel      # Cancel own tasks
geminimc.task.manage      # Manage all tasks
```

### Admin Permissions

```yaml
geminimc.admin            # Full admin access
geminimc.reload           # Reload configuration
geminimc.test             # Run diagnostic tests
geminimc.bypass           # Bypass rate limits
geminimc.history.others   # View others' history
geminimc.task.others      # Manage others' tasks
geminimc.*                # Wildcard (all permissions)
```

## Command Aliases

GeminiMC supports multiple aliases for convenience:

| Primary | Aliases |
|---------|---------|
| `/gemini` | `/ai`, `/gem`, `/gpt` |
| `/gemini ask` | `/ai ask`, `/aiask` |
| `/gemini execute` | `/ai execute`, `/aiexec` |
| `/gemini task` | `/aitask`, `/task` |

**Example:**
```
/ai Hello!          # Same as /gemini Hello!
/aiask What time?   # Same as /gemini ask What time?
/aiexec tp spawn    # Same as /gemini execute tp spawn
```

## Natural Language Understanding

### Supported Intents

The AI understands various request types:

**Information Requests:**
```
/gemini What's the server TPS?
/gemini How many players are online?
/gemini What time is it?
/gemini Where is spawn?
```

**Command Requests:**
```
/gemini Give me a diamond sword
/gemini Teleport me to spawn
/gemini Set the weather to clear
/gemini Heal me
```

**Questions:**
```
/gemini How do I make a crafting table?
/gemini What plugins are installed?
/gemini Can I fly in survival?
/gemini Who owns this claim?
```

**Conversational:**
```
/gemini Tell me a joke
/gemini What can you do?
/gemini Thank you
/gemini Help me with...
```

### Context Awareness

The AI remembers conversation context:

```
/gemini My name is Steve
Response: Nice to meet you, Steve!

/gemini What's my name?
Response: Your name is Steve!

/gemini Give me 10 diamonds
Response: Gave 10 diamonds to Steve

/gemini How many do I have now?
Response: You now have 10 diamonds in your inventory.
```

## Rate Limiting

### Default Limits

```yaml
rate_limit:
  requests_per_minute: 10
  requests_per_hour: 100
  cooldown: 3  # seconds
```

**When Limited:**
```
/gemini Hello

Response: ⚠ Rate limit exceeded!
You can make 10 requests per minute.
Try again in 5 seconds.
```

### Bypass Rate Limits

Users with `geminimc.bypass` permission ignore rate limits.

## Advanced Usage

### Multi-Step Commands

Request complex operations:

```
/gemini Create a test arena: 50x50 stone platform,
walls of glass, spawn 10 zombies inside

Response: Creating test arena...
Step 1: Building 50x50 stone platform ✓
Step 2: Building glass walls ✓
Step 3: Spawning 10 zombies ✓
Test arena complete at your location!
```

### Conditional Commands

AI can make decisions:

```
/gemini If TPS is below 18, clear all entities

Response: Checking TPS... Current: 17.2
TPS is below 18, clearing entities...
✓ Cleared 347 entities
TPS now: 19.8
```

### Scheduled Commands

Create recurring tasks:

```
/gemini Every hour, remind all players to vote

Response: ✓ Scheduled task created
Will broadcast vote reminder every hour
Next reminder in: 58 minutes
```

## Tips & Best Practices

### Effective Communication

1. **Be Specific**
   ```
   ❌ "Give me stuff"
   ✓ "Give me 64 oak logs"
   ```

2. **Use Clear Language**
   ```
   ❌ "Make it day and stuff"
   ✓ "Set time to day and clear weather"
   ```

3. **Provide Context**
   ```
   ❌ "Teleport there"
   ✓ "Teleport me to spawn"
   ```

### Command Efficiency

1. **Combine Requests**
   ```
   ✓ "Set time to day, clear weather, and heal me"
   Better than 3 separate commands
   ```

2. **Use Shortcuts**
   ```
   /ai instead of /gemini (faster to type)
   ```

3. **Leverage History**
   ```
   /gemini Give me 10 diamonds
   /gemini Make that 20 instead
   # AI understands context
   ```

### Safety Tips

1. **Review Dangerous Commands**
   ```
   /gemini clear my inventory
   → Always confirm these actions!
   ```

2. **Use Tasks for Complex Operations**
   ```
   /gemini task create Build elaborate structure
   → Can pause/cancel if issues arise
   ```

3. **Test First**
   ```
   Test commands in creative/test world first
   ```

::: tip Natural Language
Don't overthink it! Chat with the AI naturally. It understands context and can handle conversational language.
:::

::: warning Command Limits
The AI can only execute commands you have permission to use. Admin commands require admin permissions!
:::

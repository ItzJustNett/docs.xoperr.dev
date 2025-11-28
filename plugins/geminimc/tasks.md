---
title: Task System
description: Autonomous AI task execution with GeminiMC
---

# Task System

GeminiMC's task system enables autonomous AI execution of complex, multi-step operations. Define goals in natural language and let the AI break them down, execute steps, and report progress.

## Overview

The task system allows you to:
- Define complex goals without specifying exact steps
- Let AI autonomously determine and execute actions
- Monitor progress in real-time
- Pause, resume, or cancel tasks
- Execute long-running or scheduled operations
- Automate repetitive server management

## How Tasks Work

### Task Lifecycle

```
Creation → Planning → Execution → Progress Updates → Completion
```

1. **Creation** - You define the task goal
2. **Planning** - AI breaks goal into actionable steps
3. **Execution** - AI executes each step
4. **Monitoring** - Track progress and status
5. **Completion** - Task finishes or fails

### Task Types

**Immediate Tasks:**
- Execute once
- Complete and finish
- Example: "Build a platform"

**Monitoring Tasks:**
- Run continuously
- Check conditions periodically
- Example: "Monitor TPS and alert if low"

**Scheduled Tasks:**
- Execute on schedule
- Repeat at intervals
- Example: "Clear entities every 30 minutes"

**Conditional Tasks:**
- Wait for conditions
- Execute when triggered
- Example: "Restart server if TPS < 15 for 5 minutes"

## Creating Tasks

### Basic Task Creation

**Syntax:**
```
/gemini task create <description>
```

**Examples:**

Simple building task:
```
/gemini task create Build a 10x10 stone platform at my location

Response:
✓ Task #1 created
Goal: Build a 10x10 stone platform
Status: Planning...

[Task #1] Analyzing requirements...
[Task #1] Plan created: 3 steps
[Task #1] Step 1/3: Get player location
[Task #1] Step 2/3: Calculate area (10x10)
[Task #1] Step 3/3: Place stone blocks
[Task #1] ✓ Completed! 10x10 stone platform built.
```

Resource gathering:
```
/gemini task create Gather 64 iron ore from nearby caves

Response:
✓ Task #2 created
Goal: Gather 64 iron ore
Status: Planning...

[Task #2] Step 1/4: Scanning for caves...
[Task #2] Step 2/4: Found 3 caves within 100 blocks
[Task #2] Step 3/4: Mining iron ore... (15/64)
[Task #2] Step 4/4: Mining complete (64/64)
[Task #2] ✓ Completed! 64 iron ore gathered.
```

Server maintenance:
```
/gemini task create Clean up server: clear old entities, save world, optimize database

Response:
✓ Task #3 created
Goal: Server cleanup and optimization
Status: Planning...

[Task #3] Step 1/4: Clearing entities...
[Task #3] Removed 1,247 item entities
[Task #3] Removed 342 mob entities
[Task #3] Step 2/4: Saving world...
[Task #3] World saved successfully
[Task #3] Step 3/4: Optimizing database...
[Task #3] Database optimized (recovered 45MB)
[Task #3] ✓ Completed! Server cleanup finished.
```

### Advanced Task Creation

**With parameters:**
```
/gemini task create Monitor server TPS every 60 seconds and alert if below 18

Response:
✓ Task #4 created (Monitoring)
Interval: 60 seconds
Condition: TPS < 18
Action: Send alert
Status: Running...

[Task #4] Monitoring started
[Task #4] 19:00 - TPS: 19.8 (Good)
[Task #4] 19:01 - TPS: 19.5 (Good)
[Task #4] 19:02 - TPS: 17.2 ⚠ Alert sent!
```

**Scheduled tasks:**
```
/gemini task create Every 30 minutes, clear all dropped items and announce to players

Response:
✓ Task #5 created (Scheduled)
Interval: 30 minutes
Next execution: 29m 58s
Status: Scheduled...

[Task #5] Waiting for next execution...
# 30 minutes later
[Task #5] Executing: Clear items
[Task #5] Cleared 847 items
[Task #5] Broadcast: "Dropped items have been cleared!"
[Task #5] Next execution: 30 minutes
```

**Conditional tasks:**
```
/gemini task create If player count drops below 2, switch to peaceful difficulty

Response:
✓ Task #6 created (Conditional)
Condition: Player count < 2
Action: Set difficulty peaceful
Status: Monitoring...

[Task #6] Monitoring player count...
[Task #6] Players: 5 (no action)
# Later...
[Task #6] Players: 1 - Condition met!
[Task #6] Setting difficulty to peaceful
[Task #6] ✓ Completed!
```

## Managing Tasks

### List Tasks

**View all your tasks:**
```
/gemini task list

Response: === Active Tasks ===

#1 - Build platform (Completed) ✓
#2 - Gather iron ore (Failed) ✗
#3 - Server cleanup (Completed) ✓
#4 - Monitor TPS (Running) ⟳
#5 - Clear items (Scheduled) ⏱
#6 - Auto peaceful (Monitoring) 👁

Total: 6 tasks
Running: 2 | Completed: 2 | Failed: 1 | Scheduled: 1
```

**Filter by status:**
```
/gemini task list running

Response: === Running Tasks ===
#4 - Monitor TPS (Running since 15m ago)
```

### View Task Details

**Get detailed information:**
```
/gemini task info 4

Response: === Task #4: Monitor TPS ===

Type: Monitoring
Status: Running
Created: 15 minutes ago
Last update: 30 seconds ago

Goal: Monitor server TPS every 60 seconds

Configuration:
- Check interval: 60 seconds
- Alert threshold: TPS < 18
- Alert recipients: Admins only

Recent activity:
19:15 - TPS: 19.8 (Good)
19:14 - TPS: 19.5 (Good)
19:13 - TPS: 19.2 (Good)
19:12 - TPS: 17.8 ⚠ Alert sent
19:11 - TPS: 16.5 ⚠ Alert sent

Statistics:
- Total checks: 15
- Alerts sent: 2
- Average TPS: 18.9
```

### Pause/Resume Tasks

**Pause a running task:**
```
/gemini task pause 4

Response:
✓ Task #4 paused
Monitoring stopped. Use /gemini task resume 4 to continue.
```

**Resume paused task:**
```
/gemini task resume 4

Response:
✓ Task #4 resumed
Monitoring restarted.
```

### Cancel Tasks

**Cancel a task:**
```
/gemini task cancel 4

Response:
✓ Task #4 canceled
Monitoring stopped and task removed.
```

**Cancel all tasks:**
```
/gemini task cancelall

Response:
⚠ This will cancel all your active tasks (5 tasks)
Type /confirm to proceed or wait 30 seconds to cancel.

# After confirmation
✓ Canceled 5 tasks
```

## Task Examples

### Building & Construction

**Create structures:**
```
/gemini task create Build a 5x5x5 glass cube at coordinates 100 64 100

[Task] Planning structure...
[Task] Placing blocks layer by layer...
[Task] ✓ Glass cube completed!
```

**Fill areas:**
```
/gemini task create Fill the area from 0 60 0 to 20 60 20 with grass blocks

[Task] Calculating volume: 441 blocks
[Task] Filling area...
[Task] Progress: 50% (220/441)
[Task] Progress: 100% (441/441)
[Task] ✓ Area filled!
```

**Clear areas:**
```
/gemini task create Clear all trees in a 50 block radius

[Task] Scanning for trees...
[Task] Found 23 trees
[Task] Removing trees... (5/23)
[Task] Removing trees... (15/23)
[Task] Removing trees... (23/23)
[Task] ✓ All trees removed!
```

### Server Management

**Automated backups:**
```
/gemini task create Every 6 hours, save the world and create a backup

[Task] Scheduled backup task created
[Task] Next backup: 5h 59m

# 6 hours later
[Task] Executing backup...
[Task] Saving world... ✓
[Task] Creating backup... ✓
[Task] Backup completed: backup_2025-01-15_08-00.zip
[Task] Next backup: 6 hours
```

**Performance monitoring:**
```
/gemini task create Monitor server performance and optimize if TPS drops below 18

[Task] Performance monitoring started
[Task] Checking TPS, memory, entities every 5 minutes
[Task] 08:00 - TPS: 19.8, RAM: 4GB/8GB, Entities: 450
[Task] 08:05 - TPS: 17.5 ⚠ Optimizing...
[Task] Cleared 200 excess entities
[Task] Unloaded 50 empty chunks
[Task] TPS recovered: 19.2 ✓
```

**Entity management:**
```
/gemini task create Keep entity count under 500 by clearing old items

[Task] Entity limiter active
[Task] Target: < 500 entities
[Task] Checking every 2 minutes
[Task] Current: 342 entities (OK)
[Task] Current: 523 entities (Clearing...)
[Task] Cleared 156 item entities
[Task] Current: 367 entities (OK)
```

### Player Management

**Welcome messages:**
```
/gemini task create When a new player joins, give them starter items and send welcome message

[Task] New player handler active
[Task] Waiting for new players...

# Player joins
[Task] New player detected: Steve
[Task] Giving starter items:
      - 64x Oak Logs
      - 32x Bread
      - Iron Pickaxe
      - Iron Sword
[Task] Sent welcome message
[Task] Waiting for next player...
```

**AFK management:**
```
/gemini task create Check for AFK players every 10 minutes and move them to AFK area

[Task] AFK checker active
[Task] AFK threshold: 10 minutes idle
[Task] Checking players...
[Task] Found 2 AFK players: Alex, Bob
[Task] Teleporting to AFK area...
[Task] ✓ 2 players moved to AFK
```

**Auto-moderation:**
```
/gemini task create Monitor chat for spam and auto-mute repeat offenders

[Task] Chat monitor active
[Task] Spam threshold: 5 messages in 10 seconds
[Task] Monitoring...
[Task] Player "Spammer" triggered threshold (6 messages/10s)
[Task] Issued warning to "Spammer"
[Task] Player "Spammer" repeated offense
[Task] Auto-muted for 5 minutes
```

### World Management

**Mob control:**
```
/gemini task create During night, if mob count exceeds 200, cull excess mobs

[Task] Mob limiter configured
[Task] Active during: Night only
[Task] Max mobs: 200
[Task] Waiting for night...
[Task] Night detected, monitoring mobs
[Task] Mob count: 245 (Culling 45 mobs)
[Task] ✓ Excess mobs removed
```

**Weather management:**
```
/gemini task create Keep weather clear during daytime

[Task] Weather controller active
[Task] Rule: Clear weather during day
[Task] Current: Day + Clear ✓
[Task] Weather changed to rain
[Task] Setting weather to clear...
[Task] ✓ Weather cleared
```

**Chunk management:**
```
/gemini task create Unload empty chunks every hour to save memory

[Task] Chunk optimizer scheduled
[Task] Interval: 1 hour
[Task] Next run: 59m 58s

# 1 hour later
[Task] Scanning for empty chunks...
[Task] Found 127 empty chunks
[Task] Unloading chunks...
[Task] ✓ 127 chunks unloaded
[Task] Memory freed: 158 MB
[Task] Next run: 1 hour
```

### Custom Automation

**Auto-restart:**
```
/gemini task create Restart server at 3 AM with 5 minute warning

[Task] Auto-restart scheduled
[Task] Time: 3:00 AM
[Task] Warning: 5 minutes before
[Task] Next restart: 6h 23m

# At 2:55 AM
[Task] Broadcasting restart warning...
[Task] "Server restarting in 5 minutes!"

# At 3:00 AM
[Task] Saving world...
[Task] Executing restart...
```

**Event automation:**
```
/gemini task create Every Saturday at 8 PM, teleport all players to PvP arena and start tournament

[Task] Event scheduler created
[Task] Day: Saturday
[Task] Time: 8:00 PM
[Task] Next event: 2 days 4 hours

# Saturday 8:00 PM
[Task] Starting tournament event!
[Task] Teleporting 12 players to PvP arena...
[Task] Broadcasting: "Tournament begins!"
[Task] Starting timer...
[Task] ✓ Event started
```

## Task Configuration

### Task Limits

Configure limits in config.yml:

```yaml
tasks:
  # Maximum concurrent tasks
  max_concurrent: 5

  # Maximum tasks per player
  max_per_player: 3

  # Task timeout (seconds)
  timeout: 3600  # 1 hour

  # Save completed tasks
  save_completed: true
  completed_retention: 86400  # 24 hours
```

### Task Permissions

```yaml
geminimc.task.create          # Create tasks
geminimc.task.list            # List own tasks
geminimc.task.info            # View task details
geminimc.task.cancel          # Cancel own tasks
geminimc.task.pause           # Pause/resume own tasks

# Admin permissions
geminimc.task.manage          # Manage all tasks
geminimc.task.unlimited       # Bypass task limits
geminimc.task.advanced        # Create advanced tasks
```

### Task Types Configuration

```yaml
task_types:
  # Allow immediate tasks
  immediate: true

  # Allow monitoring tasks
  monitoring: true

  # Allow scheduled tasks
  scheduled: true

  # Require permission for each type
  require_permission: false

  # Minimum interval for scheduled tasks (seconds)
  min_interval: 60
```

## Advanced Features

### Task Chaining

Create tasks that trigger other tasks:

```
/gemini task create After clearing entities, optimize the database, then broadcast completion

[Task] Chained task created: 3 steps
[Task] Step 1: Clearing entities...
[Task] Step 1 complete ✓
[Task] Step 2: Optimizing database...
[Task] Step 2 complete ✓
[Task] Step 3: Broadcasting message...
[Task] "Server optimization complete!"
[Task] ✓ All steps completed
```

### Conditional Execution

Tasks with complex conditions:

```
/gemini task create If TPS < 18 AND player count > 20, reduce view distance

[Task] Conditional task created
[Task] Condition: TPS < 18 AND Players > 20
[Task] Monitoring...
[Task] TPS: 19.2, Players: 25 (No action)
[Task] TPS: 17.5, Players: 22 (Condition met!)
[Task] Reducing view distance: 10 → 8
[Task] TPS recovered: 19.1
[Task] Restoring view distance: 8 → 10
```

### Task Dependencies

Tasks that depend on others:

```
/gemini task create Save world, then backup, then restart server

[Task] Task chain with dependencies:
       1. Save world (required for step 2)
       2. Backup (required for step 3)
       3. Restart

[Task] Executing step 1...
[Task] Step 1 ✓ (2 of 3 complete)
[Task] Executing step 2...
[Task] Step 2 ✓ (3 of 3 complete)
[Task] Executing step 3...
[Task] ✓ All steps completed successfully
```

## Troubleshooting

### Task Fails to Start

**Problem:** Task created but never starts

**Solutions:**
- Check task limits (max_concurrent)
- Verify permissions
- Check console for errors
- Ensure resources available

### Task Stuck in Progress

**Problem:** Task running but not completing

**Solutions:**
- Check task timeout settings
- Review task details: `/gemini task info <id>`
- Check for permission issues
- Cancel and recreate: `/gemini task cancel <id>`

### Task Execution Errors

**Problem:** Task fails with error

**Solutions:**
- Review task details for error message
- Check command permissions
- Verify resources exist (players, worlds, etc.)
- Try simpler task description

## Best Practices

### Task Design

1. **Be Specific**
   ```
   ❌ "Do server stuff"
   ✓ "Clear entities, save world, and optimize database"
   ```

2. **Set Reasonable Intervals**
   ```
   ❌ "Check TPS every second" (too frequent)
   ✓ "Check TPS every 60 seconds"
   ```

3. **Use Appropriate Types**
   ```
   One-time: Immediate tasks
   Ongoing: Monitoring tasks
   Repeating: Scheduled tasks
   ```

### Performance

1. **Limit Concurrent Tasks**
   - Don't run too many monitoring tasks
   - Use reasonable check intervals
   - Cancel unused tasks

2. **Monitor Task Impact**
   - Check TPS when running tasks
   - Adjust intervals if needed
   - Pause resource-intensive tasks

3. **Clean Up Completed Tasks**
   - Review and cancel old tasks
   - Don't accumulate hundreds of tasks
   - Use retention limits

::: tip Start Simple
Begin with simple, immediate tasks before creating complex monitoring or scheduled tasks. Test thoroughly!
:::

::: warning Resource Usage
Monitoring and scheduled tasks run continuously. Too many can impact server performance. Monitor your active tasks regularly!
:::

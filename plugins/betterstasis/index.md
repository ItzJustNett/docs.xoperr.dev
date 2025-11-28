---
title: BetterStasis
description: Enhanced stasis mechanics for Pearl Canon gameplay
---

# BetterStasis

BetterStasis is a lightweight plugin that enhances vanilla ender pearl stasis mechanics, making Pearl Canon gameplay more reliable, user-friendly, and feature-rich. Perfect for technical servers and players who enjoy advanced transportation systems.

## Overview

In vanilla Minecraft, ender pearl stasis chambers are used to create long-distance transportation systems (Pearl Canons). However, the vanilla implementation has several limitations and quirks that can make the experience frustrating. BetterStasis addresses these issues while maintaining the core mechanics that make stasis chambers interesting.

## What is Pearl Stasis?

Pearl stasis is a technique where an ender pearl is kept in a loaded state indefinitely by placing it in a specific setup (usually involving bubble columns). When the player triggers the pearl to land (by breaking the stasis), they are teleported to the pearl's location - potentially thousands of blocks away.

## Key Features

### Reliable Pearl Tracking
- **Persistent Pearl Data** - Pearls survive server restarts
- **Multiple Pearl Support** - Track multiple stasis pearls per player
- **Visual Indicators** - See your active stasis pearls
- **Distance Display** - Know how far your pearls are

### Enhanced Mechanics
- **Configurable Timeout** - Control how long pearls remain in stasis
- **Safe Teleportation** - Prevent teleporting into unsafe locations
- **Chunk Loading** - Optional chunk loading for pearl locations
- **Anti-Cheat Compatibility** - Works with popular anti-cheat plugins

### User-Friendly Interface
- **Status Commands** - Check your active stasis pearls
- **Notifications** - Get notified when pearls expire or break
- **Permission System** - Control who can use stasis mechanics
- **Cooldown Management** - Prevent abuse with configurable cooldowns

### Performance & Stability
- **Lightweight Design** - Minimal server impact
- **Async Operations** - Non-blocking pearl tracking
- **Memory Efficient** - Smart data storage
- **No TPS Impact** - Optimized for large servers

## How It Works

### Creating a Stasis Chamber

1. **Build the Chamber**
   - Create a bubble column (soul sand + water)
   - Add blocks to contain the pearl
   - Ensure chunks stay loaded

2. **Activate Stasis**
   - Throw an ender pearl into the chamber
   - Pearl enters stasis mode automatically
   - Receive confirmation message

3. **Trigger Teleportation**
   - Break the chamber (or use trigger mechanism)
   - Pearl lands and teleports you
   - Stasis ends after use

### Monitoring Your Pearls

Check active stasis pearls:
```bash
/stasis list
```

View detailed pearl information:
```bash
/stasis info <pearl_id>
```

Cancel a stasis pearl:
```bash
/stasis cancel <pearl_id>
```

## Use Cases

BetterStasis is perfect for:

- **Technical Servers** - Reliable transportation infrastructure
- **SMP Servers** - Quick travel between bases
- **PvP Servers** - Strategic positioning and escapes
- **Event Servers** - Instant player teleportation
- **Creative Servers** - Easy testing of pearl mechanics

## Improvements Over Vanilla

| Feature | Vanilla | BetterStasis |
|---------|---------|--------------|
| Pearl Persistence | Lost on restart | Saved across restarts |
| Multiple Pearls | Manual tracking | Automatic tracking |
| Distance Limit | None | Configurable |
| Timeout | None | Configurable |
| Notifications | None | Full notification system |
| Safe Landing | No checks | Safety validation |
| Anti-Cheat | Often flagged | Compatible |

## Requirements

- **Minecraft Version:** 1.20+
- **Server Software:** Paper, Purpur, or Spigot
- **Java Version:** 17 or higher
- **Dependencies:** None (standalone plugin)

## Quick Start

Get started with BetterStasis in minutes:

1. **Install the Plugin**
   - Download BetterStasis.jar
   - Place in `plugins/` folder
   - Restart server

2. **Configure Settings**
   - Edit `config.yml` as needed
   - Set timeout, limits, permissions
   - Reload with `/stasis reload`

3. **Create Your First Stasis**
   - Build a bubble column chamber
   - Throw an ender pearl into it
   - Verify with `/stasis list`

4. **Test Teleportation**
   - Walk away from chamber
   - Break the chamber
   - Teleport to pearl location

## Next Steps

Ready to dive deeper? Check out these guides:

- [Getting Started Guide](/plugins/betterstasis/getting-started) - Detailed setup and installation
- [Usage Guide](/plugins/betterstasis/usage) - Step-by-step stasis chamber tutorial
- [Configuration Reference](/plugins/betterstasis/configuration) - All config options explained

::: tip Pearl Canon Design
Looking for stasis chamber designs? Check out the usage guide for tested layouts and technical tips!
:::

::: warning Anti-Cheat Configuration
If using anti-cheat plugins, configure them to allow ender pearl teleportation or BetterStasis may be blocked!
:::

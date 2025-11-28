---
title: Getting Started
description: Installation and setup guide for BetterStasis
---

# Getting Started with BetterStasis

This guide will walk you through installing, configuring, and using BetterStasis on your Minecraft server.

## Prerequisites

Before installing BetterStasis, ensure you have:

- A Paper, Purpur, or Spigot server running Minecraft 1.20+
- Java 17 or higher installed
- Server operator permissions or file access
- Basic understanding of ender pearl mechanics

## Installation

### Step 1: Download the Plugin

1. Download the latest BetterStasis release
2. Verify the JAR file is not corrupted
3. Check version compatibility with your server

### Step 2: Install BetterStasis

1. Stop your server (recommended for first installation)
2. Place `BetterStasis.jar` in your `plugins/` folder
3. Start your server

The plugin will generate its configuration files:
```
plugins/
├── BetterStasis/
│   ├── config.yml
│   ├── data/
│   │   └── stasis.db
│   └── pearls/
│       └── player_pearls.yml
```

### Step 3: Verify Installation

Check that BetterStasis loaded correctly:

```bash
/plugins
```

You should see BetterStasis listed in green.

Check the version:
```bash
/stasis version
```

**Expected Output:**
```
BetterStasis v1.0.0
Running on Paper 1.20.1
Author: YourName
```

## Basic Configuration

### Initial Setup

Edit `plugins/BetterStasis/config.yml`:

```yaml
# Basic settings for getting started
general:
  enabled: true
  debug: false

# How long pearls stay in stasis (in seconds)
# 0 = infinite, -1 = disabled
stasis_timeout: 3600  # 1 hour

# Maximum stasis pearls per player
max_pearls_per_player: 3

# Enable notifications
notifications:
  enabled: true
  pearl_created: true
  pearl_expired: true
  pearl_triggered: true
```

### Recommended Settings

For most servers:

```yaml
# Moderate timeout
stasis_timeout: 7200  # 2 hours

# Reasonable limit
max_pearls_per_player: 5

# Enable all features
safe_teleport: true
chunk_loading: true
anti_cheat_bypass: true
```

For technical servers:

```yaml
# Long timeout
stasis_timeout: 86400  # 24 hours

# Higher limit
max_pearls_per_player: 10

# Maximum performance
chunk_loading: true
async_operations: true
```

### Apply Configuration

Reload configuration without restarting:

```bash
/stasis reload
```

## Permissions Setup

### Basic Permissions

```yaml
# Allow stasis creation
betterstasis.use: true

# Allow checking stasis list
betterstasis.list: true

# Allow stasis info command
betterstasis.info: true

# Allow canceling own stasis
betterstasis.cancel: true

# Admin commands
betterstasis.admin: true
betterstasis.reload: true
betterstasis.bypass: true
```

### Permission Examples

Using LuckPerms:

```bash
# Give all players basic access
/lp group default permission set betterstasis.use true
/lp group default permission set betterstasis.list true

# Give VIP extended limits
/lp group vip permission set betterstasis.limit.10 true

# Give admins full control
/lp group admin permission set betterstasis.admin true
```

### Permission Tiers

Create tiered access:

```yaml
# Default players: 3 pearls
default:
  - betterstasis.use
  - betterstasis.list
  - betterstasis.limit.3

# VIP players: 10 pearls
vip:
  - betterstasis.use
  - betterstasis.list
  - betterstasis.limit.10
  - betterstasis.priority

# Staff: unlimited pearls
staff:
  - betterstasis.admin
  - betterstasis.unlimited
  - betterstasis.bypass
```

## First Stasis Chamber

### Simple Stasis Chamber Design

Build your first stasis chamber:

**Materials Needed:**
- 1 Soul Sand
- 4 Glass blocks
- Water bucket
- Ender Pearl

**Construction:**

```
Layer 1 (Bottom):
[SOUL SAND]

Layer 2-5:
[GLASS][WATER][GLASS]
[GLASS]      [GLASS]

Layer 6 (Top):
[GLASS][GLASS][GLASS]
```

**Steps:**

1. Place soul sand at the base
2. Build glass walls around it (3x3, hollow center)
3. Fill center column with water from top
4. Verify bubble column is active
5. Throw ender pearl into the bubbles

### Testing Your Chamber

1. **Create the Stasis**

   Throw an ender pearl into the chamber:
   ```
   ✓ Stasis pearl created! ID: #1
   ✓ Location: X: 100, Y: 64, Z: -200
   ✓ Timeout: 1 hour
   ```

2. **Verify It's Active**

   Check your stasis list:
   ```bash
   /stasis list
   ```

   **Output:**
   ```
   === Active Stasis Pearls ===
   #1 - 256 blocks away - 59m remaining
   ```

3. **Test Teleportation**

   Walk at least 50 blocks away, then break the chamber:
   ```
   ✓ Stasis pearl triggered!
   ✓ Teleporting to pearl location...
   [You are teleported to the pearl]
   ```

## Advanced Setup

### Chunk Loading Configuration

Enable chunk loading for reliable stasis:

```yaml
chunk_loading:
  enabled: true
  method: "PAPER"  # PAPER, TICKET, or PLUGIN
  radius: 1        # Chunks to keep loaded around pearl
  unload_delay: 60 # Seconds after teleport to unload
```

### Anti-Cheat Integration

Configure anti-cheat compatibility:

#### NoCheatPlus

```yaml
# NoCheatPlus config.yml
checks:
  moving:
    teleport:
      allow_betterstasis: true
```

#### AAC (Advanced Anti-Cheat)

```yaml
# AAC config.yml
exemptions:
  - "betterstasis"
```

#### Vulcan

```yaml
# Vulcan config.yml
whitelist:
  - "BetterStasis"
```

### Database Setup (Optional)

For large servers, use MySQL:

```yaml
storage:
  type: "MYSQL"  # YAML, SQLITE, or MYSQL

  mysql:
    host: "localhost"
    port: 3306
    database: "minecraft"
    username: "user"
    password: "password"
    table_prefix: "betterstasis_"
```

## Testing & Verification

### Complete Test Procedure

1. **Create Stasis**
   ```bash
   # Build chamber, throw pearl
   /stasis list
   ```
   Verify pearl appears in list.

2. **Test Distance Tracking**
   ```bash
   # Move 500 blocks away
   /stasis list
   ```
   Verify distance updates correctly.

3. **Test Timeout**
   ```bash
   # Set low timeout for testing
   /stasis reload
   # Wait for expiration
   ```
   Verify notification received.

4. **Test Teleportation**
   ```bash
   # Break chamber
   ```
   Verify successful teleport.

5. **Test Persistence**
   ```bash
   # Create stasis
   /stop
   # Start server
   /stasis list
   ```
   Verify pearl survived restart.

### Console Monitoring

Watch for these messages:

**Success Messages:**
```
[BetterStasis] Loaded 5 stasis pearls
[BetterStasis] Player created stasis pearl #1
[BetterStasis] Stasis pearl #1 triggered - teleporting player
```

**Warning Messages:**
```
[BetterStasis] Warning: Pearl #1 timeout approaching (5m remaining)
[BetterStasis] Pearl #2 expired and was removed
```

**Error Messages:**
```
[BetterStasis] Error: Failed to load pearl data
[BetterStasis] Error: Unsafe teleport location detected
```

## Common Issues

### Pearls Not Entering Stasis

**Problem:** Thrown pearls land normally instead of entering stasis

**Solutions:**
- Verify bubble column is active (bubbles rising)
- Check `/stasis list` immediately after throwing
- Ensure player has `betterstasis.use` permission
- Verify player hasn't reached pearl limit
- Check config: `enabled: true`

### Pearls Disappear on Restart

**Problem:** Stasis pearls lost after server restart

**Solutions:**
- Check `data/stasis.db` or `pearls/*.yml` exists
- Verify file permissions (readable/writable)
- Check console for save errors
- Enable `auto_save: true` in config
- Consider switching to SQLITE or MYSQL

### Teleport Doesn't Work

**Problem:** Breaking chamber doesn't teleport player

**Solutions:**
- Check chunks are loaded at pearl location
- Enable chunk loading in config
- Verify pearl is still in stasis list
- Check anti-cheat isn't blocking teleport
- Ensure safe landing zone exists

### Anti-Cheat Flags

**Problem:** Anti-cheat plugin flags teleportation

**Solutions:**
- Add BetterStasis to anti-cheat whitelist
- Enable `anti_cheat_bypass` in config
- Configure anti-cheat to allow ender pearls
- Check anti-cheat logs for specific violation
- Temporarily disable anti-cheat for testing

### Permission Errors

**Problem:** Players can't use stasis despite having permissions

**Solutions:**
- Verify permission plugin is working
- Check specific permission nodes
- Test with OP users first
- Reload permission plugin
- Check for conflicting plugins

## Next Steps

Now that BetterStasis is installed and configured:

- [Learn detailed usage and chamber designs](/plugins/betterstasis/usage)
- [Explore all configuration options](/plugins/betterstasis/configuration)
- Join our Discord for support and chamber designs
- Share your Pearl Canon creations!

::: tip Backup Before Production
Test BetterStasis thoroughly in a development environment before deploying to production. Create backups of your server!
:::

::: warning Chunk Loading Impact
Enabling chunk loading for many stasis pearls can impact server performance. Monitor TPS when using this feature!
:::

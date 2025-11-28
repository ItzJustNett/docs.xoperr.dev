---
title: Getting Started
description: Installation and setup guide for BlissGems
---

# Getting Started with BlissGems

This guide will walk you through installing, configuring, and using BlissGems on your Minecraft server.

## Prerequisites

Before installing BlissGems, ensure you have:

- A Paper, Purpur, or Spigot server running Minecraft 1.20+
- Java 17 or higher installed
- Oraxen plugin installed and configured
- Server operator permissions or file access

## Installation

### Step 1: Install Dependencies

BlissGems requires Oraxen to function properly.

1. Download Oraxen from SpigotMC or Polymart
2. Place `Oraxen.jar` in your `plugins/` folder
3. Restart your server to generate Oraxen configuration files

### Step 2: Install BlissGems

1. Download the latest BlissGems release
2. Place `BlissGems.jar` in your server's `plugins/` folder
3. Restart your server

The plugin will generate its configuration files:
```
plugins/
├── BlissGems/
│   ├── config.yml
│   ├── gems.yml
│   └── data/
```

### Step 3: Verify Installation

Check that BlissGems loaded correctly:

```bash
/plugins
```

You should see BlissGems listed in green, indicating it loaded successfully.

## Oraxen Setup

BlissGems relies on Oraxen for custom gem items. You'll need to configure gem items in Oraxen.

### Configure Gem Items

1. Navigate to `plugins/Oraxen/items/`
2. Create or edit a gem configuration file (e.g., `gems.yml`)

Example gem item configuration:

```yaml
astra_gem:
  displayname: "<gradient:#A855F7:#EC4899>Astra Gem</gradient>"
  material: AMETHYST_SHARD
  Pack:
    generate_model: true
    parent_model: "item/handheld"
    textures:
      - custom/gems/astra
  Mechanics:
    custom_durability:
      enabled: true
      value: 1000
  PersistentData:
    gem_type: "ASTRA"
    gem_energy: 100
```

### Required Gem Types

Configure items for all 8 gem types:
- `astra_gem` - Astra Gem
- `fire_gem` - Fire Gem
- `flux_gem` - Flux Gem
- `life_gem` - Life Gem
- `puff_gem` - Puff Gem
- `speed_gem` - Speed Gem
- `strength_gem` - Strength Gem
- `wealth_gem` - Wealth Gem

### Apply Oraxen Configuration

After adding gem items:

```bash
/oraxen reload items
```

Or restart your server to apply changes.

## First Steps

### Give Yourself a Gem

Test the plugin by giving yourself a gem:

```bash
/blissgems give <player> <gem_type>
```

Example:
```bash
/blissgems give Notch astra
```

### Using Gems

1. **Hold the gem** in your main hand
2. **Right-click** to activate the gem's ability
3. **Check cooldown** - abilities have cooldown periods
4. **Monitor energy** - gems consume energy when used

### Check Gem Information

View details about a gem you're holding:

```bash
/blissgems info
```

This displays:
- Gem type
- Current energy level
- Energy state (PRISTINE, GOOD, etc.)
- Ability cooldown status

## Configuration

### Basic Configuration

Edit `plugins/BlissGems/config.yml` to customize:

```yaml
# General Settings
energy:
  consumption_rate: 5        # Energy consumed per ability use
  regeneration_rate: 0.5     # Energy regenerated per minute
  break_threshold: 10        # Energy level when gem becomes BROKEN

# Cooldowns (in seconds)
cooldowns:
  astra: 30
  fire: 20
  flux: 45
  life: 25
  puff: 15
  speed: 10
  strength: 20
  wealth: 60

# Abilities
abilities:
  enabled: true
  require_permission: false
  particle_effects: true
```

### Reload Configuration

Apply configuration changes without restarting:

```bash
/blissgems reload
```

## Permissions

Set up permissions for your players:

### Basic Permissions

```yaml
# Allow gem usage
blissgems.use: true

# Allow specific gem types
blissgems.use.astra: true
blissgems.use.fire: true
# ... etc

# Admin commands
blissgems.admin: true
blissgems.give: true
blissgems.reload: true
```

### Permission Examples

Using LuckPerms:

```bash
# Give all players basic usage
/lp group default permission set blissgems.use true

# Give VIP players access to Astra gem
/lp group vip permission set blissgems.use.astra true

# Give admins full access
/lp group admin permission set blissgems.admin true
```

## Testing

### Test Each Gem Type

1. Give yourself all gem types:
```bash
/blissgems give YourName astra
/blissgems give YourName fire
/blissgems give YourName flux
# ... etc
```

2. Test each ability by right-clicking
3. Verify particle effects appear
4. Check energy consumption
5. Confirm cooldowns work

### Monitor Console

Watch for errors in console:
```
[BlissGems] Player used Astra Gem ability
[BlissGems] Energy consumed: 5 (95% remaining)
[BlissGems] Cooldown started: 30 seconds
```

## Common Issues

### Gems Don't Work

**Problem:** Right-clicking gems does nothing

**Solutions:**
- Verify Oraxen items are configured correctly
- Check `gem_type` PersistentData matches gem name
- Ensure player has `blissgems.use` permission
- Verify gems have energy (not BROKEN)

### Oraxen Items Not Loading

**Problem:** Gems appear as vanilla items

**Solutions:**
- Run `/oraxen reload items`
- Check Oraxen configuration for errors
- Verify resource pack is applied to players
- Restart server after configuration changes

### Energy Not Regenerating

**Problem:** Gem energy stays depleted

**Solutions:**
- Check `regeneration_rate` in config.yml
- Verify gems aren't in BROKEN state
- Ensure server TPS is stable
- Check for plugin conflicts

### Permission Issues

**Problem:** Players can't use gems

**Solutions:**
- Grant `blissgems.use` permission
- Check specific gem permissions
- Verify permission plugin is working
- Use `/blissgems debug` to check permissions

## Next Steps

Now that BlissGems is installed and configured:

- [Learn about all gem types and their abilities](/plugins/blissgems/gems)
- [Understand the energy system](/plugins/blissgems/energy)
- [Explore all available commands](/plugins/blissgems/commands)
- [Customize advanced configuration](/plugins/blissgems/configuration)

::: tip Pro Tip
Start with limited gem availability and gradually introduce more types as players progress. This creates natural progression and keeps gems feeling special!
:::

::: warning Important
Always test gem configurations in a development environment before deploying to production. Backup your server regularly!
:::

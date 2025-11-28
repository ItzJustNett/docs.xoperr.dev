---
title: Commands Reference
description: Complete command reference for BlissGems
---

# Commands Reference

Complete reference for all BlissGems commands, including usage, permissions, and examples.

## Command Overview

| Command | Description | Permission |
|---------|-------------|------------|
| `/blissgems give` | Give a gem to a player | `blissgems.give` |
| `/blissgems info` | View gem information | `blissgems.use` |
| `/blissgems repair` | Repair a gem's energy | `blissgems.repair` |
| `/blissgems list` | List all available gems | `blissgems.list` |
| `/blissgems reload` | Reload configuration | `blissgems.reload` |
| `/blissgems energy` | Manage gem energy | `blissgems.admin` |
| `/blissgems debug` | Debug gem issues | `blissgems.debug` |

## Detailed Command Reference

### Give Command

Give gems to players.

**Syntax:**
```
/blissgems give <player> <gem_type> [energy] [amount]
```

**Parameters:**
- `<player>` - Target player name (required)
- `<gem_type>` - Type of gem (required)
  - Valid types: `astra`, `fire`, `flux`, `life`, `puff`, `speed`, `strength`, `wealth`
- `[energy]` - Starting energy level, 0-150 (optional, default: 100)
- `[amount]` - Number of gems to give (optional, default: 1)

**Permission:** `blissgems.give`

**Examples:**

Give a pristine Astra gem:
```
/blissgems give Notch astra
```

Give a Fire gem with 50% energy:
```
/blissgems give Notch fire 50
```

Give 5 Speed gems with maximum energy:
```
/blissgems give Notch speed 150 5
```

Give a broken Wealth gem (for testing):
```
/blissgems give Notch wealth 0
```

**Output:**
```
✓ Gave 1x Astra Gem (100% energy) to Notch
```

---

### Info Command

Display detailed information about the gem you're holding.

**Syntax:**
```
/blissgems info
```

**Permission:** `blissgems.use`

**Requirements:**
- Must be holding a gem in main hand

**Examples:**

View gem information:
```
/blissgems info
```

**Output:**
```
=== Gem Information ===
Type: Astra Gem
Energy: 85% (GOOD)
State: Active
Cooldown: 12 seconds remaining
Ability: Teleportation
Uses: 23
```

---

### Repair Command

Repair a gem's energy level.

**Syntax:**
```
/blissgems repair [player] [amount]
```

**Parameters:**
- `[player]` - Target player (optional, default: self)
- `[amount]` - Energy to restore, 1-150 (optional, default: 100)

**Permission:** `blissgems.repair` (self), `blissgems.repair.others` (other players)

**Requirements:**
- Target must be holding a gem

**Examples:**

Repair your own gem to 100%:
```
/blissgems repair
```

Repair another player's gem:
```
/blissgems repair Notch
```

Fully restore a gem to PRISTINE+5:
```
/blissgems repair Notch 150
```

Partially repair to 50%:
```
/blissgems repair Notch 50
```

**Output:**
```
✓ Gem repaired to 100% energy (PRISTINE state)
```

---

### List Command

Display all available gem types.

**Syntax:**
```
/blissgems list
```

**Permission:** `blissgems.list`

**Examples:**

List all gems:
```
/blissgems list
```

**Output:**
```
=== Available Gems ===
1. Astra Gem - Teleportation abilities
2. Fire Gem - Fire-based attacks
3. Flux Gem - Time manipulation
4. Life Gem - Healing powers
5. Puff Gem - Cloud abilities
6. Speed Gem - Movement enhancement
7. Strength Gem - Combat boost
8. Wealth Gem - Fortune effects
```

---

### Reload Command

Reload plugin configuration without restarting.

**Syntax:**
```
/blissgems reload [config|gems|all]
```

**Parameters:**
- `[config]` - Reload only config.yml (optional)
- `[gems]` - Reload only gems.yml (optional)
- `[all]` - Reload everything (default)

**Permission:** `blissgems.reload`

**Examples:**

Reload all configuration:
```
/blissgems reload
```

Reload only main config:
```
/blissgems reload config
```

Reload gem definitions:
```
/blissgems reload gems
```

**Output:**
```
✓ Configuration reloaded successfully
✓ Loaded 8 gem types
✓ Applied new settings
```

---

### Energy Command

Manage gem energy levels (admin command).

**Syntax:**
```
/blissgems energy <player> <set|add|remove> <amount>
```

**Parameters:**
- `<player>` - Target player name (required)
- `<action>` - Action to perform (required)
  - `set` - Set energy to specific value
  - `add` - Add energy
  - `remove` - Remove energy
- `<amount>` - Energy amount, 0-150 (required)

**Permission:** `blissgems.admin`

**Requirements:**
- Target must be holding a gem

**Examples:**

Set gem energy to 100%:
```
/blissgems energy Notch set 100
```

Add 25% energy:
```
/blissgems energy Notch add 25
```

Remove 50% energy:
```
/blissgems energy Notch remove 50
```

Set to PRISTINE+5 state:
```
/blissgems energy Notch set 150
```

Set to BROKEN state:
```
/blissgems energy Notch set 0
```

**Output:**
```
✓ Set Notch's gem energy to 100%
✓ Current state: PRISTINE
```

---

### Debug Command

Debug gem-related issues.

**Syntax:**
```
/blissgems debug [player]
```

**Parameters:**
- `[player]` - Target player (optional, default: self)

**Permission:** `blissgems.debug`

**Examples:**

Debug your own gem:
```
/blissgems debug
```

Debug another player's gem:
```
/blissgems debug Notch
```

**Output:**
```
=== Debug Information ===
Player: Notch
Holding Gem: Yes
Gem Type: astra_gem
NBT Data Present: Yes
Energy Value: 85
State: GOOD
Permission Check: ✓ blissgems.use.astra
Cooldown Active: Yes (12s remaining)
Oraxen Integration: ✓ Working
Last Error: None
```

---

## Permission Nodes

### User Permissions

```yaml
blissgems.use                # Basic gem usage
blissgems.use.astra         # Use Astra gem
blissgems.use.fire          # Use Fire gem
blissgems.use.flux          # Use Flux gem
blissgems.use.life          # Use Life gem
blissgems.use.puff          # Use Puff gem
blissgems.use.speed         # Use Speed gem
blissgems.use.strength      # Use Strength gem
blissgems.use.wealth        # Use Wealth gem
blissgems.info              # View gem info
blissgems.list              # List available gems
blissgems.repair            # Repair own gems
```

### Admin Permissions

```yaml
blissgems.admin             # Full admin access
blissgems.give              # Give gems to players
blissgems.reload            # Reload configuration
blissgems.energy            # Modify gem energy
blissgems.repair.others     # Repair other players' gems
blissgems.debug             # Access debug command
blissgems.*                 # Wildcard (all permissions)
```

## Command Aliases

Some commands have shorter aliases for convenience:

| Command | Aliases |
|---------|---------|
| `/blissgems` | `/bg`, `/gems` |
| `/blissgems give` | `/bg give`, `/gems give` |
| `/blissgems info` | `/bg info`, `/geminfo` |
| `/blissgems repair` | `/bg repair`, `/gemrepair` |

**Example:**
```
/bg give Notch astra
/geminfo
/gemrepair
```

## Common Usage Examples

### Server Setup

Give VIP players starter gems:
```bash
/blissgems give Steve speed 100 1
/blissgems give Steve life 100 1
```

### Event Rewards

Reward players with powered-up gems:
```bash
/blissgems give Alex astra 150 1
/blissgems give Alex strength 150 1
```

### Testing

Create test scenarios:
```bash
# Test broken gem
/blissgems give TestPlayer fire 0

# Test pristine gem
/blissgems give TestPlayer fire 150

# Test normal gem
/blissgems give TestPlayer fire 100
```

### Maintenance

Repair all online players' gems (requires scripting or command blocks):
```bash
/execute as @a run blissgems repair @s 100
```

## Tab Completion

All commands support tab completion:

- Type `/blissgems ` and press TAB to see available subcommands
- Type `/blissgems give ` and press TAB to see online players
- Type `/blissgems give Notch ` and press TAB to see gem types
- Supports completion for all parameters

::: tip Quick Reference
Bookmark this page for quick access to command syntax. Use `/blissgems` without arguments to see in-game help.
:::

::: warning Admin Commands
Commands like `/blissgems energy` and `/blissgems give` are powerful. Use appropriate permissions to prevent abuse!
:::

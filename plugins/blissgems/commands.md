---
title: Commands Reference
description: Complete list of all BlissGems commands and permissions
---

# Commands Reference

Complete reference for all BlissGems commands, their usage, permissions, and examples.

## Main Command

All commands use the base command `/bliss` (or aliases `/gems`, `/bg`)

```
/bliss [subcommand] [arguments]
```

---

## Admin Commands

### Give Gem
Give a gem to a player.

**Usage:**
```
/bliss give <player> <gem_type> [tier]
```

**Arguments:**
- `<player>` - Target player name
- `<gem_type>` - Gem type: `astra`, `fire`, `flux`, `life`, `puff`, `speed`, `strength`, `wealth`
- `[tier]` - Optional tier (1 or 2), defaults to 1

**Permission:** `blissgems.admin`

**Examples:**
```
/bliss give Magicc fire 1
/bliss give Steve astra 2
/bliss give Notch flux
```

---

### Manage Energy
Manage a player's energy level.

**Set Energy:**
```
/bliss energy <player> set <amount>
```

**Add Energy:**
```
/bliss energy <player> add <amount>
```

**Remove Energy:**
```
/bliss energy <player> remove <amount>
```

**Arguments:**
- `<player>` - Target player name
- `<amount>` - Energy amount (0-10)

**Permission:** `blissgems.admin`

**Examples:**
```
/bliss energy Magicc set 10
/bliss energy Steve add 5
/bliss energy Notch remove 2
```

**Notes:**
- Energy is clamped between 0 and 10
- Setting energy to 0 makes gem BROKEN (no abilities/passives)
- Setting energy to 1 makes gem RUINED (no passives)

---

### Reload Configuration
Reload the plugin configuration.

**Usage:**
```
/bliss reload
```

**Permission:** `blissgems.admin`

**Effect:**
- Reloads `config.yml`
- Applies new cooldowns, damage values, messages
- Does NOT reload player data
- Does NOT require server restart

---

## Player Commands

### Withdraw Energy
Extract 1 energy from your gem into an Energy Bottle item.

**Usage:**
```
/bliss withdraw
```

**Permission:** `blissgems.use` (default: true)

**Requirements:**
- Must have a gem equipped
- Gem must have energy > 1 (cannot withdraw from RUINED or BROKEN)
- Inventory must have space for the bottle

**Effect:**
- Removes 1 energy from gem
- Gives 1 Energy Bottle item
- Energy Bottle can be consumed to restore 1 energy

---

### Gem Info
Display information about your current gem.

**Usage:**
```
/bliss info
```

**Permission:** `blissgems.use` (default: true)

**Output:**
```
Gem: FIRE (Tier 2) | Energy: 7/10 | State: Pristine +2
```

Shows:
- Gem type and tier
- Current energy level
- Energy state name

---

### Activate Abilities (Manual)
Manually activate gem abilities (alternative to right-click).

**Primary Ability:**
```
/bliss ability:main
```

**Secondary Ability (Tier 2 only):**
```
/bliss ability:secondary
```

**Permission:** `blissgems.use` (default: true)

**Requirements:**
- Must be holding a gem in main hand or offhand
- Gem must have sufficient energy
- Ability must be off cooldown

**Use Cases:**
- When click activation is disabled (`/bliss clickactivation`)
- For keybind macros
- For precise ability timing

---

### Click Activation Toggle
Toggle whether right-clicking activates abilities.

**Usage:**
```
/bliss clickactivation
```

**Permission:** `blissgems.use` (default: true)

**Effect:**
- Toggles on/off for the player
- When OFF: Must use `/bliss ability:main` or `/bliss ability:secondary`
- When ON: Right-click activates abilities (default)
- Setting persists through logout

**Use Cases:**
- Prevent accidental ability activation
- Custom keybind setups
- Building/interactions without triggering abilities

---

## Wealth Gem Commands

These commands only work when holding a Wealth gem.

### Personal Pockets
Open your personal 9-slot storage inventory.

**Usage:**
```
/bliss pockets
```

**Permission:** `blissgems.use` (default: true)

**Requirements:**
- Must be holding Wealth gem (any tier)
- No cooldown

**Features:**
- Personal 9-slot inventory
- Items persist through logout
- Cannot be accessed by other players
- Independent from ender chest

---

### Amplify Enchantments
Temporarily enhance all enchantments on held items.

**Usage:**
```
/bliss amplify
```

**Permission:** `blissgems.use` (default: true)

**Requirements:**
- Must be holding Wealth gem (Tier 2)
- Cooldown: 180 seconds (3 minutes)

**Effect:**
- Duration: 45 seconds
- Enhances enchantments beyond normal limits
- Sharpness V → Sharpness VII
- Fortune III → Fortune V
- Etc.

**Visual:** Enchant glint particles

---

## Trusted Players System

### Trust a Player
Add a player to your trusted list (prevents damage from your abilities).

**Usage:**
```
/bliss trust <player>
```

**Permission:** `blissgems.use` (default: true)

**Effect:**
- Your gem abilities will not damage this player
- Flux Beam restores armor instead of damaging
- Fire Campfire won't burn them
- Strength Bloodthorns skips them
- Ground stun won't affect them

**Notes:**
- You automatically trust yourself
- Trusted list persists through logout
- No limit on trusted players

---

### Untrust a Player
Remove a player from your trusted list.

**Usage:**
```
/bliss untrust <player>
```

**Permission:** `blissgems.use` (default: true)

**Effect:**
- Your gem abilities will now affect this player
- Removes them from your trusted list

---

### View Trusted Players
See your list of trusted players.

**Usage:**
```
/bliss trustedlist
```

**Permission:** `blissgems.use` (default: true)

**Output:**
```
Trusted Players:
- Steve
- Alex
- Notch
```

Shows all players you've trusted.

---

## Permissions

### Admin Permissions

**`blissgems.admin`**
- Grants access to ALL admin commands
- `/bliss give`
- `/bliss energy`
- `/bliss reload`
- Default: op only

### Player Permissions

**`blissgems.use`**
- Grants access to ALL player commands
- Use gem abilities
- `/bliss info`
- `/bliss withdraw`
- `/bliss ability:main` and `/bliss ability:secondary`
- `/bliss trust`, `/bliss untrust`, `/bliss trustedlist`
- `/bliss clickactivation`
- `/bliss pockets` (Wealth gem)
- `/bliss amplify` (Wealth gem)
- Default: true (all players)

---

## Command Aliases

The main command has multiple aliases:

```
/bliss    (primary)
/gems     (alias)
/bg       (alias)
```

All work identically:
```
/bliss give Magicc fire 1
/gems give Magicc fire 1
/bg give Magicc fire 1
```

---

## Tab Completion

All commands support tab completion:

```
/bliss <TAB>
  give, energy, reload, withdraw, info, ability:main, ability:secondary,
  trust, untrust, trustedlist, clickactivation, pockets, amplify

/bliss give <TAB>
  <player names>

/bliss give Magicc <TAB>
  astra, fire, flux, life, puff, speed, strength, wealth

/bliss give Magicc fire <TAB>
  1, 2

/bliss trust <TAB>
  <online player names>
```

---

## Usage Examples

### Setting Up a New Player

```bash
# Give starting gem (Tier 1)
/bliss give NewPlayer fire 1

# Set to starting energy (5 is default)
/bliss energy NewPlayer set 5

# Check their gem info
/bliss info
```

### Upgrading a Player

```bash
# Give Tier 2 gem (or use Universal Gem Upgrader item)
/bliss give ExistingPlayer fire 2

# Restore full energy
/bliss energy ExistingPlayer set 10
```

### Energy Management

```bash
# Reward player with energy
/bliss energy TopPlayer add 3

# Penalize player
/bliss energy RuleBreaker remove 5

# Reset to PRISTINE state
/bliss energy Player set 5
```

### Trusted Players Setup

```bash
# As a player, trust your team
/bliss trust Alice
/bliss trust Bob
/bliss trust Charlie

# View your list
/bliss trustedlist

# Remove someone
/bliss untrust Bob
```

### Manual Ability Activation

```bash
# Disable click activation
/bliss clickactivation

# Use abilities via commands
/bliss ability:main
/bliss ability:secondary

# Re-enable click activation
/bliss clickactivation
```

---

## Error Messages

Common error messages and their meanings:

**"You don't have permission to use this command!"**
- Missing required permission (`blissgems.admin` or `blissgems.use`)

**"Player not found!"**
- Target player is offline or doesn't exist

**"Invalid gem type!"**
- Gem type not recognized (use: astra, fire, flux, life, puff, speed, strength, wealth)

**"Invalid tier! Use 1 or 2."**
- Tier must be 1 or 2

**"You don't have a gem equipped!"**
- Command requires holding a gem

**"Not enough energy to withdraw!"**
- Gem must have energy > 1 to withdraw

**"You already have a gem! You can only have one gem at a time."**
- Cannot pick up more than one gem

**"Click activation is disabled! Use /bliss ability:main or /bliss ability:secondary to activate abilities."**
- Right-click doesn't work, use commands instead

---

## Command Tips

::: tip Bulk Operations
Use commands with plugins like DeluxeMenus or CommandPanels to create GUI interfaces for gem management!
:::

::: tip Keybinds
Players can bind `/bliss ability:main` and `/bliss ability:secondary` to keys using client mods for faster ability activation.
:::

::: tip Permission Groups
Create permission groups for different gem access levels:
- VIP: Access to specific gem types
- Premium: Access to Tier 2 gems
- Admin: Full gem management
:::

::: warning Admin Safety
Be careful with `/bliss energy set 0` - this makes gems completely unusable until energy is restored!
:::

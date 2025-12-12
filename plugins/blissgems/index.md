---
title: BlissGems
description: A comprehensive gem system with unique abilities, energy mechanics, and tier progression
---

# BlissGems

BlissGems is a feature-rich Minecraft plugin (Paper 1.21+) that introduces a sophisticated gem-based ability system with unique powers, energy mechanics, and tier progression. Each gem offers distinct abilities that players can harness, upgrade, and master through gameplay.

## Overview

BlissGems adds 8 unique gem types to your server, each with special abilities that scale across 2 tiers. The plugin features an advanced 11-state energy system (0-10) where gems can range from BROKEN to PRISTINE +5, providing meaningful progression and maintenance mechanics.

## Key Features

### 🎨 Eight Unique Gems
Each gem type offers distinct abilities with tier progression:
- **Astra** - Astral daggers, projection, soul absorption, and phasing
- **Fire** - Charged fireballs, healing campfires, and auto-smelting
- **Flux** - Ground stun, armor-piercing laser, flow state, and shocking arrows
- **Life** - Health draining, circle of life, regeneration, and undead damage
- **Puff** - Dash, breezy bash, double jump, and fall immunity
- **Speed** - Sloth's sedative, speed storm, and soul sand immunity
- **Strength** - Bloodthorns, chad strength, and critical hit tracking
- **Wealth** - Durability chip, rich rush, pockets, amplify, and fortune

### ⚡ Energy System (0-10)
Gems use an energy-based system with 11 distinct states:
- **0**: BROKEN - No abilities or passives
- **1**: RUINED - Abilities work, but no passives
- **2-4**: SHATTERED/CRACKED/SCRATCHED - Full functionality
- **5**: PRISTINE - Starting state
- **6-10**: PRISTINE +1 to +5 - Enhanced states

Energy changes:
- +1 energy on player kills
- -1 energy on death
- Energy bottles from max energy player kills
- Repair kits restore energy via pedestals

### 🎯 Tier System
- **Tier 1**: Primary ability only
- **Tier 2**: Primary + secondary ability + auto-enchantments
- Universal Gem Upgrader for all gem types
- Auto-enchants (Tier 2): Sharpness V, Fortune III, Efficiency V, etc.

### 🛡️ Advanced Features
- **Flow State System** (Flux): Speed boosts from repeated actions
- **Critical Hit Tracking** (Strength): Charged attacks every X crits
- **Soul System** (Astra): Absorption for healing, capture for storage
- **Trusted Players**: Friendly fire prevention system
- **Click Activation Toggle**: Use abilities via click or commands
- **Repair Kit Pedestals**: Area energy restoration
- **Gem Trader**: Random gem type swaps
- **Custom Item System**: Fallback if Oraxen unavailable (PDC + Custom Model Data)

### 🔧 Fully Customizable
Complete control over plugin behavior:
- Configurable ability cooldowns and damage
- Adjustable energy gain/loss rates
- Custom messages with color code support
- Flexible gem enable/disable flags
- Auto-enchant toggles per gem
- Crafting recipes (gem fragments, trader, repair kits, upgrader)

## Quick Start

Get started with BlissGems in just a few steps:

1. **Install the Plugin**
   - Download BlissGems-1.0.1.jar
   - Place in your server's `plugins/` folder
   - Optional: Install Oraxen for custom items (plugin has built-in fallback)
   - Restart your server

2. **Get Your First Gem**
   - Use `/bliss give <player> <gem_type> [tier]`
   - Example: `/bliss give Magicc fire 1`
   - Gems start at 5 energy (PRISTINE state)

3. **Test Gem Abilities**
   - Hold gem in main hand and right-click
   - Tier 2: Shift + right-click for secondary ability
   - Monitor energy with `/bliss info`
   - Check cooldowns in action bar display

4. **Customize Settings**
   - Edit `config.yml` to adjust abilities
   - Configure cooldowns, damage values, durations
   - Set energy gain/loss rates
   - Customize messages

## Protection Systems

BlissGems includes comprehensive protection:
- **No gem dropping** - Cannot drop gems
- **No gem storing** - Cannot put gems in chests, bundles, or containers
- **No item frames** - Cannot place gems in item frames
- **Single gem only** - Cannot pick up more than one gem
- **Death protection** - Gems persist through death (saved and returned on respawn)

## Use Cases

BlissGems is perfect for:
- **RPG Servers** - Magical items with meaningful progression
- **Survival Servers** - Rare, powerful items with energy management
- **PvP Servers** - Tactical combat abilities with cooldowns
- **Custom Servers** - Unique gameplay mechanics and systems

## Requirements

- **Minecraft Version:** 1.21+
- **Server Software:** Paper or Purpur (1.21.10+)
- **Java Version:** 17 or higher
- **Dependencies:** None required (Oraxen optional for enhanced visuals, PlaceholderAPI optional)

## Next Steps

Ready to dive deeper? Check out these guides:

- [Getting Started Guide](/plugins/blissgems/getting-started) - Detailed installation and setup
- [Gem Types & Abilities](/plugins/blissgems/gems) - Complete gem reference with all abilities
- [Energy System](/plugins/blissgems/energy) - Understanding the 11-state energy mechanics
- [Commands Reference](/plugins/blissgems/commands) - All available commands and permissions
- [Configuration Guide](/plugins/blissgems/configuration) - Complete customization options

::: tip Need Help?
Join our Discord community for support, updates, and to share your server's gem configurations!
:::

::: warning Energy Management
Gems at energy 0 (BROKEN) cannot use abilities. Gems at energy 1 (RUINED) lose passive effects. Keep your gem maintained!
:::

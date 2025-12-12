---
title: Gem Types & Abilities
description: Complete reference for all 8 gem types, their abilities, and passives
---

# Gem Types & Abilities

BlissGems features 8 unique gem types, each with distinct abilities, passives, and tier progression. This guide covers all gem types, their mechanics, and strategic uses.

## Quick Reference Table

| Gem | Primary Ability | Secondary (T2) | Cooldown | Best For |
|-----|----------------|----------------|----------|----------|
| Astra | Astral Daggers | Astral Projection | 15s / 120s | Mobility, PvP |
| Fire | Charged Fireball | Cozy Campfire | 10s / 60s | DPS, Area Control |
| Flux | Flux Beam | Ground | 60s / 20s | Armor-Piercing, CC |
| Life | Heart Drainer | Circle of Life | 30s / 60s | Sustain, Support |
| Puff | Dash | Breezy Bash | 5s / 10s | Mobility, Escape |
| Speed | Sloth's Sedative | Speed Storm | 35s / 45s | CC, Speed |
| Strength | Bloodthorns | Chad Strength | 20s / 30s | Melee DPS |
| Wealth | Durability Chip | Rich Rush | 30s / 540s | Utility, Economy |

---

## Astra Gem 🌌

**Theme:** Astral projection, teleportation, and soul manipulation

### Primary: Astral Daggers
- **Activation:** Right-click
- **Cooldown:** 15 seconds
- **Damage:** 4.0 HP (2 hearts) per dagger
- **Effect:** Shoots 3 homing projectiles at nearest enemy within 30 blocks
- **Visual:** Purple particle trails
- **Target:** Nearest hostile mob or player

### Secondary: Astral Projection (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 120 seconds (2 minutes)
- **Duration:** 10 seconds
- **Range:** 150 block radius from origin
- **Effect:** Enter spectator mode and explore
- **Features:**
  - Forced return on boundary or timeout
  - Cooldown only starts when projection ends
  - Can be ended early by using ability again
  - Returns to origin location
  - Death cancels projection immediately

### Passives
- **Phasing** (15% chance): Avoid incoming attacks
- **Soul Absorption**:
  - Mob kill: Heal 2.5 hearts (5.0 HP)
  - Player kill: Heal 5 hearts (10.0 HP)
- **Soul Capture**: Store up to 2 mobs in gem, release in LIFO order (cannot capture bosses)

### Auto-Enchantments (Tier 2)
None

---

## Fire Gem 🔥

**Theme:** Destructive fire power and healing flames

### Primary: Charged Fireball
- **Activation:** Right-click to start charging, right-click again to fire
- **Charge Time:** 15 seconds for full charge
- **Cooldown:** 10 seconds (after firing)
- **Damage:** Scales 6.0 HP to 18.0 HP based on charge (0-100%)
- **Effect:** Launches fireball with explosion on impact
- **Visual:**
  - Ring, spiral, and ground circle particles during charge
  - Particles appear AROUND player (waist/feet height, not blocking view)
  - Massive effects at 100% charge
- **Yield:** 1.0 to 3.0 explosion size based on charge
- **Death Protection:** Charging cancels on death

### Secondary: Cozy Campfire (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 60 seconds (1 minute)
- **Duration:** 15 seconds (config: `fire-campfire`)
- **Range:** 4 block radius
- **Effect:** Places campfire that heals caster, burns enemies
- **Healing:** 0.4 HP + 1 food per second (configurable)
- **Damage:** 2.0 HP per second to enemies
- **Burn Duration:** 3 seconds
- **Visual:** Dense flame ring showing radius boundary
- **Features:**
  - Respects trusted players (no damage)
  - Auto-removes when broken or expired
  - Regeneration 2 for caster in range

### Passives
- **Fire Resistance**: Always active
- **Auto-Smelt**: Ores smelt automatically when mined

### Auto-Enchantments (Tier 2)
- **Flame** (bows)
- **Fire Aspect II** (swords)

---

## Flux Gem ⚡

**Theme:** Electric power, armor-piercing, and disruption

### Primary: Flux Beam
- **Activation:** Right-click to start charging, right-click again to fire
- **Charge Time:** 15 seconds for full charge
- **Cooldown:** 60 seconds (1 minute) - Very powerful!
- **Range:** 30 blocks (raycast targeting)
- **Damage:**
  - Base: 5.0 HP (2.5 hearts) uncharged
  - Max: 15.0 HP (7.5 hearts) at 100% charge
  - **Bypasses armor** using direct health manipulation
- **Armor Damage:** Up to 150 durability at 100% charge
- **Visual:** Electric spark and end rod beam particles
- **Trusted Players:** Restores armor instead of damaging
- **Death Protection:** Charging cancels on death

### Secondary: Ground (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 20 seconds
- **Range:** 20 blocks (raycast targeting)
- **Duration:** 3 seconds (config: `flux-ground-freeze`)
- **Targets:** ALL living entities (mobs and players)
- **Effect:** Freezes target in place
- **Status Effects:**
  - Slowness 255 (horizontal freeze)
  - Slow Falling (prevents jumping/falling)
  - Mining Fatigue 255
  - Weakness 255
- **Visual:** Electric spark circle, enchanted hit particles
- **Features:**
  - Respects trusted players
  - Adds to stunned players list (tracked for StunListener)
  - Works on bosses and all mob types

### Passives
- **Shocking Arrows**: Electric damage on arrow hits (3.0 HP, 8s cooldown using millisecond tracking)
- **Flow State**: Repeated actions increase speed/haste
  - 5 action types: Block Break, Arrow Shoot, Attack, Sprint, Jump
  - Repeating same action within 3 seconds builds flow level (1-5)
  - Level 1-2: Speed I
  - Level 3-4: Speed II + Haste I
  - Level 5: Speed III + Haste II (MAX FLOW STATE)
  - Resets on timeout or action change
- **Tireless**: Removes Weakness, Slowness, Hunger effects

### Auto-Enchantments (Tier 2)
None

---

## Life Gem ❤️

**Theme:** Health manipulation and regeneration

### Primary: Heart Drainer
- **Activation:** Right-click
- **Cooldown:** 30 seconds
- **Range:** 20 blocks (raycast targeting)
- **Duration:** 20 seconds
- **Total Damage:** 4.0 HP over full duration
- **Visual:** Healing particles on target
- **Effect:** Drains health from target over time

### Secondary: Circle of Life (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 60 seconds (1 minute)
- **Duration:** 10 seconds
- **Range:** 8 blocks radius (centered on cast location)
- **Effect:**
  - Caster in circle: Regeneration 3
  - Enemies in circle: Wither effect
- **Visual:**
  - Heart, sculk soul, and happy villager particles
  - Visible circle border with 32 point outline
- **Death Protection:** Effect stops on death

### Passives
- **Regeneration**: 0.5 hearts every 5 seconds
- **Undead Damage**: 3x damage to undead mobs
- **Saturation**: 2x saturation gain from food
- **Wither Immunity**: Removes wither effects

### Auto-Enchantments (Tier 2)
None

---

## Puff Gem ☁️

**Theme:** Air manipulation and mobility

### Primary: Dash
- **Activation:** Right-click
- **Cooldown:** 5 seconds
- **Effect:** Quick dash in look direction
- **Velocity:** 2.0 boost in facing direction
- **Visual:** Cloud particles

### Secondary: Breezy Bash (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 10 seconds
- **Effect:** Launch up, then slam down with AoE damage on landing
- **Visual:** Cloud particles during flight and landing

### Passives
- **No Fall Damage**: Complete fall damage immunity
- **Double Jump**: Press space while airborne to jump again

### Auto-Enchantments (Tier 2)
- **Power V** (bows)
- **Punch II** (bows)
- **Feather Falling IV** (boots)

---

## Speed Gem 💨

**Theme:** Enhanced movement and enemy slowing

### Primary: Sloth's Sedative
- **Activation:** Right-click
- **Cooldown:** 35 seconds
- **Range:** 8 block radius
- **Duration:** Configurable
- **Effect:** Applies Slowness to nearby enemies

### Secondary: Speed Storm (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 45 seconds
- **Effect:** Lightning strikes around player with speed boost
- **Visual:** Thunder particle effects

### Passives
- **Speed III**: Always active
- **Dolphin's Grace**: Always active
- **Soul Sand Immunity**: Move normally on soul sand

### Auto-Enchantments (Tier 2)
- **Efficiency V** (tools)

---

## Strength Gem 💪

**Theme:** Physical power and critical hits

### Primary: Bloodthorns
- **Activation:** Right-click
- **Cooldown:** 20 seconds
- **Damage:** 5.0 HP base
- **Range:** AoE around player
- **Visual:** Crimson particles
- **Features:**
  - Can target specific player (Frailer Power on T2)
  - Respects trusted players

### Secondary: Chad Strength (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 30 seconds
- **Duration:** Configurable
- **Effect:** Grants Strength III
- **Synergy:** Works with critical hit tracking

### Passives
- **Strength II**: Always active
- **Critical Hit Tracking**: Every X critical hits = 2x damage attack
  - Tier 1: Every 8 crits
  - Tier 2: Every 3 crits
  - Visual progress feedback with particles/sounds
  - Massive effects when fully charged

### Auto-Enchantments (Tier 2)
- **Sharpness V** (swords/axes)

---

## Wealth Gem 💎

**Theme:** Fortune, economy, and utility

### Primary: Durability Chip
- **Activation:** Right-click
- **Cooldown:** 30 seconds
- **Effect:** Deals 2x durability damage to target's armor
- **Visual:** Particle effects on target

### Secondary: Rich Rush (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 540 seconds (9 minutes)
- **Duration:** 120 seconds (2 minutes)
- **Effect:** Doubles mob drops and ore drops
- **Visual:** Glowstone particles

### Additional Commands
- `/bliss pockets` - Personal 9-slot inventory
- `/bliss amplify` - Enhance enchantments for 45 seconds

### Passives
- **Luck**: Always active
- **Hero of the Village**: Cheaper villager trades
- **2x Netherite Scrap**: From furnace smelting

### Auto-Enchantments (Tier 2)
- **Fortune III** (pickaxe)
- **Looting III** (sword)
- **Mending** (all tools)

---

## Ability Mechanics

### Charging Abilities
Fire Charged Fireball and Flux Beam use a charging system:
- Right-click to START charging (0% → 100% over 15 seconds)
- Right-click AGAIN to FIRE at current charge
- Auto-fires at 100% charge + 1 second grace period
- Charging CANCELS on death
- Action bar shows charge percentage
- Particles increase with charge level

### Targeting System
Most abilities use raycast targeting:
- Range: 20-30 blocks depending on ability
- Targets any `LivingEntity` (mobs + players)
- Respects friendly fire protection (trusted players)
- Visual beam/particle effects show targeting

### Trusted Players System
- Add with `/bliss trust <player>`
- Remove with `/bliss untrust <player>`
- View list with `/bliss trustedlist`
- Prevents damage from:
  - Flux Beam, Ground
  - Fire Campfire
  - Strength Bloodthorns
  - Other player-targeted abilities
- Players always trust themselves

### Death Mechanics
All active abilities and charging states cancel on death:
- Fire Fireball charging → Cancelled
- Flux Beam charging → Cancelled
- Astra Astral Projection → Ended immediately
- Life Circle of Life → Stopped

---

## Tips & Strategies

### Energy Management
- Tier 2 abilities cost MORE energy to upgrade
- Keep energy above 2 to use abilities
- Keep energy above 1 to keep passives active
- Kill players for +1 energy
- Use Repair Kits for group energy restoration

### Cooldown Optimization
- Fire Fireball (10s) - Spammable damage
- Puff Dash (5s) - Most frequent mobility
- Flux Beam (60s) - Save for critical moments
- Wealth Rich Rush (540s) - Plan mining sessions

### Tier Progression
- Start with Tier 1 to learn basics
- Upgrade to Tier 2 with Universal Gem Upgrader
- Tier 2 benefits:
  - Secondary ability (usually stronger)
  - Auto-enchantments (huge value)
  - Enhanced passive effects (some gems)

### PvP Meta
**Offensive Combos:**
- Flux Ground (stun) → Strength Bloodthorns (AoE)
- Fire Charged Fireball (ranged) → Astra Daggers (finish)
- Flux Beam (armor break) → Melee rush

**Defensive Options:**
- Puff Dash (escape)
- Astra Projection (invulnerable scouting)
- Life Circle of Life (sustain zone)

**Utility:**
- Speed gem for chasing/escaping
- Wealth for gear advantage
- Strength for burst damage

::: tip Pro Strategy
Flux Beam at 100% charge (15 HP armor-piercing) has a 60 second cooldown. Use it to break through armored targets, then follow up with other abilities during cooldown!
:::

::: warning Death Penalty
Dying costs 1 energy! At energy 1 (RUINED), you lose ALL passive effects. At energy 0 (BROKEN), you can't use abilities at all. Stay alive!
:::

---
title: Gem Types & Abilities
description: Complete reference for all 8 gem types, their abilities, and passives
---

# Gem Types & Abilities

BlissGems features 8 unique gem types, each with distinct abilities, passives, and tier progression. This guide covers all gem types, their mechanics, and strategic uses.

## Quick Reference Table

| Gem | Primary Ability | Secondary (T2) | Cooldown | Best For |
|-----|----------------|----------------|----------|----------|
| Astra | Astral Daggers | Astral Projection | 15s / 60s | Mobility, PvP, Soul Capture |
| Fire | Charged Fireball | Cozy Campfire | 10s / 60s | DPS, Area Control, Terrain |
| Flux | Flux Beam | Ground | 60s / 20s | Armor-Piercing, CC, Support |
| Life | Heart Drainer | Circle of Life | 30s / 60s | Sustain, Support, Healing |
| Puff | Dash | Breezy Bash | 5s / 10s | Mobility, Escape, Jumping |
| Speed | Sloth's Sedative | Speed Storm | 35s / 45s | CC, Speed, Debuff |
| Strength | Bloodthorns | Frailer Power | 20s / 25s | Melee DPS, Debuff |
| Wealth | Durability Chip | Rich Rush | 30s / 540s | Utility, Economy, Mining |

---

## Astra Gem 🌌

**Theme:** Astral projection, teleportation, and soul manipulation

### Primary: Astral Daggers
- **Activation:** Right-click
- **Cooldown:** 15 seconds
- **Damage:** 4.0 HP per dagger
- **Effect:** Fire 3 phantom purple daggers spread 15 degrees apart, travel 15 blocks
- **Visual:** Massive purple burst on hit
- **Features:** Available at T1+T2

### Secondary: Astral Projection (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 60 seconds
- **Duration:** 5 seconds spectator mode
- **Effect:** Enter spectator mode, ghost trail at origin, stay where you end up
- **Sub-abilities during Projection:**
  - **Tag** (Right-click): Mark a player for 30s with directional arrow + distance tracker
  - **Spook** (Shift+Right-click): Blindness + Nausea to enemies in 8-block radius for 3s

### Tertiary: Dimensional Drift (Tier 2)
- **Activation:** `/bliss ability:tertiary`
- **Cooldown:** 90 seconds
- **Duration:** 15 seconds
- **Effect:** Invisible horse mount + player invisibility with subtle purple particle trail
- **Features:** Toggle off early

### Quaternary: Dimensional Void (Tier 2)
- **Activation:** `/bliss ability:quaternary`
- **Cooldown:** 120 seconds
- **Duration:** 8 seconds
- **Effect:** Nullify ALL enemy gem abilities in 10-block radius
- **Visual:** Purple dome visual, Mining Fatigue + Weakness applied to enemies inside

### Passives
- **Phase**: 10-15% chance to negate incoming damage
- **Soul Healing**: Heal 2.5 hearts (mob kill) or 5 hearts (player kill)
- **Soul Capture**: Sneak + Hit a mob to capture (max 2). `/bliss release` to release, `/bliss souls` to view

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
- **Cooldown:** 60 seconds
- **Duration:** 15 seconds
- **Range:** 5-block radius
- **Effect:** Place campfire that heals allies (Regen IV) and burns enemies (2 HP/s + fire)
- **Visual:** Dense flame ring showing radius boundary
- **Features:**
  - Respects trusted players (no damage)
  - Auto-removes when broken or expired

### Tertiary: Crisp (Tier 2)
- **Activation:** `/bliss ability:tertiary`
- **Cooldown:** 90 seconds
- **Duration:** 15 seconds
- **Effect:** Evaporate all water and replace terrain with nether blocks in 10-block radius
- **Features:** Keeps evaporating newly placed water

### Quaternary: Meteor Shower (Tier 2)
- **Activation:** `/bliss ability:quaternary`
- **Cooldown:** 120 seconds
- **Duration:** 8 seconds rain
- **Effect:** Rain meteors on target area (8-block AoE), each meteor deals 5 HP and sets enemies on fire
- **Range:** 50 blocks (where you're looking)

### Passives
- **Fire Resistance**: Always active while holding gem
- **Auto-Smelt**: Ores smelt automatically when mined

### Auto-Enchantments (Tier 2)
- **Flame** (bows)
- **Fire Aspect II** (swords)

---

## Flux Gem ⚡

**Theme:** Electric power, armor-piercing, and disruption

### Primary: Flux Beam
- **Activation:** Right-click to charge, right-click again to fire
- **Charge Time:** 15 seconds max charge
- **Cooldown:** 60 seconds - Very powerful!
- **Range:** 30 blocks (raycast targeting)
- **Damage:** 5 HP base x charge multiplier, up to 150 armor durability damage at 100%
- **Visual:** Electric spark and end rod beam particles
- **Trusted Players:** Repairs armor instead of damaging
- **Death Protection:** Charging cancels on death

### Secondary: Ground (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 20 seconds
- **Range:** 15 blocks (raycast targeting)
- **Duration:** 3-5 seconds stun
- **Effect:** Stun target (Slowness 255 + Mining Fatigue 255 + Weakness 255) - completely freezes them
- **Visual:** Electric spark circle, enchanted hit particles
- **Features:**
  - Respects trusted players
  - Works on all living entities and bosses

### Passives
- **Flow Cleanse**: Removes Weakness, Slowness, Hunger effects every tick
- **Shocking Arrows**: Arrows deal 2-3 HP electric damage on hit (8s cooldown between shocks)

### Auto-Enchantments (Tier 2)
None

---

## Life Gem ❤️

**Theme:** Health manipulation and regeneration

### Primary: Heart Drainer
- **Activation:** Right-click
- **Cooldown:** 30 seconds
- **Range:** 15 blocks (raycast targeting)
- **Duration:** 20 seconds
- **Effect:** Apply Wither II to target entity for 20s
- **Visual:** Pink particles + sculk soul effects

### Secondary: Circle of Life (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 60 seconds
- **Duration:** 10 seconds
- **Range:** 8 blocks radius (centered on cast location)
- **Effect:**
  - You in circle: Regen III
  - Enemies in circle: Wither II
- **Visual:** Pink circle border with hearts

### Passives
- **Passive Healing**: Regen 0.3 hearts (T1) / 0.5 hearts (T2) every tick. Removes Wither
- **Undead Damage**: 2x (T1) / 3x (T2) damage to undead mobs
- **Saturation Boost**: 1.5x (T1) / 2x (T2) saturation from eating
- **Golden Apple Bonus**: Extra Absorption I (T1) / Absorption II (T2) on golden apple eat

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
- **Duration:** 10s fall damage immunity
- **Effect:** Launch straight up (Y = 2.0), grants fall damage immunity
- **Visual:** Cloud burst particles

### Passives
- **Fall Damage Immunity**: No fall damage ever
- **Double Jump**: Sneak mid-air to double jump (0.6 T1 / 0.8 T2 velocity)
- **Launch on Hit**: Hitting player with mainhand Puff gem launches them up, slams down 3s later
- **Sculk Immunity** (T2): Sculk Shriekers/Sensors don't trigger

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
- **Range:** 10-block radius
- **Duration:** 10 seconds
- **Effect:** AoE debuff (Slowness IV + Mining Fatigue III) to all enemies
- **Visual:** Electric spark and yellow dust effects

### Secondary: Speed Storm (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 45 seconds
- **Duration:** 10 seconds
- **Effect:** Gain Speed VI with electric spark effects

### Tertiary: Adrenaline Rush (Tier 2)
- **Activation:** Right-click (without shifting)
- **Cooldown:** 90 seconds
- **Duration:** 6 seconds combat mode
- **Effect:** Speed scales with energy (1-10 = Speed I-X), removes weapon attack cooldown
- **Visual:** Electric effects

### Passives
- **Speed**: Speed I (T1) / Speed II (T2) + Dolphin's Grace

### Auto-Enchantments (Tier 2)
- **Efficiency V** (tools)

---

## Strength Gem 💪

**Theme:** Physical power and critical hits

### Primary: Bloodthorns
- **Activation:** Right-click
- **Cooldown:** 20 seconds
- **Damage:** 5.0 HP base (scales with your health %)
- **Range:** 5-block AoE radius
- **Effect:** AoE damage, more damage when at higher health
- **Visual:** Crimson particles
- **Features:** Respects trusted players

### Secondary: Frailer Power (Tier 2)
- **Activation:** Right-click (aiming at target)
- **Cooldown:** 25 seconds
- **Range:** 15 blocks (raycast targeting)
- **Duration:** Weakness III for 10s + Wither II for 5s
- **Effect:** Target player debuff
- **Visual:** Purple particles

### Tertiary: Chad Strength (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 30 seconds
- **Duration:** 10 seconds
- **Effect:** Grants Strength II + Resistance II
- **Synergy:** Works with critical hit tracking

### Passives
- **Strength**: Strength I (T1) / Strength II (T2)
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
- **Activation:** Right-click (no target)
- **Cooldown:** 30 seconds
- **Effect:** Toggle 2x durability damage on tools
- **Visual:** Particle effects

### Secondary: Rich Rush (Tier 2)
- **Activation:** Shift + Right-click
- **Cooldown:** 540 seconds (9 minutes)
- **Duration:** 2 minutes
- **Effect:** Haste III + Luck IV for mining/farming
- **Visual:** Glowstone particles

### Additional Commands (Tier 2)
- `/bliss pockets` - Open 9-slot personal inventory
- `/bliss amplify` - Amplify all active potion effects by +1 level (max 5), 180s cooldown
- `/bliss autosmelt` - Toggle ore auto-smelting on/off

### Passives
- **Luck**: Luck I (T1) / Luck II (T2)
- **Hero of the Village**: Permanent Hero of the Village effect
- **Unfortunate** (T1+T2): Apply Unluck III to target player for 40s (40s cooldown)

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

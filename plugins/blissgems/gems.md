---
title: Gem Types & Abilities
description: Complete reference for all 8 gem types and their abilities
---

# Gem Types & Abilities

BlissGems features 8 unique gem types, each with distinct abilities and characteristics. This guide covers all gem types, their abilities, and strategic uses.

## All Gem Types

| Gem | Primary Ability | Cooldown | Energy Cost | Best For |
|-----|----------------|----------|-------------|----------|
| Astra | Teleportation | 30s | 10% | Mobility, Exploration |
| Fire | Fire Blast | 20s | 8% | Combat, PvP |
| Flux | Ground (Stun) | 60s | 12% | PvP, Disable |
| Life | Instant Heal | 25s | 10% | Survival, Support |
| Puff | Cloud Step | 15s | 5% | Traversal, Building |
| Speed | Speed Boost | 10s | 4% | Movement, Racing |
| Strength | Damage Amp | 20s | 7% | Combat, Boss Fights |
| Wealth | Fortune Buff | 60s | 15% | Mining, Farming |

## Detailed Gem Reference

### Astra Gem

**Theme:** Teleportation and Space Manipulation

**Primary Ability: Warp**
- **Effect:** Teleports player to looked-at location (max 50 blocks)
- **Activation:** Right-click while looking at target location
- **Cooldown:** 30 seconds
- **Energy Cost:** 10% per use
- **Particles:** Purple spiral particles at departure and arrival

**Special Properties:**
- Teleports through glass and transparent blocks
- Cannot teleport into solid blocks
- Safe landing - prevents fall damage
- Works across dimensions (if enabled in config)

**Strategic Uses:**
- Quick escapes in PvP combat
- Efficient exploration and travel
- Base infiltration (with proper permissions)
- Parkour and obstacle courses
- Emergency evacuation

**Oraxen Configuration:**
```yaml
astra_gem:
  displayname: "<gradient:#A855F7:#EC4899>Astra Gem</gradient>"
  material: AMETHYST_SHARD
  PersistentData:
    gem_type: "ASTRA"
    max_distance: 50
    prevent_fall_damage: true
```

---

### Fire Gem

**Theme:** Offensive Fire Abilities

**Primary Ability: Fire Blast**
- **Effect:** Launches a fireball that explodes on impact
- **Activation:** Right-click to fire
- **Cooldown:** 20 seconds
- **Energy Cost:** 8% per use
- **Damage:** 6 hearts (12 HP) direct hit, 3 hearts (6 HP) splash
- **Particles:** Flame particles trailing projectile

**Special Properties:**
- Sets targets on fire for 5 seconds
- Small explosion radius (3 blocks)
- Can destroy certain blocks (configurable)
- Fire resistance while holding (if enabled)

**Strategic Uses:**
- Ranged combat advantage
- Area denial in PvP
- Mob farming efficiency
- Breaking ice and snow quickly
- Lighting furnaces from distance

**Oraxen Configuration:**
```yaml
fire_gem:
  displayname: "<gradient:#FF6B35:#F7931E>Fire Gem</gradient>"
  material: FIRE_CHARGE
  PersistentData:
    gem_type: "FIRE"
    damage: 12
    fire_duration: 100
```

---

### Flux Gem

**Theme:** Time and Space Distortion

**Primary Ability: Ground**
- **Effect:** Stuns target player for 5 seconds
- **Activation:** Right-click while looking at a player
- **Range:** 20 blocks
- **Duration:** 5 seconds
- **Cooldown:** 60 seconds (1 minute)
- **Energy Cost:** 12% per use
- **Particles:** Electric spark particles

**Special Properties:**
- Target cannot move or jump during stun
- Target's ender pearls and chorus fruits are disabled for 5 seconds
- Target can only eat golden apples during stun
- Target's mining and attack speed are drastically reduced

**Secondary Ability: Flux Ray** (Tier 2)
- **Effect:** Fires a continuous laser beam that damages entities
- **Activation:** Shift + Right-click to activate
- **Range:** 20 blocks
- **Duration:** 8 seconds (configurable 7-10s)
- **Cooldown:** 60 seconds (1 minute)
- **Damage:** 0.5 hearts per second (1 HP/second)
- **Particles:** Electric spark and end rod particles forming laser beam

**Strategic Uses:**
- Disable enemy players in PvP combat
- Prevent escapes via ender pearls
- Sustained damage over time with laser beam
- Area denial with continuous ray attack
- Combo potential with ground stun into laser damage

**Oraxen Configuration:**
```yaml
flux_gem:
  displayname: "<gradient:#00D9FF:#00FFF5>Flux Gem</gradient>"
  material: CLOCK
  PersistentData:
    gem_type: "FLUX"
    range: 20
    stun_duration: 100
    ray_duration: 160
```

---

### Life Gem

**Theme:** Healing and Regeneration

**Primary Ability: Instant Heal**
- **Effect:** Instantly restores health and removes negative effects
- **Activation:** Right-click to heal
- **Cooldown:** 25 seconds
- **Energy Cost:** 10% per use
- **Healing:** 6 hearts (12 HP) instant + regeneration
- **Particles:** Heart and cross particles

**Special Properties:**
- Removes poison, wither, and hunger effects
- Grants regeneration II for 5 seconds
- Can heal nearby allies (5-block radius if configured)
- Prevents death once per gem (if at PRISTINE+3 or higher)

**Strategic Uses:**
- Emergency healing in combat
- Counteract poison attacks
- Support role in team fights
- Hardcore survival safety
- Boss fight sustainability

**Oraxen Configuration:**
```yaml
life_gem:
  displayname: "<gradient:#4ADE80:#10B981>Life Gem</gradient>"
  material: GLISTERING_MELON_SLICE
  PersistentData:
    gem_type: "LIFE"
    heal_amount: 12
    regeneration_duration: 100
```

---

### Puff Gem

**Theme:** Cloud and Air Manipulation

**Primary Ability: Cloud Step**
- **Effect:** Creates temporary cloud platforms beneath player
- **Activation:** Right-click to toggle cloud walk mode
- **Duration:** 15 seconds or until deactivated
- **Cooldown:** 15 seconds
- **Energy Cost:** 5% activation + 1% per second active
- **Particles:** Cloud particles beneath feet

**Special Properties:**
- Creates temporary barriers (last 3 seconds each)
- Can walk on air up to 5 blocks high
- Platforms disappear after stepping away
- No fall damage while active
- Can create permanent clouds (admin-only)

**Strategic Uses:**
- Safe descent from heights
- Building at extreme heights
- Creating temporary bridges
- Elytra landing platforms
- Parkour courses

**Oraxen Configuration:**
```yaml
puff_gem:
  displayname: "<gradient:#E0E7FF:#C7D2FE>Puff Gem</gradient>"
  material: WHITE_DYE
  PersistentData:
    gem_type: "PUFF"
    platform_duration: 60
    max_height: 5
```

---

### Speed Gem

**Theme:** Enhanced Movement

**Primary Ability: Speed Burst**
- **Effect:** Grants massive speed boost
- **Activation:** Right-click for burst
- **Duration:** 8 seconds
- **Cooldown:** 10 seconds
- **Energy Cost:** 4% per use
- **Speed:** 300% normal movement speed
- **Particles:** Speed lines and dust particles

**Special Properties:**
- Jump boost II while active
- Slight hunger increase while running
- Reduced fall damage (50%)
- Can break speed limit (configurable)

**Strategic Uses:**
- Quick travel across distances
- Combat mobility and dodging
- Racing and parkour
- Escape from danger
- Exploration efficiency

**Oraxen Configuration:**
```yaml
speed_gem:
  displayname: "<gradient:#FCD34D:#F59E0B>Speed Gem</gradient>"
  material: SUGAR
  PersistentData:
    gem_type: "SPEED"
    speed_multiplier: 3
    duration: 160
```

---

### Strength Gem

**Theme:** Combat Power Enhancement

**Primary Ability: Power Strike**
- **Effect:** Amplifies damage and grants strength effect
- **Activation:** Right-click to activate
- **Duration:** 12 seconds
- **Cooldown:** 20 seconds
- **Energy Cost:** 7% per use
- **Damage Bonus:** +100% (double damage)
- **Particles:** Critical hit and flame particles

**Special Properties:**
- Knockback increased by 50%
- Breaks blocks faster while active
- Stacks with enchantments (sharpness, etc.)
- Critical hits deal triple damage

**Strategic Uses:**
- Boss fights and tough mobs
- PvP combat advantage
- One-shot weaker enemies
- Breaking obsidian faster
- Mining efficiency boost

**Oraxen Configuration:**
```yaml
strength_gem:
  displayname: "<gradient:#DC2626:#991B1B>Strength Gem</gradient>"
  material: BLAZE_POWDER
  PersistentData:
    gem_type: "STRENGTH"
    damage_multiplier: 2.0
    duration: 240
```

---

### Wealth Gem

**Theme:** Fortune and Prosperity

**Primary Ability: Fortune Blessing**
- **Effect:** Grants fortune and luck effects
- **Activation:** Right-click to activate
- **Duration:** 30 seconds
- **Cooldown:** 60 seconds
- **Energy Cost:** 15% per use
- **Particles:** Gold and emerald particles

**Special Properties:**
- Fortune III effect on all tools
- Increased mob drop rates (2x)
- Higher chance of rare loot
- Experience gain multiplier (1.5x)
- Rare: Duplicate drops (5% chance per item)

**Strategic Uses:**
- Efficient resource gathering
- Mining diamonds and ores
- Mob farm optimization
- Treasure hunting
- Enchantment leveling

**Oraxen Configuration:**
```yaml
wealth_gem:
  displayname: "<gradient:#FBBF24:#F59E0B>Wealth Gem</gradient>"
  material: GOLD_NUGGET
  PersistentData:
    gem_type: "WEALTH"
    fortune_level: 3
    duration: 600
```

---

## Ability Comparison

### By Cooldown (Fastest to Slowest)

1. Speed Gem - 10 seconds
2. Puff Gem - 15 seconds
3. Fire Gem - 20 seconds
4. Strength Gem - 20 seconds
5. Life Gem - 25 seconds
6. Astra Gem - 30 seconds
7. Flux Gem - 60 seconds
8. Wealth Gem - 60 seconds

### By Energy Cost (Lowest to Highest)

1. Speed Gem - 4%
2. Puff Gem - 5%
3. Strength Gem - 7%
4. Fire Gem - 8%
5. Astra Gem - 10%
6. Life Gem - 10%
7. Flux Gem - 12%
8. Wealth Gem - 15%

### By Use Case

**Combat:**
- Primary: Fire, Strength
- Secondary: Flux, Astra
- Support: Life

**Utility:**
- Primary: Wealth, Puff
- Secondary: Speed, Astra

**Mobility:**
- Primary: Astra, Speed
- Secondary: Puff

**Survival:**
- Primary: Life
- Secondary: Flux, Speed

## Tips & Tricks

### Maximizing Gem Usage

1. **Energy Management**
   - Monitor energy levels constantly
   - Repair before dropping below 50%
   - Keep backup gems for emergencies

2. **Cooldown Optimization**
   - Rotate between multiple gems
   - Plan ability usage in advance
   - Use lower cooldown gems more frequently

3. **Strategic Selection**
   - Match gems to your playstyle
   - Consider your current task
   - Adapt to server meta

4. **Preservation**
   - Use abilities sparingly
   - Avoid unnecessary activation
   - Keep gems in ender chest when not needed

::: tip Pro Strategy
Carry complementary gems in your hotbar. Switch between gems during cooldowns to maintain constant ability access!
:::

::: warning Energy Management
Higher-tier gems (PRISTINE+3 and above) have enhanced abilities. Maintain energy above 120% for maximum power!
:::

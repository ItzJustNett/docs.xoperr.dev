---
title: Configuration
description: Complete configuration reference for BlissGems
---

# Configuration Guide

Complete reference for configuring BlissGems, including all settings, options, and customization possibilities.

## Configuration Files

BlissGems uses multiple configuration files:

```
plugins/BlissGems/
├── config.yml          # Main configuration
├── gems.yml            # Gem definitions and abilities
├── messages.yml        # Customizable messages
└── data/               # Player data storage
```

## Main Configuration (config.yml)

### Complete Default Configuration

```yaml
# ========================================
# BlissGems Configuration
# ========================================

# General Settings
general:
  # Plugin prefix for messages
  prefix: "&8[&dBlissGems&8]&r"

  # Enable debug logging
  debug: false

  # Check for updates on startup
  update_checker: true

  # Language file to use
  language: "en_US"

# ========================================
# Energy System
# ========================================
energy:
  # Energy consumption settings
  consumption:
    # Global multiplier for all energy costs
    base_multiplier: 1.0

    # Reduce energy cost at higher gem states
    state_reduction: true

    # Allow enchantments to reduce energy cost
    enchant_reduction: true

    # Energy cost per ability use (percentage)
    costs:
      astra: 10
      fire: 8
      flux: 12
      life: 10
      puff: 5
      speed: 4
      strength: 7
      wealth: 15

  # Energy regeneration settings
  regeneration:
    # Enable natural regeneration
    enabled: true

    # Base regeneration rate (% per minute at PRISTINE)
    base_rate: 1.0

    # Regeneration rate when damaged (% per minute)
    damaged_rate: 0.5

    # Bonus multiplier when held in main hand
    held_multiplier: 2.0

    # Bonus multiplier in safe zones (spawn, claims)
    safe_zone_multiplier: 3.0

    # Regenerate while offline (stored in ender chest)
    offline_regeneration: false

    # Bonus regeneration during full moon
    lunar_bonus: true
    lunar_multiplier: 1.5

  # Energy state thresholds
  states:
    broken: 0
    damaged: 20
    worn: 40
    fair: 60
    good: 80
    pristine: 100
    max: 150

  # Special energy features
  features:
    # Can gems permanently break?
    permanent_break: false

    # Time in seconds at 0% before permanent break
    break_timeout: 3600

    # Chance for PRISTINE+5 gems to self-repair from BROKEN
    resurrection_chance: 0.05

    # Prevent ability spam (minimum time between uses in ticks)
    overheat_protection: true
    overheat_threshold: 20

    # Energy loss on death (percentage)
    death_penalty: 10

    # Energy loss when changing dimensions
    dimension_penalty: 5

# ========================================
# Ability Settings
# ========================================
abilities:
  # Enable gem abilities
  enabled: true

  # Require permissions to use abilities
  require_permission: false

  # Show particle effects
  particle_effects: true

  # Particle density (LOW, MEDIUM, HIGH)
  particle_density: MEDIUM

  # Play sound effects
  sound_effects: true

  # Sound volume (0.0 - 1.0)
  sound_volume: 0.7

  # Cooldown times (in seconds)
  cooldowns:
    astra: 30
    fire: 20
    flux: 45
    life: 25
    puff: 15
    speed: 10
    strength: 20
    wealth: 60

  # Cooldown reduction at PRISTINE+ states
  cooldown_reduction:
    pristine_plus_1: 0.10    # 10% reduction
    pristine_plus_2: 0.15    # 15% reduction
    pristine_plus_3: 0.20    # 20% reduction
    pristine_plus_4: 0.25    # 25% reduction
    pristine_plus_5: 0.30    # 30% reduction

# ========================================
# Gem-Specific Settings
# ========================================

# Astra Gem (Teleportation)
astra:
  enabled: true
  max_distance: 50
  prevent_fall_damage: true
  teleport_through_glass: true
  cross_dimension: false
  particles: "PORTAL"
  sound: "ENTITY_ENDERMAN_TELEPORT"

# Fire Gem (Fire Blast)
fire:
  enabled: true
  damage: 12
  fire_duration: 100        # ticks (5 seconds)
  explosion_radius: 3.0
  destroy_blocks: false
  fire_resistance: true     # Grant fire resistance while holding
  particles: "FLAME"
  sound: "ENTITY_BLAZE_SHOOT"

# Flux Gem (Time Manipulation)
flux:
  enabled: true
  radius: 15
  duration: 200             # ticks (10 seconds)
  slow_percentage: 0.5      # 50% speed
  user_speed_boost: 2.0     # 200% speed
  affect_projectiles: true
  affect_other_flux_users: false
  particles: "END_ROD"
  sound: "BLOCK_PORTAL_TRAVEL"

# Life Gem (Healing)
life:
  enabled: true
  heal_amount: 12           # Half-hearts
  remove_effects: true      # Remove negative effects
  regeneration_duration: 100 # ticks (5 seconds)
  regeneration_level: 2
  heal_nearby: true         # Heal nearby players
  heal_radius: 5.0
  death_prevention: true    # Prevent death once (PRISTINE+3 required)
  particles: "HEART"
  sound: "ENTITY_PLAYER_LEVELUP"

# Puff Gem (Cloud Step)
puff:
  enabled: true
  platform_duration: 60     # ticks (3 seconds)
  max_height: 5             # blocks
  prevent_fall_damage: true
  create_permanent: false   # Allow permanent clouds (admin only)
  block_type: "BARRIER"     # Platform block type
  particles: "CLOUD"
  sound: "ENTITY_SHEEP_AMBIENT"

# Speed Gem (Speed Boost)
speed:
  enabled: true
  speed_multiplier: 3.0     # 300% speed
  duration: 160             # ticks (8 seconds)
  jump_boost: true
  jump_level: 2
  hunger_increase: true     # Slightly increase hunger
  fall_damage_reduction: 0.5 # 50% reduction
  particles: "CRIT"
  sound: "ENTITY_HORSE_GALLOP"

# Strength Gem (Damage Boost)
strength:
  enabled: true
  damage_multiplier: 2.0    # Double damage
  duration: 240             # ticks (12 seconds)
  knockback_increase: 0.5   # 50% more knockback
  mining_speed_boost: true
  critical_multiplier: 3.0  # Triple damage on crits
  particles: "CRIT_MAGIC"
  sound: "ENTITY_ENDER_DRAGON_GROWL"

# Wealth Gem (Fortune)
wealth:
  enabled: true
  fortune_level: 3
  duration: 600             # ticks (30 seconds)
  increased_drops: true
  drop_multiplier: 2.0
  experience_multiplier: 1.5
  rare_loot_boost: true
  duplicate_chance: 0.05    # 5% chance to duplicate drops
  particles: "VILLAGER_HAPPY"
  sound: "ENTITY_EXPERIENCE_ORB_PICKUP"

# ========================================
# Repair System
# ========================================
repair:
  # Enable repair functionality
  enabled: true

  # Repair items and energy restored
  items:
    DIAMOND: 25
    EMERALD: 50
    NETHER_STAR: 100
    ECHO_SHARD: 150        # Allows supercharging to PRISTINE+5

  # Repair stations (block types that can repair gems)
  stations:
    enabled: true
    blocks:
      - BEACON
      - ENCHANTING_TABLE
      - SMITHING_TABLE
    repair_rate: 5          # % per second
    cost_per_percent: 0     # Experience cost (0 = free)

  # Experience repair
  experience_repair:
    enabled: true
    levels_per_percent: 0.2  # 5% per level
    max_per_use: 50         # Maximum % per repair

  # Automatic repair
  auto_repair:
    enabled: false
    location: "spawn"       # Where auto-repair works
    rate: 2                 # % per second
    free: true              # No cost

# ========================================
# Drops & Acquisition
# ========================================
drops:
  # Enable gem drops from mobs/blocks
  enabled: true

  # Drop from mobs
  mob_drops:
    enabled: true
    chance: 0.01            # 1% drop chance

    # Specific mob drop rates
    mobs:
      ENDER_DRAGON: 1.0     # 100% chance
      WITHER: 0.5           # 50% chance
      WARDEN: 0.3           # 30% chance
      ELDER_GUARDIAN: 0.1   # 10% chance

  # Drop from mining
  mining_drops:
    enabled: true

    # Block drop chances
    blocks:
      DIAMOND_ORE: 0.05     # 5% chance
      EMERALD_ORE: 0.05
      ANCIENT_DEBRIS: 0.10  # 10% chance

  # Fishing
  fishing_drops:
    enabled: true
    chance: 0.02            # 2% chance as treasure

  # Chest loot
  chest_loot:
    enabled: true
    chance: 0.15            # 15% in treasure chests

    # Chest types
    structures:
      - END_CITY
      - STRONGHOLD
      - BASTION
      - ANCIENT_CITY

# ========================================
# Display & Visuals
# ========================================
display:
  # Show energy in item lore
  show_energy: true

  # Show energy state name
  show_state: true

  # Show energy bar
  show_bar: true
  bar_length: 20
  bar_filled_char: "█"
  bar_empty_char: "░"

  # Color code by state
  color_coded: true

  # State colors
  colors:
    broken: "&4"      # Dark Red
    damaged: "&c"     # Red
    worn: "&6"        # Orange
    fair: "&e"        # Yellow
    good: "&a"        # Light Green
    pristine: "&2"    # Green
    pristine_plus: "&b" # Cyan

  # Item glow effect
  glow_effect:
    enabled: true
    pristine_only: false    # Glow on all states or just PRISTINE+

  # Custom model data (for resource packs)
  custom_model_data:
    enabled: true
    base_value: 1000        # Starting CMD value
    increment_per_state: 1  # +1 per state

# ========================================
# Compatibility
# ========================================
compatibility:
  # Oraxen integration
  oraxen:
    enabled: true
    namespace: "blissgems"  # Oraxen item namespace

  # WorldGuard integration
  worldguard:
    enabled: true
    respect_regions: true
    flag_name: "blissgems-use"

  # Towny integration
  towny:
    enabled: true
    respect_plots: true

  # GriefPrevention integration
  grief_prevention:
    enabled: true
    respect_claims: true

  # PlaceholderAPI
  placeholderapi:
    enabled: true

# ========================================
# Database & Storage
# ========================================
storage:
  # Storage type (YAML, SQLITE, MYSQL)
  type: "YAML"

  # MySQL settings (if type is MYSQL)
  mysql:
    host: "localhost"
    port: 3306
    database: "minecraft"
    username: "root"
    password: "password"
    table_prefix: "blissgems_"

  # Auto-save interval (in minutes)
  auto_save: 5

  # Backup player data
  backup:
    enabled: true
    interval: 1440          # minutes (24 hours)
    keep_backups: 7         # Number of backups to keep

# ========================================
# Performance
# ========================================
performance:
  # Async processing
  async_operations: true

  # Particle render distance (blocks)
  particle_distance: 32

  # Maximum gems per player
  max_gems_per_player: 64

  # Cache duration (seconds)
  cache_duration: 300

  # Tick rate for energy regeneration (higher = less frequent)
  regeneration_tick_rate: 100
```

## Gems Configuration (gems.yml)

Define custom gem types or modify existing ones:

```yaml
gems:
  custom_gem:
    # Display settings
    display_name: "<gradient:#FF00FF:#00FFFF>Custom Gem</gradient>"

    # Oraxen item ID
    oraxen_id: "custom_gem"

    # Base material (fallback if Oraxen fails)
    material: "DIAMOND"

    # Ability configuration
    ability:
      type: "CUSTOM"
      cooldown: 30
      energy_cost: 10

      # Custom ability parameters
      parameters:
        effect: "SPEED"
        duration: 200
        amplifier: 2

    # Permission required
    permission: "blissgems.use.custom"

    # Energy settings
    energy:
      max: 150
      default: 100
      regeneration_rate: 1.0

    # Rarity (affects drop rates)
    rarity: "RARE"
```

## Messages Configuration (messages.yml)

Customize all plugin messages:

```yaml
messages:
  # Command messages
  commands:
    no_permission: "&cYou don't have permission to use this command!"
    player_only: "&cThis command can only be used by players!"
    invalid_gem: "&cInvalid gem type: {gem}"
    invalid_player: "&cPlayer not found: {player}"

  # Usage messages
  usage:
    ability_used: "&aActivated {gem} ability!"
    cooldown: "&cAbility on cooldown: {time} seconds remaining"
    no_energy: "&cNot enough energy! ({energy}% remaining)"
    gem_broken: "&4Your {gem} is BROKEN! Repair it to use abilities."

  # Energy messages
  energy:
    low_warning: "&eWarning: {gem} energy low ({energy}%)"
    critical_warning: "&4CRITICAL: {gem} nearly broken ({energy}%)"
    repaired: "&aGem repaired to {energy}% ({state})"
    regenerated: "&aGem energy restored to {energy}%"

  # State changes
  states:
    damaged: "&cYour {gem} is now DAMAGED!"
    worn: "&6Your {gem} is now WORN."
    fair: "&eYour {gem} is now FAIR."
    good: "&aYour {gem} is now GOOD!"
    pristine: "&2Your {gem} is now PRISTINE!"
    pristine_plus: "&b✦ Your {gem} achieved {state}! ✦"
```

## Advanced Configuration

### Custom Abilities

Create custom gem abilities:

```yaml
custom_abilities:
  telekinesis:
    type: "PULL_ITEMS"
    radius: 10
    duration: 100
    cooldown: 30
    energy_cost: 8

  flight:
    type: "CREATIVE_FLIGHT"
    duration: 200
    cooldown: 60
    energy_cost: 15
    height_limit: 256
```

### Permission Groups

Configure permission-based features:

```yaml
permission_groups:
  vip:
    energy_bonus: 1.2         # 20% more max energy
    cooldown_reduction: 0.10   # 10% faster cooldowns
    repair_discount: 0.25      # 25% cheaper repairs

  premium:
    energy_bonus: 1.5
    cooldown_reduction: 0.20
    repair_discount: 0.50
    free_repairs: true
```

## Configuration Tips

### Performance Optimization

1. **Reduce particle density** for servers with many players
2. **Increase regeneration_tick_rate** to reduce CPU usage
3. **Enable async_operations** for better performance
4. **Use SQLITE or MYSQL** for large player bases

### Balance Adjustments

1. **Increase cooldowns** to prevent ability spam
2. **Reduce energy costs** to make gems more usable
3. **Adjust drop rates** based on server economy
4. **Modify damage values** for PvP balance

### Customization Ideas

1. **Create themed gems** for your server
2. **Adjust abilities** to match your gameplay
3. **Configure custom repair items** for economy integration
4. **Set up permission tiers** for donor perks

## Reload Configuration

Apply changes without restarting:

```bash
/blissgems reload
```

::: tip Configuration Validation
BlissGems validates configuration on load. Check console for errors if settings don't apply!
:::

::: warning Backup First
Always backup config files before making major changes. Invalid configurations may prevent the plugin from loading!
:::

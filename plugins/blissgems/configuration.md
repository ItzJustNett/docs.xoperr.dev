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
    # Primary ability cooldowns
    astra_daggers: 15
    fire_fireball: 10
    flux_beam: 60
    life_drainer: 30
    puff_dash: 5
    speed_sedative: 35
    strength_bloodthorns: 20
    wealth_durability: 30

    # Secondary (Tier 2) ability cooldowns
    astra_projection: 60
    fire_campfire: 60
    flux_ground: 20
    life_circle: 60
    puff_bash: 10
    speed_storm: 45
    strength_frailer: 25
    wealth_rich_rush: 540

    # Tertiary/Quaternary ability cooldowns
    astra_drift: 90
    astra_void: 120
    fire_crisp: 90
    fire_meteor: 120
    speed_adrenaline: 90

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

# Astra Gem (Astral Daggers & Projection)
astra:
  enabled: true
  # Astral Daggers
  daggers_damage: 4.0
  daggers_count: 3
  daggers_spread: 15           # degrees
  daggers_range: 15            # blocks
  # Astral Projection
  projection_duration: 5       # seconds
  projection_radius: 150       # blocks
  # Dimensional Drift
  drift_duration: 15           # seconds
  # Dimensional Void
  void_radius: 10              # blocks
  void_duration: 8             # seconds
  # Soul mechanics
  max_captured_souls: 2
  phase_chance: 0.15           # 15% chance to negate damage
  particles: "ELECTRIC_SPARK"
  sound: "ENTITY_ENDERMAN_TELEPORT"

# Fire Gem (Charged Fireball)
fire:
  enabled: true
  # Charged Fireball
  fireball_damage_min: 6.0
  fireball_damage_max: 18.0
  fireball_charge_time: 15     # seconds
  # Cozy Campfire
  campfire_radius: 5           # blocks
  campfire_duration: 15        # seconds
  campfire_healing: 0.4        # HP per second
  campfire_burn_damage: 2.0    # HP per second
  campfire_regen_level: 4
  # Crisp ability
  crisp_radius: 10             # blocks
  crisp_duration: 15           # seconds
  # Meteor Shower
  meteor_aoe: 8                # blocks
  meteor_damage: 5.0           # HP per meteor
  meteor_range: 50             # blocks sight range
  fire_resistance: true        # Grant fire resistance while holding
  particles: "FLAME"
  sound: "ENTITY_BLAZE_SHOOT"

# Flux Gem (Flux Beam & Ground)
flux:
  enabled: true
  # Flux Beam ability settings
  beam_range: 30            # blocks
  beam_damage_base: 5.0     # HP uncharged
  beam_charge_time: 15      # seconds
  beam_armor_damage: 150    # durability at 100% charge
  # Ground ability settings
  ground_range: 15          # blocks
  ground_stun_duration: 3   # seconds (Slowness 255 + Mining Fatigue 255)
  # Flow State passive
  flow_max_level: 5
  flow_timeout: 3           # seconds
  # Shocking Arrows passive
  shocking_arrow_damage: 2.5 # HP
  shocking_arrow_cooldown: 8 # seconds

  particles: "ELECTRIC_SPARK"
  sound: "ENTITY_LIGHTNING_BOLT_THUNDER"

# Life Gem (Heart Drainer & Circle of Life)
life:
  enabled: true
  # Heart Drainer ability
  drainer_range: 15         # blocks
  drainer_duration: 20      # seconds (Wither II)
  # Circle of Life ability
  circle_radius: 8          # blocks
  circle_duration: 10       # seconds
  circle_caster_regen: 3    # Regen level III
  circle_enemy_wither: 2    # Wither II level
  # Passive healing
  passive_heal_t1: 0.3      # hearts per tick
  passive_heal_t2: 0.5      # hearts per tick
  # Undead damage bonus
  undead_damage_t1: 2.0     # 2x multiplier
  undead_damage_t2: 3.0     # 3x multiplier
  # Golden Apple bonus
  golden_apple_absorption_t1: 1
  golden_apple_absorption_t2: 2
  particles: "HEART"
  sound: "ENTITY_PLAYER_LEVELUP"

# Puff Gem (Dash & Breezy Bash)
puff:
  enabled: true
  # Dash ability
  dash_velocity: 2.5        # direction multiplier
  dash_vertical_boost: 0.3  # Y velocity
  dash_t2_damage: 2.0       # HP damage to nearby mobs
  # Breezy Bash ability
  bash_velocity: 2.0        # Y velocity (launch up)
  bash_fall_immunity: 10    # seconds
  # Passives
  prevent_fall_damage: true # Always true
  double_jump_t1: 0.6       # velocity
  double_jump_t2: 0.8       # velocity
  launch_on_hit: true       # Hitting with mainhand launches
  sculk_immunity_t2: true   # T2 only: sculk shriekers/sensors don't trigger
  particles: "CLOUD"
  sound: "ENTITY_SHEEP_AMBIENT"

# Speed Gem (Speed Abilities)
speed:
  enabled: true
  # Sloth's Sedative ability
  sedative_radius: 10       # blocks
  sedative_slowness: 4      # level IV
  sedative_fatigue: 3       # level III
  sedative_duration: 10     # seconds
  # Speed Storm ability
  storm_speed_level: 6      # Speed VI
  storm_duration: 10        # seconds
  # Adrenaline Rush ability
  adrenaline_duration: 6    # seconds combat mode
  adrenaline_speed_max: 10  # max Speed X at 10 energy
  adrenaline_remove_cooldown: true  # removes weapon attack cooldown
  # Speed passives
  passive_speed_t1: 1       # Speed I
  passive_speed_t2: 2       # Speed II
  particles: "CRIT"
  sound: "ENTITY_HORSE_GALLOP"

# Strength Gem (Strength Abilities)
strength:
  enabled: true
  # Bloodthorns ability
  bloodthorns_radius: 5     # blocks AoE
  bloodthorns_base_damage: 5.0  # HP base
  bloodthorns_health_scaling: true  # damage scales with health %
  # Frailer Power ability (T2)
  frailer_range: 15         # blocks
  frailer_weakness: 3       # level III for 10s
  frailer_wither: 2         # level II for 5s
  # Chad Strength ability (T2)
  chad_strength_level: 2    # Strength II
  chad_resistance_level: 2  # Resistance II
  chad_duration: 10         # seconds
  # Passive strength
  passive_strength_t1: 1    # Strength I
  passive_strength_t2: 2    # Strength II
  # Critical hit tracking
  critical_hits_per_charge_t1: 8
  critical_hits_per_charge_t2: 3
  particles: "CRIT_MAGIC"
  sound: "ENTITY_ENDER_DRAGON_GROWL"

# Wealth Gem (Fortune & Economy)
wealth:
  enabled: true
  # Durability Chip ability
  durability_chip_toggle: true  # toggle 2x durability damage on tools
  # Rich Rush ability (T2)
  rich_rush_haste_level: 3  # Haste III
  rich_rush_luck_level: 4   # Luck IV
  rich_rush_duration: 120   # seconds (2 minutes)
  # Pockets ability (T2)
  pockets_slots: 9          # personal inventory size
  # Amplify ability (T2)
  amplify_max_level: 5      # max potion effect level
  amplify_duration: 45      # seconds
  # Auto-smelt ability (T2)
  autosmelt_enabled: true   # toggle on/off
  # Unfortunate ability (T1+T2)
  unfortunate_unluck_level: 3  # Unluck III
  unfortunate_duration: 40  # seconds
  unfortunate_range: 15     # blocks
  # Passives
  passive_luck_t1: 1        # Luck I
  passive_luck_t2: 2        # Luck II
  hero_of_village: true     # Always active
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

---
title: Configuration
description: Complete configuration reference for BetterStasis
---

# Configuration Guide

Complete reference for configuring BetterStasis, including all settings, options, and customization possibilities.

## Configuration Files

BetterStasis uses the following configuration files:

```
plugins/BetterStasis/
├── config.yml          # Main configuration
├── messages.yml        # Customizable messages
└── data/               # Pearl data storage
    ├── stasis.db       # SQLite database (if using SQLite)
    └── pearls/         # YAML storage (if using YAML)
```

## Main Configuration (config.yml)

### Complete Default Configuration

```yaml
# ========================================
# BetterStasis Configuration
# ========================================

# General Settings
general:
  # Enable the plugin
  enabled: true

  # Plugin prefix for messages
  prefix: "&8[&bStasis&8]&r"

  # Debug mode (verbose logging)
  debug: false

  # Check for updates on startup
  update_checker: true

  # Language file
  language: "en_US"

# ========================================
# Stasis Settings
# ========================================
stasis:
  # Stasis timeout in seconds
  # 0 = infinite, -1 = disabled
  timeout: 3600  # 1 hour

  # Warn players before timeout (seconds before expiration)
  timeout_warning: 300  # 5 minutes

  # Maximum stasis pearls per player
  # -1 = unlimited
  max_pearls_per_player: 3

  # Minimum distance for stasis creation (blocks)
  # Prevents creating stasis too close to player
  min_distance: 0

  # Maximum distance for stasis creation (blocks)
  # -1 = unlimited
  max_distance: -1

  # Pearl detection settings
  detection:
    # How often to check for stasis conditions (ticks)
    check_interval: 20  # 1 second

    # Require bubble column for stasis
    require_bubble_column: true

    # Allow stasis in any water (not just bubble columns)
    allow_water_stasis: false

    # Minimum time pearl must be in stasis condition (ticks)
    min_stasis_time: 40  # 2 seconds

# ========================================
# Teleportation Settings
# ========================================
teleportation:
  # Enable safe teleportation (check landing location)
  safe_teleport: true

  # Safe teleport radius to search for safe location (blocks)
  safe_radius: 5

  # Prevent teleporting into:
  prevent:
    solid_blocks: true
    lava: true
    void: true
    fire: true

  # Teleport cooldown after using stasis (seconds)
  # 0 = no cooldown
  cooldown: 0

  # Cross-dimensional teleportation
  cross_dimension:
    enabled: true
    overworld_to_nether: true
    overworld_to_end: true
    nether_to_overworld: true
    nether_to_end: false
    end_to_overworld: true
    end_to_nether: false

  # Effects and visuals
  effects:
    # Play sound on teleport
    sound: true
    sound_type: "ENTITY_ENDERMAN_TELEPORT"
    sound_volume: 1.0

    # Particle effects
    particles: true
    particle_type: "PORTAL"
    particle_count: 50

    # Blindness effect duration (ticks)
    # 0 = disabled
    blindness_duration: 20  # 1 second

# ========================================
# Chunk Loading
# ========================================
chunk_loading:
  # Enable chunk loading at pearl locations
  enabled: true

  # Chunk loading method
  # PAPER - Use Paper's chunk ticket system (recommended)
  # TICKET - Use Bukkit's chunk ticket system
  # PLUGIN - Force load chunks (may cause lag)
  method: "PAPER"

  # Radius of chunks to keep loaded (chunks, not blocks)
  radius: 1

  # Unload delay after teleport (seconds)
  unload_delay: 60

  # Keep chunks loaded even after pearl expires
  persist_after_expire: false

# ========================================
# Anti-Cheat Integration
# ========================================
anti_cheat:
  # Enable anti-cheat bypass
  enabled: true

  # Bypass method
  # PERMISSION - Give temporary bypass permission
  # EVENT - Cancel anti-cheat violation events
  # BOTH - Use both methods
  method: "BOTH"

  # Temporary bypass duration (ticks)
  bypass_duration: 100  # 5 seconds

  # Supported anti-cheat plugins
  supported:
    - "NoCheatPlus"
    - "AAC"
    - "Vulcan"
    - "Matrix"
    - "Spartan"

# ========================================
# Notifications
# ========================================
notifications:
  # Enable notification system
  enabled: true

  # Pearl created notification
  pearl_created: true

  # Pearl expired notification
  pearl_expired: true

  # Pearl triggered notification
  pearl_triggered: true

  # Pearl timeout warning
  timeout_warning: true

  # Pearl canceled notification
  pearl_canceled: true

  # Send notifications to action bar (instead of chat)
  use_action_bar: false

  # Notification sounds
  sounds:
    enabled: true
    created: "ENTITY_EXPERIENCE_ORB_PICKUP"
    expired: "ENTITY_ITEM_BREAK"
    triggered: "ENTITY_ENDERMAN_TELEPORT"
    warning: "BLOCK_NOTE_BLOCK_PLING"

# ========================================
# Permissions & Limits
# ========================================
permissions:
  # Require permission to create stasis
  require_use_permission: true

  # Require permission to list stasis
  require_list_permission: false

  # Permission-based limits
  # Override max_pearls_per_player for specific permissions
  limits:
    "betterstasis.limit.5": 5
    "betterstasis.limit.10": 10
    "betterstasis.limit.20": 20
    "betterstasis.unlimited": -1

  # Bypass restrictions
  bypass:
    timeout: "betterstasis.bypass.timeout"
    cooldown: "betterstasis.bypass.cooldown"
    distance: "betterstasis.bypass.distance"
    max_pearls: "betterstasis.bypass.limit"

# ========================================
# Storage Settings
# ========================================
storage:
  # Storage type
  # YAML - Flat file storage (simple, small servers)
  # SQLITE - SQLite database (recommended)
  # MYSQL - MySQL database (large servers)
  type: "SQLITE"

  # Auto-save interval (seconds)
  auto_save: 60

  # YAML settings (if type is YAML)
  yaml:
    # Save player data in separate files
    separate_files: true

  # SQLite settings (if type is SQLITE)
  sqlite:
    # Database file name
    file: "stasis.db"

  # MySQL settings (if type is MYSQL)
  mysql:
    host: "localhost"
    port: 3306
    database: "minecraft"
    username: "root"
    password: "password"
    table_prefix: "betterstasis_"

    # Connection pool settings
    pool:
      maximum_pool_size: 10
      minimum_idle: 5
      connection_timeout: 30000

  # Backup settings
  backup:
    enabled: true
    interval: 86400  # 24 hours in seconds
    keep_backups: 7
    compress: true

# ========================================
# Performance Settings
# ========================================
performance:
  # Use async operations for database queries
  async_operations: true

  # Cache duration for pearl data (seconds)
  cache_duration: 300

  # Maximum pearls to process per tick
  max_pearls_per_tick: 10

  # Optimize pearl tracking
  optimize_tracking: true

  # Reduce particle effects under high TPS load
  reduce_effects_on_lag: true
  lag_threshold: 18.0  # TPS threshold

# ========================================
# Advanced Settings
# ========================================
advanced:
  # Pearl entity settings
  pearl:
    # Prevent pearl despawn
    prevent_despawn: true

    # Pearl glowing effect
    glowing: false

    # Custom pearl name
    custom_name: "&bStasis Pearl"
    show_name: false

  # Trigger settings
  trigger:
    # Methods to trigger stasis
    methods:
      break_bubble_column: true
      pearl_collision: true
      manual_trigger: true

    # Delay before teleport (ticks)
    delay: 0

  # Integration settings
  integration:
    # WorldGuard integration
    worldguard:
      enabled: true
      respect_regions: true
      flag_name: "stasis-use"

    # GriefPrevention integration
    grief_prevention:
      enabled: true
      respect_claims: true
      allow_in_own_claim: true

    # Towny integration
    towny:
      enabled: true
      respect_plots: true

    # Factions integration
    factions:
      enabled: true
      respect_territory: true

    # PlaceholderAPI
    placeholderapi:
      enabled: true

  # Experimental features
  experimental:
    # Pearl sharing (allow triggering others' pearls)
    pearl_sharing: false

    # Pearl trading
    pearl_trading: false

    # Portal-based stasis
    portal_stasis: false
```

## Messages Configuration (messages.yml)

Customize all plugin messages:

```yaml
# ========================================
# BetterStasis Messages
# ========================================

# General messages
general:
  prefix: "&8[&bStasis&8]&r "
  no_permission: "{prefix}&cYou don't have permission to do that!"
  player_only: "{prefix}&cThis command can only be used by players!"
  reload_success: "{prefix}&aConfiguration reloaded successfully!"
  invalid_number: "{prefix}&cInvalid number: {input}"

# Stasis creation messages
creation:
  success: "{prefix}&aStasis pearl created! &7(ID: #{id})"
  success_details: "{prefix}&aLocation: &7{world} ({x}, {y}, {z})"
  success_timeout: "{prefix}&aTimeout: &7{timeout}"

  failed: "{prefix}&cFailed to create stasis pearl!"
  limit_reached: "{prefix}&cYou've reached your stasis pearl limit! &7({current}/{max})"
  too_close: "{prefix}&cToo close to create stasis! Minimum distance: {distance} blocks"
  too_far: "{prefix}&cToo far to create stasis! Maximum distance: {distance} blocks"
  cooldown: "{prefix}&cYou must wait {time} before creating another stasis pearl!"

# Stasis list messages
list:
  header: "&8&m          &r &b&lActive Stasis Pearls &8&m          "
  entry: "&7#{id} &8- &f{world} &7({distance} blocks) &8- &e{timeout} remaining"
  footer: "&7Total: &b{count}&7/&b{max} &7pearls active"
  empty: "{prefix}&7You don't have any active stasis pearls."

# Stasis info messages
info:
  header: "&8&m          &r &b&lStasis Pearl #{id} &8&m          "
  created: "&7Created: &f{time} ago"
  world: "&7World: &f{world}"
  location: "&7Location: &fx: {x}, y: {y}, z: {z}"
  distance: "&7Distance: &f{distance} blocks"
  timeout: "&7Timeout: &e{timeout} remaining"
  status: "&7Status: &a{status}"
  chunks_loaded: "&7Chunks Loaded: &f{loaded}"

  not_found: "{prefix}&cStasis pearl not found: #{id}"

# Teleport messages
teleport:
  triggered: "{prefix}&aTeleporting to stasis pearl..."
  success: "{prefix}&aSuccessfully teleported!"

  failed: "{prefix}&cTeleportation failed!"
  unsafe: "{prefix}&cUnsafe teleport location detected!"
  expired: "{prefix}&cStasis pearl has expired!"
  cooldown: "{prefix}&cTeleport on cooldown: {time} remaining"

# Timeout messages
timeout:
  warning: "{prefix}&eWarning: Stasis pearl #{id} will expire in {time}!"
  expired: "{prefix}&cStasis pearl #{id} has expired and was removed."

# Cancel messages
cancel:
  success: "{prefix}&aStasis pearl #{id} canceled."
  all_success: "{prefix}&aAll stasis pearls canceled. &7({count} removed)"
  not_found: "{prefix}&cStasis pearl not found: #{id}"

# Admin messages
admin:
  list_other: "&7{player}'s stasis pearls:"
  cancel_other: "{prefix}&aCanceled {player}'s stasis pearl #{id}."
  clear_all: "{prefix}&aCleared all stasis pearls. &7({count} removed)"

# Error messages
error:
  database: "{prefix}&cDatabase error! Check console for details."
  save_failed: "{prefix}&cFailed to save stasis data!"
  load_failed: "{prefix}&cFailed to load stasis data!"
```

## Permission Nodes

### User Permissions

```yaml
betterstasis.use              # Create stasis pearls
betterstasis.list             # List own stasis pearls
betterstasis.info             # View pearl information
betterstasis.cancel           # Cancel own stasis pearls
betterstasis.trigger          # Trigger stasis pearls
```

### Limit Permissions

```yaml
betterstasis.limit.3          # 3 pearl limit
betterstasis.limit.5          # 5 pearl limit
betterstasis.limit.10         # 10 pearl limit
betterstasis.limit.20         # 20 pearl limit
betterstasis.unlimited        # Unlimited pearls
```

### Bypass Permissions

```yaml
betterstasis.bypass.timeout   # No timeout on stasis pearls
betterstasis.bypass.cooldown  # No teleport cooldown
betterstasis.bypass.distance  # No distance restrictions
betterstasis.bypass.limit     # Bypass pearl limit
```

### Admin Permissions

```yaml
betterstasis.admin            # Full admin access
betterstasis.reload           # Reload configuration
betterstasis.list.others      # View others' pearls
betterstasis.cancel.others    # Cancel others' pearls
betterstasis.clearall         # Clear all pearls
betterstasis.*                # Wildcard (all permissions)
```

## PlaceholderAPI Placeholders

If PlaceholderAPI is installed:

```
%betterstasis_count%           # Number of active pearls
%betterstasis_max%             # Maximum pearls allowed
%betterstasis_available%       # Remaining pearl slots
%betterstasis_nearest_id%      # ID of nearest pearl
%betterstasis_nearest_distance% # Distance to nearest pearl
%betterstasis_cooldown%        # Teleport cooldown remaining
```

**Usage Example:**
```yaml
# In scoreboard or chat
Active Pearls: %betterstasis_count%/%betterstasis_max%
Nearest Pearl: %betterstasis_nearest_distance% blocks
```

## Configuration Examples

### Competitive PvP Server

```yaml
stasis:
  timeout: 600  # 10 minutes (short duration)
  max_pearls_per_player: 1  # Limited pearls

teleportation:
  safe_teleport: false  # No safety checks
  cooldown: 300  # 5 minute cooldown
  cross_dimension:
    enabled: false  # No dimension hopping

chunk_loading:
  enabled: false  # No chunk loading (performance)
```

### Technical/Creative Server

```yaml
stasis:
  timeout: 0  # Infinite duration
  max_pearls_per_player: -1  # Unlimited pearls

teleportation:
  safe_teleport: true
  cooldown: 0  # No cooldown
  cross_dimension:
    enabled: true  # Full dimension support

chunk_loading:
  enabled: true  # Always keep loaded
  method: "PAPER"
```

### Survival SMP

```yaml
stasis:
  timeout: 7200  # 2 hours
  max_pearls_per_player: 5  # Moderate limit

teleportation:
  safe_teleport: true
  cooldown: 60  # 1 minute cooldown
  cross_dimension:
    enabled: true
    nether_to_end: false  # Prevent Nether->End

chunk_loading:
  enabled: true
  unload_delay: 300  # 5 minutes
```

## Troubleshooting Configuration

### Pearls Expire Too Quickly

**Increase timeout:**
```yaml
stasis:
  timeout: 86400  # 24 hours
```

### Performance Issues

**Optimize settings:**
```yaml
performance:
  async_operations: true
  max_pearls_per_tick: 5
  reduce_effects_on_lag: true

chunk_loading:
  enabled: false  # Disable if causing lag
```

### Players Creating Too Many Pearls

**Reduce limits:**
```yaml
stasis:
  max_pearls_per_player: 3

teleportation:
  cooldown: 300  # 5 minute cooldown
```

## Best Practices

1. **Start Conservative** - Begin with strict limits, relax as needed
2. **Monitor Performance** - Watch TPS with `/tps` command
3. **Regular Backups** - Enable automatic backups
4. **Test Changes** - Test configuration in development first
5. **Document Settings** - Comment your custom configurations

::: tip Configuration Testing
After changing configuration, use `/stasis reload` to apply changes. Test with a single player before announcing to entire server!
:::

::: warning Database Changes
Changing storage type requires data migration. Backup your data before switching from YAML to SQLite or MySQL!
:::

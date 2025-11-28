---
title: Usage Guide
description: Step-by-step guide to using BetterStasis stasis chambers
---

# Usage Guide

Complete guide to creating, managing, and using stasis pearls with BetterStasis.

## Understanding Stasis Mechanics

### How Stasis Works

When an ender pearl is thrown into specific conditions (like a bubble column), it can enter "stasis" - a state where:

1. **Pearl Stays Active** - Doesn't land or despawn
2. **Player Tracks** - Can see pearl status anytime
3. **Trigger on Break** - Breaking chamber teleports player
4. **Cross-Dimensional** - Works across dimensions (if enabled)

### Requirements for Stasis

A pearl enters stasis when:
- Thrown into an upward bubble column (soul sand + water)
- Player has permission to create stasis
- Player hasn't reached their pearl limit
- Chamber is in loaded chunks

## Stasis Chamber Designs

### Basic Chamber (Recommended for Beginners)

**Difficulty:** Easy
**Materials:** 1 Soul Sand, 4 Glass, Water
**Dimensions:** 1x6x1

```
Top View:     Side View:
[G][G][G]     [G] <- Layer 6 (cap)
[G][W][G]     [G]
[G][W][G]     [G] <- Layer 5
[G][W][G]     [G]
              [G] <- Layer 4
              [G]
              [G] <- Layer 3
              [W]
              [W] <- Layer 2
              [S] <- Layer 1 (soul sand)

Legend: [S] = Soul Sand, [W] = Water, [G] = Glass
```

**Steps:**
1. Place soul sand on ground
2. Build 1x4 glass tube around it (leave top open)
3. Pour water from top
4. Verify bubbles rising
5. Place glass cap on top (leave small opening)
6. Throw pearl through opening

**Triggering:** Break any glass block to release pearl

---

### Compact Chamber

**Difficulty:** Easy
**Materials:** 1 Soul Sand, 8 Glass, Water, 1 Button
**Dimensions:** 3x5x3

```
Layer 5 (Top):
[G][B][G]    B = Button (trigger)
[G][G][G]
[G][G][G]

Layers 2-4:
[G][G][G]
[G][W][G]    W = Water/Bubbles
[G][G][G]

Layer 1 (Bottom):
[G][G][G]
[G][S][G]    S = Soul Sand
[G][G][G]
```

**Steps:**
1. Build 3x3 glass floor
2. Place soul sand in center
3. Build glass walls 4 blocks high
4. Fill center with water
5. Add button to top for triggering
6. Throw pearl into bubbles

**Triggering:** Press button (button triggers piston to break glass)

---

### Advanced Remote Trigger

**Difficulty:** Advanced
**Materials:** Soul Sand, Glass, Water, Redstone, Piston, Lever
**Dimensions:** Variable

```
Remote Trigger Setup:

[Chamber]  ----[Redstone]----  [Lever]
   |               |               |
[Pearl]       [Signal]        [Trigger]
                                (Can be 100+ blocks away)

Chamber Detail:
[G][G][G]
[G][W][G] <- Piston can push into here
[G][W][G]
[P][S][P]    P = Piston pointing at water

Redstone Trail:
Connect lever to piston with redstone
```

**Steps:**
1. Build standard chamber
2. Add piston pointing at water column
3. Connect piston to remote lever with redstone
4. Throw pearl into chamber
5. Activate lever from anywhere to trigger

**Triggering:** Flip lever (piston breaks water, pearl lands)

---

### Multi-Pearl System

**Difficulty:** Expert
**Materials:** Multiple chambers, labeled chests, item frames
**Purpose:** Multiple destinations

```
Base Layout:

[Chamber 1] <- Labeled "Home"
[Chamber 2] <- Labeled "Nether Hub"
[Chamber 3] <- Labeled "End Farm"
[Chamber 4] <- Labeled "Mining"

Each with individual triggers:
[Lever 1] [Lever 2] [Lever 3] [Lever 4]
```

**Organization:**
1. Build 4+ chambers in a row
2. Label each with item frames
3. Create individual trigger mechanisms
4. Maintain pearl inventory system
5. Use `/stasis list` to track all pearls

**Management Commands:**
```bash
# Check all pearls
/stasis list

# See specific pearl details
/stasis info 1
/stasis info 2
# etc.
```

---

### Hidden Chamber (Stealth Design)

**Difficulty:** Advanced
**Materials:** Soul Sand, Water, Grass/Stone, Hidden pistons
**Purpose:** Concealed stasis point

```
Surface View:        Underground:
[Grass][Grass]       [G][G][G]
[Grass][Grass]       [G][W][G] <- 3 blocks down
                     [G][W][G]
Hidden Trigger:      [S][S][S]
[Button in tree]
```

**Steps:**
1. Dig 4 blocks underground
2. Build chamber below surface
3. Cover with grass/natural blocks
4. Create hidden trigger mechanism
5. Mark location with subtle landmark

**Use Case:** Secret escape routes, hidden teleports

## Commands & Management

### Viewing Your Stasis Pearls

**List all active pearls:**
```bash
/stasis list
```

**Output:**
```
=== Active Stasis Pearls ===
#1 - Overworld (256 blocks away) - 45m remaining
#2 - Nether (1024 blocks away) - 2h 15m remaining
#3 - End (512 blocks away) - 30m remaining

Total: 3/5 pearls active
```

**Detailed pearl information:**
```bash
/stasis info 1
```

**Output:**
```
=== Stasis Pearl #1 ===
Created: 15 minutes ago
Location: Overworld
  X: 1000
  Y: 64
  Z: -500
Distance: 256 blocks
Timeout: 45 minutes remaining
Status: Active
Chunks Loaded: Yes
```

### Managing Pearls

**Cancel a stasis pearl:**
```bash
/stasis cancel 1
```

Removes pearl #1 from stasis (pearl despawns).

**Cancel all your pearls:**
```bash
/stasis clear
```

Removes all your stasis pearls.

**Get teleport location:**
```bash
/stasis coords 1
```

Shows exact coordinates of pearl #1.

### Admin Commands

**View another player's pearls:**
```bash
/stasis list <player>
```

**Force cancel a pearl:**
```bash
/stasis cancel <player> <pearl_id>
```

**Clear all server pearls:**
```bash
/stasis clearall
```

**Reload configuration:**
```bash
/stasis reload
```

## Practical Applications

### Long-Distance Travel

**Setup:**
1. Build chamber at spawn
2. Create pearl in chamber
3. Travel to destination (exploring, building, etc.)
4. Trigger pearl to return instantly to spawn

**Example:**
```
You're 10,000 blocks from spawn mining.
Inventory full, need to return.
/stasis list -> Pearl #1 at spawn
Trigger pearl -> Instant teleport to spawn
```

### Base Network

**Setup:**
1. Build chamber at each base
2. Create pearl in each chamber
3. Label each chamber clearly
4. Use triggers to travel between bases

**Example Network:**
- Base 1: Main base (spawn area)
- Base 2: Mining operation (5000, -3000)
- Base 3: Farm complex (-2000, 4000)
- Base 4: End portal (500, 500)

### Emergency Escape

**Setup:**
1. Build hidden chamber at safe location
2. Create pearl in chamber
3. Keep trigger accessible (hotbar button/lever)
4. Use in emergencies

**Use Cases:**
- Escape PvP combat
- Leave dangerous areas quickly
- Return from Nether/End
- Avoid death situations

### Event Teleportation

**Setup:**
1. Build chambers at event locations
2. Create pearls before event
3. Trigger to teleport participants
4. Clean up after event

**Example:**
```
Event: PvP Arena Tournament
Setup: Pearl chamber at arena entrance
Players: Create pearls, wait at gathering point
Start: Trigger pearls -> All teleport to arena
```

### Exploration Safety Net

**Setup:**
1. Build chamber at home/spawn
2. Create pearl before exploring
3. Explore knowing you can return instantly
4. Trigger pearl if lost or in danger

## Best Practices

### Chamber Placement

**Do:**
- Build in loaded spawn chunks (always accessible)
- Use protected regions (WorldGuard, GriefPrevention)
- Mark chambers clearly with signs/item frames
- Light up area to prevent mob spawning
- Build multiple chambers for redundancy

**Don't:**
- Build in unprotected areas (griefing risk)
- Build in unloaded chunks (may cause issues)
- Build too close together (confusion)
- Build in dangerous locations (lava, void)

### Pearl Management

**Tips:**
1. **Label Everything** - Use signs to identify chambers
2. **Check Regularly** - Monitor timeout with `/stasis list`
3. **Refresh Pearls** - Cancel and recreate before timeout
4. **Keep Spares** - Always have extra ender pearls
5. **Document Locations** - Write down coordinates

### Safety Considerations

**Before Triggering:**
1. Check destination is safe (`/stasis info <id>`)
2. Ensure chunks are loaded at destination
3. Verify timeout hasn't expired
4. Clear inventory space (in case of death)
5. Remove armor if destination is dangerous

**After Teleporting:**
1. Check surroundings immediately
2. Verify correct destination
3. Re-establish orientation
4. Create new pearl if needed

## Advanced Techniques

### Pearl Rotation System

Maintain constant stasis availability:

```
Week 1: Create Pearl Set A (pearls 1-3)
Week 2: Create Pearl Set B (pearls 4-6)
Week 3: Use Set A, refresh Set B
Week 4: Use Set B, refresh Set A
```

Never without active pearls!

### Dimensional Hopping

If cross-dimensional stasis is enabled:

```bash
# Create pearl in Overworld
[Throw pearl in chamber]

# Travel to Nether
[Enter nether portal]

# Return to Overworld instantly
[Trigger pearl]
```

### Coordinate-Based Navigation

Use pearls as waypoints:

```
/stasis list -> Note coordinates
/stasis info 1 -> X: 1000, Z: -500
/stasis info 2 -> X: -2000, Z: 3000

Navigate using F3 coordinates
Trigger when close for precision teleport
```

### Backup Escape Pearls

Always maintain emergency pearl:

```
Primary Pearl: Normal use chamber
Backup Pearl: Emergency spawn chamber
Never trigger backup unless emergency
Refresh backup monthly
```

## Troubleshooting

### Pearl Not Entering Stasis

**Check:**
- Are bubbles rising? (soul sand creates upward bubbles)
- Do you have permission?
- Have you hit pearl limit? (`/stasis list`)
- Is chamber in loaded chunks?
- Check console for errors

### Teleport Failed

**Reasons:**
- Pearl expired (check timeout)
- Destination chunks unloaded (enable chunk loading)
- Unsafe landing location (enable safe teleport)
- Anti-cheat blocked teleport (configure anti-cheat)

**Solution:**
```bash
/stasis info <id>  # Check pearl status
/stasis cancel <id>  # If stuck, cancel and recreate
```

### Pearl Disappeared

**Possible Causes:**
- Server restart without persistence enabled
- Pearl timeout expired
- Admin removed pearl
- Database error

**Recovery:**
```bash
# Check if pearl still exists
/stasis list

# Check console logs
[BetterStasis] Pearl #1 expired
[BetterStasis] Pearl #2 removed by admin

# Recreate if necessary
```

## Tips & Tricks

1. **Hotkey Triggers** - Bind chamber triggers to accessible locations
2. **Visual Markers** - Use beacons or particles to mark chambers
3. **Backup System** - Always have multiple pearls in different locations
4. **Test First** - Test new chambers before relying on them
5. **Regular Maintenance** - Check and refresh pearls weekly
6. **Share Designs** - Collaborate with other players on chamber designs
7. **Document Everything** - Keep a book with all pearl locations
8. **Chunk Loaders** - Use chunk loaders if not using built-in chunk loading

::: tip Pro Technique
Create a "return pearl" at spawn and a "travel pearl" at your destination. Use them alternately for instant two-way travel!
:::

::: warning Pearl Limits
Remember your pearl limit! Cancel unused pearls to make room for new ones. Check with `/stasis list`.
:::

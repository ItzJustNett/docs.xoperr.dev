---
title: Energy System
description: Understanding gem energy mechanics and states
---

# Energy System

BlissGems uses a sophisticated energy system that determines gem performance, durability, and abilities. Understanding energy mechanics is crucial for maximizing gem effectiveness.

## Energy Overview

Each gem contains energy that depletes with use and can be restored through various methods. Energy determines:

- **Gem State** - Current condition (BROKEN to PRISTINE+5)
- **Ability Power** - Effectiveness of gem abilities
- **Durability** - How long before degradation
- **Visual Appearance** - Item glow and particle effects

## Energy Levels

Gems have energy ranging from 0% to 150%, divided into 11 distinct states:

| Energy Range | State | Color | Glow | Ability Modifier |
|--------------|-------|-------|------|------------------|
| 0% | BROKEN | Dark Red | None | Disabled |
| 1-20% | DAMAGED | Red | Faint | 50% |
| 21-40% | WORN | Orange | Faint | 70% |
| 41-60% | FAIR | Yellow | Dim | 85% |
| 61-80% | GOOD | Light Green | Moderate | 100% |
| 81-100% | PRISTINE | Green | Bright | 100% |
| 101-110% | PRISTINE+1 | Cyan | Bright | 110% |
| 111-120% | PRISTINE+2 | Light Blue | Very Bright | 120% |
| 121-130% | PRISTINE+3 | Blue | Very Bright | 130% |
| 131-140% | PRISTINE+4 | Purple | Glowing | 140% |
| 141-150% | PRISTINE+5 | Magenta | Radiant | 150% |

## Energy States Explained

### BROKEN (0%)

**Characteristics:**
- Gem abilities are completely disabled
- No particle effects
- Cannot be used until repaired
- Item appears dull and lifeless

**How to Fix:**
- Use `/blissgems repair` command
- Use repair items (configurable)
- Automatic repair at spawn (if enabled)

**Warning:** Gems at 0% for extended periods may become permanently damaged (configurable).

---

### DAMAGED (1-20%)

**Characteristics:**
- Abilities work at 50% effectiveness
- Minimal particle effects
- Significantly increased cooldowns (+50%)
- Urgent repair needed

**Visual Indicators:**
- Red text in lore
- Faint red particles
- Warning messages on use

**Recommendations:**
- Repair immediately
- Avoid heavy usage
- Keep as backup only

---

### WORN (21-40%)

**Characteristics:**
- Abilities work at 70% effectiveness
- Reduced particle effects
- Increased cooldowns (+25%)
- Repair recommended

**Visual Indicators:**
- Orange text in lore
- Occasional orange particles
- Repair reminders

---

### FAIR (41-60%)

**Characteristics:**
- Abilities work at 85% effectiveness
- Normal particle effects
- Slightly increased cooldowns (+10%)
- Functional but not optimal

**Visual Indicators:**
- Yellow text in lore
- Standard particles
- No major warnings

---

### GOOD (61-80%)

**Characteristics:**
- Abilities work at 100% effectiveness
- Full particle effects
- Normal cooldowns
- Reliable performance

**Visual Indicators:**
- Light green text
- Standard visual effects
- Healthy state messages

---

### PRISTINE (81-100%)

**Characteristics:**
- Abilities work at 100% effectiveness
- Enhanced particle effects
- Normal cooldowns
- Optimal performance

**Visual Indicators:**
- Bright green text
- Enhanced particles
- Item glow effect

**Note:** This is the "perfect" state - gems at 100% energy are in ideal condition.

---

### PRISTINE+1 to +5 (101-150%)

**Enhanced States:** These are supercharged states beyond normal capacity.

**PRISTINE+1 (101-110%)**
- 110% ability power
- Cyan glow
- Reduced cooldowns (-10%)

**PRISTINE+2 (111-120%)**
- 120% ability power
- Light blue glow
- Reduced cooldowns (-15%)
- Rare chance of no energy consumption

**PRISTINE+3 (121-130%)**
- 130% ability power
- Blue glow
- Reduced cooldowns (-20%)
- 10% chance of no energy consumption
- Unlocks bonus ability effects

**PRISTINE+4 (131-140%)**
- 140% ability power
- Purple glow
- Reduced cooldowns (-25%)
- 15% chance of no energy consumption
- Enhanced bonus abilities

**PRISTINE+5 (141-150%)**
- 150% ability power
- Radiant magenta glow
- Reduced cooldowns (-30%)
- 20% chance of no energy consumption
- Maximum bonus abilities
- Chance to resurrect from BROKEN state

**How to Achieve:** Enhanced states require special repair methods or rare enchanted items.

## Energy Consumption

### Standard Usage

Each ability use consumes energy based on:

1. **Base Cost** - Defined per gem type
2. **State Modifier** - Higher states consume less
3. **Enchantments** - Special enchants reduce cost
4. **Server Settings** - Configurable multipliers

**Example Consumption:**

```
Astra Gem Teleport:
- Base Cost: 10%
- At GOOD: 10% consumed
- At PRISTINE+3: 7% consumed (30% reduction)
- With Efficiency Enchant: 5% consumed
```

### Energy Costs by Gem

| Gem | Base Cost | Cost at PRISTINE+5 |
|-----|-----------|-------------------|
| Speed | 4% | 2.8% |
| Puff | 5% | 3.5% |
| Strength | 7% | 4.9% |
| Fire | 8% | 5.6% |
| Astra | 10% | 7.0% |
| Life | 10% | 7.0% |
| Flux | 12% | 8.4% |
| Wealth | 15% | 10.5% |

## Energy Regeneration

### Natural Regeneration

Gems slowly regenerate energy over time:

**Default Rates:**
- BROKEN: No regeneration
- DAMAGED-FAIR: 0.5% per minute
- GOOD-PRISTINE: 1% per minute
- PRISTINE+: 0.5% per minute (decays to 100%)

**Regeneration Factors:**
- Player online time (gems in inventory)
- Held in main hand (2x rate)
- At spawn or safe zone (3x rate)
- During full moon (1.5x rate, if enabled)

### Active Restoration

**Command Repair:**
```bash
/blissgems repair [player] [amount]
```

**Repair Items:**
Configure items that restore energy when combined:

```yaml
repair_items:
  diamond: 25      # Diamonds restore 25% energy
  emerald: 50      # Emeralds restore 50% energy
  nether_star: 100 # Nether stars fully restore
```

**Repair Stations:**
Create special blocks that restore energy:
- Place gem on designated block
- Wait for restoration (configurable time)
- Costs experience or items (optional)

### Special Restoration Methods

**Experience Repair:**
- Use experience levels to restore energy
- 1 level = 5% energy (configurable)
- Right-click gem while sneaking

**Beacon Restoration:**
- Gems near active beacons regenerate faster
- Requires specific beacon effects
- 2x standard regeneration rate

**Enchantment Table:**
- Place gem in enchantment table
- Spend lapis for energy restoration
- 1 lapis = 2% energy

## Energy Management Strategies

### Optimal Usage

1. **Maintain Above 80%**
   - Keep gems in PRISTINE state
   - Repair before dropping below GOOD
   - Avoid emergency repairs

2. **Rotate Multiple Gems**
   - Use different gems during cooldowns
   - Keep backup gems charged
   - Distribute usage evenly

3. **Strategic Supercharging**
   - Save PRISTINE+ states for important moments
   - Use boosted gems for boss fights
   - Preserve high-energy gems

### Emergency Protocols

**Low Energy Warning (Below 20%):**
```
⚠ Warning: Your Astra Gem is DAMAGED!
⚠ Energy: 15% - Abilities reduced
⚠ Use /blissgems repair to restore
```

**Critical Energy (Below 5%):**
```
🚨 CRITICAL: Your Astra Gem is nearly BROKEN!
🚨 Energy: 3% - Repair immediately!
🚨 Abilities will fail at 0%
```

### Preservation Tips

1. **Avoid Unnecessary Usage**
   - Don't spam abilities
   - Use alternative methods when possible
   - Save gems for important situations

2. **Regular Maintenance**
   - Check energy levels frequently
   - Repair before long adventures
   - Keep repair materials stocked

3. **Safe Storage**
   - Store unused gems in ender chest
   - Keep high-energy gems as backups
   - Organize by energy level

## Configuration

### Energy Settings

Configure energy behavior in `config.yml`:

```yaml
energy:
  # Consumption settings
  consumption:
    base_multiplier: 1.0          # Global energy cost multiplier
    state_reduction: true          # Reduce cost at higher states
    enchant_reduction: true        # Allow enchants to reduce cost

  # Regeneration settings
  regeneration:
    enabled: true
    base_rate: 1.0                 # % per minute at PRISTINE
    damaged_rate: 0.5              # % per minute when damaged
    held_multiplier: 2.0           # Bonus when held in hand
    safe_zone_multiplier: 3.0      # Bonus in spawn/safe zones

  # State thresholds
  states:
    broken: 0
    damaged: 20
    worn: 40
    fair: 60
    good: 80
    pristine: 100
    max: 150

  # Special features
  features:
    permanent_break: false         # Can gems break permanently?
    break_time: 3600               # Seconds at 0% before permanent (if enabled)
    resurrection_chance: 0.05      # Chance for PRISTINE+5 to self-repair from BROKEN
    overheat_protection: true      # Prevent rapid ability spam
```

### Visual Customization

Customize energy state appearance:

```yaml
energy_display:
  show_percentage: true
  show_state_name: true
  show_bar: true
  color_code: true
  particles:
    enabled: true
    density: MEDIUM              # LOW, MEDIUM, HIGH
    type_per_state: true         # Different particles per state
```

## Advanced Mechanics

### Energy Decay

Gems naturally decay under certain conditions:

- **Inactivity:** Gems decay 1% per week if unused
- **Death:** Lose 10% energy on player death (configurable)
- **Dimension Change:** May lose energy when changing dimensions
- **Overuse:** Rapid spam reduces efficiency

### Energy Sharing

Transfer energy between gems (if enabled):

```bash
/blissgems transfer <from_gem> <to_gem> <amount>
```

**Restrictions:**
- Both gems must be same type OR
- Special "Transfer Gem" item required
- Energy loss during transfer (10% default)

### Energy Boosters

Temporary items that reduce consumption:

- **Energy Potions:** Reduce consumption by 50% for 5 minutes
- **Efficiency Enchantments:** Permanent reduction
- **Gem Batteries:** Reusable energy storage items

## Troubleshooting

### Gem Won't Regenerate

**Check:**
- Is gem above 0% energy? (BROKEN gems don't regenerate)
- Is regeneration enabled in config?
- Is player online? (offline regeneration may be disabled)
- Any conflicting plugins?

### Energy Drains Too Fast

**Solutions:**
- Increase `base_multiplier` in config
- Add efficiency enchantments
- Use higher-state gems (reduced costs)
- Check for ability spam

### Can't Supercharge Above 100%

**Requirements:**
- Special repair items (configurable)
- Admin commands
- Rare enchanted repair stations
- Check config for `max` energy setting

::: tip Energy Management
Keep gems above 80% for optimal performance. The difference between GOOD and PRISTINE+ states is significant!
:::

::: warning Permanent Damage
If `permanent_break` is enabled, gems at 0% energy for too long become permanently broken. Repair quickly!
:::

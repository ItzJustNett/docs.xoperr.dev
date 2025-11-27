# Tutorial: Creating a Custom Sword in Oraxen with Random On-Hit Effects and Crafting Recipe

## Introduction

This comprehensive tutorial provides a step-by-step guide to implementing a custom sword in Oraxen. The sword will use the vanilla diamond sword texture, apply a random potion effect (or similar effect) to mobs or players when hit, include a shaped crafting recipe with a diamond sword in the center surrounded by different potions, and add particles on each hit if possible.

**Important Notes:**
- Oraxen is primarily for custom items and blocks with resource packs. It has limited built-in mechanics for on-hit effects (e.g., bleeding for damage-over-time). For true random potion effects on hit, we'll use the built-in bleeding mechanic as a simple example and recommend the free add-on plugin "More Oraxen Mechanics" (available on SpigotMC) for more advanced, customizable effects.
- Particles on hit are not directly supported in core Oraxen for weapons. We'll approximate with the "energyblast" mechanic (which triggers particles on right-click/use). For true on-hit particles, you may need additional plugins like MythicMobs or custom development.
- This tutorial assumes you have a Minecraft server (1.18+ recommended) with Oraxen installed. All configurations are in YAML files under `/plugins/Oraxen/`.
- The current date is November 27, 2025—ensure your Oraxen version is up-to-date for compatibility.
- Output item ID: `custom_random_sword` (you can change this).
- We'll assume basic knowledge of server management (e.g., editing files, reloading plugins).

## Prerequisites

1. Install Oraxen on your server (download from SpigotMC or Polymart).
2. Optional but recommended: Install "More Oraxen Mechanics" plugin from [SpigotMC](https://www.spigotmc.org/resources/more-oraxen-mechanics.115964/) for advanced on-hit effects.
3. Restart the server after installation.
4. Have access to server files (via FTP or file manager).
5. In-game permissions: Give yourself `oraxen.*` for commands like `/o give` and `/o recipes`.

## Step 1: Create the Custom Sword Item

Oraxen items are defined in YAML files in the `/plugins/Oraxen/items/` folder. Create a new file called `custom_sword.yml` (or add to an existing one).

### Basic Item Configuration
Use the vanilla diamond sword as the base material and texture. We don't need to generate a new model since we're using the default texture. Add a custom model data value to distinguish it from vanilla diamond swords.

```yaml
custom_random_sword:
  displayname: "<blue>Random Effect Sword"
  material: DIAMOND_SWORD
  lore:
    - "<gray>This sword applies random effects on hit!"
    - "<gray>Crafted with potions for unpredictable power."
  Pack:
    custom_model_data: 1  # Unique identifier; increase if conflicting with other items
    generate_model: false  # No new texture/model needed; uses vanilla diamond sword
  unbreakable: true  # Optional: Make it unbreakable
  ItemFlags:
    - HIDE_ATTRIBUTES  # Hide vanilla attributes for cleanliness
```

### Add Built-In On-Hit Effect (Bleeding Mechanic)
Oraxen's built-in "bleeding" mechanic applies a damage-over-time effect on hit with a configurable chance (for randomness). This simulates a "random effect" by only triggering sometimes. It's the closest core mechanic to on-hit potion effects.

Add under the `Mechanics` section:

```yaml
  Mechanics:
    bleeding:
      chance: 0.3  # 30% chance to apply on each hit (for randomness)
      duration: 200  # Duration in ticks (10 seconds; 20 ticks = 1 second)
      damage_per_interval: 1.0  # Damage per tick (half-heart)
      interval: 20  # Time between damage ticks (1 second)
```

This will apply a bleeding effect (damage over time) randomly on hit. It's not a true potion effect like poison or slowness, but it's on-hit and random.

### Add Particles (Approximation with EnergyBlast Mechanic)
Oraxen doesn't have a direct on-hit particle mechanic for weapons. Use "energyblast" to spawn particles on right-click (item use). This can be triggered during combat as an active ability. If you want passive on-hit particles, consider custom development or another plugin.

Add under the `Mechanics` section:

```yaml
    energyblast:
      particle: FLAME  # Particle type (e.g., FLAME, SMOKE, REDSTONE; list available in Minecraft docs)
      size: 2.0  # Cone size/radius
      damage: 0  # Set to 0 for no damage, just visual particles
      color: "#FF0000"  # Optional: For colored particles like REDSTONE
```

To trigger: Right-click with the sword to spawn a cone of particles. For true on-hit, note that it's not possible in core Oraxen—use the add-on or external tools.

### Full Item Config Example
Combining everything:

```yaml
custom_random_sword:
  displayname: "<blue>Random Effect Sword"
  material: DIAMOND_SWORD
  lore:
    - "<gray>This sword applies random effects on hit!"
    - "<gray>Crafted with potions for unpredictable power."
  Pack:
    custom_model_data: 1
    generate_model: false
  unbreakable: true
  ItemFlags:
    - HIDE_ATTRIBUTES
  Mechanics:
    bleeding:
      chance: 0.3
      duration: 200
      damage_per_interval: 1.0
      interval: 20
    energyblast:
      particle: FLAME
      size: 2.0
      damage: 0
```

Save the file and run `/o reload` in-game to load it.

## Step 2: Enhance with Random Potion Effects (Using More Oraxen Mechanics Add-On)

For true random potion effects on hit (e.g., poison, slowness, weakness, or even positive like regeneration), install the "More Oraxen Mechanics" plugin. It adds an "effect" mechanic that applies effects when an entity is hurt (on-hit for weapons).

1. Download and install the plugin.
2. Restart the server.
3. Update your item config's `Mechanics` section (replace or add to bleeding):

```yaml
  Mechanics:
    effect:  # From More Oraxen Mechanics
      effects:  # Hypothetical list for multiple random effects (based on typical configs; check add-on for exact syntax)
        - type: POISON
          amplifier: 1  # Effect strength
          duration: 100  # Ticks (5 seconds)
          chance: 0.25  # 25% chance for this effect
        - type: SLOW
          amplifier: 2
          duration: 200
          chance: 0.25
        - type: WEAKNESS
          amplifier: 1
          duration: 150
          chance: 0.25
        - type: REGENERATION  # Mix in a positive effect for fun
          amplifier: 1
          duration: 100
          chance: 0.25
      particles: true  # Enable particles for the effects (if supported by add-on)
```

- The add-on applies one random effect from the list on hit, based on chances.
- If the add-on supports particles per effect, they will show on the target.
- Test and adjust chances (total should sum to ~1.0 for consistency).
- If exact config differs, check the add-on's documentation or Spigot thread for examples.

Run `/o reload` after updating.

## Step 3: Create the Crafting Recipe

Oraxen supports custom recipes, including shaped ones with vanilla and custom items. Recipes are managed via in-game commands and saved in `/plugins/Oraxen/recipes/shaped.yml`.

### Using the In-Game Recipe Builder (Recommended)
1. In-game, run `/o recipes builder shaped random_sword_recipe`. This opens a GUI builder.
2. In the crafting grid (3x3):
   - Place items for the pattern:
     - Top row: Potion of Strength, Potion of Speed, Potion of Leaping (use `/give @s potion{Potion:"minecraft:strength"}` etc. to get them).
     - Middle row: Potion of Invisibility, Diamond Sword, Potion of Fire Resistance.
     - Bottom row: Potion of Regeneration, Potion of Healing, Potion of Poison.
   - This surrounds the diamond sword (center) with different potions.
3. In the result slot, place your custom sword (get it with `/o give custom_random_sword`).
4. Click the save button in the GUI.
5. The recipe is now active and saved to `shaped.yml`.

### Editing the YAML Directly (Advanced)
If you prefer manual editing, open `/plugins/Oraxen/recipes/shaped.yml`. The builder generates something like this (format based on Oraxen standards; adjust if needed):

```yaml
random_sword_recipe:
  permission: ""  # Optional permission to craft
  shape:
    - "ABC"
    - "DEF"
    - "GHI"
  ingredients:
    A: potion{Potion:"minecraft:strength"}  # Potion of Strength
    B: potion{Potion:"minecraft:swiftness"}  # Potion of Speed
    C: potion{Potion:"minecraft:leaping"}    # Potion of Leaping
    D: potion{Potion:"minecraft:invisibility"}  # Potion of Invisibility
    E: diamond_sword  # Center: Vanilla diamond sword
    F: potion{Potion:"minecraft:fire_resistance"}  # Potion of Fire Resistance
    G: potion{Potion:"minecraft:regeneration"}  # Potion of Regeneration
    H: potion{Potion:"minecraft:healing"}       # Potion of Healing
    I: potion{Potion:"minecraft:poison"}        # Potion of Poison
  result:
    type: oraxen
    item: custom_random_sword  # Your custom item ID
    count: 1
```

- Use NBT format for potions (e.g., `{Potion:"minecraft:strength"}`).
- Run `/o reload` after editing.

## Step 4: Reload, Test, and Troubleshoot

1. Run `/o reload` to apply changes.
2. Generate the resource pack: Run `/o pack generate` (or auto in config).
3. Test crafting: Open a crafting table, place the items as per the recipe, and craft the sword.
4. Test effects: Spawn a mob (e.g., `/summon zombie`), hit it with the sword, and observe the random effect (bleeding or potion via add-on).
5. Test particles: Right-click to trigger energyblast particles (approximation).
6. Troubleshooting:
   - Item not appearing? Check console for YAML errors.
   - Recipe not working? Ensure ingredients match exactly (including NBT for potions).
   - No effects? Verify mechanics are enabled and server version compatibility.
   - Particles not showing? Ensure `has_particles: true` in effects (if applicable) and client has resource pack.

## Conclusion

You've now implemented a custom sword in Oraxen with a crafting recipe and on-hit effects! For more advanced random potions or on-hit particles, explore add-ons like More Oraxen Mechanics or integrate with plugins like MMOItems. Refer to [Oraxen Docs](https://docs.oraxen.com/) for further customization. If you encounter issues, check the Oraxen Discord or Spigot forums. Happy crafting!

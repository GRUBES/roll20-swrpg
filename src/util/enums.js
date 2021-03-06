/**
 * Common enumerations
 *
 * @module swrpg/util/enum
 *
 * @author Draico Dorath
 * @copyright 2020
 * @license MIT
 */

// Utilities for displaying dice
const replacer = function () { return this["replacer"]; };
const displayDice = (s) => (n) => _.times(n, replacer, s).join("");

export const CraftingMode = {
    NONE: -1,
    ARMOR: 0,
    DROID: 1,
    GADGET: 2,
    VEHICLE: 3,
    WEAPON: 4,
    LIGHTSABER: 5,
    CYBERNETIC: 6
};

// Dice graphics
const difficulty = displayDice(eote.defaults.graphics.SymbolicReplacement.difficulty);
export const Dice = {
    Advantage: displayDice(eote.defaults.graphics.SymbolicReplacement.advantage),
    Boost: displayDice(eote.defaults.graphics.SymbolicReplacement.boost),
    Challenge: displayDice(eote.defaults.graphics.SymbolicReplacement.challenge),
    Dark: displayDice(eote.defaults.graphics.SymbolicReplacement.dark),
    Despair: displayDice(eote.defaults.graphics.SymbolicReplacement.despair),
    Difficulty: {
        SIMPLE: " - ",
        EASY: difficulty(1),
        AVERAGE: difficulty(2),
        HARD: difficulty(3),
        DAUNTING: difficulty(4),
        FORMIDABLE: difficulty(5)
    },
    Failure: displayDice(eote.defaults.graphics.SymbolicReplacement.failure),
    Light: displayDice(eote.defaults.graphics.SymbolicReplacement.light),
    Setback: displayDice(eote.defaults.graphics.SymbolicReplacement.setback),
    Success: displayDice(eote.defaults.graphics.SymbolicReplacement.success),
    Threat: displayDice(eote.defaults.graphics.SymbolicReplacement.threat),
    Triumph: displayDice(eote.defaults.graphics.SymbolicReplacement.triumph)
};

export const DifficultyToDice = [
    Dice.Difficulty.SIMPLE,
    Dice.Difficulty.EASY,
    Dice.Difficulty.AVERAGE,
    Dice.Difficulty.HARD,
    Dice.Difficulty.DAUNTING,
    Dice.Difficulty.FORMIDABLE
];

// HTML Entities
export const Entities = {
    ASTERISK: "&#42;",
    AT: "&#64;",
    CR: "&#13;"
};

// Commonly referenced macros
export const Macros = {
    combatMain: "", // TODO
    contactInvestigate: `[Use Contact Network](!${Entities.CR}#ContactInvestigate)`,
    craftingMain: "[Crafting](!swrpg-craft-ui)",
    craftArmor: `[Create Armor](!swrpg-craft-mode ${CraftingMode.ARMOR})`,
    craftCybernetic: `[Create Cybernetic](!swrpg-craft-mode ${CraftingMode.CYBERNETIC})`,
    craftDroid: `[Create Droid](!swrpg-craft-mode ${CraftingMode.DROID})`,
    craftGadget: `[Create Gadget](!swrpg-craft-mode ${CraftingMode.GADGET})`,
    craftLightsaber: `[Create Lightsaber](!swrpg-craft-mode ${CraftingMode.LIGHTSABER})`,
    craftVehicle: `[Create Vehicle](!swrpg-craft-mode ${CraftingMode.VEHICLE})`,
    craftWeapon: `[Create Weapon](!swrpg-craft-mode ${CraftingMode.WEAPON})`,
    navChase: `[Chase](!swrpg-nav-chase)`,
    navMain: `[Terrain Navigation](!swrpg-nav-ui ${Entities.AT}{target|Vehicle|space-speed_current} ${Entities.AT}{target|Vehicle|space-silhouette} #NavHazard)`,
    partyLocation: `[Current Location](!${Entities.CR}#PartyLocation)`,
    repairItem: `[Repair Item](!${Entities.CR}#RepairItem)`,
    sliceAccess: "[Access System](!swrpg-slice-access)",
    sliceActivate: "[Activate Security](!swrpg-slice-activate)",
    sliceDisable: "[Disable Security](!swrpg-slice-disable)",
    sliceDecrease: "[*Decrease*](!swrpg-slice-security-dec)",
    sliceEnact: `[${Entities.ASTERISK}Enact Command](!swrpg-slice-enact)`,
    sliceExpel: `[${Entities.ASTERISK}Expel User](!swrpg-slice-expel)`,
    sliceIncrease: "[*Increase*](!swrpg-slice-security-inc)",
    sliceLockdown: `[${Entities.ASTERISK}Lockdown](!swrpg-slice-lockdown)`,
    sliceMain: "[Slicing](!swrpg-slice-ui)",
    sliceReset: "[*Reset*](!swrpg-slice-security-reset)",
    sliceRestart: "[Restart System](!swrpg-slice-restart)",
    sliceTrace: `[${Entities.ASTERISK}Trace User](!swrpg-slice-trace)`,
    socialCharm: "[Charm](!swrpg-social-charm)",
    socialCoercion: "[Coercion](!swrpg-social-coercion)",
    socialDeception: "[Deception](!swrpg-social-deception)",
    socialLeadership: "[Leadership](!swrpg-social-leadership)",
    socialMain: "[Social](!swrpg-social-ui)",
    socialNegotiation: "[Negotiation](!swrpg-social-negotiation)",
    tradeItem: `[Trade Item](!${Entities.CR}#TradeItem)`,
    tradeLocation: "#TradeLocation #TradeProximity #TradePopulation"
};

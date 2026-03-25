addLayer("o", {
    name: "1-points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "1", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(1),
    }},
    color: "#4BDC13",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "1-points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "", description: "", onPress(o){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

  


    upgrades: { 11: {  title: "Test",
    description: "Bajillion points",
    cost: new Decimal(1),
    

        },
    }
    
    
    

        

    },
)
addLayer("t", {
    name: "2", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "2", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#b61010",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "2-points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        if (hasUpgrade('f', 12)) mult = mult.times(3);

        if (hasUpgrade('t', 23)) mult = mult.times(player.points.pow(0.2));
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "t: Reset for 2-points", onPress(t){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

   
    
    upgrades: { 11: {  title: "Hello",
    description: "Begin the game",
    cost: new Decimal(1),
    

        },
        

    12: {  title: "Multi-prime",
    description: "multiply point production by 2",
    cost: new Decimal(2),
      unlocked() { return hasUpgrade('t', 11) }, 
    

        },

    
    13: {  title: "Prime power",
    description: "raise your point production to the 2nd power",
    cost: new Decimal(3),
      unlocked() { return hasUpgrade('t', 12) }, 
    

        },
        14: {  title: "I'm out of upgrade names",
    description: "points boost themselves",
    cost: new Decimal(5),
      unlocked() { return hasUpgrade('t', 13) }, 
    

        },

        15: {  title: "2 good 2 be 2rue",
    description: "multiply point production by 2-points",
    cost: new Decimal(7),
      unlocked() { return hasUpgrade('t', 14) && player.f.points < 1 && !hasUpgrade('f',11) }, 
    

        },
       
       
        16: {  title: "it's gone",
    description: "2-points boost point production",
    cost: new Decimal(7),
      unlocked() { return hasUpgrade('t', 14) && hasUpgrade('f',11) }, 
    

        },

        
        21: {  title: "there is always a catch",
    description: "unlock a new layer, but disable upgrade 15",
    cost: new Decimal(1013),
      unlocked() { return hasUpgrade('t', 15) && !hasUpgrade('f',11) },
      
        },
      
      22: {  title: "no catch this time",
    description: "multiply point production by 3",
    cost: new Decimal(11),
      unlocked() { return hasUpgrade('t', 16) && hasUpgrade('f',11) }, 
    

        },
        
        23: {  title: "points are useful now!",
    description: "points boost 2-points",
    cost: new Decimal(71),
      unlocked() { return hasUpgrade('t', 22) && hasUpgrade('f',13) }, 
    

        },
    

         24: {  title: "base",
    description: "add 1 to base point gain",
    cost: new Decimal(1009),
      unlocked() { return hasUpgrade('t', 23) && hasUpgrade('f',13) }, 
    

        },
    
    
    
    
    
    
    },
  },
)


addLayer("f", {
    name: "3", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "3", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(6),
    }},
    color: "#00d9ff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "3-points", // Name of prestige currency
    baseResource: "2-points", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "f: Reset for 3-points", onPress(f){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade('t', 21) || hasUpgrade('f', 11) || player.f.points > 0  },

    

    
    upgrades: { 11: {  title: "Sacrifices have to be made",
    description: "Upgrade 2,15 is changed",
    cost: new Decimal(1),
    

        },

    12: {  title: "Here's a boost, you're gonna need it",
    description: "Multiply points and 2-points by 3",
    cost: new Decimal(2),
    unlocked() { return hasUpgrade('f', 11)},

        },


         13: {  title: "Finally, more upgrades!",
    description: "Unlock new upgrades in layer 2",
    cost: new Decimal(3),
    unlocked() { return hasUpgrade('f', 12)},

    
    },
    
    
  },
    

        

    },
)

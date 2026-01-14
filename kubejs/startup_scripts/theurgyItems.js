StartupEvents.registry('item', (event) => {
    event.create('alchemical_sulfur_glowstone', 'theurgy:alchemical_sulfur')
        .tag('theurgy:alchemical_sulfurs')
        .sourceItem('minecraft:glowstone')
        .sourceName("Glowstone")
        .sulfurTier("common")
        .sulfurType("other_minerals")
})
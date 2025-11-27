ServerEvents.recipes(event => {
    event.shaped(
        Item.of('tarotcards:the_emperor'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            D: 'tarotcards:wheel_of_fortune',
            B: 'theurgy:mercury_shard',
            C: 'thermal:emerald_gear',
            F: 'reliquary:emperor_chalice',
            A: 'concatenationcore:experienced_paper',
            E: 'tfmg:p_semiconductor'
        }
    )
    event.shapeless(
        Item.of('minecraft:fire_charge'),
        [
            'minecraft:flint_and_steel',
            'minecraft:oak_log',
            'minecraft:flint_and_steel'
        ]
    ).damageIngredient('minecraft:flint_and_steel')
});
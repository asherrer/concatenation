ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:chest'),
        [
            'AA ',
            '   ',
            '   '
        ],
        {
            A: 'minecraft:oak_log'
        }
    )
    event.shaped(
        Item.of('minecraft:stick', 16),
        [
            'A  ',
            'A  ',
            '   '
        ],
        {
            A: 'minecraft:oak_log'
        }
    )
    event.shaped(
        Item.of('minecraft:amethyst_cluster'),
        [
            'AA ',
            'AA ',
            '   '
        ],
        {
            A: 'minecraft:large_amethyst_bud'
        }
    )
    event.shapeless(
        Item.of('minecraft:large_amethyst_bud'),
        [
            'minecraft:medium_amethyst_bud',
            'minecraft:medium_amethyst_bud',
            'minecraft:medium_amethyst_bud',
            'minecraft:medium_amethyst_bud'
        ]
    )
    event.shapeless(
        Item.of('minecraft:large_amethyst_bud'),
        [
            'minecraft:small_amethyst_bud',
            'minecraft:small_amethyst_bud',
            'minecraft:small_amethyst_bud',
            'minecraft:small_amethyst_bud'
        ]
    )
});
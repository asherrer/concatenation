ServerEvents.recipes(event => {

    event.shaped(
        Item.of('concatenationcore:gold_card'),
        [
            'AAA',
            'CDC',
            'ABA'
        ],
        {
            A: '#concatenation:smooth_material',
            C: '#concatenation:circuits',
            B: 'concatenationcore:gold_paper',
            D: 'concatenationcore:merchant_permit_1'
        }
    )

});
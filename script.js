const addons = [
    { "name": "Whipped cream", "price": 0.5 },
    { "name": "Whipped cream", "price": 0.5 },
];

const bartender = {
    createDrink: (type) => {
        function createDrink(type) {
            const drink = {
                type: type,
                price: 2.00,
                hasLarge: false,
                addons: [],
                getDesc: function() {
                    return `Welcome ${type}, with ${addons}!`;
                }
            };
            if (type === 'cold' || type === 'blended') {
                drink.hasLarge = true;
            }
            return drink;
        }
    }
}

let drink = bartender.createDrink("hot");
Console.log(drink.getDesc());
function solve(product, quantity){
    priceCoffee = 1.50;
    priceWater = 1.00;
    priceCoke = 1.40;
    priceSnacks= 2.00;
    switch(product){
        case'coffee':
            return (priceCoffee*quantity).toFixed(2);
            break;
        case'water':
            return (priceWater*quantity).toFixed(2);
            break;
        case'coke':
            return (priceCoke*quantity).toFixed(2);
            break;
        case'snacks':
            return (priceSnacks*quantity).toFixed(2);
            break;
    }
}

console.log(solve("water", 5));
console.log(solve("coffee", 2));
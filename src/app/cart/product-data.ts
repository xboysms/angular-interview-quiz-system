export class Product {
    id!: number;
    productName!: string;
    category!: string;
    price!: number;
    oldPrice!: number;
    quanrtityAvailable!: number;
}

export const ProductList: Product =
    [
        {
            id: 1,
            productName: "Chicken Fillets 6 x 100g",
            category: "Meat & Poultry",
            price: 4.50,
            quanrtityAvailable: 12
        },
        {
            id: 2,
            productName: "Sirloin Steaks, 4 x 6-8oz",
            category: "Meat & Poultry",
            price: 45.70,
            quanrtityAvailable: 6
        },
        {
            id: 3,
            productName: "Whole Free-Range Turkey, 1 x 16-18lbs",
            category: "Meat & Poultry",
            price: 43.20,
            oldPrice: 48.25,
            quanrtityAvailable: 8
        },
        {
            id: 4,
            productName: "Loose Carrots, 4 x 20 each",
            category: "Fruit & Vegetables",
            price: 2.67,
            quanrtityAvailable: 2
        },
        {
            id: 5,
            productName: "Coca-Cola, 6 x 2L",
            category: "Drinks",
            price: 8.30,
            oldPrice: 8.50,
            quanrtityAvailable: 6
        },
        {
            id: 6,
            productName: "Mars Bar, 6 x 24 x 50g",
            category: "Meat & Poultry",
            price: 45.70,
            quanrtityAvailable: 6
        },
        {
            id: 7,
            productName: "Peppermint Chewing Gum, 6 x 50 x 30g",
            category: "Confectionary & Desserts",
            price: 35.70,
            quanrtityAvailable: 6
        },
        {
            id: 8,
            productName: "Strawberry Cheesecake, 4 x 12 portions",
            category: "Confectionary & Desserts",
            price: 8.52,
            quanrtityAvailable: 0
        },
        {
            id: 9,
            productName: "Plain Flour, 10 x 1kg",
            category: "Baking/Cooking Ingredients",
            price: 6.21,
            quanrtityAvailable: 4
        },
        {
            id: 10,
            productName: "Icing Sugar, 12 x 500g",
            category: "Baking/Cooking Ingredients",
            price: 10,// 9.38,
            quanrtityAvailable: 6
        },
        {
            id: 11,
            productName: "Still Mineral Water, 6 x 24 x 500m",
            category: "Drinks",
            price: 2,// 21.75,
            quanrtityAvailable: 9
        },
        {
            id: 12,
            productName: "Sparkling Mineral Water, 6 x 24 x 500ml",
            category: "Drinks",
            price: 25.83,
            quanrtityAvailable: 16
        },
        {
            id: 13,
            productName: "Cauliflower Florets, 10 x 500g",
            category: "Fruit & Vegetables",
            price: 25.83,
            quanrtityAvailable: 16
        }
    ] as any
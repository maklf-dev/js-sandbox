const products = [
    {
        id: 1,
        title: "Gold Ring",
        category: "Jewelry",
        price: "450",
        discountPercent: 10,
        taxPercent: 20,
        available: true,
        stock: 3,
    },
    {
        id: 2,
        title: "Silver Necklace",
        category: "Jewelry",
        price: "220",
        discountPercent: 15,
        taxPercent: 20,
        available: true,
        stock: 0,
    },
    {
        id: 3,
        title: "Leather Wallet",
        category: "Accessories",
        price: "80",
        discountPercent: 0,
        taxPercent: 10,
        available: true,
        stock: 12,
    },
    {
        id: 4,
        title: "Premium Watch",
        category: "Accessories",
        price: "abc",
        discountPercent: 20,
        taxPercent: 20,
        available: true,
        stock: 5,
    },
    {
        id: 5,
        title: "Laptop Stand",
        category: "Office",
        price: "35",
        discountPercent: "",
        taxPercent: 10,
        available: false,
        stock: 8,
    },
];

//returns numeric type of value
const convertToNumber = (value) => {
    const result = Number(value);
    if (Number.isNaN(result)) return null;
    else return result;
};
// console.log(convertToNumber("555" + 5)); check

// to calculate the amount of discount
const getDiscountAmount = (price, discountPercent) => convertToNumber(price) * (convertToNumber(discountPercent) / 100);
// console.log(getDiscountAmount(200, 10)); check

// to calculate final price amount
const getPriceAfterDiscount = (price, discountPercent) =>
    convertToNumber(price) - getDiscountAmount(convertToNumber(price), convertToNumber(discountPercent));
// console.log(getPriceAfterDiscount(100, 10)); check

// to calculate the amount of tax
const getTaxAmount = (price, discountPercent, taxPercent) =>
    getPriceAfterDiscount(convertToNumber(price), convertToNumber(discountPercent)) *
    (convertToNumber(taxPercent) / 100);
// console.log(getTaxAmount(100, 10, 10)); check

// to calculate the final price
const getFinalPrice = (price, discountPercent, taxPercent) => {
    const toCalculate =
        getPriceAfterDiscount(convertToNumber(price), convertToNumber(discountPercent)) +
        getTaxAmount(price, convertToNumber(discountPercent), convertToNumber(taxPercent));

    return Number(toCalculate.toFixed(2)); // add 2 decimals
};

// console.log(getFinalPrice(100, 10, 10)); check

const getFinalPrice = (price, discountPercent, taxPercent) =>
    `$${getFinalPrice(convertToNumber(price), convertToNumber(discountPercent), convertToNumber(taxPercent))}`;
// console.log(getFinalPrice(100, 10, 10)); check

// check if its available and stock status
const getAvailabilityMessage = (available, stock) =>
    !available ? "Unavailable" : stock === 0 ? "Out of stock" : stock < 5 ? "Low stock" : "Available";
// console.log(getAvailabilityMessage(true, 15)); check

// to create final report
function getProductSummary(listItem) {
    //patter: Gold Ring - Jewelry - $486.00 - Low stock

    const summaries = [];

    for (const product of listItem) {
        const price = getFinalPrice(product.price, product.discountPercent, product.taxPercent);

        const message = getAvailabilityMessage(product.available, product.stock);

        const result = `${product.title} - ${product.category} - ${price} - ${message}`;

        summaries.push(result);
    }

    return summaries;
}

console.log(getProductSummary(products));

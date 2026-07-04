const product = {
    title: "Gold Ring",
    price: 500,
    discountPercent: 8,
    taxPercent: 20,
    available: true,
};

const name = product.title;
const price = Number(product.price);
const discountPercent = Number(product.discountPercent);
const taxPercent = Number(product.taxPercent);
const isAvailable = product.available;

// get the amount of discount
const discountAmount = () => price * (discountPercent / 100);
//console.log(discountAmount(price, discountPer));

//price after discount
const priceAfterDiscount = () => price - discountAmount();
//console.log(finalPrice());

// get tax amount
const taxAmount = () => price * (taxPercent / 100);
// console.log(taxAmount(price, taxPer));

//calculate final price with discount and taxes
const finalPrice = () => priceAfterDiscount() + taxAmount();

console.log(finalPrice());

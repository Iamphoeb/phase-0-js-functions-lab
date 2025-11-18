function calculateTax(amount) {
    return amount * 0.10
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return Math.max (num1 , num2);
}

function isPalindrome(word) {
    const revesed = word.split('').reverse().join('');
    return word.toLowerCase() === revesed.toLowerCase();
}

function calculateDiscountedPrice(originalPrice, discountpercentage) {
    return originalPrice * (1 - discountpercentage / 100);
}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
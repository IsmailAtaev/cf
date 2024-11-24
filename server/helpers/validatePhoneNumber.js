module.exports = function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
};

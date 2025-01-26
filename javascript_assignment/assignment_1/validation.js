function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var postCode = document.getElementById("postCode").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    if (firstName == "" || firstName.length > 9) {
        alert("First Name cannot be blank and must be no more than 9 characters.");
        return false;
    }
    if (lastName == "" || lastName.length > 7) {
        alert("Last Name cannot be blank and must be no more than 7 characters.");
        return false;
    }
    if (street == "" || city == "" || state == "" || country == "") {
        alert("Street, City, State, and Country fields cannot be blank.");
        return false;
    }
    if (!/^\d{5}$/.test(postCode)) {
        alert("Post Code must be 5 numeric characters.");
        return false;
    }
    if (!/^\d+$/.test(cardNumber) || cardNumber == "") {
        alert("Card Number cannot be blank and must be numbers.");
        return false;
    }
    if (expiryDate == "") {
        alert("Expiry date cannot be blank.");
        return false;
    }
    if (paymentMethod == null) {
        alert("Please select one payment method.");
        return false;
    }
    
    alert("Thank you!");
    return true;
}

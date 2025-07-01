function submitForm() {
    const userName = document.getElementById("userName").value;
    const userMobile = document.getElementById("userMobile").value;
    const userAddress = document.getElementById("userAddress").value;
    const equipmentName = document.getElementById("equipmentName").value;
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (!userName || !userMobile || !userAddress || !equipmentName) {
        alert("Please fill all the fields!");
        return;
    }
    const mobileRegex = /^[0-9]\d{9}$/;
    if (!mobileRegex.test(userMobile)) {
        alert("Please enter a valid 10-digit mobile number starting with 6-9.");
        return;
    }
    confirmationMessage.innerHTML = `
        <strong>Thank you, ${userName}!</strong><br>
        Your commitment to recycling is valuable.<br>
        We’ll reach out to you at <strong>${userMobile}</strong> for pickup at <strong>${userAddress}</strong>.
    `;
    confirmationMessage.style.display = "block";
}

// document.getElementById("noakhali-btn").addEventListener("click",
    function handleDonation (donAmount, donationId) {
        const amount = convertedValue(donAmount);
        console.log(donAmount)
        const balance = convertedText("balance");
        if (amount) {
            if (balance > amount) {
                const newBalance = balance - amount;
                document.getElementById("balance").innerText = newBalance
                const currentDonation = convertedText(donationId);
                const donation = amount + currentDonation;
                document.getElementById(donationId).innerText = donation;
            }
            else {
                return alert("Invalid Number")
            }
        }
        else {
            return alert("add a valid value")
        }

    }
// )
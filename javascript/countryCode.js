const input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "id",
    preferredCountries: ["id", "us", "gb"],
    separateDialCode: true,
});

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
});



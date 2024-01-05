function showName() {
    var nameInput = document.getElementById("name").value;
    document.getElementById("dName").innerText = nameInput;
}

function showGender() {
    var genderInput = document.getElementById("gender").value;
    if (genderInput !== "") {
        document.getElementById("dGender").innerText = genderInput;
    } else {
        alert("Please select a valid gender.");
    }
}

function showEmail() {
    var emailInput = document.getElementById("email").value;
    document.getElementById("dEmail").innerText = emailInput;
}

function showMobile() {
    var mobileInput = document.getElementById("mobile").value;
    document.getElementById("dMobile").innerText = mobileInput;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
}

function resetDisplay() {
    document.getElementById("dName").innerText = "";
    document.getElementById("dGender").innerText = "";
    document.getElementById("dEmail").innerText = "";
    document.getElementById("dMobile").innerText = "";
}
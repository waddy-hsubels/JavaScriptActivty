const studentName = document.getElementById("studentName");
const profile = document.getElementById("profile");
const details = document.getElementById("details");
const changeName = document.getElementById("changeName");
const changeBackground = document.getElementById("changeBackground");
const toggleDetails = document.getElementById("toggleDetails");

changeName.addEventListener("click", function() {

    if (studentName.textContent === "Adina Danilo") {

        studentName.textContent = "Danilo Adina";

    } else {

        studentName.textContent = "Adina Danilo";

    }

});

changeBackground.addEventListener("click", function() {

    if (profile.style.backgroundColor === "lightblue") {

        profile.style.backgroundColor = "white";

    } else {

        profile.style.backgroundColor = "lightblue";

    }

});

toggleDetails.addEventListener("click", function() {

    if (details.classList.contains("hidden")) {

        details.classList.remove("hidden");

    } else {

        details.classList.add("hidden");

    }

});
//-----------------------------------------------Room cost calculator------------------------------

function calculateCost() {
  var roomSelect = document.getElementById("roomSelect");
  var nightCount = document.getElementById("nightCount");
  var costResult = document.getElementById("costResult");

  var price = Number(roomSelect.value);
  var nights = Number(nightCount.value);

  if (nights <= 0) {
    costResult.style.color = "red";
    costResult.innerHTML = "Please enter a valid number of nights.";
  } else {
    var total = price * nights;
    costResult.style.color = "green";
    costResult.innerHTML = "Estimated Total Cost: Rs. " + total;
  }
}

//----------------------------------------------Booking form validation----------------------------
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var roomType = document.getElementById("roomType").value;
  var formMessage = document.getElementById("formMessage");

  if (name == "" || email == "" || phone == "" || roomType == "") {
    formMessage.style.color = "red";
    formMessage.innerHTML = "Please fill in all the fields.";
    return false;
  }

  if (email.indexOf("@") == -1) {
    formMessage.style.color = "red";
    formMessage.innerHTML = "Please enter a valid email address.";
    return false;
  }

  if (phone.length != 10) {
    formMessage.style.color = "red";
    formMessage.innerHTML = "Please enter a valid 10 digit mobile number.";
    return false;
  }

  formMessage.style.color = "green";
  formMessage.innerHTML = "Thank you! Your room booking request has been received.";
  return false; // stops the page from reloading
}

//--------------------------------------------------------Gallery filter----------------------------------------
function filterGallery(category) {
  var items = document.getElementsByClassName("gallery-item");
  for (var i = 0; i < items.length; i++) {
    if (category == "all" || items[i].className.indexOf(category) != -1) {
      items[i].style.display = "inline-block";
    } else {
      items[i].style.display = "none";
    }
  }
}

//--------------------------------------------------------FAQ toggle----------------------------------------
function toggleFaq(id) {
  var answer = document.getElementById(id);
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var notelp = document.getElementById("notelp").value;
    var tgl = document.getElementById("tgl").value;
  
  function resetForm() {
    document.getElementById("formInput").reset();
    document.getElementById("output").innerHTML = "";
  }
  
  function showInputMessage(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var messageElement = document.createElement("span");
    messageElement.innerHTML = message;
    messageElement.className = "error";
    inputElement.parentNode.insertBefore(messageElement, inputElement.nextSibling);
  }
  
  function hideInputMessage(inputId) {
    var inputElement = document.getElementById(inputId);
    var nextElement = inputElement.nextSibling;
    if (nextElement && nextElement.className == "error") {
      nextElement.parentNode.removeChild(nextElement);
    }
  }
  
  document.getElementById("name").addEventListener("blur", function () {
    var name = this.value;
    if (name === "") {
      showInputMessage("name", "Nama harus diisi.");
    } else {
      hideInputMessage("name");
    }
  });
  
  document.getElementById("tgl").addEventListener("blur", function () {
    var tgl = this.value;
    if (tgl === "") {
      showInputMessage("tgl", "Isi sesuai tanggal lahir anda");
    } else {
      hideInputMessage("tgl");
    }
  });
  
  document.getElementById("age").addEventListener("blur", function () {
    var age = this.value;
    if (isNaN(age) || age < 18) {
      showInputMessage("age", "Umur berupa angka dan harus diatas 18 tahun.");
    } else {
      hideInputMessage("age");
    }
  });
  
  document.getElementById("email").addEventListener("blur", function () {
    var email = this.value;
    var emailPattern = /^\S+@\S+\.\S+$/;
    if (!email.match(emailPattern)) {
      showInputMessage("email", "Email tidak valid.");
    } else {
      hideInputMessage("email");
    }
  });
  
  document.getElementById("country").addEventListener("blur", function () {
    var country = this.value;
    if (country === "") {
      showInputMessage("country", "Pilih asal Anda.");
    } else {
      hideInputMessage("country");
    }
  });
  
  document.getElementById("notelp").addEventListener("blur", function () {
    var notelp = this.value;
    if (notelp === "") {
      showInputMessage("notelp", "Isi dengan nomor telpon anda");
    } else {
      hideInputMessage("notelp");
    }
  });
}
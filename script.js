function closeNav() {
    document.getElementById("navi-toggle").checked = false;
  }
  
  function sendMail(event) {
    event.preventDefault();
    document.getElementById("form-button").innerHTML = "Sending...";
    var tempParams = {
      name: document.getElementById("contact-name").value,
      email: document.getElementById("contact-email").value,
      message: document.getElementById("contact-message").value,
    };
    emailjs
      .send("service_dqx1tu1", "template_a2aoxef", tempParams)
      .then(function (res) {
        console.log("Success", res.status);
        document.getElementById("form-button").innerHTML =
          "Successfully Sent! Thank your for your submission! ";
        document.getElementById("form-button").style.color = "green";
      });
    (document.getElementById("contact-name").value = ""),
      (document.getElementById("contact-email").value = ""),
      (document.getElementById("contact-message").value = "");
  }
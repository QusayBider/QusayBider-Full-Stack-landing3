document.addEventListener("DOMContentLoaded", function () {
    const loader = function () {
      const spinner = document.querySelector(".loder-spinner");
      if (spinner) {
        setTimeout(() => {
          spinner.classList.add("d_active_loader");
        }, 500);
      }
    };
    loader();
  });
  

  emailjs.init("EQzanHYMTwpgFkjDy");
  
 
  document.getElementById("contact").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = {
      from_name: formData.get("name"),
      email_Id: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
  
    emailjs
      .send("service_2p289wb", "template_teh5s57", data)
      .then(() => {
        customAlert.alert("Confirmation email sent successfully!");
      })
      .catch(() => {
        customAlert.alert("Failed to send confirmation email. Please try again.");
      });
  });
  

function CustomAlert() {
  this.alert = function (message, title) {
    document.body.innerHTML +=
      '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
    const dialogbox = document.getElementById("dialogbox");

    dialogoverlay.style.display = "block";
    dialogbox.style.display = "block";

    if (!title) {
      document.getElementById("dialogboxhead").style.display = "none";
    } else {
      document.getElementById("dialogboxhead").innerHTML =
        '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title;
    }

    document.getElementById("dialogboxbody").innerHTML = message;
    setTimeout(() => {
      this.ok(); 
    }, 3000);
  };

  this.ok = function () {
    const dialogbox = document.getElementById("dialogbox");
    if (dialogoverlay && dialogbox) {
      dialogoverlay.remove();
      dialogbox.remove();
    }
  };
}

const customAlert = new CustomAlert();
  
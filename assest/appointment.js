document.addEventListener('DOMContentLoaded', function() {
  var loader = function() {
    const spinner = document.querySelector(".loder-spinner");
    setTimeout(() => {
      spinner.classList.add('d_active_loader');
    },500);
  }
  loader();
});
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');

  const now = new Date();
  const today = now.toISOString().split('T')[0]; // Get current date in yyyy-mm-dd format
  const currentTime = now.toTimeString().slice(0, 5); // Get current time in HH:mm format

  // Set min values
  dateInput.min = today;
  dateInput.value = today; // Optionally set current date as default value
  timeInput.min = currentTime;
  timeInput.value = currentTime; // Optionally set current time as default value

                            
  dateInput.addEventListener('change', () => {   // Update time's min value if the date changes to today
    if (dateInput.value === today) {
      timeInput.min = currentTime;
    } else {
      timeInput.min = '';
    }
  });
});

// Initialize EmailJS with your User ID
emailjs.init("EQzanHYMTwpgFkjDy"); // Replace with your EmailJS User ID

// Listen for form submission
document.getElementById("appointmentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect form data
  const formData = new FormData(event.target);
  const data = {
    from_name: formData.get("name"),
    phone_Id: formData.get("phone"),
    email_Id: formData.get("email"),
    Date_Id: formData.get("date"),
    Time_Id: formData.get("time"),
  };
  
  // Send email using EmailJS
  emailjs
    .send("service_2p289wb", "template_p502968", data)
    .then((response) => {
      customAlert.alert("Confirmation email sent successfully!");
    })
    .catch((error) => {
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
      this.ok(); // Auto-dismiss after 2 seconds
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
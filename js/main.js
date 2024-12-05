document.getElementById('box1').addEventListener('click', function () {
    window.location.href = 'https://github.com/Princy9114/CafeManagementSystem';
});

document.getElementById('box2').addEventListener('click', function () {
    window.location.href = 'https://github.com/Princy9114/GrievanceDesk';
});

document.getElementById('box3').addEventListener('click', function () {
    window.location.href = 'https://github.com/Princy9114/ToDoList';
});

document.getElementById('box4').addEventListener('click', function () {
    window.location.href = 'https://github.com/Princy9114/MedicinePredictor';
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Clear the form
    document.getElementById('contactForm').reset();
});

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_9wubupp";
    const templetID = "template_dhk72xm";

    emailjs
        .send(serviceID, templetID, params)
        .then(
            (res) => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message sent successfully");
            }
        )
        .catch(err => console.log(err));

}


window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) { // Check if scrolled more than 100 pixels
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

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

function createCounter(elementId, targetValue, intervalTime) {
    let element = document.getElementById(elementId);
    let counter = 0;
    let interval = setInterval(() => {
        if (counter >= targetValue) {
            clearInterval(interval);
        } else {
            counter += 1;
            element.innerHTML = counter + "%";
        }
    }, intervalTime);
}

// Ensure the function is called once the page is fully loaded
window.onload = () => {
    createCounter('number1', 70, 30);
    createCounter('number2', 60, 35);
    createCounter('number3', 65, 30);
    createCounter('number4', 70, 30);
    createCounter('number5', 80, 25);
    createCounter('number6', 50, 35);
    createCounter('number7', 45, 45);
}
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Basic form validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Prepare form data to be sent
    let formData = {
        name: name,
        email: email,
        message: message
    };

    console.log('Form Data Submitted:', formData);

    // Here, you can add code to send the form data to your server using fetch or XMLHttpRequest
    // Example (assuming you have an endpoint to handle form submission):
    /*
    fetch('https://your-server-endpoint.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });
    */

    // Clear the form
    document.getElementById('contactForm').reset();
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) { // Check if scrolled more than 100 pixels
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
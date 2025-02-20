
	
		
	
		
let timers = {};

function showTyping(inputField) {
	let typingLabel = document.getElementById(`typing-${inputField.id}`);
	typingLabel.innerHTML = "Typing...";
	typingLabel.style.color = "black";

	clearTimeout(timers[inputField.id]);
}

function hideTyping(inputField) {
	timers[inputField.id] = setTimeout(() => {
		document.getElementById(`typing-${inputField.id}`).innerHTML = "";
	}, 1000);
}

async function sendMessage(event) {
	event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const numberField = document.getElementById("number");
    const subjectField = document.getElementById("text");
    const messageBox = document.getElementById("message");
    const confirmation = document.getElementById("confirmation");

    // Check if all fields are filled
    if (nameField.value.trim() && emailField.value.trim() && numberField.value.trim() && subjectField.value.trim() && messageBox.value.trim()) {
        confirmation.innerHTML = "Message sent successfully!";
        confirmation.style.color = "green";

        // Clear input fields after sending
        nameField.value = "";
        emailField.value = "";
        numberField.value = "";
        subjectField.value = "";
        messageBox.value = "";

        
    } else {
        confirmation.innerHTML = "Please fill in all fields before sending!";
        confirmation.style.color = "red";
    }
	// Hide confirmation message after 3 seconds
	setTimeout(() => {
		confirmation.innerHTML = "";
	}, 3000);
}

function scrollExperience(direction) {
	const wrapper = document.querySelector('.experience-wrapper');
	wrapper.scrollBy({ left: direction * 300, behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Load theme from localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ ";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save theme preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "☀️ ";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "🌙 ";
        }
    });
});

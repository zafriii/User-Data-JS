document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const formData = new FormData(this);

    // Create output container
    const outputContainer = document.createElement("div");
    outputContainer.classList.add("output-container");

    // Display heading
    const heading = document.createElement("h2");
    heading.classList.add("output-heading");
    heading.textContent = "User Data";
    outputContainer.appendChild(heading);

    // Display form data
    for (const [key, value] of formData.entries()) {
        const outputItem = document.createElement("div");
        outputItem.classList.add("output-item");

        if (value instanceof File) {
            // Display the image
            const imageElement = document.createElement("img");
            imageElement.src = URL.createObjectURL(value);
            imageElement.classList.add("output-image");
            imageElement.width = 100;
            outputItem.appendChild(imageElement);

            
        } else {
            // Display other form fields
            outputItem.innerHTML = `<p><strong>${key}:</strong> ${value}</p>`;
        }

        outputContainer.appendChild(outputItem);
    }

    // Append output container to body
    document.body.appendChild(outputContainer);

    // Reset the form
    this.reset();

    // Optionally, you can redirect to another page
    // window.location.href = "another-page.html";
});

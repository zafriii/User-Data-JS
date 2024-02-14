document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const formData = new FormData(this);

   
    const outputContainer = document.createElement("div");
    outputContainer.classList.add("output-container");

    
    const heading = document.createElement("h2");
    heading.classList.add("output-heading");
    heading.textContent = "User Data";
    outputContainer.appendChild(heading);

    
    for (const [key, value] of formData.entries()) {
        const outputItem = document.createElement("div");
        outputItem.classList.add("output-item");

        if (value instanceof File) {
           
            const imageElement = document.createElement("img");
            imageElement.src = URL.createObjectURL(value);
            imageElement.classList.add("output-image");
            imageElement.width = 100;
            outputItem.appendChild(imageElement);

            
        } else {
           
            outputItem.innerHTML = `<p><strong>${key}:</strong> ${value}</p>`;
        }

        outputContainer.appendChild(outputItem);
    }

   
    document.body.appendChild(outputContainer);

  
    this.reset();

    
});

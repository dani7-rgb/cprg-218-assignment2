// Get the buttons and the info box
let introBtn = document.getElementById("introBtn");
let originsBtn = document.getElementById("originsBtn");
let artSceneBtn = document.getElementById("artSceneBtn");
let millenniumBtn = document.getElementById("millenniumBtn");
let infoBox = document.getElementById("infoBox");

// When the intro button is clicked
introBtn.addEventListener("click", function() {
    showInfo("Logo design", "Making logo's for brands.", "images/build.png");
    setActiveButton(introBtn);
});

// When the origins button is clicked
originsBtn.addEventListener("click", function() {
    showInfo("Photoshop", "Creating photo manipulation and backgrounds", "images/close.png");
    setActiveButton(originsBtn);
});

// When the art scene button is clicked
artSceneBtn.addEventListener("click", function() {
    showInfo("Posters", "Creating posters, brandguides in Adobe Indesign.", "images/snow.png");
    setActiveButton(artSceneBtn);
});

// When the millennium button is clicked
millenniumBtn.addEventListener("click", function() {
    showInfo("Typography", "Creating multiple forms of text", "images/walk.png");
    setActiveButton(millenniumBtn);
});

// Function to display the information in the info box
function showInfo(title, description, imageSrc) {
    let titleElement = document.createElement("h2");
    titleElement.textContent = title;

    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;

    let imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = title;

    // Clear previous content
    infoBox.innerHTML = "";

    // Create a container for the image and text
    let box = document.createElement("div");
    box.classList.add("blueBox");

    // Create a text container
    let textContainer = document.createElement("div");
    textContainer.classList.add("text");

    textContainer.appendChild(titleElement);
    textContainer.appendChild(descriptionElement);

    // Add the image and text to the box
    box.appendChild(imageElement);
    box.appendChild(textContainer);

    // Add the box to the info box
    infoBox.appendChild(box);

    // Make the info box visible
    infoBox.style.display = "flex";
}

// Function to highlight the active button
function setActiveButton(button) {
    // Remove the active class from all buttons
    let buttons = document.querySelectorAll("button");
    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    // Add the active class to the clicked button
    button.classList.add("active");
}

//when a button is clicked, display text and toggle image

const allText = document.querySelectorAll("p");
const expandButtons = document.querySelectorAll("button");


//event listeners 

expandButtons.forEach((button) => {
    button.addEventListener("click", () => {
        toggleText(button);
        switchToggleImage(button);
      });
});


//functions

//toggle the text for the given question
function toggleText (button) {
    console.log(button)
    const section = button.closest(".faq_section");
    const paragraph = section.querySelector("p");
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
      } else {
        paragraph.style.display = "none";
      }
    
}

//switch the toggle image from positive to negative or negative to positive
function switchToggleImage(button){
    const image = button.querySelector("img");
    if (image.src.includes("icon-plus.svg")) {
        image.src = "./assets/images/icon-minus.svg"; 
      } else {
        image.src = "./assets/images/icon-plus.svg"; 
}
}
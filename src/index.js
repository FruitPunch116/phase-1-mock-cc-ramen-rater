// write your code here
const URL = "http://localhost:3000/ramens"

fetch(URL)
.then(resp => resp.json())
.then(ramens => {
    ramens.forEach(ramen=>renderRamen(ramen))
})
// .then(data => console.log(data))


function renderRamen(ramen) {
    //Declaration process
    const ramenMenu = document.querySelector("#ramen-menu");
    
    const image = document.createElement("img");
    //Brings the image to the ramenMenu
    image.src = ramen.image
    ramenMenu.append(image)
    
    image.addEventListener("click", () => {
        const ramenDetail = document.querySelector(".detail-image");
        //Assignation process
        ramenDetail.src = ramen.image;
        ramenDetail.alt = ramen.image;
        //Get the values from the data base
        document.querySelector(".name").textContent = ramen.name;
        document.querySelector(".restaurant").textContent = ramen.restaurant;
        document.querySelector("#rating-display").textContent = ramen.rating;
        document.querySelector("#comment-display").textContent = ramen.comment;
    })
    
}

// Updates the form
const form = document.querySelector("#new-ramen")
form.addEventListener("submit", event =>{
    event.preventDefault()
    const newRamenName = event.target.name.value;
    const newRamenRestaurant = event.target.restaurant.value;
    const newRamenRating = event.target.rating.value;
    const newRamenImage = event.target.image.value;
    const newRamenComment = event.target["new-comment"].value;
    const newRamen = {
        "name": newRamenName,
        "restaurant": newRamenRestaurant,
        "rating": newRamenRating,
        "comment": newRamenComment,
        "image": newRamenImage
    }
    renderRamen(newRamen);
});
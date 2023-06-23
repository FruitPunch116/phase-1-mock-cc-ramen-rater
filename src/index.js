// //Declare the variable URL.
// const URL = "http://localhost:3000/ramens"

// //GET request to the database, to display data on the browser.
// fetch(URL)
// .then(resp => resp.json())
// .then(ramens => {
//     ramens.forEach(ramen=>renderRamen(ramen))
//     renderRamenDetails(ramens[0])
// })
// // .then(data => console.log(data))

// const form = document.querySelector("#new-ramen")
// form.addEventListener("submit", updatedComments)

// function renderRamen(ramen) {
//     const ramenMenu = document.querySelector("#ramen-menu");
    
//     const image = document.createElement("img");
//     image.src = ramen.image;
//     ramenMenu.append(image);
    
//     //When the image is clicked displays the ramen details.
//     //The render ramen details wirks as the callback for the eventen listener palced at the image.
//     image.addEventListener("click", (ramen) => renderRamenDetails (ramen));
// }

// function renderRamenDetails (ramen) {
//     const ramenDetail = document.querySelector(".detail-image");
//     const image = document.createElement("img");
//     image.src = ramen.image;
//     image.alt = ramen.image;
//     ramenDetail.append(image)
//     //Declaration process.
//     //Get the values from the database.
//     const name = document.querySelector(".name")
//     name.textContent = ramen.name;
//     const restaurant = document.querySelector(".restaurant")
//     restaurant.textContent = ramen.restaurant;
//     const rating =document.querySelector("#rating-display")
//     rating.textContent = ramen.rating;
//     const comment = document.querySelector("#comment-display")
//     comment.textContent = ramen.comment;
// }


// // Updates the form
// function newRamen (event) {
//     event.preventDefault()
//     //Selects the ID as the target and assign the value as the content.
//     const newRamenName = event.target.name.value;
//     const newRamenRestaurant = event.target.restaurant.value;
//     const newRamenRating = event.target.rating.value;
//     const newRamenImage = event.target.image.value;
//     //Give the comments a new value using the comment id
//     const newRamenComment = event.target["new-comment"].value;
//     const newRamen = {
//         "name": newRamenName,
//         "restaurant": newRamenRestaurant,
//         "rating": newRamenRating,
//         "comment": newRamenComment,
//         "image": newRamenImage
//     }
//     renderRamen(newRamen)
// }


//code need to be fixed to make it work.
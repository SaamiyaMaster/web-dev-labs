// Saamiya Master - Lab 7

const name = "Ada";
let labsCompleted = 6;
let isEnrolled = false;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

// JS for second button
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
let likes = 0;

likeBtn.addEventListener("click", function() {
  likes = likes + 1;
  likeCount.textContent = `${likes} likes`;
});


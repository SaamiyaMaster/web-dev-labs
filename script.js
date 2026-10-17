const name = "Ada";
let labsCompleted = 6;
let isEnrolled = false;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");

function createLikeCounter() {
  let likes = 0; // private — not reachable from outside

  function updateLikeDisplay(currentLikes) {
    likeCount.textContent = `${currentLikes} likes`;

    if (currentLikes >= 10) {
      likeMessage.textContent = "Wow, thanks for all the likes!";
    } else if (currentLikes >= 5) {
      likeMessage.textContent = "Glad you like it!";
    } else {
      likeMessage.textContent = "";
    }
  }

  return {
    increment() {
      likes++;
      updateLikeDisplay(likes);
    },
    getLikes() {
      return likes;
    }
  };
}

const counter = createLikeCounter();

if (likeBtn) {
  likeBtn.addEventListener("click", function() {
    counter.increment();
  });
} else {
  console.warn("like-btn not found on this page");
}

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

const goals = ["HTML", "CSS", "JavaScript", "Git"];
const goalsList = document.querySelector("#goals-list");

goals.forEach(function(goal) {
  const item = document.createElement("li");
  item.textContent = goal;
  goalsList.appendChild(item);
});

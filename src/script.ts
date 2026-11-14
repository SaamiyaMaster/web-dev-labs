// Saamiya Master — Lab 11

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

const studentName = "Ada";
let labsCompleted = 6;
let isEnrolled = false;

labsCompleted = labsCompleted + 1;
console.log(`${studentName} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn")!;
const likeCount = document.querySelector("#like-count")!;
const likeMessage = document.querySelector("#like-message")!;
const goalsList = document.querySelector("#goals-list")!;

const LikeCounter = {
  likes: (typeof localStorage !== "undefined" && localStorage.getItem("likes"))
    ? Number(localStorage.getItem("likes"))
    : 0,
  increment(): void {
    this.likes = this.likes + 1;
    localStorage.setItem("likes", this.likes.toString());
    this.render();
  },
  render(): void {
  likeCount.textContent = `${this.likes} likes`;
  }
};

likeBtn.addEventListener("click", () => {
  LikeCounter.increment();
});

const themeBtn = document.querySelector("#theme-btn")!;

themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const goals: string[] = ["HTML", "CSS", "JavaScript"];

goals.forEach(function(goal: string) {
  const item = document.createElement("li");
  item.textContent = goal;
  goalsList.appendChild(item);
});

function getGreetingAfterDelay() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Hello from the future!");
    }, 800);
  });
}

getGreetingAfterDelay().then(function(message) {
  console.log(message);
});

async function showGreeting() {
  const message = await getGreetingAfterDelay();
  console.log(message);
}

showGreeting()

interface CatFact {
  fact: string;
  length: number;
}

const factBtn =  document.querySelector("#fact-btn")!;
const factDisplay = document.querySelector("#fact-display")!;

async function loadFact() {
  factDisplay.textContent= "Loading...";
  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) {
      throw new Error("Server responded with an error");
    }
    const data = await response.json() as CatFact;
    factDisplay.textContent = data.fact;
  }catch (error) {
    factDisplay.textContent = "Couldn't load a fact right now. Try again.";
    console.error(error);
  }
}

factBtn.addEventListener("click", loadFact);

const locationBtn = document.querySelector("#location-btn")!;
const locationDisplay = document.querySelector("#location-display")!;

locationBtn.addEventListener("click", function() {
  if (!("geolocation" in navigator)) {
    locationDisplay.textContent =
      "Geolocation isn't supported.";
    return;
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude.toFixed(2);
    const lon = position.coords.longitude.toFixed(2);
    locationDisplay.textContent = `You're near ${lat}, ${lon}`;
  }, function(error) {
    locationDisplay.textContent =
      "Location access was denied.";
    console.warn(error);
  });
});


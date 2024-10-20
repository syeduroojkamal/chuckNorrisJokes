function fetchJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        joke = JSON.parse(this.responseText).value;
        document.querySelector("#joke").textContent = joke;
      } else {
        document.querySelector("#joke").textContent = "API is not working";
      }
    }
  };

  xhr.send();
}

document.querySelector("#fetchJokeButton").addEventListener("click", fetchJoke);
document.addEventListener("DOMContentLoaded", fetchJoke);

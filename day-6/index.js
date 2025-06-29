const joke = document.querySelector(".joke");
const Random = document.getElementById("random");
Random.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((res) => res.json())
    .then((data) => {
      if (data.type === "single") {
        joke.innerHTML = data.joke;
      } else if (data.type === "twopart") {
        joke.innerHTML = `${data.setup}<br>${data.delivery}`;
      }
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

let btn = document.querySelector(".btn");
let jokes = document.querySelector(".jokes");
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();
  jokes.innerHTML = data.joke;

  // .then((res) => res.json())
  // .then((data) => {
  //   jokes.innerHTML = data.joke;
  // });
}
generateJoke();
btn.addEventListener("click", generateJoke);

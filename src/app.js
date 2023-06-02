import "./styles/main.scss";
import Emoji from "./assets/images/laughing.svg";
import getJoks from "./funcs/getJoks";

const img = document.getElementById("laughImg");
img.src = Emoji;
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", getJoks);
getJoks();

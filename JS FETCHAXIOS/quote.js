const url1 = "https://type.fit/api/quotes";

async function getquote() {
  try {
    let quote = await axios.get(url1);
    var indx = Math.floor(Math.random() * 16);
    // let auth= quote.data[indx].author
    return quote.data[indx].text;
  } catch (e) {
    console.log("error", e);
  }
}

const button1 = document.getElementById("button_1");
button1.addEventListener("click", async () => {
  console.log("clicked quote");
  let quote = await getquote();

  let output = document.querySelector("p");
  output.innerText = quote;
  const heading = document.getElementById("heading");
  heading.innerText = "Here is the quote";
  output.style.backgroundColor = "#FFD9B7";
  output.style.color = "#241468";
  output.style.fontSize = "50px";

  let body = document.querySelector("body");
  body.style.backgroundColor = "#F94C10";
});
const linkedinIcon = document.getElementById("linkedin-icon");

// Add a click event listener
linkedinIcon.addEventListener("click", function() {
    // Open the LinkedIn profile in a new tab or window
    window.open("https://www.linkedin.com/in/iyogeshwar/");
});
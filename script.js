
const elements = document.querySelectorAll(".news-card, .circle, .market-box");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

elements.forEach(el => observer.observe(el));




window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "#000";
navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
}
else{
navbar.style.background = "#111";
navbar.style.boxShadow = "none";
}

});




function randomMarket(){

const prices = document.querySelectorAll(".market-box p");
const changes = document.querySelectorAll(".market-box span");

prices.forEach(price => {

let base = parseFloat(price.innerText.replace("$",""));

let change = (Math.random()*200 - 100);

let newPrice = base + change;

price.innerText = "$" + newPrice.toFixed(0);

});

changes.forEach(change => {

let percent = (Math.random()*4 - 2).toFixed(2);

change.innerText = percent + "%";

if(percent > 0){
change.className = "up";
change.innerText = "+" + percent + "%";
}
else{
change.className = "down";
}

});

}

setInterval(randomMarket, 4000);
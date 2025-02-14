
const users = [
    { name: "Gustavo Herwitz", title: "UI/UX Designer",img : "./assets/images/app.png" },
    { name: "Phillip Curtis", title: "Graphic Designer", img: "./assets/images/images.png" },
    { name: "Talan Torff", title: "Web Developer", img: "./assets/images/design.png" },
    { name: "Abram Vaccaro", title: "App Developer", img: "./assets/images/web.png" }
];

function createCards() {
    const container = document.getElementById("cardContainer");
    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${user.img}" alt="${user.name}">
            <h3>${user.name}</h3>
            <p>${user.title}</p>
        `;
        container.appendChild(card);
    });
}
createCards();


document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".social-icon");

    icons.forEach(icon => {
        icon.addEventListener("mouseenter", function () {
            this.style.backgroundColor = this.getAttribute("data-color");
        });

        icon.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "white";
        });
    });
});
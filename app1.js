const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterablecards = document.querySelectorAll(".fillterable_cards .card");
const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // console.log(e.target);
    filterablecards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
};
filterButtons.forEach(button => button.addEventListener("click",filterCards));
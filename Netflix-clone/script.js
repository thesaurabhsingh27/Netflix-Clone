const questions = document.querySelectorAll(".question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle("active");

    });

});

console.log("Netflix Clone Loaded Successfully");
console.log("FAQ JavaScript Loaded");

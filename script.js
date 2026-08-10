/* =========================================
   BIRTHDAY OPENING ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const monkey = document.getElementById("monkey");
    const duck = document.getElementById("duck");
    const hug = document.getElementById("hug");
    const tikuPhoto = document.getElementById("tikuPhoto");
    const birthdayContent = document.querySelector(".birthday-content");


    /*
        Timeline

        0–2 sec
        Intro text

        2–4 sec
        Monkey + Duck enter

        4–6 sec
        They hug

        4.8 sec
        Monkey + Duck disappear

        6 sec
        Tiku photo appears

        6.5 sec
        Birthday text appears
    */


    // Make sure the hug is initially hidden
    hug.style.opacity = "0";


    // At 4.5 seconds:
    // hide the individual characters
    setTimeout(() => {

        monkey.style.animation = "monkeyDisappear 0.5s ease forwards";

        duck.style.animation = "duckDisappear 0.5s ease forwards";

    }, 4500);


    // At 6 seconds:
    // Tiku photo becomes visible
    setTimeout(() => {

        tikuPhoto.classList.add("show-photo");

    }, 6000);


    // Begin Our Story button
    const beginButton =
        document.getElementById("beginStory");


    beginButton.addEventListener("click", () => {

        /*
            Later we will connect this button
            to the next section of your website.

            For now, it shows a small transition.
        */

        document.body.classList.add("story-started");

        console.log("Our story begins ❤️");

    });

});

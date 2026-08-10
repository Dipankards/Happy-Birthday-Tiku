/* =========================================
   HAPPY BIRTHDAY TIKU
   OPENING ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const monkey = document.getElementById("monkey");
    const duck = document.getElementById("duck");
    const hugCharacter = document.getElementById("hugCharacter");
    const heartBurst = document.getElementById("heartBurst");
    const storyButton = document.getElementById("storyButton");
    const storySection = document.getElementById("storySection");


    /* =====================================
       HIDE MONKEY + DUCK WHEN HUG APPEARS
    ====================================== */

    setTimeout(() => {

        monkey.classList.add("hugged");
        duck.classList.add("hugged");

    }, 4700);


    /* =====================================
       MAKE SURE HUG IS VISIBLE
    ====================================== */

    setTimeout(() => {

        hugCharacter.classList.add("active");

    }, 4700);


    /* =====================================
       HEART BURST
    ====================================== */

    setTimeout(() => {

        heartBurst.classList.add("active");

    }, 4900);


    /* =====================================
       BEGIN OUR STORY BUTTON
    ====================================== */

    storyButton.addEventListener("click", () => {

        storySection.scrollIntoView({
            behavior: "smooth"
        });

    });


    /* =====================================
       LITTLE HEARTS WHEN CLICKING
    ====================================== */

    document.addEventListener("click", (event) => {

        // Don't create extra hearts when clicking
        // the story button.
        if (event.target === storyButton) {
            return;
        }


        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = event.clientX + "px";

        heart.style.top = event.clientY + "px";

        heart.style.fontSize = "18px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        heart.style.transition =
            "all 1s ease";


        document.body.appendChild(heart);


        requestAnimationFrame(() => {

            heart.style.transform =
                "translateY(-70px) scale(1.4)";

            heart.style.opacity = "0";

        });


        setTimeout(() => {

            heart.remove();

        }, 1000);

    });

});

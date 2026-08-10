document.addEventListener("DOMContentLoaded", () => {

    const monkey = document.getElementById("monkey");
    const duck = document.getElementById("duck");
    const hug = document.getElementById("hug");
    const beginStory = document.getElementById("beginStory");


    /* =================================================
       OPENING ANIMATION
    ================================================= */


    /*
        Timeline:

        0–2 sec
        Intro

        2–4.4 sec
        Monkey + Duck enter

        4.4 sec
        Hug appears

        4.8 sec
        Monkey + Duck disappear

        5.8 sec
        Tiku photo appears

        6.6 sec
        Birthday text appears
    */


    /* -------------------------------------------------
       Make individual characters disappear
    ------------------------------------------------- */

    setTimeout(() => {

    if (monkey) {
        monkey.style.display = "none";
    }

    if (duck) {
        duck.style.display = "none";
    }

}, 4500);



    /* -------------------------------------------------
       Small celebration effect when they hug
    ------------------------------------------------- */

    setTimeout(() => {

        createHeartBurst();

    }, 4500);



    /* =================================================
       BEGIN OUR STORY
    ================================================= */

    if (beginStory) {

        beginStory.addEventListener("click", () => {

            const story =
                document.getElementById("story");

            if (story) {

                story.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }



    /* =================================================
       HEART BURST
    ================================================= */

    function createHeartBurst() {

        const hearts = [
            "❤️",
            "💗",
            "💕",
            "💖",
            "❤️",
            "💘",
            "💕",
            "💗"
        ];


        hearts.forEach((heartText, index) => {

            const heart =
                document.createElement("div");


            heart.innerHTML = heartText;


            heart.style.position = "fixed";

            heart.style.left = "50%";

            heart.style.top = "38%";

            heart.style.zIndex = "999";

            heart.style.pointerEvents = "none";

            heart.style.fontSize =
                `${18 + Math.random() * 15}px`;


            const angle =
                (Math.PI * 2 / hearts.length) *
                index;


            const distance =
                100 + Math.random() * 120;


            const x =
                Math.cos(angle) * distance;


            const y =
                Math.sin(angle) * distance;


            heart.animate(

                [
                    {
                        opacity: 0,

                        transform:
                            "translate(-50%, -50%) scale(.3)"
                    },

                    {
                        opacity: 1,

                        transform:
                            "translate(-50%, -50%) scale(1)"
                    },

                    {
                        opacity: 0,

                        transform:
                            `translate(
                                calc(-50% + ${x}px),
                                calc(-50% + ${y}px)
                            )
                            scale(1.2)`
                    }
                ],

                {
                    duration:
                        1200 + Math.random() * 500,

                    easing:
                        "cubic-bezier(.2,.8,.3,1)",

                    fill: "forwards"
                }

            );


            setTimeout(() => {

                heart.remove();

            }, 1800);

        });

    }



    /* =================================================
       REVEAL ANIMATIONS FOR SECTIONS
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".story-card, " +
            ".memory-message, " +
            ".gallery-item, " +
            ".video-card, " +
            ".voice-card, " +
            ".chat-story, " +
            ".love-card, " +
            ".promise, " +
            ".love-letter"
        );


    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =================================================
       CLICK HEART EFFECT
    ================================================= */

    document.addEventListener("click", (event) => {

        if (
            event.target.tagName === "BUTTON" ||
            event.target.tagName === "A"
        ) {
            return;
        }


        const heart =
            document.createElement("div");


        heart.innerHTML = "❤️";


        heart.style.position = "fixed";

        heart.style.left =
            `${event.clientX}px`;

        heart.style.top =
            `${event.clientY}px`;

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        heart.style.fontSize = "16px";


        heart.animate(

            [
                {
                    opacity: 1,

                    transform:
                        "translate(-50%, -50%) scale(.7)"
                },

                {
                    opacity: 0,

                    transform:
                        "translate(-50%, -130px) scale(1.3)"
                }
            ],

            {
                duration: 900,

                easing: "ease-out",

                fill: "forwards"
            }

        );


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 1000);

    });

});

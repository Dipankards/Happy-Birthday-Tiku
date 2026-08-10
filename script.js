function beginStory() {

    const story = document.getElementById("story");

    story.scrollIntoView({
        behavior: "smooth"
    });

}


/* ========================== */
/* SCROLL REVEAL ANIMATION */
/* ========================== */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


document
    .querySelectorAll(
        ".timeline-item, .story-event, .memory-card, .love-card, .promise"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "all 1s ease";

        observer.observe(element);

    });


/* ========================== */
/* CLICK HEARTS */
/* ========================== */

document.addEventListener(
    "click",
    function(event) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.pointerEvents = "none";

        heart.style.fontSize = "20px";

        heart.style.zIndex = "9999";

        heart.style.transition =
            "all 1s ease";

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.style.transform =
                "translateY(-80px) scale(1.5)";

            heart.style.opacity = "0";

        }, 20);


        setTimeout(() => {

            heart.remove();

        }, 1000);

    }
);

/* =========================================================
   OUR CINEMA
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const intro =
        document.getElementById("intro");

    const cinema =
        document.getElementById("cinema");

    const movieGrid =
        document.getElementById("movieGrid");

    const emptyCollection =
        document.getElementById("emptyCollection");

    const movieCount =
        document.getElementById("movieCount");

    const player =
        document.getElementById("player");

    const video =
        document.getElementById("video");

    const closePlayer =
        document.getElementById("closePlayer");


    /* =====================================================
       CINEMATIC INTRO
    ===================================================== */

    const INTRO_DURATION = 4300;

    setTimeout(() => {

        if (intro) {
            intro.classList.add("hidden");
        }

        if (cinema) {
            cinema.classList.add("visible");
        }

    }, INTRO_DURATION);


    /* =====================================================
       MOVIE COUNT
    ===================================================== */

    function updateMovieCount() {

        if (!movieGrid || !movieCount) {
            return;
        }

        const cards =
            movieGrid.querySelectorAll(".movie-card");

        const count =
            cards.length.toString().padStart(2, "0");

        movieCount.textContent = count;

        if (emptyCollection) {

            if (cards.length === 0) {
                emptyCollection.classList.add("visible");
            } else {
                emptyCollection.classList.remove("visible");
            }

        }
    }


    updateMovieCount();


    /* =====================================================
       OPEN MOVIE
    ===================================================== */

    function openMovie(card) {

        if (!card || !video || !player) {
            return;
        }

        const movieFile =
            card.getAttribute("data-video");

        if (!movieFile) {
            return;
        }

        video.src = movieFile;

        video.currentTime = 0;

        player.classList.add("active");

        player.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

        video.play().catch(() => {
            /*
                Some browsers require an additional
                user interaction before playback.
            */
        });

    }


    /* =====================================================
       CLOSE MOVIE
    ===================================================== */

    function closeMovie() {

        if (video) {

            video.pause();

            video.removeAttribute("src");

            video.load();

        }

        if (player) {

            player.classList.remove("active");

            player.setAttribute(
                "aria-hidden",
                "true"
            );

        }

        document.body.style.overflow = "";

    }


    /* =====================================================
       MOVIE CARD CLICK
    ===================================================== */

    if (movieGrid) {

        movieGrid.addEventListener(
            "click",
            (event) => {

                const card =
                    event.target.closest(".movie-card");

                if (!card) {
                    return;
                }

                openMovie(card);

            }
        );

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closePlayer) {

        closePlayer.addEventListener(
            "click",
            closeMovie
        );

    }


    /* =====================================================
       CLICK OUTSIDE VIDEO
    ===================================================== */

    if (player) {

        player.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === player ||
                    event.target.classList.contains(
                        "player-background"
                    )
                ) {

                    closeMovie();

                }

            }
        );

    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                player &&
                player.classList.contains("active")
            ) {

                closeMovie();

            }

        }
    );


    /* =====================================================
       VIDEO END
    ===================================================== */

    if (video) {

        video.addEventListener(
            "ended",
            () => {

                /*
                    Keep the player open after the movie ends.
                    The viewer can close it manually.
                */

            }
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    updateMovieCount();

});

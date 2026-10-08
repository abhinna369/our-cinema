/* =====================================================
   OUR CINEMA
   GOOGLE DRIVE ENTRANCE
===================================================== */


/*
    YOUR GOOGLE DRIVE FOLDER

    This is the folder you gave me:

    Our Cinema
*/

const GOOGLE_DRIVE_FOLDER =
    "https://drive.google.com/drive/folders/18YcYQGwClqCAg9Rf2EWSztFJWuIk1mmh";


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const enterButton =
            document.getElementById(
                "enterCinema"
            );


        if (!enterButton) {
            return;
        }


        enterButton.addEventListener(
            "click",
            () => {

                /*
                    Open Google Drive in the
                    same browser tab.
                */

                window.location.href =
                    GOOGLE_DRIVE_FOLDER;

            }
        );

    }
);

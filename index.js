const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
const madslibs = [
    {
        madslib: `
    Eyes are distracting. You see too much. You don’t see
    enough. And it’s hard to focus when you’re thinking those
    whites are really white or they must have hepatitis, or is
    that a burst vein? So I try to avoid eyes whenever possible.
    `,
        replacements: [
            { partOfSpeech: "noun (plural)", replace: "eyes" },
            { partOfSpeech: "verb (present)", replace: "see" },
            { partOfSpeech: "verb (present)", replace: "focus" },
            { partOfSpeech: "color", replace: "white" }
        ]
    },
    {
        madslib: `
    What he has is pure empathy. He can assume your
    point of view, or mine -- and maybe
    some other points of view that
    scare him. It’s an uncomfortable
    gift, Jack. Perception’s a tool
    that’s pointed on both ends.
    `,
        replacements: [
            { partOfSpeech: "noun", replace: "empathy" },
            { partOfSpeech: "verb (present)", replace: "assume" },
            { partOfSpeech: "noun", replace: "point" },
            { partOfSpeech: "noun", replace: "view" },
            { partOfSpeech: "adjective", replace: "uncomfortable" },
            { partOfSpeech: "noun", replace: "Perception" },
            { partOfSpeech: "adjective", replace: "pointed" }
        ]
    },
    {
        madslib: `The mathematics of human behavior.
        All those ugly variables. Some bad
        math with this shrike fellow. Are
        you reconstructing his fantasies?
        What kind of problems does he have?`,
        replacements: [
            { partOfSpeech: "noun", replace: "mathematics" },
            { partOfSpeech: "adjective", replace: "human" },
            { partOfSpeech: "noun", replace: "behavior" },
            { partOfSpeech: "adjective", replace: "ugly" },
            { partOfSpeech: "noun (plural)", replace: "variables" },
            { partOfSpeech: "gerund", replace: "reconstructing" },
            { partOfSpeech: "noun (plural)", replace: "fantasies" }
        ]
    },
    {
        madslib: `We both know the unreality of
        taking a life, of people who die
        when we have no other choice. We
        know in those moments they’re not
        flesh, but light and air and color.`,
        replacements: [
            { partOfSpeech: "noun", replace: "unreality" },
            { partOfSpeech: "gerund", replace: "taking" },
            { partOfSpeech: "noun", replace: "life" },
            { partOfSpeech: "verb (present)", replace: "die" },
            { partOfSpeech: "noun", replace: "choice" },
            { partOfSpeech: "noun", replace: "flesh" },
            { partOfSpeech: "noun", replace: "light" },
            { partOfSpeech: "noun", replace: "air" },
            { partOfSpeech: "noun", replace: "color" }
        ]
    },
    {
        madslib: `You sit in that chair, as you have
        so many times before. It holds
        among its molecules the vibrations
        of all our conversations ever held
        in its presence.
        All the exchanges, the petty
        irritations, deadly revelations,
        the flat announcements of disaster.
        The grunts and poetry of life.`,
        replacements: [
            { partOfSpeech: "noun", replace: "chair" },
            { partOfSpeech: "noun (plural)", replace: "molecules" },
            { partOfSpeech: "noun (plural)", replace: "vibrations" },
            { partOfSpeech: "noun (plural)", replace: "conversations" },
            { partOfSpeech: "adjective", replace: "petty" },
            { partOfSpeech: "adjective", replace: "deadly" },
            { partOfSpeech: "adjective", replace: "flat" },
            { partOfSpeech: "noun", replace: "grunts" },
            { partOfSpeech: "noun", replace: "poetry" },
            { partOfSpeech: "noun", replace: "life" }
        ]
    }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Put all API endpoints under '/api'
app.get("/api/madslib", (req, res) => {
    // Return them as json
    const index = getRandomInt(madslibs.length);
    const madslib = madslibs[index];
    res.json(madslib);

    console.log("sending", madslib);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Madslibs server listening on ${port}`);

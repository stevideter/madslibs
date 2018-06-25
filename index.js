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
            { partOfSpeech: "verb", replace: "see" },
            { partOfSpeech: "verb", replace: "focus" },
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
            { partOfSpeech: "verb", replace: "assume" },
            { partOfSpeech: "noun", replace: "point" },
            { partOfSpeech: "noun", replace: "view" },
            { partOfSpeech: "adjective", replace: "uncomfortable" },
            { partOfSpeech: "noun", replace: "Perception" },
            { partOfSpeech: "adjective", replace: "pointed" }
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

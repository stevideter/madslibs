const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/madslib', (req, res) => {
    const madslib = `
    Eyes are distracting. You see too much. You don’t see
    enough. And it’s hard to focus when you’re thinking those
    whites are really white or they must have hepatitis, or is
    that a burst vein? So I try to avoid eyes whenever possible.
    `;
  // Return them as json
  res.json({madslib});

  console.log(`Sent madslib`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Madslibs server listening on ${port}`);
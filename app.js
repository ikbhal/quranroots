const express = require('express');
const app = express();


app.use(express.static('public'));

// Serve the JSON file
app.get('/quran-roots', (req, res) => {
  res.sendFile(__dirname + '/quran_roots.json');
});

const PORT = 3786;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

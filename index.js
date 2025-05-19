// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');
// // const { createClient } = require('@supabase/supabase-js');

// dotenv.config();

// const app = express();
// const port = 3000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // replaces bodyParser.json()
// app.use(express.static(__dirname + '/public')); // serve static files from /public



// // const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'home.html'));
// });
// app.get('/home', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'home.html'));
// });
// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });
// app.get('/player', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'player.html'));
// });
// app.get('/ranking', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'ranking.html'));
// });
// app.get('/top_teams_per_year', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'top_teams_per_year.html'));
// });
// app.get('/teams', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'teams.html'));
// });


// app.post('/rankings', async (req, res) => {
//   const { player_name, rating } = req.body;
//   const { data, error } = await supabase
//     .from('rankings')
//     .insert([{ player_name, rating }]);

//   if (error) return res.status(500).json({ error });
//   res.status(200).json(data);
// });

// app.get('/rankings', async (req, res) => {
//   const { data, error } = await supabase
//     .from('rankings')
//     .select('*')
//     .order('rating', { ascending: false });

//   if (error) return res.status(500).json({ error });
//   res.status(200).json(data);
// });


// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { createClient } = require('@supabase/supabase-js'); // FIXED

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY); // FIXED

// Serve HTML routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/player', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'player.html'));
});
app.get('/ranking', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ranking.html'));
});
app.get('/top_teams_per_year', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'top_teams_per_year.html'));
});
app.get('/teams', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'teams.html'));
});

// Supabase API routes
app.post('/rankings', async (req, res) => {
  const { player_name, rating } = req.body;
  const { data, error } = await supabase
    .from('rankings')
    .insert([{ player_name, rating }]);

  if (error) return res.status(500).json({ error });
  res.status(200).json(data);
});

app.get('/rankings', async (req, res) => {
  const { data, error } = await supabase
    .from('rankings')
    .select('*')
    .order('rating', { ascending: false });

  if (error) return res.status(500).json({ error });
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

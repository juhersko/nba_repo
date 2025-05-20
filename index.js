const express = require('express');
const dotenv = require('dotenv');
const supabaseClient = require('@supabase/supabase-js'); 
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

const supabase = supabaseClient.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY); 

// Serve HTML routes 
app.get('/', (req, res) => {
  res.sendFile('public/home.html', { root: __dirname });
});

app.get('/home', (req, res) => {
  res.sendFile('public/home.html', { root: __dirname });
});
app.get('/about', (req, res) => {
  res.sendFile('public/about.html', { root: __dirname });
});
app.get('/player', (req, res) => {
  res.sendFile('public/player.html', { root: __dirname });
});
app.get('/ranking', (req, res) => {
  res.sendFile('public/ranking.html', { root: __dirname });
});
app.get('/top_teams_per_year', (req, res) => {
  res.sendFile('public/top_teams_per_year.html', { root: __dirname });
});
app.get('/teams', (req, res) => {
  res.sendFile('public/teams.html', { root: __dirname });
});


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
    .select('player_name, rating')
    .order('rating', { ascending: false });
    console.log("error", error);

  if (error) return res.status(500).json({ error });
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

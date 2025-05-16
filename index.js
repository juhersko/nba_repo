const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

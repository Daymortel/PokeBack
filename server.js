const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const pokemon = require('./src/routes/pokemons.route');
const team = require('./src/routes/teams.route');
const user = require('./src/routes/users.route');

app.use(express.json());
app.use(cors());
app.use('/pokemon', pokemon);
app.use('/team', team);
app.use('/user', user);

app.listen(port, () => console.log(`Server connected to port ${port}`));
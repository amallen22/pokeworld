/*
* Module dependencies
*/

import React from 'react';
import PokeTable from './components/PokeTable';

var pokemons = [
	{ number: 1, name: 'Bulbasur'},
	{ number: 2, name: 'Ivysur'},
	{ number: 3, name: 'Venausur'}
];

React.render(
<PokeTable pokemons={pokemons} />, document.getElementById('container')
);
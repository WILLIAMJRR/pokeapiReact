import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/selectPokemon.css";

const SelectTypes = ({ setSelectValue }) => {
	const [types, setSelectTypes] = useState();

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/type`)
			.then((res) => setSelectTypes(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	// se captura la opciones que vamos cambiando
	const handleChange = (e) => {
		// se esta capturando la informacion
		setSelectValue(e.target.value);
	};

	return (
		<select
			className='select_type_pokemon'
			onChange={handleChange}
		>
			<option value='allpokemon'>All Pokemon</option>
			{types?.map((type) => (
				<option
					key={type.url}
					value={type.url}
				>
					{type.name}
				</option>
			))}
		</select>
	);
};

export default SelectTypes;

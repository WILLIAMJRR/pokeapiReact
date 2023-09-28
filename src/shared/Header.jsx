import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
	const { nameTrainer } = useSelector((state) => state);

	let capitalizeFirstLetter = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	{
		if (nameTrainer) {
			return (
				<header className='pokedex_header'>
					<h2 className='pokedex_name'>
						Hi{" "}
						<span className='pokedex_name_span'>
							{capitalizeFirstLetter(nameTrainer)},
						</span>
						Welcome.{" "}
					</h2>
				</header>
			);
		}
	}
};

export default Header;

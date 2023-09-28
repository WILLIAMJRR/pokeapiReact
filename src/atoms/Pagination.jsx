import axios from "axios";
import React, { useState } from "react";
import "./styles/pagination.css";

const Pagination = ({ pokemons, setpage, page, pokemonPerPage }) => {
	//Pagination

	// page number obtendra el numero de pagina
	const arrayPage = [];

	//cantidad de pokemon que tenga en el  arreglo final de la peticion que esta en pokedex
	const totalPokemons = pokemons?.results.length;

	//total de pokemon que es 100 /20 que es los pokemones que voy a tener por paginas
	const maxBlockPokemon = Math.ceil(totalPokemons / pokemonPerPage);

	//paginacion dinamica
	for (let i = 1; i <= maxBlockPokemon; i++) {
		arrayPage.push(i);
	}

	//mi nuevo estado de pagina actual va hacer el resultado de pagina actual -1 o +1

	const onPreviusPage = () => {
		if (page - 1 >= 1) {
			setpage((page) => page - 1);
		}
	};

	const onNextPage = () => {
		if (page + 1 <= arrayPage.length) {
			setpage((page) => page + 1);
		}
	};

	const onSpecificPage = (n) => {
		setpage(n);

		console.log(n);
	};

	return (
		<nav
			id='nav_pagination'
			className='pagination is-centered p-5   '
		>
			{/* que si page es igual a 1 colocale la clase is disable */}
			<button
				className={`pagination-previous ${page === 1 ? "is-disabled" : ""}`}
				onClick={onPreviusPage}
			>
				Previous
			</button>
			{/* si page es mayor o igual q arrayPage entonces ponle la clase de bulma is disabled */}
			<button
				className={`pagination-next  ${
					page >= arrayPage.length ? "is-disabled" : ""
				}`}
				onClick={onNextPage}
			>
				Next page
			</button>
			<ul className='pagination-list '>
				{arrayPage.map((noPage) => (
					<li key={noPage}>
						<button
							//si noPage es igual a page q es 1 colocale la clase iscurrent
							className={`pagination-link  ${
								noPage === page ? "is-current" : ""
							}`}
							// cambia la pagina actual de los bloques
							onClick={() => onSpecificPage(noPage)}
						>
							{noPage}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;

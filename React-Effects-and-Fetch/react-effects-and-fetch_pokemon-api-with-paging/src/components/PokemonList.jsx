import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  const [pagination, setPagination] = useState({
    next: null,
    previous: null,
  });

  function nextPage() {
    if (pagination.next) setPage(page + 20);
  }

  function previousPage() {
    if (pagination.previous) {
      setPage(page - 20);
    } else {
      console.log("This area is currently locked - level up!");
    }
  }

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPagination({
          next: data.next,
          previous: data.previous,
        });
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  return (
    <main>
      {pagination.previous && (
        <button type="button" className="button" onClick={previousPage}>
          Previous Page
        </button>
      )}

      {pagination.next && (
        <button type="button" className="button" onClick={nextPage}>
          Next Page
        </button>
      )}
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}

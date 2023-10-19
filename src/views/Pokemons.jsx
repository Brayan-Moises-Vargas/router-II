import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Pokemons = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonsSelect, setPokemonsSelect] = useState("");
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemons = async () => {
    const rest = await fetch(url);
    const { results } = await rest.json();
    setPokemones(results);
   
  };

const ToPokemonsDetails = async () => {
    pokemonsSelect ? navigate(`/pokemons/${pokemonsSelect}`) : 
    alert("Debes seleccionar un pokemon")
}

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="mt-5 text-center">
      <h1>Selecciona un Pokemons</h1>
     
      <div className="col-5 col-ms-3 col-lg-2 mx-auto">
        
        <select
          value={pokemonsSelect}
          className="form-select text-center"
          onChange={({target}) =>setPokemonsSelect(target.value)}
        >
          <option value="" disabled>
            Pokemons
          </option>
          {pokemones.map(({ name }, i) => (
            <option
             key={i} 
             value={name}
             >
              {name}
            </option>))}
        </select>
        <Button
          onClick={ToPokemonsDetails}
          variant="dark"
          className="mt-3"
        >
          Detalles
        </Button>
      </div>
    </div>
  );
};
export default Pokemons;

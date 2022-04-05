import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchHeroe: q,
  });

  const { searchHeroe } = values;
  const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchHeroe}`);
  };

  return (
    <div className=" container row my-3">
      <div className="col-5">
        <h2>Buscar Héroe</h2>
        <hr />
        <form className="form-control">
          <input
            type="text"
            placeholder="Nombre del Héroe"
            name="searchHeroe"
            autoComplete="off"
            className="form-control"
            onChange={handleInputChange}
            value={searchHeroe}
          />
          <button
            type="submit"
            className="btn w-100 btn-outline-info mt-2"
            onClick={handleSubmit}
          >
            Buscar
          </button>
        </form>
      </div>
      <div className="col-5">
        <h2>Resultados</h2>
        <hr />
        {q === "" ? (
          <p className=" fs-4 alert alert-info"> Busque un Héroe </p>
        ) : (
          heroesFiltrados.length === 0 && (
            <div className="alert alert-danger fs-4">
              `No hay resultados: {q} `
            </div>
          )
        )}
        {heroesFiltrados.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

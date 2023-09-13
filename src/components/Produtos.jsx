import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './produtos.css';


export const Productos = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const location = useLocation();

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchText = searchParams.get('search');

    if (searchText) {
      // Realiza una llamada a tu API para buscar productos según el texto de búsqueda
      // Ejemplo de llamada a la API:
      fetch(`https://tu-api.com/productos?search=${searchText}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            setNoResults(true);
            setSearchResults([]);
          } else {
            setNoResults(false);
            setSearchResults(data);
          }
        })
        .catch((error) => {
          console.error('Error al obtener resultados de la API:', error);
        });
    } else {
      // Si no hay texto de búsqueda, puedes cargar todos los productos desde la API
      // Ejemplo de llamada a la API para obtener todos los productos:
      fetch('https://tu-api.com/productos')
        .then((response) => response.json())
        .then((data) => {
          const filteredProducts = category
            ? data.filter((product) => product.category === category)
            : data;
          setProducts(filteredProducts);

          // Verifica si hay productos después de cargar desde la API
          if (filteredProducts.length === 0) {
            setNoResults(true);
          } else {
            setNoResults(false);
          }
        })
        .catch((error) => {
          console.error('Error al obtener productos de la API:', error);
        });
    }
  }, [location.search, category]);

  return (
    <div>
      <Navbar />
      <div className="productos-container">
        <h1>Productos</h1>
        <div>
          <select
            onChange={(e) => handleCategoryChange(e.target.value)}
            value={category}
          >
            <option value="">Todas las categorías</option>
            <option value="Alimentos">Alimentos</option>
            <option value="/produtos/Baño" >Baño</option>
            <option value="Brinquedos">Brinquedos</option>
          </select>
        </div>
        <div>
          <ul>
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <li key={result.id}>
                  <Link to={`/productos/${result.id}`}>{result.name}</Link>
                </li>
              ))
            ) : noResults ? (
              <p>Resultados de búsqueda: No hubo resultados para tu búsqueda.</p>
            ) : (
              products.map((product) => (
                <li key={product.id}>
                  <Link to={`/productos/${product.id}`}>{product.name}</Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

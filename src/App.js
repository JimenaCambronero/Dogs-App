import "./App.css";
import React, { useState, useEffect } from "react";
import Select from "./Components/Select";
import Card from "./Components/Card";
import getDog from "./Helpers/getDog";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Title from "./Components/Title";

const initialDog = {
  image: "",
  breed: {
    id: "",
    name: "",
  },
};

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState (null);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError('Error al cargar un perro')
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <Title/>
      
      <Select updateDog={updateDog} />

      {error && <Error error={error}/>}
      
      <Card dog={dog} updateDog={updateDog} loading={loading} />
      
      <Footer/>
    </div>
    
  );
}

export default App;

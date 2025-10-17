import Card from "../components/Card";
import { useEffect, useState } from "react";
import Secao from "../components/Secao";

export default function Home() {
  const [mensClothing, setMensClothing] = useState([]);
  const [electronics, setEletronics] = useState([]);;
  const [jewelery, setJewelery] = useState([]);;

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}men's%20clothing` )
      .then(res => res.json())
      .then(data => { setMensClothing(data) })
      .catch(err => console.error(err));

  
    fetch(`${API}electronics` )
      .then(res => res.json())
      .then(data => { setEletronics(data) })
      .catch(err => console.error(err));


    fetch(`${API}jewelery`)
      .then(res => res.json())
      .then(data => { setJewelery(data) })
      .catch(err => console.error(err));








},[API]);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">E-commerce</h1>

      <Secao title="Roupas Masculinas">
        <>
        {mensClothing.map(prod => (
          <Card
            key={prod.id} 
            {...prod}
          />
        ))}
        </>
      </Secao>
      <Secao title="Eletronicos">
        <>
        {electronics.map(prod => (
          <Card
            key={prod.id} 
            {...prod}
          />
        ))}
        </>
      </Secao>
      <Secao title="Joias">
        <>
        {jewelery.map(prod => (
          <Card
            key={prod.id} 
            {...prod}
          />
        ))}
        </>
      </Secao>
      </div>
      
  )};

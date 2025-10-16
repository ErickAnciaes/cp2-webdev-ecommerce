import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <div className="flex gap-4">
        <Link to="/"><h1 className="text-xl font-bold">Ecommerce</h1></Link>
        <Link to="/Perfil" className="text-gray-400 hover:underline">Perfil</Link>
        <Link to="/Carrinho" className="text-gray-400 hover:underline">Carrinho</Link>
      </div>
    </nav>
  );
}

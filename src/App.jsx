import Hashtaurante from '../src/assets/restaurante.jpg';
import './App.css';
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';

export function App() {
  return (
    <>
    <img src={Hashtaurante} alt="" className="capa"/>
    <Navegacao />
    <div class="menu">
    <ItemCardapio />
    <ItemCardapio />
    <ItemCardapio />
    <ItemCardapio />
    </div>
    </>
    )
  }
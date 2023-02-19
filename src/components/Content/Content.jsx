
import './Content.css';
import CupImg from '../../assets/copo_gravado.png';
import DeliveryIcon from '../../assets/entrega_gratis.svg';


export default function Content () {
  return (
    <section className="main-container">
      <div className="product-presentation-container">
        <div className="product-text-container">
        <h1 className="pp-title">
          Gravação em Copos e Garrafas Térmicas.
        </h1>
        <h3 className="pp-text">
          Gravamos nomes e logos a preferência do cliente.
          
          Clientes que comprarem copos conosco ganham uma gravação grátis!
        </h3>
        </div>

        <div className="deliver-container">
        <img className='cup-img' src={CupImg} alt="Copo Gravado" />
        <div className="delivery-icon-container">
          <img className='delivery-icon' src={DeliveryIcon} alt="Ícone Entrega Grátis" />
        <h3 className="deliver-text">Entregamos gratuitamente para a cidade de Almenara - MG</h3>
        </div>
        </div>

        
      </div>
    </section>
  )
}
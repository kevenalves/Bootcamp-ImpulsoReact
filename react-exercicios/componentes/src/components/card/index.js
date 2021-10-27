import { useState } from 'react';
import Button from '../button';
import './style.css'

const Card = () => {
    
    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor + 1)
    }

    function Remover(){
        setValor(valor - 1)
    }
    
    return (
        <div className="card">
            <h5 className="card-header text-card">Meu primeiro Card</h5>
            <div className="card-body">

            <p className="text-card">{valor}</p>

                <Button
                className="btn btn-success"
                onClick={ Adicionar }
                >
                    Adicionar
                </Button>

                <Button
                className="btn btn-danger"
                onClick={ Remover }
                >
                    Remover
                </Button>
            </div>
        </div>
    )
}

export default Card;
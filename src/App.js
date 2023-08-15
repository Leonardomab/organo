
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import ListaSuspensa from './componentes/ListaSuspensa';

function App() {

    const times = [
        
        {
            nome: 'Programação',
            corPrimaria: '#57C278;',
            corSegcundaria: '#D9F7E9;'
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82cffa',
            corSegcundaria: '#e8f8ff'
        },
        {
            nome: 'Data Science',
            corPrimaria: '#a6d157',
            corSegcundaria: '#f0f8e2'
        },
        {
            nome: 'develops',
            corPrimaria: '#ed6b69',
            corSegcundaria: '#fde7e8'
        },
        {
            nome: 'Ux e Design',
            corPrimaria: '#db6ebf',
            corSegcundaria: '#fae9f5'
        },
        {
            nome: 'Mobile',
            corPrimaria: '#ffba05',
            corSegcundaria: '#fff5d9'
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#ff8a29',
            corSegcundaria: '#ffeedf'
        },
    ]
    const [colaboradores, setColaboradores] = useState([])
    
    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
    }
    return (
        <div className="App">
            <Banner />
            <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
            <ListaSuspensa/>

            {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSegcundaria={time.corSegcundaria}/>)}

        </div>
    )
}

export default App;
  
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = () => {
/*
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'develops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
*/
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log('form foi submetido', nome, cargo, imagem)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha dos dados de imediato que estao ai</h2>
                <CampoTexto 
                    ogrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <Botao texto="Criar"/>
            </form>
        </section>
    )
}

export default Formulario


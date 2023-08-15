import React from 'react';
import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    console.log(props.itens);

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            {props.itens && props.itens.length > 0 && (
                <select>
                    {props.itens.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default ListaSuspensa;

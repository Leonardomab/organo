import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSegcundaria }

    return(
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nome} </h3>
        </section>
    )
}

export default Time



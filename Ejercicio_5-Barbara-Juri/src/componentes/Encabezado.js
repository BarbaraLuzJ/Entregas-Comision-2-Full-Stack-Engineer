import './Encabezado.css'

function Encabezado (props) {
    const {titulo} = props;
    return <h1 className="encabezado">{titulo}</h1>
}
export default Encabezado;
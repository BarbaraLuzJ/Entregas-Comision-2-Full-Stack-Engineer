import './Tabla.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";


export const Tabla = props => {

    const { productos, editar, borrar, editarID } = props;

    return (
        <div className="Contenedor-tabla">

            { productos.length === 0 && <h3 className='alert alert-danger'>No se encontraron productos</h3> }

            { productos.length > 0 &&
                <div className="table-responsive">
                    <table className="Tabla">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>nombre</th>
                                <th>precio</th>
                                <th>stock</th>
                                <th>marca</th>
                                <th>categoría</th>
                                <th>subcategoria</th>
                                <th>foto</th>
                                <th>envío</th>
                                <th>acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map( (producto,index) => 
                                    <tr key={index}>
                                        <td>{producto.id}</td>
                                        <td>{producto.nombre}</td>
                                        <td>${producto.precio}</td>
                                        <td>{producto.stock}</td>
                                        <td>{producto.marca}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.subcategoria}</td>                           
                                        <td><img width="100px" src={producto.foto} alt={'foto de ' + producto.nombre} /></td>
                                        <td>{producto.envio? 'Si':'No'}</td>                           
                                        <td>
                                            <div className={editarID && editarID === producto.id?'outline-':''} onClick={
                                                () => editar(producto.id)
                                            }>{ editarID && editarID === producto.id? <GiCancel className='iconos icono-cancelar' /> : <CiEdit className='iconos icono-editar' /> }</div>
                                            <br />
                                            <div disabled={editarID? true : false} onClick={
                                                () => borrar(producto.id)
                                            }><RiDeleteBin6Line className='iconos icono-eliminar'/></div>
                                        </td>                           
                                    </tr> 
                                )
                            }
                        </tbody>
                    </table>
                </div>                
            }
        </div>
    )
}

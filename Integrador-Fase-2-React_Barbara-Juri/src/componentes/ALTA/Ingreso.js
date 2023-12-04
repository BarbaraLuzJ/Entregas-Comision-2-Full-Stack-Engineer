import './Ingreso.css';

export default function Ingreso(props) {

    const { nombre, precio, stock, marca, categoria, subcategoria, foto, envio } = props.producto
    const { onChange, onSubmit, editarID, invalid } = props

    
    const nombreValidacion = !/^[a-zA-Z\s]{3,30}$/.test(nombre);
    const precioValidacion = !/^[1-9]\d*$/.test(precio);
    const stockValidacion = !/^[1-9]\d*$/.test(stock);
    const marcaValidacion = !/^[a-zA-Z\s]{3,30}$/.test(marca);
    const categoriaValidacion = !/^[a-zA-Z\s]{3,30}$/.test(categoria);
    const subcategoriaValidacion= !/^[a-zA-Z\s]{3,30}$/.test(subcategoria);
    const fotoValidacion =!foto

    return (
        <div className="Ingreso">
            <h1>Alta de productos</h1>
            
                <form className='formulario' onSubmit={onSubmit} >

                    <div className="inputIngreso">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre"  value={nombre} onChange={onChange} style={{ border: invalid && nombreValidacion ? '2px dotted red' : '' }}/>
                        <span className="mensaje-error" style={{ display: invalid && nombreValidacion ? 'block' : 'none' }}>
                        *Entre 3 y 30 caracteres
                    </span>
                    </div>

                    <div className="inputIngreso">
                        <label htmlFor="precio">Precio</label>
                        <input type="number" id="precio"  value={precio} onChange={onChange} style={{ border: invalid && precioValidacion ? '2px dotted red' : '' }} />
                        <span className="mensaje-error" style={{ display: invalid && precioValidacion ? 'block' : 'none' }}>
                        *El precio debe ser un número mayor que 0
                    </span>
                    </div>

                    <div className="inputIngreso">
                        <label htmlFor="stock">Stock</label>
                        <input type="number" id="stock"  value={stock} onChange={onChange} style={{ border: invalid && stockValidacion ? '2px dotted red' : '' }}/>
                        <span className="mensaje-error bs-warning-border-subtle" style={{ display: invalid && stockValidacion ? 'block' : 'none' }}>
                        *El stock debe ser un número mayor que 0.
                    </span>
                    </div>

                    <div className="inputIngreso">
                        <label htmlFor="marca">Marca</label>
                        <input type="text" id="marca"  value={marca} onChange={onChange} style={{ border: invalid && marcaValidacion ? '2px dotted red' : '' }}/>
                        <span className="mensaje-error" style={{ display: invalid && marcaValidacion ? 'block' : 'none' }}>
                        *Campo obligatorio
                    </span>
                    </div>

                    <div className="inputIngreso">
                        <label htmlFor="categoria">Categoria</label>
                        <input type="text" id="categoria"  value={categoria} onChange={onChange} style={{ border: invalid && categoriaValidacion ? '2px dotted red' : '' }}/>
                        <span className="mensaje-error" style={{ display: invalid && categoriaValidacion ? 'block' : 'none' }}>
                        *Campo obligatorio
                    </span>
                    </div>

                    <div className="inputIngreso">
                        <label htmlFor="subcategoria">Subcategoria</label>
                        <input type="text" id="subcategoria"value={subcategoria} onChange={onChange} style={{ border: invalid && subcategoriaValidacion ? '2px dotted red' : '' }} />
                        <span className="mensaje-error" style={{ display: invalid && subcategoriaValidacion ? 'block' : 'none' }}>
                        *Campo obligatorio
                        </span>
                    </div>

                    <div className="inputIngreso">
                        <label htmlFor="foto">Foto</label>
                        <input type="text" name="foto" id="foto" value={foto} onChange={onChange} style={{ border: invalid && fotoValidacion ? '2px dotted red' : '' }}/>
                        <div className="error-detail"></div>
                    </div>

                    <div className="inputIngreso">
                        <input type="checkbox" name="envio" id="envio" value={envio} onChange={onChange}/>
                        <label htmlFor="envio">Envio</label>
                        <div className="error-detail"></div>
                    </div>

                    <button disabled={invalid} classNameName={`btn btn-${editarID?'warning':'success'} mt-3 mb-5`}>
                        { editarID? 'Actualizar' : 'Enviar' }
                    </button>
                </form>
            </div>
    )
}
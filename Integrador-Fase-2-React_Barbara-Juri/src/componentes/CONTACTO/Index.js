import './Index.css';

export function Index() {
    return (
        <div className="Contacto">
        <form action="#">
            <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" />
            </div>

            <div>
            <label htmlFor="email">E-mail</label>
            <input
                type="email"
                id="email"
                placeholder="tumail@dominio.com"
            />
            </div>

            <div>
            <label htmlFor="comentarios">Comentarios</label>
            <textarea
                name="comentarios"
                id="comentarios"
            ></textarea>
            </div>

            <button type="submit">Enviar</button>
        </form>
            </div>
        )
}
import { Link } from 'react-router-dom'
import Card from '../../components/layout/Card'

const ClientesList = () => {
    // Datos de ejemplo para clientes
    const clientes = [
        { id: 1, nombre: 'Julian Vargas' },
        { id: 2, nombre: 'Maria Beltrán' },
        { id: 3, nombre: 'Pedro Zuluaga' },
        { id: 4, nombre: 'Juan Quiroz' },
        { id: 5, nombre: 'Ana Muñoz' },
        { id: 6, nombre: 'Luis Hernandez' },
        { id: 7, nombre: 'Maria Gaviria' },
        { id: 8, nombre: 'Pedro Salas' },
    ]

    return (
        <div>
            <h1 className="page-title">Listado Clientes</h1>
            <div className="grid-container">
                {clientes.map(cliente => (
                    <Card
                        key={cliente.id}
                        title={cliente.nombre}
                        linkTo={`/clientes/${cliente.id}`}
                    />
                ))}
            </div>
            <Link to="/" className="home-link">Home</Link>
        </div>
    )
}

export default ClientesList
import { useState } from 'react'
import { Link } from 'react-router-dom'

const BuscarCliente = () => {
    const [busqueda, setBusqueda] = useState('')
    const [resultados, setResultados] = useState([])

    // Datos de ejemplo para clientes
    const clientes = [
        { id: 1, nombre: 'Julian Vargas', correo: 'julian.vargas@ejemplo.com' },
        { id: 2, nombre: 'Maria Beltrán', correo: 'maria.beltran@ejemplo.com' },
        { id: 3, nombre: 'Pedro Zuluaga', correo: 'pedro.zuluaga@ejemplo.com' },
        { id: 4, nombre: 'Juan Quiroz', correo: 'juan.quiroz@ejemplo.com' },
        { id: 5, nombre: 'Ana Muñoz', correo: 'ana.munoz@ejemplo.com' },
        { id: 6, nombre: 'Luis Hernandez', correo: 'luis.hernandez@ejemplo.com' },
        { id: 7, nombre: 'Maria Gaviria', correo: 'maria.gaviria@ejemplo.com' },
        { id: 8, nombre: 'Pedro Salas', correo: 'pedro.salas@ejemplo.com' },
    ]

    // Función para buscar que se ejecuta con cada cambio en el input
    const handleBuscar = () => {
        if (busqueda.trim() === '') {
            setResultados([])
            return
        }

        // Filtramos prioritariamente por correo para resolver el problema
        const filtrados = clientes.filter(cliente =>
            cliente.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
            cliente.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )
        setResultados(filtrados)
    }

    return (
        <div style={{ marginTop: '200px' }}>
            <h1 className="page-title">Buscar Cliente</h1>

            <div className="card" style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <input
                        type="text"
                        className="input-search"
                        placeholder="Buscar por nombre o correo..."
                        value={busqueda}
                        onChange={(e) => {
                            setBusqueda(e.target.value)
                            // Ejecutamos la búsqueda automáticamente al escribir
                            setTimeout(() => {
                                if (e.target.value === document.querySelector('.input-search').value) {
                                    handleBuscar()
                                }
                            }, 300)
                        }}
                    />
                    <button className="btn" onClick={handleBuscar}>Buscar</button>
                </div>
                <div>
                    <Link to="/buscar-producto" style={{ color: 'var(--primary)' }}>Buscar producto</Link>
                </div>
            </div>

            {resultados.length > 0 ? (
                <div>
                    {resultados.map(cliente => (
                        <div key={cliente.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div className="image-placeholder" style={{ height: '50px', width: '50px', borderRadius: '50%' }}>
                                <span>ID</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3>{cliente.nombre}</h3>
                                <p>{cliente.correo}</p>
                            </div>
                            <Link to={`/clientes/${cliente.id}`}>
                                <button className="btn">Ver</button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : busqueda.trim() !== '' && (
                <div className="card">
                    <p>No se encontraron resultados para "{busqueda}"</p>
                </div>
            )}

            <Link to="/" className="home-link">Inicio</Link>
        </div>
    )
}

export default BuscarCliente
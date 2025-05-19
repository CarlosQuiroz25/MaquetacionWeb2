import { useParams, Link } from 'react-router-dom'

const ClienteDetail = () => {
    const { id } = useParams()

    // Datos de los clientes
    const clientesData = [
        { id: 1, nombre: 'Julian Vargas', correo: 'julian.vargas@ejemplo.com' },
        { id: 2, nombre: 'Maria Beltrán', correo: 'maria.beltran@ejemplo.com' },
        { id: 3, nombre: 'Pedro Zuluaga', correo: 'pedro.zuluaga@ejemplo.com' },
        { id: 4, nombre: 'Juan Quiroz', correo: 'juan.quiroz@ejemplo.com' },
        { id: 5, nombre: 'Ana Muñoz', correo: 'ana.munoz@ejemplo.com' },
        { id: 6, nombre: 'Luis Hernandez', correo: 'luis.hernandez@ejemplo.com' },
        { id: 7, nombre: 'Maria Gaviria', correo: 'maria.gaviria@ejemplo.com' },
        { id: 8, nombre: 'Pedro Salas', correo: 'pedro.salas@ejemplo.com' },
    ]

    // Encontrar el cliente por ID o usar un valor predeterminado
    const clienteBase = clientesData.find(c => c.id === parseInt(id)) || { nombre: 'Cliente no encontrado' }

    // Estos valores son fijos para todos los clientes
    const cliente = {
        ...clienteBase,
        telefono: '555-123-0001',
        direccion: 'Calle Principal #123',
        historial: [
            { fecha: '2023-01-15', descripcion: 'Compra de productos', monto: 1500 },
            { fecha: '2023-02-20', descripcion: 'Servicio técnico', monto: 800 },
            { fecha: '2023-03-10', descripcion: 'Renovación de contrato', monto: 3000 },
        ]
    }

    return (
        <div>
            <h1 className="page-title">Detalle Cliente</h1>

            <div className="card" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div className="image-placeholder" style={{ height: '200px', width: '200px', flexShrink: 0 }}>
                    <span>Imagen</span>
                </div>
                <div>
                    <h2>{cliente.nombre}</h2>
                    <p><strong>Correo:</strong> {cliente.correo}</p>
                    <p><strong>Teléfono:</strong> {cliente.telefono}</p>
                    <p><strong>Dirección:</strong> {cliente.direccion}</p>
                </div>
            </div>

            <h2 style={{ marginBottom: '15px' }}>Historial</h2>
            <div className="card">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid var(--border)' }}>Fecha</th>
                            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid var(--border)' }}>Descripción</th>
                            <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid var(--border)' }}>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cliente.historial.map((item, index) => (
                            <tr key={index}>
                                <td style={{ padding: '8px', borderBottom: '1px solid var(--border)' }}>{item.fecha}</td>
                                <td style={{ padding: '8px', borderBottom: '1px solid var(--border)' }}>{item.descripcion}</td>
                                <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid var(--border)' }}>${item.monto}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link to="/clientes" className="home-link" style={{ right: '120px' }}>Volver</Link>
            <Link to="/" className="home-link">Home</Link>
        </div>
    )
}

export default ClienteDetail
import { useState } from 'react'
import { Link } from 'react-router-dom'

const BuscarProducto = () => {
    const [busqueda, setBusqueda] = useState('')
    const [resultados, setResultados] = useState([])

    // Datos de ejemplo para productos
    const productos = [
        { id: 1, nombre: 'Teclado mecánico', precio: 1500, descripcion: 'Teclado mecánico con switches Cherry MX y retroiluminación RGB' },
        { id: 2, nombre: 'Mouse', precio: 2500, descripcion: 'Mouse con sensor óptico de 1600 DPI y retroiluminación RGB' },
        { id: 3, nombre: 'Monitor', precio: 3500, descripcion: 'Monitor Full HD con tecnología IPS y retroiluminación RGB' },
        { id: 4, nombre: 'Laptop', precio: 1200, descripcion: 'Laptop con procesador Intel Core i7 y 16GB de RAM' },
        { id: 5, nombre: 'Audífonos', precio: 2200, descripcion: 'Audífonos con cancelación de ruido y retroiluminación RGB' },
        { id: 6, nombre: 'Cámara', precio: 3200, descripcion: 'Cámara con sensor de 24MP y retroiluminación RGB' },
        { id: 7, nombre: 'Gabinete', precio: 800, descripcion: 'Gabinete con retroiluminación RGB' },
        { id: 8, nombre: 'Motherboard', precio: 1300, descripcion: 'Motherboard con retroiluminación RGB' },
    ]

    const handleBuscar = () => {
        if (busqueda.trim() === '') {
            setResultados([])
            return
        }

        const filtrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )
        setResultados(filtrados)
    }

    return (
        <div style={ {marginTop: '200px'}}>
            <h1 className="page-title">Buscar Producto</h1>

            <div className="card" style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <input
                        type="text"
                        className="input-search"
                        placeholder="Buscar producto..."
                        value={busqueda}
                        onChange={(e) => {
                            setBusqueda(e.target.value)
                            if (e.target.value.trim() === '') {
                                setResultados([])
                            } else {
                                // Ejecutamos la búsqueda automáticamente al escribir
                                setTimeout(() => {
                                    if (e.target.value === document.querySelector('.input-search').value) {
                                        handleBuscar()
                                    }
                                }, 300)
                            }
                        }}
                    />
                    <button className="btn" onClick={handleBuscar}>Buscar</button>
                </div>
                <div>
                    <Link to="/buscar-cliente" style={{ color: 'var(--primary)' }}>Buscar cliente</Link>
                </div>
            </div>

            {resultados.length > 0 ? (
                <div>
                    {resultados.map(producto => (
                        <div key={producto.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div className="image-placeholder" style={{ height: '50px', width: '50px' }}>
                                <span>ID</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3>{producto.nombre}</h3>
                                <p>${producto.precio}</p>
                            </div>
                            <Link to={`/productos/${producto.id}`}>
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

            <Link to="/" className="home-link">Home</Link>
        </div>
    )
}

export default BuscarProducto
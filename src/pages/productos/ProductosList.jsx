import { Link } from 'react-router-dom'
import Card from '../../components/layout/Card'

const ProductosList = () => {
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

    return (
        <div>
            <h1 className="page-title">Listado Productos</h1>
            <div className="grid-container">
                {productos.map(producto => (
                    <Card
                        key={producto.id}
                        title={producto.nombre}
                        linkTo={`/productos/${producto.id}`}
                    />
                ))}
            </div>
            <Link to="/" className="home-link">Home</Link>
        </div>
    )
}

export default ProductosList
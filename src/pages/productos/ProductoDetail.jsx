import { useParams, Link } from 'react-router-dom'

const ProductoDetail = () => {
    const { id } = useParams()

    // Datos de ejemplo para un producto
    const producto = {
        id,
        nombre: `Producto ${id}`,
        precio: 1500 + (id * 100),
        stock: 50 - (id * 2),
        descripcion: (() => {
            switch (id) {
                case '1':
                    return 'Teclado mecánico con switches Cherry MX y retroiluminación RGB'
                case '2':
                    return 'Mouse con sensor óptico de 1600 DPI y retroiluminación RGB'
                case '3':
                    return 'Monitor Full HD con tecnología IPS y retroiluminación RGB'
                case '4':
                    return 'Laptop con procesador Intel Core i7 y 16GB de RAM'
                case '5':
                    return 'Audífonos con cancelación de ruido y retroiluminación RGB'
                case '6':
                    return 'Cámara con sensor de 24MP y retroiluminación RGB'
                case '7':
                    return 'Gabinete con retroiluminación RGB'
                case '8':
                    return 'Motherboard con retroiluminación RGB'
                default:
                    return 'Descripción no disponible'
            }
        })()
    }

    return (
        <div>
            <h1 className="page-title">Detalle Producto</h1>

            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                <div className="image-placeholder" style={{ height: '300px', width: '300px', flexShrink: 0 }}>
                    <span>Imagen</span>
                </div>
                <div className="card" style={{ flex: 1 }}>
                    <h2>{producto.nombre}</h2>
                    <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary)', margin: '10px 0' }}>
                        ${producto.precio}
                    </p>
                    <p><strong>Stock disponible:</strong> {producto.stock} unidades</p>
                    <button className="btn" style={{ marginTop: '20px' }}>Añadir al carrito</button>
                </div>
            </div>

            <div className="card">
                <h3 style={{ marginBottom: '10px' }}>Descripción</h3>
                <p>{producto.descripcion}</p>
            </div>

            <Link to="/productos" className="home-link" style={{ right: '120px' }}>Volver</Link>
            <Link to="/" className="home-link">Home</Link>
        </div>
    )
}

export default ProductoDetail
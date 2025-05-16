import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{ marginTop: '200px' }}> 
            <h1 className="page-title">Sistema de Gestión</h1>

            {/* Enlaces a secciones principales */}
            <h2 style={{ margin: '30px 0 20px' }}>Accesos Rápidos</h2>
            <div className="grid-container">
                <Link to="/clientes" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <h3>Listado de Clientes</h3>
                        <button className="btn">Ver Clientes</button>
                    </div>
                </Link>
                <Link to="/productos" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <h3>Listado de Productos</h3>
                        <button className="btn">Ver Productos</button>
                    </div>
                </Link>
                <Link to="/buscar-cliente" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <h3>Buscar Cliente</h3>
                        <button className="btn">Buscar</button>
                    </div>
                </Link>
                <Link to="/buscar-producto" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <h3>Buscar Producto</h3>
                        <button className="btn">Buscar</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBoxes, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    // Datos de ejemplo para las métricas
    const [metrics, setMetrics] = useState({
        totalClientes: 0,
        totalProductos: 0,
        busquedasRecientes: 0,
        crecimientoMensual: 0
    })
    
    // Simular carga de datos
    useEffect(() => {
        // Esto es una simulación de métricas, no son reales
        const loadData = setTimeout(() => {
            setMetrics({
                totalClientes: 152,
                totalProductos: 87,
                busquedasRecientes: 243,
                crecimientoMensual: 12.5
            })
        }, 500)
        
        return () => clearTimeout(loadData)
    }, [])

    return (
        <div style={{ marginTop: '10px' }}>
            {/* Banner de bienvenida */}
            <div className="welcome-banner" style={{
                background: 'linear-gradient(135deg, #4a90e2, #63b3ed)',
                color: 'white',
                padding: '40px 20px',
                borderRadius: '10px',
                textAlign: 'center',
                marginBottom: '30px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Bienvenido al Sistema de Gestión</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                    Administre sus clientes y productos de manera eficiente con nuestro sistema integral de gestión.
                </p>
            </div>
            
            {/* Panel de métricas */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ margin: '0 0 20px', textAlign: 'center' }}>Métricas del Sistema</h2>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                    gap: '20px' 
                }}>
                    {/* Métrica: Total Clientes */}
                    <div style={{ 
                        background: 'white', 
                        padding: '20px', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                    }}>
                        <FontAwesomeIcon icon={faUsers} style={{ fontSize: '2rem', color: '#4a90e2', marginBottom: '10px' }} />
                        <h3>Total Clientes</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0', color: '#2d3748' }}>{metrics.totalClientes}</p>
                        <div style={{ 
                            height: '6px', 
                            background: '#e2e8f0', 
                            borderRadius: '3px',
                            overflow: 'hidden'
                        }}>
                            <div style={{ 
                                width: '75%', 
                                height: '100%', 
                                background: '#4a90e2' 
                            }}></div>
                        </div>
                    </div>
                    
                    {/* Métrica: Total Productos */}
                    <div style={{ 
                        background: 'white', 
                        padding: '20px', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                    }}>
                        <FontAwesomeIcon icon={faBoxes} style={{ fontSize: '2rem', color: '#48bb78', marginBottom: '10px' }} />
                        <h3>Total Productos</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0', color: '#2d3748' }}>{metrics.totalProductos}</p>
                        <div style={{ 
                            height: '6px', 
                            background: '#e2e8f0', 
                            borderRadius: '3px',
                            overflow: 'hidden'
                        }}>
                            <div style={{ 
                                width: '45%', 
                                height: '100%', 
                                background: '#48bb78' 
                            }}></div>
                        </div>
                    </div>
                    
                    {/* Métrica: Búsquedas Recientes */}
                    <div style={{ 
                        background: 'white', 
                        padding: '20px', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                    }}>
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '2rem', color: '#ed8936', marginBottom: '10px' }} />
                        <h3>Búsquedas Recientes</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0', color: '#2d3748' }}>{metrics.busquedasRecientes}</p>
                        <div style={{ 
                            height: '6px', 
                            background: '#e2e8f0', 
                            borderRadius: '3px',
                            overflow: 'hidden'
                        }}>
                            <div style={{ 
                                width: '85%', 
                                height: '100%', 
                                background: '#ed8936' 
                            }}></div>
                        </div>
                    </div>
                    
                    {/* Métrica: Crecimiento Mensual */}
                    <div style={{ 
                        background: 'white', 
                        padding: '20px', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                    }}>
                        <FontAwesomeIcon icon={faChartLine} style={{ fontSize: '2rem', color: '#805ad5', marginBottom: '10px' }} />
                        <h3>Crecimiento Mensual</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0', color: '#2d3748' }}>{metrics.crecimientoMensual}%</p>
                        <div style={{ 
                            height: '6px', 
                            background: '#e2e8f0', 
                            borderRadius: '3px',
                            overflow: 'hidden'
                        }}>
                            <div style={{ 
                                width: `${metrics.crecimientoMensual * 5}%`, 
                                height: '100%', 
                                background: '#805ad5' 
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enlaces a las secciones principales */}
            <h2 style={{ margin: '30px 0 20px' }}>Accesos rápidos</h2>
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
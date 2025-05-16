import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ClientesList from './pages/clientes/ClientesList'
import ClienteDetail from './pages/clientes/ClienteDetail'
import ProductosList from './pages/productos/ProductosList'
import ProductoDetail from './pages/productos/ProductoDetail'
import BuscarCliente from './pages/busqueda/BuscarCliente'
import BuscarProducto from './pages/busqueda/BuscarProducto'

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/clientes" element={<ClientesList />} />
                    <Route path="/clientes/:id" element={<ClienteDetail />} />
                    <Route path="/productos" element={<ProductosList />} />
                    <Route path="/productos/:id" element={<ProductoDetail />} />
                    <Route path="/buscar-cliente" element={<BuscarCliente />} />
                    <Route path="/buscar-producto" element={<BuscarProducto />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
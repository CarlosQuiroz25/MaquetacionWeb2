import { Link } from 'react-router-dom'

const Card = ({ title, imageUrl, linkTo, buttonText = 'Ver' }) => {
    return (
        <div className="card">
            <div className="image-placeholder" style={{ height: '200px', width: '100%' }}>
                {imageUrl ? (
                    <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <span>Imagen</span>
                )}
            </div>
            <h3 style={{ margin: '10px 0', textAlign: 'center' }}>{title}</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={linkTo}>
                    <button className="btn">{buttonText}</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
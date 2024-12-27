import './collections.css'

const Collections = () =>{
    return(
        <div>
            <nav className='collection-nav'>
                <img src="https://res.cloudinary.com/dt4w3q95b/image/upload/v1735273987/apple-logo_plarkm.jpg" alt="logo" className='logo'/>
                <p>Collections</p>
                <button className='save-btn'>Save</button>
            </nav>
            <div className='content-container'>
                <img src="https://res.cloudinary.com/dt4w3q95b/image/upload/v1735274016/homePic_q7qh7m.png" alt="watch" className='collection-image'/>
                <strong>APPLE WATCH SERIES 10</strong>
                <p>46mm Jet Black Aluminum Case with Black Solo Loop</p>
                <span>From $429</span>
                <div className='custom-container'>
                    <button className='feature'>Size</button>
                    <button className='feature'>Case</button>
                    <button className='feature'>Brand</button>
                    
                </div>
            </div>
        </div>
    )
}
export default Collections
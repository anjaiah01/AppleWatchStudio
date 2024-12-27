import './home.css'
import {useNavigate} from 'react-router-dom'
const Home = () =>{
    const navigate = useNavigate()

    const getStart = () =>{
        navigate('/collections')
    }
    return(
        <>
            <div className='logo-container'>
                <img src="https://res.cloudinary.com/dt4w3q95b/image/upload/v1735273987/apple-logo_plarkm.jpg" alt="logo" className='logo'/>
            </div>
            <div className='content-container'>
                <h6>Apple Watch Studio</h6>
                <h2>Choose a case.
                Pick a band.
                Create your own style.</h2>
                <button className='get-start-btn' onClick={getStart}>Get Start</button>
                <img src="https://res.cloudinary.com/dt4w3q95b/image/upload/v1735274016/homePic_q7qh7m.png" alt="home-image" className='home-image'/>
            </div>
        </>
    )
}
export default Home
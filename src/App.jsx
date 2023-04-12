
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import './app.scss'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Class from './Components/Classes/Class'
import Shadule from './Components/Shadule/Shadule'
import Price from './Components/Price/Price'



function App() {
  

  return (
    <div className="app">

    <Navbar />
    <Header />  
    <About />
    <Services />
    <Class />
    <Shadule />
    <Price />


 
     
    </div> 
  )
}

export default App

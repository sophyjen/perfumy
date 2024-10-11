
//Navbar Component
import Navbar from './components/Navbar'

//Search Component
import SearchBar from './components/SearchBar'

//Product Component
import Product from './components/Product'

//About Component
import About from './components/About'

//Contact Component
import Contact from './components/Contact'

function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <SearchBar></SearchBar>
            <Product></Product>
            <About></About>
            <Contact></Contact>
        </div>
    )
}

export default App
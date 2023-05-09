import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import Head from './Components/Head.js'
import Foot from './Components/Foot.js'
import AppRouter from './AppRouter.js'
export default function App() {
  return(
    
    <div>
   
     <Head />
     <AppRouter /> 
     <Foot />
    </div>
  )
}



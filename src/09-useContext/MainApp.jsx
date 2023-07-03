import { Navigate, Route, Routes} from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'

//****************************************************************
// Aqui se está haciendo con BrowseRouter y no con createBrowseRouter que es lo más actual

export const MainApp = () => {
  return (
    <UserProvider>

      {/* <h1>Main App</h1> */}
      {/* Link funciona como la etiqueta "a" tradicional pero no se recarga la pagina completamente */}
      <Navbar />
    
      {/* configuracion de las rutas con Router App (Se está haciendo con browseRouter) */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />

        {/* Si no se reconoce la ruta lo llevo a la pagina donde quiero */}
        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    </UserProvider>
  )
}

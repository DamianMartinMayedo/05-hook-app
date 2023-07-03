import { useContext } from "react"
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

  //el usecontext permte manejar los values enviados por el provider
  const { user, setUser } = useContext(UserContext)
 
  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre aria-label="pre">
        {JSON.stringify(user,null,3)}
      </pre>
      <button
      className="btn btn-dark"
        onClick={()=>setUser({id: 123,name:'Pepeson', apellido: 'Perez'})}
      >
        Establecer usuario
      </button>
    </>
  )
}

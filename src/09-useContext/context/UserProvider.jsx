import { useState } from "react"
import { UserContext } from "./UserContext"
// const user={
//     id: 123,
//     name: 'Damian',
//     email: 'damian@gmail.com'
// }
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();
    //esto permite que cualquier componente pueda consumer los values
    //ya que estos values estan al mas alto nivel dentro de la estructura
    return (
        // <UserContext.Provider value={{hola: 'Mundo', user: user}}>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

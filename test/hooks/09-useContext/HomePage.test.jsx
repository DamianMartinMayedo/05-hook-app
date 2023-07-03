import { render, screen} from "@testing-library/react"
import { HomePage } from "../../../src/09-useContext/HomePage"
import { UserContext } from "../../../src/09-useContext/context/UserContext";

describe('first', () => {
    const user={
        id:1,
        name: 'Damian',
        apellido: 'Martin'
    }
    test('Pruebas en el Home Page con usuario null', () => { 
        //para renderizar el useContext es necesario renderizar el contexto tambien
        render (<UserContext.Provider value={{user:null}}>
        <HomePage/>
        </UserContext.Provider>
        );
        screen.debug();
        //al igual que span ..pre tambien necesita aria-label
        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe('null')
     });

    test('Pruebas en el Home Page con usuario definido', () => { 
        //para renderizar el useContext es necesario renderizar el contexto tambien
        render (<UserContext.Provider value={{user: user}}>
        <HomePage/>
        </UserContext.Provider>
        );
        screen.debug();
        //al igual que span ..pre tambien necesita aria-label
        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toContain('Damian');
        expect(preTag.innerHTML).toContain(`${user.id}`);
     });
 })
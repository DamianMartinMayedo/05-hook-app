import { render, screen} from "@testing-library/react"
import { MainApp } from "../../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('pruebas en MainApp', () => { 
    test('debe mostrar el home page', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )
        expect(screen.getByText('Login Page')).toBeTruthy()
        screen.debug();
     })
 })
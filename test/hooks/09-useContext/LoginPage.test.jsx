import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/09-useContext/LoginPage"
import { UserContext } from "../../../src/09-useContext/context/UserContext";

describe('Pruebas en Logun Page', () => {
  
    const setUserMock = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('Pruebas en pagina vacia', () => {
        render(<UserContext.Provider value={{ user: null }}>
            <LoginPage />
        </UserContext.Provider>
        );
        // screen.debug();
        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe('null');

    });
    test('establecer un usuario', () => {
        render(<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
            <LoginPage />
        </UserContext.Provider>
        );

        // screen.debug();
        const btnEstablecer = screen.getByRole('button');
        fireEvent.click(btnEstablecer);
        expect(setUserMock).toHaveBeenCalledWith({"apellido": "Perez", "id": 123, "name": "Pepeson"});
        
    })
})
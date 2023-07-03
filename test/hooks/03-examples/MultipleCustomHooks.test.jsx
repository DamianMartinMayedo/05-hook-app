import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../src/03-examples"
import { useFetch } from "../../../src/hooks/useFetch";
import { useCounter } from "../../../src/hooks/useCounter";

jest.mock('../../../src/hooks/useFetch');
jest.mock('../../../src/hooks/useCounter');

describe('pruebas en MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment:mockIncrement,
    });
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    test('mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        //se puede tomar el sanapshot pero lo vamos a hcer de otra forma
        expect(screen.getByText('Cargando....'));

        //probar que el boton este desabilitado
        const nextButton = screen.getByRole('button', { name: 'Previus episode' });
        expect(nextButton.disabled).toBeTruthy();

        // screen.debug();
    });

    test('debe mostrar un episodio', () => {

        useFetch.mockReturnValue({
            data: { episode: '1', name: 'Hola Mundo', air_date: 'ayer' },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next episode' });
        expect(nextButton.disabled).toBeFalsy();
        // screen.debug();

    });

    test('debe de llamr la funcion incrementar', () => {
       
        useFetch.mockReturnValue({
            data: { episode: '1', name: 'Hola Mundo', air_date: 'ayer' },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        screen.debug();
        const nextButton = screen.getByRole('button', { name: 'Next episode' });
        fireEvent.click( nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    });
})


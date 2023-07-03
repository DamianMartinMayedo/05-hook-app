import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('UseForm', () => {
    const testInitialForm = {
        name: 'Damian',
        email: 'damian@gmail.com'
    }

    test('Probando valores por defecto', () => {

        const { result } = renderHook(() => useForm(testInitialForm));
        // console.log(result);
        //aqui se evaluan todos los estadosiniciales de una vez (pasando como valor el objeto creado para el test)
        expect(result.current).toEqual({
            name: testInitialForm.name,
            email: testInitialForm.email,
            formState: testInitialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        }
        );
    });

    test('probando el onInputChange', () => {
        const { result } = renderHook(() => useForm());
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: 'Juan' } });
        });
        expect(result.current.name).toBe('Juan');
        expect(result.current.formState.name).toBe('Juan');
    });
    test('probando el reset del formulario', () => {

        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(testInitialForm));
        const { onResetForm, onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(testInitialForm.name);
        expect(result.current.formState.name).toBe(testInitialForm.name);

    });
})
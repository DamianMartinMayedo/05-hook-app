import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils";

describe('Pruebas en el use counter', () => {
    test('Comprobando los valores por defecto', () => {

        //renderHook permite renderizar un hook
        const { result } = renderHook(() => useCounter());
        //en result se "guarda" en current todo lo que retorna el hook
        console.log(result);
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });
    test('counter valor= 100', () => {
        //utilizamos el renderHook siempre para testear hooks
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);

    });

    test('probando el increment', () => {
        const{result}=renderHook(()=> useCounter());
        const{ increment}= result.current;
        //el act se utiliza para disparar funciones dentro del hook
        act(()=>{
            increment();
        });
        //se utiliza asi el counter para qu etome el valor actualizado y no el inicial
        expect(result.current.counter).toBe(11);
  
    });
    test('probando el decrement', () => {
        const{result}=renderHook(()=> useCounter());
        const{ decrement}= result.current;
        //el act se utiliza para disparar funciones dentro del hook
        act(()=>{
            decrement(2);
        });
        //se utiliza asi el counter para qu etome el valor actualizado y no el inicial
        expect(result.current.counter).toBe(8);
  
    });
    test('probando el reset', () => {
        const{result}=renderHook(()=> useCounter());
        const{ increment,decrement,reset}= result.current;
        //el act se utiliza para disparar funciones dentro del hook
        act(()=>{
            decrement(5);
            decrement();
            increment(70);
            reset();
        });
        //se utiliza asi el counter para qu etome el valor actualizado y no el inicial
        expect(result.current.counter).toBe(10);
  
    });
})
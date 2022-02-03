const {sumar, restar, multiplicar, dividir} = require('./calculadora');

describe ('Pruebas en el componente calculadora', () => {
    test('Pruebas en la funcion sumar', () => {

        expect(sumar(3, 5)).toBe(8);

    });

     test('Pruebas en la funcion restar', () => {
         expect(restar(3,5)).toBe(-2);
     });

     test ('Pruebas en la funcion multiplicar', () => {
         expect(multiplicar(3,5)).toBe(15);
     });

     test ('Pruebas en la funcion multiplicar', () => {
        expect(dividir(3,5)).toBe(0.6);
    });

  

})
import { Notas } from "./Notas";

describe('Nota test', () => {   
    it('should return corret number of characters', () => {
        const nota = new Notas(1, 'Test Note');

        expect(nota.getLength()).toBe(9);
    })

    it('should be checked', () => {
        const nota = new Notas(1, 'Test Note', true);

        expect(nota.getTitle()).toBeTruthy();
    })

});
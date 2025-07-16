import { Notas } from './Notas';

describe('Notas', () => {
  it('debe crear una nota con título y estado por defecto', () => {
    const nota = new Notas(1, 'Test');
    expect(nota.getId()).toBe(1);
    expect(nota.getTitle()).toBe('Test');
    expect(nota.getIsComplete()).toBe(false);
  });

  it('debe cambiar el título de la nota', () => {
    const nota = new Notas(2, 'Original');
    nota.setTitle('Modificado');
    expect(nota.getTitle()).toBe('Modificado');
  });

  it('debe cambiar el estado de completado', () => {
    const nota = new Notas(3, 'Completar');
    nota.setIsComplete(true);
    expect(nota.getIsComplete()).toBe(true);
    nota.toggleComplete();
    expect(nota.getIsComplete()).toBe(false);
  });

  it('debe retornar el resumen correctamente', () => {
    const nota = new Notas(4, 'Resumen', true);
    expect(nota.getResumen()).toBe('Nota: Resumen | Estado: Completada');
    nota.setIsComplete(false);
    expect(nota.getResumen()).toBe('Nota: Resumen | Estado: Pendiente');
  });

  it('debe serializar y deserializar correctamente', () => {
    const nota = new Notas(5, 'Serializar', true);
    const json = nota.toJSON();
    expect(json).toEqual({ id: 5, title: 'Serializar', isComplete: true });
    const nota2 = Notas.fromJSON(json);
    expect(nota2.getId()).toBe(5);
    expect(nota2.getTitle()).toBe('Serializar');
    expect(nota2.getIsComplete()).toBe(true);
  });

  it('debe retornar la longitud del título', () => {
    const nota = new Notas(6, 'Longitud');
    expect(nota.getLength()).toBe('Longitud'.length);
  });
});


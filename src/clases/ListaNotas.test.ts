
// Mock localStorage para entorno Node
class LocalStorageMock {
  private store: Record<string, string> = {};
  clear() { this.store = {}; }
  getItem(key: string) { return this.store[key] || null; }
  setItem(key: string, value: string) { this.store[key] = value; }
  removeItem(key: string) { delete this.store[key]; }
  get length() { return Object.keys(this.store).length; }
  key(index: number) { return Object.keys(this.store)[index] || null; }
}
global.localStorage = new LocalStorageMock();

import { ListaNotas } from './ListaNotas';
import { Notas } from './Notas';

describe('ListaNotas', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear();
    // Reiniciar notas
    (ListaNotas as any).notas = [];
    // Crear el elemento <ul class="notes-list"></ul> en el DOM
    document.body.innerHTML = '<ul class="notes-list"></ul>';
  });

  it('debe crear una nueva nota y agregarla a la lista', () => {
    ListaNotas.CrearNota('Nueva nota');
    expect((ListaNotas as any).notas.length).toBe(1);
    expect((ListaNotas as any).notas[0].getTitle()).toBe('Nueva nota');
  });

  it('debe eliminar una nota por índice', () => {
    ListaNotas.CrearNota('Nota 1');
    ListaNotas.CrearNota('Nota 2');
    ListaNotas.EliminarNota(0);
    expect((ListaNotas as any).notas.length).toBe(1);
    expect((ListaNotas as any).notas[0].getTitle()).toBe('Nota 1');
  });

  it('debe guardar y cargar notas desde localStorage', () => {
    ListaNotas.CrearNota('Persistente');
    ListaNotas.guardarNotas();
    (ListaNotas as any).notas = [];
    (ListaNotas as any).notas = ListaNotas.cargarNotas();
    expect((ListaNotas as any).notas.length).toBe(1);
    expect((ListaNotas as any).notas[0].getTitle()).toBe('Persistente');
  });

  it('debe filtrar notas completadas y pendientes', () => {
    ListaNotas.CrearNota('Pendiente');
    ListaNotas.CrearNota('Completada');
    // Marcar la nota con título "Completada" como completada
    const notaCompletada = (ListaNotas as any).notas.find((n: Notas) => n.getTitle() === 'Completada');
    if (notaCompletada) notaCompletada.setIsComplete(true);
    const completadas = (ListaNotas as any).notas.filter((n: Notas) => n.getIsComplete());
    const pendientes = (ListaNotas as any).notas.filter((n: Notas) => !n.getIsComplete());
    expect(completadas.length).toBe(1);
    expect(pendientes.length).toBe(1);
    expect(completadas[0].getTitle()).toBe('Completada');
    expect(pendientes[0].getTitle()).toBe('Pendiente');
  });

  it('debe retornar el contador de notas correctamente', () => {
    ListaNotas.CrearNota('A');
    ListaNotas.CrearNota('B');
    (ListaNotas as any).notas[0].setIsComplete(true);
    const contador = ListaNotas.getContadorNotas();
    expect(contador.total).toBe(2);
    expect(contador.completadas).toBe(1);
  });
});

import { ListaNotas } from "./clases/ListaNotas";
import { Notas } from "./clases/Notas";

const CrearNota = (titulo: string) => {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    return  new Notas(1, titulo);
}


const notas: Notas[] = [];



const FormularioNota = document.querySelector('.formulario-nota') as HTMLFormElement;

FormularioNota.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;

    const nota = CrearNota(input.value);
    notas.push(nota);
    ListaNotas.CrearNotaCard(notas);
})  
import { ListaNotas } from "./clases/ListaNotas";





const FormularioNota = document.querySelector('.formulario-nota') as HTMLFormElement;

FormularioNota.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;

    ListaNotas.CrearNota(input.value);
    input.value = ''; // Limpiar el campo de entrada después de crear la nota
})  
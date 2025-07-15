import { Notas } from "./Notas";

export class ListaNotas{
    static CrearNotaCard = (notas: Notas[]) => {
        const listaNotas = document.querySelector('.notes-list') as HTMLUListElement;

        const formItem = document.querySelector('.form-item') as HTMLFormElement;
        listaNotas.innerHTML = ''; // Limpiar la lista antes de agregar nuevas notas
        listaNotas.append(formItem);

        notas.forEach(nota => {
            const li = document.createElement('li');
            const input = document.createElement('input');
            const checkbox = document.createElement('input');

            li.classList.add('note');
            li.append(input)
            li.append(checkbox);

            input.classList.add('input');
            input.value = nota.getTitle();

            checkbox.type = 'checkbox';
            checkbox.checked = nota.getIsComplete();

            listaNotas.append(li);
    });
}
}
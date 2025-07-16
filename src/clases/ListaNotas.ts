import { Notas } from "./Notas";

export class ListaNotas{

    static notas: Notas[] = [];
    
    static CrearNota = (titulo: string) => {
    
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    const newnota = new Notas(1, titulo);
    
    this.notas.unshift(newnota);
    this.CrearNotaCard();
}


    static CrearNotaCard = () => {
        const listaNotas = document.querySelector('.notes-list') as HTMLUListElement;

        const formItem = document.querySelector('.form-item') as HTMLFormElement;
        listaNotas.innerHTML = ''; // Limpiar la lista antes de agregar nuevas notas
        listaNotas.append(formItem);

        this.notas.forEach(nota => {
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
    static actualizarEventos = () => {
        const notaCard = document.querySelectorAll('.note-card');
        const notaCardsArray = [...notaCard] as HTMLLIElement[];

        notaCardsArray.forEach((notaCard, index) => {
            notaCard.childNodes.forEach((input) => {
                const tituloInput = notaCard.childNodes[0] as HTMLInputElement;
                const checkboxInput = notaCard.childNodes[1] as HTMLInputElement;
                
                input.addEventListener('change', () => {
                    this.notas[index].setTitle(tituloInput.value);
                    this.notas[index].setIsComplete(checkboxInput.checked);
                });
            });
        });
    };
}
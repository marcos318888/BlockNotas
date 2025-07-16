import { Notas } from "./Notas";

export class ListaNotas {
    static notas: Notas[] = ListaNotas.cargarNotas();

    static CrearNota = (titulo: string) => {
        // Generar id único
        const id = Date.now() + Math.floor(Math.random() * 1000000);
        const newnota = new Notas(id, titulo);
        this.notas.unshift(newnota);
        this.guardarNotas();
        this.CrearNotaCard();
    };

    static EliminarNota = (index: number) => {
        this.notas.splice(index, 1);
        this.guardarNotas();
        this.CrearNotaCard();
    };

    static CrearNotaCard(searchText: string = '', filterType: 'all' | 'completed' | 'pending' = 'all') {
        const listaNotas = document.querySelector('.notes-list') as HTMLUListElement;
        listaNotas.innerHTML = '';
        let notasFiltradas = this.notas;
        if (searchText) {
            notasFiltradas = notasFiltradas.filter(n => n.getTitle().toLowerCase().includes(searchText.toLowerCase()));
        }
        if (filterType === 'completed') {
            notasFiltradas = notasFiltradas.filter(n => n.getIsComplete());
        } else if (filterType === 'pending') {
            notasFiltradas = notasFiltradas.filter(n => !n.getIsComplete());
        }
        notasFiltradas.forEach((nota) => {
            const li = document.createElement('li');
            li.className = 'note-item';
            li.innerHTML = `
                <input type="text" class="input" value="${nota.getTitle()}" data-id="${nota['id']}" />
                <input type="checkbox" class="checkbox" ${nota.getIsComplete() ? 'checked' : ''} data-id="${nota['id']}" />
                <button class="btn delete-btn" data-id="${nota['id']}">🗑️</button>
            `;
            listaNotas.appendChild(li);
        });
        this.actualizarEventos();
    };

    static actualizarEventos = () => {
        const notaItems = document.querySelectorAll('.note-item');
        notaItems.forEach((item) => {
            const input = item.querySelector('.input') as HTMLInputElement;
            const checkbox = item.querySelector('.checkbox') as HTMLInputElement;
            const deleteBtn = item.querySelector('.delete-btn') as HTMLButtonElement;
            const id = Number(input.getAttribute('data-id'));

            const guardarTitulo = () => {
                const nota = this.notas.find(n => n['id'] === id);
                if (nota) {
                    nota.setTitle(input.value);
                    this.guardarNotas();
                    console.log('Nota actualizada:', nota.getTitle());
                    input.classList.add('saved');
                    setTimeout(() => {
                        input.classList.remove('saved');
                    }, 500);
                }
            };
            input.addEventListener('blur', guardarTitulo);
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    input.blur();
                }
            });
            checkbox.addEventListener('change', () => {
                const nota = this.notas.find(n => n['id'] === id);
                if (nota) {
                    nota.setIsComplete(checkbox.checked);
                    this.guardarNotas();
                }
            });
            deleteBtn.addEventListener('click', () => {
                const idx = this.notas.findIndex(n => n['id'] === id);
                if (idx !== -1) {
                    this.EliminarNota(idx);
                }
            });
        });
    };

    static guardarNotas = () => {
        localStorage.setItem('blocknotas', JSON.stringify(this.notas.map(n => ({
            id: n['id'],
            title: n.getTitle(),
            isComplete: n.getIsComplete()
        }))));
    };

    static cargarNotas(): Notas[] {
        const data = localStorage.getItem('blocknotas');
        if (!data) return [];
        try {
            const arr = JSON.parse(data);
            return arr.map((n: any) => new Notas(n.id, n.title, n.isComplete));
        } catch {
            return [];
        }
    }

    static getContadorNotas = () => {
        return {
            total: this.notas.length,
            completadas: this.notas.filter(n => n.getIsComplete()).length
        };
    };
}
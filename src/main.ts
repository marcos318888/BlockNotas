import { ListaNotas } from "./clases/ListaNotas";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.note-form') as HTMLFormElement;
    const input = document.querySelector('.note-title') as HTMLInputElement;
    const mainSection = form.parentElement as HTMLElement;

    // Crear input de búsqueda
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar nota...';
    searchInput.className = 'search-input';
    searchInput.style.margin = '10px 0';
    mainSection.insertBefore(searchInput, form);

    // Crear select de filtro
    const filterSelect = document.createElement('select');
    filterSelect.className = 'filter-select';
    filterSelect.style.margin = '10px 0 10px 10px';
    filterSelect.innerHTML = `
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
    `;
    mainSection.insertBefore(filterSelect, form);

    // Contador
    const contador = document.createElement('div');
    contador.className = 'contador-notas';
    contador.style.margin = '10px 0';
    mainSection.insertBefore(contador, form.nextSibling);

    let searchText = '';
    let filterType: 'all' | 'completed' | 'pending' = 'all';

    function actualizarContador() {
        const { total, completadas } = ListaNotas.getContadorNotas();
        contador.textContent = `Notas: ${total} | Completadas: ${completadas}`;
    }

    function render() {
        ListaNotas.CrearNotaCard(searchText, filterType);
        actualizarContador();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value.trim()) {
            ListaNotas.CrearNota(input.value.trim());
            input.value = '';
            render();
        }
    });

    searchInput.addEventListener('input', (e) => {
        searchText = searchInput.value.trim();
        render();
    });

    filterSelect.addEventListener('change', (e) => {
        filterType = filterSelect.value as 'all' | 'completed' | 'pending';
        render();
    });

    render();
});
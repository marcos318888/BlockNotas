
export class Notas {
    constructor(
        private id: number,
        private title: string,
        private isComplete: boolean = false
    ){}

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getIsComplete(): boolean {
        return this.isComplete;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setIsComplete(isComplete: boolean): void {
        this.isComplete = isComplete;
    }

    getLength() {
        return this.title.length;
    }

    getResumen(): string {
        return `Nota: ${this.title} | Estado: ${this.isComplete ? 'Completada' : 'Pendiente'}`;
    }

    toggleComplete(): void {
        this.isComplete = !this.isComplete;
    }

    toJSON(): object {
        return {
            id: this.id,
            title: this.title,
            isComplete: this.isComplete
        };
    }

    static fromJSON(obj: any): Notas {
        return new Notas(obj.id, obj.title, obj.isComplete);
    }
}
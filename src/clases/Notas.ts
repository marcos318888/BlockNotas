export class Notas {
    constructor(
        private id: number,
        private title: string,
        private isComplete: boolean = false
    ){}

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

}
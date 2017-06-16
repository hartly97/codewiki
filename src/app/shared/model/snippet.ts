export class Snippet {
    constructor(
        public name?: string,
        public code?: string,
        public username?: string,
        public languages?: Language[],
        public tags?: string[],
        public difficulty?: string,
        public type?: string,
    ){}
}

export class Language{
    constructor(
        public name?: string,
        public version?: string[],
    ){}
}
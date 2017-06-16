export class Snippet {
    constructor(
        public name?: string,
        public code?: string,
        public username?: string,
        public language?: string,
        public tags?: string[],
        public difficulty?: string,
        public type?: string,
        public imgUrl?: string,
    ){}
}

export class Language{
    constructor(
        public name?: string,
        public version?: string[],
    ){}
}
export type Question = {
    id: number,
    question: string,
    img: string,
    believe: Answer,
    disbelieve: string
}

export type Answer = {
    answer: boolean,
    text: string
}
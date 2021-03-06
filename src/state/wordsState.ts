import {WORD} from '../enum/wordsPicture';

export type DataWordsType = {
    id: string,
    text: string,
    numberOfWords: number,
    color: string,
    picture: string
}

export const DATA_WORDS: DataWordsType[] = [
    {
        id: '1',
        text: 'Слова для следующего урока',
        numberOfWords: 12,
        color: '#3692cb',
        picture: WORD.nextLesson
    },
    {
        id: '2',
        text: 'Слова, добавленые из браузера',
        numberOfWords: 7,
        color: '#08ad4a',
        picture: WORD.browser
    },
    {
        id: '3',
        text: 'Слова, которые необходимо повторить',
        numberOfWords: 33,
        color: '#d70cc6',
        picture: WORD.repeat
    },
    {
        id: '4',
        text: 'Слова из последнего урока',
        numberOfWords: 17,
        color: '#57169c',
        picture: WORD.lastLesson
    },
    {
        id: '5',
        text: 'Проверка андроид симулятора',
        numberOfWords: 100,
        color: '#1df606',
        picture: WORD.lastLesson
    }
]
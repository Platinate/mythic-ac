export const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function getEnumNameByValue(enumObj: any, value: number): string | undefined {
    const keys = Object.keys(enumObj).filter(k => isNaN(Number(k))); // Get only the names
    const values = Object.values(enumObj).filter(v => !isNaN(Number(v))); // Get only the values
    const index = values.indexOf(value);
    return index !== -1 ? keys[index] : undefined;
}

export const generateRandomId = ():number => {
    return Math.floor(Math.random()*1000);
}
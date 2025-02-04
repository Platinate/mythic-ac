/**
 * Shuffle the order of a provided array
 * @param array The array that will be suffled
 * @returns An array cotnaining the elements of the provided array with their position shuffled
 */
export const shuffleArray = (array: never[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Search the name of a specific value of a enum
 * @param enumObj The enum that will be searched
 * @param value The reference value to find the name
 * @returns The name of enum correspoding to the provided value
 */
export function getEnumNameByValue(enumObj: never, value: number): string | undefined {
    const keys = Object.keys(enumObj).filter(k => isNaN(Number(k))); // Get only the names
    const values = Object.values(enumObj).filter(v => !isNaN(Number(v))); // Get only the values
    const index = values.indexOf(value);
    return index !== -1 ? keys[index] : undefined;
}

/**
 * Generate a random number
 * @returns A randomly generated number
 */
export const generateRandomId = ():number => {
    return Math.floor(Math.random()*1000);
}
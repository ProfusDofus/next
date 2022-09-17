export function readString(buffer: Uint8Array, address: number, length: number): string {
    return new TextDecoder().decode(buffer.slice(address, address + length));
}

function checkInteger(n: number): void {
    if(!Number.isSafeInteger(n)) throw new Error(`${n} is not a safe integer`);
    if(n < 0) console.warn(`${n} is a negative integer`);
}

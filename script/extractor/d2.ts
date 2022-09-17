export abstract class D2File<T extends D2Files> {
    private static instance: D2File<D2Files>;

    protected constructor() {}

    public static getInstance<U extends D2Files>(): D2File<U> {
        return D2File.instance as unknown as D2File<U>
            ?? (D2File.instance = new (this as unknown as new () => D2File<U>)());
    }

    public abstract unpack(data: Buffer): T;

    public abstract pack(data: T): Buffer;
}

type D2Files =
    | D2I
    | D2O
    | D2P
    | DLM
    | DX
    | ELE
    | SWL;

export type D2I = Map<string | number, string>;
export type D2O = Map<string | number, string>;
export type D2P = unknown;
export type DLM = unknown;
export type DX = unknown;
export type ELE = unknown;
export type SWL = unknown;

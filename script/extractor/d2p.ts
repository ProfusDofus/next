import { D2File, D2P } from "./d2";

/**
 * Files containing maps for Dofus 2.0
 */
export class D2PFile extends D2File<D2P> {
	public unpack(data: Buffer): unknown {
		throw new Error("Method not implemented.");
	}

	public pack(data: unknown): Buffer {
		throw new Error("Method not implemented.");
	}
}

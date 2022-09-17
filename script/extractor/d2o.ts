import { D2File, D2O } from "./d2";
import { readString } from "./utils";

/**
 * Files containing classes and object for Dofus 2.0
 */
export class D2OFile extends D2File<D2O> {
	public unpack(data: Buffer): D2O {
		throw new Error("Method not implemented.");
		const objects: unknown[] = [];
		const dataView = new DataView(data.buffer);

		const signatureMagicNumber = readString(data, 0, 3);

		if(signatureMagicNumber !== "D2O") {
			throw new Error("Invalid file signature");
		}

		const a = dataView.getUint32(3, false);
		const b = dataView.getUint32(7, false);

		return objects;
	}

	public pack(data: D2O): Buffer {
		throw new Error("Method not implemented.");
	}
}

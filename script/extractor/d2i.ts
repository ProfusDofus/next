import { D2File, D2I } from "./d2";
import { readString } from "./utils";

/**
 * Translation files for Dofus 2.0
 */
export class D2IFile extends D2File<D2I> {
	public unpack(data: Buffer): D2I {
		const strings: D2I = new Map<string | number, string>();
		const dataView = new DataView(data);

		// Strings indexed with an Id
		const stringsTableAddress = dataView.getUint32(0, false);
		const stringsTableLength = dataView.getUint32(stringsTableAddress, false);
		const stringsTableStart = stringsTableAddress + 4;

		for(let bytesRead = 0, i = 0; bytesRead < stringsTableLength; ++i) {
			const stringKey = dataView.getUint32(stringsTableStart + bytesRead, false);
			bytesRead += 4;

			const stringValueHasDiacritics = dataView.getUint8(stringsTableStart + bytesRead);
			bytesRead += 1;

			const stringValueAddress = dataView.getUint32(stringsTableStart + bytesRead, false);
			bytesRead += 4;

			if(stringValueHasDiacritics) {
				const _stringDiacriticsAddress = dataView.getUint32(stringsTableStart + bytesRead, false);
				bytesRead += 4;
			}

			const stringValueLength = dataView.getUint16(stringValueAddress);

			const stringValue = readString(data, stringValueAddress + 2, stringValueLength); // + 2 comes from the length of the string

			strings.set(stringKey, stringValue);
		}

		// Strings indexed with a string (mainly for the UI)
		const otherStringsTableAddress = stringsTableStart + stringsTableLength;
		const otherStringsTableLength = dataView.getUint32(otherStringsTableAddress, false);
		const otherStringsTableStart = otherStringsTableAddress + 4;

		for(let bytesRead = 0; bytesRead < otherStringsTableLength;) {
			const stringKeyLength = dataView.getUint16(otherStringsTableStart + bytesRead, false);
			bytesRead += 2;

			const stringKey = readString(data, otherStringsTableStart + bytesRead, stringKeyLength);
			bytesRead += stringKeyLength;

			const stringValueAddress = dataView.getUint32(otherStringsTableStart + bytesRead, false);
			bytesRead += 4;

			const stringValueLength = dataView.getUint16(stringValueAddress);

			const stringValue = readString(data, stringValueAddress + 2, stringValueLength); // + 2 comes from the length of the string

			strings.set(stringKey, stringValue);
		}

		return strings;
	}

	public pack(data: D2I): Buffer {
		throw new Error("Not implemented");

		const buffer = Buffer.from("");

		// Separate strings by key type; either number (regular string) or string (ui string)
		const strings = new Map<number, string>([...data.entries()].filter((entry): entry is [number, string] => typeof entry[0] === "number"));
		const otherStrings = new Map<string, string>([...data.entries()].filter((entry): entry is [string, string] => typeof entry[0] === "string"));

		// Compute the length of the data
		const stringsLength = [...strings.entries()].map(([key, value]) => {
			return 2 // length of the length of the string in NFC form
				+ value.normalize("NFC").length // length of the string in NFC form
				+ 2 // length of the length of the string in NFKD form
				+ value.normalize("NFKD").length; // length of the string in NFKD form
		}).reduce((p, c) => p + c, 0);
		const otherStringsLength = [...otherStrings.entries()].map(([key, value]) => {
			return 2 // length of the length of the key
				+ value.normalize("NFC").length; // length of the string in NFC form
		}).reduce((p, c) => p + c, 0);
		const totalStringsLength = stringsLength + otherStringsLength;

		// length of the string tables
		const stringsTableLength = 4; // length of the number of entries
		strings.size * (
			4 // length of the key
			+ 1 // length of the hasDiacritics flag
			+ 4 // length of the address of the string in the data
			+ 4 // length of the address of the string with diacritics in the data
		);
		const otherStringsTableLength = 4 // length of the number of entries
			+ [...otherStrings.entries()].map(([key, value]) => {
				return 2 // length of the length of the key
					+ key.length // length of the key (ASCII string)
					+ 4; // length of the address of the string in the data
			}).reduce((p, c) => p + c, 0);

		const stringTableAddress = 4 // length of the address of the string table
			+ stringsLength; // length of the strings data
		const otherStringsTableAddress = stringTableAddress // address of the string table
			+ 4 // length of the address of the other string table
			+ otherStringsLength; // length of the other string data;

		buffer.writeUint32BE(stringTableAddress);

		return buffer;

	}
}

import { createColumnHelper, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { useReactTable } from "@tanstack/react-table";
import { useTranslations } from "next-intl";

const FM: React.FC<FMProps> = ({ }) => {
	const t = useTranslations();

	const columnHelper = createColumnHelper<Rune>();

	const columns = [
		columnHelper.group({
			header: t("fm.table.characteristics"),
			columns: [
				columnHelper.accessor(rune => <img src={"https://profus.net" + rune.characteristicIcon} />, { id: "characteristicIcon" }),
				columnHelper.accessor(rune => rune.characteristic, { id: "characteristic" }),
			],
		}),
		columnHelper.group({
			header: t("fm.table.weight"),
			columns: [
				columnHelper.accessor(rune => rune.weight, { id: "weight" }),
			],
		}),
		columnHelper.group({
			header: t("fm.table.rune"),
			columns: [
				columnHelper.accessor(rune => <img src={"https://profus.net" + rune.icon} alt={rune.name} />, { id: "icon" }),
				columnHelper.accessor(rune => rune.name, { id: "name" }),
			],
		}),
		columnHelper.group({
			header: t("fm.table.rune_weight"),
			columns: [
				columnHelper.accessor(rune => `${rune.weight} (${rune.runeWeight >= 0 ? "+" : "-"}${rune.runeWeight})`, { id: "runeWeight" }),
			],
		}),
		columnHelper.group({
			header: t("fm.table.pa_level"),
			columns: [
				columnHelper.accessor(rune => rune.PALevel, { id: "paLevel" }),
			],
		}),
		columnHelper.group({
			header: t("fm.table.pa"),
			columns: [
				columnHelper.accessor(rune => rune.PA, { id: "pa" }),
			],
		}),
		columnHelper.group({
			header: t("fm.table.ra_level"),
			columns: [
				columnHelper.accessor(rune => rune.RALevel, { id: "raLevel" }),
			],
		}),
		columnHelper.group({
			header: t("fm.table.ra"),
			columns: [
				columnHelper.accessor(rune => rune.RA, { id: "ra" }),
			],
		}),
		columnHelper.group({
			header: t("fm.table.max"),
			columns: [
				columnHelper.accessor(rune => rune.max, { id: "max" }),
			],
		}),
	];

	const data: Rune[] = [
		{
			characteristicIcon: "/static/characteristics/0.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78059.png",
			characteristic: "",
			weight: 5,
			name: "Rune de chasse",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 20
		},
		{
			characteristicIcon: "/static/characteristics/1.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78055.png",
			characteristic: "AP",
			weight: 100,
			name: "Ap Ga Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 1
		},
		{
			characteristicIcon: "/static/characteristics/10.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78043.png",
			characteristic: "Strength",
			weight: 1,
			name: "Stre Rune",
			runeWeight: 1,
			PALevel: 33,
			PA: 3,
			RALevel: 67,
			RA: 10,
			max: 101
		},
		{
			characteristicIcon: "/static/characteristics/11.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78052.png",
			characteristic: "Vitality",
			weight: 0.2,
			name: "Vit Rune",
			runeWeight: 5,
			PALevel: 168,
			PA: 15,
			RALevel: 336,
			RA: 50,
			max: 505
		},
		{
			characteristicIcon: "/static/characteristics/12.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78049.png",
			characteristic: "Wisdom",
			weight: 3,
			name: "Wis Rune",
			runeWeight: 1,
			PALevel: 11,
			PA: 3,
			RALevel: 22,
			RA: 10,
			max: 33
		},
		{
			characteristicIcon: "/static/characteristics/13.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78040.png",
			characteristic: "Chance",
			weight: 1,
			name: "Cha Rune",
			runeWeight: 1,
			PALevel: 33,
			PA: 3,
			RALevel: 67,
			RA: 10,
			max: 101
		},
		{
			characteristicIcon: "/static/characteristics/14.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78046.png",
			characteristic: "Agility",
			weight: 1,
			name: "Agi Rune",
			runeWeight: 1,
			PALevel: 33,
			PA: 3,
			RALevel: 67,
			RA: 10,
			max: 101
		},
		{
			characteristicIcon: "/static/characteristics/15.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78037.png",
			characteristic: "Intelligence",
			weight: 1,
			name: "Int Rune",
			runeWeight: 1,
			PALevel: 33,
			PA: 3,
			RALevel: 67,
			RA: 10,
			max: 101
		},
		{
			characteristicIcon: "/static/characteristics/16.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78015.png",
			characteristic: "Damage",
			weight: 20,
			name: "Dam Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 5
		},
		{
			characteristicIcon: "/static/characteristics/18.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78014.png",
			characteristic: "Critical Hits",
			weight: 10,
			name: "Cri Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 10
		},
		{
			characteristicIcon: "/static/characteristics/19.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78018.png",
			characteristic: "Range",
			weight: 51,
			name: "Range Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 1
		},
		{
			characteristicIcon: "/static/characteristics/23.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78056.png",
			characteristic: "MP",
			weight: 90,
			name: "Mp Ga Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 1
		},
		{
			characteristicIcon: "/static/characteristics/25.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78016.png",
			characteristic: "Power",
			weight: 2,
			name: "Pow Rune",
			runeWeight: 1,
			PALevel: 16,
			PA: 3,
			RALevel: 33,
			RA: 10,
			max: 50
		},
		{
			characteristicIcon: "/static/characteristics/26.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78019.png",
			characteristic: "Summons",
			weight: 30,
			name: "Summo Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 3
		},
		{
			characteristicIcon: "/static/characteristics/27.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78083.png",
			characteristic: "AP Parry",
			weight: 7,
			name: "Ap Res Rune",
			runeWeight: 1,
			PALevel: 4,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 14
		},
		{
			characteristicIcon: "/static/characteristics/28.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78085.png",
			characteristic: "MP Parry",
			weight: 7,
			name: "Mp Res Rune",
			runeWeight: 1,
			PALevel: 4,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 14
		},
		{
			characteristicIcon: "/static/characteristics/33.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78035.png",
			characteristic: "Earth (%)",
			weight: 6,
			name: "Earth Res Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 16
		},
		{
			characteristicIcon: "/static/characteristics/34.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78029.png",
			characteristic: "Fire (%)",
			weight: 6,
			name: "Fire Res Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 16
		},
		{
			characteristicIcon: "/static/characteristics/35.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78031.png",
			characteristic: "Water (%)",
			weight: 6,
			name: "Water Res Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 16
		},
		{
			characteristicIcon: "/static/characteristics/36.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78033.png",
			characteristic: "Air (%)",
			weight: 6,
			name: "Air Res Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 16
		},
		{
			characteristicIcon: "/static/characteristics/37.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78058.png",
			characteristic: "Neutral (%)",
			weight: 6,
			name: "Neutral Res Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 16
		},
		{
			characteristicIcon: "/static/characteristics/40.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78020.png",
			characteristic: "Pods",
			weight: 0.25,
			name: "Pod Rune",
			runeWeight: 10,
			PALevel: 134,
			PA: 30,
			RALevel: 269,
			RA: 100,
			max: 404
		},
		{
			characteristicIcon: "/static/characteristics/44.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78025.png",
			characteristic: "Initiative",
			weight: 0.1,
			name: "Ini Rune",
			runeWeight: 10,
			PALevel: 336,
			PA: 30,
			RALevel: 673,
			RA: 100,
			max: 1010
		},
		{
			characteristicIcon: "/static/characteristics/48.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78036.png",
			characteristic: "Prospecting",
			weight: 3,
			name: "Prospe Rune",
			runeWeight: 1,
			PALevel: 11,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 33
		},
		{
			characteristicIcon: "/static/characteristics/49.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78013.png",
			characteristic: "Heals",
			weight: 10,
			name: "Hea Rune",
			runeWeight: 1,
			PALevel: 3,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 10
		},
		{
			characteristicIcon: "/static/characteristics/50.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78017.png",
			characteristic: "Reflect",
			weight: 10,
			name: "Dam Ref Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 10
		},
		{
			characteristicIcon: "/static/characteristics/54.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78034.png",
			characteristic: "Earth (fixed)",
			weight: 2,
			name: "Earth Res Rune",
			runeWeight: 1,
			PALevel: 16,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 50
		},
		{
			characteristicIcon: "/static/characteristics/55.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78028.png",
			characteristic: "Fire (fixed)",
			weight: 2,
			name: "Fire Res Rune",
			runeWeight: 1,
			PALevel: 16,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 50
		},
		{
			characteristicIcon: "/static/characteristics/56.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78030.png",
			characteristic: "Water (fixed)",
			weight: 2,
			name: "Water Res Rune",
			runeWeight: 1,
			PALevel: 16,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 50
		},
		{
			characteristicIcon: "/static/characteristics/57.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78032.png",
			characteristic: "Air (fixed)",
			weight: 2,
			name: "Air Res Rune",
			runeWeight: 1,
			PALevel: 16,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 50
		},
		{
			characteristicIcon: "/static/characteristics/58.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78057.png",
			characteristic: "Neutral (fixed)",
			weight: 2,
			name: "Neutral Res Rune",
			runeWeight: 1,
			PALevel: 16,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 50
		},
		{
			characteristicIcon: "/static/characteristics/69.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78024.png",
			characteristic: "Traps (Power)",
			weight: 2,
			name: "Tra Per Rune",
			runeWeight: 1,
			PALevel: 16,
			PA: 3,
			RALevel: 33,
			RA: 10,
			max: 50
		},
		{
			characteristicIcon: "/static/characteristics/70.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78023.png",
			characteristic: "Traps (fixed)",
			weight: 5,
			name: "Tra Rune",
			runeWeight: 1,
			PALevel: 6,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 20
		},
		{
			characteristicIcon: "/static/characteristics/78.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78076.png",
			characteristic: "Dodge",
			weight: 4,
			name: "Dod Rune",
			runeWeight: 1,
			PALevel: 8,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 25
		},
		{
			characteristicIcon: "/static/characteristics/79.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78077.png",
			characteristic: "Lock",
			weight: 4,
			name: "Loc Rune",
			runeWeight: 1,
			PALevel: 8,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 25
		},
		{
			characteristicIcon: "/static/characteristics/82.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78087.png",
			characteristic: "AP reduction",
			weight: 7,
			name: "Ap Red Rune",
			runeWeight: 1,
			PALevel: 4,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 14
		},
		{
			characteristicIcon: "/static/characteristics/83.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78089.png",
			characteristic: "MP reduction",
			weight: 7,
			name: "Mp Red Rune",
			runeWeight: 1,
			PALevel: 4,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 14
		},
		{
			characteristicIcon: "/static/characteristics/84.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78081.png",
			characteristic: "Pushback",
			weight: 5,
			name: "Psh Dam Rune",
			runeWeight: 1,
			PALevel: 6,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 20
		},
		{
			characteristicIcon: "/static/characteristics/85.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78079.png",
			characteristic: "Pushback (fixed)",
			weight: 2,
			name: "Psh Res Rune",
			runeWeight: 1,
			PALevel: 16,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 50
		},
		{
			characteristicIcon: "/static/characteristics/86.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78073.png",
			characteristic: "Critical damage",
			weight: 5,
			name: "Cri Dam Rune",
			runeWeight: 1,
			PALevel: 6,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 20
		},
		{
			characteristicIcon: "/static/characteristics/87.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78071.png",
			characteristic: "Critical Hits (fixed)",
			weight: 2,
			name: "Cri Res Rune",
			runeWeight: 1,
			PALevel: 16,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 50
		},
		{
			characteristicIcon: "/static/characteristics/88.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78065.png",
			characteristic: "Earth (fixed)",
			weight: 5,
			name: "Earth Dam Rune",
			runeWeight: 1,
			PALevel: 6,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 20
		},
		{
			characteristicIcon: "/static/characteristics/89.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78063.png",
			characteristic: "Fire (fixed)",
			weight: 5,
			name: "Fire Dam Rune",
			runeWeight: 1,
			PALevel: 6,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 20
		},
		{
			characteristicIcon: "/static/characteristics/90.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78061.png",
			characteristic: "Water (fixed)",
			weight: 5,
			name: "Water Dam Rune",
			runeWeight: 1,
			PALevel: 6,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 20
		},
		{
			characteristicIcon: "/static/characteristics/91.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78067.png",
			characteristic: "Air (fixed)",
			weight: 5,
			name: "Air Dam Rune",
			runeWeight: 1,
			PALevel: 6,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 20
		},
		{
			characteristicIcon: "/static/characteristics/92.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78069.png",
			characteristic: "Neutral (fixed)",
			weight: 5,
			name: "Neutral Dam Rune",
			runeWeight: 1,
			PALevel: 6,
			PA: 3,
			RALevel: null,
			RA: null,
			max: 20
		},
		{
			characteristicIcon: "/static/characteristics/112.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78092.png",
			characteristic: "Close-Combat damage multiplier",
			weight: 15,
			name: "Me Dam Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 6
		},
		{
			characteristicIcon: "/static/characteristics/113.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78091.png",
			characteristic: "Long-Range damage multiplier",
			weight: 15,
			name: "Ra Dam Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 6
		},
		{
			characteristicIcon: "/static/characteristics/114.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78093.png",
			characteristic: "Weapon damage multiplier",
			weight: 15,
			name: "We Dam Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 6
		},
		{
			characteristicIcon: "/static/characteristics/115.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78095.png",
			characteristic: "Close-Combat damage suffered multiplier",
			weight: 15,
			name: "Me Res Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 6
		},
		{
			characteristicIcon: "/static/characteristics/116.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78094.png",
			characteristic: "Spell damage multiplier",
			weight: 15,
			name: "Spe Dam Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 6
		},
		{
			characteristicIcon: "/static/characteristics/117.svg",
			icon: "/static/dofus2/dofusData/item/bitmap/78/78096.png",
			characteristic: "Long-Range damage suffered multiplier",
			weight: 15,
			name: "Ra Res Per Rune",
			runeWeight: 1,
			PALevel: null,
			PA: null,
			RALevel: null,
			RA: null,
			max: 6
		}
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div>
			<h1>{t("fm.title")}</h1>
			<table>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<tr key={row.id}>
							{row.getVisibleCells().map(cell => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

interface FMProps {

}

interface Rune {
	characteristicIcon: string;
	characteristic: string;
	weight: number;
	icon: string;
	name: string;
	runeWeight: number;
	PALevel: number | null;
	PA: number | null;
	RALevel: number | null;
	RA: number | null;
	max: number | null;
}

export default FM;

import { useItems } from "./useItems";

const availableItems = [
  {
    name: "Apple",
    image:
      "https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji/color/618x618/1F34E.png",
  },
  {
    name: "Banana", 
    image:
      "https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji/color/618x618/1F34C.png",
  },
  {
    name: "Orange",
    image:
      "https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji/color/618x618/1F34A.png",
  },
  {
    name: "Mango",
    image:
      "https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji/color/618x618/1F96D.png",
  },
  {
    name: "Watermelon",
    image:
      "https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji/color/618x618/1F349.png",
  },
];

export default function ItemList() {
  const { addItem } = useItems();

  return (
    <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Available Items</h2>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {availableItems.map((item) => (
        <div
            key={item.name}
            className="flex flex-col items-center gap-3 rounded-lg border bg-white p-4 text-center shadow-sm"
        >
            <img
            src={item.image}
            alt={item.name}
            className="h-14 w-14 rounded-md border bg-white p-1 object-contain"
            />
            <span className="text-gray-700">{item.name}</span>

            <button
            onClick={() => addItem(item)}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
            Add
            </button>
        </div>
        ))}
    </div>
    </div>
  );
}
import { useMemo } from "react";
import { useItems } from "./ItemContext";

export default function SelectedItems() {
  const { items, clearItems, removeItem } = useItems();

  const groupedItems = useMemo(() => {
    const grouped = new Map();

    items.forEach((item, index) => {
      const existing = grouped.get(item.name);

      if (existing) {
        existing.count += 1;
        existing.indexes.push(index);
        return;
      }

      grouped.set(item.name, {
        ...item,
        count: 1,
        indexes: [index],
      });
    });

    return Array.from(grouped.values());
  }, [items]);

  return (
    <div className="mt-8 rounded-lg border bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          Selected Fruits
        </h2>

        <button
          onClick={clearItems}
          disabled={items.length === 0}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear All
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500">
          No items selected.
        </p>
      ) : (
        <div className="space-y-2">
          {groupedItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 rounded-md bg-gray-100 px-4 py-3 text-gray-700"
            >
              <img
                src={item.image}
                className="h-9 w-9 rounded-md border bg-white p-1 object-contain"
              />
              <span>{item.name}</span>
              <span className="rounded bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-700">
                x{item.count}
              </span>
              <button
                onClick={() => removeItem(item.indexes[item.indexes.length - 1])}
                className="ml-auto rounded-md bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
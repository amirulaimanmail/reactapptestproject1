import { ItemProvider } from "./ItemContext";
import ItemList from "./ItemList";
import SelectedItems from "./SelectedItems";

export default function App() {
  return (
    <ItemProvider>
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Fruit list
          </h1>

          <ItemList />

          <SelectedItems />
        </div>
      </main>
    </ItemProvider>
  );
}
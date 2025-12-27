import VirtualizedList from "./components/virtualizedlist";

export default function App() {
  const items = Array.from({ length: 100000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="App">
      <VirtualizedList items={items} itemHeight={50} windowHeight={400} />
    </div>
  );
}


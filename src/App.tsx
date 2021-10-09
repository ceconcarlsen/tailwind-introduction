import TestmonialItem from "./components/TestimonialItem";

function App() {
  return (
    <div className="p-10">
      <TestmonialItem />

      <a
        className="block shadow bg-green-900 text-white text-center p-4 mt-5 rounded-xl hover:bg-green-700"
        href="https://github.com/ceconcarlsen"
        target="_blank"
      >
        INFORMAÇÕES ADICIONAIS
      </a>
    </div>
  );
}

export default App;

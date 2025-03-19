import ImageMagnifier from "./components/ImageMagnifier";

const App = () => {
  return (
    <div className="container">
      <ImageMagnifier imageUrl="/villege.jpeg" /> {/* Use direct public path */}
    </div>
  );
};

export default App;



import ImageMagnifier from "./components/ImageMagnifier";
import villageImage from "./assets/villege.jpeg"; // Import the image

const App = () => {
  return (
    <div className="container">
      {/* Pass the imported image as a prop */}
      <ImageMagnifier imageUrl={villageImage} />
    </div>
  );
};

export default App;


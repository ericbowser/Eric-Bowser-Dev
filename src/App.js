import Navigation from './Components/Navigation';

function App () {
  const windowHeight = window.innerHeight;
  const initialWidth = window.innerWidth;
  console.log('inner height:', windowHeight);
  console.log('inner width:', initialWidth);
  
  const winWidth = initialWidth <= 500 ? '100%' : '50%';
  
  
  return (
    <div className="container">
      <Navigation />
    </div>
  )
}

export default App

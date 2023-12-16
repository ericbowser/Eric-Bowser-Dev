import Navigation from './Components/Navigation';
function App () {
  const windowHeight = window.innerHeight;
  const initialWidth = window.innerWidth;
  console.log('inner height:', windowHeight);
  console.log('inner width:', initialWidth);
  
  const winWidth = initialWidth <= 500 ? '100%' : '50%';
  
  
  return (
    <div className={'container-sm m-4 p-4 color-dark '}>
      <Navigation className={'container'}/>
      <div className={'p-4'}>
        <span className={'bg-yellow-50'}>
          Written By: Eric Ryan Bowser
        </span>
        {/*<Footer.Icon icon={x}></Footer.Icon>*/}
      </div>
    </div>
  )
  
}

export default App

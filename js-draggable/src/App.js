import './App.css';
import React, {useRef, useEffect} from 'react';
import {Sortable} from '@shopify/draggable';

function App() {

  const $container = useRef();

  
  useEffect(() => {
    const sort = new Sortable($container.current, {
      draggable: '.boxes'
    })
    console.log(Sortable.startIndex)
    sort.on('sortable:start', () => console.log('starting sort: ',document.getElementsByClassName('boxes'))
    );
    sort.on('sortable:sorted', (e) => console.log('sorted: ',  Array.from(sort.getDraggableElementsForContainer(e.newContainer)).map(value => value.textContent)));
    
    return () => {
      sort.destroy()
    }

  }, [])  


  return (
    <div className="App" ref={$container}>
    <div className="boxes" >
      Box 1
    </div>
    <div className="boxes">
      Box 2
    </div>
    <div className="boxes">
      Box 3
    </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Regulartimer from './Regulartimer';
import Shorttimer from './Shorttimer';
import Longtimer from './Longtimer';
function App() {

  const [activeComponent, setActiveComponent] = useState();
  const handleButtonClick = (component) => {
    console.log(`Clicked on button for ${component}`);
    setActiveComponent(component);
  };

  console.log('Active Component:', activeComponent);
  document.title = 'Minimal Pomo Timer';
  return (
    <div className="App">

      <body class="flex items-center justify-center min-h-screen m-0 h-full flex-auto bg-white dark:bg-gray-900">
        <main class="text-center">
          <div class="mt-3 flex items-center justify-center gap-x-6">
            <button class="rounded-2xl text-gray-900  px-3.5 py-2.5 text-sm font-semibold border border-gray-900 hover:border-none hover:bg-gray-900 hover:text-white  " onClick={() => handleButtonClick('First')}>Pomo</button>
            <button class="rounded-2xl text-gray-900  px-3.5 py-2.5 text-sm font-semibold border border-gray-900 hover:border-none hover:bg-gray-900 hover:text-white " onClick={() => handleButtonClick('Second')}>Short Break</button>
            <button class="rounded-2xl text-gray-900  px-3.5 py-2.5 text-sm font-semibold  border border-gray-900 hover:border-none hover:bg-gray-900 hover:text-white " onClick={() => handleButtonClick('Third')}>Long Break</button>
          </div>   {activeComponent === 'First' && <Regulartimer />}
          {activeComponent === 'Second' && <Shorttimer />}
          {activeComponent === 'Third' && <Longtimer />}
          <h1 class="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl"> </h1>
          <div class="mt-3 flex items-center justify-center gap-x-6">
            {/* <a href="#" class="rounded-2xl text-gray-900  px-3.5 py-2.5 text-sm font-semibold  border border-gray-900  hover:border-none hover:bg-gray-900 hover:text-white" onClick={addComponent}>{isActive ? 'Pause' : 'Start'}</a>
            <a href="#" class="rounded-2xl text-gray-900  px-3.5 py-2.5 text-sm font-semibold border border-gray-900  hover:border-none hover:bg-gray-900 hover:text-white " onClick={handleReset}>Reset</a>
            <a href="#" class="text-sm font-semibold text-gray-900 hover:underline ">Contact support <span aria-hidden="true">&rarr;</span></a> */}
          </div>
          <div className="fixed bottom-0 right-0 p-2 text-gray-900 text-xs">
            Viral Sachde
          </div>
        </main>
      </body>
    </div>
  );
}
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

export default App;

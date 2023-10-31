import RootNaviagtion from './src/navigations';
import Data from './src/context/Context';
import {useState} from 'react';

function App() {
  const [bookData, setBookData] = useState();
  return (
    <Data.Provider value={{bookData, setBookData}}>
      <RootNaviagtion />
    </Data.Provider>
  );
}

export default App;

import './App.css';
import AppRouter from './App-Router';
import RingsContextProvider from './contexts/rings-context';
import WatchesContextProvider from './contexts/watches-context';
import EarringsContextProvider from './contexts/earrings-context';
import NecklacesContextProvider from './contexts/necklaces-context';

function App() {
  return (
    <div className="App">
      <RingsContextProvider>
        <WatchesContextProvider>
          <EarringsContextProvider>
            <NecklacesContextProvider>
              <AppRouter />
            </NecklacesContextProvider>
          </EarringsContextProvider>
        </WatchesContextProvider>
      </RingsContextProvider>
    </div>
    
  );
}

export default App;
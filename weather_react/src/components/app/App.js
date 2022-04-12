import Container from '../container/Container';
import Search from '../search/Serach';
import Info from '../Info/Info';
import Locations from '../locations/Locations';

import './app.scss';

function App() {
  return (
    <Container>
      <div className="weather">
        <Search />
        <div className="weather__body">
          <Info />
          <Locations />
        </div>
      </div>
    </Container>
  );
}

export default App;

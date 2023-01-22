import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RatingCard from './components/ratingCard';
import ThankCard from './components/thankCard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RatingCard/>} />
          <Route path='/thanks' element={<ThankCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

import './App.scss';
import Main_page from './Pages/Main_page';
import Ticket_Booking from './Pages/Ticket_booking';
import Ticket_Selecting from './Pages/Ticket_selecting_page';
import Card_page from './Pages/Card_page';
import User_profile_page from './Pages/User_profile_page';
import Error_page from './Pages/Error_page';
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware,combineReducers } from "redux";
import Reducer from './Redux/Reducer';
import Reducer_Tic from './Redux/TicketEnd/Reducer_Tic';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import thunk from "redux-thunk";
const AllReducer = combineReducers({Reducer,Reducer_Tic})
const Mystore = createStore(AllReducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={Mystore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main_page />} />
          <Route path='/main' element={<Main_page />} />
          <Route path='/Card_page' element={<Card_page />} />
          <Route path='/Ticket_Booking' element={<Ticket_Booking />} />
          <Route path='/Ticket_Selecting' element={<Ticket_Selecting />} />
          <Route path='/User_profile_page' element={<User_profile_page />} />
          <Route path='*' element={<Error_page />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

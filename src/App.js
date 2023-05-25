import './App.css';
import Header from './components/header/Header';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import { useReducer } from 'react';
import { AppProvider } from './context/appProvider/AppProvider';
import Footer from './components/Footer/Footer';
import { BookingPage } from './pages/home/Booking/BookingPage';
import { ConfirmedBooking } from './pages/home/Booking/pages/ConfirmedBooking/ConfirmedBooking';


const Root = ()=>{
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter(createRoutesFromElements(
 <Route path='/' element={<Root />}>
  <Route index element = {<Home />} />
  <Route path="bookings" element={<BookingPage />}>
        <Route path="thank-you" element={<ConfirmedBooking />} />
      </Route>

 </Route> 
))

function App() {
  const initialAppState = {
    previousLocation: ['/']
  }

  const reducer=()=>{

  }

  const [stateGlobal, dispatchGlobal] = useReducer(reducer, initialAppState)
  return (
     <AppProvider value={{ stateGlobal, dispatchGlobal }}>
       <RouterProvider router={router} />
      </AppProvider>
  );
}

export default App;

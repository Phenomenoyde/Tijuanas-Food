import { useReducer } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { AppProvider, ThemeProvider } from './context';
import { Header, Footer } from './components';
import './App.css';
import { Inicio, BookingPage, Fullmen, ConfirmedBooking } from './pages';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Inicio />} />
      <Route path="bookings" element={<BookingPage />}>
        <Route path="Gracias" element={<ConfirmedBooking />} />
      </Route>
      <Route path="fullmen" element={<Fullmen />}>
       </Route>
    </Route>
  )
);

function App() {
  const initialAppState = {
    previousLocation: ['/'],
  };
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'setPreviousLocation': {
        return {
          // ...state,
          // previousLocation: [...state.previousLocation]
          //   .slice(0, 1)
          //   .push(payload),
        };
      }

      default:
        break;
    }
  };
  const [stateGlobal, dispatchGlobal] = useReducer(reducer, initialAppState);
  return (
    <AppProvider value={{ stateGlobal, dispatchGlobal }}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

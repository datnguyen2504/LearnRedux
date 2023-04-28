
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
import MainLayout from './Layouts/MainLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />

  }
])


function App() {
  return (
    <div className="App">


      <MainLayout className="main-layout">
        <RouterProvider router={router} />
      </MainLayout>

    </div>
  );
}

export default App;

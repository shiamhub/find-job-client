import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import SingleJob from './features/jobs/SingleJob.jsx';
import Login from './authentication/Login.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "job/:id",
        element: <SingleJob></SingleJob>,
        // loader: ({ params }) => fetch(`https://find-job-server-shiamhub.vercel.app/job/${params.id}`)
        // loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)

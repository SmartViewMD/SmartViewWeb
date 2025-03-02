import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy load App component without the artificial delay
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback={<Spinner animation="border" role="status" className="loader" />}>
    <App />
  </Suspense>
);

import './App.css';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        {/* changing the URL without causing a full page reload */}
        <Link to='/invoices'>Invoices</Link> |{' '}
        <Link to='/expenses'>Expenses</Link>
      </nav>
      {/* Outlet swaps between the two child routes (Invoices and Expenses) */}
      <Outlet />
    </div>
  );
}

import { useLocation, NavLink } from 'react-router-dom';

export default function Expenses() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Expenses</h2>
    </main>
  );
}

export function QueryNavLink({ to, ...props }) {
  //returns a location that tells us information about the url
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

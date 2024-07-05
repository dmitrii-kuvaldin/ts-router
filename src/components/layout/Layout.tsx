import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='my-form'>Form</Link>
        <Link to='login'>login</Link>
      </header>
      <Outlet />

    </>
  );
}

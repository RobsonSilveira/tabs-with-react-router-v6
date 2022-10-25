import { NavLink, Outlet } from 'react-router-dom';
import { routesConfig } from '../routesConfig';

export const Layout = () => {
  return (
    <main>
      <header
        style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}
      >
        {routesConfig
          .filter((r) => !r.hiddenOnTab)
          .map((config, index) => (
            <NavLink
              key={index}
              to={config.path}
              className={({ isActive }) => (isActive ? 'active' : 'outline')}
            >
              {config.title}
            </NavLink>
          ))}
      </header>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

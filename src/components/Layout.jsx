import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <AppBarComponent />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

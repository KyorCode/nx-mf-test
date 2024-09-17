import * as React from 'react';

const Module = React.lazy(() => import('product/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Module text="Badaboem" />
    </React.Suspense>
  );
}

export default App;

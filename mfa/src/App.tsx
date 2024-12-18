import React, { Suspense } from "react";

const Header = React.lazy(() => import("headerApp/Header"));
const Footer = React.lazy(() => import("footerApp/Footer"));

const App: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <main style={{ padding: "20px" }}>
        <h1>Main Application</h1>
      </main>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;

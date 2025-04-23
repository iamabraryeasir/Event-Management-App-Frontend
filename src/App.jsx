import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EventsPage from "./pages/EventsPage";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

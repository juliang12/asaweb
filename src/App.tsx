import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import DashboardRoutes from "./routes/DashboardRoutes";

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Layout>
          <DashboardRoutes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

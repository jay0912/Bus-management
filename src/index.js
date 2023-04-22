import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBus from "./AllBus";
import BusAdd from "./BusAdd";
import BusDetail from "./BusDetails";
import Home from "./Home";
import Layout from "./Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/allBuses" element={<AllBus />}></Route>
          <Route path="/bus/:id" element={<BusDetail />}></Route>
          <Route path="/bus/add" element={<BusAdd />}></Route>
          <Route path="/bus/edit/:id" element={<BusAdd />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

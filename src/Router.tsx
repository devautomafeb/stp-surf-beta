import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./components/DefaultLayout";
import {Choose} from './views/Choose';
import { Surf } from "./views/Surf";
import {Funcional} from "./views/Funcional";
import {Yoga} from "./views/Yoga";
import {MuayThai} from "./views/MuayThai";


export default function Router() {
    return (
        <Routes>
            <Route path = "/" element={<DefaultLayout />}>
            <Route path = "/" element={<Choose />} />
                <Route path = "/surf" element={<Surf />} />
                <Route path = "/funcional" element={<Funcional />} />
                <Route path = "/yoga" element={<Yoga />} />
                <Route path = "/muaythai" element={<MuayThai />} />
            </Route>
        </Routes>
    )
}

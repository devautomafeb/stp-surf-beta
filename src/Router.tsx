import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./components/DefaultLayout";
import {Choose} from './views/Choose';
import { Surf } from "./views/Surf";
import {Funcional} from "./views/Funcional";
import {Yoga} from "./views/Yoga";
import {Muaythai} from "./views/Muaythai";
import { Beachtenis } from "./views/Beachtenis";


export default function Router() {
    return (
        <Routes>
            <Route path = "/" element={<DefaultLayout />}>
            <Route path = "/" element={<Choose />} />
                <Route path = "/surf" element={<Surf />} />
                <Route path = "/funcional" element={<Funcional />} />
                <Route path = "/beach" element={<Beachtenis />} />
                <Route path = "/yoga" element={<Yoga />} />
                <Route path = "/muaythai" element={<Muaythai />} />
            </Route>
        </Routes>
    )
}

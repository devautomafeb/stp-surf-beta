
import { Footer } from '../Footer';
import { Layout01, Layout02 } from './styles'

import { Outlet } from "react-router-dom";


export function DefaultLayout() {
    return (
            <Layout01>
                <Layout02>
                    <Outlet />
                </Layout02>
            </Layout01>
    )
}
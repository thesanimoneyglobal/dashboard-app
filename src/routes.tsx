import {createBrowserRouter} from "react-router-dom";
import Layout from "./scenes/global/Layout.tsx";
import Dashboard from "./scenes/Dashboard.tsx";
import Team from "./scenes/Team.tsx";
import FAQ from "./scenes/FAQ.tsx";
import Calendar from "./scenes/Calendar.tsx";
import Contacts from "./scenes/Contacts.tsx";
import Profile from "./scenes/profie/Profile.tsx";
import BarChartPage from "./scenes/BarChartPage.tsx";
import PieChartPage from "./scenes/PieChartPage.tsx";
import GeoChartPage from "./scenes/GeoChartPage.tsx";
import LineChartPage from "./scenes/LineChartPage.tsx";
import TransactionsPage from "./scenes/TransactionsPage.tsx";

const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
            {path: '', element: <Dashboard/>},
            {path: 'team', element: <Team/>},
            {path: 'faq', element: <FAQ/>},
            {path: 'transactions', element: <TransactionsPage/>},
            {path: 'calendar', element: <Calendar/>},
            {path: 'contacts', element: <Contacts/>},
            {path: 'line-chart', element: <LineChartPage/>},
            {path: 'pie-chart', element: <PieChartPage/>},
            {path: 'profile', element: <Profile/>},
            {path: 'geo-chart', element: <GeoChartPage/>},
            {path: 'bar-chart', element: <BarChartPage/>},
        ]}
])

export default routes
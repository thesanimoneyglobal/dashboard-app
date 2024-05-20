import Header from "../components/header/Header.tsx";
import GeoChart from "../components/GeoChart.tsx";

function GeoChartPage() {
    return <>
        <Header title={'Geo Chart'} subtitle={'Discover Geo Chart'}/>
        <GeoChart size={75} isDashboard={false}></GeoChart>
    </>
}

export default GeoChartPage;
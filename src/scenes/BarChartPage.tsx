import Header from "../components/header/Header.tsx";
import BarChart from "../components/BarChart.tsx";

function BarChartPage() {
    return <>
        <Header title={'Bar Chart'} subtitle={'Discover Bar Chart'}/>
        <BarChart height={60}></BarChart>
    </>
}

export default BarChartPage;
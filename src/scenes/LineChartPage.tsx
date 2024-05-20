import Header from "../components/header/Header.tsx";
import LineChart from "../components/LineChart.tsx";

function LineChartPage() {
    return <>
        <Header title={'Line Chart'} subtitle={'Discover Line Chart'}/>
        <LineChart height={75} isDashboard={false}></LineChart>
    </>
}

export default LineChartPage;
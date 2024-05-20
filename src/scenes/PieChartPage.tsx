import Header from "../components/header/Header.tsx";
import PieChart from "../components/PieChart.tsx";

function PieChartPage() {
    return <>
        <Header title={'Pie Chart'} subtitle={'Discover Pie Chart'}/>
        <PieChart size={75} isDashboard={false}></PieChart>
    </>
}

export default PieChartPage;
import ChartLine from "@/components/chart/ChartLine";
import Dashboard from "@/components/dashboard/Dashboard";


export default function Chart() {

    return (
        <div className="m-4 flex max-lg:flex-col gap-4">
            <ChartLine />
            <Dashboard />
        </div>
    )
}
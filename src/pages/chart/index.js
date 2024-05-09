import ChartLine from "@/components/chart/ChartLine";
import Dashboard from "@/components/dashboard/Dashboard";


export default function Chart() {

    return (
        <div className="mt-4 p-4 flex gap-4">
            <ChartLine />
            <Dashboard />
        </div>
    )
}
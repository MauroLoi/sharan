import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";

const ProgressAnalytics = () => {

    return (
        <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 xl:px-10 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-full gap-7 max-w-4x">
                <div>
                    <ChartOne />
                </div>
                <div>
                    <ChartTwo />
                </div>
            </div>
        </main>
    );
};

export default ProgressAnalytics;
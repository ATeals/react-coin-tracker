import { getPriceHistory } from "@/api/coin";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
    const { coinId } = useParams();

    const { isLoading, data } = useQuery<PriceHistory[]>(["PriceHistory", coinId], () => getPriceHistory(coinId as string));

    return (
        <>
            <h1>Chart</h1>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <ReactApexChart
                    type="line"
                    series={[
                        {
                            name: "sales",
                            data: data?.map((price) => price.close) as number[],
                        },
                    ]}
                    options={{
                        chart: {
                            height: 500,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                        },
                        stroke: {
                            curve: "smooth",
                            width: 3,
                        },
                    }}
                />
            )}
        </>
    );
};

interface PriceHistory {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

export default Chart;

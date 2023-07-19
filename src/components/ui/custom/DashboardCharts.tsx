import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const plotOptions: ApexPlotOptions = {
  pie: {
    donut: {
      size: "40%",
    },
  },
};

const DashboardCharts = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between gap-6">
      <div className="flex grow flex-col rounded-2xl bg-[#1A1D1F] px-[22px] py-6">
        <div className="text-[#6F767E]">Properties for Sale</div>
        <div className="flex">
          <div>684</div>

          <ReactApexChart
            options={{
              plotOptions,
              chart: { type: "donut" },
              colors: ["#475BE8", "#272B30"],
              legend: { show: false },
              dataLabels: { enabled: false },
              stroke: {
                colors: ["transparent"],
              },
            }}
            series={[75, 25]}
            type="donut"
            width="120px"
          />
        </div>
      </div>

      <div className="flex grow flex-col rounded-2xl bg-[#1A1D1F] px-[22px] py-6">
        <div className="text-[#6F767E]">Properties for Rent</div>
        <div className="flex">
          <div>684</div>

          <ReactApexChart
            options={{
              plotOptions,
              chart: { type: "donut" },
              colors: ["#FD8539", "#272B30"],
              legend: { show: false },
              dataLabels: { enabled: false },
              stroke: {
                colors: ["transparent"],
              },
            }}
            series={[75, 25]}
            type="donut"
            width="120px"
          />
        </div>
      </div>

      <div className="flex grow flex-col rounded-2xl bg-[#1A1D1F] px-[22px] py-6">
        <div className="text-[#6F767E]">Total Customer</div>
        <div className="flex">
          <div>684</div>

          <ReactApexChart
            options={{
              plotOptions,
              chart: { type: "donut" },
              colors: ["#2ED480", "#272B30"],
              legend: { show: false },
              dataLabels: { enabled: false },
              stroke: {
                colors: ["transparent"],
              },
            }}
            series={[75, 25]}
            type="donut"
            width="120px"
          />
        </div>
      </div>

      <div className="flex grow flex-col rounded-2xl bg-[#1A1D1F] px-[22px] py-6">
        <div className="text-[#6F767E]">Total City</div>
        <div className="flex">
          <div>684</div>

          <ReactApexChart
            options={{
              plotOptions,
              chart: { type: "donut" },
              colors: ["#FE6D8E", "#272B30"],
              legend: { show: false },
              dataLabels: { enabled: false },
              stroke: {
                colors: ["transparent"],
              },
            }}
            series={[75, 25]}
            type="donut"
            width="120px"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;

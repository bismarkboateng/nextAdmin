import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";


export default function Dashboard() {
  return (
    <section className="flex gap-5 mt-5">
     <div className="flex flex-col basis-3/4 gap-5">
      <div className="flex gap-5 justify-between">
        <Card />
        <Card />
        <Card />
      </div>
      <Transactions />
      <Chart />
     </div>
     <div className="basis-1/4">
      <Rightbar />
     </div>
    </section>
  )
}

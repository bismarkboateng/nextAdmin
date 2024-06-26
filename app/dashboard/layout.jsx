import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Footer from "../ui/dashboard/footer/footer";

export default function DashboardLayout({children}) {
  return (
    <section className="flex">
     <div className="basis-[25%] bg-[#182237] p-5">
      <Sidebar />
     </div>
     <div className="basis-[75%] p-5">
      <Navbar />
      {children}
      <Footer />
     </div>
    </section>
  )
}

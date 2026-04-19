import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="flex flex-1 w-full flex-col items-center justify-between py-2 px-8 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-row w-full h-full rounded-lg border-2 border-dashed border-gray-300 p-4">
          {/* <h1 className="text-2xl font-bold mb-4">Dashboard</h1> */}
          <span className="flex flex-col items-start justify-start w-full">
            <h3 className="text-lg font-semibold mb-2">Customers!</h3>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
              <div className="stat">
                <div className="stat-title">Visitors</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>

              <div className="stat">
                <div className="stat-title">Customers!</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">New Projects!</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </span>

          <span className="flex flex-col items-start justify-start w-full">
            <h3 className="text-lg font-semibold mb-2">Orders!</h3>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
              <div className="stat">
                <div className="stat-title">Total Orders</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>

              <div className="stat">
                <div className="stat-title">New Orders!</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">New Sales!</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </span>

          <div className="divider"></div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

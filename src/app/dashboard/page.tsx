import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="flex flex-1 w-full flex-col items-center justify-between py-2 px-8 bg-white dark:bg-black sm:items-start">
        <div className="w-full h-full rounded-lg border-2 border-dashed border-gray-300 p-4">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome to your dashboard! Here you can manage your settings, view your profile, and access other features. Welcome to your dashboard! Here you can manage your settings, view your profile, and access other features.Welcome to your dashboard! Here you can manage your settings, view your profile, and access other features.
          </p>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

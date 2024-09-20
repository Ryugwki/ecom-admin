import Layout from "@/components/Layout";
import HomeHeader from "@/components/HomeHeader";
import HomeStats from "@/components/HomeStats";

export default function Home() {
  return (
    <Layout>
      <HomeHeader />
      <HomeStats />
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 All rights reserved
      </footer>
    </Layout>
  );
}

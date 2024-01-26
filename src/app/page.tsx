import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import WorkSection from "@/components/Works";

const HomePage = () => {
  return (
    <main className="mx-auto w-full px-4 md:max-w-[674px] lg:max-w-[960px]">
      <Hero />
      <Profile />
      <WorkSection />
    </main>
  );
};

export default HomePage;

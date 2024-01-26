import Image from "next/image";

const Profile = () => {
  return (
    <section className="mb-48 grid h-auto grid-cols-4 items-start gap-6 md:grid-cols-8 md:grid-rows-1 lg:grid-cols-12">
      <div className="order-last col-span-4 text-center md:order-none md:col-span-5 md:text-left lg:col-span-7">
        <h2 className="mb-6 text-m-h4 md:text-t-h4 lg:text-d-h4">
          Faisal Muhammad.{" "}
          <span className="text-primary-300">Content Writer. Copywriter.</span>
        </h2>
        <p>
          with a demonstrated history of working in the information technology
          and services industry. Successfully wrote 90+ fundraising campaigns
          that collectively raised over Rp1.800.000.000+ as a Freelance Content
          Writer for Insan Bumi Mandiri Foundation. Skilled in writing, content
          creation, research, and communication.
        </p>
      </div>
      <div className="relative col-span-2 col-start-2 justify-start md:col-span-3 md:col-start-6 lg:col-span-5 lg:col-start-8">
        {/* <h1>Hello</h1> */}
        <Image
          src="/profile-picture.jpg"
          alt="Faisal figure sitting at a chair."
          width={0}
          height={0}
          priority
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default Profile;

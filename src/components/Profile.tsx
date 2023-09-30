import Image from "next/image";
import Button from "./Button";

const Profile = (): JSX.Element => {
  return (
    <section>
      {/* Image goes here */}
      <div>
        <h1 className="mb-4 text-d-h1 font-bold text-on-background">
          Faisal Muhammad
        </h1>
        <p className="mb-6 text-on-background">
          Self-motivated content writer with over 6 months of experience working
          in public sectors. Eager to learn new things and actively seeking new
          opportunities. Graduated from Padjadjaran University with 3.63 GPA.
        </p>
        <Button placeholder="Contact me" />
      </div>
    </section>
  );
};

export default Profile;

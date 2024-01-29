// const variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 1,
//     },
//   },
// };

const Hero = () => {
  return (
    <div
      // initial="hidden"
      // animate="visible"
      // variants={variants}
      className="relative h-[100vh]"
    >
      <h1 className="absolute top-1/2 -translate-y-1/2 text-center text-m-h2 md:text-t-h2 lg:text-d-h2">
        Let&apos;s write together, for the better.
      </h1>
    </div>
  );
};

export default Hero;

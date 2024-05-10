const Footer = ({ thoughts }) => {
  const currentYear = new Date().getFullYear();
  return (
    <section
      className={thoughts.length <= 3 ? "absolute bottom-0  w-full" : ""}
    >
      <div className="p-4  bg-slate-800 flex justify-center text-white text-sm ">
        <h3>© {currentYear} Batirjonov Shaxzod. All rights reserved.</h3>
      </div>
    </section>
  );
};

export default Footer;

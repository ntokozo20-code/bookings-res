const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="font-bold text-gray-900">
            Melsoft<span className="text-blue-600">Mentor</span>
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            One-on-one mentorship made easier.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Melsoft Mentor
        </p>

      </div>
    </footer>
  );
};

export default Footer;
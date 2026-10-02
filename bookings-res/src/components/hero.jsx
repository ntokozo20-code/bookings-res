import melsoftLogo from '../assets/melsoft logo.png'

const Hero = () => {
  return (
    <section className="bg-light-blue-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 lg:py-20">

        {/* Left Side */}
        <div className="max-w-xl">

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
            Melsoft Academy
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Book a one-on-one
            <br />
            session with a mentor.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
            Need help with a project, coding problem, or something you're struggling with? 
            Choose a mentor who can guide you, answer your questions, and help you work through challenges. 
            Reserve a one-on-one session at a time that works for you and get the support you need to improve your skills and complete your work with confidence.
          </p>

        </div>

        {/* Right Side - Hero Image */}
        <div className="relative flex items-center justify-center">

          {/* Soft background shape */}
          <div className="absolute h-72 w-72 rounded-full bg-blue-50 md:h-96 md:w-96"></div>

          {/* Hero Image */}
          <img
            src={melsoftLogo}
            alt="Melsoft logo"
            className="relative z-10 w-full max-w-lg rounded-3xl object-cover shadow-sm"
          />

        </div>

      </div>
    </section>
  )
}

export default Hero
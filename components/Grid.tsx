import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section className="relative w-[100vw]  min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {gridItems.map((item) => (
        <div
          key={item.id}
          className="relative w-full h-screen group"
        >
          {/* Video Background */}
          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-80"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Welcome to the Future
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
              Experience innovation like never before with our cutting-edge solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div> */}
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Grid;

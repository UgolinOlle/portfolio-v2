export const Esc: React.FC = () => {
  // --- Render
  return (
    <div className="w-dvh flex h-dvh items-center justify-center">
      <button className="absolute flex h-32 w-44 items-center justify-center overflow-hidden rounded-lg bg-neutral-200 shadow-lg shadow-neutral-500 transition duration-75 active:scale-95">
        <div className="absolute z-10 flex h-[96%] w-[96%] rounded-[0.40rem] bg-[#c1c1c1] blur-[1px]"></div>
        <div className="absolute bottom-0 h-2 w-full bg-gradient-to-t from-neutral-700"></div>
        <div className="absolute left-0 h-[95%] w-2 bg-gradient-to-r from-neutral-400 blur-[1px]"></div>
        <div className="absolute right-0 h-[95%] w-2 bg-gradient-to-l from-neutral-200 blur-[1px]"></div>
        <div className="absolute top-0 h-2 w-full bg-gradient-to-b from-neutral-50"></div>
        <div className="absolute z-20 flex h-28 w-40 -translate-y-[0.1rem] items-center justify-center overflow-hidden rounded-[2rem] bg-neutral-200 blur-[2px]">
          <div className="absolute bottom-0 h-10 w-full bg-gradient-to-t from-neutral-900"></div>
          <div className="absolute left-0 h-[80%] w-6 bg-gradient-to-r from-neutral-400 blur-[1px]"></div>
          <div className="absolute right-0 h-[80%] w-6 bg-gradient-to-l from-neutral-200 blur-[1px]"></div>
          <div className="absolute top-0 h-6 w-full bg-gradient-to-b from-neutral-50"></div>
        </div>
        <div className="absolute z-40 flex h-24 w-36 rounded-3xl bg-[#c1c1c1] shadow blur-[1.5px]"></div>
        <div className="absolute z-30 flex h-24 w-[8.5rem] translate-y-1 rounded-3xl border-white bg-[#232323] shadow blur-[1.5px]"></div>
        <div className="absolute bottom-3 z-20 flex h-24 w-[8.97rem] rounded-[1.7rem] bg-gradient-to-t from-white/80 from-[1%] to-transparent shadow blur-[2px]"></div>
        <div className="absolute z-10 flex h-24 w-36 -translate-x-3 translate-y-3 rounded-3xl bg-gradient-to-bl from-neutral-200 to-neutral-500 shadow blur-[5px]"></div>
        <div className="absolute z-10 flex h-24 w-[9.4rem] translate-y-3 scale-[98%] rounded-3xl bg-gradient-to-t from-neutral-700 to-transparent shadow blur-[2px]"></div>
        <div className="absolute z-10 flex h-24 w-[9.4rem] translate-y-4 rounded-3xl bg-gradient-to-t from-neutral-600 to-transparent shadow blur-[5px]"></div>
        <span className="z-50 -translate-y-4 text-lg opacity-70">esc</span>
      </button>
    </div>
  );
};


export default function Header() {
    return(
        <div className="text-center flex flex-col items-center w-full">
            <h1 className="text-black text-4xl font-bold capitalize mb-2 md:text-2xl px-4 py-2 rounded-xl bg-[#9ad19a5e]">Health Check Slider</h1>
            <p className="text-lg text-[#000000a6] font-bold capitalize">Don't Miss to tick the following health checks.</p>
            <div className="bg-fuchsia-900 h-[4px] w-[95%] mt-4 text-center"></div>
        </div>
    );
}
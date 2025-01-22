export default function Loader() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        {/* <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-custom1"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce-custom2"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce-custom1 "></div>
        </div> */}
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16  w-16 flex items-center justify-center">
            <div className="-animate-spin rounded-full border-b-4 border-slate-500-800 border-solid w-16 h-16"></div>
        </div>
      </div>
    );
  }
  
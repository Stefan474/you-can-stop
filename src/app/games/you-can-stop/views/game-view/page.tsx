export default function GameView() {
  return (
    <div className="bg-black w-full h-full text-white flex flex-col">
      <div className="flex justify-center py-2">Top Bar </div>
      {/* Game content goes here */}
      <div className="flex-grow flex flex-col w-full items-center h-min-full">
        {/* Game content area */}
        <div className="flex-grow">Game Content</div>
        {/* skill bar */}
        <div className="grid grid-cols-3 grid-rows-2 p-4 w-full h-1/3 gap-2 ">
          <div className="col-span-1 bg-red-500 rounded-lg">skill 1</div>
          <div className="col-span-1 bg-red-500 rounded-lg">skill 2</div>

          <div className="row-start-2 bg-red-500 col-span-1 rounded-lg">3</div>
          <div className="row-start-2 bg-red-500 col-span-1 rounded-lg">4</div>

          <div className="row-start-1 row-span-2 bg-red-500 rounded-lg ">5</div>
        </div>
      </div>
    </div>
  );
}

import sample from "../assets/sample.jpg";

export const Card = () => {
  return (
    <div className="card container">
      <div className="aspect-square min-h-10 max-h-40 rounded-lg">
        <img className="rounded-lg border-4 border-b-slate-600S" src={sample} alt="image" />
      </div>
      <div className=" flex-auto space-y-4 min-w-60">
        <h1 className=" text-4xl font-heading">Description</h1>
        <h2 className=" text-2xl font-body">Price</h2>
        <div className=" flex justify-end">
          <div className="flex space-x-3 border-4 rounded-lg m-2 px-2 py-1 border-gray-300">
            <button>
              <h2>-</h2>
            </button>
            <input
              className="border border-gray-300 text-center w-10"
              type="text"
              placeholder="1"
            />
            <button>
              <h2>+</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

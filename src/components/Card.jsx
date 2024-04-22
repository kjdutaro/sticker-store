import sample from '../assets/sample.jpg';

export const Card = () => {
  return (
    <div className="card">
      <div className="out aspect-square">
        <img src={sample} alt="image" />
      </div>
      <div className="out flex-auto">
        <div className="out">Description</div>
        <div className="out">Price</div>
        <div className="flex justify-end">
          <button>minus</button>
          <input className="border border-gray-300 text-center w-5" type="text" placeholder="1" />
          <button>plus</button>
        </div>
      </div>
    </div>
  );
};

import sample from '../assets/sample.jpg';

export const Card = () => {
  return (
    <div className="card container">
      <div className="out aspect-square h-60 rounded-lg">
        <img className='rounded-lg' src={sample} alt="image" />
      </div>
      <div className="out flex-auto min-w-60">
        <h1 className="out">Description</h1>
        <h2 className="out">Price</h2>
        <div className="out flex justify-end items-end self-end">
          <button>minus</button>
          <input className="border border-gray-300 text-center w-5" type="text" placeholder="1" />
          <button>plus</button>
        </div>
      </div>
    </div>
  );
};

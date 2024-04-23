import { useParams } from "react-router-dom";

export default function ProductInfoPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Product INFO No. {params.productID}</h1>
    </div>
  );
}

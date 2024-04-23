import { useParams } from "react-router-dom"

export default function ProductInfo() {
  const params = useParams();
  console.log(params)
  return (
    <div>Product No. {params.id}</div>
  )
}

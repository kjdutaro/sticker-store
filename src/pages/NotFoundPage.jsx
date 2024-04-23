import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4">
        404 Not Found
        <Link to='/'>Go back to Home</Link>
    </div>
  )
}

export default NotFoundPage
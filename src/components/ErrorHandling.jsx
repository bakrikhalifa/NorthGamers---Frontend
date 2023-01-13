import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Error 404: Page Not Found</h2>
      <button onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  );
}

export default Error404;

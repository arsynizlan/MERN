import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingGIF from "../../images/Loading.gif";

export default function Loading({ path = "login" }) {
  /** State */
  const [count, setCount] = useState(2);

  /** Hooks */
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    /** Redirect once count is equal to 0 */
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });

    /** Cleanup */
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <img src={LoadingGIF} alt="Loading" style={{ width: "100px" }} />
    </div>
  );
}

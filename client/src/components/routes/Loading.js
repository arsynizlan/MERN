import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading() {
  /** State */
  const [count, setCount] = useState(3);

  /** Hooks */
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    /** Redirect once count is equal to 0 */
    count === 0 && navigate("/login");

    /** Cleanup */
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      Redirect you in {count} seconds
    </div>
  );
}

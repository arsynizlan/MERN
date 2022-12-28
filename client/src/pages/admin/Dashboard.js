import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";

export default function AdminDashboard() {
  /** Context */
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Jumbotron
        title={`Hallo ${auth?.user?.name}`}
        subTitle="Admin Dashboard"
      />
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </>
  );
}

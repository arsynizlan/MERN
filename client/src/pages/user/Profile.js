import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import UserMenu from "../../components/navbar/UserMenu";

export default function UserProfile() {
  /** Context */
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Jumbotron
        title={`Hallo ${auth?.user?.name}`}
        subTitle="User Dashboard"
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Profile</div>
          </div>
        </div>
      </div>
    </>
  );
}

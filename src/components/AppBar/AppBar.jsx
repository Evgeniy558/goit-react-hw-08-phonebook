import { AuthNav } from "../AuthNav";
import { UserMenu } from "../UserMenu";

export const AppBar = () => {
  const showUserMenu = true;
  return (
    <div className="container">{showUserMenu ? <UserMenu /> : <AuthNav />}</div>
  );
};

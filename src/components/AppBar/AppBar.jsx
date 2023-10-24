import { Navigation } from "../Navigation/Navigation";

import { UserMenu } from "../UserMenu";

export const AppBar = () => {
  const showUserMenu = true;
  return (
    <header className="container">
      {showUserMenu ? <UserMenu /> : <Navigation />}
    </header>
  );
};

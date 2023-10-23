import Button from "../contactForm/button/Button";

export const UserMenu = () => {
  return (
    <div className="container">
      <p>Contacns</p> //Link
      <p>Welcome {"user"}</p>
      <Button
        type="button"
        typeButton="button_del"
        onClick={console.log("log out")}
      >
        Log out
      </Button>
    </div>
  );
};

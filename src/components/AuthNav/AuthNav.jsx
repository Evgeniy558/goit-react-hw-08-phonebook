import Button from "../contactForm/button/Button";

export const AuthNav = () => {
  return (
    <div>
      <Button
        type="button"
        typeButton="button_del"
        onClick={console.log("log Register")}
      >
        Register
      </Button>
      <Button
        type="button"
        typeButton="button_del"
        onClick={console.log("log Log in")}
      >
        Log in
      </Button>
    </div>
  );
};

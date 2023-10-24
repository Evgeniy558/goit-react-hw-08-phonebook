import { Helmet } from "react-helmet";

export * from "./HomePage";
export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <div>Please, register or log in </div>
    </div>
  );
};

import { Account } from "../Account/Accounts";
import { Orders } from "../Orders/Orders";
import { Password } from "../Password/Password";
import { Favourite } from "../Favourite/Favourite";

export const UserPanel = ({ accountVisible }) => {
  return (
    <div>
      {accountVisible === "account" && <Account />}
      {accountVisible === "orders" && <Orders />}
      {accountVisible === "password" && <Password />}
      {accountVisible === "favourite" && <Favourite />}
    </div>
  );
};

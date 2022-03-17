import { Account } from "../Account/Accounts";
import { Orders } from "../Orders/Orders";
import { Password } from "../Password/Password";
import { Favourite } from "../Favourite/Favourite";

export const UserPanel = ({ sectionVisible }) => {
  return (
    <div>
      {sectionVisible === "account" && <Account />}
      {sectionVisible === "orders" && <Orders />}
      {sectionVisible === "password" && <Password />}
      {sectionVisible === "favourite" && <Favourite />}
    </div>
  );
};

import { getMenu } from "../../services/apiRestaurant.js";
import { useLoaderData } from "react-router-dom";
import { MenuItem } from "./MenuItem.jsx";

const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <div className="grid grid-cols-4 gap-4">
      {menu.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </div>
  );
};
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

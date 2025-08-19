import { getNavigation } from "@/lib/getNavigation";
import Navbar from "./Global/Navbar";

export default async function NavbarServer() {
  const navigation = await getNavigation();

  return <Navbar menu={navigation} />;
}
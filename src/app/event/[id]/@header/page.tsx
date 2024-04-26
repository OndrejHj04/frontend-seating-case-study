import LoginForm from "@/components/DropdownLogin";
import UserMenu from "@/components/UserMenu";
import { getUserSession } from "@/lib/actions";

export default async function Header() {
  const userSession = await getUserSession();

  if (userSession) {
    return <UserMenu user={userSession} />;
  }

  return <LoginForm />;
}

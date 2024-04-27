import { userType } from "@/lib/types";
import { concatName } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function UserDisplay({ user }: { user: userType }) {
  const name = concatName(user.firstName, user.lastName);
  return (
    <div className="flex items-center gap-2" data-testid="user-container">
      <Avatar>
        <AvatarImage
          src={`https://source.boringavatars.com/marble/120/<user-email>?colors=25106C,7F46DB`}
          className="w-10"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col text-left">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-zinc-500">{user.email}</span>
      </div>
    </div>
  );
}

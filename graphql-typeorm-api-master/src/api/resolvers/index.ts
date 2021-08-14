import { ProfileResolver } from "./profile/ProfileResolver";
import { PingResolver } from "./ping";
import { userResolver } from "./user/userResolver";


export const Resolvers: any = [
    ProfileResolver,
    PingResolver, 
    userResolver
];

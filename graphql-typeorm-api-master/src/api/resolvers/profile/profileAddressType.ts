import { InputType, Field } from "type-graphql";
import ProfileAddress from "../../../entity/profile/profileAddress";

@InputType()
export class profileAddressType
  implements
  Pick<ProfileAddress, 'profile_id' | 'id_city'> {

    @Field()
    profile_id: string;

    @Field()
    id_city: string;
}
import { InputType, Field } from "type-graphql";
import profileImage from "../../../entity/profileImage/profileImage";

@InputType()
export class profileImageType
  implements
  Pick<profileImage, 'profile_id' | 'image_id'> {

    @Field()
    profile_id: string;

    @Field()
    image_id: string;
}
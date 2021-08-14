import { InputType, Field } from "type-graphql";
import Profile from "../../../entity/profile/profile";

@InputType()
export class ProfileType
  implements
  Pick<Profile, 'firstName' | 'lastName' | 'sex' | 'birthday' | 'avatar_url' | 'citizenship' | 'number_phone' | 'id_user' | 'description'> {

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  sex: string;

  @Field()
  birthday: string;

  @Field()
  avatar_url: string;

  @Field()
  citizenship: string;

  @Field()
  number_phone: string;

  @Field()
  id_user: string;

  @Field()
  description: string;

}
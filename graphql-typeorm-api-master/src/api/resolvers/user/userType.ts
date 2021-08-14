import { InputType, Field } from "type-graphql";
import user from "../../../entity/user/user";

@InputType()
export class userType
  implements
  Pick<user, 'email' | 'password'> {

  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class LoginType {

  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  email?: string;


}


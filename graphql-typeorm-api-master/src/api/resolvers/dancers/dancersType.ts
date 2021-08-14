import { InputType, Field } from "type-graphql";
import dancers from "../../../entity/dancers/dancers";

@InputType()
export class dancersType
  implements
  Pick<dancers, 'profile_id' | 'weight' | 'height'> {

    @Field()
    profile_id: string;

    @Field()
    weight: string;

    @Field()
    height: string;
}
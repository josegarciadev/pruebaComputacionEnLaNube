import { InputType, Field } from "type-graphql";
import profileExperienceWork from "../../../entity/profileExperienceWork/profileExperienceWork";

@InputType()
export class profileExperienceWorkType
  implements
  Pick<profileExperienceWork, 'profile_id' | 'work_id' | 'description'> {

    @Field()
    profile_id: string;

    @Field()
    work_id: string;

    @Field()
    description: string;
}
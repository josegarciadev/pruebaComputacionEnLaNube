import { InputType, Field } from "type-graphql";
import profileArtisticEducation from "../../../entity/profileArtisticEducation/profileArtisticEducation";

@InputType()
export class profileArtisticEducationType
  implements
  Pick<profileArtisticEducation, 'profile_id' | 'artistic_id'> {

    @Field()
    profile_id: string;

    @Field()
    artistic_id: string;
}
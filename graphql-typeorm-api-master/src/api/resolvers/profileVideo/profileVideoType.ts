import { InputType, Field } from "type-graphql";
import profileVideo from "../../../entity/profileVideo/profileVideo";

@InputType()
export class profileVideoType
  implements
  Pick<profileVideo, 'profile_id' | 'video_id'> {

    @Field()
    profile_id: string;

    @Field()
    video_id: string;
}
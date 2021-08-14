import { InputType, Field } from "type-graphql";
import video from "../../../entity/video/video";

@InputType()
export class videoType
  implements
  Pick<video, 'url' | 'description'> {

    @Field()
    url: string;

    @Field()
    description: string;
}
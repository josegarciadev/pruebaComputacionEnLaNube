import { InputType, Field } from "type-graphql";
import image from "../../../entity/image/image";

@InputType()
export class imageType
  implements
  Pick<image, 'url' | 'description'> {

    @Field()
    url: string;

    @Field()
    description: string;
}
import { InputType, Field } from "type-graphql";
import certificate from "../../../entity/certificate/certificate";

@InputType()
export class certificateType
  implements
  Pick<certificate, 'url'> {

    @Field()
    url: string;
}
import { InputType, Field } from "type-graphql";
import artisticEducation from "../../../entity/artisticEducation/artisticEducation";

@InputType()
export class artisticEducationType
  implements
  Pick<artisticEducation, 'dance' | 'id_school' | 'init_date' | 'comp_date' | 'id_city' | 'id_state' | 'id_country'> {

    @Field()
    dance: string;

    @Field()
    id_school: string;

    @Field()
    init_date: string;

    @Field()
    comp_date: string;

    @Field()
    id_city: string;

    @Field()
    id_state: string;

    @Field()
    id_country: string;

}
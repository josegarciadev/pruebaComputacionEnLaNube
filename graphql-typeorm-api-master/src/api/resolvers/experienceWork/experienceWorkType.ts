import { InputType, Field } from "type-graphql";
import experienceWork from "../../../entity/experienceWork/experienceWork";

@InputType()
export class experienceWorkType
  implements
  Pick<experienceWork, 'rol' | 'id_company' | 'init_date' | 'comp_date' | 'id_city' | 'id_state' | 'id_country'> {

    @Field()
    rol: string;

    @Field()
    id_company: string;

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
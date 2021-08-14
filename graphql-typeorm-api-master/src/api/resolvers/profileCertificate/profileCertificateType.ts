import { InputType, Field } from "type-graphql";
import profileCertificate from "../../../entity/profileCertificate/profileCertificate";

@InputType()
export class profileCertificateType
  implements
  Pick<profileCertificate, 'profile_id' | 'certificate_id'> {

    @Field()
    profile_id: string;

    @Field()
    certificate_id: string;
}
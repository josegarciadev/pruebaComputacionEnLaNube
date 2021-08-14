import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, BaseEntity} from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";

@ObjectType()
@Entity()
export default class Profile extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @Column({ nullable: true })
    firstName: string;

    @Field()
    @Column({ nullable: true })
    lastName: string;

    @Field()
    @Column({ nullable: true })
    sex: string;

    @Field()
    @Column({ nullable: true })
    birthday: string;

    @Field()
    @Column({ nullable: true })
    avatar_url: string;

    @Field()
    @Column({ nullable: true })
    citizenship: string;

    @Field()
    @Column({ nullable: true })
    number_phone: string;

    @Field()
    @Column({ nullable: true })
    id_user: string;

    @Field()
    @Column({ nullable: true, default: "Not description..." })
    description: string;
}
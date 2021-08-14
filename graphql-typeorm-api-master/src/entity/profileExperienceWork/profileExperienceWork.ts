import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, BaseEntity} from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";

@ObjectType()
@Entity()
export default class profile_experience_work extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @Column({ nullable: true })
    profile_id: string;

    @Field()
    @Column({ nullable: true })
    work_id: string;

    @Field()
    @Column({ nullable: true, default: "Not description..." })
    description: string;
}
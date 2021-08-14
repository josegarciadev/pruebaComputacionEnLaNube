import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, BaseEntity} from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";

@ObjectType()
@Entity()
export default class dancers extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @Column({ nullable: true })
    profile_id: string;

    @Field()
    @Column({ nullable: true })
    weight: string;

    @Field()
    @Column({ nullable: true })
    height: string;
}
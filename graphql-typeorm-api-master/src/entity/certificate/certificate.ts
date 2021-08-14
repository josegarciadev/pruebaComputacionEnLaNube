import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, BaseEntity} from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";

@ObjectType()
@Entity()
export default class certificate extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @Column({ nullable: true })
    url: string;
}
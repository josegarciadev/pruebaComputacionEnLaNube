import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, BaseEntity} from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";

@ObjectType()
@Entity()
export default class artistic_education extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @Column({ nullable: true })
    dance: string;

    @Field()
    @Column({ nullable: true })
    id_school: string;

    @Field()
    @Column({ nullable: true })
    init_date: string;

    @Field()
    @Column({ nullable: true })
    comp_date: string;

    @Field()
    @Column({ nullable: true })
    id_city: string;

    @Field()
    @Column({ nullable: true })
    id_state: string;

    @Field()
    @Column({ nullable: true })
    id_country: string;
}
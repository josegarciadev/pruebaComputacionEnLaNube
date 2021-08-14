import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, BaseEntity} from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";

@ObjectType()
@Entity()
export default class experience_work extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @Column({ nullable: true })
    rol: string;

    @Field()
    @Column({ nullable: true })
    id_company: string;

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
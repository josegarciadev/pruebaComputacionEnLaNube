import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, BaseEntity} from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";
import Profile from "../profile/profile";

@ObjectType()
@Entity()
export default class user extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @Column("text", { unique: true})
    email: string;

    @Field()
    @Column({ nullable: true })
    password: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
}
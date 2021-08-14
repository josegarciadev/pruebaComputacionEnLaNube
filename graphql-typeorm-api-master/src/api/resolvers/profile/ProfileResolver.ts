import {Resolver, Mutation, Query, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { ProfileType } from "./ProfileType";
import Profile from "../../../entity/profile/profile";

@Resolver()
export class ProfileResolver{

    @Mutation(() => Profile)
    async createProfile(

        @Arg('payload', () => ProfileType) payload: ProfileType
    ){
        const profileRepository = getRepository(Profile)
        const newProfile = profileRepository.create(payload)
        
        return await newProfile.save();
    }

    @Mutation( () => Boolean )
    async deleteProfile(@Arg('id', () => String) id:string){

        const profileRepository = getRepository(Profile)
         await profileRepository.delete(id)
         return true;
    }




    @Query(() => [Profile])
    getProfiles(){
        return Profile.find();
    }
}

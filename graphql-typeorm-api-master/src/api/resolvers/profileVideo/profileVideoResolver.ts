import {Resolver, Mutation, Query, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { profileVideoType } from "./profileVideoType";
import profileVideo from "../../../entity/profileVideo/profileVideo";

@Resolver()
export class ProfileResolver{

    @Mutation(() => profileVideo)
    async createProfile(

        @Arg('payload', () => profileVideoType) payload: profileVideoType
    ){
        const profileVideoRepository = getRepository(profileVideo)
        const newProfileVideo = profileVideoRepository.create(payload)
        
        return await newProfileVideo.save();
    }

    @Query(() => [profileVideo])
    getProfiles(){
        return profileVideo.find();
    }
}

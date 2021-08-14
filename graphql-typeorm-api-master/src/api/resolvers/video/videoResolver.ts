import {Resolver, Mutation, Query, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { videoType } from "./videoType";
import video from "../../../entity/video/video";

@Resolver()
export class ProfileResolver{

    @Mutation(() => video)
    async createProfile(

        @Arg('payload', () => videoType) payload: videoType
    ){
        const videoRepository = getRepository(video)
        const newVideo = videoRepository.create(payload)
        
        return await newVideo.save();
    }

    @Query(() => [video])
    getProfiles(){
        return video.find();
    }
}

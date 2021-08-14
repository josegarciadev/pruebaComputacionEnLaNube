import {Resolver, Mutation, Query, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { userType, LoginType } from "./userType";
import user from "../../../entity/user/user";
import * as bcrypt from 'bcryptjs'
import { createToken } from "./jwt";



@Resolver()
export class userResolver{

    @Mutation(() => String)
    async createUser(

        @Arg('payload', () => userType) payload: userType

    ){  
        /* payload.password = await bcrypt.hash(payload.password, 12) */
        const userRepository = getRepository(user)
        const newUser = userRepository.create(payload)
        
         await newUser.save();
        return createToken(newUser)
    }

    @Query(() => String)
    async login(
        @Arg('payload', () => userType) payload: userType
    ){
        const userRepository = getRepository(user)
        const response = await userRepository.findOne({ where: { email: payload.email } })

        if(!response) throw new Error('Wrong username or password');
        if(response.password === payload.password)
            return createToken(response)
        else
        throw new Error('Wrong username or password');
    }


    @Query(()=>user)
    async getUser(
        @Arg('payload', () => LoginType) payload: LoginType
    ){
        return  await user.findOne({ where: { id: payload.id } })
    }
    
    @Query(() => [user])
    async getUsers(){
        return await user.find();
    }
}
import House from "../models/HouseModel.js"

export const getAllPosts=async(req,res)=>{
    try {
        const houses = await House.find({});
        if (houses.length===0) {
            throw 'Nothing found'
        }
        res.json(houses);
    } catch (error) {
        res.status(404).json({error})
    }
}

export const getTopPosts=async(req,res)=>{
    try {
        const houses = await House.find({}).sort({createdAt: 'desc'}).limit(3);
        //reverse the db
        if (houses.length===0) {
            throw 'Nothing found'
        }
        res.json(houses);
    } catch (error) {
        res.status(404).json({error})
    }
}
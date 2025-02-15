const asynchandler =(fun)=>async (req,res,next)=>{
    //HIGHER ORDER FUNCTION

    try{

        await fun(req,res,next)
        
    }
    catch(error){

        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })

    }

}



export default asynchandler
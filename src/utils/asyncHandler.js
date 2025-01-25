//it created a method and export

import { json } from "express"



//using promise
const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}







//try-catch::

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}



// const asyncHandler = (fn) => async(req,res,next) => {     //higher order function
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500),json({
//             success:false;
//             message: error.message
//         })
//     }
// }  





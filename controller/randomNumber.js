exports.getRandomNumber = async (req, res, next)=>{

    const {max, min} = req.query

    console.log("start and end is : ", max, min)

    if(!max || !min){
      return  res.json({
            status:"Error",
            message:"Please insert max & min number correctly"
        })
    }

    const random = Math.floor(Math.random() * (Number(max) - Number(min)) + Number(min));

    res.json({
        status:"Success",
        result:{
            random_number : random
        }
    })

}
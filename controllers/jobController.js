const express=require ('express');
const router= express.Router();


router.post('', (req, res) =>{
    res.json({
    start:true,
    massage:"Running"
    })
});


module.exports=router;
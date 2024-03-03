const express =require('express');
const jobDetails = require ('../module/job');
const router =express.Router();

//post method
router.post('/v1/jobs', async (req, res) => {
 const jobData=req.body;
 const newJob = new jobDetails(jobData);

 try{
    const saveJob=await newJob.save();
    console.log('savejob');
    res.status(201).json(saveJob);

 } catch(err){
  console.error(err);
  res.status(500).json({err:'failed data'});
 }
});


//get method


router.get('/v1/jobs' , async (req, res) =>{
    try{
       const jobData =await jobDetails.find();
       console.log('find job');
       res.status(200).json(jobData);
    }
    catch(err){
     console.error(err);
     res.status(500).json({error: 'failed'});
    }

});



//put/patch method

router.put('/:id', async (req, res) => {
    try {
        const jobId = req.params.id;
        const updateJobData = req.body;

        const response = await jobDetails.findByIdAndUpdate(jobId, updateJobData, {
            new: true,
            runValidators: true,
        });

        if (!response) {
            return res.status(404).json({ error: 'Job not found' });
        }

        console.log('Data updated');
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update job' });
    }
});

router.delete('/:id', async (req, res) => { 
    try {
        const jobId = req.params.id; // Extract job ID from request parameters
        
        const response = await jobDetails.findOneAndDelete({ _id: jobId }); 
        if (!response) {
            return res.status(404).json({ error: 'Job not found' }); 
        }

        console.log('Job deleted'); 
        res.status(200).json(response); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete job' }); 
    }
});



//Delete method




module.exports = router;
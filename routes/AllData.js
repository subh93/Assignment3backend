const express = require('express')
const router = express.Router();
const ShowAllData = require('../models/accountdetails')

router.delete('/removeaccount', async(req,res)=>{
    const {id} = req.body;
    try {
        await ShowAllData.findOneAndDelete({id})
        return res.status(400).json({message: "Account Deleted"})
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.put('/updatedetails', async(req,res)=>{
    const { id,name,email,phone,website } = req.body;
    try {
        await ShowAllData.findOneAndUpdate({id},
            {
                name: name,
                email: email,
                phone: phone,
                website: website
            }) 
        return res.status(400).json({ success:true, message: "Data Updated"})
    } catch (error) {
        return res.status(400).json({ success:false, message: error })
    }
})

router.get('/showalldata', async(req,res)=>{
    try {
        let showdata = await ShowAllData.find({})
        res.send(showdata)
    } catch (error) {
        res.send("Server Error")
    }
})
module.exports = router;

const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res)=>{

})

router.delete('/:id', withAuth, async (req, res)=> {

})

module.exports = router;
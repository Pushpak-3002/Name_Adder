const {Router} = require('express');
const { getName, saveName, UpdateName, deleteNameID } = require('../controllers/NameController');

const router = Router()

router.get('/',getName)
router.post('/save',saveName)
router.post('/update',UpdateName)
router.post('/delete',deleteNameID)


module.exports= router;
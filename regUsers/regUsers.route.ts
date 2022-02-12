import express from 'express'
const regrouter = express.Router();
import {RegController} from './regUsers.controller'
let regcon = new RegController()
import {Utiliy} from '../utility/utility'

let util = new Utiliy()
const upload = util.fileUpload()
// upload.single('pic'),
function Regroute(){
    regrouter.route('/')
        .post(regcon.main)
        .get(regcon.getAllHealth)
        .put(upload.single('pic'), regcon.UpdateUser)
    regrouter.route('/id')
        .get(regcon.getSingleUser)
    return regrouter
}

export default Regroute()
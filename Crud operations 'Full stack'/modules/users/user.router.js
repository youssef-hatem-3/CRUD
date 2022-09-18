import {signin ,addUser , getAllUsers, updateUser , deleteUser , searchUser} from './controller/router.js'
import {Router} from 'express'
const router = Router() ;
router.put('/updateUser', updateUser)
router.get('/getAllUsers', getAllUsers )
router.post('/addUser' , addUser);
router.post('/signin' , signin);
router.delete('/deleteUser', deleteUser )
router.get('/user/searchUser', searchUser)
export default router ;
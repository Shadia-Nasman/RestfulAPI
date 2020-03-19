import { Router } from 'express';
const router = Router();


router.get('/',(req,res)=>{
res.send('get request')

})
router.post('/',(req,res)=>{
  res.send('post request')
  
  })
  router.put('/',(req,res)=>{
    res.send('put request')
    
    })
    router.delete('/',(req,res)=>{
      res.send('delete request')
      
      })

//////thijs code

// router.get('/', (req, res) => {
//   res.json(users);
// });

// router.get('/:userId', (req, res) => {
//   res.json(users[req.params.userId]);
// });

// router.post('/', (req, res) => {
//   users.push({ id: users.length, ...req.body });
//   res.json(users);
// });

// router.put('/', (req, res) => {
//   res.send('Received PUT request on endpoint /users');
// });

// router.delete('/', (req, res) => {
//   res.send(req.context.models.users);
// });

//////////thijs code

export default router;

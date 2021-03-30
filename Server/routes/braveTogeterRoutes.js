import { routes } from '../app';
import { addNewUser} from '../controller/braveTogeterController'

const route = (app) =>{
    app.route('/register')
    .get((req,res,next)=>{
        //middleware
        //Reference to google sheets
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    })
    .post(addNewUser);


}

export default routes;
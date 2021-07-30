const fastify = require ('fastify')({
    logger: true
})
const PORT = process.env.PORT || 3000 ;

//CORS
fastify.register(require('fastify-cors'), { 
  // put your options here
  origin: (origin, cb) => {
      //  Request from localhost will pass
      cb(null, true)
      return
  }
})

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000)


// bring in routes
const routes = require('./routes')

//db
const mongoose = require('mongoose')

//db connection
mongoose.connect('mongodb+srv://hemang:candyboy123@cluster0.mnqme.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log("Mongo is ready !"))
.catch(err=> console.log(err))

//routes
fastify.get('/', async(request, reply) => {
    return{visiter:"noobscode.com"}

})

routes.forEach((route, index) =>{
    fastify.route(route)
})


//starting server

const start = async () => {
    try{
        await fastify.listen(PORT)
        fastify.log.info(`Server is running at ${address}`)
    }catch (error){

    }
}

start()
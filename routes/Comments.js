const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();
const app = express();
const authorization = require('../middleware/authorization')
const Redis = require('redis')

const redisClient = Redis.createClient()
const DEFAULT_EXPIRATION = 3600



router.post('/:id?', authorization, async (req, res, next) => {
    console.log(" **** GETTING COMMENTS DATA BY ID ? **** ")
    const id = req.params.id
    const commentId = req.params.id

    const variable = {"id": id, "hide":0}   
   

    x = { id }
    y = { commentId }
    postId = { id: '7' }

    console.log("=====================================")
    console.log("TEST :: ", variable)
    console.log("pure id = ", id)
    console.log("pure commentId = ", commentId)
    console.log("{id} = ", {id})
    console.log("{commentId} = ", { commentId })
    console.log("x = ", x)
    console.log("y = ", y)
    console.log("=====================================")


    /*? req.params.id : null*/

    console.log(req.headers['authorization'])
    console.log('route users')




    redisClient.get(`comments?id=${id}`, async (error, comments) => {
        if (error) console.error(error)
        if (comments != null) {
            console.log("Cache Hit")
            return res.json(JSON.parse(comments))

        } else {
            console.log("Cache Miss")
            console.log({ id })

            const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments', { params:  variable  })
            redisClient.setex(`comments?id=${id}`, DEFAULT_EXPIRATION, JSON.stringify(data))

            //res.send(commentresult)

            
            res.json(data)
        }
    })

})


router.post('/id/:id?', authorization, async (req, res, next) => {
    const id = req.params.id
    console.log(id)
    console.log(req.headers['authorization'])
    console.log('route users')


    console.log("Cache Miss")
    console.log({ id })
    console.log(id)
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments', { params: { id } })


    //res.send(commentresult)
    res.json(data)



})





module.exports = router;
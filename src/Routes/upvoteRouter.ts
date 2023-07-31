import express, { Request, Response } from "express"
const upvoteRouter = express.Router()
const upvoteService = require("../Services/upvoteService")
const jsonParser = express.json()

upvoteRouter
    .route("/upvote-cookie")
    .post(jsonParser, (req: Request, res: Response) => {
        const { cookieId } = req.body
        const knexInstance = req.app.get("db")
        upvoteService.upvote(knexInstance, cookieId)
            .then(() => {
                res.send("upvoted")
            })
            .catch((err: Error) => {
                res.status(200).send({ error: err })
            })
    })

module.exports = upvoteRouter
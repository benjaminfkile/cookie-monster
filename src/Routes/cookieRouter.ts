import express, { Request, Response } from "express"
const cookieRouter = express.Router()
const cookieService = require("../Services/cookieService")

cookieRouter
    .route("/get-cookies")
    .get((req: Request, res: Response) => {
        const knexInstance = req.app.get("db")
        cookieService.getCookies(knexInstance)
            .then((cookies: CookieTypes) => {
                res.send(cookies)
            })
            .catch((err: Error) => {
                res.status(200).send({ error: err })
            })
    })

module.exports = cookieRouter
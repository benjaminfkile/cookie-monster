import express, { Express, NextFunction, Request, Response } from "express"
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
const NODE_ENV = process.env.NODE_ENV
const app: Express = express()
const cookieRouter = require("./Routes/cookieRouter")
const upvoteRouter = require("./Routes/upvoteRouter")

const morganOption = (NODE_ENV === "production")
  ? "tiny"
  : "common"

app.use(morgan(morganOption))
app.use(cors())
app.use(helmet())

app.get("/", (req: Request, res: Response) => {
  res.send(`"C", is for cookie`)
})

app.use("/api/cookies", cookieRouter)
app.use("/api/upvote", upvoteRouter)

app.use(function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

module.exports = app
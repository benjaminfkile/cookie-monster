import { Knex } from "knex"

const cookieService = {
    upvote: (knex: Knex, cookieId: number) => {
        console.log(cookieId)
        return knex.raw(`UPDATE cookies SET upvotes = upvotes + 1 WHERE id = ${cookieId}`)
    }
}

module.exports = cookieService
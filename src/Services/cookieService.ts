import { Knex } from "knex"

const cookieService = {
    getCookies: (knex: Knex) => {
        return knex.from("cookies")
            .then((cookies: CookieTypes[]) => {
                return cookies
            })
    }
}

module.exports = cookieService
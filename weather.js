#!/usr/bin/env node

import { getArgs }  from "./helpers/args.js"
import { getWeather } from "./services/api.service.js"
import { printError, printHelp, printSucces } from "./services/log.services.js"
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"


const saveToken = async (token) => {
    if (!token.length) {
        printError("Token not transmited")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSucces("Token saved!")
    } catch (error) {
        printError(error.message)
    }
}


const initCLI = () => {
    const args = getArgs(process.argv)

    if(args.h) {
        // print help
        printHelp()
    }

    if (args.s) {
        // save country 

    }
    if (args.t) {
        // save token
        return saveToken(args.t)
    }
    // print country
    getWeather("tashkent")
}

initCLI()
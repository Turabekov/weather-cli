#!/usr/bin/env node

import { getArgs }  from "./helpers/args.js"
import { printError, printHelp, printSucces } from "./services/log.services.js"
import { saveKeyValue } from "./services/storage.service.js"


const saveToken = async (token) => {
    try {
        await saveKeyValue("token", token)
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

}

initCLI()
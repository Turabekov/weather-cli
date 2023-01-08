#!/usr/bin/env node

import { getArgs }  from "./helpers/args.js"
import { printHelp } from "./services/log.services.js"
import { saveKeyValue } from "./services/storage.service.js"


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
        saveKeyValue("token", args.t)
    }
    // print country

}

initCLI()
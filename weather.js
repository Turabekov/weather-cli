#!/usr/bin/env node

import { getArgs }  from "./helpers/args.js"
import { getWeather, getIcon } from "./services/api.service.js"
import { printError, printHelp, printSuccess, printWeather } from "./services/log.services.js"
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"


const saveToken = async (token) => {
    if (!token.length) {
        printError("Token not transmited")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess("Token saved!")
    } catch (error) {
        printError(error.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError("City not transmited")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess("City saved!")
    } catch (error) {
        printError(error.message, "-h for helping")
    }
}

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
        const weatherData = await getWeather(city);
        // console.log(weatherData)
        printWeather(weatherData, getIcon(weatherData.weather[0].icon))// beautifull printing weather
    } catch (e) {  
        if(e?.response?.status == 404) {
            printError("City is not valid")
        } else if (e?.response?.status == 401) {
            printError("Token is not valid")
        } else {
            printError(e.message)
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)

    if(args.h) {
        // print help
        return printHelp()
    }

    if (args.s) {
        // save country 
        return saveCity(args.s)
    }
    if (args.t) {
        // save token
        return saveToken(args.t)
    }
    // print country
    return getForecast()
}

initCLI()
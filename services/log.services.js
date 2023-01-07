import chalk from "chalk"

const printError = (error) => {
    console.log(chalk.bgRed(" Error ") + " " + error)
}

const printSucces = (message) => {
    console.log(chalk.bgGreen(" SUCCESS ") + " " + message)
}

const printHelp = () => {
    console.log(
`${chalk.bgCyan(" Help ")}
Без параметров -  вывод погоды
-s [CITY] для установки города
-h для вывода помощи
-t [API_KEY] для сохранение токена    
`)
}


export { printError, printSucces, printHelp }

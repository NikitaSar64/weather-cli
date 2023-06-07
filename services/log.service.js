import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
    console.log(chalk.bgRed(' Error ') + ' ' + error);
}

export const printSuccess = (message) => {
    console.log(chalk.bgGreen(' Succes ') + ' ' + message)
}

export const printHelp = () => {
    console.log(
        dedent(
            `${chalk.bgCyan(' Help ')}
            Без параметров - вывод погоды
            -s [CITY] для установки города
            -h для вывода помощи
            -t [API_KEY] для сохранения токена`
        )
    )
}
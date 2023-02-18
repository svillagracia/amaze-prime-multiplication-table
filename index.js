import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { printTable, generateTable } from './prime-table.js';

yargs(hideBin(process.argv))
  .scriptName('primes-table')
  .usage('Usage: $0 <number>')
  .command(
    'make-table <N>',
    'Print the multiplication table',
    (yargs) => {
      yargs.positional('N', {
        describe: 'The number of rows in the table',
        type: 'number',
        demandOption: true,
      });
    },
    (argv) => {
      const table = generateTable(argv.N);
      printTable(table);
    }
  )
  .demandCommand(1)
  .help().argv;

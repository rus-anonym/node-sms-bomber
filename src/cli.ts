#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const cli = yargs(hideBin(process.argv));

cli.commandDir("cli");
cli.strict();
cli.alias({ h: "help" }).argv;

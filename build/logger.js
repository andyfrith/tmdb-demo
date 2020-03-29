"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const pino = require("pino");
exports.logger = pino({
    level: env_1.ENV.LOG_LEVEL,
    prettyPrint: { colorize: true },
});

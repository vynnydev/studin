"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointments_routes_1 = __importDefault(require("../../../../modules/appointments/infra/http/routes/appointments.routes"));
var users_routes_1 = __importDefault(require("../../../../modules/users/infra/http/routes/users.routes"));
var sessions_routes_1 = __importDefault(require("../../../../modules/users/infra/http/routes/sessions.routes"));
var passwords_routes_1 = __importDefault(require("../../../../modules/users/infra/http/routes/passwords.routes"));
var profiles_routes_1 = __importDefault(require("../../../../modules/users/infra/http/routes/profiles.routes"));
var providers_routes_1 = __importDefault(require("../../../../modules/appointments/infra/http/routes/providers.routes"));
var routes = express_1.Router();
routes.use('/appointments', appointments_routes_1.default);
routes.use('/providers', providers_routes_1.default);
routes.use('/users', users_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
routes.use('/password', passwords_routes_1.default);
routes.use('/profile', profiles_routes_1.default);
exports.default = routes;

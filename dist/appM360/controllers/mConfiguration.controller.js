"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_controller_1 = __importDefault(require("../../abstarcts/abstract.controller"));
const mConfiguration_service_1 = __importDefault(require("../services/mConfiguration.service"));
const mConfiguration_validator_1 = __importDefault(require("../utlis/validator/mConfiguration.validator"));
class MConfigurationController extends abstract_controller_1.default {
    constructor() {
        super();
        this.service = new mConfiguration_service_1.default();
        this.validator = new mConfiguration_validator_1.default();
        // create permission Group
        this.createPermissionGroup = this.asyncWrapper.wrap({ bodySchema: this.validator.createPermissionGroupValidator }, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = yield this.service.createPermissionGroup(req), { code } = _a, data = __rest(_a, ["code"]);
            res.status(code).json(data);
        }));
        // get permission group
        this.getPermissionGroup = this.asyncWrapper.wrap(null, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _b = yield this.service.getPermissionGroup(req), { code } = _b, data = __rest(_b, ["code"]);
            res.status(code).json(data);
        }));
        // create permission
        this.createPermission = this.asyncWrapper.wrap({ bodySchema: this.validator.createPermissionValidator }, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _c = yield this.service.createPermission(req), { code } = _c, data = __rest(_c, ["code"]);
            res.status(code).json(data);
        }));
        // get single hotel permission
        this.getSingleHotelPermission = this.asyncWrapper.wrap({ paramSchema: this.commonValidator.singleParamValidator() }, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _d = yield this.service.getSingleHotelPermission(req), { code } = _d, data = __rest(_d, ["code"]);
            res.status(code).json(data);
        }));
        // update single hotel permission
        this.updateSingleHotelPermission = this.asyncWrapper.wrap({
            paramSchema: this.commonValidator.singleParamValidator(),
            bodySchema: this.validator.updatePermissionValidator,
        }, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _e = yield this.service.updateSingleHotelPermission(req), { code } = _e, data = __rest(_e, ["code"]);
            res.status(code).json(data);
        }));
        // get all permission
        this.getAllPermission = this.asyncWrapper.wrap(null, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _f = yield this.service.getAllPermission(req), { code } = _f, data = __rest(_f, ["code"]);
            res.status(code).json(data);
        }));
    }
}
exports.default = MConfigurationController;
//# sourceMappingURL=mConfiguration.controller.js.map
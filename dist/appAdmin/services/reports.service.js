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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const abstract_service_1 = __importDefault(require("../../abstarcts/abstract.service"));
class ReportService extends abstract_service_1.default {
    constructor() {
        super();
    }
    // get Hotel Room report Service
    getHotelRoomReportService(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { from_date, to_date } = req.query;
            // auth
            const { hotel_id } = req.hotel_admin;
            // model
            const model = this.Model.reportModel();
            const { data, total } = yield model.getRoomReportModel({
                from_date: from_date,
                to_date: to_date,
                hotel_id,
            });
            return {
                success: true,
                code: this.StatusCode.HTTP_OK,
                total,
                rooms: data,
            };
        });
    }
    // get Hotel Room Booking report Service
    getHotelRoomBookingReportService(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { from_date, to_date } = req.query;
            const { hotel_id } = req.hotel_admin;
            // model
            const model = this.Model.reportModel();
            const { data, total } = yield model.getRoomBookingReportModel({
                from_date: from_date,
                to_date: to_date,
                hotel_id,
            });
            return {
                success: true,
                code: this.StatusCode.HTTP_OK,
                total,
                rooms: data,
            };
        });
    }
}
exports.ReportService = ReportService;
exports.default = ReportService;
//# sourceMappingURL=reports.service.js.map
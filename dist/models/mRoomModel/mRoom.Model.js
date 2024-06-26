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
const schema_1 = __importDefault(require("../../utils/miscellaneous/schema"));
class RoomModel extends schema_1.default {
    constructor(db) {
        super();
        this.db = db;
    }
    createRoom(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("payload", payload);
            return yield this.db("hotel_room")
                .withSchema(this.RESERVATION_SCHEMA)
                .insert(payload);
        });
    }
    createRoomAminities(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db("hotel_room_aminities")
                .withSchema(this.RESERVATION_SCHEMA)
                .insert(payload);
        });
    }
    createroomImage(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db("hotel_room_images")
                .withSchema(this.RESERVATION_SCHEMA)
                .insert(payload);
        });
    }
}
exports.default = RoomModel;
//# sourceMappingURL=mRoom.Model.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return Persona;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(name, surname, codRedd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        var _this = _super.call(this, name, surname) || this;
        _this.codRedd = codRedd;
        _this.redditoAnnuoLordo = redditoAnnuoLordo;
        _this.tasseInps = tasseInps;
        _this.tasseIrpef = tasseIrpef;
        return _this;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo - this.redditoAnnuoLordo / 100 * this.codRedd;
    };
    Lavoratore.prototype.getTasseInps = function () {
        var tassabile = this.getUtileTasse();
        return tassabile / 100 * this.tasseInps;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var tassabile = this.getUtileTasse();
        return tassabile / 100 * this.tasseIrpef;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        var tasseInps = this.getTasseInps();
        var tasseIrpef = this.getTasseIrpef();
        var redditoAnnuoNetto = this.redditoAnnuoLordo - tasseInps - tasseIrpef;
        return redditoAnnuoNetto;
    };
    return Lavoratore;
}(Persona));
var x = new Lavoratore('fabio', 'giannasi', 50, 20000, 5, 5);
var reddito = x.getRedditoAnnuoNetto();
console.log(reddito);

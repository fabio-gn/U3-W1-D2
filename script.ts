abstract class Persona{
   constructor(public name:string, public surname:string ){}

}
class Lavoratore extends Persona {
    constructor(
        name:string,
        surname:string,
        public codRedd:number,
        public redditoAnnuoLordo:number,
        public tasseInps:number,
        public tasseIrpef:number
    ){
        super (name, surname)
    }
    
    
    getUtileTasse():number{
        return this.redditoAnnuoLordo - this.redditoAnnuoLordo / 100 * this.codRedd

    }
    getTasseInps():number{
        let tassabile = this.getUtileTasse()
        return tassabile / 100 * this.tasseInps
    }
    getTasseIrpef():number{
        let tassabile = this.getUtileTasse()
        return tassabile / 100 * this.tasseIrpef
    }
    getRedditoAnnuoNetto():number{
        let tasseInps:number = this.getTasseInps()
        let tasseIrpef:number = this.getTasseIrpef()
        let redditoAnnuoNetto:number = this.redditoAnnuoLordo - tasseInps - tasseIrpef
        return redditoAnnuoNetto
    }
}

let x:Lavoratore = new Lavoratore('fabio', 'giannasi', 50, 20000, 5, 5)
let reddito = x.getRedditoAnnuoNetto()
console.log(reddito)
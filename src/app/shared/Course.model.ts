export interface Course{

    id ?: number 
    name? : string
    date ?: Date
    time ?:string
    duration?:number
    price? : number
    imageUrl ?: string
    onlineurl? : string
    location ? : {
        trainingRoom : string
        building : string
        city : string
    }






}
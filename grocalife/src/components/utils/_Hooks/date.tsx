export const useDateCalculator = () => { 

    const date : Date = new Date()
    const year : number = date.getFullYear()
    const month : number = date.getMonth() + 1
    const day : number = date.getDate() 


    return ({year: year, month: month, day: day})
}
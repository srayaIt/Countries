import Country from "./classCountry.js"
import {filterData} from "./app.js"

export const homeBtn = () => {
    document.querySelector("#ID_HOM").addEventListener("click", () => {
        document.querySelector("#id_row").innerHTML = ""
        filterData.forEach
        (item => {
        creat1(filterData)  })

}
}
export const allBtn = () => {
    document.querySelector("#ID_ALL").addEventListener("click", () => {
        console.log("hey555");
        document.querySelector("#id_row").innerHTML = ""
        let country = new Country(filterData[0] , "#id_row");
       country.render()    })

}
export const IsraelBtn = () => {
    document.querySelector("#ID_Israel").addEventListener("click", () => {
        console.log("hey555");
        document.querySelector("#id_row").innerHTML = ""
        let country = new Country(filterData[0] , "#id_row");
       country.render()    })

}
export const USABtn = () => {
    document.querySelector("#ID_USA").addEventListener("click", () => {
        console.log("hey555");
        document.querySelector("#id_row").innerHTML = ""
        let country = new Country(filterData[1] , "#id_row");
       country.render()    })

}
export const UKBtn = () => {
    document.querySelector("#ID_UK").addEventListener("click", () => {
        console.log("hey555");
        document.querySelector("#id_row").innerHTML = ""
        let country = new Country(filterData[2] , "#id_row");
       country.render()    })

}
export const BrazilBtn = () => {
    document.querySelector("#ID_Brazil").addEventListener("click", () => {
        console.log("hey555");
        document.querySelector("#id_row").innerHTML = ""
        let country = new Country(filterData[3] , "#id_row");
       country.render()    })

}
export const ItalyBtn = () => {
    document.querySelector("#ID_Italy").addEventListener("click", () => {
        console.log("hey555");
        document.querySelector("#id_row").innerHTML = ""
        let country = new Country(filterData[4] , "#id_row");
       country.render()    })

}

const creat1 =(_data)=>{
console.log("hey555");


let country = new Country(_data , "#id_row");
country.render() }
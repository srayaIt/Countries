import Country from "./classCountry.js";

import { initButtons } from "./button.js";


   
   



export const PreferredCountries = ["Israel", "United States", "United Kingdom", "Brazil", "Italy"];
export let filterData = []
export let AllData = []

let url = "https://restcountries.com/v3.1/independent?status=true";
const url2 = "https://restcountries.com/v3.1/all?fields=name,unMember";

const url1 = "https://restcountries.com/v3.1/all?fields=name,population,flags,maps,borders,unMember";
const init = () => {
    doApi(url);
    homeBtn()
    initButtons(); // קריאה לפונקציה שמוסיפה מאזינים לכל הכפתורים
};

const doApi = async (_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    console.log(data);
AllData =data
    // סינון המדינות כך שרק המדינות המועדפות יישארו במערך
    filterData = data.filter(item => PreferredCountries.includes(item.name.common));
    console.log(filterData);

    // createAii(data);
    create(data);
};

const create = (_data) => {

    _data.forEach(item => {
      let country = new Country(item, "#id_row");



        country.render();
    });
};

init();

import Country from "./classCountry.js";
import { initButtons, renderAllCountries } from "./button.js";

export const PreferredCountries = ["Israel", "United States", "United Kingdom", "Brazil", "Italy"];
export let filterData = [];
export let AllData = [];
export let AllNames = [];  // ✅ נגדיר את AllNames כמשתנה גלובלי

let url = "https://restcountries.com/v3.1/independent?status=true";

const init = async () => {
    await doApi(url);  // מחכים שהנתונים ייטענו
    initButtons();
    option();  // עכשיו option יכול להשתמש ב-AllNames
};

const doApi = async (_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    console.log(data);

    AllData = data;
    AllNames = AllData.map(country => country.name.common);  // ✅ עכשיו AllNames גלובלי
    console.log(AllNames);

    filterData = data.filter(item => PreferredCountries.includes(item.name.common));
    console.log(filterData);

    renderAllCountries(filterData);
};

init();

const option = () => {  
    const selectElement = document.getElementById("id_select");
AllNames.sort()
    AllNames.forEach(name => {  
        const newOption = document.createElement("option");
        newOption.value = name;  
        newOption.textContent = name;
        selectElement.appendChild(newOption);
    });
};

import Country from "./classCountry.js";
import { filterData, AllData } from "./app.js";



export const option = async() => {  
 
    await doApi("https://restcountries.com/v3.1/independent?status=true"); // לוודא שהנתונים קיימים
    const selectElement = document.getElementById("id_select");

    AllNames.forEach(name => {  // כאן כל option הוא מחרוזת ולא אובייקט
        const newOption = document.createElement("option");
        newOption.value = name;  // אין כאן id אז שמים את השם עצמו
        newOption.textContent = name;
        selectElement.appendChild(newOption);
    });
}

// פונקציה שמוסיפה מאזינים לכל הכפתורים
export const initButtons = () => {
    document.querySelector("#ID_HOM").addEventListener("click", () => {
        document.querySelector("#id_row").innerHTML = "";
        renderAllCountries(filterData); // כפתור הבית - מציג את 5 המדינות בלבד
    });

    document.querySelector("#ID_ALL").addEventListener("click", () => {
        document.querySelector("#id_row").innerHTML = "";
        renderAllCountries(AllData); // כפתור All - מציג את כל המדינות
    });

    // מאזינים לכל המדינות המועדפות
    document.querySelector("#ID_Israel").addEventListener("click", () => renderCountryByIndex(4));
    document.querySelector("#ID_USA").addEventListener("click", () => renderCountryByIndex(2));
    document.querySelector("#ID_UK").addEventListener("click", () => renderCountryByIndex(1));
    document.querySelector("#ID_Brazil").addEventListener("click", () => renderCountryByIndex(3));
    document.querySelector("#ID_Italy").addEventListener("click", () => renderCountryByIndex(0));
};

// פונקציה שמציגה את כל המדינות מתוך מערך נתון
export const renderAllCountries = (data) => {
    document.querySelector("#id_row").innerHTML = ""; // לניקוי תצוגה קודמת
    data.forEach(item => {
        let country = new Country(item, "#id_row");
    
        
        country.render();
   
    });
};
const renderCountryByIndex = (index) => {
    const item1 = filterData[index]
    console.log("vsp"+item1);
    renderCountryByIndex1(item1)

    renderAllCountries (filterData)
}
// פונקציה שמציגה מדינה מסוימת לפי האינדקס שלה במערך filterData
export const renderCountryByIndex1 = (item1) => {
    document.querySelector("#id_row").innerHTML = "";
    let country = new Country(item1, "#id_row");
    console.log("חלק ראשון");
    country.renderAfter();
    console.log("חלק שני");
   

};

export { renderCountryByIndex };

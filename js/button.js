import Country from "./classCountry.js";
// import { filterData, AllData } from "./app.js"
;


const option = (allNames) => {  
 
    const selectElement = document.getElementById("id_select");
    allNames.sort()
    allNames.forEach(name => {  // כאן כל option הוא מחרוזת ולא אובייקט
        const newOption = document.createElement("option");
        newOption.value = name;  // אין כאן id אז שמים את השם עצמו
        newOption.textContent = name;
        selectElement.appendChild(newOption);
    });
}

    // פונקציה שמאזינה לכל הכפתורים הנב בר
 const listenerToBtns = (filterData, AllData) => {
    document.querySelector("#ID_HOM").addEventListener("click", () => {
        document.querySelector("#id_row").innerHTML = "";
        renderAllCards(filterData); // כפתור הבית - מציג את 5 המדינות בלבד
    });

    document.querySelector("#ID_ALL").addEventListener("click", () => {
        document.querySelector("#id_row").innerHTML = "";
        renderAllCards(AllData); // כפתור All - מציג את כל המדינות
    });

    // מאזינים לכל המדינות המועדפות

    const navContainer = document.getElementById("navMenu");

    
    
    navContainer.addEventListener("click", (e) => {
        const btn = e.target.getAttribute("data-of-Country");
        
        // תיקון התנאי - בדיקה נכונה
        if (btn !== "All" && btn !== "🏠") {
            const country = AllData.find(item => item.name.common === btn);
            
            if (country) { 
                console.log(country);
                showCountry(country); // מציג את המדינה שנבחרה
            }
        }
    });
    



    // function x (y) {
    //     console.log(y());
        
    // }

    // function y () {
    //     return "hello from y";
    // }

    // function z () {
    //     return "hello from z";
    // }

    // x(z)

    
    // document.querySelector("#ID_Israel").addEventListener("click", () => renderCountryByIndex(4));
    // document.querySelector("#ID_USA").addEventListener("click", () => renderCountryByIndex(2));
    // document.querySelector("#ID_UK").addEventListener("click", () => renderCountryByIndex(1));
    // document.querySelector("#ID_Brazil").addEventListener("click", () => renderCountryByIndex(3));
    // document.querySelector("#ID_Italy").addEventListener("click", () => renderCountryByIndex(0));

 }
// פונקציה שמציגה את כל המדינות מתוך מערך נתון
 const renderAllCards = (data) => {
    document.querySelector("#id_row").innerHTML = ""; // לניקוי תצוגה קודמת
    data.forEach(item => {
        let country = new Country(item, "#id_row");
    
        
        country.render();
   
    });
};
// const renderCountryByIndex = (index) => {
//     const item1 = filterData[index]
//     console.log("vsp"+item1);
//     showCountry(item1)

//     renderAllCards (filterData)
// }
// פונקציה שמציגה מדינה מסוימת לפי האינדקס שלה במערך filterData
 const showCountry = (item1) => {
    document.querySelector("#id_row").innerHTML = "";
    let country = new Country(item1, "#id_row");
    console.log("חלק ראשון");
    country.renderAfter();
    console.log("חלק שני");
   

};

export { option ,listenerToBtns , showCountry, renderAllCards};

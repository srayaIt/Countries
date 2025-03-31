import Country from "./classCountry.js";

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
    const listenerToOptions = (allNames,AllData) => {
    document.querySelector("#id_select").addEventListener("change", (e) => {
      const selectedId = e.target.value; // במקום this.value
    


      // מחפש במדינות את המדינה עם השם המתאים
      const selectedItem = AllData.find(country => country.name.common === selectedId);
    
      if (selectedItem) {
          showCountry(selectedItem)
        
        } else {
          console.log("המדינה לא נמצאה");
      }
    });

}
const serch =(AllData)=>{

document.querySelector("#id_search").addEventListener("input", function () {
    let inputValue = this.value.toLowerCase(); // הערך שהוקלד באותיות קטנות
  
    // יצירת מערך חדש עם המדינות שמתחילות באות שהוקלדה
    let filteredData = AllData.filter(country => 
        country.name.common.toLowerCase().startsWith(inputValue)
    );
  
 renderAllCards (filteredData)
    
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
              
                showCountry(country); // מציג את המדינה שנבחרה
            }
        }
    });


}
// פונקציה שמציגה את כל המדינות מתוך מערך נתון
const renderAllCards = (data) => {
    document.querySelector("#id_row").innerHTML = ""; // לניקוי תצוגה קודמת
    data.forEach(item => {
        let country = new Country(item, "#id_row");
 country.render();

    });
};

// פונקציה שמציגה מדינה מסוימת לפי האינדקס שלה במערך filterData
const showCountry = (item1) => {
    // document.querySelector("#id_row").innerHTML = "";
    let country = new Country(item1, "#id_row");
    country.renderAfter();
  };

export { option, listenerToBtns, showCountry, renderAllCards ,listenerToOptions ,serch};

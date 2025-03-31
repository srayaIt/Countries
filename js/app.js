import Country from "./classCountry.js";
import { listenerToBtns, renderAllCards  ,showCountry, option} from "./button.js";

export const PreferredCountries = ["Israel", "United States", "United Kingdom", "Brazil", "Italy"];
export let filterData = [];
export let AllData = [];
export let AllNames = [];  // ✅ נגדיר את AllNames כמשתנה גלובלי

let url = "https://restcountries.com/v3.1/independent?status=true";

const init = async () => {
    await doApi(url);  // מחכים שהנתונים ייטענו
    listenerToBtns(filterData, AllData);
    option(AllNames); 
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
   

    renderAllCards(filterData);
};

init();


document.querySelector("#id_select").addEventListener("change", (event) => {
  const selectedId = event.target.value; // במקום this.value

  // מחפש במדינות את המדינה עם השם המתאים
  const selectedItem = AllData.find(country => country.name.common === selectedId);

  if (selectedItem) {
      console.log("מי משוגע", selectedItem); // הדפסת האובייקט שנמצא
      showCountry(selectedItem)
      renderAllCards (filterData)
    } else {
      console.log("המדינה לא נמצאה");
  }
});

// const test = (data, code) => {
//   const country = data.find(item => === code);
//   console.log(country);
// };

document.querySelector("#id_search").addEventListener("input", function () {
  let inputValue = this.value.toLowerCase(); // הערך שהוקלד באותיות קטנות

  // יצירת מערך חדש עם המדינות שמתחילות באות שהוקלדה
  let filteredData = AllData.filter(country => 
      country.name.common.toLowerCase().startsWith(inputValue)
  );

  // שליחת המערך החדש לפונקציה
  // sendFilteredData(filteredData);
  console.log(filteredData);
  renderAllCards (filteredData)
  
});


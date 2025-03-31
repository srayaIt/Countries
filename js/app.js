import Country from "./classCountry.js";
import { listenerToBtns, renderAllCards  ,showCountry, option ,listenerToOptions,serch} from "./button.js";

 const PreferredCountries = ["Israel", "United States", "United Kingdom", "Brazil", "Italy"];
 let filterData = [];
export  let AllData = [];
 let AllNames = [];  

let url1 = "https://restcountries.com/v3.1/independent?status=true";
let url = "https://restcountries.com/v3.1/all";

const init = async () => {
  await doApi(url);
  renderAllCards(filterData); // מציגים את המדינות המועדפות
  option(AllNames); // מציגים את האפשרויות בתפריט הנפתח
  listenerToBtns(filterData, AllData); // מאזינים לאירועים על הכפתורים
  listenerToOptions(AllNames, AllData); // מאזינים לאירועים על האפשרויות בתפריט הנפתח
  serch(AllData); // מאזינים לאירועים על שדה החיפוש
  console.log(AllData[1]);
  
};

const doApi = async (_url) => {
  try {
      let resp = await fetch(_url);
      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      let data = await resp.json();
      AllData = data;
      AllNames = AllData.map(country => country.name.common);
      filterData = AllData.filter(item => PreferredCountries.includes(item.name.common));
  } catch (err) {
      console.error("Error fetching data:", err);
  }
};


init();
// option(AllNames);




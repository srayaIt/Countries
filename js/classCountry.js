import { AllData} from "./app.js";
class Country {
   
    constructor(_data, _parent) {
        // console.log("enter to constructor");

        this.parent = _parent;
        this.name = _data.name.common;
        this.maps = _data.maps.googleMaps;
        this.flags = _data.flags.png;
        this.population = _data.population;
        this.capital = _data.capital ? _data.capital[0] : "לא ידוע"; // עיר הבירה
        this.latlng = _data.latlng;  // נקודות מיקום של מרכז המדינה
        this.continent = _data.continents ? _data.continents[0] : "לא ידוע"; // יבשת
        this.languages = _data.languages ? Object.values(_data.languages).join(", ") : "לא ידוע"; // שפות רשמיות
        this.borders = _data.borders || []; // רשימת מדינות שכנות (אם קיימות)
       // this.coordinatries = _data.latlng||"not found"; // רשימת מדינות שכנות (אם קיימות)
    }

    test(data){
        console.log(data);
        
    }

    render() {
        const div = document.createElement("div");
        div.className = "card"; 

        div.style.width = "100%"; 

        div.innerHTML = `
            <img src="${this.flags}" class="card-img-top" alt="דגל המדינה">
            <div class="card-body text-center">
                <h5 class="card-title">${this.name}</h5>
            
                <button class="btn btn-success btn-info">🔍 הצג מידע</button>
            </div>
        `;
    
        // מאזין לכפתור מידע
        const button = div.querySelector(".btn-info");
        button.addEventListener("click", () => {
            this.renderAfter();
            console.log(this.name.common);
            
        });
    
        document.querySelector(this.parent).appendChild(div);
    }
    renderAfter() {
             console.log(`${this.borders}מה קורה`);
     
        
        const ipBorders = this.borders
    .map(code => AllData.find(item => item.cca3 === code))
    .filter(country => country !== undefined); // מסנן ערכים לא חוקיים

console.log(ipBorders);

        const div = document.createElement("div");
        div.className = "modal fade";
        div.id = "countryModal";
        div.tabIndex = "-1";
        div.setAttribute("aria-labelledby", "countryModalLabel");
        div.setAttribute("aria-hidden", "true");
        const [lat, lng] = this.latlng; // חילוץ קואורדינטות
        const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=6&output=embed`;
        div.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="countryModalLabel">${this.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src="${this.flags}" class="img-fluid rounded" alt="דגל המדינה">
                        <p class="mt-3"><strong>אוכלוסייה:</strong> ${this.population.toLocaleString()}</p>
                        <p class="mt-3"><strong>עיר בירה:</strong> ${this.capital}</p>
                        <p><strong>יבשת:</strong> ${this.continent}</p>
                        <p><strong>שפה:</strong> ${this.languages}</p>
                        ${this.borders.length > 0 ? `<p><strong>מדינות גובלות:</strong> ${this.borders.join(", ")}</p>` : "<p><strong>אין מדינות שכנות</strong></p>"}

                        
                        <!-- מפה מוטמעת -->
                        <div class="map-container mt-3">
                            <iframe 
                                width="100%" 
                                height="300" 
                                style="border:0" 
                                loading="lazy" 
                                allowfullscreen 
                                referrerpolicy="no-referrer-when-downgrade"
                                src="${mapUrl}">
                            </iframe>
                        </div>
    
                    </div>
                </div>
            </div>
        `;
    // console.log(ipBorders.name.common);
    
        document.body.appendChild(div);
    
        // מפעיל את המודל Bootstrap
        const modal = new bootstrap.Modal(div);
        modal.show();
    }
}    
// const bordersArrFun =(borders)=>{

// }

export default Country;

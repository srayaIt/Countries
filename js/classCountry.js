import { AllData} from "./app.js";
import { showCountry } from "./button.js";
class Country {
   
    constructor(_data, _parent) {
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
        console.log(`${this.borders} מה קורה`);
    
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
                        <p><strong>מדינות גובלות:</strong> <span id="border-countries">${this.borders.length > 0 ? "" : "אין מדינות שכנות"}</span></p>
    
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
    
        document.body.appendChild(div);
    
        // מפעיל את המודל Bootstrap
        const modal = new bootstrap.Modal(div);
        modal.show();
    
        // אחרי שהמודל נטען – הוסף את הכפתורים של המדינות השכנות כאלמנטים
        const neighborsContainer = this.neighbors();
        document.querySelector("#border-countries").appendChild(neighborsContainer);
    }
    
    neighbors() {
        const container = document.createElement("div"); // יצירת אלמנט HTML שיכיל את הכפתורים
    
        const ipBorders = this.borders
            .map(code => AllData.find(item => item.cca3 === code))
            .filter(country => country !== undefined); // מסנן ערכים לא חוקיים
    
        console.log(ipBorders, "מערך עם אובייקטים");
    
        if (ipBorders.length === 0) {
            container.textContent = "אין מדינות שכנות."; // אם אין מדינות שכנות, כותב טקסט
        } else {
            ipBorders.forEach(item2 => {
                const button = document.createElement("button");
                button.textContent = item2.name.common;
                button.className = "btn btn-primary m-1"; // נותן סגנון לכפתור
                button.addEventListener("click", () => {
                    const oldModal = document.querySelector("#countryModal");
                    if (oldModal) {
                        const modalInstance = bootstrap.Modal.getInstance(oldModal);
                        if (modalInstance) {
                            modalInstance.hide(); // הסתרת המודל הישן
                        }
                        oldModal.remove(); // מחיקת ה-Modal מה-DOM
                    }
                    
                    new Country(item2, "#id_row").renderAfter(); // קורא לפונקציה renderAfter של המדינה השכנה
                });
                container.appendChild(button); // מוסיף את הכפתור למיכל
            });
        }
    
        return container; // מחזיר את המיכל עם הכפתורים
    }
    
}
export default Country;

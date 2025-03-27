class Country {
    constructor(_data, _parent) {
        console.log("enter to constractour");
        this.parent = _parent;
        this.name = _data.name.common;
        this.maps = _data.maps.googleMaps;
        this.flags = _data.flags.png;
        this.population = _data.population;
        this.borders = _data.borders;
    }
    render() {
        const div = document.createElement("div");
        div.className = "card"; // הכרטיסייה
        div.style.width = "100%"; // גודל אחיד
        div.innerHTML = `
            <img src="${this.flags}" class="card-img-top" alt="דגל המדינה">
            <div class="card-body text-center">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">אוכלוסייה: ${this.population.toLocaleString()}</p>
                <a href="${this.maps}" target="_blank" class="btn btn-primary">Google Maps</a>
                <button class="btn btn-success btn-info">🔍 הצג מידע</button>
            </div>
        `;
    
        // מאזין לכפתור מידע
        const button = div.querySelector(".btn-info");
        button.addEventListener("click", () => {
            this.renderAfter();
        });
    
        document.querySelector(this.parent).appendChild(div);
    }
    
        renderAfter() {
            
            
            const div = document.createElement("div");

            div.className = "modal fade"; 
            div.id = "countryModal";
            div.tabIndex = "-1";
            div.setAttribute("aria-labelledby", "countryModalLabel");
            div.setAttribute("aria-hidden", "true");
       
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
                            ${this.borders ? `<p><strong>מדינות גובלות:</strong> ${this.borders.join(", ")}</p>` : ""}
                            <a href="${this.maps}" target="_blank" class="btn btn-primary">Google Maps</a>
                        </div>
                    </div>
                </div>
            `;
        
            document.body.appendChild(div);
        
            // מפעיל את המודל Bootstrap
            const modal = new bootstrap.Modal(div);
            modal.show();
        }
        
    }


    


export default Country;

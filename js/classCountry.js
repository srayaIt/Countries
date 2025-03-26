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
      
        const div = document.createElement("div"); // יצירת אלמנט חדש
        div.className = "card";
        div.style.width = "18rem";
        div.innerHTML = "bla bls bla"

        div.innerHTML = `
            <img src="${this.flags}" class="card-img-top" alt="דגל המדינה">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">אוכלוסייה: ${this.population.toLocaleString()}</p>

                <a href="${this.maps}" target="_blank" class="btn btn-primary">Google Maps</a>
                <

                  <button class="btn btn-success btn-info">🔍 הצג מידע</button>

            </div>
        `;
     // הוספת אירוע לכפתור
     const button = div.querySelector(".btn-info");
     button.addEventListener("click", () => {
         alert(`מידע נוסף על ${this.name}`);
     });
        document.querySelector(this.parent).appendChild(div); // הכנסת הכרטיס לדף
    }

    renderAfter(){
        const div = document.createElement("div"); // יצירת אלמנט חדש
       
        div.innerHTML = `
            <img src="${this.flags}" class="card-img-top" alt="דגל המדינה">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">אוכלוסייה: ${this.population.toLocaleString()}</p>
                <a href="${this.maps}" target="_blank" class="btn btn-primary">Google Maps</a>

            </div>
        `;

        document.querySelector(this.parent).appendChild(div); // הכנסת הכרטיס לדף
    }


    
}

export default Country;

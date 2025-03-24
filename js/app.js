const Preferredountries =["Israel","USA" , "UK" , "Brazil" ,"Italy"]

let url = "https://restcountries.com/v3.1/independent?status=true"
const init = () => {
 doApi(url)
}
const doApi = async (_url) => {
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data);
    create(data)

}
const create = (_data)=>{
    _data.forEach(item=>{
let counrey = new Contry ("#id_row", item)
counrey.render() 
  })
}

init()

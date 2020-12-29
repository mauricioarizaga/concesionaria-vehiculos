let sortedArray=[]
const sortArray = (array, order)=>{
        
    switch(order){
        case "asc":
        sortedArray = array.sort((a, b) => {
             function getValue(v) {
            return parseFloat(v.replace('.', '').replace(',', '.'));
        }
       if (getValue(a.Precio) > getValue(b.Precio)) return 1;
       if (getValue(a.Precio) < getValue(b.Precio)) return -1;
       return 0
       });
        break;
        //caso desc.
        default:
        sortedArray = array.sort((a, b) => {
            
            function getValue(v) {
              return parseFloat(v.replace('.', '').replace(',', '.'));
          }
         if (getValue(a.Precio) < getValue(b.Precio)) return 1;
         if (getValue(a.Precio) > getValue(b.Precio)) return -1;
         return 0
         });
            break;    
      }
    
return sortedArray;
}
    
module.exports = sortArray
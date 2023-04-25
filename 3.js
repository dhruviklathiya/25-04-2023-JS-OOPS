class Table{
    constructor(){}
    print(access){
        let i=1;
        do{
            console.log(access+" X "+i+" = "+access*i);
            //For html file //document.write("<h2>"+access+" X "+i+" = "+access*i+"</h2>");
            i++;
        }while(i<=10)
    }
}
let a = 10;
let newobj = new Table;
newobj.print(9);
// For html file // newobj.print(9);
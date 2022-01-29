alert( " Hola bienvenido, porfavor ingrese notas del estudiante")
let nota1 = prompt("porfavor ingrese nota , debe ser numero entre 0 y 5")
if(nota1 >=0 && nota1 <=5) {
    let nota2 = prompt("porfavor ingrese otra nota")
    if(nota2 >=0 && nota2 <=5) { 
      let nota3 = prompt("porfavor ingrese otra nota")
      if(nota3 >=0 && nota3 <=5){
        let nota4= prompt("porfavor ingrese otra nota") 
        if(nota4 >=0 && nota4 <=5) {
                        
            let sumaNotas= parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)
            let numeroNotas=4
            
            let promedio=sumaNotas/numeroNotas
            if(promedio>=3.5){
                alert("el estudiante paso la materia con " +promedio)
                console.log(sumaNotas)
            }else{
                alert("el estudiante reprobo con " + promedio)
            }
        } else {
            alert("porfavor ingrese un numero valido")
             }
      }else {
        alert("porfavor ingrese un numero valido")
    }
    } else {
        alert("porfavor ingrese un numero valido")
    }
    
}else {
    alert("porfavor ingrese un numero valido")
}
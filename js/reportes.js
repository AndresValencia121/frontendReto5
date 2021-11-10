function traerReporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://155.248.202.105:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
    myTable+="<caption><h3>Detalle de Reservas por Status</h3></caption>"
       myTable+="<th>Completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>Canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}
function traerReporteDate(){

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    
        $.ajax({
            url:"http://155.248.202.105:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaDate(respuesta);
            }
        });
    }
    function pintarRespuestaDate(respuesta){

        let myTable="<table>";
        myTable+="<caption><h3>Detalle de Reservas por Fecha</h3></caption>"
        myTable+="<tr>";
        myTable+="<th>Fecha Devolución</th>";
        myTable+="<th>Fecha de Inicio</th>";
        myTable+="<th>Cliente</th>";
        myTable+="<th>Estatus</th>";
        
        "</tr>";
        
          
        for(i=0;i<respuesta.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
            myTable+="<td>"+respuesta[i].startDate+"</td>";
            myTable+="<td>"+respuesta[i].client.name+"</td>";
            myTable+="<td>"+respuesta[i].status+"</td>";
          
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoDate").html(myTable);
    }

    function traerReporteClientes(){
        $.ajax({
            url:"http://155.248.202.105:8080/api/Reservation/report-clients",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaClientes(respuesta);
            }
        });
    }
    function pintarRespuestaClientes(respuesta){

        let myTable="<table>";
        myTable+="<caption><h3>Detalle de Reservas por Cliente</h3></caption>"
        myTable+="<tr>";
        myTable+="<th>Total</th>";
        myTable+="<th>Cliente</th>";
        myTable+="<th>Email</th>";
        myTable+="<th>Edad</th>";
        "</tr>";

        
          
        for(i=0;i<respuesta.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+respuesta[i].total+"</td>";
            myTable+="<td>"+respuesta[i].client.name+"</td>";
            myTable+="<td>"+respuesta[i].client.email+"</td>";
            myTable+="<td>"+respuesta[i].client.age+"</td>";
          
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoClientes").html(myTable);
    }

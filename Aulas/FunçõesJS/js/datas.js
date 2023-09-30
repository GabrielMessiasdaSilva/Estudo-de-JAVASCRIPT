//manipulação de datas

var data = new Date();



//data atual 08/08/23

//estamos pegando o dia segundo o sistema operacional,de forma dinamica
document.write(data.getDate()+'</br>' );


//podemos recuperar o mÊs
//devemos somar mais um,já que ele considera de 0 a 11.
document.write(data.getMonth()+1+'</br>')


//temos o método para retornar o ano 

document.write(data.getFullYear()+'</br>')

//conctetando tudo
document.write(data.getDate()+ '/' +(data.getMonth()+1) + '/' (data.getFullYear()) )
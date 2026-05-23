let MontoCofla = prompt("Cuanto dinero tienes Cofla?");
let MontoPedro = prompt("Cuanto dinero tienes Pedro?");
let MontoRoberto = prompt("Cuanto dinero tienes Roberto?");

if(MontoCofla >= 0.6 && MontoCofla < 1){
    document.write("Cofla puede comprar helado de agua");
}else if (MontoCofla >= 1 && MontoCofla < 1.6){
    document.write("Cofla puede comprar helado de crema");
}else if (MontoCofla >= 1.6 && MontoCofla < 1.7){
    document.write("Cofla puede comprar bombon helado marca heladix");
}else if (MontoCofla >= 1.7 && MontoCofla < 1.8){
    document.write("Cofla puede comprar bombon helado marca heladon");
}else if (MontoCofla >= 1.8 && MontoCofla < 2.9){
    document.write("Cofla puede comprar bombon helado marca heladisimo");
}else if (MontoCofla >= 2.9){
    document.write("Cofla puede comprar potecito de helado con confites o  un pote de 1/4kg");
}else{
    document.write("Cofla, no alcanza para comprar un helado");
}
document.write("<br>");

if(MontoRoberto >= 0.6 && MontoRoberto < 1){
    document.write("Roberto Puede comprar helado de agua");
}else if (MontoRoberto >= 1 && MontoRoberto < 1.6){
    document.write("Roberto Puede comprar helado de crema");
}else if (MontoRoberto >= 1.6 && MontoRoberto < 1.7){
    document.write("Roberto Puede comprar bombon helado marca heladix");
}else if (MontoRoberto >= 1.7 && MontoRoberto < 1.8){
    document.write("Roberto Puede comprar bombon helado marca heladon");
}else if (MontoRoberto >= 1.8 && MontoRoberto < 2.9){
    document.write("Roberto Puede comprar bombon helado marca heladisimo");
}else if (MontoRoberto >= 2.9){
    document.write("Roberto Puede comprar potecito de helado con confites o  un pote de 1/4kg");
}else{
    document.write("Roberto, no alcanza para comprar un helado");
}
document.write("<br>");

if(MontoPedro >= 0.6 && MontoPedro < 1){
    document.write("Pedro puede comprar helado de agua");
}else if (MontoPedro >= 1 && MontoPedro < 1.6){
    document.write("Pedro puede comprar helado de crema");
}else if (MontoPedro >= 1.6 && MontoPedro < 1.7){
    document.write("Pedro puede comprar bombon helado marca heladix");
}else if (MontoPedro >= 1.7 && MontoPedro < 1.8){
    document.write("Pedro puede comprar bombon helado marca heladon");
}else if (MontoPedro >= 1.8 && MontoPedro < 2.9){
    document.write("Pedro puede comprar bombon helado marca heladisimo");
}else if (MontoPedro >= 2.9){
    document.write("Pedro puede comprar potecito de helado con confites o  un pote de 1/4kg");
}else{
    document.write("Pedro, no alcanza para comprar un helado");
}
document.write("<br>");
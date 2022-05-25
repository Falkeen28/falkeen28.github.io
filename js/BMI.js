function bmi(x, y) 
        {
            if ((x / (y * y)) >= 35) return((x / (y * y)));
            else if ((x / (y * y)) > 30 && (x / (y * y)) < 34.99) return((x / (y * y)));
            else if ((x / (y * y)) > 25 && (x / (y * y)) < 29.99) return((x / (y * y)));
            else if ((x / (y * y)) > 18.5 && (x / (y * y)) < 24.99) return((x / (y * y)));
            else if ((x / (y * y)) < 18.5) return((x / (y * y)));
        }
        function oblicz() 
        {
            var x = document.getElementById("waga").value, y = document.getElementById("wzrost").value;
            if (isNaN(y)) 
            {
                alert("Podaj wzrost w metrach");
                console.log("y", y);
            }
            else if ( y > 2.40 )
            {
                alert("nie wpisałeś aby troche za dużu centymetrów?");
                console.log("x", x);
            }
            else if ( y < 0.50 )
            {
                alert("nie wpisałeś aby troche za mało centymetrów?");
                console.log("x", x);
            }
            else if (isNaN(x)) 
            {
                alert("Podaj wage w kilogramach");
                console.log("x", x);
            }
            else if ( x > 300 )
            {
                alert("nie wpisałeś aby troche za dużu kilogramów?");
                console.log("x", x);
            }
            else if ( x < 40 )
            {
                alert("nie wpisałeś aby troche za mało kilogramów?");
                console.log("x", x);
            }
            else
                document.getElementById("odpowiedz").innerHTML = "BMI wynosi " + Number(Math.round(bmi(x, y) + 'e+2') + 'e-2'); 
                //za pomocą notacji wykładniczej zaokrągliłem liczbe do 2 miejsc po przecinku :D
                
        }
       /* function obrazek()
        {   if(Number(Math.round(bmi(x, y) + 'e+2') + 'e-2') > 25  && Number(Math.round(bmi(x, y) + 'e+2') + 'e-2') < 18.5)
                document.getElementById("obrazek").addEventListener("click", oblicz(){obslugazdarzenia("4A ")});  
        }*/
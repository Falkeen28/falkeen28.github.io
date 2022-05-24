function bmi(x, y) 
        {
            if ((x / (y * y)) >= 40) return((x / (y * y))) + " czyli otyłość III stopnia";
            else if ((x / (y * y)) > 35 && (x / (y * y)) < 39.99 ) return((x / (y * y))) + " czyli otyłość II stopnia";
            else if ((x / (y * y)) > 30 && (x / (y * y)) < 34.99 ) return((x / (y * y))) + " czyli otyłość I stopnia";
            else if ((x / (y * y)) > 25 && (x / (y * y)) < 29.99) return((x / (y * y))) + " czyli Nadwaga";
            else if ((x / (y * y)) > 18.5 && (x / (y * y)) < 24.99 ) return((x / (y * y))) + " czyli Waga prawidłowa";
            else if ((x / (y * y)) > 17 && (x / (y * y)) < 18.49 ) return((x / (y * y))) + " czyli Niedowaga";
            else if ((x / (y * y)) > 16 && (x / (y * y)) < 16.99 ) return((x / (y * y))) + " czyli Wychudzenie";
            else if ((x / (y * y)) < 16 ) return((x / (y * y))) + " czyli Wyglodzenie";
        }
        function oblicz() 
        {
            var x = document.getElementById("waga").value, y = document.getElementById("wzrost").value;
            if (isNaN(y)) 
            {
                alert("Podaj wzrost w centymetrach");
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
                document.getElementById("odpowiedz").innerHTML = "BMI wynosi " + bmi(x, y);
        }
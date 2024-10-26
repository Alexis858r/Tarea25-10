            // Declara una variable llamada challenge y le asigno un valor
 let challenge = '30 Days Of JavaScript';

            // Muestra la cadena en la consola del navegador
 console.log(challenge);

            // Muestra la longitud de la cadena
 console.log(challenge.length);

            // Cambia todos los caracteres a mayúsculas
 console.log(challenge.toUpperCase());

            // Cambia todos los caracteres a minúsculas
 console.log(challenge.toLowerCase());

            // Corta la primera palabra de la cadena
 console.log(challenge.substring(0, 2));
  // unicamente la primera palabra

            // Se corta la frase "Days Of JavaScript"
 console.log(challenge.substring(3)); 
 // Se empieza desde el cuarto carácter

            // Se verifica si la cadena contiene la palabra 'Script'
 console.log(challenge.includes('Script')); // Devuelve true o false

            // Se divide la cadena en un array usando el espacio como separador
 console.log(challenge.split(' ')); // Crea un array con las palabras

            // Divido la cadena "30 Days Of JavaScript" en el espacio
 console.log(challenge.split(' ')); // Es igual que el anterior

            // Divido una cadena de empresas en un array
 let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
 console.log(companies.split(', ')); 
 // Se separa a las empresas en un array

            // Cambio 'JavaScript' por 'Node'
 console.log(challenge.replace('JavaScript', 'Node')); 
 // Se cambia el texto

            // Busco el carácter en el índice 15
 console.log(challenge.charAt(15)); 
 // Se muestra el carácter en esa posición

            // Busco el código del carácter 'J'
 console.log(challenge.charCodeAt(15)); // Muestra el código ASCII

            // Busco la primera ocurrencia de 'a'
 console.log(challenge.indexOf('a')); 
 // Se utiliza para encuentrar la primera 'a'

            // Busco la última ocurrencia de 'a'
 console.log(challenge.lastIndexOf('a')); 
 // Se utliza para encuentrar la última 'a'

            // Busco la primera ocurrencia de 'because' en una frase
 let sentence = 'You cannot end a sentence with because because because is a conjunction';
 console.log(sentence.indexOf('because'));

            // Busco la última ocurrencia de 'because'
 console.log(sentence.lastIndexOf('because')); 

            // Uso search para encontrar 'because'
 console.log(sentence.search('because')); 

            // Se usa trim para quitar espacios al inicio y al final
 let trimmed = ' 30 Days Of JavaScript ';
 console.log(trimmed.trim()); 
 // Muestra la cadena sin espacios

            // Se verifica si la cadena empieza con '30 Days Of JavaScript'
 console.log(challenge.startsWith('30 Days Of JavaScript')); 

            // Se verifica si la cadena termina con 'JavaScript'
 console.log(challenge.endsWith('JavaScript'));

            // Se usa match para encontrar todas las 'a'
 console.log(challenge.match(/a/g)); 
 // Se muestran todas las 'a' en un array

            // Concatencio dos cadenas
 console.log('30 Days Of '.concat('JavaScript')); 
 // Se utiliza para unir dos cadenas

            // Se usa para repetir una cadena (x) cantidad de veces 
 console.log(challenge.repeat(2)); 
 // Se muestra la cadena dos veces
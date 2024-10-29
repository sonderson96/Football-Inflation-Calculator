const dropDown = document.getElementById("myDropdown");
const inputBox = document.getElementById("inputBox");
const calculateBtn = document.getElementById("calculate");
const answer = document.getElementById("answer")
inputBox.placeholder = "Enter fee here...";
const imageContainer = document.getElementById("imageContainer")

const quotePara = document.getElementById("quotePara")


function calculate () {
let result = 0;
let x = inputBox.value.replace(/[^0-9.-]+/g,"")
let z = parseFloat(x)
// let z = Intl.NumberFormat().format(y);

if (document.getElementById ("1993").selected === true) {result = Intl.NumberFormat().format(z*23.08298484) ;

  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;

}     else if(document.getElementById ("1994").selected === true) {result = Intl.NumberFormat().format(z*14.36589162);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("1995").selected === true) {result = Intl.NumberFormat().format(z*11.58497758);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("1996").selected === true) {result = Intl.NumberFormat().format(z*7.527237365);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("1997").selected === true) {result = Intl.NumberFormat().format(z*8.929617523);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("1998").selected === true) {result = Intl.NumberFormat().format(z*7.931619342);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("1999").selected === true) {result = Intl.NumberFormat().format(z*6.049725456);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2000").selected === true) {result = Intl.NumberFormat().format(z*6.776473675);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2001").selected === true) {result = Intl.NumberFormat().format(z*4.483297153);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2002").selected === true) {result = Intl.NumberFormat().format(z*3.533837206);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if (document.getElementById ("2003").selected === true) {result = Intl.NumberFormat().format(z*6.032680123) ;

  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;

}   

else if(document.getElementById ("2004").selected === true) {result = Intl.NumberFormat().format(z*6.721188948);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2005").selected === true) {result = Intl.NumberFormat().format(z*5.324489751);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2006").selected === true) {result = Intl.NumberFormat().format(z*5.463427788);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2007").selected === true) {result = Intl.NumberFormat().format(z*5.221073175);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2008").selected === true) {result = Intl.NumberFormat().format(z*3.292987393);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2009").selected === true) {result = Intl.NumberFormat().format(z*3.388789978);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2010").selected === true) {result = Intl.NumberFormat().format(z*5.342990996);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2011").selected === true) {result = Intl.NumberFormat().format(z*4.26548875);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2012").selected === true) {result = Intl.NumberFormat().format(z*5.136857618);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if (document.getElementById ("2013").selected === true) {result = Intl.NumberFormat().format(z*3.99905243) ;

  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;

}     else if(document.getElementById ("2014").selected === true) {result = Intl.NumberFormat().format(z*3.586337591);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2015").selected === true) {result = Intl.NumberFormat().format(z*2.72123228);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2016").selected === true) {result = Intl.NumberFormat().format(z*2.130096619);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2017").selected === true) {result = Intl.NumberFormat().format(z*1.618419244);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2018").selected === true) {result = Intl.NumberFormat().format(z*1.25317298);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2019").selected === true) {result = Intl.NumberFormat().format(z*1.607988369);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2020").selected === true) {result = Intl.NumberFormat().format(z*1.540116845);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2021").selected === true) {result = Intl.NumberFormat().format(z*1.67033361);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2022").selected === true) {result = Intl.NumberFormat().format(z*1.457866523);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}

else if(document.getElementById ("2023").selected === true) {result = Intl.NumberFormat().format(z*0.9503560519);
  answer.textContent = `In 2024 the transfer fee would've cost £${result}`;
}


}

calculateBtn.addEventListener("click", calculate)

quotes = ["Otamendi, Kevin De Bruyne, Fernandinho, Silva, Sterling, Agüero, they are investments from the past - Jose Mourinho","Figo was a coward who betrayed us - Joan Gaspart on Luis Figo’s 2000 move to Real Madrid", "It is omelettes and eggs. No eggs - no omelettes! It depends on the quality of the eggs. In the supermarket you have class one, two or class three eggs and some are more expensive than others and some give you better omelettes. So when the class one eggs are in Waitrose and you cannot go there, you have a problem.- Jose Mourinho",];

function quoteGen() {
  
let run = quotes[(Math.floor(Math.random()*quotes.length))];
quotePara.textContent = run
}

document.addEventListener("DOMContentLoaded", quoteGen)





function imageGen()
{ 
  const imageArray = [
    'https://talksport.com/wp-content/uploads/sites/5/2015/07/rio.jpg?w=620','https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/12/12/paul-pogba.jpg','https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20170805_BLP529.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBfl1bhodXFrowSC0Bl3SOL9SGEXkI3znWw&s','https://e00-marca.uecdn.es/assets/multimedia/imagenes/2016/07/04/14676275806260.jpg']
  
  const img = document.createElement('img');
            img.src = imageArray[(Math.floor(Math.random()*imageArray.length))];
            imageContainer.appendChild(img);

  
}

document.addEventListener("DOMContentLoaded", imageGen);
// calculateBtn.addEventListener("click", imageGen);

// let run = imageArray[(Math.floor(Math.random()*imageArray.length))];
// image.src = run;

// // ! API STUFF 

// const url = 'https://football98.p.rapidapi.com/premierleague/table/squadname/Liv';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '533322d2cemsha32a0bd17dded35p193d0ajsna417667d6fcd',
// 		'x-rapidapi-host': 'football98.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
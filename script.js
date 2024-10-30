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

quotes = ["If I have to make a tackle then I have already made a mistake. - Paolo Maldini ", "It is omelettes and eggs. No eggs - no omelettes! It depends on the quality of the eggs. In the supermarket you have class one, two or class three eggs and some are more expensive than others and some give you better omelettes. So when the class one eggs are in Waitrose and you cannot go there, you have a problem.- Jose Mourinho","Every dog has its day, and today is woof day! Today I just want to bark! - Ian Holloway","What is a club in any case? Not the buildings or the directors or the people who are paid to represent it. It's the noise, the passion, the feeling of belonging, the pride in your city. - Bobby Robson","I start early, and I stay late, day after day, year after year. It took me 17 years and 114 days to become an overnight success. - Lionel Messi","If you eat caviar every day, it's difficult to return to sausages. - Arsene Wenger","I spent a lot of money on booze, birds, and fast cars. The rest I just squandered. - George Best", "Please don't call me arrogant, but I'm European champion and I think I'm a special one. - Jose Mourinho", "I learned all about life with a ball at my feet. - Ronaldinho","Play for the badge on the front of the shirt and they'll remember the name on the back. - Tony Adams", "Football is played with your head. Your feet are just the tools. - Andrea Pirlo", " Some people believe football is a matter of life and death, I am very disappointed with that attitude. I can assure you it is much, much more important than that. - Bill Shankly","Football is a simple game; 22 men chase a ball for 90 minutes, and at the end, the Germans always win. - Gary Lineker","First, I went left, he did too. Then I went right, and he did, too. Then I went left again, and he went to buy a hot dog. - Zlatan Ibrahimovic" ];

function quoteGen() {
  
let run = quotes[(Math.floor(Math.random()*quotes.length))];
quotePara.textContent = run
}

document.addEventListener("DOMContentLoaded", quoteGen)





function imageGen()
{ 
  const imageArray = [
    'https://pbs.twimg.com/profile_images/1521197825991847936/9ssYST0g_400x400.jpg','https://nypost.com/wp-content/uploads/sites/2/2018/06/180619-the-most-iconic-photos-in-world-cup-history-86.jpg?quality=80&strip=all','https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20170805_BLP529.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBfl1bhodXFrowSC0Bl3SOL9SGEXkI3znWw&s','https://e00-marca.uecdn.es/assets/multimedia/imagenes/2016/07/04/14676275806260.jpg','https://statico.sportskeeda.com/editor/2023/01/15e65-16746775939020-1920.jpg','https://a.espncdn.com/photo/2020/0219/r668226_1296x729_16-9.jpg','https://pbs.twimg.com/media/FAhwJouVUAAPV6R.jpg:large','https://images.livemint.com/img/2022/11/19/600x338/SOCCER-WORLDCUP-FRA-PROSPECTS-0_1668844711920_1668844711920_1668844729646_1668844729646.JPG','https://qph.cf2.quoracdn.net/main-qimg-567b93d6ed9413a03b32d98d4ce161f1-pjlq','https://icdn.caughtoffside.com/wp-content/uploads/2015/01/Luis-Suarez-Neymar-Lioenl-Messi-Barcelona.jpg',]
  
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
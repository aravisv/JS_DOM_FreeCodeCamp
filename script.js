const title = document.querySelector("#main-heading").style.color = "white";

const listItems = document.querySelectorAll('.list-items');
for( let i=0; i<listItems.length; i++){
	listItems[i].style.fontSize = '1em';
}

const ul = document.querySelector('ul');
//createElement
const li = document.createElement('li');

//add to DOM
ul.append(li);

//const firstListItem = document.querySelector('li');
//console.log(firstListItem.innerHTML);
//console.log(firstListItem.innerText);
//console.log(firstListItem.textContent);

li.innerText = "Thor : Love and Thunder";

li.setAttribute('class', 'list-items');
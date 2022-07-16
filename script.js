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

li.setAttribute('id', 'main-heading');

//console.log(li.getAttribute('id'));
li.removeAttribute('id');
//console.log(li.getAttribute('id'));


li.classList.add('list-items');
//console.log(li.classList.contains('list-items'));		//returns true/false
//li.classList.remove('list-items');

li.remove();

/* Parent node traversal
console.log(ul.parentElement.parentElement.parentElement);	//html
console.log(ul.parentElement.parentElement.parentElement.parentElement);	//null

console.log(ul.parentNode.parentNode.parentNode);	//html
console.log(ul.parentNode.parentNode.parentNode.parentNode);	//#document
console.log(ul.parentNode.parentNode.parentNode.parentNode.parentNode);		//null
*/


/*
Child node traversal
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild.nodeValue);	//new line

let child = ul.childNodes;
child[1].style.backgroundColor = 'skyblue';

Child element traversal
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
*/

/*
sibling node traversal

console.log(ul.parentNode.childNodes);
console.log(ul.previousSibling);
console.log(ul.nextSibling);

sibling element traversal
console.log(ul.parentElement.children);
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);
*/
var arr=[];
document.querySelector('#movies').addEventListener("click",(e)=>{	
	const target = e.target;
	if(target.matches('li')){		
		let movieId = e.target.getAttribute('id');		

		if(arr.includes(movieId)){
			target.style.backgroundColor = 'white';
			arr.splice(arr.indexOf(movieId), 1);
			console.log( movieId + " is unselected");
		}
		else{
			arr.push(movieId);
			target.style.backgroundColor = 'yellow';
			console.log( movieId + " is selected");
		}
		
	}
});
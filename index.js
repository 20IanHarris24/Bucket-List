// Qu.1
const p1 = document.createElement("p");
console.log(p1);
p1.innerText="Own a Restaurant";
const section = document.querySelector(" .list"); //Using class labels to select the entry point. Here I used the class labe for section tag.
section.appendChild(p1); //The append function automatically adds the injected element as the last child element and thus in this case under the first list item.

//Qu.2
const p2 = document.createElement("p");
console.log(p2);
p2.innerText="Visit the Galapagos Islands";
//section.insertAdjacentElement("afterbegin",p2);   //shows in browseras top of the the list.
//section.insertAdjacentElement("afterend",p2);   //shows in browser as bottom of the list.
//section.insertAdjacentElement("beforebegin",p2);   //shows in browser as top of the list.
section.insertAdjacentElement("beforeend",p2);   //shows in browser as bottom of the list.

//Qu.3

//let html = section.getElementsByClassName(".list").innerHTML;
const allThePs = section.getElementsByTagName("p");

        // if (allThePs !== undefined) {
        //     console.log(allThePs.length);
        // } else {
        //     console.log("allThePs is undefined");
        // }
   for (let p = 0; p < allThePs.length; p++)   
         {
            console.log(allThePs[p].innerHTML);    
         }
 
         
//Qu.4

// let newHtml = "<p>Fly at Supersonic speeds</p>";

//Qu.5

//section.innerHTML = newHtml;  //All other list entries disappear with just the new entry visible in the browser.

//Qu.6

//We can use the insertAdjacentHTML method

let newHtml = "<p>Fly at Supersonic speeds</p>";
section.insertAdjacentHTML("beforeend",newHtml);

//Qu.7

const moreItems = ["<p>Swimming with a Whale</p>", "<p>Visiting Sri Lanka</p>", "<p>Taking my children to World Cup 2028</p>"];
for (let i = 0; i < moreItems.length; i++)
    {
     section.insertAdjacentHTML("beforeend", moreItems[i]);
    
}


//Qu.8      7 items in my list

for (let p = 0; p < allThePs.length; p++)   
    {
       console.log(allThePs[p]);    
    }


//Qu.9

const h2 = document.querySelector(".owner");
h2.innerText = "Ian's";
//console.log(h2.innerText);


//Qu.10
//let wishList = section.children;
//console.log(wishList);
const para = document.createElement("p");
para.innerText = "Climb Mount Everest"
console.log(para);
section.replaceChild(para, section.children[0]);


//Qu.11


const para2 = document.createTextNode("Take part in the Isle of Man TT");
console.log(para2);
section.replaceChild(para2, section.children[3]);


//Qu.12

const list = section.getElementsByTagName("p");  //Collect the bucket list
console.log(list);                               //Print out the list
const last = section.lastChild;                  //Find the last child element
console.log(last);                               //Print the last list element
section.removeChild(last);                       //Remove from the list;
const newLast = section.lastChild                //Get new last. git 
console.log(newLast);                            //Print new last.






 






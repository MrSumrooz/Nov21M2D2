/*<!-- MANDATORY JS EXERCISES (create a different file for this exercise)
    1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
    2) Create an unordered list using JavaScript and save it in a variable
    3) Cycle the array and create a list-item via JavaScript for every element
    4) Insert the genere as text in the list-item
    5) Append the list items in the unordered list
    6) Append the unordered list in the document. The list should appear in the page.
-->*/



let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]




let newList = function(){
    
    
    let parentNode = document.getElementById("Un-Orderlist")
    let newListElement = document.createElement("ul")
    parentNode.appendChild(newListElement)
    newListElement.classList.add("mt-4")

    for ( i = 1; i < genres.length ; i++)
{
    let liNode = document.createElement("li");  
    
    
    
    liNode.innerHTML = genres[i]
   newListElement.appendChild(liNode)
  
}
 

}

newList()





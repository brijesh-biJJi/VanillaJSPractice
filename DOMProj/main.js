var form = document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter=document.getElementById('filter')

//Form Submit Event
form.addEventListener('submit',addItem)

//Delete Event
itemList.addEventListener('click',removeItem)

//Filter Event
filter.addEventListener('keyup',filterItems)

//Add Item
function addItem(e)
{
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;
    
    //Create New li Element
    var li = document.createElement('li')

    //Add class to li
    li.className="list-group-item"

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem))

    //Add li to ul list
    itemList.appendChild(li)

    //Create Delete Button Element
    var del=document.createElement('button')

    //Add Classes
    del.className="btn btn-danger btn-sm delete float-right";

    //Append Text node 
    del.appendChild(document.createTextNode('X'))

    //Append Button to list
    li.appendChild(del)

    //console.log(li);
}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    // console.log(1);
    }
}

//Filter Item
function filterItems(e){
    //convert text to lower case
    var text=e.target.value.toLowerCase();
    
    //Get li's
    var items=itemList.getElementsByTagName('li')

    //convert to an Array
    Array.from(items).forEach(function(item){
    
        var itemNames=item.firstChild.textContent;
        if(itemNames.toLowerCase().indexOf(text) != -1 ){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })


}
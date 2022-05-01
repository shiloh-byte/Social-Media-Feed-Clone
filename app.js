// grab main class //
const mainContent = document.querySelector('.mainContent');


// create function/divs for content on scroll //
function addUser() {
    const url = 'https://randomuser.me/api/?results=10';
        fetch(url).then(function(response) {
            return response.json()
            }).then(function(data) {
                let people = data.results;
                return people.map(function(val, i){
    
    let firstName = val.name.first;
    let lastName = val.name.last;

    let subContent = document.createElement('div');
    subContent.classList.add('subContent');

    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    image.src = val.picture.thumbnail;
    imageDiv.classList.add('image2');

    let title = document.createElement('div');
    let titleText = document.createElement('p');
    titleText.innerHTML = firstName + ' ' + lastName;
    title.classList.add('title2');

    let text = document.createElement('div');
    let myPara = document.createElement('p');
    myPara.innerHTML = 
    'Dolor sit amet consectetur adipisicing elit. Iusto  laudantium doloribus non ratione. Lorem ipsum dolor sit consectetur, adipisicing elit.'; /*add text */
    text.classList.add('text2');
    
    imageDiv.appendChild(image);
    subContent.appendChild(imageDiv);

    text.appendChild(myPara);
    subContent.appendChild(text);

    title.appendChild(titleText);
    subContent.appendChild(title);
    
    mainContent.appendChild(subContent);
        })
    })
    .catch(function(error) {
        console.log(error);
    })
}

// throttle scroll event to slow down firing//

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        addUser();
    }
})

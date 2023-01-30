const addPostBtn = document.getElementById('add-post-btn');
const form = document.getElementById('form');

// display create new post form
addPostBtn.addEventListener('click', (e) => {
    let event = e.target;
    console.log(event);

    addPostBtn.classList.add('d-none');
    form.classList.remove('d-none');
});

form.addEventListener('submit', createPost);

//  saves post to database
function createPost(e) {
    e.preventDefault(); 
    let event = e.target;
    console.log(event);
    
    
    let title = document.getElementById('title-input');
    let content = document.getElementById('content-input');
    console.log('submit works');
    console.log("Title: ", title.value)
    console.log("Content: ", content.value)  


    addPostBtn.classList.remove('d-none');
    form.classList.add('d-none');
}

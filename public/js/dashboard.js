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

//  create new post and save to database
async function createPost(e) {
    e.preventDefault();

    let title = document.getElementById('title-input').value.trim();
    let content = document.getElementById('content-input').value.trim();
    // console.log('CREATE POST: ');
    // console.log("Title: ", title)
    // console.log("Content: ", content)


    addPostBtn.classList.remove('d-none');
    form.classList.add('d-none');

    if (title && content) {
        const response = await fetch('/dashboard/create-post', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                content: content,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
            console.log(response);
        } else {
            alert(response.statusText);
        }

    }
}
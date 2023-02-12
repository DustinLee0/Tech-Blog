const updateBtn = document.querySelector('#update');

updateBtn.addEventListener('click', async (e) => {
    let event = e.target;
    let postId = event.parentElement.getAttribute('id');

    let newTitle = document.querySelector('#updated-title').value;
    let newContent = document.querySelector('#updated-content').value;
    // console.log('updated title: ', newTitle)
    // console.log('updated content: ', newContent)
    
    const response = await fetch(`/dashboard/edit-post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: newTitle,
            content: newContent,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post.');
    }
})
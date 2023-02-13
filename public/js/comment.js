const commentCard = document.querySelector('#add-comment');

// render add comment form
commentCard.addEventListener('click', (e) => {
    e.preventDefault();

    let card = document.querySelector('#comment');
    card.classList.remove('d-none');
});

const addCommentBtn = document.querySelector('#comment-btn');

addCommentBtn.addEventListener('click', async (e) => {
    let comment = document.querySelector('#comment-value').value;
    let postId = document.querySelector('#post-title').parentElement.getAttribute('id');
    let userId = document.querySelector('#user-id').getAttribute('data-number');

    if (comment && postId && userId) {
        const response = await fetch('/single-post', {
            method: 'POST',
            body: JSON.stringify({
                comment: comment,
                user_id: userId,
                posts_id: postId
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
            return;
        }
    }
})
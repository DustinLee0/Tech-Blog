const readMoreBtn = document.querySelectorAll('#read-more');

readMoreBtn.forEach(button => {
    button.addEventListener('click', async (e) => {
        let event = e.target;
        console.log('button clicked');

        let postId = event.parentElement.getAttribute('id');
        console.log(postId)


    })

});
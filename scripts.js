function togglePost(button) {
    const post = button.closest('.post');
    const fullPost = post.querySelector('.full-post');

    // Check if the post is currently expanded
    const isExpanded = fullPost.classList.contains('show');

    if (isExpanded) {
        // Collapse the content
        fullPost.style.maxHeight = fullPost.scrollHeight + 'px'; // Set to current height for animation
        fullPost.offsetHeight; // Trigger reflow for CSS transition to take effect
        fullPost.style.maxHeight = 0;
        fullPost.style.opacity = 0;

        // Update button text
        button.textContent = 'Read More \u25BC'; // Down arrow
    } else {
        // Expand the content
        fullPost.style.maxHeight = fullPost.scrollHeight + 'px'; // Temporarily set height to allow animation
        fullPost.classList.add('show');
        fullPost.style.opacity = 1;

        // Reset max-height to allow for future collapses
        setTimeout(() => {
            fullPost.style.maxHeight = 'none';
        }, 500); // Duration matches CSS transition

        // Update button text
        button.textContent = 'See Less \u25B2'; // Up arrow
    }

    // Toggle class after transition
    setTimeout(() => {
        fullPost.classList.toggle('show', !isExpanded);
        button.disabled = false; // Ensure button is re-enabled after transition
    }, 500); // Match with CSS transition duration
}

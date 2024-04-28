function displayAllBlogs() {
    const blogContainer = document.querySelector('.blog-container');
  
   
    blogContainer.innerHTML = '';
  
   
    const getData = localStorage.getItem('blogData');
    let blogEntries = [];
  
    if (getData) {
      blogEntries = JSON.parse(getData);
    }
  
    
    blogEntries.forEach(blogData => {
      const blogPost = document.createElement('div');
      blogPost.classList.add('blog-post');
  
      const title = document.createElement('div');
      title.classList.add('blog-title');
      title.textContent = `Title: ${blogData.Title}`;
  
      const content = document.createElement('div');
      content.classList.add('blog-content');
      content.textContent = `Content: ${blogData.Content}`;
  
      const author = document.createElement('div');
      author.classList.add('blog-author');
      author.textContent = `Author: ${blogData.Author}`;
  
      
      blogPost.appendChild(title);
      blogPost.appendChild(content);
      blogPost.appendChild(author);
  
      
      blogContainer.appendChild(blogPost);
    });
  }
  
  
  window.onload = displayAllBlogs;
  
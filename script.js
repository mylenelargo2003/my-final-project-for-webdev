let tweets = [];

  function displayTweet(){
    const postFeed = document.getElementById("post-feed");
    postFeed.innerHTML = '';

    for (let i = 0; i < tweets.length; i++){
      const listItem = document.createElement("p");
      const post = document.createElement("div");
      const postAvatar = document.createElement("div");
      const imgProfile = document.createElement("img");
      const postBody = document.createElement("div");
      const postHeader = document.createElement("div");
      const postHeaderText = document.createElement("div");
      const h3Post = document.createElement("h3");
      const postHeaderDescription = document.createElement("div");
   
      

      listItem.textContent = tweets[i];
      listItem.classList.add("tweet-text");
      post.classList.add("post");
      postAvatar.classList.add("post__avatar");
      imgProfile.src = "tao-with-face.png"
      alt="";
      postBody.classList.add("post__body");
      postHeader.classList.add("post__header");
      postHeaderText.classList.add("post__headerText");
      h3Post.innerHTML = 'Mylene Largo Paderna<span class="post__headerSpecial"><span class="material-icons post__badge"> verified </span>@mylene</span>';
      postHeaderDescription.classList.add("post__headerDescription");


      
      postFeed.appendChild(post);
      post.appendChild(postAvatar);
      postAvatar.appendChild(imgProfile);
      post.appendChild(postBody);
      postBody.appendChild(postHeader);
      postHeader.appendChild(postHeaderText);
      postHeader.appendChild(h3Post);
      postBody.appendChild(postHeaderDescription);
      postHeaderDescription.appendChild(listItem);
     
    }
  }


  function tweetButton(){
    const tweetInput = document.getElementById("tweet-input").value;
    
    if(!tweetInput){
      alert("Dont leave it blank.");
    }
    else{
      tweets.push(tweetInput);
       document.getElementById("tweet-input").value = '';
       displayTweet();
    }
  }
  document.getElementById('tweetBox_tweetButton').addEventListener('click', tweetButton);


  function bookmarked() {
    let buttons = document.querySelectorAll('.material-icons');
  
    buttons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        localStorage.setItem('bookmark', 'true');
  
        const unbookmark = document.getElementById('unbookmarked');
        const bookmark = document.getElementById('bookmarked');
        bookmark.style.display = 'none';
        unbookmark.style.display = 'block';
      });
    });
  }
  function unbookmark() {
    let buttons = document.querySelectorAll('.material-icons');
  
    buttons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        localStorage.removeItem('bookmark');
  
        const unbookmark = document.getElementById('unbookmarked');
        const bookmark = document.getElementById('bookmarked');
        bookmark.style.display = 'block';
        unbookmark.style.display = 'none';
      });
    });
  }
  function bookmarked1() {
    let buttons = document.querySelectorAll('.material-icons');
  
    buttons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        localStorage.setItem('bookmark1', 'true');
  
        const unbookmark = document.getElementById('unbookmarked1');
        const bookmark = document.getElementById('bookmarked1');
        bookmark.style.display = 'none';
        unbookmark.style.display = 'block';
      });
    });
  }
  function unbookmark1() {
    let buttons = document.querySelectorAll('.material-icons');
  
    buttons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        localStorage.removeItem('bookmark1');
  
        const unbookmark = document.getElementById('unbookmarked1');
        const bookmark = document.getElementById('bookmarked1');
        bookmark.style.display = 'block';
        unbookmark.style.display = 'none';
      });
    });
  }

 

  function Toggle1(){
    var btnvar1 = document.getElementById('btnh1');
           if (btnvar1.style.color =="red") {
               btnvar1.style.color = "grey"
           }
           else{
               btnvar1.style.color = "red"
           }
  }



//    Second Like Button   
 
  function Toggle2(){
    var btnvar2 = document.getElementById('btnh2');

           if (btnvar2.style.color =="red") {
               btnvar2.style.color = "grey"
           }
           else{
               btnvar2.style.color = "red"
           }
  }

  const navbarItems = document.querySelectorAll('.bottom-navbar__item');

      const indicator = document.querySelector('.bottom-navbar__indicator');

      navbarItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          navbarItems.forEach((eachItem) =>
            eachItem.classList.remove('active')
          );
          item.classList.add('active');

          const parentWidth = item.parentElement.clientWidth;
          const leftMargin = (parentWidth / navbarItems.length) * index;
          indicator.style.left = leftMargin + 'px';
        });
      });

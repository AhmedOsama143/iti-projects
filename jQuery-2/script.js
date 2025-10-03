// task side bar
let isOpen = false;

$("#toggle-icon").click(function () {
  if (isOpen) {
    $("#sidebar").animate({ right: "-200px" }, 400);
    isOpen = false;
    $("#toggle-icon").html("<i class='fa-solid fa-bars'></i>");
  } else {
    $("#sidebar").animate({ right: "0" }, 400);
    isOpen = true;
    $("#toggle-icon").html("<i class='fa-regular fa-circle-xmark'></i>");
  }
});

// posts
let posts = [];
let Count = 10;

$.get("https://jsonplaceholder.typicode.com/posts", function (data) {
  posts = data;
  displayPosts(posts.slice(0, Count));
});

function displayPosts(list) {
  $("#posts").empty();
  $.each(list, function (index, post) {
    $("#posts").append(`
            <div class="card">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `);
  });
}

$("#loadMore").click(function () {
  Count += 10;
  displayPosts(posts.slice(0, Count));
  if (Count >= posts.length) {
    $(this).hide();
  }
});

$("#search").on("keyup", function () {
  let keyword = $(this).val().toLowerCase();
  let filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(keyword)
  );
  displayPosts(filtered.slice(0, Count));
});

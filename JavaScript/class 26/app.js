var allPosts = JSON.parse(localStorage.getItem('posts')) || [];

function uploadPosts() {
    var postId = document.querySelector("#pid").value;
    var postName = document.querySelector("#pname").value;
    var postImage = document.querySelector("#pimage").files[0];

    if (!postId || !postName || !postImage) {
        alert("Please fill all fields!");
        return;
    }

    var reader = new FileReader();

    reader.onloadend = function () {
        var post = {
            pid: postId,
            pname: postName,
            pimage: reader.result // base64 image
        };

        allPosts.push(post);
        localStorage.setItem('posts', JSON.stringify(allPosts));

        // Clear inputs
        document.querySelector("#pid").value = '';
        document.querySelector("#pname").value = '';
        document.querySelector("#pimage").value = '';

        alert("Post uploaded!");
    };

    reader.readAsDataURL(postImage); 
}

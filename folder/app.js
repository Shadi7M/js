const fetchData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data);
    print(data)

} 
function print(posts) {
    let listTag = ''
    const list = posts.forEach(post => {
    listTag+= `
    <div id="div">
    <h3 id="title">${post.title}</h3>
    <p>${post.body}</p>
    </div>
    `
    })
    document.getElementById('parent').innerHTML = listTag
    // console.log(listTag);
}
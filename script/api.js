// fetch the catagory from API 
//loaded the catgorise
const loadCatagory = ()=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
    .then(responce => responce.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.log(error));

}
//loaded the videos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(responce => responce.json())
    .then(data => displayVidios(data.videos))
    .catch((error) => console.log(error));

}
//displayCategories for nav btn
const displayCategories = (catagories) =>{
    const loadCatagorySection = document.getElementById('categories');
        catagories.forEach(item => {
        // console.log(item)

        //create element for btn
        const createButtonSection = document.createElement('div');
        createButtonSection.innerHTML = `
        <button class="btn text-xl font-semibold">${item.category}</button>
        `;
        loadCatagorySection.append(createButtonSection);
    })
}

//display All videos
const displayVidios = (videos) =>{
    // console.log(videos)
    videos.forEach(video => {
        console.log(video)

        // create a videos section 
        
    })
}
// fucntion calling area 
loadCatagory();
loadVideos();
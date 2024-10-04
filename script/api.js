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
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`)
    .then(responce => responce.json())
    .then(data => displayVidios(data.videos))
    .catch((error) => console.log(error));
}
const loadCategoriseVideos = (id) => {
    // alert(id)
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(responce => responce.json())
    .then(data => displayVidios(data.category))
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
        <button onclick ="loadCategoriseVideos(${item.category_id})" class="btn text-xl font-semibold">${item.category}</button>
        `;
        loadCatagorySection.append(createButtonSection);
    })
}

//display All videos
const displayVidios = (videos) =>{
    const videoSection = document.getElementById('videos');
    videoSection.innerHTML = '';
    // console.log(videos)
    if (videos.length == 0) {
        videoSection.classList.remove('grid')
        videoSection.innerHTML = `
            <div class= "my-32">
                <img class = "w-44 mx-auto"  src = "./asset/Icon.png" />
                <h2 class="pt-5 text-center text-2xl font-bold"> No Content Here in this Category </h2>
            </div>
        `
        console.log('no more content')
    }
    else {
        videoSection.classList.add('grid')
    }
    console.log(videos.length)
    videos.forEach(video => {
        // console.log(video)
        // create a videos section
        const createVideoSContainer = document.createElement('div');
        createVideoSContainer.classList = ('card card-compact')
        createVideoSContainer.innerHTML = `
        <figure class = "h-[270px] object-cover">
            <img class="w-full h-full"
            src=${video.thumbnail}
            alt="video Thumbanail" />
        </figure>
        <div class="flex my-2">
            <div>
                <img class = "h-10 w-10 rounded-full"
                 src=${video.authors[0].profile_picture} />
            </div>
            <div>
                <h2 class = "pl-2 text-2xl font-bold ">${video.title}</h2>
                <div class = "flex items-center pl-2">
                    <h2 class = "text-lg text-gray-700 ">${video.authors[0].profile_name}</h2>
                    ${video.authors[0].verified == true ? `<img class = "h-5 w-5 ml-1" src ="./asset/verify.png" />`: ""}
                </div>
                

            </div>
        </div>
        `;
        videoSection.append(createVideoSContainer);
    })
}
// fucntion calling area 
loadCatagory();
loadVideos();

// {
//     "category_id": "1003",
//     "video_id": "aaaj",
//     "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
//     "title": "Kid Gorgeous",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
//             "profile_name": "John Mulaney",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "241K",
//         "posted_date": ""
//     },
//     "description": "John Mulaney's 'Kid Gorgeous' has captured the hearts of many with 241K views. As a verified comedian, John delivers a masterclass in stand-up with clever anecdotes, quick wit, and relatable humor. This performance is a laugh-filled adventure through his unique take on life, politics, and pop culture."
// }
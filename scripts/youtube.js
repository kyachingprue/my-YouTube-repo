//Load Categories
function timeCount(time) {
  const hours = parseInt (time / 3600);
  const hourMinute = time % 3600;
  const minutes = parseInt(hourMinute / 60);
  const second = hourMinute % 60;
  return `${hours} h: ${minutes} m: ${second} second ago`;
}
const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
  .catch(error => console.error(error))
}
// Videos container property--------
const loadVideos = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideos(data.videos))
  .catch(error => console.error(error))
}
//  "category_id": "1001",
//       "video_id": "aaaa",
//       "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//       "title": "Shape of You",
//       "authors": [
//         {
//           "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//           "profile_name": "Olivia Mitchell",
//           "verified": ""
//         }
//       ],
//       "others": {
//         "views": "100K",
//         "posted_date": "16278"
const displayVideos = (videos) => {
  console.log(videos)
  const videoContainer = document.getElementById('video-container');
  videos.forEach((video) => {
    
    const div = document.createElement('div');
    div.classList = 'card card-compact';
    div.innerHTML = `
    <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
      ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black text-white rounded-lg text-sm">${timeCount(video.others.posted_date)}</span>`}
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex gap-2 items-center">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified === true ? '<img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>' : ""}
    </div>
    <p class="text-gray-400">${video.others.views} views</p>
    
    
    </div>
  </div>
    
    `
    videoContainer.append(div);
  })
}

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById('btn-category')
 
  categories.forEach((item) => {
    console.log(item)

    const button = document.createElement('button');
    button.classList = 'btn bg-green-700 hover:bg-orange-800 text-white';
    button.innerText = item.category;

    categoryContainer.append(button);
  })


}

loadCategories();

loadVideos();
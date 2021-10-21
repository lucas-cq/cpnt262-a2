// Initial Array containing images
const carPictures = [
  {
    id: 1,
    title: 'Ferrari 862',
    description: 'A Red Ferrari in a garage',
    width: 400,
    height: 267,
    pathURL: 'assets/images/ferrari-rear.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Ferrari',
    credit: 'Alistair Smith',
    creditURL: 'https://unsplash.com/photos/fxliDZFt-qY'
  },
  {
    id: 2,
    title: 'Ford Mustang',
    description: 'A Grey Mustang in a parking lot',
    width: 400,
    height: 267,
    pathURL: 'assets/images/mustang-shelby.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Ford_Mustang',
    credit: 'Joey Banks',
    creditURL: 'https://unsplash.com/photos/YApiWyp0lqo'
  },
  {
    id: 3,
    title: 'Ferrari Speedtail',
    description: 'A Red Ferrari in a showroom',
    width: 400,
    height: 267,
    pathURL: 'assets/images/ferrari-front.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Ferrari',
    credit: 'Joshua Koblin',
    creditURL: 'https://unsplash.com/photos/eqW1MPinEV4'
  },
  {
    id: 4,
    title: 'Lamborghini Huracan',
    description: 'A yellow lambo in the snowy streets',
    width: 400,
    height: 267,
    pathURL: 'assets/images/lamborghini.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Lamborghini',
    credit: 'Matt Antonioli',
    creditURL: 'https://unsplash.com/photos/T_ZdgxzPS5k'
  },
  {
    id: 5,
    title: 'Chevy Camaro',
    description: 'A Blue camaro in the desert',
    width: 400,
    height: 267,
    pathURL: 'assets/images/camaro.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Chevrolet_Camaro',
    credit: 'Stefan Rodriguez',
    creditURL: 'https://unsplash.com/photos/2AovfzYV3rc'
  },
  {
    id: 6,
    title: 'BMW M2',
    description: 'A BMW M2 on the beach',
    width: 400,
    height: 267,
    pathURL: 'assets/images/bmw-m2.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/bmw',
    credit: 'Tyler Clemmensen',
    creditURL: 'https://unsplash.com/photos/wLpTPp2dzsY'
  },
  {
    id: 7,
    title: 'Mercedes AMG GT',
    description: 'A maroon mercedes in the streets',
    width: 400,
    height: 267,
    pathURL: 'assets/images/mercedes.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/mercedes-benz',
    credit: 'Håkon Sataøen',
    creditURL: 'https://unsplash.com/photos/qyfco1nfMtg'
  },
  {
    id: 8,
    title: 'Generations',
    description: 'A generation of bmws in a line',
    width: 400,
    height: 267,
    pathURL: 'assets/images/bmw-collection.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/bmw',
    credit: 'Alex Supran',
    creditURL: 'https://unsplash.com/photos/A53o1drQS2k'
  },
  {
    id: 9,
    title: 'McLaren 720S',
    description: 'A grey mclaren in a village',
    width: 400,
    height: 267,
    pathURL: 'assets/images/mclaren.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/mclaren',
    credit: 'Olav Tvedt',
    creditURL: 'https://unsplash.com/photos/6lSBynPRaAQ'
  }
];
//Output starts with nothing
let output = '';

//forEach loop that applies to all images in the array
carPictures.forEach(function(carId){
  output += 
  `<figure class="img-box">
  <img class="gallery-img" src="${carId.pathURL}" alt="${carId.description}" width="${carId.width}" height="${carId.height}">
  <figcaption><em><a href="${carId.linkURL}">${carId.title}</a></em><br><a href="${carId.creditURL}">@${carId.credit} on Unsplash</a></figcaption>
  </figure>`
});

// Selects the div, and outputs the forEach loop onto HTML
const gallery = document.querySelector('.wrapper');
gallery.innerHTML = output;
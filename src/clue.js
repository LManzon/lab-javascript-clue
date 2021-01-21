// ITERATION 1

// Suspects Collection

const suspect1 = {
firstName: "Jacob",
lastName: "Green",
occupation: "Entrepreneur",
age: 45,
description: "He has a lot of connections",
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
color: "green",
};

const suspect2 = {
firstName: "Doctor",
lastName: "Orchid",
occupation: "Scientist",
age: 26,
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "white",
};

const suspect3 = {
firstName: "Victor",
lastName: "Plum",
occupation: "Designer",
age: 22,
description: "Billionaire video game designer",
image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
color: "purple",
};

const suspect4 = {
firstName: "Kasandra",
lastName: "Scarlet",
occupation: "Actor",
age: 31,
description: "She is an A-list movie star with a dark past",
image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "red",
};

const suspect5 = {
firstName: "Eleanor",
lastName: "Peacock",
occupation: "Socialité",
age: 36,
description: "She is from a wealthy family and uses her status and money to earn popularity",
image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
color: "blue"
};

const suspect6 = {
firstName: "Jack",
lastName: "Mustard",
occupation: "Retired Football player",
age: 62,
description: "He is a former football player who tries to get by on his former glory",
image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
color: "yellow",
};

const suspectsArray = [suspect1, suspect2, suspect3, suspect4, suspect5, suspect6];


// Rooms Collection

const room1 = {
    name: "Dining Room",
};

const room2 = {
    name: "Conservatory",
};

const room3 = {
    name: "Kitchen",
};

const room4 = {
    name: "Study",
};

const room5 = {
    name: "Library",
};

const room6 = {
    name: "Billiard Room",
};

const room7 = {
    name: "Lounge",
};

const room8 = {
    name: "Ballroom",
};

const room9 = {
    name: "Hall",
};

const room10 = {
    name: "Spa",
};

const room11 = {
    name: "Living Room",
};

const room12 = {
    name: "Observatory",
};

const room13 = {
    name: "Theater",
};

const room14 = {
    name: "Guest House",
};

const room15 = {
    name: "Patio",
};


const roomsArray = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15];

// Weapons Collection

weapon1 = {
    name: 'rope',
    weight: 10,
};

weapon2 = {
    name: 'knife',
    weight: 8,
};

weapon3 = {
    name: 'candlestick',
    weight: 2,
};

weapon4 = {
    name: 'dumbbell',
    weight: 30,
};

weapon5 = {
    name: 'poison',
    weight: 2,
};

weapon6 = {
    name: 'axe',
    weight: 15,
};

weapon7 = {
    name: 'bat',
    weight: 13,
};

weapon8 = {
    name: 'trophy',
    weight: 25,
};

weapon9 = {
    name: 'pisto;',
    weight: 20,
};

const weaponsArray = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9];

// ITERATION 2

function selectRandom (array) {
    if (array.length === 0) {
        return undefined;
    }
    return array[Math.floor(Math.random()*array.length)];
}

function pickMystery () {
    let mystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray),
    }
    return mystery;
}

// ITERATION 3

function revealMystery (envelope){
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
  };
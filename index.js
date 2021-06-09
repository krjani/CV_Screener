console.log('this is my CV screener');
// here we use randomuser.me api for image & all data

// Array of object which contain information about candidate
const data = [
    {
        name: 'kishan R jani',
        age: 21,
        city: 'surat',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/28.jpg'
    },
    {
        name: 'priyanka A hirpara',
        age: 20,
        city: 'Mumbai',
        language: 'Java',
        framework: 'Spring',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Naimish D sorathiya',
        age: 32,
        city: 'Godhra',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
        name: 'Disha H Agrawat',
        age: 24,
        city: 'Benglore',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
        name: 'hardip K jani',
        age: 45,
        city: 'Rajkot',
        language: 'Go',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
    {
        name: 'Jagruti V savaliya',
        age: 18,
        city: 'surat',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/6.jpg'
    }
];

// CV Iterator

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
const candidates = cvIterator(data);
nextCV();
// Button Listener for 'Next'Button

const next = document.getElementById('next');
next.addEventListener('click', nextCV);

// candidates gives object.so we use next() for getting data.
function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item">${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                                <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
                        </ul> `

            }
            else{
                alert('End of Application');
                window.location.reload();
            }
}
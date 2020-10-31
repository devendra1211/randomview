
const data = [
    {
        name: 'Pikachu',
        age: 20,
        gender: 'Male',
        city: 'Indore',
        language: 'Python, JS',
        framework: 'django, React',
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQvpxDiea3Jp_AIWYAL_tudsQSm9CsnPT_lw&usqp=CAU`
    },
    {
        name: 'Abhishek',
        age: 26,
        gender: 'Male',
        city: 'Timarni',
        language: 'Go',
        framework: 'Go',
        image: `https://randomuser.me/api/portraits/men/1.jpg`
    },
    {
        name: 'Devendra',
        age: 25,
        gender: 'Male',
        city: 'Timarni',
        language: 'C++',
        framework: '.NET',
        image: `https://randomuser.me/api/portraits/men/2.jpg`
    },
    {
        name: 'Mayank',
        age: 21,
        gender: 'Male',
        city: 'Timarni',
        language: 'php',
        framework: 'Laravel',
        image: `https://randomuser.me/api/portraits/men/3.jpg`
    },
    {
        name: 'Amit',
        age: 20,
        gender: 'Male',
        city: 'Timarni',
        language: 'mySQL DB',
        framework: 'PostgreSql',
        image: `https://randomuser.me/api/portraits/men/4.jpg`
    },

    {
        name: 'Ankurita',
        age: 22,
        gender: 'Female',
        city: 'Timarni',
        language: 'Java',
        framework: null,
        image: `https://randomuser.me/api/portraits/women/7.jpg`
    },
]


//CV Itrerator

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: () => {
            //turnery operator 
            // ? shows condition 
            // : shows if setified ie., true
            // and if not then after : statement will work for false condition 
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}

const candidate = cvIterator(data);

nextCV();

//Button listener
let next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidate.next().value;

    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {
        profile.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                            <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="${currentCandidate.image}" class="card-img py-auto my-auto" alt="${currentCandidate.name}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">${currentCandidate.name}</h5>
                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                        <th scope="row">Age</th>
                                        <td>${currentCandidate.age}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Gender</th>
                                        <td>${currentCandidate.gender}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">City</th>
                                        <td>${currentCandidate.city}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Language</th>
                                        <td>${currentCandidate.language}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Framework</th>
                                        <td>${currentCandidate.framework}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            </div>
                        </div>`
    }
    else{
        alert('End of Candidate Application');
        window.location.reload();
    }
}

// Array of freelancers
const freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 },
    { name: 'Carol', occupation: 'Programmer', startingPrice: 70 }
];

// Function to display freelancers
function displayFreelancers() {
    let freelancerList = document.getElementById('freelancer-list');
    freelancerList.innerHTML = ''; // Clear the list first

    for (let i = 0; i < freelancers.length; i++) {
        let freelancer = freelancers[i];
        let freelancerInfo = freelancer.name + ' - ' + freelancer.occupation + ' - $' + freelancer.startingPrice;
        let freelancerDiv = document.createElement('div');
        freelancerDiv.innerText = freelancerInfo;
        freelancerList.appendChild(freelancerDiv);
    }
}

// Function to calculate and show the average price
function calculateAveragePrice() {
    let total = 0;

    for (let i = 0; i < freelancers.length; i++) {
        total += freelancers[i].startingPrice;
    }

    let averagePrice = total / freelancers.length;
    document.getElementById('average').innerText = averagePrice.toFixed(2);
}

// Function to add a new freelancer
function addFreelancer() {
    let newFreelancers = [
        { name: 'Dave', occupation: 'Designer', startingPrice: 60 },
        { name: 'Eva', occupation: 'Engineer', startingPrice: 80 }
    ];

    let randomFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
    freelancers.push(randomFreelancer);

    displayFreelancers();
    calculateAveragePrice();
}

// Initial display of freelancers and average price
displayFreelancers();
calculateAveragePrice();

// Add a new freelancer every 5 seconds
setInterval(addFreelancer, 5000);

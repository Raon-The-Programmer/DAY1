const resumeData = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "address": {
      "city": "New York",
      "country": "USA"
    },
    "education": [
      {
        "degree": "Bachelor of Science",
        "major": "Computer Science",
        "university": "University of XYZ",
        "year": 2015
      },
      {
        "degree": "Master of Business Administration",
        "major": "Finance",
        "university": "ABC Business School",
        "year": 2017
      }
    ],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Corp",
        "startDate": "2017-01-01",
        "endDate": "2020-12-31",
        "responsibilities": ["Developed web applications", "Collaborated with cross-functional teams"]
      },
      {
        "position": "Product Manager",
        "company": "Startup Inc",
        "startDate": "2021-01-01",
        "endDate": "Present",
        "responsibilities": ["Defined product roadmap", "Led product development initiatives"]
      }
    ]
  }


  // Using for loop
console.log("Using for loop:");
for (let i = 0; i < resumeData.education.length; i++) {
  console.log(resumeData.education[i]);
}

// Using for-in loop
console.log("Using for-in loop:");
for (let key in resumeData.address) {
  console.log(key + ": " + resumeData.address[key]);
}

// Using for-of loop
console.log("Using for-of loop:");
for (let experience of resumeData.experience) {
  console.log(experience);
}


// Using forEach loop
console.log("Using forEach loop:");
resumeData.experience.forEach(experience => {
  console.log(experience);
});

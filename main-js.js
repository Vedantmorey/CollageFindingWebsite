document.getElementById('searchButton').addEventListener('click', function() {
    const interest = document.getElementById('interest').value;
    const location = document.getElementById('location').value;

    if (interest && location) {
        searchColleges(interest, location);
    } else {
        alert('Please fill in both fields.');
    }
});

function searchColleges(interest, location) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; 
    resultsContainer.style.opacity = '0';
    const simulatedResults = [


        // Mumbai Colleges
        { name: 'Indian Institute of Technology, Bombay', interest: 'Engineering', location: 'Mumbai', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        { name: 'University of Mumbai', interest: 'Arts', location: 'Mumbai', image: 'universityofmumbai.jpeg', description: 'Offers a variety of programs in arts and humanities.' },

        { name: 'St. Xavier’s College', interest: 'Commerce,Engineering', location: 'Mumbai', image: 'xtmumbai.jpeg', description: 'Renowned for commerce and arts programs.' },

        { name: 'Tata Institute of Social Sciences', interest: 'Social Science,engineering,arts,science,law,management', location: 'Mumbai', image: 'tatapic.jpg', description: 'Premier institute for social sciences and humanities.' },

        { name: 'KJ Somaiya College of Engineering', interest: 'Engineering', location: 'Mumbai', image: 'kjpic.jpeg', description: 'Highly regarded for engineering programs.' },


        // Pune Colleges
        { name: 'Fergusson College', interest: 'Science,engineering', location: 'Pune', image: 'fergussionpune.jpg', description: 'One of the oldest science colleges in Pune.' },

        { name: 'SP College', interest: 'Commerce,Arts,Engineering,scienece', location: 'Pune', image: 'spPune.jpeg', description: 'Popular for commerce and arts programs.' },

        { name: 'MIT College of Engineering', interest: 'Engineering,science', location: 'Pune', image: 'mitpune.jpeg', description: 'Offers comprehensive engineering programs.' },

        { name: 'Symbiosis Institute of Management Studies', interest: 'Management,engineering', location: 'Pune', image: 'symbiosispune.jpeg', description: 'Top choice for management studies.' },

        { name: 'Bharati Vidyapeeth', interest: 'Medical', location: 'Pune', image: 'bharatipune.jpeg', description: 'Known for its medical and dental programs.' },

        { name: 'G. H. Raisoni College of Engineering amf Management,Pune.', interest: 'Engineering,management,science', location: 'Pune', image: 'raisonipune.jpeg', description: ' G H Raisoni International Skill Tech University, Pune is a globally renowned Center of Excellence in education, research, skills, and innovation.' },

        { name: 'D Y PATIL COLLEGE OF ENGINEERING AKURDI, PUNE', interest: 'Medical,management,Science', location: 'Pune', image: 'dypatilpune.jpeg', description: 'D Y Patil College of Engineering, Pune, is a prominent institution known for its comprehensive engineering programs, state-of-the-art infrastructure, and focus on practical learning and placements.' },



        // Yavatmal Colleges
        { name: 'Government College of Engineering, Yavatmal', interest: 'Engineering', location: 'Yavatmal', image: 'GovYtl.jpeg', description: 'Offers various engineering courses in Yavatmal.' },

        { name: 'Shri Vasantrao Naik Government Medical College', interest: 'Medical', location: 'Yavatmal', image: 'naikYtl.jpeg', description: 'Known for medical programs and research facilities.' },
        

        // Wardha Colleges
        { name: 'Institute of Management Studies and Research', interest: 'Management,medical,engineering', location: 'Wardha', image:'dattameghewardha.png', description: 'Renowned for management programs.' },
        
        { name: 'Mahatma Gandhi Institute of Medical Sciences', interest: 'Medical,engineering', location: 'Wardha', image: 'wardhaMG.jpeg', description: 'Premier medical institute in Wardha.' },
       
        { name: 'Agnihotri College of Engineering', interest: 'Education,engineering', location: 'Wardha', image: 'wardhaagnihotriclg.jpeg', description: 'Focuses on teacher training and educational studies.' },


        // Amravati Colleges
        { name: 'Dr. Panjabrao Deshmukh Krishi Vidyapeeth', interest: 'Agriculture,engineering', location: 'Amravati', image: 'panjabraoamaravati.jpeg', description: 'Specializes in agricultural education and research.' },
       
        { name: 'Vidarbha Institute of Science and Humanities', interest: 'Science,arts,commerce,management,engineering', location: 'Amravati', image: 'vidharbhaamravati.jpeg', description: 'Offers courses in science and humanities.' },
        
        { name: 'Shree Shivaji College of Arts, Commerce, and Science', interest: 'Commerce,Arts,Science,engineering', location: 'Amravati', image: 'shivajiclgAmravati.jpeg', description: 'Provides a variety of programs in arts, commerce, and science.' },

        { name: 'G. H. Raisoni University,Amravati.', interest: 'Engineering,management,science', location: 'Amravati', image: 'ghruaamravati.jpeg', description: ' H Raisoni University, Amravati is a vibrant community of academicians and learners that helps students to choose and succeed in the field of their choice.' },

      
        // Jalgaon Colleges
        { name: 'North Maharashtra University', interest: 'Science,arts,commerce,engineering', location: 'Jalgaon', image: 'jadgaonuniversity.jpeg', description: 'Diverse science programs in Jalgaon.' },

        { name: 'SSBT College of Engineering', interest: 'Engineering,science,arts,commerce,science,management', location: 'Jalgaon', image: 'ssbtjadgaon.jpeg', description: 'Known for engineering studies.' },

        { name: 'Jalgaon Medical College', interest: 'Medical,science', location: 'Jalgaon', image: 'jadgaonmedicalclg.jpeg', description: 'Offers a range of medical courses and facilities.' },

        { name: 'G. H. Raisoni institute of Business Management.', interest: 'Engineering,management,science', location: 'Jalgaon', image: 'raisonigalgaon.jpeg', description: 'Well-regarded for engineering and technical courses.' },


        
        // Nagpur city.
        { name: 'Visvesvaraya National Institute of Technology', interest: 'Engineering,science,arts,social scienece', location: 'Nagpur', image: 'vnitNagpur.jpeg', description: 'Top engineering college in central India.' },

        { name: 'PRIYADARSHINI COLLEGE OF ENGINEERING', interest: 'Arts,engineering', location: 'Nagpur', image: 'priyadarshaninagpur.jpeg', description: 'Priyadarshini Institute of Engineering and Technology, Nagpur, is a well-regarded engineering college offering diverse technical programs with a focus on innovation, research, and career-oriented education.' },

        { name: 'G. H. Raisoni College of Engineering', interest: 'Engineering,management,science', location: 'Nagpur', image: 'raisoninagpur.jpeg', description: 'Well-regarded for engineering and technical courses.' },

        { name: 'Yeshwantrao Chavan College of Engineering,Nagpur.', interest: 'Arts,engineering', location: 'Nagpur', image: 'ycce.jpeg', description: 'Yeshwantrao Chavan College of Engineering (YCCE) in Nagpur is a premier engineering institution known for its quality technical education, industry-oriented programs, and strong placement support.' },
         
        { name: 'Rashtrasant Tukadoji Maharaj Nagpur University', interest: 'Arts,engineering,science,commerce,law', location: 'Nagpur', image: 'rastrasanttukadoji.jpeg', description: 'Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU) is a renowned public university in Nagpur, offering diverse undergraduate, postgraduate, and research programs across fields like science, engineering, arts, commerce, and law.' },

        { name: 'G H Raisoni Institute of Engineering and Technology, Nagpur', interest: 'Arts,engineering,science,commerce,law', location: 'Nagpur', image: 'raisoniwadi.jpeg', description: 'G H Raisoni Institute of Engineering and Technology (GHRIET), Nagpur, is a reputed engineering college offering industry-focused undergraduate and postgraduate programs with strong emphasis on research, innovation, and employability.' },


        // Kolhapur City.
        { name: 'Shivaji University', interest: 'Arts,Engineering,Science,', location: 'Kolhapur', image: 'shivajikolhapur.jpeg', description: 'Offers arts and humanities programs.' },

        { name: 'D. Y. Patil College of Engineering', interest: 'Engineering,science,', location: 'Kolhapur', image: 'dypatilkolhapur.jpeg', description: 'Provides a range of engineering programs.' },

        { name: 'Kolhapur Institute of Technology', interest: 'Science,engineering', location: 'Kolhapur', image: 'kitskolhapur.jpeg', description: 'Known for courses in science and technology.' },

        // Chandrapur City
        { name: 'Sau.Leena Kishor Mamidwar Institute of Management, Chandrapur', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Chandrapur', image: 'sau.leena.chandrapur.jpeg', description: 'Premier institute for engineering and technology.' },
        
        { name: 'SPM, Chandrapur', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Chandrapur', image: 'spm.chandrapur.jpeg', description: 'Premier institute for engineering and technology.' },

        { name: 'Anand Niketan College of Agriculture, Chandrapur', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Chandrapur', image: 'anandchandrapur.jpeg', description: 'Premier institute for engineering and technology.' },

        { name: 'GCE, Chandrapur', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Chandrapur', image: 'gcechandrapur.jpeg', description: 'Premier institute for engineering and technology.' },

        //Akola
        { name: 'Shri Shivaji College of Arts Commerce and Science, Akola', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Akola', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        
        { name: 'PDKV,Akola', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Akola', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        
        { name: 'Shankarlal Khandelwal Arts,Science and Commerce,Akola', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Akola', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        
        { name: 'Raje Laxamansingh Bhonsale College of Pharmacy,Akola', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Akola', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        //Nanded
        { name: 'SGGSIE&T, Nanded', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Nanded', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        
        { name: 'Mahatma Gandhi Mission College of Engineering,Nanded', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Nanded', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        
        { name: 'MPGI,Nanded', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Nanded', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        
        { name: 'Gramin College of Engineering,Nanded', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Nanded', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        //Shegaon
        { name: 'Shri Sant Gajanan Maharaj College of Engineering,Shegaon', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Shegaon', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        
        { name: 'Sadhana Shikshan Mandals Saraswati College,Shegaon', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Shegaon', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },

        
        { name: 'G.S.Science,Arts And Commerce,Shegaon', interest: 'Engineering,Commerce,Arts,Science,management', location: 'Shegaon', image: 'iitbombay.png', description: 'Premier institute for engineering and technology.' },
        



    ];

    const filteredResults = simulatedResults.filter(college =>
        college.interest.toLowerCase().includes(interest.toLowerCase()) &&
        college.location.toLowerCase().includes(location.toLowerCase())
    );

    if (filteredResults.length > 0) {
        resultsContainer.style.opacity = '1';
        filteredResults.forEach(college => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `
                <img src="${college.image}" alt="${college.name}" />
                <h3>${college.name}</h3>
                <p>${college.description}</p>
            `;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.style.opacity = '1';
        resultsContainer.textContent = 'No colleges found matching your criteria.';
    }
}

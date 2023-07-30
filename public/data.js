const data = {
    name: "Ayush Gola",
    tagline: "I am a website developer!",
    summary:
    "I  a visionary, self motivated electronics student with a passion for technology and problem-solving, seeking to transition into the field of Software Engineering. Committed to leveraging my solid foundation in electronics and programming skills to contribute to innovative software solutions and drive advancements in the tech industry.",
    experience: [
        {
            id: "okaya",
            name: "Okaya-Ev",
            logo: "/logo/okaya.png",
            link: "https://okayaev.com//",
            post: "Web Developer",
            type: "Internship",
            start: "August 2022",
            end: "Sept 2022",
            duration: "1 month",
            points: [
                "Worked on different Ev-website projects.",
               // "Designed the UI using XML as per provided Figma designs.",
               // "Developed android apps, added functionalities and fixed bugs.",
            ],
        },
       /* {
            id: "criada_2",
            name: "Criada",
            logo: "/logo/criada.webp",
            link: "https://www.criada.in/",
            post: "Full Stack Developer",
            type: "Internship",
            start: "Dec 2021",
            end: "Jan 2022",
            duration: "2 months",
            points: [
                "Worked on various projects based on the MERN stack.",
                "Designed webpages as per provided Figma designs.",
                "Programmed REST APIs using ExpressJS for the backend.",
            ],
        },*/
      
    ],
    projects: [
        {
            id: "weba",
            type: "Web Applications",
            projects: [
                {
                    id: "logi_web",
                    link: "/project/logi_web",
                    name: "Logic Gates",
                    logo: "/logo/logic_gates.webp",
                    cover: "/image/logic_gates_1.webp",
                    screenshots: [
                        "/image/logic_gates_1.webp",
                        "/image/logic_gates_2.webp",
                        "/image/logic_gates_3.webp",
                    ],
                    tools: ["HTML", "CSS", "JavaScript"],
                    links: [
                       /* {
                            id: "web",
                            name: "Website",
                            link: "https://chirag1910.github.io/logicGates/",
                            download: false,
                            icon: "/icon/redirect.webp",
                        },
                        {
                            id: "git",
                            name: "Github",
                            link: "https://github.com/chirag1910/logicGates",
                            download: false,
                            icon: "/icon/github.webp",
                        },*/
                    ],
                    features: [
                        "Logic gates as the name suggests, features various gates like OR, NOT, AND, XOR, etc.",
                        "Users can check information about the logic gate, visualize their working and look up the truth table.",
                    ],
                },
                {
                    id: "hang_web",
                    link: "/project/hang_web",
                    name: "Hangman",
                    logo: "/logo/hangmanlogo.jpg",
                    cover: "/image/hangman1.jpg",
                    screenshots: [
                        "/image/hangman1.jpg",
                        "/image/hangman2.jpg",
                        "/image/hangman3.jpg",
                    ],
                    tools: ["HTML", "CSS", "JavaScript"],
                    links: [
                        {
                            id: "web",
                            name: "Website",
                            link: "https://hangmanbyag.netlify.app/",
                            download: false,
                            icon: "/icon/redirect.webp",
                        },
                      /*  {
                            id: "git",
                            name: "Github",
                            link: "https://github.com/chirag1910/logicGates",
                            download: false,
                            icon: "/icon/github.webp",
                        },*/
                    ],
                    features: [
                        "A word game in which one player has to guess a word that the other player has thought of, by guessing the letters in it.",
                        "Every time they guess a wrong letter, part of a picture of a person being hanged is drawn.",
                    ],
                },
            ],
        },
        
        /*{
            id: "weba",
            type: "Web Applications",
            projects: [
                {
                    id: "cine_web",
                    link: "/project/cine_web",
                    name: "Cinehub",
                    logo: "/logo/cinehub.webp",
                    cover: "/image/cinehub_1.webp",
                    screenshots: [
                        "/image/cinehub_1.webp",
                        "/image/cinehub_2.webp",
                        "/image/cinehub_3.webp",
                        "/image/cinehub_4.webp",
                        "/image/cinehub_5.webp",
                    ],
                    tools: ["NextJS", "ExpressJS"],
                    links: [
                        {
                            id: "web",
                            name: "Website",
                            link: "https://cinehubb.vercel.app/",
                            download: false,
                            icon: "/icon/redirect.webp",
                        },
                    ],
                    features: [
                        "The Cinehub website is an information-based, social platform that serves users information regarding millions of TV Shows, Movies, and their casts & crew.",
                        "Users can look for trending TV Shows and movies or discover from millions based on the genres, release date, language, rating, etc.",
                        "The media description page shows all the information about the particular movie from information like release date, crew, and cast to revenue generated or details of every episode for a TV show to their trailers and where they can watch them.",
                        "Additionally, users can add any show or movie to the list and give them tags like planning to watch, watching, completed, etc. They can also create a favourites list.",
                        "Furthermore, users can add friends keep track of what their friends are up to, look up their favourite shows, etc.",
                        "Other than that, Users can also checkpoint episodes of any TV Show thus, helping keep track of them. The website also has an adult filter on the setting's page to filter out explicit content.",
                        "Also, the website has a dynamic theming engine that lets users choose any colour of their preference for the website. It can even dynamically change the colour of the webpage on the basis of content.",
                    ],
                },
                {
                    id: "link_web",
                    link: "/project/link_web",
                    name: "LinkIt",
                    logo: "/logo/linkit.webp",
                    cover: "/image/linkit_1.webp",
                    screenshots: [
                        "/image/linkit_1.webp",
                        "/image/linkit_2.webp",
                        "/image/linkit_3.webp",
                    ],
                    tools: ["NextJS", "ExpressJS"],
                    links: [
                        {
                            id: "web",
                            name: "Website",
                            link: "https://linkit.vercel.app/",
                            download: false,
                            icon: "/icon/redirect.webp",
                        },
                        {
                            id: "git",
                            name: "Github",
                            link: "https://github.com/chirag1910/linkitWeb",
                            download: false,
                            icon: "/icon/github.webp",
                        },
                    ],
                    features: [
                        "LinkIt is a platform that allows users to create link groups and shorten long URLs, both in one place.",
                        "URL group sharing: Let users create a public group containing the URLs and share all of them with just one link. Users can also create a private group to store URLs in one place.",
                        "Shorten URL: Let users shorten a long URL to just six characters. Add the original links in the group and get a short shareable link.",
                        "Interactive & simple UI: Modern and simple design with no intrusive advertisements allowing users to use the web app seamlessly.",
                        "Open source: Users can use the web app without worrying about security issues as the project is open-source and the codebase could be found on the GitHub link.",
                    ],
                },
                {
                    id: "aito_web",
                    link: "/project/aito_web",
                    name: "Ai-Tools",
                    logo: "/logo/ai_tools.webp",
                    cover: "/image/ai_tools_1.webp",
                    screenshots: [
                        "/image/ai_tools_1.webp",
                        "/image/ai_tools_2.webp",
                        "/image/ai_tools_3.webp",
                        "/image/ai_tools_4.webp",
                    ],
                    tools: ["NextJS", "DJango"],
                    links: [
                        {
                            id: "git",
                            name: "Github",
                            link: "https://github.com/chirag1910/ai-tools",
                            download: false,
                            icon: "/icon/github.webp",
                        },
                    ],
                    features: [
                        "AI-Tools contains multiple artificial intelligence tools which are an Animal classifier, Spam detector, Heart disease predictor, and Image OCR",
                        "Animal classifier: It is an image classification tool that classifies images among ten groups which are dog, horse, elephant, butterfly, chicken, cat, cow, sheep, spider, and squirrel.",
                        "Spam detector: It can detect whether the message is spam or not using the Bernoulli Naive Bayes algorithm.",
                        "Heart disease predictor: It can predict whether the person will get any heart disease in the next ten years or not using Logistic Regression.",
                        "Image OCR: It can recognize text from a digital image and serve it as a string.",
                    ],
                },
                {
                    id: "fill_web",
                    link: "/project/fill_web",
                    name: "FillerList",
                    logo: "/logo/fillerlist.webp",
                    cover: "/image/fillerlist_1.webp",
                    screenshots: [
                        "/image/fillerlist_1.webp",
                        "/image/fillerlist_2.webp",
                        "/image/fillerlist_3.webp",
                        "/image/fillerlist_4.webp",
                    ],
                    tools: ["DJango"],
                    links: [
                        {
                            id: "web",
                            name: "Website",
                            link: "https://fillerlist.pythonanywhere.com/",
                            download: false,
                            icon: "/icon/redirect.webp",
                        },
                        {
                            id: "git",
                            name: "Github",
                            link: "https://github.com/chirag1910/fillerlist",
                            download: false,
                            icon: "/icon/github.webp",
                        },
                    ],
                    features: [
                        "'Filler' refers to a story in an Anime that was not in the Manga. These are created because Anime production usually outpaces Manga.",
                        "The FillerList website is an information-based website that serves users information regarding filler episodes of hundreds of anime. Users can get information on the episode type, description, and air date.",
                        "The website has a dark blue theme and a modern user interface that gives a unique aesthetic that users can enjoy while surfing.",
                    ],
                },
                
              
            ],
        },*/
      
    ],
    certificates: [
       /* {
            id: "ai_ibm_1",
            name: "Artificial Intelligence",
            provider: "IBM",
            certificate: "/image/certificate_ibm_ai.webp",
        },
        {
            id: "chatbot_cog_1",
            name: "Building Chatbot",
            provider: "Cognitive Class",
            verification_link:
                "https://courses.cognitiveclass.ai/certificates/917cc396a2c3485f8bf76e488e08b187",
            certificate: "/image/certificate_chatbot.webp",
        },
        {
            id: "problem_solving_1",
            name: "Problem Solving (Basic)",
            provider: "HackerRank",
            verification_link:
                "https://www.hackerrank.com/certificates/a01b4e5b9c70",
            certificate: "/image/certificate_problem_solving_basic.webp",
        },
        {
            id: "python_1",
            name: "Python (Basic)",
            provider: "HackerRank",
            verification_link:
                "https://www.hackerrank.com/certificates/bad9a6962e85",
            certificate: "/image/certificate_python_basic.webp",
        },
        {
            id: "react_1",
            name: "React (Basic)",
            provider: "HackerRank",
            verification_link:
                "https://www.hackerrank.com/certificates/a4fc153d4aa7",
            certificate: "/image/certificate_react_basic.webp",
        }*/,
        {
            id: "javascript_1",
            name: "Javascript (Basic)",
            provider: "HackerRank",
            verification_link:
                "https://www.hackerrank.com/certificates/d38a855e45f3",
            certificate: "/image/javascript_basic certificate (1)_page-0001.jpg",
        },
        {
            id: "css_1",
            name: "CSS",
            provider: "HackerRank",
            verification_link:
                "https://www.hackerrank.com/certificates/c3b216ca132d",
            certificate: "/image/css certificate_page-0001.jpg",
        },
       /* {
            id: "live_the_code_1",
            name: "Live the Code Hackathon",
            provider: "Codechef ADGITM",
            verification_link:
                "https://verification.givemycertificate.com/v/a59e5954-8614-4208-a2b5-302867fa316d",
            certificate: "/image/certificate_live_the_code.webp",
        }*/,
    ],
    skills: [
        /*{
            id: "nextjs",
            name: "NextJS",
            logo: "/logo/nextjs.webp",
        }*/,
       /* {
            id: "python",
            name: "Python",
            logo: "/logo/python.webp",
        }*/,
       
        {
            id: "html",
            name: "HTML",
            logo: "/logo/html.webp",
        },
        {
            id: "css",
            name: "CSS",
            logo: "/logo/css.webp",
        },
        {
            id: "js",
            name: "JavaScript",
            logo: "/logo/js.webp",
        },
       /* {
            id: "react",
            name: "React",
            logo: "/logo/react.webp",
        }*/,
        /*{
            id: "expressjs",
            name: "ExpressJS",
            logo: null,
        }*/,
      
  
    ],
    academics: [
        {
            id: "btech",
            course: "Bachelor's degree, Electronics and Communications Engineering",
            start: 2020,
            end: 2024,
            institute: "Guru Gobind Singh Indraprastha University",
            results: [
                {
                    id: "sem6",
                    title: "6th Semester",
                    score: "Result Awaited",
                },
                {
                    id: "sem5",
                    title: "5th Semester",
                    score: "65.66%",
                },
                {
                    id: "sem4",
                    title: "4th Semester",
                    score: "82.75%",
                },
                {
                    id: "sem3",
                    title: "3rd Semester",
                    score: "79.45%",
                },
                {
                    id: "sem2",
                    title: "2nd Semester",
                    score: "89.75%",
                },
                {
                    id: "sem1",
                    title: "1st Semester",
                    score: "90.077%",
                },
            ],
        },
        {
            id: "12",
            course: "12th Grade",
            start: 2019,
            end: 2020,
            institute: "Himalaya Public Sr Sec School",
            results: [
                {
                    id: "final",
                    //note: 
                    score: "70%",
                },
            ],
        },
        {
            id: "10",
            course: "10th Grade",
            start: 2017,
            end: 2018,
            institute: "Himalaya Public Sr Sec School",
            results: [
                {
                    id: "final",
                  //  note: 
                    score: "72.4%",
                },
            ],
        },
    ],
    contacts: [
        {
            id: "email",
            type: "Email",
            icon: "/icon/email.webp",
            link: "mailto:ayush.gola.ag@gmail.com",
            value: "ayush.gola.ag@gmail.com",
        },
        {
            id: "phone",
            type: "Phone",
            icon: "/icon/phone.webp",
            link: "tel:+918826041097",
            value: "+91 8826041097",
        },
    ],
};

export default data;

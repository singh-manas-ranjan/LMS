import studentRankings, { TStudentRankings } from "./rankingData";

const coursesList: Course[] = [
  {
    courseId: "FGK23R",
    courseName: "The Complete 2024 Web Development BootCamp.",
    author: "Dr.Angel Yu",
    courseRating: "4.5",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328858/card1_o25jg7.jpg",
    coursePrice: 3099,
    isPaidCourse: true,
    aboutCourse:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
    description:
      "Transform into a versatile full-stack web developer with our all-inclusive course. Covering everything from the fundamentals to advanced topics, this course equips you with the skills to build dynamic, modern web applications. Start with the basics of HTML, CSS, and JavaScript to create stunning, interactive web pages. Progress to server-side development with Node.js and harness the power of React to build responsive, user-friendly interfaces. Dive into PostgreSQL for robust database management and explore the future of decentralized technology with Web3 and DApps. Ideal for aspiring developers and tech enthusiasts, this course provides hands-on projects, expert guidance, and a comprehensive learning experience to prepare you for the full stack of web development.",
    courseLink: "https://www.youtube.com/embed/5SXK__rm6DM?si=1K3T2xMPfYJ4Q_lm",
    courseIndex: [
      {
        sectionName: "Introduction to HTML",
        chapterNames: [
          "Installing & Working",
          "First HTML Website",
          "HTML Basic Structure",
          "Heading, Paragraphs, Links",
          "Image, Lists & Tables",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/tVzUXW6siu0?si=qOm3PdCo7O2vUWXg",
          "https://www.youtube.com/embed/kJEsTjH5mVg?si=yxVR6AlhzNLv54k4",
          "https://www.youtube.com/embed/BGeDBfCIqas?si=CIDTMRqpjLj_4JC2",
          "https://www.youtube.com/embed/nXba2-mgn1k?si=WErOBL6aZXd5UiRq",
          "https://www.youtube.com/embed/1BsVhumGlNc?si=twu8FB1P2B04BUHf",
        ],
      },
      {
        sectionName: "Introduction to CSS",
        chapterNames: [
          "What is CSS",
          "Inline, Internal & External CSS",
          "CSS Selectors",
          "CSS Box Model",
          "CSS Fonts, Text & Color",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/1dkfuga2_Ps?si=as0ZsMC6_geSVg-V",
          "https://www.youtube.com/embed/-XwZpYIyCEA?si=jIHJTdVPDvfjA80z",
          "https://www.youtube.com/embed/1cEG1T8beO4?si=w-kI6RM1x8jZxmPE",
          "https://www.youtube.com/embed/Xrxd6cEajhM?si=EK0w3-ZA0Abz2Trg",
          "https://www.youtube.com/embed/aFicd4-YTfo?si=yHMELI0BBysRz7Af",
        ],
      },
      {
        sectionName: "Introduction to JavaScript",
        chapterNames: [
          "What is JavaScript",
          "Variables, DataTypes & Objects",
          "Conditionals",
          "Loops",
          "Functions",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/NrhP53Divco?si=Is1pw4ZettKiG4sZ",
          "https://www.youtube.com/embed/HGCDMJXS1cc?si=dTzLwsO7RMjblC9i",
          "https://www.youtube.com/embed/1R4NGtsj7hw?si=F_xON_bcQ7ARLeid",
          "https://www.youtube.com/embed/y32sWmu-RI4?si=SK7_LsHV1ej7arQD",
          "https://www.youtube.com/embed/Jtc3j4ZNZEQ?si=6nSoFCdh7gviqsC6",
        ],
      },
    ],
    reviews: [
      {
        student: studentRankings[0],
        body: "Very well structured course from basics to more complex programming. Simplified and easy to understand lectures about topics. Also at the end of each module there are challenges that puts newly acquired knowledge to the practice and helps to learn much much quicker. Strongly recommend this course!",
      },
      {
        student: studentRankings[1],
        body: "I really enjoyed this course. It was very well structured and the instructor was very",
      },
      {
        student: studentRankings[2],
        body: "As Angela said in the start that this is the best course for Web development, eventually after learning now I can definitely say that yes this is the best course so far.",
      },
      {
        student: studentRankings[3],
        body: "Dr Angela is the best teacher for web development! My confidence has sky rocketed- she imparts the spirit of the class and a mindset that sets one on taking new challenges and conquering them!",
      },
      {
        student: studentRankings[4],
        body: "This course is for beginners only. This course provide solid foundation of WebDevelopment by great explanations. But many important topics are missing.",
      },
    ],
  },
  {
    courseId: "XH8E9A",
    courseName: "Spring Boot Complete Tutorial",
    author: "Durgesh Tiwari",
    courseRating: "4.7",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328858/card2_pfa9bb.jpg",
    coursePrice: 3099,
    isPaidCourse: true,
    aboutCourse:
      "Spring Boot 3: Learn Spring 6, Spring Core, Spring REST, Spring MVC, Spring Security, Thymeleaf, JPA, Hibernate, MySQL",
    description:
      "Elevate your Java development skills with Mastering Spring Boot 3, a comprehensive course designed to guide you through the latest in Spring technology. Explore Spring Boot 3 and Spring 6 essentials, mastering core concepts like Dependency Injection, Aspect-Oriented Programming, and bean management. Learn to build and secure RESTful APIs, develop dynamic web applications using Spring MVC, and create interactive pages with Thymeleaf. Gain hands-on experience with JPA and Hibernate for efficient database interactions, and manage MySQL databases to integrate seamlessly with your Spring Boot applications. Ideal for Java developers, web developers, and software engineers, this course offers practical projects, expert instruction, and interactive learning to advance your skills in modern software development.",
    courseLink: "https://www.youtube.com/embed/729Pd-ZQ4uA?si=2shFbk4vajERRRgY",
    courseIndex: [
      {
        sectionName: "Overview",
        chapterNames: [
          "How Spring Boot Auto Config. works",
          "How to Start Spring Boot Project",
          "Spring Initializer",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/rVOmSrCSdGE?si=myXuuH_GLlW-HtvU",
          "https://www.youtube.com/embed/GT3Doklq0RY?si=RYcTdQFfZVhFbhxH",
          "https://www.youtube.com/embed/xKuerkzUIF4?si=bpevr06YQWMD2Spz",
        ],
      },
      {
        sectionName: "Download & Installations",
        chapterNames: [
          "Installing STS",
          "Spring Boot is VS Code",
          "Spring Boot in Eclipse",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/6ve91bQgBp4?si=QCxrBMAJ9Cb-CIIf",
          "https://www.youtube.com/embed/UR5fe2H-jIY?si=BiXUUdy0qynyDdSh",
          "https://www.youtube.com/embed/nUzVr6VkO98?si=-ydrsQwIKkyFIjO9",
        ],
      },
      {
        sectionName: "Starting with Spring Boot",
        chapterNames: [
          "JSP View in Spring Boot",
          "Use of application.properties",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/o4qT-OfOYBM?si=7KItGR5HnuK8FSNu",
          "https://www.youtube.com/embed/rGmIJ_o90oQ?si=NWQAtat7y_EuO6v8",
        ],
      },
      {
        sectionName: "Spring Boot JPA",
        chapterNames: [
          "JPA with Spring Boot",
          "JPA Spring Boot Practical",
          "BD Configuration",
          "CRUD Operation using JPA",
          "Custom Find methods",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/agTUJ4aVJSQ?si=QhHlDi9bvF5Sm32o",
          "https://www.youtube.com/embed/1uVACJuZ7CA?si=KDEEG1-dCnqcRvCt",
          "https://www.youtube.com/embed/SkftTBxUUG0?si=fUTlXsWV7vYFvPYq",
          "https://www.youtube.com/embed/uQWYAA7hpVU?si=DqXKd_5_sGiGlwSs",
          "https://www.youtube.com/embed/QeRCW28jhFY?si=fHEEWrjYwJOeYnG7",
        ],
      },
      {
        sectionName: "Introduction to Thymeleaf",
        chapterNames: [
          "Introduction to Thymeleaf",
          "Starting with Thymeleaf",
          "Iteration in Thymeleaf",
          "Conditional Statements",
          "Include, Insert, Replace",
          "Passing Dynamic Value",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/rqQ602S3cdc?si=48tm0do-GwKdKeL6",
          "https://www.youtube.com/embed/CjGZNyR-ME0?si=gu9DaJV5xHHgavzx",
          "https://www.youtube.com/embed/zZrTUsgchpY?si=yU2k_Rf8ZWBhRZha",
          "https://www.youtube.com/embed/pjvCiSFpuas?si=ffhqYX00oPoS0_cu",
          "https://www.youtube.com/embed/H4vWZhPlR70?si=lpLZtU7AE5_j5MmK",
          "https://www.youtube.com/embed/BgzLz3nI3yI?si=o410_67sCJPe6jqu",
        ],
      },
    ],
    reviews: [
      {
        student: studentRankings[4],
        body: "Amazing content along with superb and clear explanation. Overall a very well paced, informative and interesting course.",
      },
      {
        student: studentRankings[3],
        body: "Great balance between theory and practice. Author explains theory in approachable way. Clear graphics and examples. Many variations of examples, step by step. Lot of practice. Solid basics for beginners. Now, I can do more!",
      },
      {
        student: studentRankings[2],
        body: "The course was great, not only helped me learn new things but also tied together all my previous knowledge into a working application. The teacher is easy to understand and clearly has a gift for teaching, though he is a bit too positive for me personally ",
      },
      {
        student: studentRankings[0],
        body: "It's great especially if you're new to spring boot and you just want to understand the basics",
      },
      {
        student: studentRankings[1],
        body: "The teacher has great potential but the amount of useless things (creating a new directory for downloaded resources for example) or repeating the same information a few times has limited the amount of knowledge participants can obtain from this course.",
      },
    ],
  },
  {
    courseId: "PL7C2W",
    courseName: "Selenium WebDriver with Java",
    author: "Pavan Kumar",
    courseRating: "4.6",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328859/card13_wwsp2l.jpg",
    coursePrice: 599,
    isPaidCourse: true,
    aboutCourse:
      '"TOP RATED #1 Master SELENIUM java 4 (Latest) course" -5 Million students learning worldWide with great collaboration',
    description:
      "Join over 5 million students worldwide in mastering Selenium with Java through our top-rated, #1 course. This comprehensive and up-to-date course is designed to equip you with the skills to excel in automated testing. Dive into the latest version of Selenium, learn essential Java programming, and master automation techniques that are crucial for testing web applications. With a focus on real-world applications and collaboration, this course provides expert instruction, hands-on projects, and a supportive learning community. Perfect for both beginners and experienced testers looking to enhance their automation skills and advance their careers.",
    courseLink: "https://www.youtube.com/embed/PLLbGltmkpE?si=BsQ5MaBS0Ls-CI_J",
    courseIndex: [
      {
        sectionName: "Overview",
        chapterNames: ["Selenium with Java Intro."],
        videoLinks: [
          "https://www.youtube.com/embed/8a8wjKKZhSI?si=o897zL3M03MxmtiA",
        ],
      },
      {
        sectionName: "Introduction to Java",
        chapterNames: [
          "Installing JDK & Eclipse",
          "Variables & Data Types",
          "Operators & Expressions",
          "Conditional Statements",
          "Loops & Jump Statements",
          "Working with Arrays",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/R5UFQK0cMSs?si=dnITkd5-CSOIALs1",
          "https://www.youtube.com/embed/OCwXj8jEFYw?si=di1IO7rfd9A5B-mS",
          "https://www.youtube.com/embed/kmb8JE3GUdA?si=YaTZtUjWhAodkbEe",
          "https://www.youtube.com/embed/-Xi7bzi6IcU?si=1ihhoiejHbg_p54V",
          "https://www.youtube.com/embed/3ehenPER6To?si=YqnQ_nhXLbaGBYse",
          "https://www.youtube.com/embed/xX6kS8wDoeQ?si=eHKS4UVBv_m6DdcP",
        ],
      },
      {
        sectionName: "Introduction to Selenium",
        chapterNames: [
          "Introduction & Environment Setup",
          "Locators (ID, Name, Class & Tag)",
          "Locators - CSS Selector",
          "Locators - XPath",
          "Locators - XPath Axes",
          "WebDriver Method",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/cGw2ghKh_eU?si=e4MyO1B227sDVAY8",
          "https://www.youtube.com/embed/VuO7gUmYllY?si=YwH0cFyCFxRXnrs-",
          "https://www.youtube.com/embed/p4-mzToeVbs?si=1V-yQCQgK-oICrvn",
          "https://www.youtube.com/embed/kbmYMeoTg2Q?si=JQBUUHxfTUyfXIFy",
          "https://www.youtube.com/embed/PFGOs0Kbrts?si=cdUOSTppJv_YOCV5",
          "https://www.youtube.com/embed/zNF45se9B4M?si=a4gC5qzTF9c3oQRI",
        ],
      },
    ],
    reviews: [
      {
        student: studentRankings[2],
        body: "Very good course for beginners, and the explanation is also very much clean and clear with materials. I would suggest this course for absolute beginners, who want to make their career in software as a tester.",
      },
      {
        student: studentRankings[1],
        body: "It was very happy to understand the selenium with a good gesture and concepts.",
      },
      {
        student: studentRankings[4],
        body: "I really appreciate his teaching style; it's helped me understand the topics well. However, I think the videos are a bit lengthy, which can sometimes make them overwhelming with information. I would suggest breaking them into shorter videos. Overall, though, I've enjoyed the course and learned a lot. Thank you!",
      },
      {
        student: studentRankings[0],
        body: "This is the best course ,I have seen till today , very good for the beginners who want to learn testing",
      },
      {
        student: studentRankings[3],
        body: "it is best automation course because i have tried may place to learn automation i could not learn qa automation after this complete lecture i recommended it is the word best teacher for qa automation because it is clearly explain every point in depth way",
      },
    ],
  },
  {
    courseId: "QR3B5S",
    courseName: "Python Django",
    author: "Code With Harry",
    courseRating: "4.3",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328858/card4_f4lmcx.jpg",
    coursePrice: 0,
    isPaidCourse: false,
    aboutCourse:
      "Learn Django from scratch, build an E-commerce store, web based PDF generators, APIs using Python &amp; Django",
    description:
      "Unlock the power of web development with Learn Django from Scratch. This course takes you through the essentials of Django, guiding you from foundational concepts to advanced applications. Learn to build dynamic e-commerce stores, create web-based PDF generators, and develop robust APIs using Python and Django. Through hands-on projects and real-world examples, you'll gain practical experience and the confidence to tackle complex web development challenges. Perfect for aspiring developers and those looking to enhance their Python skills, this course offers a comprehensive introduction to Django and its capabilities.",
    courseLink: "https://www.youtube.com/embed/5BDgKJFZMl8?si=B4vChYaJKQX8GwzO",
    courseIndex: [
      {
        sectionName: "Installation & Getting Started",
        chapterNames: [
          "Django Installation",
          "Creating Django Project",
          "How Django Website Works",
          "First Django Website",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/HdoPg2e_m9s?si=dyhqUfF_g0y-wJI1",
          "https://www.youtube.com/embed/weAUmhABjBc?si=VaSGrmPPpcevG2M1",
          "https://www.youtube.com/embed/wU_8jeZRenE?si=kN1-2EVbkO8LCN1a",
          "https://www.youtube.com/embed/FwKJyRQBOQk?si=JVW20onqT0QMjhE7",
        ],
      },
      {
        sectionName: "Exercise 1",
        chapterNames: ["Personal Navigator"],
        videoLinks: [
          "https://www.youtube.com/embed/AepgWsROO4k?si=HNpc-O0UJwlFfM90",
        ],
      },
      {
        sectionName: "Project Setup",
        chapterNames: ["Laying the Pipeline"],
        videoLinks: [
          "https://www.youtube.com/embed/ES-bdt0KUZg?si=lmOaOYMQudmx7BzL",
        ],
      },
      {
        sectionName: "Django Front-End",
        chapterNames: [
          "Django Templates",
          "Creating Homepage for TextUtils Website",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/0dBZZOYIDW0?si=k5O_LJqGbRXYppPi",
          "https://www.youtube.com/embed/dZsv7xt5pT0?si=uFkE7X-pRqThOQyq",
        ],
      },
      {
        sectionName: "Django Back-End",
        chapterNames: ["Coding the Backend"],
        videoLinks: [
          "https://www.youtube.com/embed/lkhJ7OCOCIc?si=GnOoVPh_955f5swx",
        ],
      },
      {
        sectionName: "Solution Exercise - 1",
        chapterNames: ["Solutions + ShoutOuts"],
        videoLinks: [
          "https://www.youtube.com/embed/lcpqpxVowU0?si=YoGLhL0FLYNHJ3me",
        ],
      },
    ],
    reviews: [
      {
        student: studentRankings[0],
        body: "Thanks a lot for all your effort in spreading such wonderful tutorials... I have been following you with multiple accounts and have referred your channel to everybody i know who's even curious about Python or programming.",
      },
      {
        student: studentRankings[1],
        body: "Hi I am joined today.I am having 8 years experience in Retail & Sales. Looking entry in Data Science field. Looking forward from this course and one more thing Harry Bhai you are doing very great work man keep it up....God bless you ",
      },
      {
        student: studentRankings[2],
        body: "Bro also make a series on data science... machine learning.... Deep learning and the artificial intelligence, Because your teaching methodologies are awesome and fabulous....so we are waiting for these series also...",
      },
      {
        student: studentRankings[3],
        body: "Hello harry bhaiya! I am 15 years old learning to program. I have learnt c through your courses, and also python, now starting on Django Framework course! Thank you so much for these courses, I am from bengal, and my name is Archisman Nath. Thank you so much for giving these courses for free and making them so comprehensive and completely with desi bhasa which is clear and easy to understand.",
      },
      {
        student: studentRankings[4],
        body: "Hi Sir, you're the most respectful person. Thanks for helping everyone. We are proud to have you in our life. Our good wishes and support are always with you.",
      },
    ],
  },
  {
    courseId: "ZP4F7L",
    courseName: "MySQL Bootcamp",
    author: "Colt Steel",
    courseRating: "4.5",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328858/card5_ftnjbx.jpg",
    coursePrice: 4499,
    isPaidCourse: true,
    aboutCourse:
      "JUST COMPLETELY REDONE! Master SQL, Work With Complex Databases, Build Reports, and More!",
    description:
      "Transform your data management skills with Master SQL. This comprehensive course is designed to take you from SQL basics to advanced database techniques. Learn to work with complex databases, execute sophisticated queries, and generate insightful reports. Whether you're a beginner looking to build a strong foundation or an experienced professional aiming to refine your skills, this course offers hands-on practice and real-world applications to enhance your SQL expertise. Perfect for data analysts, database administrators, and anyone interested in mastering the art of SQL and database management.",
    courseLink: "https://www.youtube.com/embed/iiRN93Ifv3A?si=z78o1A0FdqXDregv",
    courseIndex: [
      {
        sectionName: "Introduction & Overview",
        chapterNames: [
          "Instructor Introduction",
          "MySQL Syllabus",
          "First 5 min of SQL",
          "How The Course Works",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/2ElAlDZ_6nw?si=N8pP-yAy9fDmN9X2",
          "https://www.youtube.com/embed/nzEiyPcPiyU?si=gUGX9r1CR7I7lB7x",
          "https://www.youtube.com/embed/Jjc7V2p8dew?si=NtN7HRdkqtUseUj-",
          "https://www.youtube.com/embed/b84nSWEvu8U?si=ZMFNYqn0Iaio3eN_",
        ],
      },
      {
        sectionName: "Getting Started & Installation",
        chapterNames: [
          "Section Introduction",
          "What is A Database?",
          "SQL vs MySQL",
          "Installation: Overview",
          "Installation: Windows",
          "Installation: Mac",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/TQdJ1sfEncA?si=VgbrQ-fyGjBPaOw8",
          "https://www.youtube.com/embed/wNvxd_IjvZU?si=3xYHZ-G2tIc0spoc",
          "https://www.youtube.com/embed/0ucxHwnItFw?si=Uy5VZLndqDBW84wY",
          "https://www.youtube.com/embed/4VpPugw_0KA?si=v8yJb7KhXh4NGs3Z",
          "https://www.youtube.com/embed/YkBaiY20Yro?si=mJ3glRIQ1Tu75ING",
          "https://www.youtube.com/embed/k8RlympiUD0?si=iwY-YKJci5bcvnMu",
        ],
      },
      {
        sectionName: "Creating Database & Tables",
        chapterNames: [
          "Section Introduction",
          "Creating Databases",
          "Dropping Databases",
          "Using Databases",
          "Introducing Tables",
          "Data Types: The Basics",
          "Basic Datatypes Challenge",
          "Creating Tables",
          "How Do We Know It Worked?",
          "Dropping Tables",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/y1fBpTaOC5o?si=Hqep8J6ieFmcCjrj",
          "https://www.youtube.com/embed/EUinw2a8mks?si=eY50FYyd83QrIR9G",
          "https://www.youtube.com/embed/iz0N1K1cfrY?si=fqHEsIhBd56NBUEp",
          "https://www.youtube.com/embed/4dZyMCtNm2c?si=z4Z39NuvxYVD70cH",
          "https://www.youtube.com/embed/fyka_yniSpA?si=hNZYUHh1K8-9DCCV",
          "https://www.youtube.com/embed/ypf8R45T-vc?si=yfEeEbZyFO0e558u",
          "https://www.youtube.com/embed/sC5HIGvPDMA?si=-MsiqFjAc_pJrejN",
          "https://www.youtube.com/embed/AMr2MKnzUjg?si=1gwDw8QadfzZ4XA2",
          "https://www.youtube.com/embed/ACd6ULYty4g?si=CrvNOUCumBqKQD0P",
          "https://www.youtube.com/embed/W3YdgF2lRaE?si=tEAjwJPYWYon0vmT",
        ],
      },
      {
        sectionName: "Inserting Data",
        chapterNames: [
          "Section Introduction",
          "Inserting Data-MySQL",
          "Intro to SELECT Clause in SQL",
          "Multiple INSERT SQL TABLES",
          "INSERT Challenges",
          "Solution - INSERT Challenges",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/TENMifUNK5A?si=10P-TQStyZz-baX9",
          "https://www.youtube.com/embed/H8GAuyev_sA?si=nvVfptN3zh-uy7Oj",
          "https://www.youtube.com/embed/K-Vi_KIaGvc?si=FwlmVWvqFZCV7FG5",
          "https://www.youtube.com/embed/g0gK0YB-JyY?si=OPb8I63ETq8T2OKN",
          "https://www.youtube.com/embed/x0imzvjYrvg?si=gUzlRHUD5CJP7GQx",
          "https://www.youtube.com/embed/fSikTG9llRQ?si=NUgyogeWsPvnwyGM",
        ],
      },
      {
        sectionName: "CRUD Basics",
        chapterNames: [
          "Section Introduction",
          "Introduction to CRUD SQL",
          "Preparing Data IN SQL",
          "Introduction to SELECT Clause",
          "Introduction to WHERE Clause",
          "Challenge - SELECT Clause",
          "Solution - SELECT Clause",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/fLUaj0yegMI?si=dVTU2HXErm3HpB5B",
          "https://www.youtube.com/embed/v9mtoWTfXX4?si=Sgm7eAVkw1kebVnP",
          "https://www.youtube.com/embed/JF9uBgPxO9g?si=Kng7NloX1pTJuCA3",
          "https://www.youtube.com/embed/PK1-yrkFlPg?si=BWOIU-Z25RhgwKkz",
          "https://www.youtube.com/embed/5678GZA_U1k?si=0gnyBX7nXaVNx2XW",
          "https://www.youtube.com/embed/fcwuR6V9chM?si=PodRIsTKboXkpSes",
          "https://www.youtube.com/embed/B9n1-5ZlDXI?si=g0v8MzRoDsQU4Nfg",
        ],
      },
    ],
    reviews: [
      {
        student: studentRankings[0],
        body: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert is a highly recommended course, the tutor is really helpful on explaining different related topics over SQL, and i really enjoyed it !",
      },
      {
        student: studentRankings[1],
        body: "Colt is an excellent teacher. He did a very good job at explaining all the technical stuff in an easy-to-understand, relatable way. His team was friendly and always ready to respond to all my questions throughout the entire course. I definitely recommend the course.",
      },
      {
        student: studentRankings[2],
        body: "The whole course was designed really well, from the instruction, to the resource material. Also, quite satisfied with the exercises that helped me have a grasp over the code myself. Definitely made me feel more confident about SQL at the end.",
      },
      {
        student: studentRankings[3],
        body: "This course has helped me a lot. Before learning this course, I have no idea about SQL. But now I can do queries and I can add SQL as my skill from now on after completed this course.",
      },
      {
        student: studentRankings[4],
        body: "Great course! Thank you for making me confident enough to get started with SQL. Loved the way the course was taught. The exercises helped to think and solve the challenges.",
      },
    ],
  },
  {
    courseId: "MN6D9T",
    courseName: "Appium Mobile Automation",
    author: "Ompraksh Chavan",
    courseRating: "4.7",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328858/card6_udimtc.jpg",
    isPaidCourse: true,
    coursePrice: 4499,
    aboutCourse:
      "[LATEST VERSION 2.x] Only course to master Appium &amp; build production ready frameworks with CICD integration from scratch",
    description:
      "Elevate your mobile testing skills with our exclusive course on Mastering Appium (Latest Version 2.x). This is the only course designed to take you from the basics of Appium to creating production-ready automation frameworks. Learn to build robust testing solutions from scratch and integrate them seamlessly with Continuous Integration and Continuous Deployment (CI/CD) pipelines. Perfect for QA professionals and developers, this course provides hands-on experience with the latest Appium features, comprehensive framework development, and best practices for integrating testing into your development workflow.",
    courseLink: "https://www.youtube.com/embed/-Q_JFys87EA?si=xTcy2cvsluRIokhu",
    courseIndex: [
      {
        sectionName: "Introduction",
        chapterNames: ["Appium Introduction"],
        videoLinks: [
          "https://www.youtube.com/embed/GeFBUMVCens?si=x2UzQPUyfZA-D_cA",
        ],
      },
      {
        sectionName: "Appium Setup",
        chapterNames: ["Setup On Windows", "Setup On Mac"],
        videoLinks: [
          "https://www.youtube.com/embed/dLNEmXh46ig?si=H2yjFd4VoPHAob9M",
          "https://www.youtube.com/embed/kvNnF4Zpgmo?si=KJKGAvk6C07MPIii",
        ],
      },
      {
        sectionName: "Appium Project With Java",
        chapterNames: [
          "Java Project - Android",
          "Java Project - iOS",
          "Use Appium Inspector",
          "First Test Case Using Java",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/kgyH5Y8bvTo?si=Zp07WvMc80uujCzr",
          "https://www.youtube.com/embed/Iq6Dt0rz7Uw?si=kVB-8x-eNq8vOGU-",
          "https://www.youtube.com/embed/QjVU1q-M5YY?si=N5gbIdpZJ256F4q9",
          "https://www.youtube.com/embed/dC7GjVCGwFk?si=NWhekkVXY-l4-6Jp",
        ],
      },
      {
        sectionName: "Page Object Model (POM)",
        chapterNames: ["POM Design with Appium"],
        videoLinks: [
          "https://www.youtube.com/embed/FgQ26UjOHEY?si=wCyQEyQQNx3lUy_c",
        ],
      },
    ],
    reviews: [
      {
        student: studentRankings[1],
        body: "I won't say much, but this is enough. 'I successfully delivered two projects over two and half years, completely based on this course'. Hats off to OmPrakashChavan.",
      },
      {
        student: studentRankings[4],
        body: "The professor takes his time to explain everything on detail, also he speaks very well and his english is perfectly understandable, you can understand everything .",
      },
      {
        student: studentRankings[2],
        body: "Parts of the course are outdated, but the practical lessons are very nice. Also, the teacher seems to answer every question very fast and it really seems like he is trying to solve your issue. His assistants are below average, though.",
      },
      {
        student: studentRankings[3],
        body: "Very useful tutorials and gave me confident setting things up and running.Thank you Omprakash.",
      },
      {
        student: studentRankings[0],
        body: "Out dated content. Waste of money.Poor video quality.Text of most of the videos were not clear.Although he explains well. This course is not for noobs.",
      },
    ],
  },
  {
    courseId: "YV5X1N",
    courseName: "How the Internet Works & the Web Development Process",
    author: "YouAccel Training",
    courseRating: "4.2",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328859/card7_vsx8m8.jpg",
    coursePrice: 1299,
    isPaidCourse: true,
    aboutCourse:
      "Learn how the Internet Works - HTTP/HTTPS, Mail Delivery (SMTP), LAN, WAN, Network Basics & Firewalls",
    description:
      "Demystify the complexities of the internet with our course on How the Internet Works. Explore essential networking concepts including HTTP/HTTPS protocols, mail delivery through SMTP, and the fundamentals of Local Area Networks (LAN) and Wide Area Networks (WAN). Gain a solid understanding of network basics and the role of firewalls in securing communications. Designed for beginners and tech enthusiasts, this course offers clear explanations and practical insights to help you grasp how modern internet technologies and network infrastructure function.",
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
  {
    courseId: "HW2K8J",
    courseName: "The Complete 2023 PHP Full Stack Web Developer Bootcamp",
    author: "Srini Vanamala",
    courseRating: "4.5",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328859/card8_jobpvy.jpg",
    coursePrice: 5900,
    isPaidCourse: true,
    aboutCourse:
      "Learn to build websites with HTML , CSS , JAVASCRIPT , Bootstrap , PHP , MySQL , WordPress , OOP & more!",
    description:
      "Transform your web development skills with our Complete PHP course, designed to guide you through the creation of dynamic, fully-featured websites. Start by mastering the fundamentals of HTML, CSS, and JavaScript to craft visually appealing and interactive web pages. Dive into Bootstrap to enhance your designs with responsive layouts, and learn PHP for server-side scripting to build powerful web applications. Gain expertise in MySQL for database management, and explore WordPress for content management and site customization. Delve into Object-Oriented Programming (OOP) to write efficient and reusable code. This all-inclusive course provides practical, hands-on projects and expert guidance to help you build a comprehensive skill set in web development.",
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
  {
    courseId: "RU9G3M",
    courseName: "Ultimate Web Designer & Web Developer Course",
    author: "Brad Hussey",
    courseRating: "4.6",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328859/card13_wwsp2l.jpg",
    coursePrice: 3699,
    isPaidCourse: true,
    aboutCourse:
      "Become a Full-Stack Web Designer in 2023 - Learn Everything from Web Design Fundamentals to Front-End Web Development",
    description:
      "Step into the world of web design with our Full-Stack Web Designer course for 2023. This comprehensive program covers everything from the basics of web design to advanced front-end development techniques. Learn essential design principles and tools, master HTML, CSS, and JavaScript to create interactive and responsive websites, and gain practical skills in user experience (UX) and user interface (UI) design. This course is perfect for aspiring designers and developers looking to build a complete skill set, offering hands-on projects and expert insights to prepare you for a successful career in web design.",
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
  {
    courseId: "EA6P4Q",
    courseName: "The Complete Web Development Course - Build 15 Projects",
    author: "Development Island (UK)",
    courseRating: "4.4",
    courseImg:
      "https://res.cloudinary.com/learnopia/image/upload/v1722328859/card16_fowe80.jpg",
    coursePrice: 3699,
    isPaidCourse: true,
    aboutCourse:
      "The only course you need to become a full-stack web developer. Covers HTML5, CSS3, JS, ES6, Node, APIs, Mobile & more!",
    description:
      "Unlock the full potential of web development with this all-in-one course designed to turn you into a proficient full-stack developer. Covering everything you need to know, this course delves into HTML5, CSS3, and JavaScript (including ES6) to build modern, responsive websites. Master server-side development with Node.js and learn to create and manage APIs. Explore mobile development and more to ensure you're equipped with the latest skills and technologies. Ideal for aspiring developers and tech enthusiasts, this course offers practical experience and comprehensive coverage to prepare you for a successful career in full-stack web development.",
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
];

type TCourseContents = {
  sectionName: string;
  chapterNames: string[];
  videoLinks: string[];
};

type TReview = {
  student: TStudentRankings;
  body: string;
};

export type Course = {
  courseId: string;
  courseName: string;
  author: string;
  courseRating: string;
  courseImg: string;
  coursePrice: number;
  isPaidCourse: Boolean;
  courseLink: string;
  aboutCourse: string;
  description: string;
  courseIndex?: TCourseContents[];
  reviews?: TReview[];
};

export type TCourseContent = {
  sectionName: string;
  chapterNames: string[];
  videoLinks: string[];
  _id: string;
};

export type TCourseResource = {
  resourceName: string;
  resourceLink: string;
};
export interface TCourse {
  _id: string;
  courseName: string;
  author: string;
  courseRating: string;
  courseImg: string;
  coursePrice: number;
  isPaidCourse: boolean;
  courseLink: string;
  aboutCourse: string;
  description: string;
  courseIndex: TCourseContent[];
  courseResources: TCourseResource[];
  reviews: any[];
}

export default coursesList;

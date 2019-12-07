const app = new Vue({
    el: '#app',
    data: {
        "desktopMode": true,
        "tabletMode": false,
        "mobileMode": false,
        // "viewMode":"Desktop",
        "height": 900,
        "width": 1800,
        "navbarheight": "height: 3em;",
        "mobilebodymargin": "margin-top: 3em;",
        "navbarextended": false,
        "salutation": "Hello World! 👋",
        "abstract": "I'm excited you've stumbled across my bio page! You will find all the necessary information below or in menu bar. I'd also like to mention that my current professional foci are developing my data science prowess and improving my data visualization techniques. I'm also enjoying (and exploring) any twists and turns that may come along the way (i.e. VueJS, data modeling, enterprise architecture planning, developement operations, etc.). As such, I'd be more than happy to discuss any topics you think I might be able to assist with or simply anything interesting that you'd like to share. Feel free to reach out with any such topics via my social media accounts in the menu!",
        "basic": {
            "firstName": "Michael",
            "lastName": "Barrows",
            "title": "Business Intelligence Analyst"
        },
        "socials": [{
                "name": "GitHub",
                "link": "https://github.com/MBarrows20",
                "icon": "fab fa-github"
            },
            {
                "name": "LinkedIn",
                "link": "https://www.linkedin.com/in/michaelabarrows",
                "icon": "fab fa-linkedin"
            }
        ],
        "cards": {
            "Education": [{
                    "degree": "M.S. Information Systems Management",
                    "school": "University of Cincinnati",
                    "year": "2018.12",
                    "description": "During the study of my master's degree, I developed a focused understanding of information systems management solutions as well as a deeper knowledge of statistical analysis using R, Tableau, and SPSS.",
                    "courses": [
                        "Data Mining for Business Intelligence", "IS Project Management", "Advanced Web Developement w/ .NET", "IS Security", "Database Design", "Data Warehousing and Business Intelligence"
                    ],
                    "link": "https://business.uc.edu/academics/specialized-masters/information-systems.html"
                },
                {
                    "degree": "Data Analytics Graduate Certificate",
                    "school": "University of Cincinnati",
                    "year": "2018.12",
                    "description": "By completing the Data Analytics Certificate concurrently with my M.S. Information Systems Management, I was able to focus on the skills necessary to tease business decisions from massive amounts of data. I was then able to relate these skills back to the managment decisions-at-hand for IT leaders, making me a strong T-shaped developer.",
                    "courses": [
                        "Statistical Computing", "Data Visualization", "Data Wrangling w/ R", "Data Analysis Methods"
                    ],
                    "link": "https://business.uc.edu/academics/graduate-certificates/data-analytics.html"
                },
                {
                    "degree": "B.S. Biology",
                    "school": "Hope College",
                    "year": "2015.05",
                    "description": "At Hope College I learned the fundamentals of academic research, ecological sciences, and higher-level problem solving. I find myself using these skills in my everyday life regardless of the application.",
                    "courses": [
                        "Software Design and Implementation", "Conservation Biology", "Evolutionary Biology", "Vascular Plant Systematics", "Ancient Philosophy"
                    ],
                    "link": "https://hope.edu/catalog/current/biology/index.html#biology-major"
                }
            ],
            "Skills": [{
                    "name": "R Programming",
                    "proficiency": 10
                },
                {
                    "name": "Data Analytics",
                    "proficiency": 9
                },
                {
                    "name": "SQL",
                    "proficiency": 6
                },
                {
                    "name": "PowerBI",
                    "proficiency": 5
                },
                {
                    "name": "Data Warehousing",
                    "proficiency": 5
                }
            ],
            "WorkHistory": [{
                    "company": {
                        "name": "Total Quality Logistics",
                        "link": "https://www.tql.com/"
                    },
                    "title": "Business Intelligence Analyst",
                    "start": "2018.05",
                    "end": "",
                    "current": "yes",
                    "description": "At TQL I'm using advanced analytical techniques in conjunction with tools such as Power BI, SSRS, and RStudio to deliver actionable insights that help drive influential change.",
                    "moreinfo": ""
                },
                {
                    "company": {
                        "name": "Lane Public Library",
                        "link": "https://www.lanepl.org/"
                    },
                    "title": "Public Services Associate III",
                    "start": "2017.06",
                    "end": "2018.05",
                    "current": "no",
                    "description": "At the LPL Technology Center I was able to assist patrons - both individually and in groups - to navigate technology they found troubling. I also took pride in showcasing new hardware, software, or methodologies that offered numerous benefits to our patrons and nearby businesses.",
                    "moreinfo": ""
                },
                {
                    "company": {
                        "name": "University of Michigan",
                        "link": "https://lsa.umich.edu/eeb"
                    },
                    "title": "Research Associate",
                    "start": "2015.05",
                    "end": "2016.11",
                    "current": "no",
                    "description": "Working under the supervision of Dr. Deborah Goldberg, I investigated the effects of land-use and climate changes on wetland environments. In this position I was responsible for sample collection, data entry, data management, data analysis, site maintenance, resource purchasing, and employee management. Read more about the project here: ",
                    "moreinfo": "http://biostation.lsa.umich.edu/projects/experimental-invasion-of-constructed-wetland-mesocosms.htm"
                }
            ],
            "Volunteer": [{
                "company": "University of Cincinnati",
                "start": "2017.06",
                "end": "2018.12",
                "current": "no",
                "description": "I worked in Dr. Ishi Buffam's laboratory on a project relating to urban green roof architecture. As a volunteer research assistant I was responsible for the cleaning, consolidation, and analysis of data collected from environmental data loggers. This project allowed me to combine my interests in Data Management and Analysis with my background and love for ecology. It also allows me to provide valuable insight into the efficacy of green roof architecture through flow analysis of water across the roof before, during, and after rain events.",
                "moreinfo": ""
            }],
            "Projects": [

                {
                    "name": "Collatz Explorer",
                    "description": "Project designed to help visualize the Collatz Conjecture according to user defined settings.",
                    "show": true,
                    "image": "./images/CollatzExplorerIcon.png",
                    "github": "https://github.com/MBarrows20/CollatzExplorer",
                    "demo": "https://mbarrows.shinyapps.io/CollatzExplorer/",
                    "showTags": false,
                    "tags": [
                        "RShiny",
                        "Mathematical Concepts",
                        "Data Visualization"
                    ],
                    "themeColor": "#f6be98",
                    "accentFontColor": "#494949"
                },
                {
                    "name": "Safe Pedals",
                    "description": "Explore various characteristics about San Francisco's bike share program. This was a final project for my Data Wrangling with R course at the University of Cincinnati.",
                    "show": true,
                    "image": "./images/SafePedalsIcon.png",
                    "github": "https://github.com/MBarrows20/SFBikes",
                    "demo": "https://mbarrows20.github.io/SFBikes/",
                    "showTags": false,
                    "tags": [
                        "Dashboard",
                        "R Programming",
                        "Data Wrangling",
                        "OpenData"
                    ],
                    "themeColor": "#adcdea",
                    "accentFontColor": "#494949"

                },
                {
                    "name": "PiHole - Material Dark",
                    "description": "Custom dark CSS theme for the common PiHole ad blocker",
                    "show": true,
                    "image": "./images/PiHoleIcon.png",
                    "github": "https://github.com/MBarrows20/pi-hole-material-dark",
                    "demo": "#",
                    "showTags": false,
                    "tags": [
                        "CSS",
                        "Material Design",
                        "Javascript",
                        "GitHub"
                    ],
                    "themeColor": "#7f7f7f",
                    "accentFontColor": "#fff"


                },
                {
                    "name": "RIntroduction",
                    "description": "Website designed to suppliment an in-person workshop for getting individuals up and running with R and R Studio.",
                    "show": true,
                    "image": "./images/RIntroductionIcon.png",
                    "github": "https://github.com/MBarrows20/RIntroduction",
                    "demo": "https://mbarrows20.github.io/RIntroduction/",
                    "showTags": false,
                    "tags": [
                        "R Programming",
                        "Learning and Developement",
                        "Markdown"
                    ],
                    "themeColor": "#5b9bd5",
                    "accentFontColor": "#fff"
                },
                {
                    "name": "Super Similarities",
                    "description": "Find superheros which have common characteristics or frequently appear in the smae comics. This was a small experiment to teach myself network graphs in R.",
                    "show": true,
                    "image": "./images/SuperSimilaritiesIcon.png",
                    "github": "https://github.com/MBarrows20/SuperSimilarities",
                    "demo": "https://mbarrows.shinyapps.io/SuperSimilarities/",
                    "showTags": false,
                    "tags": [
                        "R Programming",
                        "R Shiny",
                        "Similarity Matricies",
                        "Network Maps"
                    ],
                    "themeColor": "#7f7f7f",
                    "accentFontColor": "#fff"

                },
                {
                    "name": "SceneIt",
                    "show": false,
                    "image": "#",
                    "github": "https://github.com/MBarrows20/SceneIt",
                    "demo": '#',
                    "showTags": false,
                    "tags": [
                        "C#",
                        ".NET",
                        "VueJS",
                        "Async",
                        "API",
                        "Checklist"
                    ],
                    "themeColor": "#f6be98"

                }
            ]
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    computed: {
        canvas: function() {
            return this.$refs.imagecanvas;
        }
    },
    methods: {
        handleResize: function() {
            // Calculate new canvas size based on window
            self = this
            var h = window.innerHeight;
            var w = window.innerWidth;
            self.height = h;
            self.width = w;
            if (w >= 1000) {
                self.desktopMode = true;
                self.tabletMode = false;
                self.mobileMode = false;
            } else if (w >= 700) {
                self.desktopMode = false;
                self.tabletMode = true;
                self.mobileMode = false;
            } else {
                self.desktopMode = false;
                self.tabletMode = false;
                self.mobileMode = true;
            }

        },
        ExtendNavbar: function() {
            if (this.navbarextended) {
                this.navbarheight = "height: 3em;";
                this.mobilebodymargin = "margin-top: 3em;";
                this.navbarextended = false;
            } else {
                this.navbarheight = "height: 8em;";
                this.mobilebodymargin = "margin-top: 8em;";
                this.navbarextended = true;
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
});
var app = new Vue({ 
    el: '#app',
    data: {
        "basic":{
            "firstName":"Michael",
            "lastName":"Barrows",
            "age": 26,
            "location":"Cincinnati, OH",
            "title":"Business Intelligence Analyst"
        },
        "socials":[
            {
                "name":"GitHub",
                "link":"https://github.com/MBarrows20",
                "icon":"fab fa-github"
            },
            {
                "name":"LinkedIn",
                "link":"https://www.linkedin.com/in/michaelabarrows",
                "icon":"fab fa-linkedin"
            }      
        ],
        "cards":{
            "Education":[
                {
                    "degree":"M.S. Info Systems Management",
                    "school":"University of Cincinnati",
                    "year":"2018.12",
                    "description":"UC provided me with a focused understanding of info systems management solutions as well as a deeper knowledge of statistical analysis using R, Tableau, and SPSS.",
                    "courses":[
                        "Data Mining for Business Intelligence"
                        ,"IS Project Management"
                        ,"Advanced Web Developement w/ .NET"
                        , "IS Security"
                        , "Database Design"
                        ,"Data Warehousing and Business Intelligence"
                    ]
                },
                {
                    "degree":"Data Analytics Graduate Certificate",
                    "school":"University of Cincinnati",
                    "year":"2018.12",
                    "description":"",
                    "courses":[
                        "Statistical Computing"
                        ,"Data Visualization"
                        ,"Data Wrangling w/ R"
                        ,"Data Analysis Methods"
                    ]
                },
                {
                    "degree":"B.S. Biology",
                    "school":"Hope College",
                    "year":"2015.05",
                    "description":"At Hope College I learned the fundamentals of academic research, ecological sciences, and higher-level problem solving.",
                    "courses":[
                        "Software Design and Implementation"
                        , "Conservation Biology"
                        , "Evolutionary Biology"
                        , "Vascular Plant Systematics"
                        , "Ancient Philosophy"
                    ]
                }
            ],
            "Skills":[
                {
                    "name":"R Programming",
                    "proficiency":10
                },
                {
                    "name":"Data Analytics",
                    "proficiency":9
                },
                {
                    "name":"SQL",
                    "proficiency":6
                },
                {
                    "name":"PowerBI",
                    "proficiency":5
                },
                {
                    "name":"Data Warehousing",
                    "proficiency":5
                }
            ],
            "WorkHistory":[
                {
                    "company":"Total Quality Logistics",
                    "title":"Business Intelligence Analyst",
                    "start":"2018.05",
                    "end":"",
                    "current":"yes",
                    "description":"At TQL I'm using advanced analytical techniques in conjunction with tools such as Power BI, SSRS, and R Shiny to deliver actionable insights that help drive influential change.",
                    "moreinfo":""
                },
                {
                    "company":"Lane Public Library",
                    "title":"Public Services Associate III",
                    "start":"2017.06",
                    "end":"2018.05",
                    "current":"no",
                    "description":"At the LPL Technology Center I was able to assist patrons - both individually and in groups - to navigate technology they found troubling. I also took pride in showcasing new hardware, software, or methodologies that offered numerous benefits to our patrons and nearby businesses.",
                    "moreinfo":""
                },
                {
                    "company":"University of Michigan",
                    "title":"Research Associate",
                    "start":"2015.05",
                    "end":"2016.11",
                    "current":"no",
                    "description":"Working under the supervision of Dr. Deborah Goldberg, I investigated the effects of land-use and climate changes on wetland environments. In this position I was responsible for sample collection, data entry, data management, data analysis, site maintenance, resource purchasing, and employee management. Read more about the project here: ",
                    "moreinfo":"http://biostation.lsa.umich.edu/projects/experimental-invasion-of-constructed-wetland-mesocosms.htm"
                }
            ],
            "Volunteer":[
                {
                    "company":"University of Cincinnati",
                    "start":"2017.06",
                    "end":"2018.12",
                    "current":"no",
                    "description":"I worked in Dr. Ishi Buffam's laboratory on a project relating to urban green roof architecture. As a volunteer research assistant I was responsible for the cleaning, consolidation, and analysis of data collected from environmental data loggers. This project allowed me to combine my interests in Data Management and Analysis with my background and love for ecology. It also allows me to provide valuable insight into the efficacy of green roof architecture through flow analysis of water across the roof before, during, and after rain events.",
                    "moreinfo":""
                }
            ],
            "Projects":[
                {
                    "name":"Super Similarities",
                    "tags":[
                        "R Programming",
                        "R Shiny",
                        "Similarity Matricies",
                        "Network Maps"
                    ],
                    "link":"#"
                },
                {
                    "name":"Safe Pedals",
                    "tags":[
                        "Dashboard",
                        "R Programming",
                        "Data Wrangling"
                    ],
                    "link":"#"
                }
            ]
        }        
    }
});
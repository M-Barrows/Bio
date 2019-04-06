var app = new Vue({ 
    el: '#app',
    data: {
        "basic":{
            "firstName":"Michael",
            "lastName":"Barrows",
            "age": 26,
            "location":"Cincinnati, OH",
            "title":"Business Intelligence Analyst",
        },
        "socials":{
            "github":"https://github.com/MBarrows20",
            "linkedin":"https://www.linkedin.com/in/michaelabarrows",
            "twitter":""        
        },
        "cards":{
            "Education":[
                {
                    "degree":"M.S. Info Systems Management",
                    "school":"University of Cincinnati",
                    "year":"2018.12",
                    "description":"UC provided me with a focused understanding of info systems management solutions as well as a deeper knowledge of statistical analysis using R, Tableau, and SPSS."
                },
                {
                    "degree":"B.S. Biology",
                    "school":"Hope College",
                    "year":"2015.05",
                    "description":"At Hope College I learned the fundamentals of academic research, ecological sciences, and higher-level problem solving."
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
                    "description":"Using advanced analytical techniques to drive business decisions."
                },
                {
                    "company":"Lane Public Library",
                    "title":"Public Services Associate III",
                    "start":"2017.06",
                    "end":"2018.05",
                    "current":"no",
                    "description":""
                },
                {
                    "company":"University of Michigan",
                    "title":"Research Associate",
                    "start":"2015.05",
                    "end":"2016.11",
                    "current":"no",
                    "description":""
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
                    ]
                },
                {
                    "name":"Safe Pedals",
                    "tags":[
                        "Dashboard",
                        "R Programming",
                        "Data Wrangling"
                    ]
                }
            ]
        }
    }
});
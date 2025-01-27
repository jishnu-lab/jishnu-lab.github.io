### How to add data to the news page

We have the news page in it the buttons are the main source of information if you wish to add any data to the news page you need to follow a certain procedure.That is if you need to add any data you should follow these steps:-

1. Go the news folder and open the index.html in it
2. In that the main data containers are in 3 categories Papers, grants and talks
3. In order to add data to them we have to add data directly to the button containers the format for adding data to various containers is :-
        
    Papers: 
    <li class="news-item papers-date">February 2024 - We published "SLIDE: Significant Latent factor Interaction Discovery and Exploration across biological domains" in "Nature Methods"</li>

    Grants: 
    <li class="news-item grants-date">January 2023 - We found out that our "NCI R01 grant in dissecting the role of hypoxia in T cell differentiation in cancer (Role: co-I, PI: Billiar)" will be funded</li>

    Talks:
    <li class="news-item talks-date">October 2023 - Jishnu gave an invited talk at "BMES 2023" on, "Elucidating humoral profiles associated with Schistosomiasis pathogenesis using interpretable machine learning"</li>

4. Add the data to the particular container you wish for and use this sample format mentioned above for the same .

5. if you wish to change the style container has the css .

### Working with the Publications page 

The publications page works in a different way the primary part of the publications code is present in the posts folder which contains an index.html with the essential code for the tag containers and everything. In order to add the publications you need to add them in a differeent folder in the form of an md file following a certain format in the folder named _posts . The format for the posts that need to present have to be in certain way. The format of the md file will be :-

1. The file name for the md file has a certain format which includes the date of the publication in the beggining and then the first two words of the papers title in the the name accordingly.

2. After that the data needs to be uploaded in a particular format in the md file. An example of what the format should be like will be :-

---
title: "SLIDE- Significant Latent factor Interaction Discovery and Exploration across biological domains" ( ## this is the name that will be presented at the posts page  )
description: "<strong><u>Rahimikollu J*</u></strong>,<strong><u>Xiao H*</u></strong>, <strong><u>Rosengart A</u></strong>, <strong><u>Rosen A</u></strong>, <strong><u>Tabib T</u></strong>, Zdinak P, He K, Bing X, Bunea F, Wegkamp M, Poholek A✝, Joglekar A✝, Lafyatis R✝, <strong><u>Das J✝</u></strong>"(  ## these are the list of authors and we need to have our lab members in bold and underline )
date: 2024-02-19 15:01:35 +0300  ( ## add the date in this format )
image: "/images/SLIDE.webp" ( ## for the image to be displayed we need to add the image to the images folder first and and then work forward with it )
tags: [Protein_Networks, Machine_Learning]  (## use the tags in this format you can check all available tags on the website or you can simply add new tags by just creating them here)
href: "https://www.nature.com/articles/s41592-024-02175-z#Abs1" ( ## attach the paper link of the publication in this file)
published: "Nature Methods 2024" ( ## add the journal that the paper was published in over here )
year: 2024 ( ## add the year of publication over here )
---

3. After creating the md file you have to add it the _posts folder and then push the commit which will make it visible on your website

4. In order to make the css changes to ths page you have to access the _post.scss file present in "_sass/4-layouts/_post.scss"

### Adding new team members 

Changing the team page can be a bit of a challenge as this may be tricky because of the way i made it. The code is pretty tricky and follows limiters that i have used to create parts in it mid way . In the index.html file in the team folder I have placed certain seperators at particular place . The seperators work in a particular way if you wish to add postdocts  add them after zarifeh in the yml file and in case of grad students add them after hanxi , as for the undergraduates and masters students you can add them after me( Simar ) in the yaml file as for the alumni part it is pretty simple as tehy will be automatically placed in the correct box and you can check the code for yourself in the index.html present in the team folder 

Steps to add new members :-

1. In order to add new members you need to access the team.yml file present in the _data folder 

2. There in order to add people to the team members page you need to add people in order if you want to add a postdoc and research scientist add them after Zarifeh in the yml for grad students add them after hanxi and before simar in any order as for undergraduates and masters students add them after simar and before syed 

3. As for the alumi section add them in the later part of the yml anywhere with the correct data input as mentioned 

4. Input data format sample for current members and not alumni's :-
        - name: Javad Rahimikollu ( ## add the name here )
            is_pi: False  ( ## add a true false value here if Pi or not)
            is_current: True  ( ## add a true false value if current member or not )
            is_intern : False  ( ## add a true false value if intern member or not )
            is_rotation : False  ( ## add a true false value if rotation student or not )
            position: PhD Student | CMU-Pitt Program in Computational Biology (CPCB) ( ## add a position for the person you are trying to add )
            bio: >
            Javad enjoys doing research and developing methods for solving real-world problems. ( ## add the description for the person you are trying to add)
            photo: /images/javad.webp ( ## add the photos of the current members over here before that make sure you have added them in the images folder )

5. Adding alumnis (pls follow this format for the same):-

        - name: Amna Irfan (## add the alumnis name )
            is_pi: False 
            is_current: False
            position: TECBio@REU undergraduate (2020)
            is_intern : True
            is_rotation : False

### Changes in the Contact us 

1. If you wish to make any changes to the contact us page you can make them by going to the about.md file located in _pages folder where you can change everything in any way you want also the css styling is already present in the about.md file so you can change it there 

### Home page and miscaelaneous changes 

1. If you wish to make changes to the home page you need to access the settings.yml file in _data folder so you need to make changes there .

2. Also if you wish to make any intrinsic chages you need to access the _includes and _pages folder for those and in this way you can make similiar changes







function body(){
    let count=0;
    document.getElementById("c1ofc1").addEventListener("click",()=>{
    count++;
    let hidden=document.getElementById("hidden");
    let lhs=document.getElementById("lhs");
    let topRhs=document.getElementById("topRhs");
    let container=document.getElementById("container");
    let top=document.getElementById("top");
       
    if(count%2==0){
        hidden.style.display="none";
        lhs.style.display="block";
        container.style.marginTop="0%";
        container.style.marginLeft="17%";
        container.style.width="82%";
        top.style.marginTop="0%";
        top.style.marginLeft="18%"
        topRhs.style.marginLeft="57%"

    }
    else{
        hidden.style.display="block"
        lhs.style.display="none"
        container.style.width="95%"
        container.style.marginLeft="4%";
        
        top.style.marginTop="-22%"
        top.style.marginLeft="8%"
        topRhs.style.marginLeft="70%"
        
    }
});
};
body();






function user(){
    let count=0;
    document.getElementById("user").addEventListener("click",()=>{
        count++;
        if(count%2==0){
            document.getElementById("topRhs").style.display="none"
        }
        else{
            document.getElementById("topRhs").style.display="block"
        }
    })
}
user();






`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=rrr&key=[AIzaSyB6Eybu1Qe6a7cIGdZDiTuft3GEpyV_Grw]`


function searchYourVideo(){
    document.getElementById("searchButton").addEventListener("click",searchAnything);

  async  function searchAnything(){
      let search_term=document.getElementById("input").value;
        
        try{
            let apiKey=`AIzaSyB6Eybu1Qe6a7cIGdZDiTuft3GEpyV_Grw`;
            let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_term}&key=${apiKey}`);
            let data= await res.json();
            let actualData= data.items;
            console.log(actualData)
            appendData(actualData);
        }
        catch(error){
            console.log(error);
        }
    }
}
searchYourVideo();

    
const appendData= (data)=>{
    document.getElementById("mid").innerHTML=null;

    data.forEach(({snippet, id:{videoId}})=>{

        let div=document.createElement("div");
    let img=document.createElement("img");
        img.src=snippet.thumbnails.high.url;
    let p=document.createElement("p");
        p.innerText=snippet.channelTitle;
    let p_title=document.createElement("p");
        p_title.innerText=snippet.title;

    div.append(img,p,p_title);
        div.onclick=()=>{
            let obj={
                snippet,
                videoId
            }
        localStorage.setItem("youtubeData",JSON.stringify(obj));

        window.location.href="playVideo.html";




        }
    document.getElementById("mid").append(div);

    })
    
}


let fetchData=[
    {
        id: {
            videoId: "sAzlWScHTc4"
        },
        snippet: { 
            channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
            title: "Naacho Naacho (Full Video) RRR - NTR, Ram Charan | M M Kreem | SS Rajamouli | Vishal Mishra &amp; Rahul",
            description: "Naacho Naacho - Full Video from #RRRMovie. An M. M. Kreem Musical. Sung by Vishal Mishra & Rahul Sipligunj.",
            thumbnails: {
                
                high: {
                    url: "https://i.ytimg.com/vi/sAzlWScHTc4/hqdefault.jpg",    
                }
            },
            channelTitle: "T-Series",   
        }
    },
    {
       
        id: {
           
            videoId: "2Y1A_oRuDQo"
        },
        snippet: {
           
            channelId: "UC56gTxNs4f9xZ7Pa2i5xNzg",
            title: "BRAHMĀSTRA - THE VISION (HINDI)| Amitabh | Ranbir | Alia | Nagarjuna | Ayan | In Cinemas September 9",
            description: "आइए जानते हैं ब्रह्मास्त्र कि दुनिया को थोड़ा और क़रीब से, अयन ...",
            thumbnails: {
              
                high: {
                    url: "https://i.ytimg.com/vi/2Y1A_oRuDQo/hqdefault.jpg",
                   
                }
            },
            channelTitle: "Sony Music India",
        }
    },
    {
        
        id: {
            
            videoId: "0wiSMPJ64uA"
        },
        snippet: {
            
            channelId: "UCJrDMFOdv1I2k8n9oK_V21w",
            title: "PS1 Hindi Trailer | Mani Ratnam | AR Rahman | Subaskaran | Madras Talkies | Lyca Productions",
            description: "Subaskaran Presents A Mani Ratnam Film PS-1 (Hindi) An AR Rahman Musical Based on Kalki's \"Ponniyin Selvan\" Releasing in ...",
            thumbnails: {
                
                high: {
                    url: "https://i.ytimg.com/vi/0wiSMPJ64uA/hqdefault.jpg",
                    
                }
            },
            channelTitle: "Tips Official",
            liveBroadcastContent: "none",
            publishTime: "2022-09-06T17:37:25Z"
        }
    },
    {
        kind: "youtube#searchResult",
       
        id: {
           
            channelId: "UC1-BQ2oxqBVtCjMHF-Wf98w"
        },
        snippet: {
            
            channelId: "UC1-BQ2oxqBVtCjMHF-Wf98w",
            title: "Kapil Sharma",
            description: "Founded in 2016 as a film production house, K9 Films (K9) is owned by the renowned actor and stand-up comedian of the ...",
            thumbnails: {
               
                high: {
                    url: "https://yt3.ggpht.com/ytc/AMLnZu-sWHOuqTHtcki_Dw18L_6aRz-NrQHCcxgs75dvww=s800-c-k-c0xffffffff-no-rj-mo"
                }
            },
            channelTitle: "Kapil Sharma",
            
        }
    },
    {
        
        "id": {
            
            "videoId": "spEduLJ1E78"
        },
        snippet: {
            
            channelId: "UC1-BQ2oxqBVtCjMHF-Wf98w",
            title: "The Kapil Sharma Show | The Mega &#39;Vikram Vedha&#39; Team Meets Kapil | Uncensored",
            description: "KapilSharma #VikramVedha #saifalikhan Watch exclusive uncensored footage of \"The Mega 'Vikram Vedha' Team Meets Kapil\" ...",
            thumbnails: {
               
                high: {
                    url: "https://i.ytimg.com/vi/spEduLJ1E78/hqdefault.jpg",
                    
                }
            },
            channelTitle: "Kapil Sharma",
           
        }
    },
    {
       
        id: {
            
            videoId: "Yiaatr-Noh0"
        },
        snippet: {
            
            channelId: "UCcYzLCs3zrQIBVHYA1sK2sw",
            title: "The Power of Being Alone | Sadhguru Jaggi Vasudev",
            description: "Sadhguru talks about the importance of learning to be alone if we want togetherness to be rich and rewarding. To watch this video ...",
            thumbnails: {
                
                high: {
                    url: "https://i.ytimg.com/vi/Yiaatr-Noh0/hqdefault.jpg",
                   
                }
            },
            channelTitle: "Sadhguru",
           
        }
    },
    {
       
        
        id: {
           
            "videoId": "aUrn-kdxaTw"
        },
        snippet: {
            
            channelId: "UCcYzLCs3zrQIBVHYA1sK2sw",
            title: "The Secret Behind Beethoven&#39;s Musical Genius | Sadhguru",
            description: "Official YouTube Channel of Sadhguru Considered among India's 50 most influential people, Sadhguru is a yogi, mystic, ...",
            thumbnails: {
                
                high: {
                    url: "https://i.ytimg.com/vi/aUrn-kdxaTw/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
            },
            channelTitle: "Sadhguru",
            
        }
    },
    {
        kind: "youtube#searchResult",
        
        id: {
           
            videoId: "A2E7P88ZmCE"
        },
        snippet: {
           
            channelId: "UCOQNJjhXwvAScuELTT_i7cQ",
            title: "Akshay ने चुराया Jacqueline का Coconut Water | The Kapil Sharma Show Season2 | Full Episode",
            description: "Click here to Subscribe to Sony Liv: https://www.youtube.com/user/sonyliv Click here to watch the full episodes of The Kapil ...",
            thumbnails: {
                
                high: {
                    url: "https://i.ytimg.com/vi/A2E7P88ZmCE/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
            },
            channelTitle: "Sony LIV",
           
        }
        
    },

    {
        
        id: {
            
            videoId: "cULVDmIDIzI"
        },
        snippet: {
            
            channelId: "UC1EyYYYoXf_YaLkVzvJhjRQ",
            title: "Jatha Kalise | Full Video Song | Srimanthudu Movie | Mahesh Babu | Shruti Haasan | DSP",
            description: "Jatha Kalise Full Video Song from Srimanthudu Telugu movie featuring Mahesh Babu, Shruti Haasan and Jagapathi Babu.",
            thumbnails: {
                
                high: {
                    url: "https://i.ytimg.com/vi/cULVDmIDIzI/hqdefault.jpg",
                   
                }
            },
            channelTitle: "Mahesh Babu",
        
        }
    },
    
    {
       
        id: {
           
            videoId: "QblmhYU9jH8"
        },
        snippet: {
           
            channelId: "UCJ2KaH9TTjZdmKwwAFwwFkA",
            title: "अपने अंदर के टैलेंट को जगाने के 4 सूत्र | Talent |Sadhguru Hindi",
            description: "हम सभी के अंदर कोई न कोई अनूठी प्रतिभा छुपी हुई है। सद्गुरु हमें उस ...",
            thumbnails: {
               
                high: {
                    url: "https://i.ytimg.com/vi/QblmhYU9jH8/hqdefault.jpg",
                    
                }
            },
            channelTitle: "Sadhguru Hindi",
            
        }
    },

    {
       
        id: {
           
            videoId: "lNmVxAvJ1Ow"
        },
        snippet: {
           
            channelId: "UC9Annk0YF34wiyDbgcOcYJA",
            title: "KANGUVA 2024 | New South Indian Hindi Dubbed",
            description: "KANGUVA 2024 | New South Indian Hindi Dubbed Full Movie | Latest Suriya Movie 2024 #southmovie2024 KANGUVA 2024 ...",
            thumbnails: {
               
                high: {
                    url: "https://i.ytimg.com/vi/lNmVxAvJ1Ow/hqdefault.jpg",
                    
                }
            },
            channelTitle: "Latest Cinemas",
            
        }
    },
    {
        id: {
            videoId: "sAzlWScHTc4"
        },
        snippet: { 
            channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
            title: "Naacho Naacho (Full Video) RRR - NTR, Ram Charan | M M Kreem | SS Rajamouli | Vishal Mishra &amp; Rahul",
            description: "Naacho Naacho - Full Video from #RRRMovie. An M. M. Kreem Musical. Sung by Vishal Mishra & Rahul Sipligunj.",
            thumbnails: {
                
                high: {
                    url: "https://i.ytimg.com/vi/sAzlWScHTc4/hqdefault.jpg",    
                }
            },
            channelTitle: "T-Series",   
        }
    }
];

appendData(fetchData)




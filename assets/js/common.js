Kakao.init('0ea702deeb89ca03d3d2f703de9d1686'); 

function link_kakao() { 
    var sh_title = "공유할 제목"; 
    var sh_desc = "상세설명"; 
    Kakao.Link.sendDefault({ objectType: 'feed', 
                                content: { 
                                    title: sh_title, 
                                    description: sh_desc, 
                                    imageUrl: "https://user-images.githubusercontent.com/76463172/103274840-03445080-4a06-11eb-943f-70d3900d6fc9.jpg", 
                                    link: { mobileWebUrl: "https://drawoo.github.io/mobile/", 
                                                  webUrl: "https://drawoo.github.io/mobile/" 
                                }
                             },
                             });
                             }
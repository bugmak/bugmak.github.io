var posts=["2025/06/21/阅读项目学习/安卓项目学习1/","2025/06/04/BaseCTF/BaseCTF2024_RE/","2025/06/22/阅读项目学习/安卓项目学习2/","2025/06/05/ISCTF2024/RE/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
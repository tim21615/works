var book_datas = [
  {
    index: 1,
    title: "徹底坦白:一種有溫度而真誠的領導",
    author: "金‧史考特",
    price: 430,
    is_discount: true,
    discount: 0.79,
    publish: "天下文化",
    date: "2019/03/15",
    img: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/081/67/0010816772.jpg&v=5c8a2d34&w=170&h=170",
    author_link: "https://search.books.com.tw/search/query/key/%E9%87%91%E2%80%A7%E5%8F%B2%E8%80%83%E7%89%B9/f/author?loc=P_0009_author_001",
    book_link: "https://www.books.com.tw/products/0010816772?loc=P_0009__2001"
       
  },{
    title: "夜巡貓1-3微笑小錢包禮物套書（慶祝作者來台超限量特裝版）",
    author: "深谷薰",
    price: 700,
    is_discount: false,
    discount: 0.85,
    publish: "非凡文化",
    date: "2019/02/14",
    img: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/081/22/0010812265.jpg&v=5c41aac9&w=170&h=170",
    author_link: "https://search.books.com.tw/search/query/key/%E6%B7%B1%E8%B0%B7%E8%96%B0/f/author?loc=P_0009_author_017",
    book_link: "https://activity.books.com.tw/crosscat/show/A00000002640?loc=P_0009__2017"
       
  },{
    title: "海象小姐與黑鳥先生：記得或遺忘，哪一種才是幸福？",
    author: "瓦爾．艾米奇",
    price: 360,
    is_discount: true,
    discount: 0.79,
    publish: "悅知文化",
    date: "2019/03/07",
    img: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/081/55/0010815571.jpg&v=5c75157a&w=170&h=170",
    author_link: "https://search.books.com.tw/search/query/key/%E7%93%A6%E7%88%BE%EF%BC%8E%E8%89%BE%E7%B1%B3%E5%A5%87/f/author?loc=P_0009_author_004",
    book_link: "https://www.books.com.tw/products/0010815571?loc=P_0009__2004"
    
       
  },{
    title: "子彈筆記創始人首度來台公開演講＋新書限量套票：找回人生主控權的思考整理術 釐清超載思緒，化想法為行動，專注最重要的事",
    author: "瑞德‧卡洛",
    price: 770,
    is_discount: true,
    discount: 0.85,
    publish: "天下雜誌",
    date: "2019/03/15",
    img: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/081/66/0010816635.jpg&v=5c878a76&w=170&h=170",
    author_link: "https://search.books.com.tw/search/query/key/%E7%91%9E%E5%BE%B7%E2%80%A7%E5%8D%A1%E6%B4%9B/f/author?loc=P_0009_author_003",
    book_link: "https://activity.books.com.tw/crosscat/show/A00000001415?loc=P_0009__2003"
       
  },{
    title: "黑箱：性暴力受害者的真實告白",
    author: "伊藤詩織",
    price: 340,
    is_discount: true,
    discount: 0.79,
    publish: "高寶",
    date: "2019/03/06",
    img: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/081/51/0010815132.jpg&v=5c73c3c3&w=170&h=170",
    author_link: "https://search.books.com.tw/search/query/key/%E4%BC%8A%E8%97%A4%E8%A9%A9%E7%B9%94/f/author?loc=P_0009_author_008",
    book_link: "https://www.books.com.tw/products/0010815132?loc=P_0009__2008"
       
  }
  
]
var vm = new Vue({
  el:'#app',
  data: {
    books: book_datas,
    list_mode: false,
    big_mode: false
}
})
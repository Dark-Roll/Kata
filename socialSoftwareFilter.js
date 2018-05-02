

//  封鎖完之後 會刷新葉面 function就不見了  // 不是 是典籍取消的樣子
// 有時會是mes[1] mes[2]
// OKOK  剩下典籍封鎖的js了
//  你不能打字 打字就抓不到了 // 還是要試試?
// 陌生人已經離開也來冊冊
// 再來測試抓圖的 男、R18

const filter=()=>{
    // let mes= document.querySelectorAll(".wrapper-sm");
    let mes= document.querySelectorAll(".avatar");
    let arr=["男","boy","叔","色","處","飢渴","屌"]; //,"女"
    console.log("wait for someone")
    if (mes[0].nextSibling){    
        // console.log(filterTarget)
        arr.map((ele)=>{
            
            let filterTarget=mes[0].nextSibling.innerText;
            // let filter =mes[1].childNodes[1].innerText;
            console.log(filterTarget)
            if(filterTarget.indexOf(ele)>-1){
                console.log("matched")
                let s =document.querySelector('#ban-confirm-btn');
                let blockDiv =document.querySelectorAll('.modal-footer');
                s.click();

                // lag  = =
                blockDiv[0].childNodes[0].click();  // this doesn't work
            }
        })
        setTimeout(filter,3000);
    }else{

        setTimeout(filter,3000);
    }
}
filter();




// 在body的onclick()事件里调用，或者在JS里的全局范围内调用，或者在jquery的
// $(document).ready(function(){
// //在这调用你要执行的事件函数
// });
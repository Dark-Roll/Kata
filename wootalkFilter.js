
// 只要不要自己離開 就能auto send 第一句 不管任何情況
// 雙執行緒
let curMid = -1;

const fil = () => {
    // init
    let left = document.querySelectorAll(".system")
    if (left[left.length - 2] && left[left.length - 2].childNodes[1]) {//.childNodes[1]){
        if (left[left.length - 2].childNodes[1].data == "對方離開了，請按離開按鈕回到首頁") {
            changePerson()
            // changePerson後重設回話值
            curMid = -1;
        }
    }

    isStart()
    // 還沒跑出來 抓不到怎麼寫function
    isAnybodyIn()

    let filterText = document.querySelectorAll('.stranger'); 
    if (filterText && filterText !== "") {
        let filterArr = ["男", "色", "boy", "臺北", "台北", "妹", "缺", "妳", "約", "嗯", "摁", "是啊", "Y", "恩", "對", "公的", "沒錯", "ㄣ", "雞雞", "Boy", "找女"];
        filterArr.push("葛格", "女友", "修幹", "休幹", "北投","炮","女孩嗎","高雄","女？");
        let tempArr = Object.values(filterText).filter((e, i) => i % 2 == 0)

        // because it is not an array, it will be so complicated
        // start filtering
        tempArr.map((ele) => {
            // if (ele=="打字中..."||"") return false;
            if (!ele || !ele.childNodes[1]) return false;
            console.log(tempArr)
            let filterTA = ele.childNodes[1].data;//.innerText; (X )  //toString fuck find so long
            // 打字中... //會end function  // 一下打 一下不打 會undefined
            console.log("%c%s", "color:purple; font-size: 14px;", filterTA)  // What does other people say

            // 哪時set true?
            // let shouldRes=true;

            filterArr.map((e) => {
                if (filterTA.indexOf(e) > -1) {
                    console.log("match")
                    changePerson()
                    let yes = document.querySelector('#popup-yes')
                    yes.click()
                    // reset response value
                    curMid=-1
    
                } else {
                    // 等他再講一次話再set true
                    // 取得 .length
                    // true 會進來跑一次
                    // 但會一直進來 因為會 回呼這個function
                    
                    // return false;
                    // 等他講話才會有res
                    // 這邊會結束 篩選
                    // 不會 因為下面還有function要跑
                }
            })
        })
        setTimeout(fil, 1500);

    } else {
        console.log("no value exist")
        setTimeout(fil, 1500);
    }
}

const isStart = () => {
    let start = document.querySelector('#startButton')
    if (start) {
        start.click()
    } else {
        // if start already been touched?
        setTimeout(isStart, 500)
    }
}

const isAnybodyIn = () => {
    let sys = document.querySelectorAll('.system')
    if (sys[2] && sys[2].childNodes[1]) { 
        //otherwise it appears sys[2] undefined
        // using while will overuse the memory
        //  not always on sys[2]
        // 中途聊天輸入function 必須要增加childNodes的判斷
        if (sys[2].childNodes[1].data !== "加密連線完成，開始聊天囉！") {
            sys = document.querySelectorAll('.system')
            setTimeout(isAnybodyIn, 1500)
        } else {
            // console.log("you can talk")     
        }
    } else {
        console.log("ready to start")
        let start = document.querySelector('#startButton')
        start.click()
        setTimeout(isAnybodyIn, 1000)
    }
}
fil()


// 同時進行回話方式
let talk = document.querySelector('#messageInput')
let reRun
let interval  // global var mdfk, otherwise con won't get the variabel
// 要等對方講話再回嗎 ??
const RES = () => {
    console.log("running res")
    let filterText = document.querySelectorAll('.stranger'); // ori
    let myArray = Array.from(filterText)
    let textMyArray = myArray.filter((e, i) => i % 2 == 0)
    if (!textMyArray|| !textMyArray[textMyArray.length - 1] ) {
        return; //對方沒講話 //因為對方打字中null 會過? //因為 null !== ""
        // 打字中會過 
    }else{

        console.log("%c%s", "color:purple; font-size:20px;", curMid)
        let mid = textMyArray[textMyArray.length - 1].getAttribute('mid');
        console.log("curMid:",curMid, "mid:",mid)
        //  沒有reset curMid
        if (mid && mid > curMid) {
            if (curMid == -1) { //有講話做判斷
                talk.value = "你是男生嗎"
                sendMessage()
            } else {
                // talk.value = "桃園金城武嫁到"//"你剛剛跌倒了嗎"
                // let femaleArray = ["女生", "不是"];
                let secondTalkArray = ["你剛剛跌倒了嗎", "剛剛起床發現了一件事", "平常會運動嗎"]; //謝謝你
                let ramdomNum=Math.floor((Math.random() * (secondTalkArray.length-1))); // 取得小於得最大整數 ， -1要括號起來 先*/後+-
                talk.value=secondTalkArray[ramdomNum];
                sendMessage()
                clearInterval(interval); 
                reRun=setInterval(interRun,7000); //不會第二句跳完馬上跳第一句 
                // 會一直哈囉?  //因為沒有clear
                // 打字中會把 null 傳給 curMid
                return false;
            }
        }
        if (mid){
            // 避免mid傳null值 給curMid ,對方打字中會在send 依次第一句話
            curMid = mid;
            //   對方狂輸入 會回不了畫 ((因為會一直抓到null 不過沒什麼大礙))
        }
    }
}
const interRun =()=>{
    if(reRun){clearInterval(reRun)}
    curMid=-1;
    reRunInterRun()
    interval=setInterval(RES, 3000);
}

const reRunInterRun=()=>{
    let sys = document.querySelectorAll('.system')
    console.log("reRun")
    if (sys[2] && sys[2].childNodes[1]) {
        if (sys[2].childNodes[1].data !== "加密連線完成，開始聊天囉！") {
            sys = document.querySelectorAll('.system')  //?
            setTimeout(reRunInterRun, 7000)
        } else {
            // console.log("you can talk")     
        }
    } else {
        console.log("ready to start")
        
        setTimeout(reRunInterRun, 1000)
    }
}
interRun()



// 不是match 是對方自己離開的呢


// 先理解他的架構再來寫比較不容易出錯
// response 拿到fil外面去

// 先看一下程式碼 再coding 不要直接直覺輸入
// you can talk 噴太快
// 遇到一直不回的 尷尬  設過一段時間就跳出

// ready to start too much

const main = () => {
    let isFillEnd = false;
    fil()
    console.log(isFillEnd)

    if (isFillEnd) {
        response()
    }
}

// 直接 send 
// send 完在篩


// 回復機制
//  href url 判斷 什麼程式

// 判斷機制 和聊天機制分開



var obj = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 }
// obj can't over ten


const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.filter(word => word.length > 6);

// Filtered array longWords is ["exuberant", "destruction", "present"]

changePerson() //window function

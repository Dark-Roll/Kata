
// 1. mid:11 curMid:9 沒傳值
//  開頭 2 >0 也沒傳 = =


// running res 之後 
//  第一次 是 1  0  //不是-1  ???
//  對方打字
// 0 0
// 第一次打字 會
//  沒有走到send第二句之後 被離開會怎樣?
// 就要重新洗直 因為不是-1 會拿到上一個殘留的curMid

const fil = () => {
    // init
    let left = document.querySelectorAll(".system")
    if (left[left.length - 2] && left[left.length - 2].childNodes[1]) {//.childNodes[1]){
        if (left[left.length - 2].childNodes[1].data == "對方離開了，請按離開按鈕回到首頁") {
            changePerson()
        }
    }
    // .stranger.text 抓到
    isStart()
    // console.log("start")
    // 還沒跑出來 抓不到怎麼寫function

    isAnybodyIn()

    // let initLength=0;

    let filterText = document.querySelectorAll('.stranger'); // ori




    if (filterText && filterText !== "") {
        let filterArr = ["男", "色", "boy", "臺北", "台北", "妹", "缺", "妳", "約", "嗯", "摁", "是啊", "Y", "恩", "對", "公的", "沒錯", "ㄣ", "雞雞", "Boy", "找女"];
        filterArr.push("葛格", "女友", "修幹", "休幹", "北投","炮","女孩嗎");
        let tempArr = Object.values(filterText).filter((e, i) => i % 2 == 0)
        // let tempArr =filterText.filter(elem=>elem%2==0);
        // because it is not an array, it will be so complicated
        // initLength=tempArr.length;
        tempArr.map((ele) => {
            // if (ele=="打字中..."||"") return false;
            if (!ele || !ele.childNodes[1]) return false;
            console.log(tempArr)
            let filterTA = ele.childNodes[1].data;//.innerText; (X )  //toString fuck find so long
            // 打字中... //會end function 
            // 一下打 一下不打 會undefined
            // console.log("%c%s", "color: purple; background: lightblue;  font-size: 14px;", filterTA)  // What does other people say
            console.log("%c%s", "color:purple; font-size: 14px;", filterTA)  // What does other people say


            // 哪時set true?
            // let shouldRes=true;

            filterArr.map((e) => {
                if (filterTA.indexOf(e) > -1) {
                    console.log("match")
                    changePerson()
                    let yes = document.querySelector('#popup-yes')
                    yes.click()
                    // 延遲?
                    // 下面的setTimeout搞定        
                } else {
                    // receive()
                    // console.log(shouldRes)
                    // if (shouldRes){

                    // 等他再講一次話再set true
                    // 取得 .length
                    // response()
                    // shouldRes=false;
                    // true 會進來跑一次
                    // 但會一直進來 因為會 回呼這個function
                    // console.log("After response :"+shouldRes)
                    // }
                    // let isFillEnd=true;
                    return false;
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
    // return initLength;
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

// set 完value 要怎麼 跳出function
// 如果回答 嗯 再change 
// 為什麼 會跳到檢舉的地方?
// 我的response報噴

const isAnybodyIn = () => {
    let sys = document.querySelectorAll('.system')
    if (sys[2] && sys[2].childNodes[1]) { //otherwise it appears sys[2] undefined
        // using while will overuse the memory
        //  not always on sys[2]
        // 中途聊天輸入function 必須要增加childNodes的判斷
        if (sys[2].childNodes[1].data !== "加密連線完成，開始聊天囉！") {
            // console.log("wait ")
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

const response = () => {



    // 要有人in了 才能res


    // 會狂飆 = =
    // sendMessage()
    // isMale()
    // setTimeout(isMale,1000)

}
// get initlength value
fil()

// 第二次跑的時候 會更新mid 值 無法第一句話
// 不一定是對方離開,  重新開始  //加密連線完成
let curMid = -1;
let talk = document.querySelector('#messageInput')
let reRun
let interval  // global var mdfk, otherwise con won't get the variabel
// 要循環呼叫嗎?
//  偵測到離開 recall
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
        console.log("null 判斷"+textMyArray[0]+" and "+textMyArray[textMyArray.length-1]);
        let mid = textMyArray[textMyArray.length - 1].getAttribute('mid');
        console.log("curMid:",curMid, "mid:",mid)
        //  curMid : null 有近來 ? 沒設判斷 當然阿
        //  沒有reset curMid
        // -1,null  null,null null,0
        // 抓到兩次null
        if (mid && mid > curMid) {
            if (curMid == -1) { //有講話做判斷
                console.log("印印的")
                talk.value = "哈囉"
                sendMessage()
            } else {
                talk.value = "桃園金城武嫁到"//"你剛剛跌倒了嗎"
                sendMessage()
                clearInterval(interval); 
                reRun=setInterval(interRun,1500); //不會第二句跳完馬上跳第一句 
                // 會一直哈囉?  //因為沒有clear
                // 打字中會把 null 傳給 curMid
                return false;
                // match 離開 不會送第一句
            }
        }
        if (mid){
            // 避免mid傳null值 給curMid ,對方打字中會在send 依次第一句話
            curMid = mid;
// 兩個bug 
// 1. mid:11 curMid:9 沒傳值
//  開頭 2 >0 也沒傳 = =
// 2. 開頭 //因為洗完一次值之後 要在判斷一次才會大於
// 3. 對方狂輸入 會回不了畫 ((因為會一直抓到null 不過沒什麼大礙))
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
            // console.log("wait ")
            sys = document.querySelectorAll('.system')  //?
            setTimeout(reRunInterRun, 7000)
        } else {
            // console.log("you can talk")     
        }
    } else {
        console.log("ready to start")
        // let start = document.querySelector('#startButton')
        // start.click()
        setTimeout(reRunInterRun, 1000)
    }
}
interRun()


/*


let interval  // global var mdfk, otherwise con won't get the variabel
const interRun =()=>{
    interval=setInterval(con, 500);
}
const con=()=>{
    console.log("in")
    clearInterval(interval);
    // int=window.clearInterval(int)"
    console.log("a")
}







let curMid = -1;
let talk = document.querySelector('#messageInput')

// 要循環呼叫嗎?
//  偵測到離開 recall
// curMid
const RES = () => {

    let filterText = document.querySelectorAll('.stranger'); // ori
    let myArray = Array.from(filterText)
    let textMyArray = myArray.filter((e, i) => i % 2 == 0)
    if (textMyArray.length == 0) return; //對方沒講話
    console.log("%c%s", "color:purple; font-size:20px;", mid, curMid)

    let mid = textMyArray[textMyArray.length - 1].getAttribute('mid');
    if (mid && mid > curMid) {
        if (curMid == -1) { //有講話做判斷
            console.log("印印的")
            talk.value = "你是男的嗎?"
            sendMessage()
        } else {
            talk.value = "你剛剛跌倒了嗎"
            sendMessage()
            clearInterval(interval);
        }
    }
    curMid = mid;
}
let interval = setInterval(RES, 3000);




let left = document.querySelectorAll(".system")
if (left[left.length - 2] && left[left.length - 2].childNodes[1]) {//.childNodes[1]){
    if (left[left.length - 2].childNodes[1].data == "對方離開了，請按離開按鈕回到首頁") {
        // changePerson()
    }
}






const main = () => {
    if left
    if start(include lag ?)
    if connect 
    filter  loop above

    receive
    response
    ...
            ...
if left 
    ... 
            ...
if left 
    
}

left soon
but start a little slowly

打字中... //會end function

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

if match femaleArray, then firstTalkArray
let femaleArray = ["女生", "不是"];
let firstTalkArray = ["你剛剛跌倒了嗎", "剛剛起床發現了一件事", "平常會運動嗎"]; //謝謝你



let curMid = -1;
let talk = document.querySelector('#messageInput')

const RES = () => {
    let filterText = document.querySelectorAll('.stranger'); // ori
    let myArray = Array.from(filterText)
    let textMyArray = myArray.filter((e, i) => i % 2 == 0)
    if (textMyArray.length == 0) return;
    let mid = textMyArray[textMyArray.length - 1].getAttribute('mid');
    if (mid && mid > curMid) {
        if (curMid == -1) {
            talk.value = "你是男的嗎?"
            sendMessage()
        } else {
            talk.value = "你剛剛跌倒了嗎"
            sendMessage()
            clearInterval(interval);
        }
    }
    curMid = mid;
}
let interval = setInterval(RES, 3000);
//  他抓到 打字中的直了...


// let mid = arr[arr.length-1].getAttribute('mid');
if arr.length > 0
if () {
        res
    }
curMid = mid;


//  send message one time
//  how to write ??
let shouldRes = true;
let init












const isMale = () => {
    let yesArray = ["嗯", "是啊", "Y", "恩"];
    let genderDiv = document.querySelectorAll('.stranger');
    let genderArr = Object.values(genderDiv).filter((e, i) => i % 2 == 0);
    // genderArr[genderArr.length-1].childNodes[1]
    if (!genderArr && !genderArr[genderArr.length - 1].childNodes[1]) {
        setTimeout(isMale, 1000)
        return false;
    }
    console.log(genderArr)
    console.log(genderArr[genderArr.length - 1])
    let genderText = genderArr[genderArr.length - 1].childNodes[1].data;
    yesArray.map((e) => {
        if (genderText.indexOf(e) > -1) {
            changePerson()
            let yes = document.querySelector('#popup-yes')
            yes.click()
        }
    })

}

// 回復機制
//  href url 判斷 什麼程式

// 判斷機制 和聊天機制分開



var obj = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 }
// obj can't over ten


const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.filter(word => word.length > 6);

// Filtered array longWords is ["exuberant", "destruction", "present"]

changePerson() //window function

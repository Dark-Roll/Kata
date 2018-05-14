//  超過100 又爆了 == 

let strangeConversation = [];
let strangeMid = [];

let meConversation = [];
let meMid = [];

let meAll = document.querySelectorAll('.me');
let meConversationFilter = Object.values(meAll).filter((e, i) => i % 2 == 0)

let strangeAll = document.querySelectorAll('.stranger');
let strangeConversationFilter = Object.values(strangeAll).filter((e, i) => i % 2 == 0)

meConversationFilter.map((e) => {
    meMid.push(e.getAttribute('mid'))
    meConversation.push(e.childNodes[1])
})

strangeConversationFilter.map((e) => {
    strangeMid.push(e.getAttribute('mid'))
    strangeConversation.push(e.childNodes[1])
})



let conversation = [];

for (let i = 0; i < strangeMid.length; i++) {
    conversation.push({
        // "00" must do
        mid: strangeMid[i] < 100 ? (strangeMid[i] < 10 ? "00" + strangeMid[i] : 0 + strangeMid[i]) : strangeMid[i],
        text: strangeConversation[i],
        who: "stranger"
    })
}
for (let i = 0; i < meMid.length; i++) {
    conversation.push({
        mid: meMid[i] < 100 ? (meMid[i] < 10 ? "00" + meMid[i] : 0 + meMid[i]) : meMid[i],
        text: meConversation[i],
        who: "me"
    })
}

for (let i = 0; i < conversation.length; i++) {
    for (let j = 0; j < conversation.length - i - 1; j++) {
        if (conversation[j].mid > conversation[j + 1].mid) {
            let tmp = conversation[j + 1]
            conversation[j + 1] = conversation[j]
            conversation[j] = tmp
        }
    }
}


conversation.map((e) => {
    if (e.who === "stranger") {
        // let s=$('<p>').append(e.text)
        // stranger.append(s)
        // e.text=" "+e.text
        // console.log("　　　　　　　　　　　　　　　　 "+e.text+'\n')  // 這出現問題 == ?

        //  要 逗號才有用 ,不然會顯示object.text(如果是+的話)
        // console.log(e.text+"  "+e.mid)
        console.log("陌生人: ", e.text)
    } else if (e.who === "me") {
        console.log("我    : ", e.text)
    }
})


//  說真的啦 
// 加個好友阿 ( 不要) 為什麼阿 來這不就是要交朋友的嗎

// 那幹嘛怕
// 我也是很有姿色的好嗎


// }
// getConversation()

// let res= $("<div>")
// let stranger=$('<div>')
// $('#gt-text-top').append(res).append(stranger)
// $()
// append

// 寫進網頁裡?






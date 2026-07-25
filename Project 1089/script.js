// =====================
// Scene Elements
// =====================

const opening = document.getElementById("opening");
const quizScene = document.getElementById("quizScene");
const ending = document.getElementById("ending");

const beginBtn = document.getElementById("beginBtn");

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");

const questionTitle = document.getElementById("questionTitle");
const questionContent = document.getElementById("questionContent");
const memoryIntro = document.getElementById("memoryIntro");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");

// =====================
// Questions
// =====================


const questions = [

{
    title:"Chapter 1 相遇",

    intro:`还记得吗？

2023年的8月，

我们的第一次见面。

原来，我的后桌是一个高冷的小女孩呀。

其实我也不太记得我们是怎么玩到一起的。

但是我想，

红楼里的这句经典之言（哈哈），

或许是我们友谊的契机。`,

    content:"--，--，-----",
    
    score:9,

    check:function(answer){

        answer = answer.replace(/[，。,.\s]/g,"");

        return answer.includes("老刘老刘食量大如牛");

    }

},

{
    title:"Chapter 2 相识",

    intro:`现在回想高三的日子，
    苦难被淡化，
    其实真正记得的就是和朋友们在一起的时光。
    
    那些一起上课。
    一起聊天、
    一起犯傻的瞬间，
    都变成了很珍贵的回忆。
    
    2024.1.25 月圆之夜
    有一个文豪写了一首诗`,


    content:`树上明月光，
    有晗没有熵。
    偕手望明月，
    不如芷草香。
    不知道你还记不记得是哪位大大大文豪————`,

    score:80,

    check:function(answer){

        return answer.includes("微专题");

    }

},

{
    title:"Chapter 3 相离",

    intro:`后来，
    我们去了不同的大学、不同的城市。
    
    我真的真的没有想到
    你选择了警校
    选择了离家千里的地方。

    女孩，
    我敬佩的勇气与决心`,

        content:`____ km
        是沈阳和广东的距离，
        是梦想和家的距离，
        也是你和我的距离。`,
        
        score:1000,
   

    check:function(answer){

        let num=parseInt(answer);

        if(isNaN(num)) return false;

        return Math.abs(num-2763)<=100;

    }

},

{
    title:"Chapter 4 相期",

    intro:`每次放假的时候
    我就要开始盘算有没有合适的日子。
    奈何我们俩这学校的假期错开的太多。
    
    不过没关系
    有缘人总会再见！

    明天后天或者是大后天？`,

    content:"你觉得，我们下一次见面会是什么时候？",
    
    check:function(answer){

        return answer.trim()!=="";

    }

}

];

let currentQuestion = 0;

// =====================
// Begin Button
// =====================

const bgm = document.getElementById("bgm");


beginBtn.onclick=function(){

    bgm.play();

    opening.classList.add("hidden");

    quizScene.classList.remove("hidden");


    setTimeout(function(){

        intro.classList.add("hidden");

        quiz.classList.remove("hidden");

        showQuestion();

    },3000);

}

function nextQuestion(){

    addScore(questions[current].score);

    current++;

    showQuestion();

}

// =====================
// Show Question
// =====================

function showQuestion(){

    feedback.innerHTML="";

    answerInput.value="";


    questionTitle.innerHTML =
    questions[currentQuestion].title;


    memoryIntro.innerHTML =
    questions[currentQuestion].intro;


    questionContent.innerHTML =
    questions[currentQuestion].content;

}

let isChanging = false;

// =====================
// Submit
// =====================

submitBtn.onclick=function(){

    const answer=answerInput.value;

    if(!questions[currentQuestion].check(answer)){

        feedback.innerHTML="🤔 再想想～";

        return;

    }

    // 第四题

    if(currentQuestion==3){

        feedback.innerHTML="收到！期待捏嘿嘿";

        setTimeout(function(){

            quizScene.classList.add("hidden");

            ending.classList.remove("hidden");

        },1800);

        return;

    }

    feedback.innerHTML=`✓ Correct!`;
    
    addScore(questions[currentQuestion].score);
    
    currentQuestion++;
    
    setTimeout(showQuestion,1500);

}

let score = 0;

function addScore(points){

    score += points;

    document.getElementById("score").innerText = score;

}
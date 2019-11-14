var story = [
    [
        "npc_2004_alty",
        "bg_infirmary",
        "char_003_kalts_1",
        "char_003_kalts_2",
        "char_003_kalts_3",
        "npc_10002"
    ],
    [
        "m_sys_lab_loop",
        "m_sys_lab_intro"
    ],
    [
        "voice.playMusic({intro:'m_sys_lab_intro', key:'m_sys_lab_loop', volume:0.8, crossfade:1.5});playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'唔嗯。'});",
        "playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'这就是传闻中的罗德岛啊，感觉确实是个充满了谜团的地方。'});",
        "background.showImage({image:'bg_infirmary', fadetime:1,block:true});playground.drawDialog({name:'Alty',text:'空气中还夹杂着一股非常熟悉的气息。嗯......'});",
        "playground.drawDialog({name:'Alty',text:'要不是真的登上这艘载具，我还以为自己依然呆在海边呢。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'这里近期确实接待过几个阿戈尔人。'});",
        "playground.drawDialog({name:'凯尔希',text:'你也是阿戈尔的访客，但我没在访客名单上看到你的名字。我也许没法接待你。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'啊啊，抱歉抱歉，不过不劳烦你了，我说点事就走，不会在这里呆太久的。'});",
        "playground.drawDialog({name:'Alty',text:'咦，你居然还知道我的名字？'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'这几天会待在汐斯塔一带的人，没有人不知道你的名字。'});",
        "playground.drawDialog({name:'凯尔希',text:'虽然我并没有去，但我也早有耳闻。日落即逝的贝斯手Alty女士，罗德岛不是个可以随意进出的地方。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'啊呀，唉，不要那么有敌意啊。毕竟我们有很多共同话题，对吧，比如说还能看到星星的时候？'});",
        "playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'——请坐。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'谢谢。你肯定会好奇我是怎么进来的吧？'});",
        "playground.drawDialog({name:'Alty',text:'这不重要的，你不用担心罗德岛的安保设施有什么漏洞，单纯是我运气好罢了。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'话语掩盖不了你的实力。请放心，我不怎么担忧，至少它只会对重要的访客网开一面。'});",
        "playground.drawDialog({name:'凯尔希',text:'不过，一位音乐巨星是怎么对这狭小的病房产生兴趣的？'});",
        "playground.drawDialog({name:'凯尔希',text:'如果是想和你的阿戈尔朋友叙旧，你可能走错房间了。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'朋友？嗯......谈不上吧？不，该说，离朋友有点远呢......'});",
        "playground.drawDialog({name:'Alty',text:'其实我是来找你的。或者说，是来看看你的。'});",
        "playground.drawCharacter({name:'char_003_kalts_2'});playground.drawDialog({name:'凯尔希',text:'很抱歉，我不认识你，我也不是动物园的展品。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_2',focus:1});playground.drawDialog({name:'Alty',text:'阿戈尔人的传闻，我从Frost那里听说了很多。她很少讲故事的，但那次她说了很多。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'我没兴趣听你说些你朋友的奇异冒险故事......'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'那唱出来怎么样？'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'......或是面目全非的有关我的逸闻。我希望你能更直接一点。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'有人告诉过我闲聊可以缓和气氛，我做的似乎不太成功......'});",
        "playground.drawDialog({name:'Alty',text:'那就开始吧。我其实有些讨厌他们阿戈尔人。当然我也知道，他们确实挺可怜的。'});",
        "playground.drawDialog({name:'Alty',text:'只是，如果没有你出现的话，这几个阿戈尔人可能都会沉入海底，被幽暗的海洋吞噬。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'我并没有做什么重要的事情。'});",
        "playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'你救了他们，而且这里就有好几个。'});",
        "playground.drawCharacter({name:'char_003_kalts_3'});playground.drawDialog({name:'凯尔希',text:'......'});",
        "playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'这些特别的阿戈尔人，他们一点都不尊敬你，明明你为他们做了这么多。'});",
        "playground.drawDialog({name:'Alty',text:'你平时是不是对他们太凶了？'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_3',focus:2});playground.drawDialog({name:'凯尔希',text:'我只是在阻止他们自取灭亡。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_3',focus:21});playground.drawDialog({name:'Alty',text:'那也是种慈悲心的体现，医生。'});",
        "playground.drawDialog({name:'Alty',text:'只不过，我的问题也就在这里。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'请说。'});",
        "playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'你知道阿戈尔人的敌人是什么吗？'});",
        "playground.drawDialog({name:'Alty',text:'或者，你其实知道我的身份吧？'});",
        "playground.drawCharacter({name:'char_003_kalts_2',name2:'npc_10002',focus:2});playground.drawDialog({name:'Mon3tr',text:'！！'});",
        "playground.drawCharacter({name:'char_003_kalts_2',name2:'npc_10002',focus:1});playground.drawDialog({name:'凯尔希',text:'Mon3tr，停下！'});",
        "playground.drawCharacter({name:'char_003_kalts_2',name2:'npc_10002',focus:1});playground.drawDialog({name:'凯尔希',text:'你很年轻。'});",
        "playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'是的，我们很年轻，我们没有经历过那些悲伤的事情，所以我们还在这，还可以说话，还可以唱歌。'});",
        "playground.drawCharacter({name:'char_003_kalts_2',name2:'npc_10002',focus:1});playground.drawDialog({name:'凯尔希',text:'深海猎人们在做他们应该做的事情。'});",
        "playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'我明白，这些我都明白。只不过，我们也想知道答案。'});",
        "playground.drawDialog({name:'Alty',text:'我们一点也不想和这些小家伙敌对。'});",
        "playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'Frost她啊，从小就只对音乐和食物这两样东西感兴趣。就连休息对她来说都是浪费时间。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'这位朋友你可以等到我们真正会面了再介绍给我。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'对不起，我的老毛病又犯了......'});",
        "playground.drawDialog({name:'Alty',text:'我信任医生你，以及你掌握着的真相。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'我不认为你对真相的了解比我少。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'不，只是我们有各自擅长的事情而已，比如说，我觉得你唱歌也许不会那么动听。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'......'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'啊，嗯，只是举个例子！没有要冒犯你的意思。'});",
        "playground.drawDialog({name:'Alty',text:'但阿戈尔的平静，就像你知道的那样，只是个表面现象。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'大多数人对大海一无所知。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'大地的孩子又怎么会知道这些呢？对他们要求太高也不好。'});",
        "playground.drawDialog({name:'Alty',text:'只是，哪怕是这表面上的平静，可能也没法坚持太久了。欲望果然是可怕的东西。'});",
        "playground.drawDialog({name:'Alty',text:'所以，我需要一些，嗯，信息。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'又是信息？'});",
        "playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'是的。'});",
        "playground.drawDialog({name:'Alty',text:'这么说......哦哦，原来对这些感兴趣的不止我一个啊，哈哈。'});",
        "playground.drawDialog({name:'Alty',text:'我有些好奇，上一个人是谁呢？'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'是个阿戈尔人，也是个深海猎人。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'那我们也许真的能做朋友呢，呼呼。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'当然。我能理解你为什么来找我。'});",
        "playground.drawDialog({name:'凯尔希',text:'活得越久，故事越多，伤痕越疼，脾气越差。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'抱歉，我不是想揭你的伤疤......'});",
        "background.showImage({fadetime:3, block:false});playground.drawCharacter({name:'npc_2004_alty'});playground.drawDialog({name:'Alty',text:'只是你确实不像其他人。他们会被过多的感情束缚、被言论利用，甚至变成某种灾难。'});",
        "playground.drawDialog({name:'Alty',text:`也难怪那个人让你作为最后的底牌来帮助小兔子和Dr.${nickname}。`});",
        "playground.drawDialog({name:'Alty',text:'你其实是台X光机对吧？'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'我也希望自己是台单纯的机器。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'唔，不好意思，我其实只是想说，虽然你不会选择告知别人，但里面的东西，你其实已经全看到了吧？'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'这个问题，我不能回答你。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'那就让我切入主题吧。这个问题你是可以回答的。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'说吧，年轻的巨星。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'啊，谢谢。'});",
        "blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({});playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'请告诉我，你所知道的，关于那片海洋下发生的一切。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'这不是一种信息。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'不，我说的是，“那片海洋”。'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'——'});",
        "playground.drawCharacter({name:'npc_2004_alty',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'Alty',text:'Frost是我们中最年轻的。只有我们四个是年轻的。'});",
        "playground.drawDialog({name:'Alty',text:'她嗅到那几个阿戈尔人的味道。那不是阿戈尔人应该有的味道。'});",
        "playground.drawDialog({name:'Alty',text:'“它们不能再歌唱。它们不能再说话。它们离我们越来越远。它们饥渴难当。”'});",
        "playground.drawDialog({name:'Alty',text:'AMa-10凯尔希医生，请你告诉我——这些特别的阿戈尔人，他们是怎么诞生的？'});"
    ]
];
var story = [
    [
        "bg_festival_2",
        "char_340_shwaz_2",
        "avg_npc_023_2",
        "char_348_ceylon_3",
        "char_290_vigna",
        "avg_npc_017_3",
        "avg_npc_017_1",
        "avg_npc_017_2",
        "avg_npc_017_5",
        "avg_npc_024",
        "char_348_ceylon_8",
        "char_188_helage_1",
        "char_145_prove_1",
        "char_166_skfire_1"
    ],
    [
        "m_bat_fesmetal_loop",
        "m_bat_fesmetal_intro",
        "d_gen_livecrowd",
        "d_gen_fireworks"
    ],
    [
        "blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_festival_2',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:2, block:true});voice.playMusic({intro:'m_bat_fesmetal_intro', key:'m_bat_fesmetal_loop', volume:0.8, crossfade:1.5});delay(1);playground.drawCharacter({name:'char_340_shwaz_2'});playground.drawDialog({name:'黑',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_023_2'});playground.drawDialog({name:'克洛宁',text:'所以你们都知道了。'});",
        "playground.drawCharacter({name:'char_348_ceylon_3'});playground.drawDialog({name:'锡兰',text:'这样简单的骗局，又能欺瞒多久呢？'});",
        "playground.drawCharacter({name:'char_290_vigna'});playground.drawDialog({name:'红豆',text:'啊，LIVE快开始了......'});",
        "voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_festival_2',xscale:1.1, yscale:1.1});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'avg_npc_017_3',fadetime:1,block:true});delay(1);playground.drawDialog({name:'D.D.D.',text:'女士们，先生们，欢迎你们来到黑曜石节！'});",
        "playground.drawCharacter({name:'avg_npc_017_1'});playground.drawDialog({name:'D.D.D.',text:'你们过得愉快吗！！！'});",
        "playground.drawCharacter({});background.cameraShake({duration:2, xstrength:8, ystrength:8, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});playground.drawDialog({name:'观众',text:'（狂热的欢呼声）'});",
        "playground.drawCharacter({name:'avg_npc_017_2'});playground.drawDialog({name:'D.D.D.',text:'多么热情的回应，但是我要告诉你们，你们还没有见识到黑曜石节真正的魅力！'});",
        "playground.drawDialog({name:'D.D.D.',text:'今晚，所有邀请的音乐家们将齐聚一堂，为你们带来无上的听觉与视觉的盛宴！'});",
        "playground.drawCharacter({name:'avg_npc_017_1'});playground.drawDialog({name:'D.D.D.',text:'一个主场舞台，四个大舞台，十二个小舞台，四十位来自各领域的知名音乐家，十八个小时，将会一直演出直到明天的太阳升起！'});",
        "playground.drawCharacter({name:'avg_npc_017_5'});playground.drawDialog({name:'D.D.D.',text:'告诉我，你们准备好了吗！！！'});",
        "playground.drawCharacter({});background.cameraShake({duration:2, xstrength:8, ystrength:8, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});playground.drawDialog({name:'观众',text:'（疯狂的欢呼声）'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});voice.playSound({key:'d_gen_fireworks', volume:0.8});voice.playSound({key:'d_gen_fireworks', volume:0.8});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_340_shwaz_2'});playground.drawDialog({name:'黑',text:'......锡兰告诉了我火山的事情了。'});",
        "playground.drawDialog({name:'黑',text:'所以你不仅篡改了火山监测数据，而且宣称小姐要散布谣言。'});",
        "playground.drawCharacter({name:'avg_npc_023_2',name2:'char_340_shwaz_2',focus:1});playground.drawDialog({name:'克洛宁',text:'因为你我都知道啊。赫尔曼做的那些事，我们都知道！'});",
        "playground.drawCharacter({});playground.clearDialog();playground.drawDialog({name:'？？？',text:'知道什么的话，就说吧。'});",
        "playground.drawCharacter({name:'avg_npc_024',fadetime:1,block:true});delay(1);playground.drawDialog({name:'？？？',text:'克洛宁，说下去吧。但你也要把我“因事务出差”的时候，你到底做了些什么，全都说出来。'});",
        "playground.drawCharacter({name:'char_348_ceylon_8'});playground.drawDialog({name:'锡兰',text:'爸——父亲？！'});",
        "playground.drawCharacter({name:'avg_npc_023_2'});playground.drawDialog({name:'克洛宁',text:'你怎么在这里？！'});",
        "playground.drawCharacter({name:'avg_npc_024'});playground.drawDialog({name:'赫尔曼',text:'很意外吗，克洛宁。'});",
        "playground.drawDialog({name:'赫尔曼',text:'在我明令禁止了从火山中开采黑曜石之后，在市场上依然有新开采的黑曜石流通。'});",
        "playground.drawDialog({name:'赫尔曼',text:'开采队很多次出现在火山口，却没有人向我报告。'});",
        "playground.drawDialog({name:'赫尔曼',text:'最终开采的货物经过多次转送，已经被送到了市政厅的废弃仓库。'});",
        "playground.drawDialog({name:'赫尔曼',text:'在我下令拨款为汐斯塔出现的矿石病患者提供各方面资助后，市里反而出现了各种他们受到的不公待遇的流言。'});",
        "playground.drawDialog({name:'赫尔曼',text:'这些事情有没有让你意外过？'});",
        "playground.drawCharacter({name:'avg_npc_023_2'});playground.drawDialog({name:'克洛宁',text:'嘁......'});",
        "playground.drawCharacter({name:'avg_npc_024'});playground.drawDialog({name:'赫尔曼',text:'这些事情让我意外到愤怒难安！！'});",
        "playground.drawDialog({name:'赫尔曼',text:'为了找到这些事情的真相，我放出了离开城市的消息，让黑作为我的下属替我在城市调查真相。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_188_helage_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'赫拉格',text:'看来，只要调查一下这些记录和相关人员就行了。'});",
        "playground.drawCharacter({name:'char_348_ceylon_8'});playground.drawDialog({name:'锡兰',text:'赫拉格爷爷，你们也平安无事！'});",
        "playground.drawCharacter({name:'avg_npc_024'});playground.drawDialog({name:'赫尔曼',text:'真遗憾，克洛宁。'});",
        "playground.drawDialog({name:'赫尔曼',text:'原本，我是不介意和你分享一些东西的，但你太急躁了。'});",
        "playground.drawCharacter({name:'avg_npc_023_2'});playground.drawDialog({name:'克洛宁',text:'我？急躁？'});",
        "playground.drawDialog({name:'克洛宁',text:'我这些不都是为了这个城市，不都是你教我的吗！'});",
        "playground.drawDialog({name:'克洛宁',text:'十年前的巴鲁一家，八年前的电视塔倒塌案，还有你如何说服......'});",
        "playground.drawDialog({name:'克洛宁',text:'哦，我想是不是用吞并更好一些？你是如何吞并塔拉克部族的，我都看在眼里。'});",
        "playground.drawDialog({name:'克洛宁',text:'我的一切都是从您那里学来的......'});",
        "playground.drawDialog({name:'克洛宁',text:'盈利，处理。手段不重要，结果才是重要的。'});",
        "playground.drawDialog({name:'克洛宁',text:'这个破烂的乡下，你以为我为它付出了多少心血，换来的又有什么？'});",
        "playground.drawDialog({name:'克洛宁',text:'好不容易因为黑曜石带来的收益，却要全部变成给那些根本治不好的病人的补贴？'});",
        "playground.drawDialog({name:'克洛宁',text:'与其如此，还不如就让火山爆发好了！而我只需要保护好汐斯塔的物资和财产，一样可以东山再起！'});",
        "playground.drawCharacter({name:'avg_npc_024'});playground.drawDialog({name:'赫尔曼',text:'我做过许多事。但我不会拿汐斯塔做赌注。'});",
        "playground.drawDialog({name:'赫尔曼',text:'矿工和研究者的生命，全城的生命都被你视作什么了。'});",
        "playground.drawDialog({name:'赫尔曼',text:'克洛宁，你被解雇了。'});",
        "playground.drawCharacter({name:'avg_npc_023_2'});playground.drawDialog({name:'克洛宁',text:'哈哈哈哈糊涂的老头，那可还说不清楚！'});",
        "playground.drawDialog({name:'克洛宁',text:'多亏你的喋喋不休，我的人手已经全都到了！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});background.showImage({});blocker.blocker({a:0, fadetime:2, block:false});playground.drawDialog({name:'伊芙利特',text:'嗯？等等，我怎么烤糊了？'});",
        "playground.drawDialog({name:'伊芙利特',text:'角峰叔！你来看一下！'});",
        "playground.drawDialog({name:'伊芙利特',text:'搞什么，感觉温度流向都变了......'});",
        "playground.clearDialog();delay(2);playground.drawDialog({name:'古米',text:'嗯嗯嗯！海浪好大！'});",
        "playground.drawDialog({name:'古米',text:'欸！海浪变得好大哦！也太大了吧哈哈哈哈哈！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});background.showImage({});blocker.blocker({a:0, fadetime:2, block:false});playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'......'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'......'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'怎么不说话了，你刚刚明明话很多的。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'我在想。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'唔，像你这样的人居然还有这么沉默寡言的时候。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'我感觉我的大脑有些激动，先让我冷静一下。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'不是，虽然我不是地质学家，也不懂什么源石物理啊高能源石技艺啊......'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'高能源石技艺和火山生态学是两回事，肯定没办法解决我们现在的问题。'});",
        "playground.drawDialog({name:'天火',text:'硬要说的话，造一个巨大的容器把所有能量抽出来，也许......'});",
        "playground.drawDialog({name:'天火',text:'可这种法术，就连我也要编个好几年。不可能的，完全不可能。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'我说了我不懂啊！但现在的情况，很不妙吧！非常有问题啊！'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'是不妙啊！你以为什么情况下我才会激动啊！'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'想想办法啊！'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'我不是在想吗！'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'必须赶紧把这件事告诉博士才行......'});",
        "playground.drawDialog({name:'普罗旺斯',text:'那就拜托你好好想想了，我立刻去发报！可别被热昏头脑！'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'我很冷静。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:1});playground.drawDialog({name:'普罗旺斯',text:'刚才你才说很激动来着！而且你头发都烧着了啊！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});playground.clearDialog();background.showImage({});playground.drawDialog({name:'天火',text:'唔，生态圈恶化导致的地质演变......哼，还有救！'});"
    ]
];
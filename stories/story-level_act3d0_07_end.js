var story = [
    [
        "bg_festival_2",
        "avg_npc_024",
        "avg_npc_023_2",
        "char_188_helage_1",
        "char_348_ceylon_8",
        "ac3_volcano",
        "ac3_volcano2",
        "char_340_shwaz_2",
        "char_348_ceylon_3",
        "char_348_ceylon_2",
        "char_340_shwaz_3"
    ],
    [
        "m_bat_fesmetal_loop",
        "m_bat_fesmetal_intro",
        "d_gen_smallearthquake",
        "m_bat_volcano_loop",
        "m_bat_volcano_intro",
        "d_gen_transmissionget"
    ],
    [
        "voice.playMusic({intro:'m_bat_fesmetal_intro', key:'m_bat_fesmetal_loop', volume:0.8, crossfade:1.5});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.7, block:true});playground.drawCharacter({});background.showImage({image:'bg_festival_2',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:0.7, block:true});playground.drawCharacter({name:'avg_npc_024',name2:'avg_npc_023_2',focus:1});playground.drawDialog({name:'赫尔曼',text:'你跟在我身边十五年，什么都没有学会。'});",
        "playground.drawDialog({name:'赫尔曼',text:'只学到了一些上不了台面的手段，真是个蠢材。'});",
        "playground.drawCharacter({name:'avg_npc_024',name2:'avg_npc_023_2',focus:2});playground.drawDialog({name:'克洛宁',text:'蠢材......呵呵，呵哈哈哈哈哈哈！'});",
        "playground.drawDialog({name:'克洛宁',text:'老东西，你该不会以为这就是我的最后一步棋了吧？'});",
        "voice.stopMusic({fadetime:2});voice.playSound({key:'d_gen_smallearthquake', volume:0.6});background.cameraShake({duration:2, xstrength:4, ystrength:4, vibrato:20, randomness:30, fadeout:true});playground.drawCharacter({name:'char_188_helage_1'});playground.drawDialog({name:'赫拉格',text:'怎么回事？'});",
        "playground.drawCharacter({name:'char_348_ceylon_8'});playground.drawDialog({name:'锡兰',text:'这......难道是火山爆发前引起的轻型地震？！'});",
        "voice.playMusic({intro:'m_bat_volcano_intro', key:'m_bat_volcano_loop', volume:0.8, crossfade:1.5});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});background.showImage({});playground.drawCharacter({fadetime:0});playground.drawImage({image:'ac3_volcano',x:0, y:0, xscale:1, yscale:1, fadetime:0, screenadapt:'coverall'});blocker.blocker({a:0, fadetime:1, block:true});playground.drawDialog({name:'克洛宁',text:'来了，呵呵，终于来了。'});",
        "playground.drawDialog({name:'克洛宁',text:'跟这座城市一起化为尘埃吧！'});",
        "playground.drawImage({image:'ac3_volcano2',x:0, y:0, xscale:1, yscale:1, fadetime:2, screenadapt:'coverall'});playground.drawDialog({name:'克洛宁',text:'即使现在你们想去控制广播塔也晚了！市民只会陷入恐慌！'});",
        "playground.drawDialog({name:'克洛宁',text:'火山的活动日期近在眼前，你们以为有了那些简单的样本资料就能搞清楚什么？'});",
        "playground.drawDialog({name:'克洛宁',text:'快速的逃生渠道都在我手里！你们谁都逃不走！'});",
        "playground.drawDialog({name:'克洛宁',text:'假装清高的家伙们，你们谁都救不了！'});",
        "playground.drawDialog({name:'克洛宁',text:'一切都会随着城市的毁灭被消灭！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_festival_2',screenadapt:'coverall'});playground.drawCharacter({fadetime:0});playground.drawImage({});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_348_ceylon_8'});playground.drawDialog({name:'锡兰',text:'博士，怎么办！'});",
        "playground.Decision({options:[['赶紧动员大家疏散人群！', '至少先让大家离开危险地区！']]});",
        "predicate = ['1', '2'];",
        "playground.drawCharacter({name:'char_188_helage_1'});playground.drawDialog({name:'赫拉格',text:'博士，要不要通知罗德岛全体......'});",
        "playground.drawCharacter({});voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawDialog({name:'艾雅法拉',text:'博士，能听到吗！火山的分析研究完成了！'});",
        "playground.drawDialog({name:'艾雅法拉',text:'如果现在的话，还有机会能争取到更多的时间！'});",
        "playground.drawDialog({name:'普罗旺斯',text:'博士，我们已经把火山活动的原因找到了，这次的火山活动很有可能是可以被阻止的！'});",
        "playground.drawDialog({name:'艾雅法拉',text:'现在大家冷静下来听我说，只要按照这个方法来，一定能把火山爆发的时间推迟！'});",
        "playground.drawCharacter({name:'char_188_helage_1'});playground.drawDialog({name:'赫拉格',text:'我们可以帮忙，如果真的是人力所及的话。'});",
        "playground.drawCharacter({name:'char_340_shwaz_2'});playground.drawDialog({name:'黑',text:'......嗯。'});",
        "playground.drawCharacter({name:'char_348_ceylon_3',name2:'char_340_shwaz_2',focus:1});playground.drawDialog({name:'锡兰',text:'不，这件事就交给我们吧。'});",
        "playground.drawDialog({name:'锡兰',text:'克洛宁已经蛰伏了这么长的时间，他的残党必然布及整座城市。'});",
        "playground.drawDialog({name:'锡兰',text:'现在正是最关键的时刻。黑，赫拉格爷爷，你们都有自己的事情要做。'});",
        "playground.drawCharacter({name:'char_348_ceylon_2',name2:'char_340_shwaz_2',focus:2});playground.drawDialog({name:'黑',text:'这些事情交给其他人去做就可以——'});",
        "playground.drawCharacter({name:'char_348_ceylon_3',name2:'char_340_shwaz_2',focus:1});playground.drawDialog({name:'锡兰',text:'但这是我们的任务。'});",
        "playground.drawCharacter({name:'avg_npc_024'});playground.drawDialog({name:'赫尔曼',text:'锡兰......'});",
        "playground.drawCharacter({});playground.drawDialog({name:'普罗旺斯',text:'同意。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'天灾信使，火山学家，源石学者，我们之中谁都不能容忍让有所预兆的危机威胁到市民。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'更何况竟然有人利用自己的知识，蒙蔽他人，中饱私囊。作为天灾信使，我可不能忍受自己在这种人面前还依然袖手旁观！'});",
        "playground.drawCharacter({name:'char_188_helage_1'});playground.drawDialog({name:'赫拉格',text:'你竟然也会有这么认真的一面，我明白了。那么市长先生，疏散群众的任务，请容我助你一臂之力。'});",
        "playground.drawCharacter({name:'char_340_shwaz_2',name2:'avg_npc_024',focus:2});playground.drawDialog({name:'赫尔曼',text:'......嗯。黑，你也来吧。'});",
        "playground.drawCharacter({name:'char_340_shwaz_3',name2:'avg_npc_024',focus:1});playground.drawDialog({name:'黑',text:'我——'});",
        "playground.drawCharacter({name:'char_340_shwaz_3',name2:'avg_npc_024',focus:2});playground.drawDialog({name:'赫尔曼',text:'锡兰说她可以做到。'});",
        "playground.drawCharacter({name:'char_340_shwaz_2'});playground.drawDialog({name:'黑',text:'......小姐，请务必小心。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'艾雅法拉',text:'讨论好了吗？我们的时间不多了！'});",
        "playground.drawCharacter({name:'char_348_ceylon_3'});playground.drawDialog({name:'锡兰',text:'嗯！我们赶紧出发吧！'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:1});delay(2);playground.drawCharacter({name:'char_340_shwaz_2'});playground.drawDialog({name:'黑',text:'......'});",
        "playground.drawCharacter({name:'char_340_shwaz_2',name2:'avg_npc_024',focus:2});playground.drawDialog({name:'赫尔曼',text:'我们应该相信她，何况他们说的没错，我们有自己的事情要做。'});",
        "playground.drawCharacter({name:'avg_npc_023_2'});playground.drawDialog({name:'克洛宁',text:'哼哈哈哈——他们根本就是去送死！就算能拖延一时半会又如何！？'});",
        "playground.drawDialog({name:'克洛宁',text:'不仅大半座汐斯塔要陪着你的女儿送葬，而你根本就找不到她的尸首——'});",
        "background.cameraShake({duration:0.4, xstrength:12, ystrength:18, vibrato:30, randomness:30, fadeout:false});playground.drawDialog({name:'克洛宁',text:'呃——'});",
        "playground.drawCharacter({name:'char_188_helage_1'});playground.drawDialog({name:'赫拉格',text:'抱歉，顺手。'});",
        "playground.drawCharacter({name:'char_188_helage_1',name2:'avg_npc_024',focus:2});playground.drawDialog({name:'赫尔曼',text:'无妨，何况他说的没错，不能让市民们继续身处险境了。'});",
        "playground.drawDialog({name:'赫尔曼',text:'希望你们能助我一臂之力。'});"
    ]
];
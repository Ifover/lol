var GetUrlParamByName = function(sName) {
        if(window.self.location.search.indexOf(sName + "=") != -1){
            return window.self.location.href.split("?")[1].split(sName + "=")[1].split("&")[0];
        }else{
            return "";
        }
    },
    encodeReg = function (source) {
        return String(source).replace(/([.*+?^=!:${}()#|[\]/\\])/g, '');
    },
    JisLetter = function (str) {
        if ("" == str) {
            return false;
        }
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if ((c < "a" || c > "z") && (c < "A" || c > "Z")) {
                return false;
            }
        }
        return true;
    },
    textSubstr = function (str, n) {
        if (str.length > n) {
            return str.substring(0, n) + "...";
        } else {
            return str;
        }
    },
    scrollTOP=function(p){
        var d = document,
            w = window,
            o = d.getElementById(p.id),
            ie6 = /msie 6/i.test(navigator.userAgent);
        if(o){
            o.style.cssText +=";position:"+(p.f&&!ie6?'fixed':'absolute')+";"+(p.r?'left':"right")+":0;"+(p.t!=undefined?'top:'+p.t+'px':'bottom:0');
            if(!p.f||ie6){
                -function(){
                    var t = 500,st = d.documentElement.scrollTop||d.body.scrollTop,c;
                    c = st  - o.offsetTop + (p.t!=undefined?p.t:(w.innerHeight||d.documentElement.clientHeight)-o.offsetHeight);
                    c!=0&&(o.style.top = o.offsetTop + Math.ceil(Math.abs(c)/10)*(c<0?-1:1) + 'px',t=10);
                    setTimeout(arguments.callee,t)
                }()
            }
        }
    },
//头部区域模块 nav
    getTag = function(t){
        switch(t){
            case "Fighter": return "战士";
            case "Mage": return "法师";
            case "Assassin": return "刺客";
            case "Tank": return "坦克";
            case "Marksman": return "射手";
            case "Support": return "辅助";
            default: return
        }
    },
    checkInput = function(inptid){
        var inpt = g(inptid),
            valu = inpt.value;
        inpt.onblur = function(){
            if(this.value=='')this.value=valu;
        };
        inpt.onfocus = function(){
            if(this.value==valu)this.value='';
        };
    },
//提取公共js
    JSwrap = function(vid,tagsname,callback,num,even,classname){
        var tabStr = gets.tag(vid,tagsname),
            ord=0,thiscls,cls;
        if(classname){
            cls = classname;
            thiscls=cls+' current';
        }else{
            cls='';
            thiscls='current';
        }
        if(vid=="Jnews"){
            var scont = gets.tag("Jnews_n1","li");
            scont[0].className="first";
        }
        for (var i = tabStr.length;i--;) {
            tabStr[i].count = i;
            tabStr[i]["on"+even] = function(){
                var thisContID = vid + tabStr[this.count].getAttribute("rel");
                //console.log(thisContID)
                tabStr[ord].className = cls;
                this.className = thiscls;
                g(vid+tabStr[ord].getAttribute("rel")).style.display="none";
                g(thisContID).style.display="block";
                if(callback){
                    callback(thisContID,num);
                }
                ord = this.count;
            }
        }
    },
    move = function(vid,e,cnt,sty){
        var ab={
                obj:g(vid),
                mlen:cnt
            },
            nowtop=e*ab.mlen,
            af={
                mv:function(t, b, c, d){
                    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
                },
                run:function(t, b, c, d){
                    t++;
                    (sty=="top")?(ab.obj.style.top = -Math.ceil(af.mv(t, b, c, d)) + "px"):(ab.obj.style.left = -Math.ceil(af.mv(t, b, c, d)) + "px");
                    if (t < d) {
                        setTimeout(function() {
                                af.run(t, b, c, d)
                            },
                            10);
                    }
                },
                go:function(){
                    var b,c;
                    (sty=="top")?(b = Math.abs(parseInt(ab.obj.style.top))):(b = Math.abs(parseInt(ab.obj.style.left)));
                    if (!b) {
                        b = 0
                    };
                    c = nowtop - b;
                    af.run(0, b, c, 40);
                }
            },
            s=af.go();
    },
//物品浮层
    mouseCoords = function(ev) {
        if(ev.pageX || ev.pageY){
            return {x:ev.pageX, y:ev.pageY};
        }
        return {
            x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y:ev.clientY + document.body.scrollTop - document.body.clientTop
        }
    },
    doLoadItem =function(item,keyword,intos){
        var strhtml = '',
            url = gets.u+item.image.group+'/'+item.image.full,
            title = item.image.full;
        title = title.split(".png")[0];
        if(item.name.indexOf(keyword)!='-1'||item.description.indexOf(keyword)!='-1'||intos=="onkeyup"){
            strhtml+='<li data-title="'+title+'"><img src="'+url+'" alt=""><p>'+item.name+'</p><span class="sbg"><i class="commspr commico-search"></i></span></li>';
        }else if(title==keyword&&(intos)){
            if(intos=="tree"){
                strhtml+='<img src="'+url+'" alt="'+item.name+'" title="'+item.name+'">';
            }else{
                strhtml+='<div class="item-title"><img src="'+url+'" alt=""><h4>'+item.name+'</h4><p class="cons">售价或合成费用：<span>'+item.gold.base+'</span></p></div><div class="item-desc">'+item.description+'</div>';
            }
        }else{
            for(var x in item.tags){
                if(item.tags[x].toLowerCase() == keyword.toLowerCase()){
                    strhtml+='<li data-title="'+title+'"><img src="'+url+'" alt=""><p>'+item.name+'</p><span class="sbg"><i class="commspr commico-search"></i></span></li>';
                }
            }
        }
        return strhtml;
    },
    doloadItemInfo = function(data,key){
        var datafull = data;
        if(datafull[key].from!=null){
            var fm = datafull[key].from,
                len = 1,
                str='';
            str+='<div class="tree-lv" style="width:'+(1/len)*100+'%"><i class="line0" style="width:'+(1-1/fm.length)*100+'%"></i><ul>';
            for(var x in fm){
                var key = fm[x],
                    line = '';
                if(datafull[key].depth!=null){
                    line = '<i class="line1"></i>';
                    len = fm.length;
                    line += doloadItemInfo(datafull,fm[x]);
                }
                str+='<li class="tree-count'+fm.length+'"><i class="line2"></i>'+doLoadItem(datafull[key],key,"tree")+line+'</li>';
            }
            str+='</ul></div>';
            return str;
        }else{
            return false;
        }
    },
    doLoadPOP =function(keyword){
        var datafull = LOLitemjs.data;
        g("itemFromTop").innerHTML = doLoadItem(datafull[keyword],keyword,"yes");
        if(datafull[keyword].depth!=null){
            var strhtml = [],
                data = datafull[keyword],
                dep = data.depth,
                froms = data.from,
                marks = 1;
            level = '';
            level +='<div class="tree-lv">'+doLoadItem(data,keyword,"tree")+'<i class="line1"></i></div>';
            level += doloadItemInfo(datafull,keyword);
            strhtml.push('<h5>合成所需</h5><div class="clearfix item-tree item-depth'+dep+'">'+level+'</div>');
            g("itemFromTree").innerHTML=strhtml.join('');
        }else{
            g("itemFromTree").innerHTML='';
        }
    },
    mouseMove = function(ev){
        ev= ev || window.event;
        var mousePos = mouseCoords(ev),
            imgW = 66,
            popLeft=mousePos.x,
            popTop=mousePos.y,
            winW = milo.getWinWidth(),
            winH = milo.getWinHeight(),
            pageH = milo.getPageHeight(),
            scrollT = document.documentElement.scrollTop,
            offH = g("popPupItem").offsetHeight,
            tmpx = winW-popLeft,
            tmpy = pageH-popTop-winH;
        if(tmpx<500){
            popLeft = popLeft-480;
        }
        // if((popTop-scrollT)>(winH/2)){
        // 	popTop = popTop-offH;
        // }
        if(milo.browser.msie){
            popTop = milo.getY(this);
        }
        g("popPupItem").style.left=popLeft+20+"px";
        g("popPupItem").style.top=popTop+20+"px";
        titleId = this.getAttribute("data-title");
        if(titleId){
            g("popPupItem").style.display="block";
            doLoadPOP(titleId);
        }
    },
    showPopup = function(tagid,tagname){
        var moversw = gets.tag(tagid,tagname),
            mord = 0;
        for(var i = 0,len=moversw.length; i < len; i++) {
            moversw[i].count = i;
            moversw[i].onmousemove = mouseMove;
            moversw[i].onmouseover= function(){
                moversw[mord].className="";
                moversw[this.count].className="current";
                mord = this.count;
            }
            moversw[i].onmouseout = function(){
                g("popPupItem").style.display="none";
                moversw[this.count].className="";
            };
        };
    }

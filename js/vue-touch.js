function vueTouch(el,binding,type,vnode){
	var _this=this;
	this.obj=el;
	this.binding=binding;
	this.touchType=type;
	this.vueTouches={x:0,y:0};
	this.vueMoves=true;
	this.vueLeave=true;
	this.longTouch=true;
	this.vueCallBack=typeof(binding.value)=="object"?binding.value.fn:binding.value;
	this.obj.addEventListener("touchstart",function(e){
		_this.start(e);
	},false);
	this.obj.addEventListener("touchend",function(e){
		_this.end(e);
	},false);
	this.obj.addEventListener("touchmove",function(e){
		_this.move(e);
	},false);
	vnode.key = this.randomString()
};
vueTouch.prototype={
	start:function(e){
		this.vueMoves=true;
		this.vueLeave=true;
		this.longTouch=true;
		this.vueTouches={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY};
		this.time=setTimeout(function(){
			if(this.vueLeave&&this.vueMoves){
				this.touchType=="longtap"&&this.vueCallBack(this.binding.value,e);
				this.longTouch=false;
			};
		}.bind(this),1000);
	},
	end:function(e){
		var disX=e.changedTouches[0].pageX-this.vueTouches.x;
		var disY=e.changedTouches[0].pageY-this.vueTouches.y;
		clearTimeout(this.time);
		if(Math.abs(disX)>10||Math.abs(disY)>100){
			this.touchType=="swipe"&&this.vueCallBack(this.binding.value,e);
			if(Math.abs(disX)>Math.abs(disY)){
				if(disX>10){
					this.touchType=="swiperight"&&this.vueCallBack(this.binding.value,e);
				};
				if(disX<-10){
					this.touchType=="swipeleft"&&this.vueCallBack(this.binding.value,e);
				};
			}else{
				if(disY>10){
					this.touchType=="swipedown"&&this.vueCallBack(this.binding.value,e);
				};
				if(disY<-10){
					this.touchType=="swipeup"&&this.vueCallBack(this.binding.value,e);
				};	
			};
		}else{
			if(this.longTouch&&this.vueMoves){
				this.touchType=="tap"&&this.vueCallBack(this.binding.value,e);
				this.vueLeave=false
			};
		};
	},
	move:function(e){
		this.vueMoves=false;
	},
	randomString:function(){
		var len = 10;
	　　 var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	　　 var maxPos = $chars.length;
	　　 var pwd = '';
	　　 for (var i = 0; i < len; i++) {
			pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	　　 }
	　　 return pwd;
	}
};
Vue.directive("tap",{
	bind:function(el,binding,vnode){
		new vueTouch(el,binding,"tap",vnode);
	}
});
Vue.directive("swipe",{
	bind:function(el,binding,vnode){
		new vueTouch(el,binding,"swipe",vnode);
	}
});
Vue.directive("swipeleft",{
	bind:function(el,binding,vnode){
		new vueTouch(el,binding,"swipeleft",vnode);
	}
});
Vue.directive("swiperight",{
	bind:function(el,binding,vnode){
		new vueTouch(el,binding,"swiperight",vnode);
	}
});
Vue.directive("swipedown",{
	bind:function(el,binding,vnode){
		new vueTouch(el,binding,"swipedown",vnode);
	}
});
Vue.directive("swipeup",{
	bind:function(el,binding,vnode){
		new vueTouch(el,binding,"swipeup",vnode);
	}
});
Vue.directive("longtap",{
	bind:function(el,binding,vnode){
		new vueTouch(el,binding,"longtap",vnode);
	}
});
/**
 * @author xuld
 */



imports("Controls.Part.Arrow");
imports("Controls.Tip.ToolTip");
using("Controls.Core.ContentControl");
using("Controls.Core.IToolTip");

/**
 * 表示一个工具提示。
 * @extends Control
 */
var ToolTip = ContentControl.extend(IToolTip).implement({
	
	xtype: 'tooltip',
	
	tpl: '<div class="x-control">\
			<span class="x-arrow x-arrow-top">\
				<span class="x-arrow-fore">◆</span>\
			</span>\
			<div class="x-control-content"></div>\
		</div>',

	content: function () {
	    return this.find('.x-tooltip-content');
	},

	init: function () {
	    this.hide();

	    if (!this.closet('body')) {
	        this.appendTo();
	    }
	},
	
	getArrowType: function(){
		var arrow = this.find('.x-arrow'), r = 'none';
		
		if(arrow){
			['top', 'bottom', 'left', 'right'].each(function(value){
				if(arrow.hasClass('x-arrow-' + value)) {
					r = value;
					return false;	
				}
			});
		}
		return r;
	},
	
	setArrowType: function(value){
		this.find('.x-arrow').node.className = 'x-arrow x-arrow-' + value;
		return this;
	},
	
	getArrowSize: function(){
		return this.find('.x-arrow').getSize();
	},
	
	getArrowOffset: function(){
		return this.find('.x-arrow').getOffset();
	}

});

/**
 * 显示一个提示。
 * @param {Element} elem 用来对齐的元素。
 * @param {String} text 显示的文本。
 * @param {Number} offsetY=2 Y 的偏移，负值向上。 
 * @param {Number} offsetX=0 X 的偏移，负值向左。 
 */
ToolTip.show = function(ctrl, text, offsetY, offsetX){
	return new ToolTip().setText(text).showBy(Dom.get(ctrl), offsetY === undefined ? 2 : offsetY, offsetX);
};









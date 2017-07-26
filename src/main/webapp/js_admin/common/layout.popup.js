var global = {};

global.datePickerBetween = function(startDateId, endDateId, diffDaysId) {
	var sdate, edate, diffDays;

	if (startDateId && endDateId) {

		$(startDateId).datepicker({
			onSelect: function(selected) {
				$(endDateId).datepicker("option", "minDate", selected);
			}
		});

		if (diffDaysId) {
			$(endDateId).datepicker({
				onSelect: function(selected) {
					var toDay = 24*60*60*1000;
					sdate = $(startDateId).datepicker('getDate').getTime();
					edate = $(endDateId).datepicker('getDate').getTime();
					diffDays = Math.round(Math.abs((sdate - edate) / toDay));
					$(diffDaysId).val(diffDays + 1);
				}
			});
		} else {
			$(endDateId).datepicker();
		}

	}
};

global.datePickerBettweenEvent = function(startDateId, endDateId, eventDateId) {
	$(startDateId).datepicker({
		onSelect: function(selected) {
			$(endDateId).datepicker("option", "minDate", selected);
			$(eventDateId).datepicker("option", "minDate", selected);
		}
	});
	$(endDateId).datepicker({
		onSelect: function(selected) {
			$(eventDateId).datepicker("option", "maxDate", selected);
		}
	});
	$(eventDateId).datepicker();
};

global.generateSelectOptions = function(outputId, options, selected, disables) {
	var isSelected, isDisabled, tags = [];

	for (var i=0, item; item = options[i]; i++) {
		if (selected && selected == item) {
			isSelected = 'selected';
		} else {
			isSelected = '';
		}

		if (disables && disables.indexOf(item) >= 0) {
			isDisabled = 'disabled';
		} else {
			isDisabled = '';
		}

		tags[i] = '<option ' + isSelected + ' ' + isDisabled + ' value="' + options[i] + '">' + options[i] + '</option>';
	}
	$(outputId).html(tags.join(''));
};

global.generateArrayRange = function(from, to, step, prefix) {
	var items = [];
	step = step || 1;
	prefix = prefix || '';
	for (var i=from; i<=to; i+=step) {
		var item = (i < 10) ? prefix + i : i;
		items.push(item);
	}
	return items;
};

global.generateDropDown = function(containerId, dropDownItems, dropDownId, drowDownLabel, drowDownListHeight) {
	var tags;

	dropDownId = dropDownId || 'downDownId';
	drowDownLabel =  drowDownLabel || '';
	drowDownListHeight = drowDownListHeight || '231';

	tags = [
	    '<a href="javascript:" id="' + dropDownId + '" class="txt" >' + drowDownLabel + '</a>',
	    '<div class="ly_txtcombo" style="display:none;">',
	    '<ul style="height:' + drowDownListHeight + 'px; overflow:hidden; overflow-y: scroll">'
	];

	$.each(dropDownItems, function(i,e){
		tags.push('<li><a href="javascript:">' + e + '</a></li>');
	});

	tags.push('</ul></div>');

	$('#' + containerId).html(tags.join(''));
	global.eventDropDown('#' + dropDownId);
};

global.eventDropDown = function(selector, callback) {
	$(selector).click(function(){
		$(this).parent().siblings().find('.ly_txtcombo').hide();
		$(this).next().toggle();
	});

	$(document).on('click', '.ly_txtcombo ul a', function(){
		$(this).parents('.ly_txtcombo').hide();
		$(this).parents('.ly_txtcombo').prev().text($(this).text());
		if (typeof callback == 'function') {
			callback($(selector), $(this));
		}
	});
};

$(function() {
	var today = new Date();
	$('#documentNumber').text('인사-' + today.getFullYear() + (today.getMonth() + 1) + '-00001');
});
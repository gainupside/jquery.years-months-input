/**
 * Created by silatham99 on 6/25/14.
 * version 2.0.0 - updated 8/21/14
 * dependencies:
 *      jQuery >=1.11
 *      jQuery UI >=1.10.4
 */

(function($) {

    $.fn.initJYM = function(options) {
        var self = this,
            yearField = self.children('.jym-years'),
            monthField = self.children('.jym-months'),

            initialValue = options.value,
            minimumMonths = options.min,
            maximumMonths = options.max,


            callbackHandler = function() {
                if (options.onUpdate) {
                    var totalMonths = _getTotal(yearField, monthField);
                    if (totalMonths <= (maximumMonths * 12) && totalMonths >= (minimumMonths * 12)) {
                        options.onUpdate(totalMonths);
                    }
                }
            },
            spinStartHandler = function(event) {
                if (options.start) {
                    options.start(event);
                }
            },
            spinHandler = function(event, ui) {
                if (ui.value > 11 && _getTotal(yearField, monthField) < maximumMonths) {
                    _updateMonths(monthField, 0);
                    _updateYears(yearField, (_getYears(yearField) + 1));
                    return false;
                } else if (ui.value < 0 && _getTotal(yearField, monthField) > minimumMonths) {
                    _updateMonths(monthField, 11);
                    _updateYears(yearField, (_getYears(yearField) - 1));
                    return false;
                } else if (ui.value > 0 && _getTotal(yearField, monthField) === maximumMonths) {
                    // User is spinning up and has reached the max years
                    _updateMonths(monthField, 0);
                    return false;
                } else if (ui.value < 0 && _getTotal(yearField, monthField) === minimumMonths) {
                    // User is spinning down and has reached the min years
                    _updateMonths(monthField, 0);
                    return false;
                }
            },
            yearChangeHandler = function() {
                if (_getYears(yearField) < minimumYears || isNaN(_getYears(yearField))) {
                    _updateYears(yearField, minimumYears);
                } else if (_getYears(yearField) > maximumYears || isNaN(_getYears(yearField))) {
                    _updateYears(yearField, maximumYears);
                    _updateMonths(monthField, 0);
                }
                callbackHandler();
            },
            monthChangeHandler = function() {
                if (isNaN(_getMonths(monthField)) || _getMonths(monthField) === null ||
                    (_getYears(yearField) === (maximumMonths % 12) && _getMonths(monthField) > 0 && _getMonths(monthField) < 12)) {
                    _updateMonths(monthField, 0);
                }
            },
            spinSettings = {
                min: -1,
                max: 12,
                step: 1,
                spin: spinHandler,
                stop: callbackHandler,
                change: monthChangeHandler,
                start: spinStartHandler
            };

        monthField.spinner(spinSettings);
        yearField.on('change', yearChangeHandler);

        _updateYears(yearField, Math.floor(initialValue / 12));
        _updateMonths(monthField, initialValue % 12);
    };

    $.fn.updateJYM = function(newValue) {
        var self = this,
            yearField = self.children('.jym-years'),
            monthField = self.find('.jym-months');
        _updateYears(yearField, Math.floor(newValue / 12));
        _updateMonths(monthField, (newValue % 12));
    };

    $.fn.disableJYM = function(disableSwitch) {
        var self = this,
            yearField = self.children('.jym-years'),
            monthField = self.find('.jym-months');

        monthField.spinner('option', 'disabled', disableSwitch);
        yearField.prop('disabled', disableSwitch);
    };

    var _getYears = function(field) { return parseInt(field.val(), 10);},
        _getMonths = function(field) { return field.spinner('value');},
        _getTotal = function(yearField, monthField) { return (_getYears(yearField) * 12) +_getMonths(monthField);},
        _updateYears = function(field, value) { field.val(value);},
        _updateMonths = function(field, value) { field.spinner('value', value);};

}(jQuery));
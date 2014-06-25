/**
 * Created by silatham99 on 6/25/14.
 */
(function($) {

    $.fn.initJYM = function() {
        this.children('.jym-months').val(0);
        this.children('.jym-years').val(0);

        this.children(':button').click(function(e){
            handleButtonClick(e.delegateTarget);
        });

        this.children('.jym-months').change(function(e){
            handleManualMonthChange(e.delegateTarget);
        });
    };


    var getYears = function(field) {
        return parseInt(field.val(), 10);
    };

    var getMonths = function(field) {
        return parseInt(field.val(), 10);
    };

    var updateMonths = function(field, value) {
        field.val(value);
    };

    var updateYears = function(field, value) {
        field.val(value);
    };

    function handleButtonClick(buttonClicked) {
        var monthField = $(buttonClicked).siblings('.jym-months'),
            yearField = $(buttonClicked).siblings('.jym-years');

        if ($(buttonClicked).hasClass('jym-up')) {
            incrementFields(monthField, yearField);
        } else if ($(buttonClicked).hasClass('jym-down')) {
            decrementFields(monthField, yearField);
        }
    }

    function handleManualMonthChange(monthField) {
        var monthField = $(monthField),
            yearField = $(monthField).siblings('.jym-years'),
            monthsToYears = Math.floor(getMonths(monthField) / 12);

        if (monthsToYears >= 1) {
            updateYears(yearField, monthsToYears);
            updateMonths(monthField, getMonths(monthField) % 12);
        }
    }

    function incrementFields(monthField, yearField) {
        if (getMonths(monthField) >= 11){
            updateMonths(monthField, 0);
            updateYears(yearField, getYears(yearField) + 1);
        } else {
            updateMonths(monthField, getMonths(monthField) + 1);
        }
    }

    function decrementFields(monthField, yearField) {
        if (getMonths(monthField) <= 1 && getYears(yearField) > 0){
            updateMonths(monthField, 11);
            updateYears(yearField, getYears(yearField) - 1);
        } else if (getMonths(monthField) >= 1) {
            updateMonths(monthField, getMonths(monthField) - 1);
        }
    }

}(jQuery));

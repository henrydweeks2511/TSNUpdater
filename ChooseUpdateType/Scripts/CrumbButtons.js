$(document).ready(function () {
    //Home Breadcrumb
    $("#homeCrumb").click(function () {
        //Hide Breadcrumbs
        $("#homeCrumb").animate({ width: "hide" }, "fast");
        //Update Type Crumb
        $("#updateTypecrumb").animate({ width: "hide" }, "fast");
        //Course Condition Crumbs
        $("#courseConditioncrumb").animate({ width: "hide" }, "fast");
        $("#selectHolescrumb").animate({ width: "hide" }, "fast");
        $("#cCDateTimecrumb").animate({ width: "hide" }, "fast");
        //Cart Rules Crumbs
        $("#cRcrumb").animate({ width: "hide" }, "fast");
        $("#cRAllHolescrumb").animate({ width: "hide" }, "fast");
        $("#cRDateTimecrumb").animate({ width: "hide" }, "fast");
        //New Event Crumbs
        $("#eVDateTimecrumb").animate({ width: 'hide' }, "fast");
        $("#eVNamecrumb").animate({ width: "hide" }, "fast");
        $("#eVRestrictioncrumb").animate({ width: 'hide' }, "fast");
        $("#eVTypecrumb").animate({ width: 'hide' }, "fast");
        $("#eVcrumb").animate({ width: "hide" }, "fast");
        //Hide Menus
        //Course Condition Menus
        $("#cCDateTimeOptional").animate({ opacity: '1' }, "slow");
        $("#selectHoles").animate({ height: 'hide' }, "slow");
        $("#selectHolesPrompt").animate({ height: 'hide' }, "slow");
        $("#selectHolesConfirm").animate({ height: 'hide' }, "slow");
        $("#cCDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cCDateTime").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeAddedDays").empty();
        $("#cCDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#courseConditions").animate({ height: 'hide' }, "slow");
        //Cart Rules Menus
        $("#cRDateTimeOptional").animate({ opacity: '1' }, "slow");
        $("#cRAllHolesNo").animate({ opacity: '1' }, "slow");
        $("#cartRules").animate({ height: 'hide' }, "slow");
        $("#cRDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cRDateTime").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeAddedDays").empty();
        $("#cRDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#cRAllHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesPrompt").animate({ height: 'hide' }, "slow");
        $("#cRSelectHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesConfirm").animate({ height: 'hide' }, "slow");
        //New Event Menus
        $("#eVTypeButtons").animate({ height: 'hide' }, "slow");
        $("#eVDateTime").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeAddedDays").empty();
        $("#eVDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#eVName").animate({ height: 'hide' }, "slow");
        $("#eVDatePrompt").animate({ height: 'hide' }, "slow");
        $("#eVPrompt").animate({ height: 'hide' }, "slow");
        $("#eVName").animate({ height: 'hide' }, "slow");
        //Confirm Menu
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
        //Request Support Menus
        $("#requestSupport").animate({height: "hide"}, "slow");
        //Choose Update Menu
        $("#updateType").animate({ height: 'hide' }, "slow");
        //Show Home Page
        $("#homePage").animate({ height: 'show' }, "slow");
    });
    $("#updateTypecrumb").click(function () {
        //Update Type Crumb
        $("#updateTypecrumb").animate({ width: "hide" }, "fast");
        //Hide Breadcrumbs
        //Course Condition Crumbs
        $("#courseConditioncrumb").animate({ width: "hide" }, "fast");
        $("#selectHolescrumb").animate({ width: "hide" }, "fast");
        $("#cCDateTimecrumb").animate({ width: "hide" }, "fast");
        //Cart Rules Crumbs
        $("#cRcrumb").animate({ width: "hide" }, "fast");
        $("#cRAllHolescrumb").animate({ width: "hide" }, "fast");
        $("#cRDateTimecrumb").animate({ width: "hide" }, "fast");
        //New Event Crumbs
        $("#eVDatecrumb").animate({ width: 'hide' }, "fast");
        $("#eVNamecrumb").animate({ width: "hide" }, "fast");
        $("#eVRestrictioncrumb").animate({ width: 'hide' }, "fast");
        $("#eVTypecrumb").animate({ width: 'hide' }, "fast");
        $("#eVcrumb").animate({ width: "hide" }, "fast");
        //Hide Menus
        //Course Condition Menus
        $("#cCDateTimeOptional").animate({ opacity: '1' }, "slow");
        $("#selectHoles").animate({ height: 'hide' }, "slow");
        $("#selectHolesPrompt").animate({ height: 'hide' }, "slow");
        $("#selectHolesConfirm").animate({ height: 'hide' }, "slow");
        $("#cCDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cCDateTime").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeAddedDays").empty();
        $("#cCDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#courseConditions").animate({ height: 'hide' }, "slow");
        //Cart Rules Menus
        $("#cRDateTimeOptional").animate({ opacity: '1' }, "slow");
        $("#cRAllHolesNo").animate({ opacity: '1' }, "slow");
        $("#cartRules").animate({ height: 'hide' }, "slow");
        $("#cRDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'hide' }, "slow");
        $("#cRDateTime").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeMaster").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#cRAllHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesPrompt").animate({ height: 'hide' }, "slow");
        $("#cRSelectHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesConfirm").animate({ height: 'hide' }, "slow");
        //New Event Menus
        $("#eVTypeButtons").animate({ height: 'hide' }, "slow");
        $("#eVRestrictionsButtons").animate({ height: 'hide' }, "slow");
        $("#eVDateTime").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeAddedDays").empty();
        $("#eVDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#eVName").animate({ height: 'hide' }, "slow");
        $("#eVDatePrompt").animate({ height: 'hide' }, "slow");
        $("#eVPrompt").animate({ height: 'hide' }, "slow");
        $("#eVName").animate({ height: 'hide' }, "slow");
        //Confirm Menu
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
        //Request Support Menus
        $("#requestSupport").animate({ height: "hide" }, "slow");
        //Show Choose Update Menu
        $("#updateType").animate({ height: 'show' }, "slow");
        //Hide Home Page
        $("#homePage").animate({ height: 'hide' }, "slow");
    });
    //Course Conditions Breadcrumbs
    $("#courseConditioncrumb").click(function () {
        $("#courseConditioncrumb").animate({ width: "hide" }, "fast");
        $("#selectHolescrumb").animate({ width: "hide" }, "fast");
        $("#cCDateTimecrumb").animate({ width: "hide" }, "fast");
        $("#selectHolescrumb").animate({ width: "hide" }, "fast");
        $("#courseConditions").animate({ height: 'show' }, "slow");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
        $("#selectHoles").animate({ height: 'hide' }, "slow");
        $("#cCDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cCDateTime").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeAddedDays").empty();
        $("#cCDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#selectHoles").animate({ height: 'hide' }, "slow");
        $("#selectHolesPrompt").animate({ height: 'hide' }, "slow");
        $("#selectHolesConfirm").animate({ height: 'hide' }, "slow");
    });
    $("#selectHolescrumb").click(function () {
        $("#cCDateTimecrumb").animate({ width: "hide" }, "fast");
        $("#selectHolescrumb").animate({ width: "hide" }, "fast");
        $("#selectHoles").animate({ height: 'show' }, "slow");
        $("#selectHolesPrompt").animate({ height: 'show' }, "slow");
        $("#selectHolesConfirm").animate({ height: 'show' }, "slow");
        $("#cCDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cCDateTime").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeAddedDays").empty();
        $("#cCDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
    });
    $("#cCDateTimecrumb").click(function () {
        $("#cCDateTimecrumb").animate({ width: "hide" }, "fast");
        $("#cCDateTime").animate({ height: 'show' }, "slow");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
    });
    //Cart Rules Breadcrumbs
    $("#cRcrumb").click(function () {
        $("#cRDateTimeOptional").animate({ opacity: '1' }, "slow");
        $("#cRcrumb").animate({ width: "hide" }, "fast");
        $("#cRAllHolescrumb").animate({ width: "hide" }, "fast");
        $("#cRDateTimecrumb").animate({ width: "hide" }, "fast");
        $("#cRAllHolesNo").animate({ opacity: '1' }, "slow");
        $("#cRDateTimeMaster").animate({ height: 'hide' }, "slow");
        $("#cartRules").animate({ height: 'show' }, "slow");
        $("#cRDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'hide' }, "slow");
        //$("#cRDateTime").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeAddedDays").empty();
        $("#cRDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#cRAllHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesPrompt").animate({ height: 'hide' }, "slow");
        $("#cRSelectHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesConfirm").animate({ height: 'hide' }, "slow");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
    });
    $("#cRAllHolescrumb").click(function () {
        $("#cRAllHolescrumb").animate({ width: "hide" }, "fast");
        $("#cRDateTimecrumb").animate({ width: "hide" }, "fast");
        $("#cRAllHoles").animate({ height: 'show' }, "slow");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
        $("#cRDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'hide' }, "slow");
        $("#cRDateTime").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeAddedDays").empty();
        $("#cRDateTimeAddedDays").animate({ height: 'hide' }, "slow");
    });
    $("#cRDateTimecrumb").click(function () {
        $("#cRDateTimeOptional").animate({ opacity: '1' }, "slow");
        $("#cRDateTimecrumb").animate({ width: "hide" }, "fast");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
        $("#cRDateTime").animate({ height: 'show' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'show' }, "slow");
    });
    //New Event Breadcrumbs
    $("#eVNamecrumb").click(function () {
        $("#eVRestrictioncrumb").animate({ width: 'hide' }, "fast");
        $("#eVTypecrumb").animate({ width: 'hide' }, "fast");
        $("#Tcrumb").animate({ width: "hide" }, "fast");
        $("#pOcrumb").animate({ width: "hide" }, "fast");
        $("#mEcrumb").animate({ width: "hide" }, "fast");
        $("#sGcrumb").animate({ width: "hide" }, "fast");
        $("#eVNamecrumb").animate({ width: "hide" }, "fast");
        $("#eVDatecrumb").animate({ width: "hide" }, "fast");
        $("#eVRestrictionsButtons").animate({ height: 'hide' }, "slow");
        $("#eVTypeButtons").animate({ height: 'hide' }, "slow");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
        $("#eVDateTime").animate({ height: 'hide' }, "slow");
        $("#eVDatePrompt").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeAddedDays").empty();
        $("#eVDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#eVName").animate({ height: 'show' }, "slow");
        $("#eVPrompt").animate({ height: 'show' }, "slow");
    });
    $("#eVTypecrumb").click(function () {
        $("#eVDatecrumb").animate({ width: 'hide' }, "fast");
        $("#eVTypecrumb").animate({ width: 'hide' }, "fast");
        $("#eVTypeButtons").animate({ height: 'show' }, "slow");
        $("#eVRestrictionsButtons").animate({ height: 'hide' }, "slow");
        $("#eVDatePrompt").animate({ height: 'hide' }, "slow");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
        $("#eVDateTime").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeAddedDays").empty();
        $("#eVDateTimeAddedDays").animate({ height: 'hide' }, "slow");
    });
    $("#eVRestrictionscrumb").click(function () {
        $("#eVDatecrumb").animate({ width: 'hide' }, "fast");
        $("#eVRestrictionscrumb").animate({ width: 'hide' }, "fast");
        $("#eVTypeButtons").animate({ height: 'hide' }, "slow");
        $("#eVRestrictionsButtons").animate({ height: 'show' }, "slow");
        $("#eVDatePrompt").animate({ height: 'hide' }, "slow");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
        $("#eVDateTime").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeAddedDays").empty();
        $("#eVDateTimeAddedDays").animate({ height: 'hide' }, "slow");
    });
    $("#eVDatecrumb").click(function () {
        $("#eVDatecrumb").animate({width: 'hide'}, "fast");
        $("#confirmUpdate").animate({ height: 'hide' }, "slow");
        $("#eVDateTime").animate({ height: 'show' }, "slow");
        $("#eVPrompt").animate({ height: 'show' }, "slow");
    });
});
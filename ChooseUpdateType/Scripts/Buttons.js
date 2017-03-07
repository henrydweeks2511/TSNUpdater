var eVcount = 1;
var cCcount = 1;
var cRCloneCount = 0;
function currentTime() {
    var d = new Date();
    $("#newEventdateTime").val(d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "T" + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));
}
function currentTime1() {
    var d = new Date();
    $("#cCDateTimeBeginField").val(d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "T" + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));
    $("#cCDateTimeEndField").val(d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "T" + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));
}
//function cRAddDay() {
  //  var cRklone = $('div[id^="cRDateTimeCopy"]:last');
  //  $("cRklone").animate({ height: 'show' }, "slow");
  //  var num = parseInt(cRklone.prop("id").match(/\d+/g), 10) + 1;
  //  var klone = cRklone.clone().prop('id', 'cRDateTimeCopy' + num);
//}
function eVAddDay() {
    var eVAddDayPrompt = "<p>Add another time frame.</p>";
    $("#eVDateTimeAddedDays").append(eVAddDayPrompt);
    $("#eVDateTimeCustom").clone().appendTo("#eVDateTimeAddedDays");
}
function cCAddDay() {
    var cCAddDayPrompt = "<p>Add another time frame.</p>";
    $("#cCDateTimeAddedDays").append(cCAddDayPrompt);
    $("#cCDateTimeCustom").clone().appendTo("#cCDateTimeAddedDays");
}

$(document).ready(function () {
    //Home Page Buttons
    $("#startUpdate").click(function () {
        $("#updateType").animate({ height: "show" }, "slow");
        $("#homePage").animate({ height: "hide" }, "slow");
        $("#officeImage").animate({ height: "show" }, "slow");
        $("#homeCrumb").animate({width: "show"}, "fast");
    });
    //Choose update type buttons
    $("#CC").click(function () {
        $("#updateTypecrumb").animate({width: 'show'}, "fast");
        $("#courseConditions").animate({ height: 'show' }, "slow");
        $("#updateType").animate({ height: 'hide' }, "slow");
    });
    $("#CR").click(function () {
        $("#updateTypecrumb").animate({ width: 'show' }, "fast");
        $("#cartRules").animate({ height: 'show' }, "slow");
        $("#updateType").animate({ height: 'hide' }, "slow");
    });
    $("#EV").click(function () {
        $("#updateTypecrumb").animate({ width: 'show' }, "fast");
        $("#eVPrompt").animate({ height: 'show' }, "slow");
        $("#eVName").animate({ height: 'show' }, "slow");
        $("#updateType").animate({ height: 'hide' }, "slow");
    });
    $("#CU").click(function () {
        $("#updateTypecrumb").animate({ width: 'show' }, "fast");
        $("#requestSupport").animate({ height: 'show' }, "slow");
        $("#updateType").animate({ height: 'hide' }, "slow");
    });
    //Cart Rules Buttons
    $("#nR").click(function () {
        $("#cRDatePrompt").animate({ height: 'show' }, "slow");
        $("#cRDateTimeMaster").animate({ height: 'show' }, "slow");
        $("#cRDateTime").animate({ height: 'show' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'show' }, "slow");
        $("#cRcrumb").animate({ width: 'show' }, "fast");
        $("#cartRules").animate({ height: 'hide' }, "slow");
    });
    $("#ninety").click(function () {
        $("#cRDatePrompt").animate({ height: 'show' }, "slow");
        $("#cRDateTimeMaster").animate({ height: 'show' }, "slow");
        $("#cRDateTime").animate({ height: 'show' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'show' }, "slow");
        $("#cRcrumb").animate({width: 'show'}, "fast");
        $("#cartRules").animate({ height: 'hide' }, "slow");
    });
    $("#cPO").click(function () {
        $("#cRcrumb").animate({width: 'show'}, "fast");
        $("#cRAllHoles").animate({height: 'show'}, "slow");
        $("#cartRules").animate({ height: 'hide' }, "slow");
    });
    $("#nC").click(function(){
        $("#cRcrumb").animate({ width: 'show' }, "fast");
        $("#cRAllHoles").animate({ height: 'show' }, "slow");
        $("#cartRules").animate({ height: 'hide' }, "slow");
    });
    $("#cRAllHolesYes").click(function () {
        $("#cRAllHolescrumb").animate({width: 'show'}, "fast");
        $("#cRAllHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesPrompt").animate({ height: 'hide' }, "slow");
        $("#cRSelectHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesConfirm").animate({ height: 'hide' }, "slow");
        $("#cRDatePrompt").animate({ height: 'show' }, "slow");
        $("#cRDateTimeMaster").animate({ height: 'show' }, "slow");
        $("#cRDateTime").animate({ height: 'show' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'show' }, "slow");
    });
    $("#cRAllHolesNo").click(function () {
        $("#cRAllHolesNo").animate({ opacity: '.5' }, "slow");
        $("#cRSelectHolesPrompt").animate({ height: 'show' }, "slow");
        $("#cRSelectHoles").animate({ height: 'show' }, "slow");
        $("#cRSelectHolesConfirm").animate({ height: 'show' }, "slow");
    });
    $("#cRSelectHolesConfirm").click(function () {
        $("#cRAllHolescrumb").animate({ width: 'show' }, "fast");
        $("#cRAllHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesPrompt").animate({ height: 'hide' }, "slow");
        $("#cRSelectHoles").animate({ height: 'hide' }, "slow");
        $("#cRSelectHolesConfirm").animate({ height: 'hide' }, "slow");
        $("#cRDatePrompt").animate({ height: 'show' }, "slow");
        $("#cRDateTime").animate({ height: 'show' }, "slow");
        $("#cRDateTimeMaster").animate({ height: 'show' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'show' }, "slow");
        $("#cRAllHolesNo").animate({ opacity: '1' }, "slow");
    });
    $("#cRDateTimeAllDay").click(function () {
        $("#cRDateTimeCustom").animate({ width: 'toggle' }, "slow");
        $("#cRDateTimeBottom").animate({ height: 'toggle' }, "slow");
    });
   // $("#cRDateTimeAllDay").click(function () {
     //   $("#cRDateTimecrumb").animate({ width: 'show' }, "fast");
       // $("#cRDateTimeCustom").animate({ height: 'hide' }, "slow");
       // $("#cRDateTime").animate({ height: 'hide' }, "slow");
       // $("#cRDateTimeConfirmDiv").animate({ height: 'hide' }, "slow");
       // $("#confirmUpdate").animate({ height: 'show' }, "slow");
    //});
    $("#cRDateTimeOptional").click(function () {
        $("#cRDateTimeOptional").animate({ opacity: '.4' }, "slow");
        $("#cRDateTimeCustom").animate({ height: 'show' }, "slow");
    });
    $("#cRDateTimeAddDay").click(function () {
        if (cRCloneCount == 0) {
            $("#cRDateTimeAddedDays").animate({ height: "show" }, "slow");
            $('<div id="cRDateTimeCopy' + (cRCloneCount + 1) + '" class="TSN"><span class="TSN_Prompt">Day ' + (cRCloneCount + 3) + '<span><br /><span class="TSN_Prompt">Date</span><input type="date" class="TSN_inputs" id="cRDateCustom" /><span class="TSN_Prompt" id="cRTimeBeginTimePrompt">Begin</span><input class="TSN_inputs" type="time" id="cRTimeBeginField" /><span class="TSN_Prompt" id="cRTimeEndTimePrompt">End&nbsp;&nbsp;&nbsp;</span><input class="TSN_inputs" type="time" id="cRTimeEndField" /></div>').appendTo("#cRDateTimeAddedDays");
        }
        if (cRCloneCount >= 1) {
            $('<div id="cRDateTimeCopy' + (cRCloneCount + 1) + '" class="TSN"><span class="TSN_Prompt">Day ' + (cRCloneCount + 3) + '<span><br /><span class="TSN_Prompt">Date</span><input type="date" class="TSN_inputs" id="cRDateCustom" /><span class="TSN_Prompt" id="cRTimeBeginTimePrompt">Begin</span><input class="TSN_inputs" type="time" id="cRTimeBeginField" /><span class="TSN_Prompt" id="cRTimeEndTimePrompt">End&nbsp;&nbsp;&nbsp;</span><input class="TSN_inputs" type="time" id="cRTimeEndField" /></div>').appendTo("#cRDateTimeAddedDays");
            $("#cRDateTimeCopy" + (cRCloneCount)).animate({ height: "show" }, "slow");
        }
        cRCloneCount++;
    });
    $("#cRDateTimeRemoveDay").click(function () {
        if (cRCloneCount == 0) {
            $("#cRDateTimeAddedDays").animate({ height: "hide" }, "slow");
        }
        if (cRCloneCount >= 1) {
            $("#cRDateTimeCopy" + cRCloneCount).remove();
            $("#cRDateTimeCopy" + (cRCloneCount - 1)).animate({ height: "hide" }, "slow");
            cRCloneCount = cRCloneCount - 1;
        }
    });
    $("#cRDateTimeConfirm").click(function () {
        $("#cRDateTimecrumb").animate({ width: 'show' }, "fast");
        $("#cRDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeMaster").animate({ height: 'hide' }, "slow");
       // $("#cRDateTime").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeBottom").animate({ height: 'hide' }, "slow");
       // $("#cRDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeConfirmDiv").animate({ height: 'hide' }, "slow");
        $("#cRDateTimeAddedDays").empty();
        $("#cRDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#confirmUpdate").animate({ height: 'show' }, "slow");;
    });
    //Course Conditions Buttons
    $("#selectHolesConfirm").click(function () {
        $("#selectHolescrumb").animate({ width: 'show' }, "fast");
        $("#cCDatePrompt").animate({ height: 'show' }, "slow");
        $("#cCDateTime").animate({ height: 'show' }, "slow");
        $("#selectHoles").animate({ height: 'hide' }, "slow");
        $("#selectHolesPrompt").animate({ height: 'hide' }, "slow");
        $("#selectHolesConfirm").animate({ height: 'hide' }, "slow");
    });
    $("#cCDateTimeAllDay").change(function () {
        $("#cCDateTime").animate({ height: 'toggle' }, "slow");
        $("#cCDateTimeCustom").animate({ height: 'toggle' }, "slow");
        $("#cCDateTimeBottom").animate({ height: 'toggle' }, "slow");
    });
    $("#cCDateTimeAddDay").click(function () {
        cCAddDay();
        $("#cCDateTimeAddedDays").animate({ height: 'show' }, "slow");
    });
    $("#cCDateTimeConfirm").click(function () {
        $("#cCDateTimecrumb").animate({ width: 'show' }, "fast");
        $("#cCDatePrompt").animate({ height: 'hide' }, "slow");
        $("#cCDateTime").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#cCDateTimeAddedDays").empty();
        $("#cCDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#confirmUpdate").animate({ height: 'show' }, "slow");
    });
    $("#nCCondition").click(function () {
        currentTime1();
        $("#courseConditioncrumb").animate({ width: 'show' }, "fast");
        $("#cCDatePrompt").animate({ height: 'show' }, "slow");
        $("#cCDateTime").animate({ height: 'show' }, "slow");
        $("#courseConditions").animate({ height: 'hide' }, "slow");
    });
    $("#sHCondition").click(function () {
        $("#courseConditioncrumb").animate({ width: 'show' }, "fast");
        $("#selectHoles").animate({ height: 'show' }, "slow");
        $("#selectHolesPrompt").animate({ height: 'show' }, "slow");
        $("#selectHolesConfirm").animate({ height: 'show' }, "slow");
        $("#courseConditions").animate({ height: 'hide' }, "slow");
    });
    $("#fDCondition").click(function () {
        currentTime1();
        $("#courseConditioncrumb").animate({ width: 'show' }, "fast");
        $("#cCDatePrompt").animate({ height: 'show' }, "slow");
        $("#cCDateTime").animate({ height: 'show' }, "slow");
        $("#courseConditions").animate({ height: 'hide' }, "slow");
    });
    $("#cCCondition").click(function () {
        currentTime1();
        $("#courseConditioncrumb").animate({ width: 'show' }, "fast");
        $("#cCDatePrompt").animate({ height: 'show' }, "slow");
        $("#cCDateTime").animate({ height: 'show' }, "slow");
        $("#courseConditions").animate({ height: 'hide' }, "slow");
    });
    $("#sGCondition").click(function () {
        $("#courseConditioncrumb").animate({ width: 'show' }, "fast");
        $("#selectHolesPrompt").animate({ height: 'show' }, "slow");
        $("#selectHolesConfirm").animate({ height: 'show' }, "slow");
        $("#selectHoles").animate({ height: 'show' }, "slow");
        $("#courseConditions").animate({ height: 'hide' }, "slow");
    });
    $("#tGCondition").click(function () {
        $("#courseConditioncrumb").animate({ width: 'show' }, "fast");
        $("#selectHoles").animate({ height: 'show' }, "slow");
        $("#selectHolesPrompt").animate({ height: 'show' }, "slow");
        $("#selectHolesConfirm").animate({ height: 'show' }, "slow");
        $("#courseConditions").animate({ height: 'hide' }, "slow");
    });
    //New Event Buttons
    $("#eVNameButton").click(function () {
        $("#eVNamecrumb").animate({width: 'show'}, "fast");
        $("#eVTypeButtons").animate({ height: 'show' }, "slow");
        $("#eVPrompt").animate({ height: 'hide' }, "slow");
        $("#eVName").animate({ height: 'hide' }, "slow");
    });
    $("#eV0").click(function () {
        $("#eVTypecrumb").animate({width: 'show'}, "fast");
        $("#eVRestrictionsButtons").animate({ height: 'show' }, "slow");
        $("#eVTypeButtons").animate({ height: 'hide' }, "slow");
    });
    $("#eV1").click(function () {
        $("#eVTypecrumb").animate({ width: 'show' }, "fast");
        $("#eVRestrictionsButtons").animate({ height: 'show' }, "slow");
        $("#eVTypeButtons").animate({ height: 'hide' }, "slow");
    });
    $("#eV2").click(function () {
        $("#eVTypecrumb").animate({ width: 'show' }, "fast");
        $("#eVRestrictionsButtons").animate({ height: 'show' }, "slow");
        $("#eVTypeButtons").animate({ height: 'hide' }, "slow");
    });
    $("#eVRestrictionButton").click(function () {
        currentTime();
        $("#eVRestrictioncrumb").animate({ width: 'show' }, "fast");
        $("#eVRestrictionsButtons").animate({ height: 'hide' }, "slow");
        $("#eVDateTime").animate({ height: 'show' }, "slow");
        $("#eVDatePrompt").animate({ height: 'show' }, "slow");
    });
    $("#eVDateTimeAllDay").change(function () {
        $("#eVDateTime").animate({ height: 'toggle' }, "slow");
        $("#eVDateTimeCustom").animate({ height: 'toggle' }, "slow");
        $("#eVDateTimeBottom").animate({ height: 'toggle' }, "slow");
    });
    $("#eVDateTimeAddDay").click(function () {
        eVAddDay();
        $("#eVDateTimeAddedDays").animate({ height: 'show' }, "slow");
    });
    $("#eVDateTimeConfirm").click(function () {
        $("#eVDateTimecrumb").animate({ width: 'show' }, "fast");
        $("#eVDateTime").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCopy").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeOptional").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeBottom").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeCustom").animate({ height: 'hide' }, "slow");
        $("#eVDatePrompt").animate({ height: 'hide' }, "slow");
        $("#eVDateTimeAddedDays").empty();
        $("#eVDateTimeAddedDays").animate({ height: 'hide' }, "slow");
        $("#confirmUpdate").animate({ height: 'show' }, "slow");
    });
});
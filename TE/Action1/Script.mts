SystemUtil.CloseProcessByName _
	"RumbaPage.exe"
SystemUtil.Run "c:\Users\Administrator\Desktop\RPA\CICS.rsdm"

TeWindow("TeWindow").TeScreen("Si").TeField("USERID").Set "SYSAD" @@ hightlight id_;_746_;_script infofile_;_ZIP::ssf1.xml_;_
TeWindow("TeWindow").TeScreen("Si").TeField("Password").SetSecure "6040b387f20a2ece7e94cb09fbec324b" @@ hightlight id_;_826_;_script infofile_;_ZIP::ssf2.xml_;_
TeWindow("TeWindow").TeScreen("Si").TeField("Password").SetCursorPos 5 @@ hightlight id_;_826_;_script infofile_;_ZIP::ssf3.xml_;_
TeWindow("TeWindow").TeScreen("Si").SendKey TE_ENTER @@ hightlight id_;_7958_;_script infofile_;_ZIP::ssf4.xml_;_
TeWindow("TeWindow").TeScreen("Si").Sync
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey "ACCT" @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf5.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SetCursorPos 1,5 @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf6.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey TE_ENTER @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf7.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").Sync
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUEST TYPE").Set "M" @@ hightlight id_;_662_;_script infofile_;_ZIP::ssf8.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("ACCOUNT").Set "10001" @@ hightlight id_;_675_;_script infofile_;_ZIP::ssf9.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("PRINTER").SetCursorPos @@ hightlight id_;_692_;_script infofile_;_ZIP::ssf10.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").SendKey TE_ENTER @@ hightlight id_;_9864_;_script infofile_;_ZIP::ssf11.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").Sync
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED").Set "01" @@ hightlight id_;_922_;_script infofile_;_ZIP::ssf12.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("SPECIAL CODES").SetCursorPos @@ hightlight id_;_1028_;_script infofile_;_ZIP::ssf13.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").SendKey TE_ENTER @@ hightlight id_;_13614_;_script infofile_;_ZIP::ssf14.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").Sync
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUESTED(protected)").Check CheckPoint("REQUESTED(protected)") @@ hightlight id_;_1842_;_script infofile_;_ZIP::ssf15.xml_;_
'TeWindow("TeWindow").InsightObject("InsightObject").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf16.xml_;_
'TeWindow("TeWindow").InsightObject("InsightObject_2").Click @@ hightlight id_;_11_;_script infofile_;_ZIP::ssf17.xml_;_
'TeWindow("TeWindow").InsightObject("InsightObject_2").DblClick @@ hightlight id_;_15_;_script infofile_;_ZIP::ssf18.xml_;_
'TeWindow("TeWindow").InsightObject("InsightObject_2").Click @@ hightlight id_;_20_;_script infofile_;_ZIP::ssf19.xml_;_
'TeWindow("TeWindow").InsightObject("InsightObject_3").Click @@ hightlight id_;_24_;_script infofile_;_ZIP::ssf20.xml_;_
'TeWindow("TeWindow").InsightObject("InsightObject_4").Click @@ hightlight id_;_27_;_script infofile_;_ZIP::ssf21.xml_;_
'TeWindow("TeWindow").InsightObject("InsightObject_5").Click @@ hightlight id_;_35_;_script infofile_;_ZIP::ssf22.xml_;_
'TeWindow("TeWindow").InsightObject("InsightObject_6").Click @@ hightlight id_;_41_;_script infofile_;_ZIP::ssf23.xml_;_




TeWindow("TeWindow").InsightObject("InsightObject_7").Click @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf24.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_8").Click @@ hightlight id_;_10_;_script infofile_;_ZIP::ssf25.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_4").Click @@ hightlight id_;_15_;_script infofile_;_ZIP::ssf26.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_9").Click @@ hightlight id_;_22_;_script infofile_;_ZIP::ssf27.xml_;_
Window("Program Manager").InsightObject("InsightObject").Click @@ hightlight id_;_27_;_script infofile_;_ZIP::ssf28.xml_;_

gdjs.GameSceneCode = {};
gdjs.GameSceneCode.localVariables = [];
gdjs.GameSceneCode.idToCallbackMap = new Map();
gdjs.GameSceneCode.forEachIndex2 = 0;

gdjs.GameSceneCode.forEachIndex3 = 0;

gdjs.GameSceneCode.forEachObjects2 = [];

gdjs.GameSceneCode.forEachObjects3 = [];

gdjs.GameSceneCode.forEachTemporary2 = null;

gdjs.GameSceneCode.forEachTemporary3 = null;

gdjs.GameSceneCode.forEachTotalCount2 = 0;

gdjs.GameSceneCode.forEachTotalCount3 = 0;

gdjs.GameSceneCode.GDIndicatorObjects1= [];
gdjs.GameSceneCode.GDIndicatorObjects2= [];
gdjs.GameSceneCode.GDIndicatorObjects3= [];
gdjs.GameSceneCode.GDIndicatorObjects4= [];
gdjs.GameSceneCode.GDTowerBaseObjects1= [];
gdjs.GameSceneCode.GDTowerBaseObjects2= [];
gdjs.GameSceneCode.GDTowerBaseObjects3= [];
gdjs.GameSceneCode.GDTowerBaseObjects4= [];
gdjs.GameSceneCode.GDBulletObjects1= [];
gdjs.GameSceneCode.GDBulletObjects2= [];
gdjs.GameSceneCode.GDBulletObjects3= [];
gdjs.GameSceneCode.GDBulletObjects4= [];
gdjs.GameSceneCode.GDGoldTextObjects1= [];
gdjs.GameSceneCode.GDGoldTextObjects2= [];
gdjs.GameSceneCode.GDGoldTextObjects3= [];
gdjs.GameSceneCode.GDGoldTextObjects4= [];
gdjs.GameSceneCode.GDTutorialTextObjects1= [];
gdjs.GameSceneCode.GDTutorialTextObjects2= [];
gdjs.GameSceneCode.GDTutorialTextObjects3= [];
gdjs.GameSceneCode.GDTutorialTextObjects4= [];
gdjs.GameSceneCode.GDZombieObjects1= [];
gdjs.GameSceneCode.GDZombieObjects2= [];
gdjs.GameSceneCode.GDZombieObjects3= [];
gdjs.GameSceneCode.GDZombieObjects4= [];
gdjs.GameSceneCode.GDPointObjects1= [];
gdjs.GameSceneCode.GDPointObjects2= [];
gdjs.GameSceneCode.GDPointObjects3= [];
gdjs.GameSceneCode.GDPointObjects4= [];
gdjs.GameSceneCode.GDSpawnPointObjects1= [];
gdjs.GameSceneCode.GDSpawnPointObjects2= [];
gdjs.GameSceneCode.GDSpawnPointObjects3= [];
gdjs.GameSceneCode.GDSpawnPointObjects4= [];
gdjs.GameSceneCode.GDNextWaveButtonObjects1= [];
gdjs.GameSceneCode.GDNextWaveButtonObjects2= [];
gdjs.GameSceneCode.GDNextWaveButtonObjects3= [];
gdjs.GameSceneCode.GDNextWaveButtonObjects4= [];
gdjs.GameSceneCode.GDRangeObjects1= [];
gdjs.GameSceneCode.GDRangeObjects2= [];
gdjs.GameSceneCode.GDRangeObjects3= [];
gdjs.GameSceneCode.GDRangeObjects4= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects1= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects2= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects3= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects4= [];
gdjs.GameSceneCode.GDTilemapObjects1= [];
gdjs.GameSceneCode.GDTilemapObjects2= [];
gdjs.GameSceneCode.GDTilemapObjects3= [];
gdjs.GameSceneCode.GDTilemapObjects4= [];
gdjs.GameSceneCode.GDTowerButton1Objects1= [];
gdjs.GameSceneCode.GDTowerButton1Objects2= [];
gdjs.GameSceneCode.GDTowerButton1Objects3= [];
gdjs.GameSceneCode.GDTowerButton1Objects4= [];
gdjs.GameSceneCode.GDZombie2Objects1= [];
gdjs.GameSceneCode.GDZombie2Objects2= [];
gdjs.GameSceneCode.GDZombie2Objects3= [];
gdjs.GameSceneCode.GDZombie2Objects4= [];
gdjs.GameSceneCode.GDTowerButton2Objects1= [];
gdjs.GameSceneCode.GDTowerButton2Objects2= [];
gdjs.GameSceneCode.GDTowerButton2Objects3= [];
gdjs.GameSceneCode.GDTowerButton2Objects4= [];
gdjs.GameSceneCode.GDIndicator2Objects1= [];
gdjs.GameSceneCode.GDIndicator2Objects2= [];
gdjs.GameSceneCode.GDIndicator2Objects3= [];
gdjs.GameSceneCode.GDIndicator2Objects4= [];
gdjs.GameSceneCode.GDTowerHead2Objects1= [];
gdjs.GameSceneCode.GDTowerHead2Objects2= [];
gdjs.GameSceneCode.GDTowerHead2Objects3= [];
gdjs.GameSceneCode.GDTowerHead2Objects4= [];
gdjs.GameSceneCode.GDBullet2Objects1= [];
gdjs.GameSceneCode.GDBullet2Objects2= [];
gdjs.GameSceneCode.GDBullet2Objects3= [];
gdjs.GameSceneCode.GDBullet2Objects4= [];
gdjs.GameSceneCode.GDTowerHead3Objects1= [];
gdjs.GameSceneCode.GDTowerHead3Objects2= [];
gdjs.GameSceneCode.GDTowerHead3Objects3= [];
gdjs.GameSceneCode.GDTowerHead3Objects4= [];
gdjs.GameSceneCode.GDBullet3Objects1= [];
gdjs.GameSceneCode.GDBullet3Objects2= [];
gdjs.GameSceneCode.GDBullet3Objects3= [];
gdjs.GameSceneCode.GDBullet3Objects4= [];
gdjs.GameSceneCode.GDTowerButton3Objects1= [];
gdjs.GameSceneCode.GDTowerButton3Objects2= [];
gdjs.GameSceneCode.GDTowerButton3Objects3= [];
gdjs.GameSceneCode.GDTowerButton3Objects4= [];
gdjs.GameSceneCode.GDIndicator3Objects1= [];
gdjs.GameSceneCode.GDIndicator3Objects2= [];
gdjs.GameSceneCode.GDIndicator3Objects3= [];
gdjs.GameSceneCode.GDIndicator3Objects4= [];
gdjs.GameSceneCode.GDGoldMaker2Objects1= [];
gdjs.GameSceneCode.GDGoldMaker2Objects2= [];
gdjs.GameSceneCode.GDGoldMaker2Objects3= [];
gdjs.GameSceneCode.GDGoldMaker2Objects4= [];
gdjs.GameSceneCode.GDInterFaceUpObjects1= [];
gdjs.GameSceneCode.GDInterFaceUpObjects2= [];
gdjs.GameSceneCode.GDInterFaceUpObjects3= [];
gdjs.GameSceneCode.GDInterFaceUpObjects4= [];
gdjs.GameSceneCode.GDHeartMaker2Objects1= [];
gdjs.GameSceneCode.GDHeartMaker2Objects2= [];
gdjs.GameSceneCode.GDHeartMaker2Objects3= [];
gdjs.GameSceneCode.GDHeartMaker2Objects4= [];
gdjs.GameSceneCode.GDZombieMaker2Objects1= [];
gdjs.GameSceneCode.GDZombieMaker2Objects2= [];
gdjs.GameSceneCode.GDZombieMaker2Objects3= [];
gdjs.GameSceneCode.GDZombieMaker2Objects4= [];
gdjs.GameSceneCode.GDStartMaker2Objects1= [];
gdjs.GameSceneCode.GDStartMaker2Objects2= [];
gdjs.GameSceneCode.GDStartMaker2Objects3= [];
gdjs.GameSceneCode.GDStartMaker2Objects4= [];
gdjs.GameSceneCode.GDTowerButton4Objects1= [];
gdjs.GameSceneCode.GDTowerButton4Objects2= [];
gdjs.GameSceneCode.GDTowerButton4Objects3= [];
gdjs.GameSceneCode.GDTowerButton4Objects4= [];
gdjs.GameSceneCode.GDIndicator4Objects1= [];
gdjs.GameSceneCode.GDIndicator4Objects2= [];
gdjs.GameSceneCode.GDIndicator4Objects3= [];
gdjs.GameSceneCode.GDIndicator4Objects4= [];
gdjs.GameSceneCode.GDTowerHead4Objects1= [];
gdjs.GameSceneCode.GDTowerHead4Objects2= [];
gdjs.GameSceneCode.GDTowerHead4Objects3= [];
gdjs.GameSceneCode.GDTowerHead4Objects4= [];
gdjs.GameSceneCode.GDBullet4Objects1= [];
gdjs.GameSceneCode.GDBullet4Objects2= [];
gdjs.GameSceneCode.GDBullet4Objects3= [];
gdjs.GameSceneCode.GDBullet4Objects4= [];
gdjs.GameSceneCode.GDTowerHead1Objects1= [];
gdjs.GameSceneCode.GDTowerHead1Objects2= [];
gdjs.GameSceneCode.GDTowerHead1Objects3= [];
gdjs.GameSceneCode.GDTowerHead1Objects4= [];
gdjs.GameSceneCode.GDTowerZapretObjects1= [];
gdjs.GameSceneCode.GDTowerZapretObjects2= [];
gdjs.GameSceneCode.GDTowerZapretObjects3= [];
gdjs.GameSceneCode.GDTowerZapretObjects4= [];
gdjs.GameSceneCode.GDAntiObjects1= [];
gdjs.GameSceneCode.GDAntiObjects2= [];
gdjs.GameSceneCode.GDAntiObjects3= [];
gdjs.GameSceneCode.GDAntiObjects4= [];
gdjs.GameSceneCode.GDDestroyMaker2Objects1= [];
gdjs.GameSceneCode.GDDestroyMaker2Objects2= [];
gdjs.GameSceneCode.GDDestroyMaker2Objects3= [];
gdjs.GameSceneCode.GDDestroyMaker2Objects4= [];
gdjs.GameSceneCode.GDIndicatorDestroyObjects1= [];
gdjs.GameSceneCode.GDIndicatorDestroyObjects2= [];
gdjs.GameSceneCode.GDIndicatorDestroyObjects3= [];
gdjs.GameSceneCode.GDIndicatorDestroyObjects4= [];
gdjs.GameSceneCode.GDTowerButton5Objects1= [];
gdjs.GameSceneCode.GDTowerButton5Objects2= [];
gdjs.GameSceneCode.GDTowerButton5Objects3= [];
gdjs.GameSceneCode.GDTowerButton5Objects4= [];
gdjs.GameSceneCode.GDInterFaceRightObjects1= [];
gdjs.GameSceneCode.GDInterFaceRightObjects2= [];
gdjs.GameSceneCode.GDInterFaceRightObjects3= [];
gdjs.GameSceneCode.GDInterFaceRightObjects4= [];
gdjs.GameSceneCode.GDNextWaveButton2Objects1= [];
gdjs.GameSceneCode.GDNextWaveButton2Objects2= [];
gdjs.GameSceneCode.GDNextWaveButton2Objects3= [];
gdjs.GameSceneCode.GDNextWaveButton2Objects4= [];
gdjs.GameSceneCode.GDRangeNEObjects1= [];
gdjs.GameSceneCode.GDRangeNEObjects2= [];
gdjs.GameSceneCode.GDRangeNEObjects3= [];
gdjs.GameSceneCode.GDRangeNEObjects4= [];
gdjs.GameSceneCode.GDZombie3Objects1= [];
gdjs.GameSceneCode.GDZombie3Objects2= [];
gdjs.GameSceneCode.GDZombie3Objects3= [];
gdjs.GameSceneCode.GDZombie3Objects4= [];
gdjs.GameSceneCode.GDNextWaveButton3Objects1= [];
gdjs.GameSceneCode.GDNextWaveButton3Objects2= [];
gdjs.GameSceneCode.GDNextWaveButton3Objects3= [];
gdjs.GameSceneCode.GDNextWaveButton3Objects4= [];
gdjs.GameSceneCode.GDNextWaveButton4Objects1= [];
gdjs.GameSceneCode.GDNextWaveButton4Objects2= [];
gdjs.GameSceneCode.GDNextWaveButton4Objects3= [];
gdjs.GameSceneCode.GDNextWaveButton4Objects4= [];
gdjs.GameSceneCode.GDTowerHead5Objects1= [];
gdjs.GameSceneCode.GDTowerHead5Objects2= [];
gdjs.GameSceneCode.GDTowerHead5Objects3= [];
gdjs.GameSceneCode.GDTowerHead5Objects4= [];
gdjs.GameSceneCode.GDIndicator5Objects1= [];
gdjs.GameSceneCode.GDIndicator5Objects2= [];
gdjs.GameSceneCode.GDIndicator5Objects3= [];
gdjs.GameSceneCode.GDIndicator5Objects4= [];
gdjs.GameSceneCode.GDBullet5Objects1= [];
gdjs.GameSceneCode.GDBullet5Objects2= [];
gdjs.GameSceneCode.GDBullet5Objects3= [];
gdjs.GameSceneCode.GDBullet5Objects4= [];
gdjs.GameSceneCode.GDBoxOFFObjects1= [];
gdjs.GameSceneCode.GDBoxOFFObjects2= [];
gdjs.GameSceneCode.GDBoxOFFObjects3= [];
gdjs.GameSceneCode.GDBoxOFFObjects4= [];
gdjs.GameSceneCode.GDBoxMaker2Objects1= [];
gdjs.GameSceneCode.GDBoxMaker2Objects2= [];
gdjs.GameSceneCode.GDBoxMaker2Objects3= [];
gdjs.GameSceneCode.GDBoxMaker2Objects4= [];
gdjs.GameSceneCode.GDIndicatorBoxObjects1= [];
gdjs.GameSceneCode.GDIndicatorBoxObjects2= [];
gdjs.GameSceneCode.GDIndicatorBoxObjects3= [];
gdjs.GameSceneCode.GDIndicatorBoxObjects4= [];


gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects = Hashtable.newFrom({"Indicator2": gdjs.GameSceneCode.GDIndicator2Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects = Hashtable.newFrom({"Indicator3": gdjs.GameSceneCode.GDIndicator3Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects = Hashtable.newFrom({"Indicator4": gdjs.GameSceneCode.GDIndicator4Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorDestroyObjects1Objects = Hashtable.newFrom({"IndicatorDestroy": gdjs.GameSceneCode.GDIndicatorDestroyObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects = Hashtable.newFrom({"Indicator5": gdjs.GameSceneCode.GDIndicator5Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorBoxObjects1Objects = Hashtable.newFrom({"IndicatorBox": gdjs.GameSceneCode.GDIndicatorBoxObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects1ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects1Objects = Hashtable.newFrom({"Zombie": gdjs.GameSceneCode.GDZombieObjects1, "Zombie2": gdjs.GameSceneCode.GDZombie2Objects1, "Zombie3": gdjs.GameSceneCode.GDZombie3Objects1});
gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

};gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.GameSceneCode.GDPointObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDPointObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects1, gdjs.GameSceneCode.GDZombieObjects3);

gdjs.GameSceneCode.GDPointObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDPointObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDPointObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPointObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPointObjects3[i].getVariableNumber(gdjs.GameSceneCode.GDPointObjects3[i].getVariables().getFromIndex(0)) == ((gdjs.GameSceneCode.GDZombieObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameSceneCode.GDZombieObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPointObjects3[k] = gdjs.GameSceneCode.GDPointObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPointObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].valuePush(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1), (( gdjs.GameSceneCode.GDPointObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPointObjects3[0].getPointX("")));
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].valuePush(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(2), (( gdjs.GameSceneCode.GDPointObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPointObjects3[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].returnVariable(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(0)).add(1);
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects1, gdjs.GameSceneCode.GDZombieObjects2);

{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(2).getChild(0).getAsNumber(), runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), gdjs.evtTools.common.distanceBetweenPositions((gdjs.GameSceneCode.GDZombieObjects2[i].getPointX("")), (gdjs.GameSceneCode.GDZombieObjects2[i].getPointY("")), gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(2).getChild(0).getAsNumber()) * 0.01, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(0), 0);
}
}

}


};gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameSceneCode.GDZombieObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects1[i].returnVariable(gdjs.GameSceneCode.GDZombieObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}

{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.GameSceneCode.GDZombieObjects1});
gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

};gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.GameSceneCode.GDPointObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDPointObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects1, gdjs.GameSceneCode.GDZombieObjects3);

gdjs.GameSceneCode.GDPointObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDPointObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDPointObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPointObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPointObjects3[i].getVariableNumber(gdjs.GameSceneCode.GDPointObjects3[i].getVariables().getFromIndex(0)) == ((gdjs.GameSceneCode.GDZombieObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameSceneCode.GDZombieObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPointObjects3[k] = gdjs.GameSceneCode.GDPointObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPointObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].valuePush(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1), (( gdjs.GameSceneCode.GDPointObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPointObjects3[0].getPointX("")));
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].valuePush(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(2), (( gdjs.GameSceneCode.GDPointObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPointObjects3[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].returnVariable(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(0)).add(1);
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects1, gdjs.GameSceneCode.GDZombieObjects2);

{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(2).getChild(0).getAsNumber(), runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), gdjs.evtTools.common.distanceBetweenPositions((gdjs.GameSceneCode.GDZombieObjects2[i].getPointX("")), (gdjs.GameSceneCode.GDZombieObjects2[i].getPointY("")), gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(2).getChild(0).getAsNumber()) * 0.01, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(0), 0);
}
}

}


};gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameSceneCode.GDZombieObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects1[i].returnVariable(gdjs.GameSceneCode.GDZombieObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}

{ //Subevents
gdjs.GameSceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDFlatHeartBarObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDFlatHeartBarObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDFlatHeartBarObjects3[i].Value(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDFlatHeartBarObjects3[k] = gdjs.GameSceneCode.GDFlatHeartBarObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDFlatHeartBarObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects3[i].getVariableChildCount(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects3[k] = gdjs.GameSceneCode.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDZombieObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(2).getChild(0).getAsNumber(), runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), gdjs.evtTools.common.distanceBetweenPositions((gdjs.GameSceneCode.GDZombieObjects3[i].getPointX("")), (gdjs.GameSceneCode.GDZombieObjects3[i].getPointY("")), gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(2).getChild(0).getAsNumber()) * 0.008, false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].rotateTowardPosition(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(2).getChild(0).getAsNumber(), 0, runtimeScene);
}
}
}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects3[i].getVariableChildCount(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects3[k] = gdjs.GameSceneCode.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.GameSceneCode.GDFlatHeartBarObjects3);
/* Reuse gdjs.GameSceneCode.GDZombieObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDFlatHeartBarObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFlatHeartBarObjects3[i].SetValue(gdjs.GameSceneCode.GDFlatHeartBarObjects3[i].Value(null) - (1), null);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.GameSceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie2Objects2, gdjs.GameSceneCode.GDZombie2Objects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie3Objects2, gdjs.GameSceneCode.GDZombie3Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects3[k] = gdjs.GameSceneCode.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects3[k] = gdjs.GameSceneCode.GDZombie2Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie3Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie3Objects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie3Objects3[k] = gdjs.GameSceneCode.GDZombie3Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie3Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDZombieObjects3 */
/* Reuse gdjs.GameSceneCode.GDZombie2Objects3 */
/* Reuse gdjs.GameSceneCode.GDZombie3Objects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie3Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie3Objects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(2);
}
}

}


};gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie2Objects2, gdjs.GameSceneCode.GDZombie2Objects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie3Objects2, gdjs.GameSceneCode.GDZombie3Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects3[k] = gdjs.GameSceneCode.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects3[k] = gdjs.GameSceneCode.GDZombie2Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie3Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie3Objects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie3Objects3[k] = gdjs.GameSceneCode.GDZombie3Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie3Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDZombieObjects3 */
/* Reuse gdjs.GameSceneCode.GDZombie2Objects3 */
/* Reuse gdjs.GameSceneCode.GDZombie3Objects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie3Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie3Objects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(2);
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects3ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects3ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects3Objects = Hashtable.newFrom({"Zombie": gdjs.GameSceneCode.GDZombieObjects3, "Zombie2": gdjs.GameSceneCode.GDZombie2Objects3, "Zombie3": gdjs.GameSceneCode.GDZombie3Objects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet3Objects3Objects = Hashtable.newFrom({"Bullet3": gdjs.GameSceneCode.GDBullet3Objects3});
gdjs.GameSceneCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDBullet3Objects2, gdjs.GameSceneCode.GDBullet3Objects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie2Objects2, gdjs.GameSceneCode.GDZombie2Objects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie3Objects2, gdjs.GameSceneCode.GDZombie3Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects3ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects3ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects3Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet3Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(5);
}
}

}


};gdjs.GameSceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie2Objects2, gdjs.GameSceneCode.GDZombie2Objects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie3Objects2, gdjs.GameSceneCode.GDZombie3Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects3[k] = gdjs.GameSceneCode.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects3[k] = gdjs.GameSceneCode.GDZombie2Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie3Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie3Objects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie3Objects3[k] = gdjs.GameSceneCode.GDZombie3Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie3Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDZombieObjects3 */
/* Reuse gdjs.GameSceneCode.GDZombie2Objects3 */
/* Reuse gdjs.GameSceneCode.GDZombie3Objects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie3Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie3Objects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameSceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie2Objects2, gdjs.GameSceneCode.GDZombie2Objects3);

gdjs.copyArray(gdjs.GameSceneCode.GDZombie3Objects2, gdjs.GameSceneCode.GDZombie3Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects3[k] = gdjs.GameSceneCode.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects3[k] = gdjs.GameSceneCode.GDZombie2Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie3Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie3Objects3[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie3Objects3[k] = gdjs.GameSceneCode.GDZombie3Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie3Objects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameSceneCode.GDBullet5Objects2, gdjs.GameSceneCode.GDBullet5Objects3);

/* Reuse gdjs.GameSceneCode.GDZombieObjects3 */
/* Reuse gdjs.GameSceneCode.GDZombie2Objects3 */
/* Reuse gdjs.GameSceneCode.GDZombie3Objects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie3Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie3Objects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(2);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDBullet5Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet5Objects3[i].rotateTowardPosition((( gdjs.GameSceneCode.GDZombie3Objects3.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects3.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects3[0].getPointX("")) :gdjs.GameSceneCode.GDZombie2Objects3[0].getPointX("")) :gdjs.GameSceneCode.GDZombie3Objects3[0].getPointX("")), (( gdjs.GameSceneCode.GDZombie3Objects3.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects3.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects3[0].getPointY("")) :gdjs.GameSceneCode.GDZombie2Objects3[0].getPointY("")) :gdjs.GameSceneCode.GDZombie3Objects3[0].getPointY("")), 0, runtimeScene);
}
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects2Objects = Hashtable.newFrom({"TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects2Objects = Hashtable.newFrom({"Zombie": gdjs.GameSceneCode.GDZombieObjects2, "Zombie2": gdjs.GameSceneCode.GDZombie2Objects2, "Zombie3": gdjs.GameSceneCode.GDZombie3Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects2});
gdjs.GameSceneCode.eventsList13 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects2Objects = Hashtable.newFrom({"TowerHead2": gdjs.GameSceneCode.GDTowerHead2Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects2Objects = Hashtable.newFrom({"Zombie": gdjs.GameSceneCode.GDZombieObjects2, "Zombie2": gdjs.GameSceneCode.GDZombie2Objects2, "Zombie3": gdjs.GameSceneCode.GDZombie3Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects2Objects = Hashtable.newFrom({"Bullet2": gdjs.GameSceneCode.GDBullet2Objects2});
gdjs.GameSceneCode.eventsList14 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects2Objects = Hashtable.newFrom({"TowerHead3": gdjs.GameSceneCode.GDTowerHead3Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects2Objects = Hashtable.newFrom({"Zombie": gdjs.GameSceneCode.GDZombieObjects2, "Zombie2": gdjs.GameSceneCode.GDZombie2Objects2, "Zombie3": gdjs.GameSceneCode.GDZombie3Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet3Objects2Objects = Hashtable.newFrom({"Bullet3": gdjs.GameSceneCode.GDBullet3Objects2});
gdjs.GameSceneCode.eventsList15 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects2Objects = Hashtable.newFrom({"TowerHead4": gdjs.GameSceneCode.GDTowerHead4Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects2Objects = Hashtable.newFrom({"Zombie": gdjs.GameSceneCode.GDZombieObjects2, "Zombie2": gdjs.GameSceneCode.GDZombie2Objects2, "Zombie3": gdjs.GameSceneCode.GDZombie3Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet4Objects2Objects = Hashtable.newFrom({"Bullet4": gdjs.GameSceneCode.GDBullet4Objects2});
gdjs.GameSceneCode.eventsList16 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet5Objects2Objects = Hashtable.newFrom({"Bullet5": gdjs.GameSceneCode.GDBullet5Objects2});
gdjs.GameSceneCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawning") > 1.5;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameSceneCode.GDBullet5Objects2, gdjs.GameSceneCode.GDBullet5Objects3);

{for(var i = 0, len = gdjs.GameSceneCode.GDBullet5Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet5Objects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorDestroyObjects1Objects = Hashtable.newFrom({"IndicatorDestroy": gdjs.GameSceneCode.GDIndicatorDestroyObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects = Hashtable.newFrom({"Tilemap": gdjs.GameSceneCode.GDTilemapObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects = Hashtable.newFrom({"NextWaveButton": gdjs.GameSceneCode.GDNextWaveButtonObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorDestroyObjects1Objects = Hashtable.newFrom({"IndicatorDestroy": gdjs.GameSceneCode.GDIndicatorDestroyObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects = Hashtable.newFrom({"Anti": gdjs.GameSceneCode.GDAntiObjects1});
gdjs.GameSceneCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects = Hashtable.newFrom({"Tilemap": gdjs.GameSceneCode.GDTilemapObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects = Hashtable.newFrom({"NextWaveButton": gdjs.GameSceneCode.GDNextWaveButtonObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects = Hashtable.newFrom({"Anti": gdjs.GameSceneCode.GDAntiObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects = Hashtable.newFrom({"BoxOFF": gdjs.GameSceneCode.GDBoxOFFObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects = Hashtable.newFrom({"TowerHead2": gdjs.GameSceneCode.GDTowerHead2Objects1, "TowerHead5": gdjs.GameSceneCode.GDTowerHead5Objects1, "TowerHead3": gdjs.GameSceneCode.GDTowerHead3Objects1, "TowerHead4": gdjs.GameSceneCode.GDTowerHead4Objects1, "TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects = Hashtable.newFrom({"TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects1});
gdjs.GameSceneCode.eventsList19 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].getBehavior("Animation").getAnimationName() == "Tower2" ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 10);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
/* Reuse gdjs.GameSceneCode.GDTowerHead1Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(10);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects, (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointY("")), "");
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects = Hashtable.newFrom({"TowerZapret": gdjs.GameSceneCode.GDTowerZapretObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects = Hashtable.newFrom({"Indicator2": gdjs.GameSceneCode.GDIndicator2Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects = Hashtable.newFrom({"Tilemap": gdjs.GameSceneCode.GDTilemapObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects = Hashtable.newFrom({"NextWaveButton": gdjs.GameSceneCode.GDNextWaveButtonObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects = Hashtable.newFrom({"Indicator2": gdjs.GameSceneCode.GDIndicator2Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects = Hashtable.newFrom({"Anti": gdjs.GameSceneCode.GDAntiObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects = Hashtable.newFrom({"Indicator2": gdjs.GameSceneCode.GDIndicator2Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects = Hashtable.newFrom({"BoxOFF": gdjs.GameSceneCode.GDBoxOFFObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects = Hashtable.newFrom({"Indicator2": gdjs.GameSceneCode.GDIndicator2Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects = Hashtable.newFrom({"TowerHead2": gdjs.GameSceneCode.GDTowerHead2Objects1, "TowerHead5": gdjs.GameSceneCode.GDTowerHead5Objects1, "TowerHead3": gdjs.GameSceneCode.GDTowerHead3Objects1, "TowerHead4": gdjs.GameSceneCode.GDTowerHead4Objects1, "TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1Objects = Hashtable.newFrom({"TowerHead2": gdjs.GameSceneCode.GDTowerHead2Objects1});
gdjs.GameSceneCode.eventsList20 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDIndicator2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator2Objects1[i].getBehavior("Animation").getAnimationName() == "Tower2" ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator2Objects1[k] = gdjs.GameSceneCode.GDIndicator2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 40);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator2Objects1 */
/* Reuse gdjs.GameSceneCode.GDTowerHead2Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(40);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1Objects, (( gdjs.GameSceneCode.GDIndicator2Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator2Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator2Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator2Objects1[0].getPointY("")), "");
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects = Hashtable.newFrom({"TowerZapret": gdjs.GameSceneCode.GDTowerZapretObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects = Hashtable.newFrom({"Indicator3": gdjs.GameSceneCode.GDIndicator3Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects = Hashtable.newFrom({"Tilemap": gdjs.GameSceneCode.GDTilemapObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects = Hashtable.newFrom({"NextWaveButton": gdjs.GameSceneCode.GDNextWaveButtonObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects = Hashtable.newFrom({"Indicator3": gdjs.GameSceneCode.GDIndicator3Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects = Hashtable.newFrom({"Anti": gdjs.GameSceneCode.GDAntiObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects = Hashtable.newFrom({"Indicator3": gdjs.GameSceneCode.GDIndicator3Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects = Hashtable.newFrom({"BoxOFF": gdjs.GameSceneCode.GDBoxOFFObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects = Hashtable.newFrom({"Indicator3": gdjs.GameSceneCode.GDIndicator3Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects = Hashtable.newFrom({"TowerHead2": gdjs.GameSceneCode.GDTowerHead2Objects1, "TowerHead5": gdjs.GameSceneCode.GDTowerHead5Objects1, "TowerHead3": gdjs.GameSceneCode.GDTowerHead3Objects1, "TowerHead4": gdjs.GameSceneCode.GDTowerHead4Objects1, "TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1Objects = Hashtable.newFrom({"TowerHead3": gdjs.GameSceneCode.GDTowerHead3Objects1});
gdjs.GameSceneCode.eventsList21 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDIndicator3Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator3Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator3Objects1[i].getBehavior("Animation").getAnimationName() == "Tower2" ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator3Objects1[k] = gdjs.GameSceneCode.GDIndicator3Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 15);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator3Objects1 */
/* Reuse gdjs.GameSceneCode.GDTowerHead3Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(15);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1Objects, (( gdjs.GameSceneCode.GDIndicator3Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator3Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator3Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator3Objects1[0].getPointY("")), "");
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects = Hashtable.newFrom({"TowerZapret": gdjs.GameSceneCode.GDTowerZapretObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects = Hashtable.newFrom({"Indicator4": gdjs.GameSceneCode.GDIndicator4Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects = Hashtable.newFrom({"Tilemap": gdjs.GameSceneCode.GDTilemapObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects = Hashtable.newFrom({"NextWaveButton": gdjs.GameSceneCode.GDNextWaveButtonObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects = Hashtable.newFrom({"Indicator4": gdjs.GameSceneCode.GDIndicator4Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects = Hashtable.newFrom({"Anti": gdjs.GameSceneCode.GDAntiObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects = Hashtable.newFrom({"Indicator4": gdjs.GameSceneCode.GDIndicator4Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects = Hashtable.newFrom({"BoxOFF": gdjs.GameSceneCode.GDBoxOFFObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects = Hashtable.newFrom({"Indicator4": gdjs.GameSceneCode.GDIndicator4Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects = Hashtable.newFrom({"TowerHead2": gdjs.GameSceneCode.GDTowerHead2Objects1, "TowerHead5": gdjs.GameSceneCode.GDTowerHead5Objects1, "TowerHead3": gdjs.GameSceneCode.GDTowerHead3Objects1, "TowerHead4": gdjs.GameSceneCode.GDTowerHead4Objects1, "TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1Objects = Hashtable.newFrom({"TowerHead4": gdjs.GameSceneCode.GDTowerHead4Objects1});
gdjs.GameSceneCode.eventsList22 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDIndicator4Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator4Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator4Objects1[i].getBehavior("Animation").getAnimationName() == "Tower2" ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator4Objects1[k] = gdjs.GameSceneCode.GDIndicator4Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 75);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator4Objects1 */
/* Reuse gdjs.GameSceneCode.GDTowerHead4Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(75);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1Objects, (( gdjs.GameSceneCode.GDIndicator4Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator4Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator4Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator4Objects1[0].getPointY("")), "");
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects = Hashtable.newFrom({"TowerZapret": gdjs.GameSceneCode.GDTowerZapretObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects = Hashtable.newFrom({"Indicator5": gdjs.GameSceneCode.GDIndicator5Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects = Hashtable.newFrom({"Tilemap": gdjs.GameSceneCode.GDTilemapObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects = Hashtable.newFrom({"NextWaveButton": gdjs.GameSceneCode.GDNextWaveButtonObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects = Hashtable.newFrom({"Indicator5": gdjs.GameSceneCode.GDIndicator5Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects = Hashtable.newFrom({"Anti": gdjs.GameSceneCode.GDAntiObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects = Hashtable.newFrom({"Indicator5": gdjs.GameSceneCode.GDIndicator5Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects = Hashtable.newFrom({"BoxOFF": gdjs.GameSceneCode.GDBoxOFFObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects = Hashtable.newFrom({"Indicator5": gdjs.GameSceneCode.GDIndicator5Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects = Hashtable.newFrom({"TowerHead2": gdjs.GameSceneCode.GDTowerHead2Objects1, "TowerHead5": gdjs.GameSceneCode.GDTowerHead5Objects1, "TowerHead3": gdjs.GameSceneCode.GDTowerHead3Objects1, "TowerHead4": gdjs.GameSceneCode.GDTowerHead4Objects1, "TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1Objects = Hashtable.newFrom({"TowerHead5": gdjs.GameSceneCode.GDTowerHead5Objects1});
gdjs.GameSceneCode.eventsList23 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDIndicator5Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator5Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator5Objects1[i].getBehavior("Animation").getAnimationName() == "Tower2" ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator5Objects1[k] = gdjs.GameSceneCode.GDIndicator5Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 10);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator5Objects1 */
/* Reuse gdjs.GameSceneCode.GDTowerHead5Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(10);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1Objects, (( gdjs.GameSceneCode.GDIndicator5Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator5Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator5Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator5Objects1[0].getPointY("")), "");
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects = Hashtable.newFrom({"TowerZapret": gdjs.GameSceneCode.GDTowerZapretObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorBoxObjects1Objects = Hashtable.newFrom({"IndicatorBox": gdjs.GameSceneCode.GDIndicatorBoxObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects = Hashtable.newFrom({"Tilemap": gdjs.GameSceneCode.GDTilemapObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects = Hashtable.newFrom({"NextWaveButton": gdjs.GameSceneCode.GDNextWaveButtonObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorBoxObjects1Objects = Hashtable.newFrom({"IndicatorBox": gdjs.GameSceneCode.GDIndicatorBoxObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects = Hashtable.newFrom({"Anti": gdjs.GameSceneCode.GDAntiObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorBoxObjects1Objects = Hashtable.newFrom({"IndicatorBox": gdjs.GameSceneCode.GDIndicatorBoxObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects = Hashtable.newFrom({"TowerHead2": gdjs.GameSceneCode.GDTowerHead2Objects1, "TowerHead5": gdjs.GameSceneCode.GDTowerHead5Objects1, "TowerHead3": gdjs.GameSceneCode.GDTowerHead3Objects1, "TowerHead4": gdjs.GameSceneCode.GDTowerHead4Objects1, "TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects = Hashtable.newFrom({"BoxOFF": gdjs.GameSceneCode.GDBoxOFFObjects1});
gdjs.GameSceneCode.eventsList24 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDIndicatorBoxObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].getBehavior("Animation").getAnimationName() == "Tower2" ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorBoxObjects1[k] = gdjs.GameSceneCode.GDIndicatorBoxObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorBoxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorBoxObjects1 */
gdjs.GameSceneCode.GDBoxOFFObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects, (( gdjs.GameSceneCode.GDIndicatorBoxObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorBoxObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorBoxObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorBoxObjects1[0].getPointY("")), "");
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects = Hashtable.newFrom({"TowerZapret": gdjs.GameSceneCode.GDTowerZapretObjects1});
gdjs.GameSceneCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DestroyMaker2"), gdjs.GameSceneCode.GDDestroyMaker2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDDestroyMaker2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDDestroyMaker2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDDestroyMaker2Objects1[k] = gdjs.GameSceneCode.GDDestroyMaker2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDDestroyMaker2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorDestroyObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].getBehavior("Animation").setAnimationName("Tower2");
}
}
}

}


};gdjs.GameSceneCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BoxMaker2"), gdjs.GameSceneCode.GDBoxMaker2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBoxMaker2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBoxMaker2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDBoxMaker2Objects1[k] = gdjs.GameSceneCode.GDBoxMaker2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBoxMaker2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorBoxObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].getBehavior("Animation").setAnimationName("Tower2");
}
}
}

}


};gdjs.GameSceneCode.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TowerButton1"), gdjs.GameSceneCode.GDTowerButton1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerButton1Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerButton1Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerButton1Objects1[k] = gdjs.GameSceneCode.GDTowerButton1Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerButton1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].getBehavior("Animation").setAnimationName("Tower2");
}
}
}

}


};gdjs.GameSceneCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TowerButton2"), gdjs.GameSceneCode.GDTowerButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerButton2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerButton2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerButton2Objects1[k] = gdjs.GameSceneCode.GDTowerButton2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerButton2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator2Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator2Objects1[i].getBehavior("Animation").setAnimationName("Tower2");
}
}
}

}


};gdjs.GameSceneCode.eventsList29 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TowerButton3"), gdjs.GameSceneCode.GDTowerButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerButton3Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerButton3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerButton3Objects1[k] = gdjs.GameSceneCode.GDTowerButton3Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerButton3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator3Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator3Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator3Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator3Objects1[i].getBehavior("Animation").setAnimationName("Tower2");
}
}
}

}


};gdjs.GameSceneCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TowerButton4"), gdjs.GameSceneCode.GDTowerButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerButton4Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerButton4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerButton4Objects1[k] = gdjs.GameSceneCode.GDTowerButton4Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerButton4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator4Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator4Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator4Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator4Objects1[i].getBehavior("Animation").setAnimationName("Tower2");
}
}
}

}


};gdjs.GameSceneCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TowerButton5"), gdjs.GameSceneCode.GDTowerButton5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerButton5Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerButton5Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerButton5Objects1[k] = gdjs.GameSceneCode.GDTowerButton5Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerButton5Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator5Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator5Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator5Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator5Objects1[i].getBehavior("Animation").setAnimationName("Tower2");
}
}
}

}


};gdjs.GameSceneCode.eventsList32 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDFlatHeartBarObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDFlatHeartBarObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDFlatHeartBarObjects3[i].Value(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDFlatHeartBarObjects3[k] = gdjs.GameSceneCode.GDFlatHeartBarObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDFlatHeartBarObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


};gdjs.GameSceneCode.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDZombie2Objects2, gdjs.GameSceneCode.GDZombie2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects3[i].getVariableChildCount(gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(1)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects3[k] = gdjs.GameSceneCode.GDZombie2Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDZombie2Objects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(2).getChild(0).getAsNumber(), runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), gdjs.evtTools.common.distanceBetweenPositions((gdjs.GameSceneCode.GDZombie2Objects3[i].getPointX("")), (gdjs.GameSceneCode.GDZombie2Objects3[i].getPointY("")), gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(2).getChild(0).getAsNumber()) * 0.006, false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].rotateTowardPosition(gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(2).getChild(0).getAsNumber(), 0, runtimeScene);
}
}
}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDZombie2Objects2, gdjs.GameSceneCode.GDZombie2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects3[i].getVariableChildCount(gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects3[k] = gdjs.GameSceneCode.GDZombie2Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.GameSceneCode.GDFlatHeartBarObjects3);
/* Reuse gdjs.GameSceneCode.GDZombie2Objects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDFlatHeartBarObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFlatHeartBarObjects3[i].SetValue(gdjs.GameSceneCode.GDFlatHeartBarObjects3[i].Value(null) - (2), null);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.GameSceneCode.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombie2Objects1Objects = Hashtable.newFrom({"Zombie2": gdjs.GameSceneCode.GDZombie2Objects1});
gdjs.GameSceneCode.eventsList34 = function(runtimeScene) {

};gdjs.GameSceneCode.eventsList35 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.GameSceneCode.GDPointObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDPointObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.copyArray(gdjs.GameSceneCode.GDZombie2Objects1, gdjs.GameSceneCode.GDZombie2Objects3);

gdjs.GameSceneCode.GDPointObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDPointObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDPointObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPointObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPointObjects3[i].getVariableNumber(gdjs.GameSceneCode.GDPointObjects3[i].getVariables().getFromIndex(0)) == ((gdjs.GameSceneCode.GDZombie2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameSceneCode.GDZombie2Objects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPointObjects3[k] = gdjs.GameSceneCode.GDPointObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPointObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].valuePush(gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(1), (( gdjs.GameSceneCode.GDPointObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPointObjects3[0].getPointX("")));
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].valuePush(gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(2), (( gdjs.GameSceneCode.GDPointObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPointObjects3[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects3[i].returnVariable(gdjs.GameSceneCode.GDZombie2Objects3[i].getVariables().getFromIndex(0)).add(1);
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameSceneCode.GDZombie2Objects1, gdjs.GameSceneCode.GDZombie2Objects2);

{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects2[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.GameSceneCode.GDZombie2Objects2[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombie2Objects2[i].getVariables().getFromIndex(2).getChild(0).getAsNumber(), runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), gdjs.evtTools.common.distanceBetweenPositions((gdjs.GameSceneCode.GDZombie2Objects2[i].getPointX("")), (gdjs.GameSceneCode.GDZombie2Objects2[i].getPointY("")), gdjs.GameSceneCode.GDZombie2Objects2[i].getVariables().getFromIndex(1).getChild(0).getAsNumber(), gdjs.GameSceneCode.GDZombie2Objects2[i].getVariables().getFromIndex(2).getChild(0).getAsNumber()) * 0.006, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(3), 0);
}
}

}


};gdjs.GameSceneCode.eventsList36 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameSceneCode.GDZombie2Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects1[i].returnVariable(gdjs.GameSceneCode.GDZombie2Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}

{ //Subevents
gdjs.GameSceneCode.eventsList35(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.userFunc0x1006260 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

};
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombie3Objects1Objects = Hashtable.newFrom({"Zombie3": gdjs.GameSceneCode.GDZombie3Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombie3Objects1Objects = Hashtable.newFrom({"Zombie3": gdjs.GameSceneCode.GDZombie3Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombie3Objects1Objects = Hashtable.newFrom({"Zombie3": gdjs.GameSceneCode.GDZombie3Objects1});
gdjs.GameSceneCode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator2"), gdjs.GameSceneCode.GDIndicator2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator3"), gdjs.GameSceneCode.GDIndicator3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator4"), gdjs.GameSceneCode.GDIndicator4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator5"), gdjs.GameSceneCode.GDIndicator5Objects1);
gdjs.copyArray(runtimeScene.getObjects("IndicatorBox"), gdjs.GameSceneCode.GDIndicatorBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("IndicatorDestroy"), gdjs.GameSceneCode.GDIndicatorDestroyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.GameSceneCode.GDPointObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDPointObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPointObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator2Objects1[i].getBehavior("Opacity").setOpacity(200);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator3Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator3Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator3Objects1[i].getBehavior("Opacity").setOpacity(200);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator4Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator4Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator4Objects1[i].getBehavior("Opacity").setOpacity(200);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator5Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator5Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator5Objects1[i].getBehavior("Opacity").setOpacity(200);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator2"), gdjs.GameSceneCode.GDIndicator2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator3"), gdjs.GameSceneCode.GDIndicator3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator4"), gdjs.GameSceneCode.GDIndicator4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator5"), gdjs.GameSceneCode.GDIndicator5Objects1);
gdjs.copyArray(runtimeScene.getObjects("IndicatorBox"), gdjs.GameSceneCode.GDIndicatorBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("IndicatorDestroy"), gdjs.GameSceneCode.GDIndicatorDestroyObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects, 96, 96, 96, -96, null);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator2Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects, 96, 96, 96, -96, null);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator3Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator3Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects, 96, 96, 96, -96, null);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator4Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator4Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects, 96, 96, 96, -96, null);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorDestroyObjects1Objects, 96, 96, 96, -96, null);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator5Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator5Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects, 96, 96, 96, -96, null);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorBoxObjects1Objects, 96, 96, 96, -96, null);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GoldText"), gdjs.GameSceneCode.GDGoldTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGoldTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoldTextObjects1[i].getBehavior("Text").setText("$ " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextWaveButton"), gdjs.GameSceneCode.GDNextWaveButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDNextWaveButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDNextWaveButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDNextWaveButtonObjects1[k] = gdjs.GameSceneCode.GDNextWaveButtonObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDNextWaveButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getAsNumber());
}
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(1), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawning");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawning") > gdjs.randomFloatInRange(1 / 2, 4 / 2);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.GameSceneCode.GDSpawnPointObjects1);
gdjs.GameSceneCode.GDZombieObjects1.length = 0;

gdjs.GameSceneCode.GDZombie2Objects1.length = 0;

gdjs.GameSceneCode.GDZombie3Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawning");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects1ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects1Objects, (( gdjs.GameSceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSpawnPointObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSpawnPointObjects1[0].getPointY("")), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).sub(1);
}

{ //Subevents
gdjs.GameSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextWaveButton2"), gdjs.GameSceneCode.GDNextWaveButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDNextWaveButton2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDNextWaveButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDNextWaveButton2Objects1[k] = gdjs.GameSceneCode.GDNextWaveButton2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDNextWaveButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getAsNumber());
}
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(1), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawning");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawning") > gdjs.randomFloatInRange(2 / 3, 4 / 2);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.GameSceneCode.GDSpawnPointObjects1);
gdjs.GameSceneCode.GDZombieObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawning");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects1Objects, (( gdjs.GameSceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSpawnPointObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSpawnPointObjects1[0].getPointY("")), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).sub(1);
}

{ //Subevents
gdjs.GameSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDZombieObjects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.GameSceneCode.GDZombieObjects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDZombieObjects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDZombieObjects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Tween").hasFinished("Move") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects2[k] = gdjs.GameSceneCode.GDZombieObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].variableRemoveAt(gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(1), 0);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].variableRemoveAt(gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(2), 0);
}
}

{ //Subevents: 
gdjs.GameSceneCode.eventsList7(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameSceneCode.GDBulletObjects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDBulletObjects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDBulletObjects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDBulletObjects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDBulletObjects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBulletObjects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBulletObjects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects2[k] = gdjs.GameSceneCode.GDZombieObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBulletObjects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBulletObjects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects2[k] = gdjs.GameSceneCode.GDZombie2Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie3Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie3Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBulletObjects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBulletObjects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie3Objects2[k] = gdjs.GameSceneCode.GDZombie3Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie3Objects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Health").Hit(3, true, true, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects2[i].getBehavior("Health").Hit(3, true, true, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie3Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie3Objects2[i].getBehavior("Health").Hit(3, true, true, null);
}
}

{ //Subevents: 
gdjs.GameSceneCode.eventsList8(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet2"), gdjs.GameSceneCode.GDBullet2Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDBullet2Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDBullet2Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDBullet2Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDBullet2Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet2Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet2Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet2Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet2Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects2[k] = gdjs.GameSceneCode.GDZombieObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet2Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet2Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet2Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet2Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects2[k] = gdjs.GameSceneCode.GDZombie2Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie3Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie3Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet2Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet2Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet2Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet2Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie3Objects2[k] = gdjs.GameSceneCode.GDZombie3Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie3Objects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDBullet2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet2Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Health").Hit(1, true, false, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects2[i].getBehavior("Health").Hit(1, true, false, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie3Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie3Objects2[i].getBehavior("Health").Hit(1, true, false, null);
}
}

{ //Subevents: 
gdjs.GameSceneCode.eventsList9(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet3"), gdjs.GameSceneCode.GDBullet3Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDBullet3Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDBullet3Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDBullet3Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDBullet3Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet3Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet3Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet3Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet3Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects2[k] = gdjs.GameSceneCode.GDZombieObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet3Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet3Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet3Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet3Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects2[k] = gdjs.GameSceneCode.GDZombie2Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie3Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie3Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet3Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet3Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet3Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet3Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie3Objects2[k] = gdjs.GameSceneCode.GDZombie3Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie3Objects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDBullet3Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet3Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Health").Hit(0, false, false, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects2[i].getBehavior("Health").Hit(0, false, false, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie3Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie3Objects2[i].getBehavior("Health").Hit(0, false, false, null);
}
}

{ //Subevents: 
gdjs.GameSceneCode.eventsList10(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet4"), gdjs.GameSceneCode.GDBullet4Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDBullet4Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDBullet4Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDBullet4Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDBullet4Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet4Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet4Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet4Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet4Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects2[k] = gdjs.GameSceneCode.GDZombieObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet4Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet4Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet4Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet4Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects2[k] = gdjs.GameSceneCode.GDZombie2Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie3Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie3Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet4Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet4Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet4Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet4Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie3Objects2[k] = gdjs.GameSceneCode.GDZombie3Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie3Objects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDBullet4Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet4Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Health").Hit(1.5, true, true, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects2[i].getBehavior("Health").Hit(1.5, true, true, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie3Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie3Objects2[i].getBehavior("Health").Hit(1.5, true, true, null);
}
}

{ //Subevents: 
gdjs.GameSceneCode.eventsList11(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet5"), gdjs.GameSceneCode.GDBullet5Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDBullet5Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDBullet5Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDBullet5Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDBullet5Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet5Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet5Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet5Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet5Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects2[k] = gdjs.GameSceneCode.GDZombieObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet5Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet5Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet5Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet5Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects2[k] = gdjs.GameSceneCode.GDZombie2Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie3Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie3Objects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBullet5Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet5Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBullet5Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBullet5Objects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie3Objects2[k] = gdjs.GameSceneCode.GDZombie3Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie3Objects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDBullet5Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet5Objects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Health").Hit(15, false, false, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects2[i].getBehavior("Health").Hit(15, false, false, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDZombie3Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie3Objects2[i].getBehavior("Health").Hit(15, false, false, null);
}
}

{ //Subevents: 
gdjs.GameSceneCode.eventsList12(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDTowerHead1Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDBulletObjects2.length = 0;

gdjs.GameSceneCode.GDTowerHead1Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDTowerHead1Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDTowerHead1Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects2Objects, 200, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead1Objects2[i].rotateTowardPosition((( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointY("")), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead1Objects2[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameSceneCode.GDTowerHead1Objects2[i].getPointX("BulletPoint")), (gdjs.GameSceneCode.GDTowerHead1Objects2[i].getPointY("BulletPoint")), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects2Objects, (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("ShotPoint")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointX("ShotPoint")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointX("ShotPoint")), (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("ShotPoint")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointY("ShotPoint")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointY("ShotPoint")), 500, null);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead2"), gdjs.GameSceneCode.GDTowerHead2Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDTowerHead2Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDBullet2Objects2.length = 0;

gdjs.GameSceneCode.GDTowerHead2Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDTowerHead2Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDTowerHead2Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects2Objects, 250, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead2Objects2[i].rotateTowardPosition((( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointY("")), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead2Objects2[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameSceneCode.GDTowerHead2Objects2[i].getPointX("BulletPoint")), (gdjs.GameSceneCode.GDTowerHead2Objects2[i].getPointY("BulletPoint")), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet2Objects2Objects, (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("ShotPoint")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointX("ShotPoint")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointX("ShotPoint")), (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("ShotPoint")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointY("ShotPoint")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointY("ShotPoint")), 500, null);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead3"), gdjs.GameSceneCode.GDTowerHead3Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDTowerHead3Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDBullet3Objects2.length = 0;

gdjs.GameSceneCode.GDTowerHead3Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDTowerHead3Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDTowerHead3Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects2Objects, 300, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead3Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead3Objects2[i].rotateTowardPosition((( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointY("")), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead3Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead3Objects2[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameSceneCode.GDTowerHead3Objects2[i].getPointX("BulletPoint")), (gdjs.GameSceneCode.GDTowerHead3Objects2[i].getPointY("BulletPoint")), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet3Objects2Objects, (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("ShotPoint")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointX("ShotPoint")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointX("ShotPoint")), (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("ShotPoint")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointY("ShotPoint")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointY("ShotPoint")), 1750, null);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead4"), gdjs.GameSceneCode.GDTowerHead4Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDTowerHead4Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDBullet4Objects2.length = 0;

gdjs.GameSceneCode.GDTowerHead4Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDTowerHead4Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDTowerHead4Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombieObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie2Objects2ObjectsGDgdjs_9546GameSceneCode_9546GDZombie3Objects2Objects, 225, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead4Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead4Objects2[i].rotateTowardPosition((( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointY("")), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead4Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead4Objects2[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameSceneCode.GDTowerHead4Objects2[i].getPointX("BulletPoint")), (gdjs.GameSceneCode.GDTowerHead4Objects2[i].getPointY("BulletPoint")), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet4Objects2Objects, (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("ShotPoint")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointX("ShotPoint")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointX("ShotPoint")), (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("ShotPoint")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointY("ShotPoint")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointY("ShotPoint")), 2000, null);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead5"), gdjs.GameSceneCode.GDTowerHead5Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDTowerHead5Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bullet5"), gdjs.GameSceneCode.GDBullet5Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects2);
gdjs.GameSceneCode.GDTowerHead5Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDTowerHead5Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDTowerHead5Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead5Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead5Objects2[i].rotateTowardPosition((( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointX("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointX("")), (( gdjs.GameSceneCode.GDZombie3Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombie2Objects2.length === 0 ) ? (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie2Objects2[0].getPointY("")) :gdjs.GameSceneCode.GDZombie3Objects2[0].getPointY("")), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDBullet5Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBullet5Objects2[i].getBehavior("Resizable").setSize(80, 80);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead5Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead5Objects2[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameSceneCode.GDTowerHead5Objects2[i].getPointX("BulletPoint")), (gdjs.GameSceneCode.GDTowerHead5Objects2[i].getPointY("BulletPoint")), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBullet5Objects2Objects, gdjs.random(1000), gdjs.random(720), 325, null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawningB");
}

{ //Subevents: 
gdjs.GameSceneCode.eventsList17(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IndicatorDestroy"), gdjs.GameSceneCode.GDIndicatorDestroyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorDestroyObjects1[k] = gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorDestroyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Range"), gdjs.GameSceneCode.GDRangeObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorDestroyObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorDestroyObjects1[0].getPointY("")), 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anti"), gdjs.GameSceneCode.GDAntiObjects1);
gdjs.copyArray(runtimeScene.getObjects("IndicatorDestroy"), gdjs.GameSceneCode.GDIndicatorDestroyObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextWaveButton"), gdjs.GameSceneCode.GDNextWaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap"), gdjs.GameSceneCode.GDTilemapObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorDestroyObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorDestroyObjects1[k] = gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorDestroyObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerHead1Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerHead1Objects1[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorDestroyObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorDestroyObjects1[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerHead1Objects1[k] = gdjs.GameSceneCode.GDTowerHead1Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerHead1Objects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IndicatorDestroy"), gdjs.GameSceneCode.GDIndicatorDestroyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorDestroyObjects1[k] = gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorDestroyObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 10);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Range"), gdjs.GameSceneCode.GDRangeObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointY("")), 200);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 10);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RangeNE"), gdjs.GameSceneCode.GDRangeNEObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeNEObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeNEObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointY("")), 200);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anti"), gdjs.GameSceneCode.GDAntiObjects1);
gdjs.copyArray(runtimeScene.getObjects("BoxOFF"), gdjs.GameSceneCode.GDBoxOFFObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextWaveButton"), gdjs.GameSceneCode.GDNextWaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap"), gdjs.GameSceneCode.GDTilemapObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead2"), gdjs.GameSceneCode.GDTowerHead2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead3"), gdjs.GameSceneCode.GDTowerHead3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead4"), gdjs.GameSceneCode.GDTowerHead4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead5"), gdjs.GameSceneCode.GDTowerHead5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects, true, runtimeScene, false);
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerZapret"), gdjs.GameSceneCode.GDTowerZapretObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator2"), gdjs.GameSceneCode.GDIndicator2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator2Objects1[k] = gdjs.GameSceneCode.GDIndicator2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 40);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Range"), gdjs.GameSceneCode.GDRangeObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicator2Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator2Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator2Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator2Objects1[0].getPointY("")), 250);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator2"), gdjs.GameSceneCode.GDIndicator2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator2Objects1[k] = gdjs.GameSceneCode.GDIndicator2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 40);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("RangeNE"), gdjs.GameSceneCode.GDRangeNEObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeNEObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeNEObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicator2Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator2Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator2Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator2Objects1[0].getPointY("")), 250);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anti"), gdjs.GameSceneCode.GDAntiObjects1);
gdjs.copyArray(runtimeScene.getObjects("BoxOFF"), gdjs.GameSceneCode.GDBoxOFFObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator2"), gdjs.GameSceneCode.GDIndicator2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextWaveButton"), gdjs.GameSceneCode.GDNextWaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap"), gdjs.GameSceneCode.GDTilemapObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead2"), gdjs.GameSceneCode.GDTowerHead2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead3"), gdjs.GameSceneCode.GDTowerHead3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead4"), gdjs.GameSceneCode.GDTowerHead4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead5"), gdjs.GameSceneCode.GDTowerHead5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator2Objects1[k] = gdjs.GameSceneCode.GDIndicator2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator2Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects, true, runtimeScene, false);
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator2"), gdjs.GameSceneCode.GDIndicator2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator2Objects1[k] = gdjs.GameSceneCode.GDIndicator2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator2Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator2"), gdjs.GameSceneCode.GDIndicator2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerZapret"), gdjs.GameSceneCode.GDTowerZapretObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator2Objects1[k] = gdjs.GameSceneCode.GDIndicator2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator2Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator3"), gdjs.GameSceneCode.GDIndicator3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator3Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator3Objects1[k] = gdjs.GameSceneCode.GDIndicator3Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 15);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Range"), gdjs.GameSceneCode.GDRangeObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicator3Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator3Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator3Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator3Objects1[0].getPointY("")), 300);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator3"), gdjs.GameSceneCode.GDIndicator3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator3Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator3Objects1[k] = gdjs.GameSceneCode.GDIndicator3Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 15);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("RangeNE"), gdjs.GameSceneCode.GDRangeNEObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeNEObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeNEObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicator3Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator3Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator3Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator3Objects1[0].getPointY("")), 300);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anti"), gdjs.GameSceneCode.GDAntiObjects1);
gdjs.copyArray(runtimeScene.getObjects("BoxOFF"), gdjs.GameSceneCode.GDBoxOFFObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator3"), gdjs.GameSceneCode.GDIndicator3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextWaveButton"), gdjs.GameSceneCode.GDNextWaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap"), gdjs.GameSceneCode.GDTilemapObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead2"), gdjs.GameSceneCode.GDTowerHead2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead3"), gdjs.GameSceneCode.GDTowerHead3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead4"), gdjs.GameSceneCode.GDTowerHead4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead5"), gdjs.GameSceneCode.GDTowerHead5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator3Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator3Objects1[k] = gdjs.GameSceneCode.GDIndicator3Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator3Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects, true, runtimeScene, false);
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator3"), gdjs.GameSceneCode.GDIndicator3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator3Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator3Objects1[k] = gdjs.GameSceneCode.GDIndicator3Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator3Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator3Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator3Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator3"), gdjs.GameSceneCode.GDIndicator3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerZapret"), gdjs.GameSceneCode.GDTowerZapretObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator3Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator3Objects1[k] = gdjs.GameSceneCode.GDIndicator3Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator3Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator3Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator3Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator4"), gdjs.GameSceneCode.GDIndicator4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator4Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator4Objects1[k] = gdjs.GameSceneCode.GDIndicator4Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 75);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Range"), gdjs.GameSceneCode.GDRangeObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicator4Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator4Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator4Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator4Objects1[0].getPointY("")), 225);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator4"), gdjs.GameSceneCode.GDIndicator4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator4Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator4Objects1[k] = gdjs.GameSceneCode.GDIndicator4Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 75);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("RangeNE"), gdjs.GameSceneCode.GDRangeNEObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeNEObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeNEObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicator4Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator4Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator4Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator4Objects1[0].getPointY("")), 225);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anti"), gdjs.GameSceneCode.GDAntiObjects1);
gdjs.copyArray(runtimeScene.getObjects("BoxOFF"), gdjs.GameSceneCode.GDBoxOFFObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator4"), gdjs.GameSceneCode.GDIndicator4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextWaveButton"), gdjs.GameSceneCode.GDNextWaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap"), gdjs.GameSceneCode.GDTilemapObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead2"), gdjs.GameSceneCode.GDTowerHead2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead3"), gdjs.GameSceneCode.GDTowerHead3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead4"), gdjs.GameSceneCode.GDTowerHead4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead5"), gdjs.GameSceneCode.GDTowerHead5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator4Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator4Objects1[k] = gdjs.GameSceneCode.GDIndicator4Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator4Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects, true, runtimeScene, false);
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList22(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator4"), gdjs.GameSceneCode.GDIndicator4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator4Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator4Objects1[k] = gdjs.GameSceneCode.GDIndicator4Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator4Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator4Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator4Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator4Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator4"), gdjs.GameSceneCode.GDIndicator4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerZapret"), gdjs.GameSceneCode.GDTowerZapretObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator4Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator4Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator4Objects1[k] = gdjs.GameSceneCode.GDIndicator4Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Indicator5"), gdjs.GameSceneCode.GDIndicator5Objects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator5Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator5Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator5"), gdjs.GameSceneCode.GDIndicator5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator5Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator5Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator5Objects1[k] = gdjs.GameSceneCode.GDIndicator5Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 10);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Range"), gdjs.GameSceneCode.GDRangeObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicator5Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator5Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator5Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator5Objects1[0].getPointY("")), 125);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator5"), gdjs.GameSceneCode.GDIndicator5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator5Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator5Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator5Objects1[k] = gdjs.GameSceneCode.GDIndicator5Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 10);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("RangeNE"), gdjs.GameSceneCode.GDRangeNEObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeNEObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeNEObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicator5Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator5Objects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicator5Objects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicator5Objects1[0].getPointY("")), 125);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anti"), gdjs.GameSceneCode.GDAntiObjects1);
gdjs.copyArray(runtimeScene.getObjects("BoxOFF"), gdjs.GameSceneCode.GDBoxOFFObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator5"), gdjs.GameSceneCode.GDIndicator5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextWaveButton"), gdjs.GameSceneCode.GDNextWaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap"), gdjs.GameSceneCode.GDTilemapObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead2"), gdjs.GameSceneCode.GDTowerHead2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead3"), gdjs.GameSceneCode.GDTowerHead3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead4"), gdjs.GameSceneCode.GDTowerHead4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead5"), gdjs.GameSceneCode.GDTowerHead5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator5Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator5Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator5Objects1[k] = gdjs.GameSceneCode.GDIndicator5Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBoxOFFObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicator5Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects, true, runtimeScene, false);
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator5"), gdjs.GameSceneCode.GDIndicator5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator5Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator5Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator5Objects1[k] = gdjs.GameSceneCode.GDIndicator5Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator5Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator5Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator5Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator5Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator5"), gdjs.GameSceneCode.GDIndicator5Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerZapret"), gdjs.GameSceneCode.GDTowerZapretObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator5Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicator5Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator5Objects1[k] = gdjs.GameSceneCode.GDIndicator5Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicator5Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicator5Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicator5Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IndicatorBox"), gdjs.GameSceneCode.GDIndicatorBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorBoxObjects1[k] = gdjs.GameSceneCode.GDIndicatorBoxObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorBoxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorBoxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Range"), gdjs.GameSceneCode.GDRangeObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicatorBoxObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorBoxObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorBoxObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorBoxObjects1[0].getPointY("")), 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anti"), gdjs.GameSceneCode.GDAntiObjects1);
gdjs.copyArray(runtimeScene.getObjects("IndicatorBox"), gdjs.GameSceneCode.GDIndicatorBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextWaveButton"), gdjs.GameSceneCode.GDNextWaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap"), gdjs.GameSceneCode.GDTilemapObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead2"), gdjs.GameSceneCode.GDTowerHead2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead3"), gdjs.GameSceneCode.GDTowerHead3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead4"), gdjs.GameSceneCode.GDTowerHead4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead5"), gdjs.GameSceneCode.GDTowerHead5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorBoxObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTilemapObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorBoxObjects1[k] = gdjs.GameSceneCode.GDIndicatorBoxObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorBoxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDNextWaveButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorBoxObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAntiObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorBoxObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerHead2Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead5Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead3Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead4Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDTowerHead1Objects1Objects, true, runtimeScene, false);
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList24(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IndicatorBox"), gdjs.GameSceneCode.GDIndicatorBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorBoxObjects1[k] = gdjs.GameSceneCode.GDIndicatorBoxObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorBoxObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorBoxObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IndicatorBox"), gdjs.GameSceneCode.GDIndicatorBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerZapret"), gdjs.GameSceneCode.GDTowerZapretObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorBoxObjects1[k] = gdjs.GameSceneCode.GDIndicatorBoxObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorBoxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTowerZapretObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorBoxObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IndicatorDestroy"), gdjs.GameSceneCode.GDIndicatorDestroyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorDestroyObjects1[k] = gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList25(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IndicatorBox"), gdjs.GameSceneCode.GDIndicatorBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorBoxObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDIndicatorBoxObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorBoxObjects1[k] = gdjs.GameSceneCode.GDIndicatorBoxObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorBoxObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList27(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator2"), gdjs.GameSceneCode.GDIndicator2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator2Objects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDIndicator2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator2Objects1[k] = gdjs.GameSceneCode.GDIndicator2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList28(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator3"), gdjs.GameSceneCode.GDIndicator3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator3Objects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDIndicator3Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator3Objects1[k] = gdjs.GameSceneCode.GDIndicator3Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator3Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList29(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator4"), gdjs.GameSceneCode.GDIndicator4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator4Objects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDIndicator4Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator4Objects1[k] = gdjs.GameSceneCode.GDIndicator4Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator4Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList30(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator5"), gdjs.GameSceneCode.GDIndicator5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicator5Objects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDIndicator5Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicator5Objects1[k] = gdjs.GameSceneCode.GDIndicator5Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicator5Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList31(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldMaker2"), gdjs.GameSceneCode.GDGoldMaker2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGoldMaker2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDGoldMaker2Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGoldMaker2Objects1[k] = gdjs.GameSceneCode.GDGoldMaker2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGoldMaker2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(500);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HeartMaker2"), gdjs.GameSceneCode.GDHeartMaker2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDHeartMaker2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDHeartMaker2Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDHeartMaker2Objects1[k] = gdjs.GameSceneCode.GDHeartMaker2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDHeartMaker2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.GameSceneCode.GDFlatHeartBarObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.GameSceneCode.GDFlatHeartBarObjects1[i].Value(null) + (1), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie2"), gdjs.GameSceneCode.GDZombie2Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDZombie2Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.GameSceneCode.GDZombie2Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDZombie2Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDZombie2Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombie2Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombie2Objects2[i].getBehavior("Tween").hasFinished("Move") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombie2Objects2[k] = gdjs.GameSceneCode.GDZombie2Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombie2Objects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects2[i].variableRemoveAt(gdjs.GameSceneCode.GDZombie2Objects2[i].getVariables().getFromIndex(1), 0);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZombie2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombie2Objects2[i].variableRemoveAt(gdjs.GameSceneCode.GDZombie2Objects2[i].getVariables().getFromIndex(2), 0);
}
}

{ //Subevents: 
gdjs.GameSceneCode.eventsList33(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextWaveButton2"), gdjs.GameSceneCode.GDNextWaveButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDNextWaveButton2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDNextWaveButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDNextWaveButton2Objects1[k] = gdjs.GameSceneCode.GDNextWaveButton2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDNextWaveButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(4).getChild(0).getAsNumber());
}
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(4), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawning2");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawning2") > 0.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild(0).getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.GameSceneCode.GDSpawnPointObjects1);
gdjs.GameSceneCode.GDZombie2Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawning2");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombie2Objects1Objects, (( gdjs.GameSceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSpawnPointObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSpawnPointObjects1[0].getPointY("")), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild(0).sub(1);
}

{ //Subevents
gdjs.GameSceneCode.eventsList36(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartMaker2"), gdjs.GameSceneCode.GDStartMaker2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDStartMaker2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDStartMaker2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDStartMaker2Objects1[k] = gdjs.GameSceneCode.GDStartMaker2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDStartMaker2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZombieMaker2"), gdjs.GameSceneCode.GDZombieMaker2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieMaker2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieMaker2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieMaker2Objects1[k] = gdjs.GameSceneCode.GDZombieMaker2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieMaker2Objects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerHead1Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerHead1Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerHead1Objects1[k] = gdjs.GameSceneCode.GDTowerHead1Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerHead1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 25);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTowerHead1Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead1Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead1Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead2"), gdjs.GameSceneCode.GDTowerHead2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerHead2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerHead2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerHead2Objects1[k] = gdjs.GameSceneCode.GDTowerHead2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerHead2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 25);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTowerHead2Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead2Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead3"), gdjs.GameSceneCode.GDTowerHead3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerHead3Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerHead3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerHead3Objects1[k] = gdjs.GameSceneCode.GDTowerHead3Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerHead3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 25);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTowerHead3Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead3Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead3Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead4"), gdjs.GameSceneCode.GDTowerHead4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerHead4Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerHead4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerHead4Objects1[k] = gdjs.GameSceneCode.GDTowerHead4Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerHead4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 25);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTowerHead4Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead4Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead4Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead5"), gdjs.GameSceneCode.GDTowerHead5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTowerHead5Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTowerHead5Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTowerHead5Objects1[k] = gdjs.GameSceneCode.GDTowerHead5Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTowerHead5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 25);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTowerHead5Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead5Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead5Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BoxOFF"), gdjs.GameSceneCode.GDBoxOFFObjects1);
gdjs.copyArray(runtimeScene.getObjects("IndicatorDestroy"), gdjs.GameSceneCode.GDIndicatorDestroyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBoxOFFObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBoxOFFObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDBoxOFFObjects1[k] = gdjs.GameSceneCode.GDBoxOFFObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBoxOFFObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorDestroyObjects1[k] = gdjs.GameSceneCode.GDIndicatorDestroyObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBoxOFFObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDBoxOFFObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBoxOFFObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IndicatorDestroy"), gdjs.GameSceneCode.GDIndicatorDestroyObjects1);

const objects = gdjs.GameSceneCode.GDIndicatorDestroyObjects1;
gdjs.GameSceneCode.userFunc0x1006260(runtimeScene, objects);

}


{

gdjs.copyArray(runtimeScene.getObjects("ZombieMaker2"), gdjs.GameSceneCode.GDZombieMaker2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieMaker2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieMaker2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieMaker2Objects1[k] = gdjs.GameSceneCode.GDZombieMaker2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieMaker2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Zombie3"), gdjs.GameSceneCode.GDZombie3Objects1);
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombie3Objects1Objects, 96, 96, 96, -96, null);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombie3Objects1Objects, 585, 385, "");
}
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZombie3Objects1Objects, 96, 96, 96, -96, null);
}
}

}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDIndicatorObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects3.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects4.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects1.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects2.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects3.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects4.length = 0;
gdjs.GameSceneCode.GDBulletObjects1.length = 0;
gdjs.GameSceneCode.GDBulletObjects2.length = 0;
gdjs.GameSceneCode.GDBulletObjects3.length = 0;
gdjs.GameSceneCode.GDBulletObjects4.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects1.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects2.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects3.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects4.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects1.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects2.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects3.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects4.length = 0;
gdjs.GameSceneCode.GDZombieObjects1.length = 0;
gdjs.GameSceneCode.GDZombieObjects2.length = 0;
gdjs.GameSceneCode.GDZombieObjects3.length = 0;
gdjs.GameSceneCode.GDZombieObjects4.length = 0;
gdjs.GameSceneCode.GDPointObjects1.length = 0;
gdjs.GameSceneCode.GDPointObjects2.length = 0;
gdjs.GameSceneCode.GDPointObjects3.length = 0;
gdjs.GameSceneCode.GDPointObjects4.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects1.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects2.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects3.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects4.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects1.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects2.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects3.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects4.length = 0;
gdjs.GameSceneCode.GDRangeObjects1.length = 0;
gdjs.GameSceneCode.GDRangeObjects2.length = 0;
gdjs.GameSceneCode.GDRangeObjects3.length = 0;
gdjs.GameSceneCode.GDRangeObjects4.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameSceneCode.GDTilemapObjects1.length = 0;
gdjs.GameSceneCode.GDTilemapObjects2.length = 0;
gdjs.GameSceneCode.GDTilemapObjects3.length = 0;
gdjs.GameSceneCode.GDTilemapObjects4.length = 0;
gdjs.GameSceneCode.GDTowerButton1Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton1Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton1Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton1Objects4.length = 0;
gdjs.GameSceneCode.GDZombie2Objects1.length = 0;
gdjs.GameSceneCode.GDZombie2Objects2.length = 0;
gdjs.GameSceneCode.GDZombie2Objects3.length = 0;
gdjs.GameSceneCode.GDZombie2Objects4.length = 0;
gdjs.GameSceneCode.GDTowerButton2Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton2Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton2Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton2Objects4.length = 0;
gdjs.GameSceneCode.GDIndicator2Objects1.length = 0;
gdjs.GameSceneCode.GDIndicator2Objects2.length = 0;
gdjs.GameSceneCode.GDIndicator2Objects3.length = 0;
gdjs.GameSceneCode.GDIndicator2Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects4.length = 0;
gdjs.GameSceneCode.GDBullet2Objects1.length = 0;
gdjs.GameSceneCode.GDBullet2Objects2.length = 0;
gdjs.GameSceneCode.GDBullet2Objects3.length = 0;
gdjs.GameSceneCode.GDBullet2Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead3Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead3Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead3Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead3Objects4.length = 0;
gdjs.GameSceneCode.GDBullet3Objects1.length = 0;
gdjs.GameSceneCode.GDBullet3Objects2.length = 0;
gdjs.GameSceneCode.GDBullet3Objects3.length = 0;
gdjs.GameSceneCode.GDBullet3Objects4.length = 0;
gdjs.GameSceneCode.GDTowerButton3Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton3Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton3Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton3Objects4.length = 0;
gdjs.GameSceneCode.GDIndicator3Objects1.length = 0;
gdjs.GameSceneCode.GDIndicator3Objects2.length = 0;
gdjs.GameSceneCode.GDIndicator3Objects3.length = 0;
gdjs.GameSceneCode.GDIndicator3Objects4.length = 0;
gdjs.GameSceneCode.GDGoldMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDGoldMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDGoldMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDGoldMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDInterFaceUpObjects1.length = 0;
gdjs.GameSceneCode.GDInterFaceUpObjects2.length = 0;
gdjs.GameSceneCode.GDInterFaceUpObjects3.length = 0;
gdjs.GameSceneCode.GDInterFaceUpObjects4.length = 0;
gdjs.GameSceneCode.GDHeartMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDHeartMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDHeartMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDHeartMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDZombieMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDZombieMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDZombieMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDZombieMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDStartMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDStartMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDStartMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDStartMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDTowerButton4Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton4Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton4Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton4Objects4.length = 0;
gdjs.GameSceneCode.GDIndicator4Objects1.length = 0;
gdjs.GameSceneCode.GDIndicator4Objects2.length = 0;
gdjs.GameSceneCode.GDIndicator4Objects3.length = 0;
gdjs.GameSceneCode.GDIndicator4Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead4Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead4Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead4Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead4Objects4.length = 0;
gdjs.GameSceneCode.GDBullet4Objects1.length = 0;
gdjs.GameSceneCode.GDBullet4Objects2.length = 0;
gdjs.GameSceneCode.GDBullet4Objects3.length = 0;
gdjs.GameSceneCode.GDBullet4Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects4.length = 0;
gdjs.GameSceneCode.GDTowerZapretObjects1.length = 0;
gdjs.GameSceneCode.GDTowerZapretObjects2.length = 0;
gdjs.GameSceneCode.GDTowerZapretObjects3.length = 0;
gdjs.GameSceneCode.GDTowerZapretObjects4.length = 0;
gdjs.GameSceneCode.GDAntiObjects1.length = 0;
gdjs.GameSceneCode.GDAntiObjects2.length = 0;
gdjs.GameSceneCode.GDAntiObjects3.length = 0;
gdjs.GameSceneCode.GDAntiObjects4.length = 0;
gdjs.GameSceneCode.GDDestroyMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDDestroyMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDDestroyMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDDestroyMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorDestroyObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorDestroyObjects3.length = 0;
gdjs.GameSceneCode.GDIndicatorDestroyObjects4.length = 0;
gdjs.GameSceneCode.GDTowerButton5Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton5Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton5Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton5Objects4.length = 0;
gdjs.GameSceneCode.GDInterFaceRightObjects1.length = 0;
gdjs.GameSceneCode.GDInterFaceRightObjects2.length = 0;
gdjs.GameSceneCode.GDInterFaceRightObjects3.length = 0;
gdjs.GameSceneCode.GDInterFaceRightObjects4.length = 0;
gdjs.GameSceneCode.GDNextWaveButton2Objects1.length = 0;
gdjs.GameSceneCode.GDNextWaveButton2Objects2.length = 0;
gdjs.GameSceneCode.GDNextWaveButton2Objects3.length = 0;
gdjs.GameSceneCode.GDNextWaveButton2Objects4.length = 0;
gdjs.GameSceneCode.GDRangeNEObjects1.length = 0;
gdjs.GameSceneCode.GDRangeNEObjects2.length = 0;
gdjs.GameSceneCode.GDRangeNEObjects3.length = 0;
gdjs.GameSceneCode.GDRangeNEObjects4.length = 0;
gdjs.GameSceneCode.GDZombie3Objects1.length = 0;
gdjs.GameSceneCode.GDZombie3Objects2.length = 0;
gdjs.GameSceneCode.GDZombie3Objects3.length = 0;
gdjs.GameSceneCode.GDZombie3Objects4.length = 0;
gdjs.GameSceneCode.GDNextWaveButton3Objects1.length = 0;
gdjs.GameSceneCode.GDNextWaveButton3Objects2.length = 0;
gdjs.GameSceneCode.GDNextWaveButton3Objects3.length = 0;
gdjs.GameSceneCode.GDNextWaveButton3Objects4.length = 0;
gdjs.GameSceneCode.GDNextWaveButton4Objects1.length = 0;
gdjs.GameSceneCode.GDNextWaveButton4Objects2.length = 0;
gdjs.GameSceneCode.GDNextWaveButton4Objects3.length = 0;
gdjs.GameSceneCode.GDNextWaveButton4Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead5Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead5Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead5Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead5Objects4.length = 0;
gdjs.GameSceneCode.GDIndicator5Objects1.length = 0;
gdjs.GameSceneCode.GDIndicator5Objects2.length = 0;
gdjs.GameSceneCode.GDIndicator5Objects3.length = 0;
gdjs.GameSceneCode.GDIndicator5Objects4.length = 0;
gdjs.GameSceneCode.GDBullet5Objects1.length = 0;
gdjs.GameSceneCode.GDBullet5Objects2.length = 0;
gdjs.GameSceneCode.GDBullet5Objects3.length = 0;
gdjs.GameSceneCode.GDBullet5Objects4.length = 0;
gdjs.GameSceneCode.GDBoxOFFObjects1.length = 0;
gdjs.GameSceneCode.GDBoxOFFObjects2.length = 0;
gdjs.GameSceneCode.GDBoxOFFObjects3.length = 0;
gdjs.GameSceneCode.GDBoxOFFObjects4.length = 0;
gdjs.GameSceneCode.GDBoxMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDBoxMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDBoxMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDBoxMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDIndicatorBoxObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorBoxObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorBoxObjects3.length = 0;
gdjs.GameSceneCode.GDIndicatorBoxObjects4.length = 0;

gdjs.GameSceneCode.eventsList37(runtimeScene);
gdjs.GameSceneCode.GDIndicatorObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects3.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects4.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects1.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects2.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects3.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects4.length = 0;
gdjs.GameSceneCode.GDBulletObjects1.length = 0;
gdjs.GameSceneCode.GDBulletObjects2.length = 0;
gdjs.GameSceneCode.GDBulletObjects3.length = 0;
gdjs.GameSceneCode.GDBulletObjects4.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects1.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects2.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects3.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects4.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects1.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects2.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects3.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects4.length = 0;
gdjs.GameSceneCode.GDZombieObjects1.length = 0;
gdjs.GameSceneCode.GDZombieObjects2.length = 0;
gdjs.GameSceneCode.GDZombieObjects3.length = 0;
gdjs.GameSceneCode.GDZombieObjects4.length = 0;
gdjs.GameSceneCode.GDPointObjects1.length = 0;
gdjs.GameSceneCode.GDPointObjects2.length = 0;
gdjs.GameSceneCode.GDPointObjects3.length = 0;
gdjs.GameSceneCode.GDPointObjects4.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects1.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects2.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects3.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects4.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects1.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects2.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects3.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects4.length = 0;
gdjs.GameSceneCode.GDRangeObjects1.length = 0;
gdjs.GameSceneCode.GDRangeObjects2.length = 0;
gdjs.GameSceneCode.GDRangeObjects3.length = 0;
gdjs.GameSceneCode.GDRangeObjects4.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameSceneCode.GDTilemapObjects1.length = 0;
gdjs.GameSceneCode.GDTilemapObjects2.length = 0;
gdjs.GameSceneCode.GDTilemapObjects3.length = 0;
gdjs.GameSceneCode.GDTilemapObjects4.length = 0;
gdjs.GameSceneCode.GDTowerButton1Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton1Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton1Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton1Objects4.length = 0;
gdjs.GameSceneCode.GDZombie2Objects1.length = 0;
gdjs.GameSceneCode.GDZombie2Objects2.length = 0;
gdjs.GameSceneCode.GDZombie2Objects3.length = 0;
gdjs.GameSceneCode.GDZombie2Objects4.length = 0;
gdjs.GameSceneCode.GDTowerButton2Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton2Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton2Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton2Objects4.length = 0;
gdjs.GameSceneCode.GDIndicator2Objects1.length = 0;
gdjs.GameSceneCode.GDIndicator2Objects2.length = 0;
gdjs.GameSceneCode.GDIndicator2Objects3.length = 0;
gdjs.GameSceneCode.GDIndicator2Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects4.length = 0;
gdjs.GameSceneCode.GDBullet2Objects1.length = 0;
gdjs.GameSceneCode.GDBullet2Objects2.length = 0;
gdjs.GameSceneCode.GDBullet2Objects3.length = 0;
gdjs.GameSceneCode.GDBullet2Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead3Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead3Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead3Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead3Objects4.length = 0;
gdjs.GameSceneCode.GDBullet3Objects1.length = 0;
gdjs.GameSceneCode.GDBullet3Objects2.length = 0;
gdjs.GameSceneCode.GDBullet3Objects3.length = 0;
gdjs.GameSceneCode.GDBullet3Objects4.length = 0;
gdjs.GameSceneCode.GDTowerButton3Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton3Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton3Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton3Objects4.length = 0;
gdjs.GameSceneCode.GDIndicator3Objects1.length = 0;
gdjs.GameSceneCode.GDIndicator3Objects2.length = 0;
gdjs.GameSceneCode.GDIndicator3Objects3.length = 0;
gdjs.GameSceneCode.GDIndicator3Objects4.length = 0;
gdjs.GameSceneCode.GDGoldMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDGoldMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDGoldMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDGoldMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDInterFaceUpObjects1.length = 0;
gdjs.GameSceneCode.GDInterFaceUpObjects2.length = 0;
gdjs.GameSceneCode.GDInterFaceUpObjects3.length = 0;
gdjs.GameSceneCode.GDInterFaceUpObjects4.length = 0;
gdjs.GameSceneCode.GDHeartMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDHeartMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDHeartMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDHeartMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDZombieMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDZombieMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDZombieMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDZombieMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDStartMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDStartMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDStartMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDStartMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDTowerButton4Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton4Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton4Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton4Objects4.length = 0;
gdjs.GameSceneCode.GDIndicator4Objects1.length = 0;
gdjs.GameSceneCode.GDIndicator4Objects2.length = 0;
gdjs.GameSceneCode.GDIndicator4Objects3.length = 0;
gdjs.GameSceneCode.GDIndicator4Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead4Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead4Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead4Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead4Objects4.length = 0;
gdjs.GameSceneCode.GDBullet4Objects1.length = 0;
gdjs.GameSceneCode.GDBullet4Objects2.length = 0;
gdjs.GameSceneCode.GDBullet4Objects3.length = 0;
gdjs.GameSceneCode.GDBullet4Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects4.length = 0;
gdjs.GameSceneCode.GDTowerZapretObjects1.length = 0;
gdjs.GameSceneCode.GDTowerZapretObjects2.length = 0;
gdjs.GameSceneCode.GDTowerZapretObjects3.length = 0;
gdjs.GameSceneCode.GDTowerZapretObjects4.length = 0;
gdjs.GameSceneCode.GDAntiObjects1.length = 0;
gdjs.GameSceneCode.GDAntiObjects2.length = 0;
gdjs.GameSceneCode.GDAntiObjects3.length = 0;
gdjs.GameSceneCode.GDAntiObjects4.length = 0;
gdjs.GameSceneCode.GDDestroyMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDDestroyMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDDestroyMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDDestroyMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDIndicatorDestroyObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorDestroyObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorDestroyObjects3.length = 0;
gdjs.GameSceneCode.GDIndicatorDestroyObjects4.length = 0;
gdjs.GameSceneCode.GDTowerButton5Objects1.length = 0;
gdjs.GameSceneCode.GDTowerButton5Objects2.length = 0;
gdjs.GameSceneCode.GDTowerButton5Objects3.length = 0;
gdjs.GameSceneCode.GDTowerButton5Objects4.length = 0;
gdjs.GameSceneCode.GDInterFaceRightObjects1.length = 0;
gdjs.GameSceneCode.GDInterFaceRightObjects2.length = 0;
gdjs.GameSceneCode.GDInterFaceRightObjects3.length = 0;
gdjs.GameSceneCode.GDInterFaceRightObjects4.length = 0;
gdjs.GameSceneCode.GDNextWaveButton2Objects1.length = 0;
gdjs.GameSceneCode.GDNextWaveButton2Objects2.length = 0;
gdjs.GameSceneCode.GDNextWaveButton2Objects3.length = 0;
gdjs.GameSceneCode.GDNextWaveButton2Objects4.length = 0;
gdjs.GameSceneCode.GDRangeNEObjects1.length = 0;
gdjs.GameSceneCode.GDRangeNEObjects2.length = 0;
gdjs.GameSceneCode.GDRangeNEObjects3.length = 0;
gdjs.GameSceneCode.GDRangeNEObjects4.length = 0;
gdjs.GameSceneCode.GDZombie3Objects1.length = 0;
gdjs.GameSceneCode.GDZombie3Objects2.length = 0;
gdjs.GameSceneCode.GDZombie3Objects3.length = 0;
gdjs.GameSceneCode.GDZombie3Objects4.length = 0;
gdjs.GameSceneCode.GDNextWaveButton3Objects1.length = 0;
gdjs.GameSceneCode.GDNextWaveButton3Objects2.length = 0;
gdjs.GameSceneCode.GDNextWaveButton3Objects3.length = 0;
gdjs.GameSceneCode.GDNextWaveButton3Objects4.length = 0;
gdjs.GameSceneCode.GDNextWaveButton4Objects1.length = 0;
gdjs.GameSceneCode.GDNextWaveButton4Objects2.length = 0;
gdjs.GameSceneCode.GDNextWaveButton4Objects3.length = 0;
gdjs.GameSceneCode.GDNextWaveButton4Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead5Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead5Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead5Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead5Objects4.length = 0;
gdjs.GameSceneCode.GDIndicator5Objects1.length = 0;
gdjs.GameSceneCode.GDIndicator5Objects2.length = 0;
gdjs.GameSceneCode.GDIndicator5Objects3.length = 0;
gdjs.GameSceneCode.GDIndicator5Objects4.length = 0;
gdjs.GameSceneCode.GDBullet5Objects1.length = 0;
gdjs.GameSceneCode.GDBullet5Objects2.length = 0;
gdjs.GameSceneCode.GDBullet5Objects3.length = 0;
gdjs.GameSceneCode.GDBullet5Objects4.length = 0;
gdjs.GameSceneCode.GDBoxOFFObjects1.length = 0;
gdjs.GameSceneCode.GDBoxOFFObjects2.length = 0;
gdjs.GameSceneCode.GDBoxOFFObjects3.length = 0;
gdjs.GameSceneCode.GDBoxOFFObjects4.length = 0;
gdjs.GameSceneCode.GDBoxMaker2Objects1.length = 0;
gdjs.GameSceneCode.GDBoxMaker2Objects2.length = 0;
gdjs.GameSceneCode.GDBoxMaker2Objects3.length = 0;
gdjs.GameSceneCode.GDBoxMaker2Objects4.length = 0;
gdjs.GameSceneCode.GDIndicatorBoxObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorBoxObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorBoxObjects3.length = 0;
gdjs.GameSceneCode.GDIndicatorBoxObjects4.length = 0;


return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;

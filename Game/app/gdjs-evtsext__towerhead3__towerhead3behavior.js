
gdjs.evtsExt__TowerHead3__TowerHead3Behavior = gdjs.evtsExt__TowerHead3__TowerHead3Behavior || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior = class TowerHead3Behavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.FireBullet = behaviorData.FireBullet !== undefined ? behaviorData.FireBullet : "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.FireBullet !== undefined)
      this._behaviorData.FireBullet = behaviorOverriding.FireBullet;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    FireBullet: this._behaviorData.FireBullet,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.FireBullet !== undefined)
      this._behaviorData.FireBullet = networkSyncData.props.FireBullet;
  }

  // Properties:
  
  _getFireBullet() {
    return this._behaviorData.FireBullet !== undefined ? this._behaviorData.FireBullet : "";
  }
  _setFireBullet(newValue) {
    this._behaviorData.FireBullet = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.SharedData = class TowerHead3BehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TowerHead3_TowerHead3BehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TowerHead3_TowerHead3BehaviorSharedData = new gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.SharedData(
      initialData
    );
  }
  return instanceContainer._TowerHead3_TowerHead3BehaviorSharedData;
}

// Methods:
gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "FireBullet": this._getFireBullet()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TowerHead3"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TowerHead3"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("TowerHead3::TowerHead3Behavior", gdjs.evtsExt__TowerHead3__TowerHead3Behavior.TowerHead3Behavior);

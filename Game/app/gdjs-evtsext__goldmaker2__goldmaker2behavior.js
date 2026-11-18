
gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior = gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior = class GoldMaker2Behavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ButtonFSM = behaviorData.ButtonFSM !== undefined ? behaviorData.ButtonFSM : "";
    this._behaviorData.ButtonObjectEffects = behaviorData.ButtonObjectEffects !== undefined ? behaviorData.ButtonObjectEffects : "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.ButtonFSM !== undefined)
      this._behaviorData.ButtonFSM = behaviorOverriding.ButtonFSM;
    if (behaviorOverriding.ButtonObjectEffects !== undefined)
      this._behaviorData.ButtonObjectEffects = behaviorOverriding.ButtonObjectEffects;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    ButtonFSM: this._behaviorData.ButtonFSM,
    ButtonObjectEffects: this._behaviorData.ButtonObjectEffects,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.ButtonFSM !== undefined)
      this._behaviorData.ButtonFSM = networkSyncData.props.ButtonFSM;
    if (networkSyncData.props.ButtonObjectEffects !== undefined)
      this._behaviorData.ButtonObjectEffects = networkSyncData.props.ButtonObjectEffects;
  }

  // Properties:
  
  _getButtonFSM() {
    return this._behaviorData.ButtonFSM !== undefined ? this._behaviorData.ButtonFSM : "";
  }
  _setButtonFSM(newValue) {
    this._behaviorData.ButtonFSM = newValue;
  }
  _getButtonObjectEffects() {
    return this._behaviorData.ButtonObjectEffects !== undefined ? this._behaviorData.ButtonObjectEffects : "";
  }
  _setButtonObjectEffects(newValue) {
    this._behaviorData.ButtonObjectEffects = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior.SharedData = class GoldMaker2BehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._GoldMaker2_GoldMaker2BehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._GoldMaker2_GoldMaker2BehaviorSharedData = new gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior.SharedData(
      initialData
    );
  }
  return instanceContainer._GoldMaker2_GoldMaker2BehaviorSharedData;
}

// Methods:
gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior.prototype.doStepPreEventsContext.idToCallbackMap = new Map();


gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "ButtonFSM": this._getButtonFSM()
, "ButtonObjectEffects": this._getButtonObjectEffects()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GoldMaker2"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GoldMaker2"),
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


gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);


return;
}


gdjs.registerBehavior("GoldMaker2::GoldMaker2Behavior", gdjs.evtsExt__GoldMaker2__GoldMaker2Behavior.GoldMaker2Behavior);

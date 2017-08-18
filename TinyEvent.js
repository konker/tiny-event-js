'use strict';


/**
 * [TODO: comments]
 */
class TinyEvent {
  constructor(eventType, eventData) {
    this._eventType = eventType;
    this._eventData = eventData;
  }

  /**
   * [TODO: comments]
   */
  get eventType() {
    return this._eventType;
  }

  /**
   * [TODO: comments]
   */
  get eventData() {
    return this._eventData;
  }
}

module.exports = TinyEvent;

'use strict';


const TinyEvent = require('./TinyEvent');


/**
 * [TODO: comments]
 */
class SimpleTinyEventDispatcher {
  constructor() {
    this._listeners = {};
    this._starListeners = [];
  }

  /**
   * [TODO: comments]
   */
  addListener(eventType, listener) {
    if (!(eventType in this._listeners)) {
      this._listeners[eventType] = [];
    }
    this._listeners[eventType].push(listener);
  }

  /**
   * [TODO: comments]
   */
  addStarListener(listener) {
    if (this._starListeners.indexOf(listener) === -1) {
      this._starListeners.push(listener);
    }
  }

  /**
   * [TODO: comments]
   */
  removeListener(eventType, listener) {
    if (eventType in this._listeners) {
      this._listeners[eventType] =
        this._listeners[eventType].filter(i => i !== listener);
    }
  }

  /**
   * [TODO: comments]
   */
  removeStarListener(listener) {
    this._starListeners =
      this._starListeners.filter(i => i !== listener);
  }

  /**
   * [TODO: comments]
   */
  removeAllListeners(eventType) {
    if (eventType in this._listeners) {
      this._listeners[eventType] = [];
    }
  }

  /**
   * [TODO: comments]
   */
  removeAllStarListeners() {
    this._starListeners[eventType] = [];
  }

  /**
   * [TODO: comments]
   */
  notifyEvent(event) {
    if (!(event instanceof TinyEvent)) {
      throw new TypeError('Expected TinyEvent object')
    }

    // First notify event-specific listeners, if any
    if (event.eventType in this._listeners) {
      const listeners =
        this._listeners[event.eventType];

      for (const listener of listeners) {
        listener(event);
      }
    }

    // Then notify "star" listeners
    for (const listener of this._starListeners) {
      listener(event);
    }
  }

  /**
   * [TODO: comments]
   */
  notify(eventType, eventData) {
    // console.log('notify: ', eventType.toString(), eventData);
    const event = new TinyEvent(eventType, eventData);
    this.notifyEvent(event);
  }
}


module.exports = SimpleTinyEventDispatcher;


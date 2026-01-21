/**
 * Polyfills for React Native
 * These must be imported before any other code runs
 */

// Random values (required for crypto operations)
import 'react-native-get-random-values';

// URL polyfill
import 'react-native-url-polyfill/auto';

// Buffer global
import { Buffer } from '@craftzdog/react-native-buffer';
global.Buffer = Buffer;

// Process global
import process from 'process';
global.process = process;

// Stream polyfills
import 'stream-browserify';
import 'events';

// Crypto polyfill
import crypto from 'react-native-crypto';
global.crypto = crypto;

// TextEncoder/TextDecoder (using faster library)
if (typeof global.TextEncoder === 'undefined') {
  try {
    const encoding = require('text-encoding');
    global.TextEncoder = encoding.TextEncoder;
    global.TextDecoder = encoding.TextDecoder;
  } catch (e) {
    console.warn('text-encoding not available, TextEncoder/TextDecoder may not work');
  }
}

// Add global error handler for better debugging
// This helps catch unhandled promise rejections
if (typeof global.ErrorUtils !== 'undefined') {
  const originalHandler = global.ErrorUtils.getGlobalHandler();
  global.ErrorUtils.setGlobalHandler((error, isFatal) => {
    // Log the error for debugging
    console.error('Global error caught:', error);

    // Call original handler
    if (originalHandler) {
      originalHandler(error, isFatal);
    }
  });
}

// Handle unhandled promise rejections
global.Promise = Promise;
const originalRejectionHandler = global.Promise.prototype.catch;
global.Promise.prototype.catch = function(onRejected) {
  if (!onRejected) {
    console.warn('Promise rejection without handler detected');
  }
  return originalRejectionHandler.call(this, onRejected);
};

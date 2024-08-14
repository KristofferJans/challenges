// Implement the launch sequence function here and export it as the default export.

import { NFSAT } from "./payload/satellites.js";
import { FISHSAT } from "./payload/satellites.js";

import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

// Step 1 - create export default launch function
export default function launch() {
  // Step 2 - load both Payload
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  // Step 3 - load fuel
  fuel();

  // Step 4 - start countdown
  for (let i = 0; i < 5; i++) {
    countdown();
  }

  // Step 5 - liftoff
  liftoff();

  // Step 6 - deploy payload
  deployPayload();
}

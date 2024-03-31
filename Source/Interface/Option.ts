/**
 * @module Option
 *
 */
export default interface Type extends Option {
	Critters?: boolean | Critters;
}

import type Critters from "../Interface/Critters.js";

import type Option from "@playform/file-pipe/Target/Interface/Option.js";

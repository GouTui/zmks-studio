import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zmk.lighting";
export interface HsbColor {
    /** Hue: 0-359 */
    h: number;
    /** Saturation: 0-100 */
    s: number;
    /** Brightness: 0-100 */
    b: number;
}
export interface RgbUnderglowState {
    on: boolean;
    color: HsbColor | undefined;
    effect: number;
    speed: number;
    effectCount: number;
    effectNames: string[];
}
export interface SetRgbUnderglowStateRequest {
    on?: boolean | undefined;
    color?: HsbColor | undefined;
    effect?: number | undefined;
    speed?: number | undefined;
}
export interface BacklightState {
    on: boolean;
    brightness: number;
}
export interface SetBacklightStateRequest {
    on?: boolean | undefined;
    brightness?: number | undefined;
}
export interface LayerLedBinding {
    keyPosition: number;
    /** 0xRRGGBB, 0 = transparent */
    color: number;
}
export interface LayerLedConfig {
    layerId: number;
    bindings: LayerLedBinding[];
}
export interface GetLayerLedColorsResponse {
    layers: LayerLedConfig[];
    keyCount: number;
    layerCount: number;
    enabled: boolean;
}
export interface SetLayerLedBindingRequest {
    layerId: number;
    keyPosition: number;
    /** 0xRRGGBB, 0 = transparent */
    color: number;
}
export interface CapsLockIndicatorState {
    enabled: boolean;
    /** 0xRRGGBB */
    offColor: number;
    /** 0xRRGGBB */
    onColor: number;
    keyPosition: number;
    layerId: number;
}
export interface SetCapsLockIndicatorRequest {
    enabled?: boolean | undefined;
    offColor?: number | undefined;
    onColor?: number | undefined;
    keyPosition?: number | undefined;
    layerId?: number | undefined;
}
export interface ConnectionIndicatorState {
    enabled: boolean;
    /** 0xRRGGBB */
    usbColor: number;
    /** 0xRRGGBB */
    btColor: number;
    keyPosition: number;
    layerId: number;
}
export interface SetConnectionIndicatorRequest {
    enabled?: boolean | undefined;
    usbColor?: number | undefined;
    btColor?: number | undefined;
    keyPosition?: number | undefined;
    layerId?: number | undefined;
}
export interface SetLayerLedEnabledRequest {
    enabled: boolean;
}
export interface LowBatteryIndicatorState {
    enabled: boolean;
    /** 0xRRGGBB */
    color: number;
    keyPosition: number;
    periodMs: number;
    thresholdPct: number;
    flashDurationMs: number;
}
export interface SetLowBatteryIndicatorRequest {
    enabled?: boolean | undefined;
    keyPosition?: number | undefined;
    periodMs?: number | undefined;
}
export interface Request {
    getRgbUnderglowState?: boolean | undefined;
    setRgbUnderglowState?: SetRgbUnderglowStateRequest | undefined;
    getBacklightState?: boolean | undefined;
    setBacklightState?: SetBacklightStateRequest | undefined;
    saveState?: boolean | undefined;
    getLayerLedColors?: boolean | undefined;
    setLayerLedBinding?: SetLayerLedBindingRequest | undefined;
    getCapsLockIndicator?: boolean | undefined;
    setCapsLockIndicator?: SetCapsLockIndicatorRequest | undefined;
    saveLayerLedState?: boolean | undefined;
    setLayerLedEnabled?: SetLayerLedEnabledRequest | undefined;
    getConnectionIndicator?: boolean | undefined;
    setConnectionIndicator?: SetConnectionIndicatorRequest | undefined;
    getLowBatteryIndicator?: boolean | undefined;
    setLowBatteryIndicator?: SetLowBatteryIndicatorRequest | undefined;
}
export interface Response {
    getRgbUnderglowState?: RgbUnderglowState | undefined;
    setRgbUnderglowState?: boolean | undefined;
    getBacklightState?: BacklightState | undefined;
    setBacklightState?: boolean | undefined;
    saveState?: boolean | undefined;
    getLayerLedColors?: GetLayerLedColorsResponse | undefined;
    setLayerLedBinding?: boolean | undefined;
    getCapsLockIndicator?: CapsLockIndicatorState | undefined;
    setCapsLockIndicator?: boolean | undefined;
    saveLayerLedState?: boolean | undefined;
    setLayerLedEnabled?: boolean | undefined;
    getConnectionIndicator?: ConnectionIndicatorState | undefined;
    setConnectionIndicator?: boolean | undefined;
    getLowBatteryIndicator?: LowBatteryIndicatorState | undefined;
    setLowBatteryIndicator?: boolean | undefined;
}
export interface Notification {
    rgbUnderglowStateChanged?: RgbUnderglowState | undefined;
    backlightStateChanged?: BacklightState | undefined;
}
export declare const HsbColor: {
    encode(message: HsbColor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HsbColor;
    fromJSON(object: any): HsbColor;
    toJSON(message: HsbColor): unknown;
    create<I extends {
        h?: number | undefined;
        s?: number | undefined;
        b?: number | undefined;
    } & {
        h?: number | undefined;
        s?: number | undefined;
        b?: number | undefined;
    } & { [K in Exclude<keyof I, keyof HsbColor>]: never; }>(base?: I | undefined): HsbColor;
    fromPartial<I_1 extends {
        h?: number | undefined;
        s?: number | undefined;
        b?: number | undefined;
    } & {
        h?: number | undefined;
        s?: number | undefined;
        b?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof HsbColor>]: never; }>(object: I_1): HsbColor;
};
export declare const RgbUnderglowState: {
    encode(message: RgbUnderglowState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RgbUnderglowState;
    fromJSON(object: any): RgbUnderglowState;
    toJSON(message: RgbUnderglowState): unknown;
    create<I extends {
        on?: boolean | undefined;
        color?: {
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } | undefined;
        effect?: number | undefined;
        speed?: number | undefined;
        effectCount?: number | undefined;
        effectNames?: string[] | undefined;
    } & {
        on?: boolean | undefined;
        color?: ({
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } & {
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } & { [K in Exclude<keyof I["color"], keyof HsbColor>]: never; }) | undefined;
        effect?: number | undefined;
        speed?: number | undefined;
        effectCount?: number | undefined;
        effectNames?: (string[] & string[] & { [K_1 in Exclude<keyof I["effectNames"], keyof string[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof RgbUnderglowState>]: never; }>(base?: I | undefined): RgbUnderglowState;
    fromPartial<I_1 extends {
        on?: boolean | undefined;
        color?: {
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } | undefined;
        effect?: number | undefined;
        speed?: number | undefined;
        effectCount?: number | undefined;
        effectNames?: string[] | undefined;
    } & {
        on?: boolean | undefined;
        color?: ({
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } & {
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["color"], keyof HsbColor>]: never; }) | undefined;
        effect?: number | undefined;
        speed?: number | undefined;
        effectCount?: number | undefined;
        effectNames?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["effectNames"], keyof string[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof RgbUnderglowState>]: never; }>(object: I_1): RgbUnderglowState;
};
export declare const SetRgbUnderglowStateRequest: {
    encode(message: SetRgbUnderglowStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetRgbUnderglowStateRequest;
    fromJSON(object: any): SetRgbUnderglowStateRequest;
    toJSON(message: SetRgbUnderglowStateRequest): unknown;
    create<I extends {
        on?: boolean | undefined;
        color?: {
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } | undefined;
        effect?: number | undefined;
        speed?: number | undefined;
    } & {
        on?: boolean | undefined;
        color?: ({
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } & {
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } & { [K in Exclude<keyof I["color"], keyof HsbColor>]: never; }) | undefined;
        effect?: number | undefined;
        speed?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SetRgbUnderglowStateRequest>]: never; }>(base?: I | undefined): SetRgbUnderglowStateRequest;
    fromPartial<I_1 extends {
        on?: boolean | undefined;
        color?: {
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } | undefined;
        effect?: number | undefined;
        speed?: number | undefined;
    } & {
        on?: boolean | undefined;
        color?: ({
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } & {
            h?: number | undefined;
            s?: number | undefined;
            b?: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["color"], keyof HsbColor>]: never; }) | undefined;
        effect?: number | undefined;
        speed?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SetRgbUnderglowStateRequest>]: never; }>(object: I_1): SetRgbUnderglowStateRequest;
};
export declare const BacklightState: {
    encode(message: BacklightState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BacklightState;
    fromJSON(object: any): BacklightState;
    toJSON(message: BacklightState): unknown;
    create<I extends {
        on?: boolean | undefined;
        brightness?: number | undefined;
    } & {
        on?: boolean | undefined;
        brightness?: number | undefined;
    } & { [K in Exclude<keyof I, keyof BacklightState>]: never; }>(base?: I | undefined): BacklightState;
    fromPartial<I_1 extends {
        on?: boolean | undefined;
        brightness?: number | undefined;
    } & {
        on?: boolean | undefined;
        brightness?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BacklightState>]: never; }>(object: I_1): BacklightState;
};
export declare const SetBacklightStateRequest: {
    encode(message: SetBacklightStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetBacklightStateRequest;
    fromJSON(object: any): SetBacklightStateRequest;
    toJSON(message: SetBacklightStateRequest): unknown;
    create<I extends {
        on?: boolean | undefined;
        brightness?: number | undefined;
    } & {
        on?: boolean | undefined;
        brightness?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SetBacklightStateRequest>]: never; }>(base?: I | undefined): SetBacklightStateRequest;
    fromPartial<I_1 extends {
        on?: boolean | undefined;
        brightness?: number | undefined;
    } & {
        on?: boolean | undefined;
        brightness?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetBacklightStateRequest>]: never; }>(object: I_1): SetBacklightStateRequest;
};
export declare const LayerLedBinding: {
    encode(message: LayerLedBinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LayerLedBinding;
    fromJSON(object: any): LayerLedBinding;
    toJSON(message: LayerLedBinding): unknown;
    create<I extends {
        keyPosition?: number | undefined;
        color?: number | undefined;
    } & {
        keyPosition?: number | undefined;
        color?: number | undefined;
    } & { [K in Exclude<keyof I, keyof LayerLedBinding>]: never; }>(base?: I | undefined): LayerLedBinding;
    fromPartial<I_1 extends {
        keyPosition?: number | undefined;
        color?: number | undefined;
    } & {
        keyPosition?: number | undefined;
        color?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LayerLedBinding>]: never; }>(object: I_1): LayerLedBinding;
};
export declare const LayerLedConfig: {
    encode(message: LayerLedConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LayerLedConfig;
    fromJSON(object: any): LayerLedConfig;
    toJSON(message: LayerLedConfig): unknown;
    create<I extends {
        layerId?: number | undefined;
        bindings?: {
            keyPosition?: number | undefined;
            color?: number | undefined;
        }[] | undefined;
    } & {
        layerId?: number | undefined;
        bindings?: ({
            keyPosition?: number | undefined;
            color?: number | undefined;
        }[] & ({
            keyPosition?: number | undefined;
            color?: number | undefined;
        } & {
            keyPosition?: number | undefined;
            color?: number | undefined;
        } & { [K in Exclude<keyof I["bindings"][number], keyof LayerLedBinding>]: never; })[] & { [K_1 in Exclude<keyof I["bindings"], keyof {
            keyPosition?: number | undefined;
            color?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof LayerLedConfig>]: never; }>(base?: I | undefined): LayerLedConfig;
    fromPartial<I_1 extends {
        layerId?: number | undefined;
        bindings?: {
            keyPosition?: number | undefined;
            color?: number | undefined;
        }[] | undefined;
    } & {
        layerId?: number | undefined;
        bindings?: ({
            keyPosition?: number | undefined;
            color?: number | undefined;
        }[] & ({
            keyPosition?: number | undefined;
            color?: number | undefined;
        } & {
            keyPosition?: number | undefined;
            color?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["bindings"][number], keyof LayerLedBinding>]: never; })[] & { [K_4 in Exclude<keyof I_1["bindings"], keyof {
            keyPosition?: number | undefined;
            color?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof LayerLedConfig>]: never; }>(object: I_1): LayerLedConfig;
};
export declare const GetLayerLedColorsResponse: {
    encode(message: GetLayerLedColorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLayerLedColorsResponse;
    fromJSON(object: any): GetLayerLedColorsResponse;
    toJSON(message: GetLayerLedColorsResponse): unknown;
    create<I extends {
        layers?: {
            layerId?: number | undefined;
            bindings?: {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        keyCount?: number | undefined;
        layerCount?: number | undefined;
        enabled?: boolean | undefined;
    } & {
        layers?: ({
            layerId?: number | undefined;
            bindings?: {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] | undefined;
        }[] & ({
            layerId?: number | undefined;
            bindings?: {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] | undefined;
        } & {
            layerId?: number | undefined;
            bindings?: ({
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] & ({
                keyPosition?: number | undefined;
                color?: number | undefined;
            } & {
                keyPosition?: number | undefined;
                color?: number | undefined;
            } & { [K in Exclude<keyof I["layers"][number]["bindings"][number], keyof LayerLedBinding>]: never; })[] & { [K_1 in Exclude<keyof I["layers"][number]["bindings"], keyof {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["layers"][number], keyof LayerLedConfig>]: never; })[] & { [K_3 in Exclude<keyof I["layers"], keyof {
            layerId?: number | undefined;
            bindings?: {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        keyCount?: number | undefined;
        layerCount?: number | undefined;
        enabled?: boolean | undefined;
    } & { [K_4 in Exclude<keyof I, keyof GetLayerLedColorsResponse>]: never; }>(base?: I | undefined): GetLayerLedColorsResponse;
    fromPartial<I_1 extends {
        layers?: {
            layerId?: number | undefined;
            bindings?: {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        keyCount?: number | undefined;
        layerCount?: number | undefined;
        enabled?: boolean | undefined;
    } & {
        layers?: ({
            layerId?: number | undefined;
            bindings?: {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] | undefined;
        }[] & ({
            layerId?: number | undefined;
            bindings?: {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] | undefined;
        } & {
            layerId?: number | undefined;
            bindings?: ({
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] & ({
                keyPosition?: number | undefined;
                color?: number | undefined;
            } & {
                keyPosition?: number | undefined;
                color?: number | undefined;
            } & { [K_5 in Exclude<keyof I_1["layers"][number]["bindings"][number], keyof LayerLedBinding>]: never; })[] & { [K_6 in Exclude<keyof I_1["layers"][number]["bindings"], keyof {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["layers"][number], keyof LayerLedConfig>]: never; })[] & { [K_8 in Exclude<keyof I_1["layers"], keyof {
            layerId?: number | undefined;
            bindings?: {
                keyPosition?: number | undefined;
                color?: number | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        keyCount?: number | undefined;
        layerCount?: number | undefined;
        enabled?: boolean | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof GetLayerLedColorsResponse>]: never; }>(object: I_1): GetLayerLedColorsResponse;
};
export declare const SetLayerLedBindingRequest: {
    encode(message: SetLayerLedBindingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetLayerLedBindingRequest;
    fromJSON(object: any): SetLayerLedBindingRequest;
    toJSON(message: SetLayerLedBindingRequest): unknown;
    create<I extends {
        layerId?: number | undefined;
        keyPosition?: number | undefined;
        color?: number | undefined;
    } & {
        layerId?: number | undefined;
        keyPosition?: number | undefined;
        color?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SetLayerLedBindingRequest>]: never; }>(base?: I | undefined): SetLayerLedBindingRequest;
    fromPartial<I_1 extends {
        layerId?: number | undefined;
        keyPosition?: number | undefined;
        color?: number | undefined;
    } & {
        layerId?: number | undefined;
        keyPosition?: number | undefined;
        color?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetLayerLedBindingRequest>]: never; }>(object: I_1): SetLayerLedBindingRequest;
};
export declare const CapsLockIndicatorState: {
    encode(message: CapsLockIndicatorState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CapsLockIndicatorState;
    fromJSON(object: any): CapsLockIndicatorState;
    toJSON(message: CapsLockIndicatorState): unknown;
    create<I extends {
        enabled?: boolean | undefined;
        offColor?: number | undefined;
        onColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        offColor?: number | undefined;
        onColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & { [K in Exclude<keyof I, keyof CapsLockIndicatorState>]: never; }>(base?: I | undefined): CapsLockIndicatorState;
    fromPartial<I_1 extends {
        enabled?: boolean | undefined;
        offColor?: number | undefined;
        onColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        offColor?: number | undefined;
        onColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CapsLockIndicatorState>]: never; }>(object: I_1): CapsLockIndicatorState;
};
export declare const SetCapsLockIndicatorRequest: {
    encode(message: SetCapsLockIndicatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetCapsLockIndicatorRequest;
    fromJSON(object: any): SetCapsLockIndicatorRequest;
    toJSON(message: SetCapsLockIndicatorRequest): unknown;
    create<I extends {
        enabled?: boolean | undefined;
        offColor?: number | undefined;
        onColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        offColor?: number | undefined;
        onColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SetCapsLockIndicatorRequest>]: never; }>(base?: I | undefined): SetCapsLockIndicatorRequest;
    fromPartial<I_1 extends {
        enabled?: boolean | undefined;
        offColor?: number | undefined;
        onColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        offColor?: number | undefined;
        onColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetCapsLockIndicatorRequest>]: never; }>(object: I_1): SetCapsLockIndicatorRequest;
};
export declare const ConnectionIndicatorState: {
    encode(message: ConnectionIndicatorState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionIndicatorState;
    fromJSON(object: any): ConnectionIndicatorState;
    toJSON(message: ConnectionIndicatorState): unknown;
    create<I extends {
        enabled?: boolean | undefined;
        usbColor?: number | undefined;
        btColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        usbColor?: number | undefined;
        btColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & { [K in Exclude<keyof I, keyof ConnectionIndicatorState>]: never; }>(base?: I | undefined): ConnectionIndicatorState;
    fromPartial<I_1 extends {
        enabled?: boolean | undefined;
        usbColor?: number | undefined;
        btColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        usbColor?: number | undefined;
        btColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ConnectionIndicatorState>]: never; }>(object: I_1): ConnectionIndicatorState;
};
export declare const SetConnectionIndicatorRequest: {
    encode(message: SetConnectionIndicatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetConnectionIndicatorRequest;
    fromJSON(object: any): SetConnectionIndicatorRequest;
    toJSON(message: SetConnectionIndicatorRequest): unknown;
    create<I extends {
        enabled?: boolean | undefined;
        usbColor?: number | undefined;
        btColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        usbColor?: number | undefined;
        btColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SetConnectionIndicatorRequest>]: never; }>(base?: I | undefined): SetConnectionIndicatorRequest;
    fromPartial<I_1 extends {
        enabled?: boolean | undefined;
        usbColor?: number | undefined;
        btColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        usbColor?: number | undefined;
        btColor?: number | undefined;
        keyPosition?: number | undefined;
        layerId?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetConnectionIndicatorRequest>]: never; }>(object: I_1): SetConnectionIndicatorRequest;
};
export declare const SetLayerLedEnabledRequest: {
    encode(message: SetLayerLedEnabledRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetLayerLedEnabledRequest;
    fromJSON(object: any): SetLayerLedEnabledRequest;
    toJSON(message: SetLayerLedEnabledRequest): unknown;
    create<I extends {
        enabled?: boolean | undefined;
    } & {
        enabled?: boolean | undefined;
    } & { [K in Exclude<keyof I, "enabled">]: never; }>(base?: I | undefined): SetLayerLedEnabledRequest;
    fromPartial<I_1 extends {
        enabled?: boolean | undefined;
    } & {
        enabled?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, "enabled">]: never; }>(object: I_1): SetLayerLedEnabledRequest;
};
export declare const LowBatteryIndicatorState: {
    encode(message: LowBatteryIndicatorState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LowBatteryIndicatorState;
    fromJSON(object: any): LowBatteryIndicatorState;
    toJSON(message: LowBatteryIndicatorState): unknown;
    create<I extends {
        enabled?: boolean | undefined;
        color?: number | undefined;
        keyPosition?: number | undefined;
        periodMs?: number | undefined;
        thresholdPct?: number | undefined;
        flashDurationMs?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        color?: number | undefined;
        keyPosition?: number | undefined;
        periodMs?: number | undefined;
        thresholdPct?: number | undefined;
        flashDurationMs?: number | undefined;
    } & { [K in Exclude<keyof I, keyof LowBatteryIndicatorState>]: never; }>(base?: I | undefined): LowBatteryIndicatorState;
    fromPartial<I_1 extends {
        enabled?: boolean | undefined;
        color?: number | undefined;
        keyPosition?: number | undefined;
        periodMs?: number | undefined;
        thresholdPct?: number | undefined;
        flashDurationMs?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        color?: number | undefined;
        keyPosition?: number | undefined;
        periodMs?: number | undefined;
        thresholdPct?: number | undefined;
        flashDurationMs?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LowBatteryIndicatorState>]: never; }>(object: I_1): LowBatteryIndicatorState;
};
export declare const SetLowBatteryIndicatorRequest: {
    encode(message: SetLowBatteryIndicatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetLowBatteryIndicatorRequest;
    fromJSON(object: any): SetLowBatteryIndicatorRequest;
    toJSON(message: SetLowBatteryIndicatorRequest): unknown;
    create<I extends {
        enabled?: boolean | undefined;
        keyPosition?: number | undefined;
        periodMs?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        keyPosition?: number | undefined;
        periodMs?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SetLowBatteryIndicatorRequest>]: never; }>(base?: I | undefined): SetLowBatteryIndicatorRequest;
    fromPartial<I_1 extends {
        enabled?: boolean | undefined;
        keyPosition?: number | undefined;
        periodMs?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        keyPosition?: number | undefined;
        periodMs?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetLowBatteryIndicatorRequest>]: never; }>(object: I_1): SetLowBatteryIndicatorRequest;
};
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends {
        getRgbUnderglowState?: boolean | undefined;
        setRgbUnderglowState?: {
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
        } | undefined;
        getBacklightState?: boolean | undefined;
        setBacklightState?: {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } | undefined;
        saveState?: boolean | undefined;
        getLayerLedColors?: boolean | undefined;
        setLayerLedBinding?: {
            layerId?: number | undefined;
            keyPosition?: number | undefined;
            color?: number | undefined;
        } | undefined;
        getCapsLockIndicator?: boolean | undefined;
        setCapsLockIndicator?: {
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } | undefined;
        saveLayerLedState?: boolean | undefined;
        setLayerLedEnabled?: {
            enabled?: boolean | undefined;
        } | undefined;
        getConnectionIndicator?: boolean | undefined;
        setConnectionIndicator?: {
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } | undefined;
        getLowBatteryIndicator?: boolean | undefined;
        setLowBatteryIndicator?: {
            enabled?: boolean | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
        } | undefined;
    } & {
        getRgbUnderglowState?: boolean | undefined;
        setRgbUnderglowState?: ({
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
        } & {
            on?: boolean | undefined;
            color?: ({
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & { [K in Exclude<keyof I["setRgbUnderglowState"]["color"], keyof HsbColor>]: never; }) | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
        } & { [K_1 in Exclude<keyof I["setRgbUnderglowState"], keyof SetRgbUnderglowStateRequest>]: never; }) | undefined;
        getBacklightState?: boolean | undefined;
        setBacklightState?: ({
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & { [K_2 in Exclude<keyof I["setBacklightState"], keyof SetBacklightStateRequest>]: never; }) | undefined;
        saveState?: boolean | undefined;
        getLayerLedColors?: boolean | undefined;
        setLayerLedBinding?: ({
            layerId?: number | undefined;
            keyPosition?: number | undefined;
            color?: number | undefined;
        } & {
            layerId?: number | undefined;
            keyPosition?: number | undefined;
            color?: number | undefined;
        } & { [K_3 in Exclude<keyof I["setLayerLedBinding"], keyof SetLayerLedBindingRequest>]: never; }) | undefined;
        getCapsLockIndicator?: boolean | undefined;
        setCapsLockIndicator?: ({
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & { [K_4 in Exclude<keyof I["setCapsLockIndicator"], keyof SetCapsLockIndicatorRequest>]: never; }) | undefined;
        saveLayerLedState?: boolean | undefined;
        setLayerLedEnabled?: ({
            enabled?: boolean | undefined;
        } & {
            enabled?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I["setLayerLedEnabled"], "enabled">]: never; }) | undefined;
        getConnectionIndicator?: boolean | undefined;
        setConnectionIndicator?: ({
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & { [K_6 in Exclude<keyof I["setConnectionIndicator"], keyof SetConnectionIndicatorRequest>]: never; }) | undefined;
        getLowBatteryIndicator?: boolean | undefined;
        setLowBatteryIndicator?: ({
            enabled?: boolean | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
        } & { [K_7 in Exclude<keyof I["setLowBatteryIndicator"], keyof SetLowBatteryIndicatorRequest>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
    fromPartial<I_1 extends {
        getRgbUnderglowState?: boolean | undefined;
        setRgbUnderglowState?: {
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
        } | undefined;
        getBacklightState?: boolean | undefined;
        setBacklightState?: {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } | undefined;
        saveState?: boolean | undefined;
        getLayerLedColors?: boolean | undefined;
        setLayerLedBinding?: {
            layerId?: number | undefined;
            keyPosition?: number | undefined;
            color?: number | undefined;
        } | undefined;
        getCapsLockIndicator?: boolean | undefined;
        setCapsLockIndicator?: {
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } | undefined;
        saveLayerLedState?: boolean | undefined;
        setLayerLedEnabled?: {
            enabled?: boolean | undefined;
        } | undefined;
        getConnectionIndicator?: boolean | undefined;
        setConnectionIndicator?: {
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } | undefined;
        getLowBatteryIndicator?: boolean | undefined;
        setLowBatteryIndicator?: {
            enabled?: boolean | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
        } | undefined;
    } & {
        getRgbUnderglowState?: boolean | undefined;
        setRgbUnderglowState?: ({
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
        } & {
            on?: boolean | undefined;
            color?: ({
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & { [K_9 in Exclude<keyof I_1["setRgbUnderglowState"]["color"], keyof HsbColor>]: never; }) | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
        } & { [K_10 in Exclude<keyof I_1["setRgbUnderglowState"], keyof SetRgbUnderglowStateRequest>]: never; }) | undefined;
        getBacklightState?: boolean | undefined;
        setBacklightState?: ({
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & { [K_11 in Exclude<keyof I_1["setBacklightState"], keyof SetBacklightStateRequest>]: never; }) | undefined;
        saveState?: boolean | undefined;
        getLayerLedColors?: boolean | undefined;
        setLayerLedBinding?: ({
            layerId?: number | undefined;
            keyPosition?: number | undefined;
            color?: number | undefined;
        } & {
            layerId?: number | undefined;
            keyPosition?: number | undefined;
            color?: number | undefined;
        } & { [K_12 in Exclude<keyof I_1["setLayerLedBinding"], keyof SetLayerLedBindingRequest>]: never; }) | undefined;
        getCapsLockIndicator?: boolean | undefined;
        setCapsLockIndicator?: ({
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & { [K_13 in Exclude<keyof I_1["setCapsLockIndicator"], keyof SetCapsLockIndicatorRequest>]: never; }) | undefined;
        saveLayerLedState?: boolean | undefined;
        setLayerLedEnabled?: ({
            enabled?: boolean | undefined;
        } & {
            enabled?: boolean | undefined;
        } & { [K_14 in Exclude<keyof I_1["setLayerLedEnabled"], "enabled">]: never; }) | undefined;
        getConnectionIndicator?: boolean | undefined;
        setConnectionIndicator?: ({
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & { [K_15 in Exclude<keyof I_1["setConnectionIndicator"], keyof SetConnectionIndicatorRequest>]: never; }) | undefined;
        getLowBatteryIndicator?: boolean | undefined;
        setLowBatteryIndicator?: ({
            enabled?: boolean | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
        } & { [K_16 in Exclude<keyof I_1["setLowBatteryIndicator"], keyof SetLowBatteryIndicatorRequest>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends {
        getRgbUnderglowState?: {
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: string[] | undefined;
        } | undefined;
        setRgbUnderglowState?: boolean | undefined;
        getBacklightState?: {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } | undefined;
        setBacklightState?: boolean | undefined;
        saveState?: boolean | undefined;
        getLayerLedColors?: {
            layers?: {
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            keyCount?: number | undefined;
            layerCount?: number | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        setLayerLedBinding?: boolean | undefined;
        getCapsLockIndicator?: {
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } | undefined;
        setCapsLockIndicator?: boolean | undefined;
        saveLayerLedState?: boolean | undefined;
        setLayerLedEnabled?: boolean | undefined;
        getConnectionIndicator?: {
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } | undefined;
        setConnectionIndicator?: boolean | undefined;
        getLowBatteryIndicator?: {
            enabled?: boolean | undefined;
            color?: number | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
            thresholdPct?: number | undefined;
            flashDurationMs?: number | undefined;
        } | undefined;
        setLowBatteryIndicator?: boolean | undefined;
    } & {
        getRgbUnderglowState?: ({
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: string[] | undefined;
        } & {
            on?: boolean | undefined;
            color?: ({
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & { [K in Exclude<keyof I["getRgbUnderglowState"]["color"], keyof HsbColor>]: never; }) | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: (string[] & string[] & { [K_1 in Exclude<keyof I["getRgbUnderglowState"]["effectNames"], keyof string[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["getRgbUnderglowState"], keyof RgbUnderglowState>]: never; }) | undefined;
        setRgbUnderglowState?: boolean | undefined;
        getBacklightState?: ({
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & { [K_3 in Exclude<keyof I["getBacklightState"], keyof BacklightState>]: never; }) | undefined;
        setBacklightState?: boolean | undefined;
        saveState?: boolean | undefined;
        getLayerLedColors?: ({
            layers?: {
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            keyCount?: number | undefined;
            layerCount?: number | undefined;
            enabled?: boolean | undefined;
        } & {
            layers?: ({
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            }[] & ({
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            } & {
                layerId?: number | undefined;
                bindings?: ({
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] & ({
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                } & {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                } & { [K_4 in Exclude<keyof I["getLayerLedColors"]["layers"][number]["bindings"][number], keyof LayerLedBinding>]: never; })[] & { [K_5 in Exclude<keyof I["getLayerLedColors"]["layers"][number]["bindings"], keyof {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["getLayerLedColors"]["layers"][number], keyof LayerLedConfig>]: never; })[] & { [K_7 in Exclude<keyof I["getLayerLedColors"]["layers"], keyof {
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            keyCount?: number | undefined;
            layerCount?: number | undefined;
            enabled?: boolean | undefined;
        } & { [K_8 in Exclude<keyof I["getLayerLedColors"], keyof GetLayerLedColorsResponse>]: never; }) | undefined;
        setLayerLedBinding?: boolean | undefined;
        getCapsLockIndicator?: ({
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & { [K_9 in Exclude<keyof I["getCapsLockIndicator"], keyof CapsLockIndicatorState>]: never; }) | undefined;
        setCapsLockIndicator?: boolean | undefined;
        saveLayerLedState?: boolean | undefined;
        setLayerLedEnabled?: boolean | undefined;
        getConnectionIndicator?: ({
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & { [K_10 in Exclude<keyof I["getConnectionIndicator"], keyof ConnectionIndicatorState>]: never; }) | undefined;
        setConnectionIndicator?: boolean | undefined;
        getLowBatteryIndicator?: ({
            enabled?: boolean | undefined;
            color?: number | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
            thresholdPct?: number | undefined;
            flashDurationMs?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            color?: number | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
            thresholdPct?: number | undefined;
            flashDurationMs?: number | undefined;
        } & { [K_11 in Exclude<keyof I["getLowBatteryIndicator"], keyof LowBatteryIndicatorState>]: never; }) | undefined;
        setLowBatteryIndicator?: boolean | undefined;
    } & { [K_12 in Exclude<keyof I, keyof Response>]: never; }>(base?: I | undefined): Response;
    fromPartial<I_1 extends {
        getRgbUnderglowState?: {
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: string[] | undefined;
        } | undefined;
        setRgbUnderglowState?: boolean | undefined;
        getBacklightState?: {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } | undefined;
        setBacklightState?: boolean | undefined;
        saveState?: boolean | undefined;
        getLayerLedColors?: {
            layers?: {
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            keyCount?: number | undefined;
            layerCount?: number | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        setLayerLedBinding?: boolean | undefined;
        getCapsLockIndicator?: {
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } | undefined;
        setCapsLockIndicator?: boolean | undefined;
        saveLayerLedState?: boolean | undefined;
        setLayerLedEnabled?: boolean | undefined;
        getConnectionIndicator?: {
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } | undefined;
        setConnectionIndicator?: boolean | undefined;
        getLowBatteryIndicator?: {
            enabled?: boolean | undefined;
            color?: number | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
            thresholdPct?: number | undefined;
            flashDurationMs?: number | undefined;
        } | undefined;
        setLowBatteryIndicator?: boolean | undefined;
    } & {
        getRgbUnderglowState?: ({
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: string[] | undefined;
        } & {
            on?: boolean | undefined;
            color?: ({
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & { [K_13 in Exclude<keyof I_1["getRgbUnderglowState"]["color"], keyof HsbColor>]: never; }) | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: (string[] & string[] & { [K_14 in Exclude<keyof I_1["getRgbUnderglowState"]["effectNames"], keyof string[]>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I_1["getRgbUnderglowState"], keyof RgbUnderglowState>]: never; }) | undefined;
        setRgbUnderglowState?: boolean | undefined;
        getBacklightState?: ({
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & { [K_16 in Exclude<keyof I_1["getBacklightState"], keyof BacklightState>]: never; }) | undefined;
        setBacklightState?: boolean | undefined;
        saveState?: boolean | undefined;
        getLayerLedColors?: ({
            layers?: {
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            keyCount?: number | undefined;
            layerCount?: number | undefined;
            enabled?: boolean | undefined;
        } & {
            layers?: ({
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            }[] & ({
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            } & {
                layerId?: number | undefined;
                bindings?: ({
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] & ({
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                } & {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                } & { [K_17 in Exclude<keyof I_1["getLayerLedColors"]["layers"][number]["bindings"][number], keyof LayerLedBinding>]: never; })[] & { [K_18 in Exclude<keyof I_1["getLayerLedColors"]["layers"][number]["bindings"], keyof {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I_1["getLayerLedColors"]["layers"][number], keyof LayerLedConfig>]: never; })[] & { [K_20 in Exclude<keyof I_1["getLayerLedColors"]["layers"], keyof {
                layerId?: number | undefined;
                bindings?: {
                    keyPosition?: number | undefined;
                    color?: number | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            keyCount?: number | undefined;
            layerCount?: number | undefined;
            enabled?: boolean | undefined;
        } & { [K_21 in Exclude<keyof I_1["getLayerLedColors"], keyof GetLayerLedColorsResponse>]: never; }) | undefined;
        setLayerLedBinding?: boolean | undefined;
        getCapsLockIndicator?: ({
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            offColor?: number | undefined;
            onColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & { [K_22 in Exclude<keyof I_1["getCapsLockIndicator"], keyof CapsLockIndicatorState>]: never; }) | undefined;
        setCapsLockIndicator?: boolean | undefined;
        saveLayerLedState?: boolean | undefined;
        setLayerLedEnabled?: boolean | undefined;
        getConnectionIndicator?: ({
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            usbColor?: number | undefined;
            btColor?: number | undefined;
            keyPosition?: number | undefined;
            layerId?: number | undefined;
        } & { [K_23 in Exclude<keyof I_1["getConnectionIndicator"], keyof ConnectionIndicatorState>]: never; }) | undefined;
        setConnectionIndicator?: boolean | undefined;
        getLowBatteryIndicator?: ({
            enabled?: boolean | undefined;
            color?: number | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
            thresholdPct?: number | undefined;
            flashDurationMs?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            color?: number | undefined;
            keyPosition?: number | undefined;
            periodMs?: number | undefined;
            thresholdPct?: number | undefined;
            flashDurationMs?: number | undefined;
        } & { [K_24 in Exclude<keyof I_1["getLowBatteryIndicator"], keyof LowBatteryIndicatorState>]: never; }) | undefined;
        setLowBatteryIndicator?: boolean | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
};
export declare const Notification: {
    encode(message: Notification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Notification;
    fromJSON(object: any): Notification;
    toJSON(message: Notification): unknown;
    create<I extends {
        rgbUnderglowStateChanged?: {
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: string[] | undefined;
        } | undefined;
        backlightStateChanged?: {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } | undefined;
    } & {
        rgbUnderglowStateChanged?: ({
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: string[] | undefined;
        } & {
            on?: boolean | undefined;
            color?: ({
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & { [K in Exclude<keyof I["rgbUnderglowStateChanged"]["color"], keyof HsbColor>]: never; }) | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: (string[] & string[] & { [K_1 in Exclude<keyof I["rgbUnderglowStateChanged"]["effectNames"], keyof string[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["rgbUnderglowStateChanged"], keyof RgbUnderglowState>]: never; }) | undefined;
        backlightStateChanged?: ({
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & { [K_3 in Exclude<keyof I["backlightStateChanged"], keyof BacklightState>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Notification>]: never; }>(base?: I | undefined): Notification;
    fromPartial<I_1 extends {
        rgbUnderglowStateChanged?: {
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: string[] | undefined;
        } | undefined;
        backlightStateChanged?: {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } | undefined;
    } & {
        rgbUnderglowStateChanged?: ({
            on?: boolean | undefined;
            color?: {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: string[] | undefined;
        } & {
            on?: boolean | undefined;
            color?: ({
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & {
                h?: number | undefined;
                s?: number | undefined;
                b?: number | undefined;
            } & { [K_5 in Exclude<keyof I_1["rgbUnderglowStateChanged"]["color"], keyof HsbColor>]: never; }) | undefined;
            effect?: number | undefined;
            speed?: number | undefined;
            effectCount?: number | undefined;
            effectNames?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["rgbUnderglowStateChanged"]["effectNames"], keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["rgbUnderglowStateChanged"], keyof RgbUnderglowState>]: never; }) | undefined;
        backlightStateChanged?: ({
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & {
            on?: boolean | undefined;
            brightness?: number | undefined;
        } & { [K_8 in Exclude<keyof I_1["backlightStateChanged"], keyof BacklightState>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Notification>]: never; }>(object: I_1): Notification;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};

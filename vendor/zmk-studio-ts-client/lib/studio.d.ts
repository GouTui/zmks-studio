import * as _m0 from "protobufjs/minimal";
import { Request as Request2, Response as Response7 } from "./behaviors";
import { Notification as Notification10, Request as Request1, Response as Response6 } from "./core";
import { Notification as Notification11, Request as Request3, Response as Response8 } from "./keymap";
import { Notification as Notification12, Request as Request4, Response as Response9 } from "./lighting";
import { Response as Response5 } from "./meta";
export declare const protobufPackage = "zmk.studio";
/** Requests */
export interface Request {
    requestId: number;
    core?: Request1 | undefined;
    behaviors?: Request2 | undefined;
    keymap?: Request3 | undefined;
    lighting?: Request4 | undefined;
}
export interface Response {
    requestResponse?: RequestResponse | undefined;
    notification?: Notification | undefined;
}
export interface RequestResponse {
    requestId: number;
    meta?: Response5 | undefined;
    core?: Response6 | undefined;
    behaviors?: Response7 | undefined;
    keymap?: Response8 | undefined;
    lighting?: Response9 | undefined;
}
export interface Notification {
    core?: Notification10 | undefined;
    keymap?: Notification11 | undefined;
    lighting?: Notification12 | undefined;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends {
        requestId?: number | undefined;
        core?: {
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: boolean | undefined;
            setPowerSettings?: {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } | undefined;
        } | undefined;
        behaviors?: {
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: {
                behaviorId?: number | undefined;
            } | undefined;
            getBehaviorConfig?: {
                behaviorId?: number | undefined;
            } | undefined;
            setBehaviorConfig?: {
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        keymap?: {
            getKeymap?: boolean | undefined;
            setLayerBinding?: {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } | undefined;
            addLayer?: {} | undefined;
            removeLayer?: {
                layerIndex?: number | undefined;
            } | undefined;
            restoreLayer?: {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } | undefined;
            setLayerProps?: {
                layerId?: number | undefined;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        lighting?: {
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
        } | undefined;
    } & {
        requestId?: number | undefined;
        core?: ({
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: boolean | undefined;
            setPowerSettings?: {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } | undefined;
        } & {
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: boolean | undefined;
            setPowerSettings?: ({
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } & {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } & { [K in Exclude<keyof I["core"]["setPowerSettings"], keyof import("./core").SetPowerSettingsRequest>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["core"], keyof Request1>]: never; }) | undefined;
        behaviors?: ({
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: {
                behaviorId?: number | undefined;
            } | undefined;
            getBehaviorConfig?: {
                behaviorId?: number | undefined;
            } | undefined;
            setBehaviorConfig?: {
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } | undefined;
        } & {
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: ({
                behaviorId?: number | undefined;
            } & {
                behaviorId?: number | undefined;
            } & { [K_2 in Exclude<keyof I["behaviors"]["getBehaviorDetails"], "behaviorId">]: never; }) | undefined;
            getBehaviorConfig?: ({
                behaviorId?: number | undefined;
            } & {
                behaviorId?: number | undefined;
            } & { [K_3 in Exclude<keyof I["behaviors"]["getBehaviorConfig"], "behaviorId">]: never; }) | undefined;
            setBehaviorConfig?: ({
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } & {
                behaviorId?: number | undefined;
                holdTap?: ({
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } & {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } & { [K_4 in Exclude<keyof I["behaviors"]["setBehaviorConfig"]["holdTap"], keyof import("./behaviors").HoldTapConfig>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["behaviors"]["setBehaviorConfig"], keyof import("./behaviors").SetBehaviorConfigRequest>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["behaviors"], keyof Request2>]: never; }) | undefined;
        keymap?: ({
            getKeymap?: boolean | undefined;
            setLayerBinding?: {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } | undefined;
            addLayer?: {} | undefined;
            removeLayer?: {
                layerIndex?: number | undefined;
            } | undefined;
            restoreLayer?: {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } | undefined;
            setLayerProps?: {
                layerId?: number | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            getKeymap?: boolean | undefined;
            setLayerBinding?: ({
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } & {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_7 in Exclude<keyof I["keymap"]["setLayerBinding"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["keymap"]["setLayerBinding"], keyof import("./keymap").SetLayerBindingRequest>]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: ({
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } & {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } & { [K_9 in Exclude<keyof I["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerRequest>]: never; }) | undefined;
            addLayer?: ({} & {} & { [K_10 in Exclude<keyof I["keymap"]["addLayer"], never>]: never; }) | undefined;
            removeLayer?: ({
                layerIndex?: number | undefined;
            } & {
                layerIndex?: number | undefined;
            } & { [K_11 in Exclude<keyof I["keymap"]["removeLayer"], "layerIndex">]: never; }) | undefined;
            restoreLayer?: ({
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } & {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } & { [K_12 in Exclude<keyof I["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerRequest>]: never; }) | undefined;
            setLayerProps?: ({
                layerId?: number | undefined;
                name?: string | undefined;
            } & {
                layerId?: number | undefined;
                name?: string | undefined;
            } & { [K_13 in Exclude<keyof I["keymap"]["setLayerProps"], keyof import("./keymap").SetLayerPropsRequest>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["keymap"], keyof Request3>]: never; }) | undefined;
        lighting?: ({
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
                } & { [K_15 in Exclude<keyof I["lighting"]["setRgbUnderglowState"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                effect?: number | undefined;
                speed?: number | undefined;
            } & { [K_16 in Exclude<keyof I["lighting"]["setRgbUnderglowState"], keyof import("./lighting").SetRgbUnderglowStateRequest>]: never; }) | undefined;
            getBacklightState?: boolean | undefined;
            setBacklightState?: ({
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & {
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & { [K_17 in Exclude<keyof I["lighting"]["setBacklightState"], keyof import("./lighting").SetBacklightStateRequest>]: never; }) | undefined;
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
            } & { [K_18 in Exclude<keyof I["lighting"]["setLayerLedBinding"], keyof import("./lighting").SetLayerLedBindingRequest>]: never; }) | undefined;
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
            } & { [K_19 in Exclude<keyof I["lighting"]["setCapsLockIndicator"], keyof import("./lighting").SetCapsLockIndicatorRequest>]: never; }) | undefined;
            saveLayerLedState?: boolean | undefined;
            setLayerLedEnabled?: ({
                enabled?: boolean | undefined;
            } & {
                enabled?: boolean | undefined;
            } & { [K_20 in Exclude<keyof I["lighting"]["setLayerLedEnabled"], "enabled">]: never; }) | undefined;
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
            } & { [K_21 in Exclude<keyof I["lighting"]["setConnectionIndicator"], keyof import("./lighting").SetConnectionIndicatorRequest>]: never; }) | undefined;
            getLowBatteryIndicator?: boolean | undefined;
            setLowBatteryIndicator?: ({
                enabled?: boolean | undefined;
                keyPosition?: number | undefined;
                periodMs?: number | undefined;
            } & {
                enabled?: boolean | undefined;
                keyPosition?: number | undefined;
                periodMs?: number | undefined;
            } & { [K_22 in Exclude<keyof I["lighting"]["setLowBatteryIndicator"], keyof import("./lighting").SetLowBatteryIndicatorRequest>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I["lighting"], keyof Request4>]: never; }) | undefined;
    } & { [K_24 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
    fromPartial<I_1 extends {
        requestId?: number | undefined;
        core?: {
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: boolean | undefined;
            setPowerSettings?: {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } | undefined;
        } | undefined;
        behaviors?: {
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: {
                behaviorId?: number | undefined;
            } | undefined;
            getBehaviorConfig?: {
                behaviorId?: number | undefined;
            } | undefined;
            setBehaviorConfig?: {
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        keymap?: {
            getKeymap?: boolean | undefined;
            setLayerBinding?: {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } | undefined;
            addLayer?: {} | undefined;
            removeLayer?: {
                layerIndex?: number | undefined;
            } | undefined;
            restoreLayer?: {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } | undefined;
            setLayerProps?: {
                layerId?: number | undefined;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        lighting?: {
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
        } | undefined;
    } & {
        requestId?: number | undefined;
        core?: ({
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: boolean | undefined;
            setPowerSettings?: {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } | undefined;
        } & {
            getDeviceInfo?: boolean | undefined;
            getLockState?: boolean | undefined;
            lock?: boolean | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: boolean | undefined;
            setPowerSettings?: ({
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } & {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } & { [K_25 in Exclude<keyof I_1["core"]["setPowerSettings"], keyof import("./core").SetPowerSettingsRequest>]: never; }) | undefined;
        } & { [K_26 in Exclude<keyof I_1["core"], keyof Request1>]: never; }) | undefined;
        behaviors?: ({
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: {
                behaviorId?: number | undefined;
            } | undefined;
            getBehaviorConfig?: {
                behaviorId?: number | undefined;
            } | undefined;
            setBehaviorConfig?: {
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } | undefined;
        } & {
            listAllBehaviors?: boolean | undefined;
            getBehaviorDetails?: ({
                behaviorId?: number | undefined;
            } & {
                behaviorId?: number | undefined;
            } & { [K_27 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"], "behaviorId">]: never; }) | undefined;
            getBehaviorConfig?: ({
                behaviorId?: number | undefined;
            } & {
                behaviorId?: number | undefined;
            } & { [K_28 in Exclude<keyof I_1["behaviors"]["getBehaviorConfig"], "behaviorId">]: never; }) | undefined;
            setBehaviorConfig?: ({
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } & {
                behaviorId?: number | undefined;
                holdTap?: ({
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } & {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } & { [K_29 in Exclude<keyof I_1["behaviors"]["setBehaviorConfig"]["holdTap"], keyof import("./behaviors").HoldTapConfig>]: never; }) | undefined;
            } & { [K_30 in Exclude<keyof I_1["behaviors"]["setBehaviorConfig"], keyof import("./behaviors").SetBehaviorConfigRequest>]: never; }) | undefined;
        } & { [K_31 in Exclude<keyof I_1["behaviors"], keyof Request2>]: never; }) | undefined;
        keymap?: ({
            getKeymap?: boolean | undefined;
            setLayerBinding?: {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } | undefined;
            addLayer?: {} | undefined;
            removeLayer?: {
                layerIndex?: number | undefined;
            } | undefined;
            restoreLayer?: {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } | undefined;
            setLayerProps?: {
                layerId?: number | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            getKeymap?: boolean | undefined;
            setLayerBinding?: ({
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } | undefined;
            } & {
                layerId?: number | undefined;
                keyPosition?: number | undefined;
                binding?: ({
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & {
                    behaviorId?: number | undefined;
                    param1?: number | undefined;
                    param2?: number | undefined;
                } & { [K_32 in Exclude<keyof I_1["keymap"]["setLayerBinding"]["binding"], keyof import("./keymap").BehaviorBinding>]: never; }) | undefined;
            } & { [K_33 in Exclude<keyof I_1["keymap"]["setLayerBinding"], keyof import("./keymap").SetLayerBindingRequest>]: never; }) | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: boolean | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: boolean | undefined;
            setActivePhysicalLayout?: number | undefined;
            moveLayer?: ({
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } & {
                startIndex?: number | undefined;
                destIndex?: number | undefined;
            } & { [K_34 in Exclude<keyof I_1["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerRequest>]: never; }) | undefined;
            addLayer?: ({} & {} & { [K_35 in Exclude<keyof I_1["keymap"]["addLayer"], never>]: never; }) | undefined;
            removeLayer?: ({
                layerIndex?: number | undefined;
            } & {
                layerIndex?: number | undefined;
            } & { [K_36 in Exclude<keyof I_1["keymap"]["removeLayer"], "layerIndex">]: never; }) | undefined;
            restoreLayer?: ({
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } & {
                layerId?: number | undefined;
                atIndex?: number | undefined;
            } & { [K_37 in Exclude<keyof I_1["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerRequest>]: never; }) | undefined;
            setLayerProps?: ({
                layerId?: number | undefined;
                name?: string | undefined;
            } & {
                layerId?: number | undefined;
                name?: string | undefined;
            } & { [K_38 in Exclude<keyof I_1["keymap"]["setLayerProps"], keyof import("./keymap").SetLayerPropsRequest>]: never; }) | undefined;
        } & { [K_39 in Exclude<keyof I_1["keymap"], keyof Request3>]: never; }) | undefined;
        lighting?: ({
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
                } & { [K_40 in Exclude<keyof I_1["lighting"]["setRgbUnderglowState"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                effect?: number | undefined;
                speed?: number | undefined;
            } & { [K_41 in Exclude<keyof I_1["lighting"]["setRgbUnderglowState"], keyof import("./lighting").SetRgbUnderglowStateRequest>]: never; }) | undefined;
            getBacklightState?: boolean | undefined;
            setBacklightState?: ({
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & {
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & { [K_42 in Exclude<keyof I_1["lighting"]["setBacklightState"], keyof import("./lighting").SetBacklightStateRequest>]: never; }) | undefined;
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
            } & { [K_43 in Exclude<keyof I_1["lighting"]["setLayerLedBinding"], keyof import("./lighting").SetLayerLedBindingRequest>]: never; }) | undefined;
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
            } & { [K_44 in Exclude<keyof I_1["lighting"]["setCapsLockIndicator"], keyof import("./lighting").SetCapsLockIndicatorRequest>]: never; }) | undefined;
            saveLayerLedState?: boolean | undefined;
            setLayerLedEnabled?: ({
                enabled?: boolean | undefined;
            } & {
                enabled?: boolean | undefined;
            } & { [K_45 in Exclude<keyof I_1["lighting"]["setLayerLedEnabled"], "enabled">]: never; }) | undefined;
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
            } & { [K_46 in Exclude<keyof I_1["lighting"]["setConnectionIndicator"], keyof import("./lighting").SetConnectionIndicatorRequest>]: never; }) | undefined;
            getLowBatteryIndicator?: boolean | undefined;
            setLowBatteryIndicator?: ({
                enabled?: boolean | undefined;
                keyPosition?: number | undefined;
                periodMs?: number | undefined;
            } & {
                enabled?: boolean | undefined;
                keyPosition?: number | undefined;
                periodMs?: number | undefined;
            } & { [K_47 in Exclude<keyof I_1["lighting"]["setLowBatteryIndicator"], keyof import("./lighting").SetLowBatteryIndicatorRequest>]: never; }) | undefined;
        } & { [K_48 in Exclude<keyof I_1["lighting"], keyof Request4>]: never; }) | undefined;
    } & { [K_49 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends {
        requestResponse?: {
            requestId?: number | undefined;
            meta?: {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } | undefined;
            core?: {
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
                getPowerSettings?: {
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } | undefined;
                setPowerSettings?: boolean | undefined;
            } | undefined;
            behaviors?: {
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                getBehaviorConfig?: {
                    behaviorId?: number | undefined;
                    holdTap?: {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } | undefined;
                } | undefined;
                setBehaviorConfig?: boolean | undefined;
            } | undefined;
            keymap?: {
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } | undefined;
            lighting?: {
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
            } | undefined;
        } | undefined;
        notification?: {
            core?: {
                lockStateChanged?: import("./core").LockState | undefined;
            } | undefined;
            keymap?: {
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            lighting?: {
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
            } | undefined;
        } | undefined;
    } & {
        requestResponse?: ({
            requestId?: number | undefined;
            meta?: {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } | undefined;
            core?: {
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
                getPowerSettings?: {
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } | undefined;
                setPowerSettings?: boolean | undefined;
            } | undefined;
            behaviors?: {
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                getBehaviorConfig?: {
                    behaviorId?: number | undefined;
                    holdTap?: {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } | undefined;
                } | undefined;
                setBehaviorConfig?: boolean | undefined;
            } | undefined;
            keymap?: {
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } | undefined;
            lighting?: {
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
            } | undefined;
        } & {
            requestId?: number | undefined;
            meta?: ({
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } & {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } & { [K in Exclude<keyof I["requestResponse"]["meta"], keyof Response5>]: never; }) | undefined;
            core?: ({
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
                getPowerSettings?: {
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } | undefined;
                setPowerSettings?: boolean | undefined;
            } & {
                getDeviceInfo?: ({
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } & {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } & { [K_1 in Exclude<keyof I["requestResponse"]["core"]["getDeviceInfo"], keyof import("./core").GetDeviceInfoResponse>]: never; }) | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
                getPowerSettings?: ({
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } & {
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } & { [K_2 in Exclude<keyof I["requestResponse"]["core"]["getPowerSettings"], keyof import("./core").PowerSettingsState>]: never; }) | undefined;
                setPowerSettings?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["requestResponse"]["core"], keyof Response6>]: never; }) | undefined;
            behaviors?: ({
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                getBehaviorConfig?: {
                    behaviorId?: number | undefined;
                    holdTap?: {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } | undefined;
                } | undefined;
                setBehaviorConfig?: boolean | undefined;
            } & {
                listAllBehaviors?: ({
                    behaviors?: number[] | undefined;
                } & {
                    behaviors?: (number[] & number[] & { [K_4 in Exclude<keyof I["requestResponse"]["behaviors"]["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["requestResponse"]["behaviors"]["listAllBehaviors"], "behaviors">]: never; }) | undefined;
                getBehaviorDetails?: ({
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: ({
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] & ({
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    } & {
                        param1?: ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] & ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        } & {
                            name?: string | undefined;
                            nil?: ({} & {} & { [K_6 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                            constant?: number | undefined;
                            range?: ({
                                min?: number | undefined;
                                max?: number | undefined;
                            } & {
                                min?: number | undefined;
                                max?: number | undefined;
                            } & { [K_7 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                            hidUsage?: ({
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & { [K_8 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                            layerId?: ({} & {} & { [K_9 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                        } & { [K_10 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_11 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[]>]: never; }) | undefined;
                        param2?: ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] & ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        } & {
                            name?: string | undefined;
                            nil?: ({} & {} & { [K_12 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                            constant?: number | undefined;
                            range?: ({
                                min?: number | undefined;
                                max?: number | undefined;
                            } & {
                                min?: number | undefined;
                                max?: number | undefined;
                            } & { [K_13 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                            hidUsage?: ({
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & { [K_14 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                            layerId?: ({} & {} & { [K_15 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                        } & { [K_16 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_17 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_18 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number], keyof import("./behaviors").BehaviorBindingParametersSet>]: never; })[] & { [K_19 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"], keyof {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorDetails"], keyof import("./behaviors").GetBehaviorDetailsResponse>]: never; }) | undefined;
                getBehaviorConfig?: ({
                    behaviorId?: number | undefined;
                    holdTap?: {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } | undefined;
                } & {
                    behaviorId?: number | undefined;
                    holdTap?: ({
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } & {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } & { [K_21 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorConfig"]["holdTap"], keyof import("./behaviors").HoldTapConfig>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I["requestResponse"]["behaviors"]["getBehaviorConfig"], keyof import("./behaviors").GetBehaviorConfigResponse>]: never; }) | undefined;
                setBehaviorConfig?: boolean | undefined;
            } & { [K_23 in Exclude<keyof I["requestResponse"]["behaviors"], keyof Response7>]: never; }) | undefined;
            keymap?: ({
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } & {
                getKeymap?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_24 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_25 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_26 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_27 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_28 in Exclude<keyof I["requestResponse"]["keymap"]["getKeymap"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: ({
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } & {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } & { [K_29 in Exclude<keyof I["requestResponse"]["keymap"]["saveChanges"], keyof import("./keymap").SaveChangesResponse>]: never; }) | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: ({
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    activeLayoutIndex?: number | undefined;
                    layouts?: ({
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    } & {
                        name?: string | undefined;
                        keys?: ({
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] & ({
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        } & {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        } & { [K_30 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"][number], keyof import("./keymap").KeyPhysicalAttrs>]: never; })[] & { [K_31 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"], keyof {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_32 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number], keyof import("./keymap").PhysicalLayout>]: never; })[] & { [K_33 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"], keyof {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_34 in Exclude<keyof I["requestResponse"]["keymap"]["getPhysicalLayouts"], keyof import("./keymap").PhysicalLayouts>]: never; }) | undefined;
                setActivePhysicalLayout?: ({
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } & {
                    ok?: ({
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & {
                        layers?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] & ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_35 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_36 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_37 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_38 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"], keyof {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & { [K_39 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } & { [K_40 in Exclude<keyof I["requestResponse"]["keymap"]["setActivePhysicalLayout"], keyof import("./keymap").SetActivePhysicalLayoutResponse>]: never; }) | undefined;
                moveLayer?: ({
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & {
                        layers?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] & ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_41 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_42 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_43 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_44 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"], keyof {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & { [K_45 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } & { [K_46 in Exclude<keyof I["requestResponse"]["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerResponse>]: never; }) | undefined;
                addLayer?: ({
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        index?: number | undefined;
                        layer?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_47 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_48 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_49 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"], keyof import("./keymap").Layer>]: never; }) | undefined;
                    } & { [K_50 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"]["ok"], keyof import("./keymap").AddLayerResponseDetails>]: never; }) | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } & { [K_51 in Exclude<keyof I["requestResponse"]["keymap"]["addLayer"], keyof import("./keymap").AddLayerResponse>]: never; }) | undefined;
                removeLayer?: ({
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } & {
                    ok?: ({} & {} & { [K_52 in Exclude<keyof I["requestResponse"]["keymap"]["removeLayer"]["ok"], never>]: never; }) | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } & { [K_53 in Exclude<keyof I["requestResponse"]["keymap"]["removeLayer"], keyof import("./keymap").RemoveLayerResponse>]: never; }) | undefined;
                restoreLayer?: ({
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_54 in Exclude<keyof I["requestResponse"]["keymap"]["restoreLayer"]["ok"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_55 in Exclude<keyof I["requestResponse"]["keymap"]["restoreLayer"]["ok"]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_56 in Exclude<keyof I["requestResponse"]["keymap"]["restoreLayer"]["ok"], keyof import("./keymap").Layer>]: never; }) | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } & { [K_57 in Exclude<keyof I["requestResponse"]["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerResponse>]: never; }) | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } & { [K_58 in Exclude<keyof I["requestResponse"]["keymap"], keyof Response8>]: never; }) | undefined;
            lighting?: ({
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
                    } & { [K_59 in Exclude<keyof I["requestResponse"]["lighting"]["getRgbUnderglowState"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                    effect?: number | undefined;
                    speed?: number | undefined;
                    effectCount?: number | undefined;
                    effectNames?: (string[] & string[] & { [K_60 in Exclude<keyof I["requestResponse"]["lighting"]["getRgbUnderglowState"]["effectNames"], keyof string[]>]: never; }) | undefined;
                } & { [K_61 in Exclude<keyof I["requestResponse"]["lighting"]["getRgbUnderglowState"], keyof import("./lighting").RgbUnderglowState>]: never; }) | undefined;
                setRgbUnderglowState?: boolean | undefined;
                getBacklightState?: ({
                    on?: boolean | undefined;
                    brightness?: number | undefined;
                } & {
                    on?: boolean | undefined;
                    brightness?: number | undefined;
                } & { [K_62 in Exclude<keyof I["requestResponse"]["lighting"]["getBacklightState"], keyof import("./lighting").BacklightState>]: never; }) | undefined;
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
                        } & { [K_63 in Exclude<keyof I["requestResponse"]["lighting"]["getLayerLedColors"]["layers"][number]["bindings"][number], keyof import("./lighting").LayerLedBinding>]: never; })[] & { [K_64 in Exclude<keyof I["requestResponse"]["lighting"]["getLayerLedColors"]["layers"][number]["bindings"], keyof {
                            keyPosition?: number | undefined;
                            color?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_65 in Exclude<keyof I["requestResponse"]["lighting"]["getLayerLedColors"]["layers"][number], keyof import("./lighting").LayerLedConfig>]: never; })[] & { [K_66 in Exclude<keyof I["requestResponse"]["lighting"]["getLayerLedColors"]["layers"], keyof {
                        layerId?: number | undefined;
                        bindings?: {
                            keyPosition?: number | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    keyCount?: number | undefined;
                    layerCount?: number | undefined;
                    enabled?: boolean | undefined;
                } & { [K_67 in Exclude<keyof I["requestResponse"]["lighting"]["getLayerLedColors"], keyof import("./lighting").GetLayerLedColorsResponse>]: never; }) | undefined;
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
                } & { [K_68 in Exclude<keyof I["requestResponse"]["lighting"]["getCapsLockIndicator"], keyof import("./lighting").CapsLockIndicatorState>]: never; }) | undefined;
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
                } & { [K_69 in Exclude<keyof I["requestResponse"]["lighting"]["getConnectionIndicator"], keyof import("./lighting").ConnectionIndicatorState>]: never; }) | undefined;
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
                } & { [K_70 in Exclude<keyof I["requestResponse"]["lighting"]["getLowBatteryIndicator"], keyof import("./lighting").LowBatteryIndicatorState>]: never; }) | undefined;
                setLowBatteryIndicator?: boolean | undefined;
            } & { [K_71 in Exclude<keyof I["requestResponse"]["lighting"], keyof Response9>]: never; }) | undefined;
        } & { [K_72 in Exclude<keyof I["requestResponse"], keyof RequestResponse>]: never; }) | undefined;
        notification?: ({
            core?: {
                lockStateChanged?: import("./core").LockState | undefined;
            } | undefined;
            keymap?: {
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            lighting?: {
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
            } | undefined;
        } & {
            core?: ({
                lockStateChanged?: import("./core").LockState | undefined;
            } & {
                lockStateChanged?: import("./core").LockState | undefined;
            } & { [K_73 in Exclude<keyof I["notification"]["core"], "lockStateChanged">]: never; }) | undefined;
            keymap?: ({
                unsavedChangesStatusChanged?: boolean | undefined;
            } & {
                unsavedChangesStatusChanged?: boolean | undefined;
            } & { [K_74 in Exclude<keyof I["notification"]["keymap"], "unsavedChangesStatusChanged">]: never; }) | undefined;
            lighting?: ({
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
                    } & { [K_75 in Exclude<keyof I["notification"]["lighting"]["rgbUnderglowStateChanged"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                    effect?: number | undefined;
                    speed?: number | undefined;
                    effectCount?: number | undefined;
                    effectNames?: (string[] & string[] & { [K_76 in Exclude<keyof I["notification"]["lighting"]["rgbUnderglowStateChanged"]["effectNames"], keyof string[]>]: never; }) | undefined;
                } & { [K_77 in Exclude<keyof I["notification"]["lighting"]["rgbUnderglowStateChanged"], keyof import("./lighting").RgbUnderglowState>]: never; }) | undefined;
                backlightStateChanged?: ({
                    on?: boolean | undefined;
                    brightness?: number | undefined;
                } & {
                    on?: boolean | undefined;
                    brightness?: number | undefined;
                } & { [K_78 in Exclude<keyof I["notification"]["lighting"]["backlightStateChanged"], keyof import("./lighting").BacklightState>]: never; }) | undefined;
            } & { [K_79 in Exclude<keyof I["notification"]["lighting"], keyof Notification12>]: never; }) | undefined;
        } & { [K_80 in Exclude<keyof I["notification"], keyof Notification>]: never; }) | undefined;
    } & { [K_81 in Exclude<keyof I, keyof Response>]: never; }>(base?: I | undefined): Response;
    fromPartial<I_1 extends {
        requestResponse?: {
            requestId?: number | undefined;
            meta?: {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } | undefined;
            core?: {
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
                getPowerSettings?: {
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } | undefined;
                setPowerSettings?: boolean | undefined;
            } | undefined;
            behaviors?: {
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                getBehaviorConfig?: {
                    behaviorId?: number | undefined;
                    holdTap?: {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } | undefined;
                } | undefined;
                setBehaviorConfig?: boolean | undefined;
            } | undefined;
            keymap?: {
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } | undefined;
            lighting?: {
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
            } | undefined;
        } | undefined;
        notification?: {
            core?: {
                lockStateChanged?: import("./core").LockState | undefined;
            } | undefined;
            keymap?: {
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            lighting?: {
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
            } | undefined;
        } | undefined;
    } & {
        requestResponse?: ({
            requestId?: number | undefined;
            meta?: {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } | undefined;
            core?: {
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
                getPowerSettings?: {
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } | undefined;
                setPowerSettings?: boolean | undefined;
            } | undefined;
            behaviors?: {
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                getBehaviorConfig?: {
                    behaviorId?: number | undefined;
                    holdTap?: {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } | undefined;
                } | undefined;
                setBehaviorConfig?: boolean | undefined;
            } | undefined;
            keymap?: {
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } | undefined;
            lighting?: {
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
            } | undefined;
        } & {
            requestId?: number | undefined;
            meta?: ({
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } & {
                noResponse?: boolean | undefined;
                simpleError?: import("./meta").ErrorConditions | undefined;
            } & { [K_82 in Exclude<keyof I_1["requestResponse"]["meta"], keyof Response5>]: never; }) | undefined;
            core?: ({
                getDeviceInfo?: {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
                getPowerSettings?: {
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } | undefined;
                setPowerSettings?: boolean | undefined;
            } & {
                getDeviceInfo?: ({
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } & {
                    name?: string | undefined;
                    serialNumber?: Uint8Array | undefined;
                } & { [K_83 in Exclude<keyof I_1["requestResponse"]["core"]["getDeviceInfo"], keyof import("./core").GetDeviceInfoResponse>]: never; }) | undefined;
                getLockState?: import("./core").LockState | undefined;
                resetSettings?: boolean | undefined;
                getPowerSettings?: ({
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } & {
                    idleTimeoutMs?: number | undefined;
                    sleepTimeoutMs?: number | undefined;
                } & { [K_84 in Exclude<keyof I_1["requestResponse"]["core"]["getPowerSettings"], keyof import("./core").PowerSettingsState>]: never; }) | undefined;
                setPowerSettings?: boolean | undefined;
            } & { [K_85 in Exclude<keyof I_1["requestResponse"]["core"], keyof Response6>]: never; }) | undefined;
            behaviors?: ({
                listAllBehaviors?: {
                    behaviors?: number[] | undefined;
                } | undefined;
                getBehaviorDetails?: {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                getBehaviorConfig?: {
                    behaviorId?: number | undefined;
                    holdTap?: {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } | undefined;
                } | undefined;
                setBehaviorConfig?: boolean | undefined;
            } & {
                listAllBehaviors?: ({
                    behaviors?: number[] | undefined;
                } & {
                    behaviors?: (number[] & number[] & { [K_86 in Exclude<keyof I_1["requestResponse"]["behaviors"]["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
                } & { [K_87 in Exclude<keyof I_1["requestResponse"]["behaviors"]["listAllBehaviors"], "behaviors">]: never; }) | undefined;
                getBehaviorDetails?: ({
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    displayName?: string | undefined;
                    metadata?: ({
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[] & ({
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    } & {
                        param1?: ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] & ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        } & {
                            name?: string | undefined;
                            nil?: ({} & {} & { [K_88 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                            constant?: number | undefined;
                            range?: ({
                                min?: number | undefined;
                                max?: number | undefined;
                            } & {
                                min?: number | undefined;
                                max?: number | undefined;
                            } & { [K_89 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                            hidUsage?: ({
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & { [K_90 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                            layerId?: ({} & {} & { [K_91 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                        } & { [K_92 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_93 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[]>]: never; }) | undefined;
                        param2?: ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] & ({
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        } & {
                            name?: string | undefined;
                            nil?: ({} & {} & { [K_94 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                            constant?: number | undefined;
                            range?: ({
                                min?: number | undefined;
                                max?: number | undefined;
                            } & {
                                min?: number | undefined;
                                max?: number | undefined;
                            } & { [K_95 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                            hidUsage?: ({
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } & { [K_96 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                            layerId?: ({} & {} & { [K_97 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                        } & { [K_98 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_99 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_100 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"][number], keyof import("./behaviors").BehaviorBindingParametersSet>]: never; })[] & { [K_101 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"]["metadata"], keyof {
                        param1?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                        param2?: {
                            name?: string | undefined;
                            nil?: {} | undefined;
                            constant?: number | undefined;
                            range?: {
                                min?: number | undefined;
                                max?: number | undefined;
                            } | undefined;
                            hidUsage?: {
                                keyboardMax?: number | undefined;
                                consumerMax?: number | undefined;
                            } | undefined;
                            layerId?: {} | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_102 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorDetails"], keyof import("./behaviors").GetBehaviorDetailsResponse>]: never; }) | undefined;
                getBehaviorConfig?: ({
                    behaviorId?: number | undefined;
                    holdTap?: {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } | undefined;
                } & {
                    behaviorId?: number | undefined;
                    holdTap?: ({
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } & {
                        tappingTermMs?: number | undefined;
                        flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                        requirePriorIdleMs?: number | undefined;
                        quickTapMs?: number | undefined;
                        retroTap?: boolean | undefined;
                        holdWhileUndecided?: boolean | undefined;
                        holdWhileUndecidedLinger?: boolean | undefined;
                        holdTriggerOnRelease?: boolean | undefined;
                    } & { [K_103 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorConfig"]["holdTap"], keyof import("./behaviors").HoldTapConfig>]: never; }) | undefined;
                } & { [K_104 in Exclude<keyof I_1["requestResponse"]["behaviors"]["getBehaviorConfig"], keyof import("./behaviors").GetBehaviorConfigResponse>]: never; }) | undefined;
                setBehaviorConfig?: boolean | undefined;
            } & { [K_105 in Exclude<keyof I_1["requestResponse"]["behaviors"], keyof Response7>]: never; }) | undefined;
            keymap?: ({
                getKeymap?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: {
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                setActivePhysicalLayout?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } | undefined;
                moveLayer?: {
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } | undefined;
                addLayer?: {
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } | undefined;
                removeLayer?: {
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } | undefined;
                restoreLayer?: {
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } & {
                getKeymap?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_106 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_107 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_108 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_109 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_110 in Exclude<keyof I_1["requestResponse"]["keymap"]["getKeymap"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
                checkUnsavedChanges?: boolean | undefined;
                saveChanges?: ({
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } & {
                    ok?: boolean | undefined;
                    err?: import("./keymap").SaveChangesErrorCode | undefined;
                } & { [K_111 in Exclude<keyof I_1["requestResponse"]["keymap"]["saveChanges"], keyof import("./keymap").SaveChangesResponse>]: never; }) | undefined;
                discardChanges?: boolean | undefined;
                getPhysicalLayouts?: ({
                    activeLayoutIndex?: number | undefined;
                    layouts?: {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    activeLayoutIndex?: number | undefined;
                    layouts?: ({
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    } & {
                        name?: string | undefined;
                        keys?: ({
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] & ({
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        } & {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        } & { [K_112 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"][number], keyof import("./keymap").KeyPhysicalAttrs>]: never; })[] & { [K_113 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"], keyof {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_114 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"][number], keyof import("./keymap").PhysicalLayout>]: never; })[] & { [K_115 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"]["layouts"], keyof {
                        name?: string | undefined;
                        keys?: {
                            width?: number | undefined;
                            height?: number | undefined;
                            x?: number | undefined;
                            y?: number | undefined;
                            r?: number | undefined;
                            rx?: number | undefined;
                            ry?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_116 in Exclude<keyof I_1["requestResponse"]["keymap"]["getPhysicalLayouts"], keyof import("./keymap").PhysicalLayouts>]: never; }) | undefined;
                setActivePhysicalLayout?: ({
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } & {
                    ok?: ({
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & {
                        layers?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] & ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_117 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_118 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_119 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_120 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"]["layers"], keyof {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & { [K_121 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                    err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
                } & { [K_122 in Exclude<keyof I_1["requestResponse"]["keymap"]["setActivePhysicalLayout"], keyof import("./keymap").SetActivePhysicalLayoutResponse>]: never; }) | undefined;
                moveLayer?: ({
                    ok?: {
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        layers?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & {
                        layers?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[] & ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_123 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_124 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_125 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_126 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"]["layers"], keyof {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        availableLayers?: number | undefined;
                        maxLayerNameLength?: number | undefined;
                    } & { [K_127 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                    err?: import("./keymap").MoveLayerErrorCode | undefined;
                } & { [K_128 in Exclude<keyof I_1["requestResponse"]["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerResponse>]: never; }) | undefined;
                addLayer?: ({
                    ok?: {
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        index?: number | undefined;
                        layer?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        index?: number | undefined;
                        layer?: ({
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] | undefined;
                        } & {
                            id?: number | undefined;
                            name?: string | undefined;
                            bindings?: ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[] & ({
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            } & { [K_129 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_130 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"]["bindings"], keyof {
                                behaviorId?: number | undefined;
                                param1?: number | undefined;
                                param2?: number | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_131 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"]["ok"]["layer"], keyof import("./keymap").Layer>]: never; }) | undefined;
                    } & { [K_132 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"]["ok"], keyof import("./keymap").AddLayerResponseDetails>]: never; }) | undefined;
                    err?: import("./keymap").AddLayerErrorCode | undefined;
                } & { [K_133 in Exclude<keyof I_1["requestResponse"]["keymap"]["addLayer"], keyof import("./keymap").AddLayerResponse>]: never; }) | undefined;
                removeLayer?: ({
                    ok?: {} | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } & {
                    ok?: ({} & {} & { [K_134 in Exclude<keyof I_1["requestResponse"]["keymap"]["removeLayer"]["ok"], never>]: never; }) | undefined;
                    err?: import("./keymap").RemoveLayerErrorCode | undefined;
                } & { [K_135 in Exclude<keyof I_1["requestResponse"]["keymap"]["removeLayer"], keyof import("./keymap").RemoveLayerResponse>]: never; }) | undefined;
                restoreLayer?: ({
                    ok?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } & {
                    ok?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_136 in Exclude<keyof I_1["requestResponse"]["keymap"]["restoreLayer"]["ok"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_137 in Exclude<keyof I_1["requestResponse"]["keymap"]["restoreLayer"]["ok"]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_138 in Exclude<keyof I_1["requestResponse"]["keymap"]["restoreLayer"]["ok"], keyof import("./keymap").Layer>]: never; }) | undefined;
                    err?: import("./keymap").RestoreLayerErrorCode | undefined;
                } & { [K_139 in Exclude<keyof I_1["requestResponse"]["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerResponse>]: never; }) | undefined;
                setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
            } & { [K_140 in Exclude<keyof I_1["requestResponse"]["keymap"], keyof Response8>]: never; }) | undefined;
            lighting?: ({
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
                    } & { [K_141 in Exclude<keyof I_1["requestResponse"]["lighting"]["getRgbUnderglowState"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                    effect?: number | undefined;
                    speed?: number | undefined;
                    effectCount?: number | undefined;
                    effectNames?: (string[] & string[] & { [K_142 in Exclude<keyof I_1["requestResponse"]["lighting"]["getRgbUnderglowState"]["effectNames"], keyof string[]>]: never; }) | undefined;
                } & { [K_143 in Exclude<keyof I_1["requestResponse"]["lighting"]["getRgbUnderglowState"], keyof import("./lighting").RgbUnderglowState>]: never; }) | undefined;
                setRgbUnderglowState?: boolean | undefined;
                getBacklightState?: ({
                    on?: boolean | undefined;
                    brightness?: number | undefined;
                } & {
                    on?: boolean | undefined;
                    brightness?: number | undefined;
                } & { [K_144 in Exclude<keyof I_1["requestResponse"]["lighting"]["getBacklightState"], keyof import("./lighting").BacklightState>]: never; }) | undefined;
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
                        } & { [K_145 in Exclude<keyof I_1["requestResponse"]["lighting"]["getLayerLedColors"]["layers"][number]["bindings"][number], keyof import("./lighting").LayerLedBinding>]: never; })[] & { [K_146 in Exclude<keyof I_1["requestResponse"]["lighting"]["getLayerLedColors"]["layers"][number]["bindings"], keyof {
                            keyPosition?: number | undefined;
                            color?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_147 in Exclude<keyof I_1["requestResponse"]["lighting"]["getLayerLedColors"]["layers"][number], keyof import("./lighting").LayerLedConfig>]: never; })[] & { [K_148 in Exclude<keyof I_1["requestResponse"]["lighting"]["getLayerLedColors"]["layers"], keyof {
                        layerId?: number | undefined;
                        bindings?: {
                            keyPosition?: number | undefined;
                            color?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    keyCount?: number | undefined;
                    layerCount?: number | undefined;
                    enabled?: boolean | undefined;
                } & { [K_149 in Exclude<keyof I_1["requestResponse"]["lighting"]["getLayerLedColors"], keyof import("./lighting").GetLayerLedColorsResponse>]: never; }) | undefined;
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
                } & { [K_150 in Exclude<keyof I_1["requestResponse"]["lighting"]["getCapsLockIndicator"], keyof import("./lighting").CapsLockIndicatorState>]: never; }) | undefined;
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
                } & { [K_151 in Exclude<keyof I_1["requestResponse"]["lighting"]["getConnectionIndicator"], keyof import("./lighting").ConnectionIndicatorState>]: never; }) | undefined;
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
                } & { [K_152 in Exclude<keyof I_1["requestResponse"]["lighting"]["getLowBatteryIndicator"], keyof import("./lighting").LowBatteryIndicatorState>]: never; }) | undefined;
                setLowBatteryIndicator?: boolean | undefined;
            } & { [K_153 in Exclude<keyof I_1["requestResponse"]["lighting"], keyof Response9>]: never; }) | undefined;
        } & { [K_154 in Exclude<keyof I_1["requestResponse"], keyof RequestResponse>]: never; }) | undefined;
        notification?: ({
            core?: {
                lockStateChanged?: import("./core").LockState | undefined;
            } | undefined;
            keymap?: {
                unsavedChangesStatusChanged?: boolean | undefined;
            } | undefined;
            lighting?: {
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
            } | undefined;
        } & {
            core?: ({
                lockStateChanged?: import("./core").LockState | undefined;
            } & {
                lockStateChanged?: import("./core").LockState | undefined;
            } & { [K_155 in Exclude<keyof I_1["notification"]["core"], "lockStateChanged">]: never; }) | undefined;
            keymap?: ({
                unsavedChangesStatusChanged?: boolean | undefined;
            } & {
                unsavedChangesStatusChanged?: boolean | undefined;
            } & { [K_156 in Exclude<keyof I_1["notification"]["keymap"], "unsavedChangesStatusChanged">]: never; }) | undefined;
            lighting?: ({
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
                    } & { [K_157 in Exclude<keyof I_1["notification"]["lighting"]["rgbUnderglowStateChanged"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                    effect?: number | undefined;
                    speed?: number | undefined;
                    effectCount?: number | undefined;
                    effectNames?: (string[] & string[] & { [K_158 in Exclude<keyof I_1["notification"]["lighting"]["rgbUnderglowStateChanged"]["effectNames"], keyof string[]>]: never; }) | undefined;
                } & { [K_159 in Exclude<keyof I_1["notification"]["lighting"]["rgbUnderglowStateChanged"], keyof import("./lighting").RgbUnderglowState>]: never; }) | undefined;
                backlightStateChanged?: ({
                    on?: boolean | undefined;
                    brightness?: number | undefined;
                } & {
                    on?: boolean | undefined;
                    brightness?: number | undefined;
                } & { [K_160 in Exclude<keyof I_1["notification"]["lighting"]["backlightStateChanged"], keyof import("./lighting").BacklightState>]: never; }) | undefined;
            } & { [K_161 in Exclude<keyof I_1["notification"]["lighting"], keyof Notification12>]: never; }) | undefined;
        } & { [K_162 in Exclude<keyof I_1["notification"], keyof Notification>]: never; }) | undefined;
    } & { [K_163 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
};
export declare const RequestResponse: {
    encode(message: RequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestResponse;
    fromJSON(object: any): RequestResponse;
    toJSON(message: RequestResponse): unknown;
    create<I extends {
        requestId?: number | undefined;
        meta?: {
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } | undefined;
        core?: {
            getDeviceInfo?: {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
            } | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } | undefined;
            setPowerSettings?: boolean | undefined;
        } | undefined;
        behaviors?: {
            listAllBehaviors?: {
                behaviors?: number[] | undefined;
            } | undefined;
            getBehaviorDetails?: {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            getBehaviorConfig?: {
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } | undefined;
            setBehaviorConfig?: boolean | undefined;
        } | undefined;
        keymap?: {
            getKeymap?: {
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: {
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            setActivePhysicalLayout?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } | undefined;
            moveLayer?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } | undefined;
            addLayer?: {
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } | undefined;
            removeLayer?: {
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } | undefined;
            restoreLayer?: {
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } | undefined;
        lighting?: {
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
        } | undefined;
    } & {
        requestId?: number | undefined;
        meta?: ({
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } & {
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } & { [K in Exclude<keyof I["meta"], keyof Response5>]: never; }) | undefined;
        core?: ({
            getDeviceInfo?: {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
            } | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } | undefined;
            setPowerSettings?: boolean | undefined;
        } & {
            getDeviceInfo?: ({
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
            } & {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
            } & { [K_1 in Exclude<keyof I["core"]["getDeviceInfo"], keyof import("./core").GetDeviceInfoResponse>]: never; }) | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: ({
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } & {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } & { [K_2 in Exclude<keyof I["core"]["getPowerSettings"], keyof import("./core").PowerSettingsState>]: never; }) | undefined;
            setPowerSettings?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["core"], keyof Response6>]: never; }) | undefined;
        behaviors?: ({
            listAllBehaviors?: {
                behaviors?: number[] | undefined;
            } | undefined;
            getBehaviorDetails?: {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            getBehaviorConfig?: {
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } | undefined;
            setBehaviorConfig?: boolean | undefined;
        } & {
            listAllBehaviors?: ({
                behaviors?: number[] | undefined;
            } & {
                behaviors?: (number[] & number[] & { [K_4 in Exclude<keyof I["behaviors"]["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["behaviors"]["listAllBehaviors"], "behaviors">]: never; }) | undefined;
            getBehaviorDetails?: ({
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: ({
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] & ({
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                } & {
                    param1?: ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] & ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    } & {
                        name?: string | undefined;
                        nil?: ({} & {} & { [K_6 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                        constant?: number | undefined;
                        range?: ({
                            min?: number | undefined;
                            max?: number | undefined;
                        } & {
                            min?: number | undefined;
                            max?: number | undefined;
                        } & { [K_7 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                        hidUsage?: ({
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & { [K_8 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                        layerId?: ({} & {} & { [K_9 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                    } & { [K_10 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_11 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[]>]: never; }) | undefined;
                    param2?: ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] & ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    } & {
                        name?: string | undefined;
                        nil?: ({} & {} & { [K_12 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                        constant?: number | undefined;
                        range?: ({
                            min?: number | undefined;
                            max?: number | undefined;
                        } & {
                            min?: number | undefined;
                            max?: number | undefined;
                        } & { [K_13 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                        hidUsage?: ({
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & { [K_14 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                        layerId?: ({} & {} & { [K_15 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                    } & { [K_16 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_17 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_18 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"][number], keyof import("./behaviors").BehaviorBindingParametersSet>]: never; })[] & { [K_19 in Exclude<keyof I["behaviors"]["getBehaviorDetails"]["metadata"], keyof {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I["behaviors"]["getBehaviorDetails"], keyof import("./behaviors").GetBehaviorDetailsResponse>]: never; }) | undefined;
            getBehaviorConfig?: ({
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } & {
                behaviorId?: number | undefined;
                holdTap?: ({
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } & {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } & { [K_21 in Exclude<keyof I["behaviors"]["getBehaviorConfig"]["holdTap"], keyof import("./behaviors").HoldTapConfig>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["behaviors"]["getBehaviorConfig"], keyof import("./behaviors").GetBehaviorConfigResponse>]: never; }) | undefined;
            setBehaviorConfig?: boolean | undefined;
        } & { [K_23 in Exclude<keyof I["behaviors"], keyof Response7>]: never; }) | undefined;
        keymap?: ({
            getKeymap?: {
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: {
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            setActivePhysicalLayout?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } | undefined;
            moveLayer?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } | undefined;
            addLayer?: {
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } | undefined;
            removeLayer?: {
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } | undefined;
            restoreLayer?: {
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } & {
            getKeymap?: ({
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } & {
                layers?: ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] & ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_24 in Exclude<keyof I["keymap"]["getKeymap"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_25 in Exclude<keyof I["keymap"]["getKeymap"]["layers"][number]["bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_26 in Exclude<keyof I["keymap"]["getKeymap"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_27 in Exclude<keyof I["keymap"]["getKeymap"]["layers"], keyof {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } & { [K_28 in Exclude<keyof I["keymap"]["getKeymap"], keyof import("./keymap").Keymap>]: never; }) | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: ({
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } & {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } & { [K_29 in Exclude<keyof I["keymap"]["saveChanges"], keyof import("./keymap").SaveChangesResponse>]: never; }) | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: ({
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                activeLayoutIndex?: number | undefined;
                layouts?: ({
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                } & {
                    name?: string | undefined;
                    keys?: ({
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] & ({
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    } & {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    } & { [K_30 in Exclude<keyof I["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"][number], keyof import("./keymap").KeyPhysicalAttrs>]: never; })[] & { [K_31 in Exclude<keyof I["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"], keyof {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_32 in Exclude<keyof I["keymap"]["getPhysicalLayouts"]["layouts"][number], keyof import("./keymap").PhysicalLayout>]: never; })[] & { [K_33 in Exclude<keyof I["keymap"]["getPhysicalLayouts"]["layouts"], keyof {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_34 in Exclude<keyof I["keymap"]["getPhysicalLayouts"], keyof import("./keymap").PhysicalLayouts>]: never; }) | undefined;
            setActivePhysicalLayout?: ({
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } & {
                ok?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_35 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_36 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_37 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_38 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_39 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } & { [K_40 in Exclude<keyof I["keymap"]["setActivePhysicalLayout"], keyof import("./keymap").SetActivePhysicalLayoutResponse>]: never; }) | undefined;
            moveLayer?: ({
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } & {
                ok?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_41 in Exclude<keyof I["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_42 in Exclude<keyof I["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_43 in Exclude<keyof I["keymap"]["moveLayer"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_44 in Exclude<keyof I["keymap"]["moveLayer"]["ok"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_45 in Exclude<keyof I["keymap"]["moveLayer"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } & { [K_46 in Exclude<keyof I["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerResponse>]: never; }) | undefined;
            addLayer?: ({
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } & {
                ok?: ({
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    index?: number | undefined;
                    layer?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_47 in Exclude<keyof I["keymap"]["addLayer"]["ok"]["layer"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_48 in Exclude<keyof I["keymap"]["addLayer"]["ok"]["layer"]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_49 in Exclude<keyof I["keymap"]["addLayer"]["ok"]["layer"], keyof import("./keymap").Layer>]: never; }) | undefined;
                } & { [K_50 in Exclude<keyof I["keymap"]["addLayer"]["ok"], keyof import("./keymap").AddLayerResponseDetails>]: never; }) | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } & { [K_51 in Exclude<keyof I["keymap"]["addLayer"], keyof import("./keymap").AddLayerResponse>]: never; }) | undefined;
            removeLayer?: ({
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } & {
                ok?: ({} & {} & { [K_52 in Exclude<keyof I["keymap"]["removeLayer"]["ok"], never>]: never; }) | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } & { [K_53 in Exclude<keyof I["keymap"]["removeLayer"], keyof import("./keymap").RemoveLayerResponse>]: never; }) | undefined;
            restoreLayer?: ({
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } & {
                ok?: ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] & ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_54 in Exclude<keyof I["keymap"]["restoreLayer"]["ok"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_55 in Exclude<keyof I["keymap"]["restoreLayer"]["ok"]["bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_56 in Exclude<keyof I["keymap"]["restoreLayer"]["ok"], keyof import("./keymap").Layer>]: never; }) | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } & { [K_57 in Exclude<keyof I["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerResponse>]: never; }) | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } & { [K_58 in Exclude<keyof I["keymap"], keyof Response8>]: never; }) | undefined;
        lighting?: ({
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
                } & { [K_59 in Exclude<keyof I["lighting"]["getRgbUnderglowState"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                effect?: number | undefined;
                speed?: number | undefined;
                effectCount?: number | undefined;
                effectNames?: (string[] & string[] & { [K_60 in Exclude<keyof I["lighting"]["getRgbUnderglowState"]["effectNames"], keyof string[]>]: never; }) | undefined;
            } & { [K_61 in Exclude<keyof I["lighting"]["getRgbUnderglowState"], keyof import("./lighting").RgbUnderglowState>]: never; }) | undefined;
            setRgbUnderglowState?: boolean | undefined;
            getBacklightState?: ({
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & {
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & { [K_62 in Exclude<keyof I["lighting"]["getBacklightState"], keyof import("./lighting").BacklightState>]: never; }) | undefined;
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
                    } & { [K_63 in Exclude<keyof I["lighting"]["getLayerLedColors"]["layers"][number]["bindings"][number], keyof import("./lighting").LayerLedBinding>]: never; })[] & { [K_64 in Exclude<keyof I["lighting"]["getLayerLedColors"]["layers"][number]["bindings"], keyof {
                        keyPosition?: number | undefined;
                        color?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_65 in Exclude<keyof I["lighting"]["getLayerLedColors"]["layers"][number], keyof import("./lighting").LayerLedConfig>]: never; })[] & { [K_66 in Exclude<keyof I["lighting"]["getLayerLedColors"]["layers"], keyof {
                    layerId?: number | undefined;
                    bindings?: {
                        keyPosition?: number | undefined;
                        color?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                keyCount?: number | undefined;
                layerCount?: number | undefined;
                enabled?: boolean | undefined;
            } & { [K_67 in Exclude<keyof I["lighting"]["getLayerLedColors"], keyof import("./lighting").GetLayerLedColorsResponse>]: never; }) | undefined;
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
            } & { [K_68 in Exclude<keyof I["lighting"]["getCapsLockIndicator"], keyof import("./lighting").CapsLockIndicatorState>]: never; }) | undefined;
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
            } & { [K_69 in Exclude<keyof I["lighting"]["getConnectionIndicator"], keyof import("./lighting").ConnectionIndicatorState>]: never; }) | undefined;
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
            } & { [K_70 in Exclude<keyof I["lighting"]["getLowBatteryIndicator"], keyof import("./lighting").LowBatteryIndicatorState>]: never; }) | undefined;
            setLowBatteryIndicator?: boolean | undefined;
        } & { [K_71 in Exclude<keyof I["lighting"], keyof Response9>]: never; }) | undefined;
    } & { [K_72 in Exclude<keyof I, keyof RequestResponse>]: never; }>(base?: I | undefined): RequestResponse;
    fromPartial<I_1 extends {
        requestId?: number | undefined;
        meta?: {
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } | undefined;
        core?: {
            getDeviceInfo?: {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
            } | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } | undefined;
            setPowerSettings?: boolean | undefined;
        } | undefined;
        behaviors?: {
            listAllBehaviors?: {
                behaviors?: number[] | undefined;
            } | undefined;
            getBehaviorDetails?: {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            getBehaviorConfig?: {
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } | undefined;
            setBehaviorConfig?: boolean | undefined;
        } | undefined;
        keymap?: {
            getKeymap?: {
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: {
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            setActivePhysicalLayout?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } | undefined;
            moveLayer?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } | undefined;
            addLayer?: {
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } | undefined;
            removeLayer?: {
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } | undefined;
            restoreLayer?: {
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } | undefined;
        lighting?: {
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
        } | undefined;
    } & {
        requestId?: number | undefined;
        meta?: ({
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } & {
            noResponse?: boolean | undefined;
            simpleError?: import("./meta").ErrorConditions | undefined;
        } & { [K_73 in Exclude<keyof I_1["meta"], keyof Response5>]: never; }) | undefined;
        core?: ({
            getDeviceInfo?: {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
            } | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } | undefined;
            setPowerSettings?: boolean | undefined;
        } & {
            getDeviceInfo?: ({
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
            } & {
                name?: string | undefined;
                serialNumber?: Uint8Array | undefined;
            } & { [K_74 in Exclude<keyof I_1["core"]["getDeviceInfo"], keyof import("./core").GetDeviceInfoResponse>]: never; }) | undefined;
            getLockState?: import("./core").LockState | undefined;
            resetSettings?: boolean | undefined;
            getPowerSettings?: ({
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } & {
                idleTimeoutMs?: number | undefined;
                sleepTimeoutMs?: number | undefined;
            } & { [K_75 in Exclude<keyof I_1["core"]["getPowerSettings"], keyof import("./core").PowerSettingsState>]: never; }) | undefined;
            setPowerSettings?: boolean | undefined;
        } & { [K_76 in Exclude<keyof I_1["core"], keyof Response6>]: never; }) | undefined;
        behaviors?: ({
            listAllBehaviors?: {
                behaviors?: number[] | undefined;
            } | undefined;
            getBehaviorDetails?: {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            getBehaviorConfig?: {
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } | undefined;
            setBehaviorConfig?: boolean | undefined;
        } & {
            listAllBehaviors?: ({
                behaviors?: number[] | undefined;
            } & {
                behaviors?: (number[] & number[] & { [K_77 in Exclude<keyof I_1["behaviors"]["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
            } & { [K_78 in Exclude<keyof I_1["behaviors"]["listAllBehaviors"], "behaviors">]: never; }) | undefined;
            getBehaviorDetails?: ({
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                id?: number | undefined;
                displayName?: string | undefined;
                metadata?: ({
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[] & ({
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                } & {
                    param1?: ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] & ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    } & {
                        name?: string | undefined;
                        nil?: ({} & {} & { [K_79 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                        constant?: number | undefined;
                        range?: ({
                            min?: number | undefined;
                            max?: number | undefined;
                        } & {
                            min?: number | undefined;
                            max?: number | undefined;
                        } & { [K_80 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                        hidUsage?: ({
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & { [K_81 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                        layerId?: ({} & {} & { [K_82 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                    } & { [K_83 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_84 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[]>]: never; }) | undefined;
                    param2?: ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] & ({
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    } & {
                        name?: string | undefined;
                        nil?: ({} & {} & { [K_85 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                        constant?: number | undefined;
                        range?: ({
                            min?: number | undefined;
                            max?: number | undefined;
                        } & {
                            min?: number | undefined;
                            max?: number | undefined;
                        } & { [K_86 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof import("./behaviors").BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                        hidUsage?: ({
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } & { [K_87 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof import("./behaviors").BehaviorParameterHidUsage>]: never; }) | undefined;
                        layerId?: ({} & {} & { [K_88 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                    } & { [K_89 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof import("./behaviors").BehaviorParameterValueDescription>]: never; })[] & { [K_90 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_91 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"][number], keyof import("./behaviors").BehaviorBindingParametersSet>]: never; })[] & { [K_92 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"]["metadata"], keyof {
                    param1?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                    param2?: {
                        name?: string | undefined;
                        nil?: {} | undefined;
                        constant?: number | undefined;
                        range?: {
                            min?: number | undefined;
                            max?: number | undefined;
                        } | undefined;
                        hidUsage?: {
                            keyboardMax?: number | undefined;
                            consumerMax?: number | undefined;
                        } | undefined;
                        layerId?: {} | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_93 in Exclude<keyof I_1["behaviors"]["getBehaviorDetails"], keyof import("./behaviors").GetBehaviorDetailsResponse>]: never; }) | undefined;
            getBehaviorConfig?: ({
                behaviorId?: number | undefined;
                holdTap?: {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } | undefined;
            } & {
                behaviorId?: number | undefined;
                holdTap?: ({
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } & {
                    tappingTermMs?: number | undefined;
                    flavor?: import("./behaviors").HoldTapFlavor_Flavor | undefined;
                    requirePriorIdleMs?: number | undefined;
                    quickTapMs?: number | undefined;
                    retroTap?: boolean | undefined;
                    holdWhileUndecided?: boolean | undefined;
                    holdWhileUndecidedLinger?: boolean | undefined;
                    holdTriggerOnRelease?: boolean | undefined;
                } & { [K_94 in Exclude<keyof I_1["behaviors"]["getBehaviorConfig"]["holdTap"], keyof import("./behaviors").HoldTapConfig>]: never; }) | undefined;
            } & { [K_95 in Exclude<keyof I_1["behaviors"]["getBehaviorConfig"], keyof import("./behaviors").GetBehaviorConfigResponse>]: never; }) | undefined;
            setBehaviorConfig?: boolean | undefined;
        } & { [K_96 in Exclude<keyof I_1["behaviors"], keyof Response7>]: never; }) | undefined;
        keymap?: ({
            getKeymap?: {
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: {
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            setActivePhysicalLayout?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } | undefined;
            moveLayer?: {
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } | undefined;
            addLayer?: {
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } | undefined;
            removeLayer?: {
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } | undefined;
            restoreLayer?: {
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } & {
            getKeymap?: ({
                layers?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } & {
                layers?: ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] & ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_97 in Exclude<keyof I_1["keymap"]["getKeymap"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_98 in Exclude<keyof I_1["keymap"]["getKeymap"]["layers"][number]["bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_99 in Exclude<keyof I_1["keymap"]["getKeymap"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_100 in Exclude<keyof I_1["keymap"]["getKeymap"]["layers"], keyof {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                availableLayers?: number | undefined;
                maxLayerNameLength?: number | undefined;
            } & { [K_101 in Exclude<keyof I_1["keymap"]["getKeymap"], keyof import("./keymap").Keymap>]: never; }) | undefined;
            setLayerBinding?: import("./keymap").SetLayerBindingResponse | undefined;
            checkUnsavedChanges?: boolean | undefined;
            saveChanges?: ({
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } & {
                ok?: boolean | undefined;
                err?: import("./keymap").SaveChangesErrorCode | undefined;
            } & { [K_102 in Exclude<keyof I_1["keymap"]["saveChanges"], keyof import("./keymap").SaveChangesResponse>]: never; }) | undefined;
            discardChanges?: boolean | undefined;
            getPhysicalLayouts?: ({
                activeLayoutIndex?: number | undefined;
                layouts?: {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                activeLayoutIndex?: number | undefined;
                layouts?: ({
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                } & {
                    name?: string | undefined;
                    keys?: ({
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] & ({
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    } & {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    } & { [K_103 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"][number], keyof import("./keymap").KeyPhysicalAttrs>]: never; })[] & { [K_104 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"]["layouts"][number]["keys"], keyof {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_105 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"]["layouts"][number], keyof import("./keymap").PhysicalLayout>]: never; })[] & { [K_106 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"]["layouts"], keyof {
                    name?: string | undefined;
                    keys?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        x?: number | undefined;
                        y?: number | undefined;
                        r?: number | undefined;
                        rx?: number | undefined;
                        ry?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_107 in Exclude<keyof I_1["keymap"]["getPhysicalLayouts"], keyof import("./keymap").PhysicalLayouts>]: never; }) | undefined;
            setActivePhysicalLayout?: ({
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } & {
                ok?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_108 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_109 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_110 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_111 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_112 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                err?: import("./keymap").SetActivePhysicalLayoutErrorCode | undefined;
            } & { [K_113 in Exclude<keyof I_1["keymap"]["setActivePhysicalLayout"], keyof import("./keymap").SetActivePhysicalLayoutResponse>]: never; }) | undefined;
            moveLayer?: ({
                ok?: {
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } & {
                ok?: ({
                    layers?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & {
                    layers?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_114 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_115 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"]["layers"][number]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_116 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"]["layers"][number], keyof import("./keymap").Layer>]: never; })[] & { [K_117 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"]["layers"], keyof {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    availableLayers?: number | undefined;
                    maxLayerNameLength?: number | undefined;
                } & { [K_118 in Exclude<keyof I_1["keymap"]["moveLayer"]["ok"], keyof import("./keymap").Keymap>]: never; }) | undefined;
                err?: import("./keymap").MoveLayerErrorCode | undefined;
            } & { [K_119 in Exclude<keyof I_1["keymap"]["moveLayer"], keyof import("./keymap").MoveLayerResponse>]: never; }) | undefined;
            addLayer?: ({
                ok?: {
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } & {
                ok?: ({
                    index?: number | undefined;
                    layer?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    index?: number | undefined;
                    layer?: ({
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] | undefined;
                    } & {
                        id?: number | undefined;
                        name?: string | undefined;
                        bindings?: ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[] & ({
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        } & { [K_120 in Exclude<keyof I_1["keymap"]["addLayer"]["ok"]["layer"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_121 in Exclude<keyof I_1["keymap"]["addLayer"]["ok"]["layer"]["bindings"], keyof {
                            behaviorId?: number | undefined;
                            param1?: number | undefined;
                            param2?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_122 in Exclude<keyof I_1["keymap"]["addLayer"]["ok"]["layer"], keyof import("./keymap").Layer>]: never; }) | undefined;
                } & { [K_123 in Exclude<keyof I_1["keymap"]["addLayer"]["ok"], keyof import("./keymap").AddLayerResponseDetails>]: never; }) | undefined;
                err?: import("./keymap").AddLayerErrorCode | undefined;
            } & { [K_124 in Exclude<keyof I_1["keymap"]["addLayer"], keyof import("./keymap").AddLayerResponse>]: never; }) | undefined;
            removeLayer?: ({
                ok?: {} | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } & {
                ok?: ({} & {} & { [K_125 in Exclude<keyof I_1["keymap"]["removeLayer"]["ok"], never>]: never; }) | undefined;
                err?: import("./keymap").RemoveLayerErrorCode | undefined;
            } & { [K_126 in Exclude<keyof I_1["keymap"]["removeLayer"], keyof import("./keymap").RemoveLayerResponse>]: never; }) | undefined;
            restoreLayer?: ({
                ok?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } & {
                ok?: ({
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] | undefined;
                } & {
                    id?: number | undefined;
                    name?: string | undefined;
                    bindings?: ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[] & ({
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    } & { [K_127 in Exclude<keyof I_1["keymap"]["restoreLayer"]["ok"]["bindings"][number], keyof import("./keymap").BehaviorBinding>]: never; })[] & { [K_128 in Exclude<keyof I_1["keymap"]["restoreLayer"]["ok"]["bindings"], keyof {
                        behaviorId?: number | undefined;
                        param1?: number | undefined;
                        param2?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_129 in Exclude<keyof I_1["keymap"]["restoreLayer"]["ok"], keyof import("./keymap").Layer>]: never; }) | undefined;
                err?: import("./keymap").RestoreLayerErrorCode | undefined;
            } & { [K_130 in Exclude<keyof I_1["keymap"]["restoreLayer"], keyof import("./keymap").RestoreLayerResponse>]: never; }) | undefined;
            setLayerProps?: import("./keymap").SetLayerPropsResponse | undefined;
        } & { [K_131 in Exclude<keyof I_1["keymap"], keyof Response8>]: never; }) | undefined;
        lighting?: ({
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
                } & { [K_132 in Exclude<keyof I_1["lighting"]["getRgbUnderglowState"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                effect?: number | undefined;
                speed?: number | undefined;
                effectCount?: number | undefined;
                effectNames?: (string[] & string[] & { [K_133 in Exclude<keyof I_1["lighting"]["getRgbUnderglowState"]["effectNames"], keyof string[]>]: never; }) | undefined;
            } & { [K_134 in Exclude<keyof I_1["lighting"]["getRgbUnderglowState"], keyof import("./lighting").RgbUnderglowState>]: never; }) | undefined;
            setRgbUnderglowState?: boolean | undefined;
            getBacklightState?: ({
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & {
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & { [K_135 in Exclude<keyof I_1["lighting"]["getBacklightState"], keyof import("./lighting").BacklightState>]: never; }) | undefined;
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
                    } & { [K_136 in Exclude<keyof I_1["lighting"]["getLayerLedColors"]["layers"][number]["bindings"][number], keyof import("./lighting").LayerLedBinding>]: never; })[] & { [K_137 in Exclude<keyof I_1["lighting"]["getLayerLedColors"]["layers"][number]["bindings"], keyof {
                        keyPosition?: number | undefined;
                        color?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_138 in Exclude<keyof I_1["lighting"]["getLayerLedColors"]["layers"][number], keyof import("./lighting").LayerLedConfig>]: never; })[] & { [K_139 in Exclude<keyof I_1["lighting"]["getLayerLedColors"]["layers"], keyof {
                    layerId?: number | undefined;
                    bindings?: {
                        keyPosition?: number | undefined;
                        color?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                keyCount?: number | undefined;
                layerCount?: number | undefined;
                enabled?: boolean | undefined;
            } & { [K_140 in Exclude<keyof I_1["lighting"]["getLayerLedColors"], keyof import("./lighting").GetLayerLedColorsResponse>]: never; }) | undefined;
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
            } & { [K_141 in Exclude<keyof I_1["lighting"]["getCapsLockIndicator"], keyof import("./lighting").CapsLockIndicatorState>]: never; }) | undefined;
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
            } & { [K_142 in Exclude<keyof I_1["lighting"]["getConnectionIndicator"], keyof import("./lighting").ConnectionIndicatorState>]: never; }) | undefined;
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
            } & { [K_143 in Exclude<keyof I_1["lighting"]["getLowBatteryIndicator"], keyof import("./lighting").LowBatteryIndicatorState>]: never; }) | undefined;
            setLowBatteryIndicator?: boolean | undefined;
        } & { [K_144 in Exclude<keyof I_1["lighting"], keyof Response9>]: never; }) | undefined;
    } & { [K_145 in Exclude<keyof I_1, keyof RequestResponse>]: never; }>(object: I_1): RequestResponse;
};
export declare const Notification: {
    encode(message: Notification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Notification;
    fromJSON(object: any): Notification;
    toJSON(message: Notification): unknown;
    create<I extends {
        core?: {
            lockStateChanged?: import("./core").LockState | undefined;
        } | undefined;
        keymap?: {
            unsavedChangesStatusChanged?: boolean | undefined;
        } | undefined;
        lighting?: {
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
        } | undefined;
    } & {
        core?: ({
            lockStateChanged?: import("./core").LockState | undefined;
        } & {
            lockStateChanged?: import("./core").LockState | undefined;
        } & { [K in Exclude<keyof I["core"], "lockStateChanged">]: never; }) | undefined;
        keymap?: ({
            unsavedChangesStatusChanged?: boolean | undefined;
        } & {
            unsavedChangesStatusChanged?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["keymap"], "unsavedChangesStatusChanged">]: never; }) | undefined;
        lighting?: ({
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
                } & { [K_2 in Exclude<keyof I["lighting"]["rgbUnderglowStateChanged"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                effect?: number | undefined;
                speed?: number | undefined;
                effectCount?: number | undefined;
                effectNames?: (string[] & string[] & { [K_3 in Exclude<keyof I["lighting"]["rgbUnderglowStateChanged"]["effectNames"], keyof string[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["lighting"]["rgbUnderglowStateChanged"], keyof import("./lighting").RgbUnderglowState>]: never; }) | undefined;
            backlightStateChanged?: ({
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & {
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & { [K_5 in Exclude<keyof I["lighting"]["backlightStateChanged"], keyof import("./lighting").BacklightState>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["lighting"], keyof Notification12>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof Notification>]: never; }>(base?: I | undefined): Notification;
    fromPartial<I_1 extends {
        core?: {
            lockStateChanged?: import("./core").LockState | undefined;
        } | undefined;
        keymap?: {
            unsavedChangesStatusChanged?: boolean | undefined;
        } | undefined;
        lighting?: {
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
        } | undefined;
    } & {
        core?: ({
            lockStateChanged?: import("./core").LockState | undefined;
        } & {
            lockStateChanged?: import("./core").LockState | undefined;
        } & { [K_8 in Exclude<keyof I_1["core"], "lockStateChanged">]: never; }) | undefined;
        keymap?: ({
            unsavedChangesStatusChanged?: boolean | undefined;
        } & {
            unsavedChangesStatusChanged?: boolean | undefined;
        } & { [K_9 in Exclude<keyof I_1["keymap"], "unsavedChangesStatusChanged">]: never; }) | undefined;
        lighting?: ({
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
                } & { [K_10 in Exclude<keyof I_1["lighting"]["rgbUnderglowStateChanged"]["color"], keyof import("./lighting").HsbColor>]: never; }) | undefined;
                effect?: number | undefined;
                speed?: number | undefined;
                effectCount?: number | undefined;
                effectNames?: (string[] & string[] & { [K_11 in Exclude<keyof I_1["lighting"]["rgbUnderglowStateChanged"]["effectNames"], keyof string[]>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I_1["lighting"]["rgbUnderglowStateChanged"], keyof import("./lighting").RgbUnderglowState>]: never; }) | undefined;
            backlightStateChanged?: ({
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & {
                on?: boolean | undefined;
                brightness?: number | undefined;
            } & { [K_13 in Exclude<keyof I_1["lighting"]["backlightStateChanged"], keyof import("./lighting").BacklightState>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I_1["lighting"], keyof Notification12>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof Notification>]: never; }>(object: I_1): Notification;
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

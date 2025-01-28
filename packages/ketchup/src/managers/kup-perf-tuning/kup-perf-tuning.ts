import { KupDebug } from '../kup-debug/kup-debug';
import { KupDebugLog } from '../kup-debug/kup-debug-declarations';
import { KupPerfTuningData } from './kup-perf-tuning-declarations';

export class KupPerfTuning {
    data: KupPerfTuningData;

    constructor(data: KupPerfTuningData) {
        this.data = data;
    }
}

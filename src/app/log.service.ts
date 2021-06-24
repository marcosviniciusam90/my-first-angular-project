import { Inject, Injectable } from '@angular/core';

@Injectable()
export class LogService {

    constructor(
        @Inject('logPrefixo') private prefixo: string
    ) {}

    log(msg: string): void {
        console.log(`${this.prefixo}: ${msg}`);
    }
}

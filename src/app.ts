import { spawn, spawnSync } from 'child_process';

let args = process.argv.slice(2);
let registryIndex = -1;
let registryArg = args.find((value, index) => {
    if (value.indexOf('--registry') >= 0) {
        registryIndex = index;
        return true;
    }
});

if (registryIndex >= 0) {
    args[registryIndex] = '--registry=https://registry.npm.taobao.org';
} else {
    args.push('--registry=https://registry.npm.taobao.org');
}

spawnSync(process.platform == 'win32' ? 'npm.cmd' : 'npm', args, { stdio: 'inherit', encoding: 'utf8' });
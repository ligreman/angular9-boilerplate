const {src, dest, series, parallel} = require('gulp');
const del = require('del');
const exec = require('child_process').exec;
const zip = require('gulp-zip');
const appVersion = require('./package.json').version;

// Limpia las carpetas de dist
function cleanDist() {
    return del(['target/dist']);
}

// Limpia las carpetas temporales
function cleanTemp() {
    return del(['.temp/dist']);
}

// Limpia las carpetas temporales
function cleanCucumber() {
    return del(['target/cucumber']);
}

// Ejecuta el build
function ngBuild(cb) {
    // exec('ng build --prod --subresourceIntegrity', function (
    exec('npm run ng-high-memory -- build --prod --subresourceIntegrity', function (
        err,
        stdout,
        stderr
    ) {
        cb(err);
    });
}

// Ejecuta cucumber
function cucumberExecution(cb) {
    exec('npm run cucumber', function (err, stdout, stderr) {
        cb(err);
    });
}

// Ejecuta el report de cucumber
function cucumberReport(cb) {
    exec('npm run cucumber-report', function (err, stdout, stderr) {
        cb(err);
    });
}

// Envía a kiuwan los datos
function kiuwanReport(cb) {
    // Saco la ruta hasta el raíz del proyecto
    let path = __dirname;

    console.log(
        'Generando el informe de Kiuwan [agent.cmd -s "' +
        path +
        '" -n HID_AUD_frontend]'
    );
    console.log('Puede tardar unos minutos');

    exec('agent.cmd -s "' + path + '" -n HID_AUD_frontend', function (
        err,
        stdout,
        stderr
    ) {
        console.log(stdout);

        console.log(stderr);
        cb(err);
    });
}

// Zipea el contenido de target
function zipTarget() {
    return src(['target/dist/**/*.*'], {dot: true})
        .pipe(zip('front_v' + appVersion + '.zip'))
        .pipe(dest('target'));
}

function copyHTAccess() {
    return src(['src/.htaccess'])
        .pipe(dest('target/dist/'));
}

exports.kiuwan = series(kiuwanReport);
exports.cucumber = series(cleanCucumber, cucumberExecution, cucumberReport);
exports.build = series(cleanDist, ngBuild, copyHTAccess, zipTarget);
exports.default = exports.build;

/*
1- Copiar los ficheros sin tests y el package.json solo
2- ejecutar npm install --production
3- comprimir los ficheros y el node_modules y ese es el paquete
*/
